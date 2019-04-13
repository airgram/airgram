import { OkUnion } from '../outputs'

/**
 * Toggles sender signatures messages sent in a channel; requires appropriate administrator
 * rights in the channel.
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the channel
 * @param {boolean} [params.signMessages] - New value of sign_messages
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleSupergroupSignMessagesMethod = <ResponseT = OkUnion>(
  params: ToggleSupergroupSignMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleSupergroupSignMessagesParams {
  /** Identifier of the channel */
  supergroupId?: number
  /** New value of sign_messages */
  signMessages?: boolean
}
