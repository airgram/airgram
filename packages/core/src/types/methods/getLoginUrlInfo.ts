import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LoginUrlInfoUnion } from '../outputs'

export interface GetLoginUrlInfoParams {
  chatId?: number // Chat identifier of the message with the button
  messageId?: number // Message identifier of the message with the button
  buttonId?: number // Button identifier
}

/**
 * Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The
 * method needs to be called when the user presses the button
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the message with the button
 * @param {number} [params.messageId] - Message identifier of the message with the
 * button
 * @param {number} [params.buttonId] - Button identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLoginUrlInfoParams, LoginUrlInfoUnion>>}
 */
export type getLoginUrlInfo = (
  params?: GetLoginUrlInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLoginUrlInfoParams, LoginUrlInfoUnion>>
