import { OrderInfoUnion } from '../outputs'

/**
 * Returns saved order info, if any
 * @param {Object} state
 * @returns {OrderInfoUnion}
 */
export type GetSavedOrderInfoMethod = <ResponseT = OrderInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
