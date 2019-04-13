import { StorageStatisticsUnion } from '../outputs'

/**
 * Returns storage usage statistics
 * @param {Object} params
 * @param {number} [params.chatLimit] - Maximum number of chats with the largest
 * storage usage for which separate statistics should be returned. All other chats will
 * be grouped in entries with chat_id == 0. If the chat info database is not used, the
 * chat_limit is ignored and is always set to 0
 * @param {Object} state
 * @returns {StorageStatisticsUnion}
 */
export type GetStorageStatisticsMethod = <ResponseT = StorageStatisticsUnion>(
  params: GetStorageStatisticsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetStorageStatisticsParams {
  /**
   * Maximum number of chats with the largest storage usage for which separate statistics
   * should be returned. All other chats will be grouped in entries with chat_id == 0.
   * If the chat info database is not used, the chat_limit is ignored and is always set
   * to 0
   */
  chatLimit?: number
}
