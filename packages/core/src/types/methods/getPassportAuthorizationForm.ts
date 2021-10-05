import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PassportAuthorizationFormUnion } from '../outputs'

export interface GetPassportAuthorizationFormParams {
  botUserId?: number // User identifier of the service's bot
  scope?: string // Telegram Passport element types requested by the service
  publicKey?: string // Service's public key
  nonce?: string // Unique request identifier provided by the service
}

/**
 * Returns a Telegram Passport authorization form for sharing data with a service
 * @param {Object} params
 * @param {number} [params.botUserId] - User identifier of the service's bot
 * @param {string} [params.scope] - Telegram Passport element types requested by
 * the service
 * @param {string} [params.publicKey] - Service's public key
 * @param {string} [params.nonce] - Unique request identifier provided by the service
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPassportAuthorizationFormParams, PassportAuthorizationFormUnion>>}
 */
export type getPassportAuthorizationForm = (
  params?: GetPassportAuthorizationFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPassportAuthorizationFormParams, PassportAuthorizationFormUnion>>
