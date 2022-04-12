import { DownloadedFileCounts, FileDownload } from '@airgram/core'

/**
 * A file was added to the file download list. This update is sent only after file download
 * list is loaded for the first time
 */
export class UpdateFileAddedToDownloadsBaseModel {
  public _: 'updateFileAddedToDownloads'

  /** The added file download */
  public fileDownload: FileDownload

  /** New number of being downloaded and recently downloaded files found */
  public counts: DownloadedFileCounts
}
