import { FileTypeInputUnion, InputFileInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

/**
 * Asynchronously uploads a file to the cloud without sending it in a message. updateFile
 * will be used to notify about upload progress and successful completion of the upload.
 * The file will not have a persistent remote identifier until it will be sent in a
 * message
 * @param {Object} params
 * @param {InputFileInputUnion} [params.file] - File to upload
 * @param {FileTypeInputUnion} [params.fileType] - File type
 * @param {number} [params.priority] - Priority of the upload (1-32). The higher
 * the priority, the earlier the file will be uploaded. If the priorities of two files
 * are equal, then the first one for which uploadFile was called will be uploaded first
 * @param {Object} state
 * @returns {FileUnion}
 */
export type UploadFileMethod = <ResponseT = FileUnion>(
  params: UploadFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UploadFileParams {
  /** File to upload */
  file?: InputFileInputUnion
  /** File type */
  fileType?: FileTypeInputUnion
  /**
   * Priority of the upload (1-32). The higher the priority, the earlier the file will
   * be uploaded. If the priorities of two files are equal, then the first one for which
   * uploadFile was called will be uploaded first
   */
  priority?: number
}
