import { StorageStatisticsByChat } from './index'

export type StorageStatisticsUnion = StorageStatistics

/** Contains the exact storage usage statistics split by chats and file type */
export interface StorageStatistics {
  _: 'storageStatistics'
  /** Total size of files */
  size: number
  /** Total number of files */
  count: number
  /** Statistics split by chats */
  byChat: StorageStatisticsByChat[]
}
