import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PassportElementsWithErrorsUnion } from '../outputs'

export interface GetPassportAuthorizationFormAvailableElementsParams {
  autorizationFormId?: number // Authorization form identifier
  password?: string // Password of the current user
}

/**
 * Returns already available Telegram Passport elements suitable for completing a Telegram
 * Passport authorization form. Result can be received only once for each authorization
 * form
 * @param {Object} params
 * @param {number} [params.autorizationFormId] - Authorization form identifier
 * @param {string} [params.password] - Password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPassportAuthorizationFormAvailableElementsParams,
 * PassportElementsWithErrorsUnion>>}
 */
export type getPassportAuthorizationFormAvailableElements<ExtensionT> = (
  params?: GetPassportAuthorizationFormAvailableElementsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPassportAuthorizationFormAvailableElementsParams, PassportElementsWithErrorsUnion> & ExtensionT>
