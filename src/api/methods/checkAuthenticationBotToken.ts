import { OkUnion } from '../outputs'

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the
 * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
 * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 * @param {Object} params
 * @param {string} [params.token] - The bot token
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckAuthenticationBotTokenMethod = <ResponseT = OkUnion>(
  params: CheckAuthenticationBotTokenParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckAuthenticationBotTokenParams {
  /** The bot token */
  token?: string
}
