import { CountUnion } from '../outputs'

/**
 * Returns the total number of imported contacts
 * @param {Object} state
 * @returns {CountUnion}
 */
export type GetImportedContactCountMethod = <ResponseT = CountUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
