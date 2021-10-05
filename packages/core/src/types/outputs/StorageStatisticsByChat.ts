import { StorageStatisticsByFileType } from './index'

export type StorageStatisticsByChatUnion = StorageStatisticsByChat

/** Contains the storage usage statistics for a specific chat */
export interface StorageStatisticsByChat {
  _: 'storageStatisticsByChat'
  /** Chat identifier; 0 if none */
  chatId: number
  /** Total size of the files in the chat, in bytes */
  size: number
  /** Total number of files in the chat */
  count: number
  /** Statistics split by file types */
  byFileType: StorageStatisticsByFileType[]
}
