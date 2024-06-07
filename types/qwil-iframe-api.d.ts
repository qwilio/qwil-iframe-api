type EventListener = (payload?: object) => void

export interface QwilApiProps {
  token: string;
  endpoint: string;
  options?: object;
  width?: string;
  height?: string;
  appDomain?: string;
  replaceTargetContent?: boolean;
  targetElement?: HTMLElement;
  onLoad?: (api: QwilApi) => void;
  onError?: (error: Error) => void;
}

export declare class QwilApi {
  version: string;
  constructor(props: QwilApiProps);
  destroy(): void;
  sendCommand(command: string, payload?: object): void;
  reauthenticate(params: { token: string, endpoint: string, option?: object}): void;
  on(event: string, listener: EventListener): void;
  off(event: string, listener: EventListener): void;
  addListener(event: string, listener: EventListener): void;
  removeListener(event: string, listener: EventListener): void;
}
