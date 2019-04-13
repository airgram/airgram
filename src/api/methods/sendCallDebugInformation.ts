import { OkUnion } from '../outputs'

/**
 * Sends debug information for a call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {string} [params.debugInformation] - Debug information in application-specific
 * format
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SendCallDebugInformationMethod = <ResponseT = OkUnion>(
  params: SendCallDebugInformationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendCallDebugInformationParams {
  /** Call identifier */
  callId?: number
  /** Debug information in application-specific format */
  debugInformation?: string
}
