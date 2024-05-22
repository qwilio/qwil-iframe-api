import Postis from 'postis';


export class PostMessageTransportBackend {
  constructor(params) {
    const { scope, window } = params;
    this.postis = Postis({ scope, window })

    this._handleMessage = (message) => {
      // placeholder handler until actual one set with setMessageHandler()
      console.error('Unhandled incoming message', message);
    }

    // Only listen to "api" messages
    this.postis.listen('api', message => this._handleMessage(message));
  }

  send(message) {
    this.postis.send({
      // Outgoing payload also encapsulated within "api" messages
      method: 'api',
      params: message,
    })
  }

  setMessageHandler(callback) {
    this._handleMessage = callback;
  }

  destroy() {
    this.postis.destroy();
  }
}
