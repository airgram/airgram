import { UpdateUnion } from '../outputs'

/**
 * Does nothing and ensures that the Update object is used; for testing only
 * @param {Object} state
 * @returns {UpdateUnion}
 */
export type TestUseUpdateMethod = <ResponseT = UpdateUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
