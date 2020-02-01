import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StorageStatisticsFastUnion } from '../outputs'



/**
 * Quickly returns approximate storage usage statistics. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, StorageStatisticsFastUnion>>}
 */
export type getStorageStatisticsFast = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, StorageStatisticsFastUnion>>
