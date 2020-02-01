import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PublicChatTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface CheckCreatedPublicChatsLimitParams {
  type?: PublicChatTypeInputUnion // Type of the public chats, for which to check the limit
}

/**
 * Checks whether the maximum number of owned public chats has been reached. Returns
 * corresponding error if the limit was reached
 * @param {Object} params
 * @param {PublicChatTypeInputUnion} [params.type] - Type of the public chats, for
 * which to check the limit
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckCreatedPublicChatsLimitParams, OkUnion>>}
 */
export type checkCreatedPublicChatsLimit = (
  params?: CheckCreatedPublicChatsLimitParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckCreatedPublicChatsLimitParams, OkUnion>>
