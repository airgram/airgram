import { TestVectorIntUnion } from '../outputs'

/**
 * Returns the received vector of numbers; for testing only
 * @param {Object} params
 * @param {number[]} [params.x] - Vector of numbers to return
 * @param {Object} state
 * @returns {TestVectorIntUnion}
 */
export type TestCallVectorIntMethod = <ResponseT = TestVectorIntUnion>(
  params: TestCallVectorIntParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallVectorIntParams {
  /** Vector of numbers to return */
  x?: number[]
}
