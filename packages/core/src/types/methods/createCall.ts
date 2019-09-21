import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallProtocolInput } from '../inputs'
import { CallIdUnion } from '../outputs'

export interface CreateCallParams {
  userId?: number // Identifier of the user to be called
  protocol?: CallProtocolInput // Description of the call protocols supported by the client
}

/**
 * Creates a new call
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the user to be called
 * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
 * supported by the client
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateCallParams, CallIdUnion>>}
 */
export type createCall = (
  params?: CreateCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateCallParams, CallIdUnion>>
