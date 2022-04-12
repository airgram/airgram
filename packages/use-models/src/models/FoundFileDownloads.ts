import { DownloadedFileCounts, FileDownload } from '@airgram/core'

/** Contains a list of downloaded files, found by a search */
export class FoundFileDownloadsBaseModel {
  public _: 'foundFileDownloads'

  /** Total number of suitable files, ignoring offset */
  public totalCounts: DownloadedFileCounts

  /** The list of files */
  public files: FileDownload[]

  /** The offset for the next request. If empty, there are no more results */
  public nextOffset: string
}
