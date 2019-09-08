import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationBotTokenParams {
  token?: string // The bot token
}

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the
 * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
 * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 * @param {Object} params
 * @param {string} [params.token] - The bot token
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationBotTokenParams, OkUnion>>}
 */
export type checkAuthenticationBotToken<ExtensionT> = (
  params?: CheckAuthenticationBotTokenParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationBotTokenParams, OkUnion> & ExtensionT>
