import { TestIntInput } from '../inputs'
import { TestVectorIntObjectUnion } from '../outputs'

/**
 * Returns the received vector of objects containing a number; for testing only
 * @param {Object} params
 * @param {TestIntInput[]} [params.x] - Vector of objects to return
 * @param {Object} state
 * @returns {TestVectorIntObjectUnion}
 */
export type TestCallVectorIntObjectMethod = <ResponseT = TestVectorIntObjectUnion>(
  params: TestCallVectorIntObjectParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallVectorIntObjectParams {
  /** Vector of objects to return */
  x?: TestIntInput[]
}
