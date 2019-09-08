import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CallProtocolInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface AcceptCallParams {
  callId?: number // Call identifier
  protocol?: CallProtocolInput // Description of the call protocols supported by the client
}

/**
 * Accepts an incoming call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
 * supported by the client
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AcceptCallParams, OkUnion>>}
 */
export type acceptCall<ExtensionT> = (
  params?: AcceptCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AcceptCallParams, OkUnion> & ExtensionT>
