import { OkUnion } from '../outputs'

/**
 * Disconnects all websites from the current user's Telegram account
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DisconnectAllWebsitesMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
