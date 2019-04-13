import { TestIntUnion } from '../outputs'

/**
 * Returns the squared received number; for testing only
 * @param {Object} params
 * @param {number} [params.x] - Number to square
 * @param {Object} state
 * @returns {TestIntUnion}
 */
export type TestSquareIntMethod = <ResponseT = TestIntUnion>(
  params: TestSquareIntParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestSquareIntParams {
  /** Number to square */
  x?: number
}
