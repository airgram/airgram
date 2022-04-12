/** Contains number of being downloaded and recently downloaded files found */
export class DownloadedFileCountsBaseModel {
  public _: 'downloadedFileCounts'

  /** Number of active file downloads found, including paused */
  public activeCount: number

  /** Number of paused file downloads found */
  public pausedCount: number

  /** Number of completed file downloads found */
  public completedCount: number
}
