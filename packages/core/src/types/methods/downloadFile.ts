import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileUnion } from '../outputs'

export interface DownloadFileParams {
  fileId?: number // Identifier of the file to download
  priority?: number // Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile was called will be downloaded first
  offset?: number // The starting position from which the file should be downloaded
  limit?: number // Number of bytes which should be downloaded starting from the "offset" position before the download will be automatically cancelled; use 0 to download without a limit
  synchronous?: boolean // If false, this request returns file state just after the download has been started. If true, this request returns file state only after the download has succeeded, has failed, has been cancelled or a new downloadFile request with different offset/limit parameters was sent
}

/**
 * Downloads a file from the cloud. Download progress and completion of the download
 * will be notified through updateFile updates
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to download
 * @param {number} [params.priority] - Priority of the download (1-32). The higher
 * the priority, the earlier the file will be downloaded. If the priorities of two files
 * are equal, then the last one for which downloadFile was called will be downloaded
 * first
 * @param {number} [params.offset] - The starting position from which the file should
 * be downloaded
 * @param {number} [params.limit] - Number of bytes which should be downloaded starting
 * from the "offset" position before the download will be automatically cancelled; use
 * 0 to download without a limit
 * @param {boolean} [params.synchronous] - If false, this request returns file state
 * just after the download has been started. If true, this request returns file state
 * only after the download has succeeded, has failed, has been cancelled or a new downloadFile
 * request with different offset/limit parameters was sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DownloadFileParams, FileUnion>>}
 */
export type downloadFile<ExtensionT> = (
  params?: DownloadFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DownloadFileParams, FileUnion> & ExtensionT>
