import { OkUnion } from '../outputs'

/**
 * Clears all imported contacts, contacts list remains unchanged
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ClearImportedContactsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
