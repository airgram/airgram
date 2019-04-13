import { TestStringUnion } from '../outputs'

/**
 * Returns the received string; for testing only
 * @param {Object} params
 * @param {string} [params.x] - String to return
 * @param {Object} state
 * @returns {TestStringUnion}
 */
export type TestCallStringMethod = <ResponseT = TestStringUnion>(
  params: TestCallStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallStringParams {
  /** String to return */
  x?: string
}
