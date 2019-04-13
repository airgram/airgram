import { FileTypeInputUnion } from '../inputs'
import { StorageStatisticsUnion } from '../outputs'

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
 * Secret thumbnails can't be deleted
 * @param {Object} params
 * @param {number} [params.size] - Limit on the total size of files after deletion.
 * Pass -1 to use the default limit
 * @param {number} [params.ttl] - Limit on the time that has passed since the last
 * time a file was accessed (or creation time for some filesystems). Pass -1 to use
 * the default limit
 * @param {number} [params.count] - Limit on the total count of files after deletion.
 * Pass -1 to use the default limit
 * @param {number} [params.immunityDelay] - The amount of time after the creation
 * of a file during which it can't be deleted, in seconds. Pass -1 to use the default
 * value
 * @param {FileTypeInputUnion[]} [params.fileTypes] - If not empty, only files with
 * the given type(s) are considered. By default, all types except thumbnails, profile
 * photos, stickers and wallpapers are deleted
 * @param {number[]} [params.chatIds] - If not empty, only files from the given chats
 * are considered. Use 0 as chat identifier to delete files not belonging to any chat
 * (e.g., profile photos)
 * @param {number[]} [params.excludeChatIds] - If not empty, files from the given
 * chats are excluded. Use 0 as chat identifier to exclude all files not belonging to
 * any chat (e.g., profile photos)
 * @param {number} [params.chatLimit] - Same as in getStorageStatistics. Affects
 * only returned statistics
 * @param {Object} state
 * @returns {StorageStatisticsUnion}
 */
export type OptimizeStorageMethod = <ResponseT = StorageStatisticsUnion>(
  params: OptimizeStorageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface OptimizeStorageParams {
  /** Limit on the total size of files after deletion. Pass -1 to use the default limit */
  size?: number
  /**
   * Limit on the time that has passed since the last time a file was accessed (or creation
   * time for some filesystems). Pass -1 to use the default limit
   */
  ttl?: number
  /** Limit on the total count of files after deletion. Pass -1 to use the default limit */
  count?: number
  /**
   * The amount of time after the creation of a file during which it can't be deleted,
   * in seconds. Pass -1 to use the default value
   */
  immunityDelay?: number
  /**
   * If not empty, only files with the given type(s) are considered. By default, all types
   * except thumbnails, profile photos, stickers and wallpapers are deleted
   */
  fileTypes?: FileTypeInputUnion[]
  /**
   * If not empty, only files from the given chats are considered. Use 0 as chat identifier
   * to delete files not belonging to any chat (e.g., profile photos)
   */
  chatIds?: number[]
  /**
   * If not empty, files from the given chats are excluded. Use 0 as chat identifier to
   * exclude all files not belonging to any chat (e.g., profile photos)
   */
  excludeChatIds?: number[]
  /** Same as in getStorageStatistics. Affects only returned statistics */
  chatLimit?: number
}
