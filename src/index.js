import EventEmitter from 'events';
import { Transport } from 'qwil-api-transport';
import { LIB_VERSION } from './constants';


let _nextInstanceId = 0;

function getNextInstanceId() {
  return _nextInstanceId++;
}

function createIFrame(params) {
  const {
    parentElement = document.body,
    width = '100%',
    height = '100%',
    url,
    id
  } = params;

  const frameElementId = `QwilFrame${id}`;

  const frame = document.createElement('iframe');
  frame.name = frameElementId;
  frame.id = frameElementId;
  frame.style.border = '0';
  frame.style.width = width;
  frame.style.height = height;
  frame.allow = [
    'clipboard-write'
  ].join('; ');

  frame.src = url;
  return parentElement.appendChild(frame);
}

export default class QwilApi extends EventEmitter {
  version = LIB_VERSION;

  constructor(params) {
    super();

    const {
      token,
      endpoint,
      options = {}, // custom init options sent to embedded ap
      onLoad,
      onError,
      width = '100%',
      height = '100%',
      appDomain = 'sdk.qwil.io',
      targetElement = document.body
    } = params;

    this._ready = false;
    this._id = getNextInstanceId(); // New ID for each API instance

    const transportScope = `channel-${this._id}`;
    const scopeHash = `#scope=${transportScope}`;
    let url = `https://${appDomain}/${scopeHash}`;

    // This is for dev purposes only
    if (options?.customUrl) {
      url = `${options.customUrl}${scopeHash}`;
    }

    this._frame = createIFrame({
      url,
      width,
      height,
      parentElement: targetElement,
      id: this._id
    });

    this._transport = new Transport({
      scope: transportScope,
      window: this._frame.contentWindow,
      eventHandler: this._handleEvent.bind(this)
    });

    // once embedded app signals that it is loaded, we start the auth process
    console.debug('Waiting for app to load');
    this.once('__loaded', () => {
      console.debug('App loaded');
      console.debug('Logging in');
      this._doLogin({ token, endpoint, options })
        .then(() => {
          console.debug('Login successful');
          this._ready = true;
          this.emit('ready');
          if (onLoad) {
            onLoad(this);
          }
        })
        .catch((err) => {
          console.error('App login failed', err);
          if (onError) {
            onError(err);
          }
        });
    });
  }

  sendCommand(command, payload) {
    if (!this._ready) {
      console.error(`Command "${command}" sent before API is ready`);
    } else {
      this._transport.sendEvent('command', { command, payload });
    }
  }

  reauthenticate({ token, endpoint, options }) {
    return this._doLogin({ token, endpoint, options });
  }

  _doLogin({ token, endpoint, options }) {
    return this._transport.sendRequest('__login', { token, endpoint, options });
  }

  _handleEvent({ event, payload }) {
    this.emit(event, payload);
  }

  destroy() {
    this.removeAllListeners();
    this._transport.destroy();
    if (this._frame && this._frame.parentNode) {
      this._frame.parentNode.removeChild(this._frame);
    }
  }

}
