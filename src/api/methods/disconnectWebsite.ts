import { OkUnion } from '../outputs'

/**
 * Disconnects website from the current user's Telegram account
 * @param {Object} params
 * @param {number | string} [params.websiteId] - Website identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DisconnectWebsiteMethod = <ResponseT = OkUnion>(
  params: DisconnectWebsiteParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DisconnectWebsiteParams {
  /** Website identifier */
  websiteId?: number | string
}
