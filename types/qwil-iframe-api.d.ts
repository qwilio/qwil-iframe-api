import { RequestErrorDetails } from "qwil-api-transport";

type EventListener = (payload?: object) => void

export interface QwilApiProps {
  token: string;
  endpoint: string;
  targetElement: HTMLElement;
  options?: {
    path?: string;
    customUrl?: string;

    theme?: {
      bubbleBgColour?: string;
      bubbleTextColour?: string;
      bubbleLinkColour?: string;
      bubbleBgColour2?: string;
      bubbleTextColour2?: string;
      bubbleLinkColour2?: string;
    };

    contactsTappable?: boolean,
    imagePreview?: boolean,
    pdfPreview?: boolean,
    emitDownloads?: boolean,
    emitMeetingJoin?: boolean,

    chatListTitle?: string,
    chatListLogo?: string,
    emitChatListBack?: boolean,
    disableChatBack?: boolean,
  };
  width?: string;
  height?: string;
  appDomain?: string;
  replaceTargetContent?: boolean;
  onLoad?: (api: QwilApi) => void;
  onError?: (error: RequestErrorDetails) => void;
}

export type QwilApiEvents =
  | 'auth-expired'
  | 'app-error'
  | 'click-on-contact'
  | 'chat-list-back'
  | 'download-request'
  | 'meeting-join';

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
