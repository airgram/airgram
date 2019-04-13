import { TestVectorStringUnion } from '../outputs'

/**
 * For testing only request. Returns the received vector of strings; for testing only
 * @param {Object} params
 * @param {string[]} [params.x] - Vector of strings to return
 * @param {Object} state
 * @returns {TestVectorStringUnion}
 */
export type TestCallVectorStringMethod = <ResponseT = TestVectorStringUnion>(
  params: TestCallVectorStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallVectorStringParams {
  /** Vector of strings to return */
  x?: string[]
}
