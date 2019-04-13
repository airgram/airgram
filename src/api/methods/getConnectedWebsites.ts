import { ConnectedWebsitesUnion } from '../outputs'

/**
 * Returns all website where the current user used Telegram to log in
 * @param {Object} state
 * @returns {ConnectedWebsitesUnion}
 */
export type GetConnectedWebsitesMethod = <ResponseT = ConnectedWebsitesUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
