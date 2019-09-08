import { StorageStatisticsByFileType } from '@airgram/core'

/** Contains the storage usage statistics for a specific chat */
export class StorageStatisticsByChatBaseModel {
  public _: 'storageStatisticsByChat'

  /** Chat identifier; 0 if none */
  public chatId: number

  /** Total size of the files in the chat */
  public size: number

  /** Total number of files in the chat */
  public count: number

  /** Statistics split by file types */
  public byFileType: StorageStatisticsByFileType[]
}
