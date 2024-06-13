import { RequestErrorDetails } from "qwil-api-transport";

type EventListener = (payload?: object) => void

export interface QwilApiProps {
  token: string;
  endpoint: string;
  targetElement: HTMLElement;
  options?: {
    path?: string;
    customUrl?: string;

    contactsTappable?: boolean,
    imagePreview?: boolean,
    pdfPreview?: boolean,
    emitDownloads?: boolean,
  };
  width?: string;
  height?: string;
  appDomain?: string;
  replaceTargetContent?: boolean;
  onLoad?: (api: QwilApi) => void;
  onError?: (error: RequestErrorDetails) => void;
}

export type QwilApiEvents = 'auth-expired' | 'app-error' | 'click-on-contact' | 'download-request';

export default class QwilApi {
  version: string;
  constructor(props: QwilApiProps);
  destroy(): void;
  sendCommand(command: string, payload?: object): void;
  reauthenticate(params: { token: string, endpoint: string, option?: object}): void;
  on(event: QwilApiEvents, listener: EventListener): void;
  off(event: QwilApiEvents, listener: EventListener): void;
  addListener(event: QwilApiEvents, listener: EventListener): void;
  removeListener(event: QwilApiEvents, listener: EventListener): void;
}
