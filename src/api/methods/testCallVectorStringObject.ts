import { TestStringInput } from '../inputs'
import { TestVectorStringObjectUnion } from '../outputs'

/**
 * Returns the received vector of objects containing a string; for testing only
 * @param {Object} params
 * @param {TestStringInput[]} [params.x] - Vector of objects to return
 * @param {Object} state
 * @returns {TestVectorStringObjectUnion}
 */
export type TestCallVectorStringObjectMethod = <ResponseT = TestVectorStringObjectUnion>(
  params: TestCallVectorStringObjectParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallVectorStringObjectParams {
  /** Vector of objects to return */
  x?: TestStringInput[]
}
