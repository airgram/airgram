import { OkUnion } from '../outputs'

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 * @param {Object} params
 * @param {string} [params.code] - The verification code received via SMS, Telegram
 * message, phone call, or flash call
 * @param {string} [params.firstName] - If the user is not yet registered, the first
 * name of the user; 1-255 characters
 * @param {string} [params.lastName] - If the user is not yet registered; the last
 * name of the user; optional; 0-255 characters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CheckAuthenticationCodeMethod = <ResponseT = OkUnion>(
  params: CheckAuthenticationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckAuthenticationCodeParams {
  /** The verification code received via SMS, Telegram message, phone call, or flash call */
  code?: string
  /** If the user is not yet registered, the first name of the user; 1-255 characters */
  firstName?: string
  /** If the user is not yet registered; the last name of the user; optional; 0-255 characters */
  lastName?: string
}
