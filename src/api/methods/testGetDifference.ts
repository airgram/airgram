import { OkUnion } from '../outputs'

/**
 * Forces an updates.getDifference call to the Telegram servers; for testing only
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TestGetDifferenceMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
