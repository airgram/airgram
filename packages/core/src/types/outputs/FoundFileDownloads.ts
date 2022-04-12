import { DownloadedFileCounts, FileDownload } from './index'

export type FoundFileDownloadsUnion = FoundFileDownloads

/** Contains a list of downloaded files, found by a search */
export interface FoundFileDownloads {
  _: 'foundFileDownloads'
  /** Total number of suitable files, ignoring offset */
  totalCounts: DownloadedFileCounts
  /** The list of files */
  files: FileDownload[]
  /** The offset for the next request. If empty, there are no more results */
  nextOffset: string
}
