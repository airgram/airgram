import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageFileTypeUnion } from '../outputs'

export interface GetMessageFileTypeParams {
  messageFileHead?: string // Beginning of the message file; up to 100 first lines
}

/**
 * Returns information about a file with messages exported from another app
 * @param {Object} params
 * @param {string} [params.messageFileHead] - Beginning of the message file; up to
 * 100 first lines
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageFileTypeParams, MessageFileTypeUnion>>}
 */
export type getMessageFileType = (
  params?: GetMessageFileTypeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageFileTypeParams, MessageFileTypeUnion>>
