import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendersUnion } from '../outputs'

export interface GetBlockedMessageSendersParams {
  offset?: number // Number of users and chats to skip in the result; must be non-negative
  limit?: number // The maximum number of users and chats to return; up to 100
}

/**
 * Returns users and chats that were blocked by the current user
 * @param {Object} params
 * @param {number} [params.offset] - Number of users and chats to skip in the result;
 * must be non-negative
 * @param {number} [params.limit] - The maximum number of users and chats to return;
 * up to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBlockedMessageSendersParams, MessageSendersUnion>>}
 */
export type getBlockedMessageSenders = (
  params?: GetBlockedMessageSendersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBlockedMessageSendersParams, MessageSendersUnion>>
