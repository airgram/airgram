import { StorageStatisticsByChat } from '../outputs'

/** Contains the exact storage usage statistics split by chats and file type */
export class StorageStatisticsBaseModel {
  public _: 'storageStatistics'
  /** Total size of files */
  public size: number
  /** Total number of files */
  public count: number
  /** Statistics split by chats */
  public byChat: StorageStatisticsByChat[]
}
