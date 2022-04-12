import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallProtocolInput } from '../inputs'
import { CallIdUnion } from '../outputs'

export interface CreateCallParams {
  userId?: number // Identifier of the user to be called
  protocol?: CallProtocolInput // The call protocols supported by the application
  isVideo?: boolean // Pass true to create a video call
}

/**
 * Creates a new call
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the user to be called
 * @param {CallProtocolInput} [params.protocol] - The call protocols supported by
 * the application
 * @param {boolean} [params.isVideo] - Pass true to create a video call
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateCallParams, CallIdUnion>>}
 */
export type createCall = (
  params?: CreateCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateCallParams, CallIdUnion>>
