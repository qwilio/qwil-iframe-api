import { PostMessageTransportBackend } from './backends';
import {
  MESSAGE_TYPE_EVENT,
  MESSAGE_TYPE_REQUEST,
  MESSAGE_TYPE_RESPONSE
} from './constants';

export default class Transport {
  constructor({ scope, window, eventHandler, requestHandler } = {}) {
    this._reqId = 0;
    this._responseHandlers = new Map();
    this._eventHandler = eventHandler;
    this._requestHandler = requestHandler;
    this._backend = new PostMessageTransportBackend({ scope, window });
    this._backend.setMessageHandler(this._onMessageReceived.bind(this));
  }

  sendEvent(event, payload) {
    this._backend.send({
      type: MESSAGE_TYPE_EVENT,
      data: { event, payload },
    })
  }

  sendRequest(request, payload) {
    const id = this._reqId++;
    return new Promise((resolve, reject) => {
      // prepare handler that will resolve promise when the app returns
      // a response event with a matching id.
      this._responseHandlers.set(id, ({ error, result }) => {
        if (typeof result !== 'undefined') {
          resolve(result);
        } else if (typeof error !== 'undefined') {
          reject(error);
        } else { // no response
          reject(new Error(`Unexpected response format for ${id}`));
        }
      });

      try {
        this._backend.send({
          type: MESSAGE_TYPE_REQUEST,
          data: { id, request, payload },
        });
      } catch (error) {
        this._responseHandlers.delete(id);
        reject(error);
      }
    });
  }

  _onMessageReceived(message) {
    const { type, data } = message;
    if (type === MESSAGE_TYPE_EVENT) {
      const { event, payload } = data;
      if (!event) {
        console.error('Received message with unknown format', message);
      } else {
        this._eventHandler({ event, payload });
      }
    } else if (type === MESSAGE_TYPE_REQUEST) {
      const { id, request, payload } = data;
      const handler = this._requestHandler;
      if (handler) {
        handler({
          request,
          payload,
          onComplete: ({ result, error }) => {
            this._backend.send({
              type: MESSAGE_TYPE_RESPONSE,
              data: { id, result, error },
            })
          }
        })
      }
    } else if (type === MESSAGE_TYPE_RESPONSE) {
      const { id, error, result } = data;
      const handler = this._responseHandlers.get(id);
      if (handler) {
        handler({ error, result });
        this._responseHandlers.delete(id);
      } else {
        console.error(`Unexpected response id ${id}`);
      }
    } else {
      console.error(`Received message with invalid type ${type}`);
    }
  }

  destroy() {
    this._backend.destroy();
  }
}
