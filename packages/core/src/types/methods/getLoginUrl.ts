import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetLoginUrlParams {
  chatId?: number // Chat identifier of the message with the button
  messageId?: number // Message identifier of the message with the button
  buttonId?: number // Button identifier
  allowWriteAccess?: boolean // Pass true to allow the bot to send messages to the current user
}

/**
 * Returns an HTTP URL which can be used to automatically authorize the user on a website
 * after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl. Use the
 * method getLoginUrlInfo to find whether a prior user confirmation is needed. If an
 * error is returned, then the button must be handled as an ordinary URL button
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message with the button
 * @param {number} [params.messageId] - Message identifier of the message with the
 * button
 * @param {number} [params.buttonId] - Button identifier
 * @param {boolean} [params.allowWriteAccess] - Pass true to allow the bot to send
 * messages to the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLoginUrlParams, HttpUrlUnion>>}
 */
export type getLoginUrl = (
  params?: GetLoginUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLoginUrlParams, HttpUrlUnion>>
