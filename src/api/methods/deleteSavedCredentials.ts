import { OkUnion } from '../outputs'

/**
 * Deletes saved credentials for all payment provider bots
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteSavedCredentialsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
