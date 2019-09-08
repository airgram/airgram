import { ApiRequestOptions, ApiResponse } from '../airgram'
import { DatabaseStatisticsUnion } from '../outputs'

/**
 * Returns database statistics
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, DatabaseStatisticsUnion>>}
 */
export type getDatabaseStatistics<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, DatabaseStatisticsUnion> & ExtensionT>
