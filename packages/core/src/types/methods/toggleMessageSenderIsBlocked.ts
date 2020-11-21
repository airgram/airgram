import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ToggleMessageSenderIsBlockedParams {
  sender?: MessageSenderInputUnion // Message Sender
  isBlocked?: boolean // New value of is_blocked
}

/**
 * Changes the block state of a message sender. Currently, only users and supergroup
 * chats can be blocked
 * @param {Object} params
 * @param {MessageSenderInputUnion} [params.sender] - Message Sender
 * @param {boolean} [params.isBlocked] - New value of is_blocked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleMessageSenderIsBlockedParams, OkUnion>>}
 */
export type toggleMessageSenderIsBlocked = (
  params?: ToggleMessageSenderIsBlockedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleMessageSenderIsBlockedParams, OkUnion>>
