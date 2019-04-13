import { OkUnion } from '../outputs'

/**
 * Does nothing; for testing only
 * @param {Object} state
 * @returns {OkUnion}
 */
export type TestCallEmptyMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
