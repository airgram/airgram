import { FileUnion } from '../outputs'

/**
 * Asynchronously downloads a file from the cloud. updateFile will be used to notify
 * about the download progress and successful completion of the download. Returns file
 * state just after the download has been started
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to download
 * @param {number} [params.priority] - Priority of the download (1-32). The higher
 * the priority, the earlier the file will be downloaded. If the priorities of two files
 * are equal, then the last one for which downloadFile was called will be downloaded
 * first
 * @param {Object} state
 * @returns {FileUnion}
 */
export type DownloadFileMethod = <ResponseT = FileUnion>(
  params: DownloadFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DownloadFileParams {
  /** Identifier of the file to download */
  fileId?: number
  /**
   * Priority of the download (1-32). The higher the priority, the earlier the file will
   * be downloaded. If the priorities of two files are equal, then the last one for which
   * downloadFile was called will be downloaded first
   */
  priority?: number
}
