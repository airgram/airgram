import { PassportElementTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sends a Telegram Passport authorization form, effectively sharing data with the service
 * @param {Object} params
 * @param {number} [params.autorizationFormId] - Authorization form identifier
 * @param {PassportElementTypeInputUnion[]} [params.types] - Types of Telegram Passport
 * elements chosen by user to complete the authorization form
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SendPassportAuthorizationFormMethod = <ResponseT = OkUnion>(
  params: SendPassportAuthorizationFormParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendPassportAuthorizationFormParams {
  /** Authorization form identifier */
  autorizationFormId?: number
  /**
   * Types of Telegram Passport elements chosen by user to complete the authorization
   * form
   */
  types?: PassportElementTypeInputUnion[]
}
