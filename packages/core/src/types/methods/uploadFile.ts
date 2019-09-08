import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileTypeInputUnion, InputFileInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

export interface UploadFileParams {
  file?: InputFileInputUnion // File to upload
  fileType?: FileTypeInputUnion // File type
  priority?: number // Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two files are equal, then the first one for which uploadFile was called will be uploaded first
}

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
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UploadFileParams, FileUnion>>}
 */
export type uploadFile<ExtensionT> = (
  params?: UploadFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UploadFileParams, FileUnion> & ExtensionT>
