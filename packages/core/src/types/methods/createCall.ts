import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallProtocolInput } from '../inputs'
import { CallIdUnion } from '../outputs'

export interface CreateCallParams {
  userId?: number // Identifier of the user to be called
  protocol?: CallProtocolInput // The call protocols supported by the application
  isVideo?: boolean // True, if a video call needs to be created
}

/**
 * Creates a new call
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the user to be called
 * @param {CallProtocolInput} [params.protocol] - The call protocols supported by
 * the application
 * @param {boolean} [params.isVideo] - True, if a video call needs to be created
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateCallParams, CallIdUnion>>}
 */
export type createCall = (
  params?: CreateCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateCallParams, CallIdUnion>>
