import { DownloadedFileCounts } from '@airgram/core'

/**
 * A file was removed from the file download list. This update is sent only after file
 * download list is loaded for the first time
 */
export class UpdateFileRemovedFromDownloadsBaseModel {
  public _: 'updateFileRemovedFromDownloads'

  /** File identifier */
  public fileId: number

  /** New number of being downloaded and recently downloaded files found */
  public counts: DownloadedFileCounts
}
