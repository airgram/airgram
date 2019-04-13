import { CallProtocolInput } from '../inputs'
import { CallIdUnion } from '../outputs'

/**
 * Creates a new call
 * @param {Object} params
 * @param {number} [params.userId] - Identifier of the user to be called
 * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
 * supported by the client
 * @param {Object} state
 * @returns {CallIdUnion}
 */
export type CreateCallMethod = <ResponseT = CallIdUnion>(
  params: CreateCallParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CreateCallParams {
  /** Identifier of the user to be called */
  userId?: number
  /** Description of the call protocols supported by the client */
  protocol?: CallProtocolInput
}
