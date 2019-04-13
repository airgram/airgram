import { OkUnion } from '../outputs'

/**
 * Sends a simple network request to the Telegram servers; for testing only
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TestNetworkMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
