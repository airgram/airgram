import { CallProtocolInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Accepts an incoming call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
 * supported by the client
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AcceptCallMethod = <ResponseT = OkUnion>(
  params: AcceptCallParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AcceptCallParams {
  /** Call identifier */
  callId?: number
  /** Description of the call protocols supported by the client */
  protocol?: CallProtocolInput
}
