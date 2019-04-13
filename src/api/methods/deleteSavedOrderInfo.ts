import { OkUnion } from '../outputs'

/**
 * Deletes saved order info
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteSavedOrderInfoMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
