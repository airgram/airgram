import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StorageStatisticsUnion } from '../outputs'

export interface GetStorageStatisticsParams {
  chatLimit?: number // Maximum number of chats with the largest storage usage for which separate statistics should be returned. All other chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and is always set to 0
}

/**
 * Returns storage usage statistics. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.chatLimit] - Maximum number of chats with the largest
 * storage usage for which separate statistics should be returned. All other chats will
 * be grouped in entries with chat_id == 0. If the chat info database is not used, the
 * chat_limit is ignored and is always set to 0
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStorageStatisticsParams, StorageStatisticsUnion>>}
 */
export type getStorageStatistics<ExtensionT> = (
  params?: GetStorageStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetStorageStatisticsParams, StorageStatisticsUnion> & ExtensionT>
