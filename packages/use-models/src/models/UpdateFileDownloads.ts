/** The state of the file download list has changed */
export class UpdateFileDownloadsBaseModel {
  public _: 'updateFileDownloads'

  /** Total size of files in the file download list, in bytes */
  public totalSize: number

  /** Total number of files in the file download list */
  public totalCount: number

  /** Total downloaded size of files in the file download list, in bytes */
  public downloadedSize: number
}
