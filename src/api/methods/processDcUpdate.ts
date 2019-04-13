import { OkUnion } from '../outputs'

/**
 * Handles a DC_UPDATE push service notification. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.dc] - Value of the "dc" parameter of the notification
 * @param {string} [params.addr] - Value of the "addr" parameter of the notification
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ProcessDcUpdateMethod = <ResponseT = OkUnion>(
  params: ProcessDcUpdateParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ProcessDcUpdateParams {
  /** Value of the "dc" parameter of the notification */
  dc?: string
  /** Value of the "addr" parameter of the notification */
  addr?: string
}
