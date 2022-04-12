export type DownloadedFileCountsUnion = DownloadedFileCounts

/** Contains number of being downloaded and recently downloaded files found */
export interface DownloadedFileCounts {
  _: 'downloadedFileCounts'
  /** Number of active file downloads found, including paused */
  activeCount: number
  /** Number of paused file downloads found */
  pausedCount: number
  /** Number of completed file downloads found */
  completedCount: number
}
