import { OkUnion } from '../outputs'

/**
 * Stops the downloading of a file. If a file has already been downloaded, does nothing
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of a file to stop downloading
 * @param {boolean} [params.onlyIfPending] - Pass true to stop downloading only if
 * it hasn't been started, i.e. request hasn't been sent to server
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CancelDownloadFileMethod = <ResponseT = OkUnion>(
  params: CancelDownloadFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CancelDownloadFileParams {
  /** Identifier of a file to stop downloading */
  fileId?: number
  /**
   * Pass true to stop downloading only if it hasn't been started, i.e. request hasn't
   * been sent to server
   */
  onlyIfPending?: boolean
}
