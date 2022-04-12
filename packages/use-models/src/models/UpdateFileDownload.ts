import { DownloadedFileCounts } from '@airgram/core'

/**
 * A file download was changed. This update is sent only after file download list is
 * loaded for the first time
 */
export class UpdateFileDownloadBaseModel {
  public _: 'updateFileDownload'

  /** File identifier */
  public fileId: number

  /**
   * Point in time (Unix timestamp) when the file downloading was completed; 0 if the
   * file downloading isn't completed
   */
  public completeDate: number

  /** True, if downloading of the file is paused */
  public isPaused: boolean

  /** New number of being downloaded and recently downloaded files found */
  public counts: DownloadedFileCounts
}
