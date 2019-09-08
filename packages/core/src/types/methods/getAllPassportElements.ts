import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PassportElementsUnion } from '../outputs'

export interface GetAllPassportElementsParams {
  password?: string // Password of the current user
}

/**
 * Returns all available Telegram Passport elements
 * @param {Object} params
 * @param {string} [params.password] - Password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetAllPassportElementsParams, PassportElementsUnion>>}
 */
export type getAllPassportElements<ExtensionT> = (
  params?: GetAllPassportElementsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetAllPassportElementsParams, PassportElementsUnion> & ExtensionT>
