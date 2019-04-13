import { TextUnion } from '../outputs'

/**
 * Returns the default text for invitation messages to be used as a placeholder when
 * the current user invites friends to Telegram
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetInviteTextMethod = <ResponseT = TextUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
