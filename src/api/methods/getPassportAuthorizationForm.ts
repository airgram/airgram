import { PassportAuthorizationFormUnion } from '../outputs'

/**
 * Returns a Telegram Passport authorization form for sharing data with a service
 * @param {Object} params
 * @param {number} [params.botUserId] - User identifier of the service's bot
 * @param {string} [params.scope] - Telegram Passport element types requested by
 * the service
 * @param {string} [params.publicKey] - Service's public_key
 * @param {string} [params.nonce] - Authorization form nonce provided by the service
 * @param {string} [params.password] - Password of the current user
 * @param {Object} state
 * @returns {PassportAuthorizationFormUnion}
 */
export type GetPassportAuthorizationFormMethod = <ResponseT = PassportAuthorizationFormUnion>(
  params: GetPassportAuthorizationFormParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPassportAuthorizationFormParams {
  /** User identifier of the service's bot */
  botUserId?: number
  /** Telegram Passport element types requested by the service */
  scope?: string
  /** Service's public_key */
  publicKey?: string
  /** Authorization form nonce provided by the service */
  nonce?: string
  /** Password of the current user */
  password?: string
}
