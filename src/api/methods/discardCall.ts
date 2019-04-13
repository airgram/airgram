import { OkUnion } from '../outputs'

/**
 * Discards a call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {boolean} [params.isDisconnected] - True, if the user was disconnected
 * @param {number} [params.duration] - The call duration, in seconds
 * @param {number | string} [params.connectionId] - Identifier of the connection
 * used during the call
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DiscardCallMethod = <ResponseT = OkUnion>(
  params: DiscardCallParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DiscardCallParams {
  /** Call identifier */
  callId?: number
  /** True, if the user was disconnected */
  isDisconnected?: boolean
  /** The call duration, in seconds */
  duration?: number
  /** Identifier of the connection used during the call */
  connectionId?: number | string
}
