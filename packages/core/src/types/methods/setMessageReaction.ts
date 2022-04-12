import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetMessageReactionParams {
  chatId?: number // Identifier of the chat to which the message belongs
  messageId?: number // Identifier of the message
  reaction?: string // Text representation of the new chosen reaction. Can be an empty string or the currently chosen non-big reaction to remove the reaction
  isBig?: boolean // Pass true if the reaction is added with a big animation
}

/**
 * Changes chosen reaction for a message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which the message
 * belongs
 * @param {number} [params.messageId] - Identifier of the message
 * @param {string} [params.reaction] - Text representation of the new chosen reaction.
 * Can be an empty string or the currently chosen non-big reaction to remove the reaction
 * @param {boolean} [params.isBig] - Pass true if the reaction is added with a big
 * animation
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetMessageReactionParams, OkUnion>>}
 */
export type setMessageReaction = (
  params?: SetMessageReactionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetMessageReactionParams, OkUnion>>
