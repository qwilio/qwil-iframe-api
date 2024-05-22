/**
 * Message type for event messages.
 *
 * Expected message structure of this type:
 * {
 *   type: MESSAGE_TYPE_EVENT,
 *   data: {
 *     event: string, // event name
 *     payload?: object, // event payload
 *   }
 * }
 *
 * @type {string}
 */
export const MESSAGE_TYPE_EVENT = 'event';

/**
 * Message type for request messages.
 *
 * Expected message structure of this type:
 * {
 *   type: MESSAGE_TYPE_REQUEST,
 *   data: {
 *     id: number, // request id
 *     request: string, // request name
 *     payload?: object, // request payload
 *   }
 * }
 *
 * @type {string}
 */
export const MESSAGE_TYPE_REQUEST = 'request';

/**
 * Message type for response messages.
 *
 * Expected message structure of this type:
 * {
 *   type: MESSAGE_TYPE_RESPONSE,
 *   data: {
 *     id: number, // request id
 *     error?: object, // exception object if request resulted in error
 *     result?: object, // results, if request handled successfully
 *   }
 * }
 *
 * @type {string}
 */
export const MESSAGE_TYPE_RESPONSE = 'response';
