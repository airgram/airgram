import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PassportElementTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface DeletePassportElementParams {
  type?: PassportElementTypeInputUnion // Element type
}

/**
 * Deletes a Telegram Passport element
 * @param {Object} params
 * @param {PassportElementTypeInputUnion} [params.type] - Element type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeletePassportElementParams, OkUnion>>}
 */
export type deletePassportElement<ExtensionT> = (
  params?: DeletePassportElementParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeletePassportElementParams, OkUnion> & ExtensionT>
