import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PassportElementTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SendPassportAuthorizationFormParams {
  autorizationFormId?: number // Authorization form identifier
  types?: PassportElementTypeInputUnion[] // Types of Telegram Passport elements chosen by user to complete the authorization form
}

/**
 * Sends a Telegram Passport authorization form, effectively sharing data with the service.
 * This method must be called after getPassportAuthorizationFormAvailableElements if
 * some previously available elements need to be used
 * @param {Object} params
 * @param {number} [params.autorizationFormId] - Authorization form identifier
 * @param {PassportElementTypeInputUnion[]} [params.types] - Types of Telegram Passport
 * elements chosen by user to complete the authorization form
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPassportAuthorizationFormParams, OkUnion>>}
 */
export type sendPassportAuthorizationForm = (
  params?: SendPassportAuthorizationFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPassportAuthorizationFormParams, OkUnion>>
