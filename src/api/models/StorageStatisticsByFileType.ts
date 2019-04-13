import { FileTypeUnion } from '../outputs'

/** Contains the storage usage statistics for a specific file type */
export class StorageStatisticsByFileTypeBaseModel {
  public _: 'storageStatisticsByFileType'
  /** File type */
  public fileType: FileTypeUnion
  /** Total size of the files */
  public size: number
  /** Total number of files */
  public count: number
}
