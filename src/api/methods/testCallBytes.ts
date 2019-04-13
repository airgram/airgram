import { TestBytesUnion } from '../outputs'

/**
 * Returns the received bytes; for testing only
 * @param {Object} params
 * @param {string} [params.x] - Bytes to return
 * @param {Object} state
 * @returns {TestBytesUnion}
 */
export type TestCallBytesMethod = <ResponseT = TestBytesUnion>(
  params: TestCallBytesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface TestCallBytesParams {
  /** Bytes to return */
  x?: string
}
