import { ErrorUnion } from '../outputs'

/**
 * Does nothing and ensures that the Error object is used; for testing only
 * @param {Object} state
 * @returns {ErrorUnion}
 */
export type TestUseErrorMethod = <ResponseT = ErrorUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
