import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ClearAllDraftMessagesParams {
  excludeSecretChats?: boolean // Pass true to keep local message drafts in secret chats
}

/**
 * Clears message drafts in all chats
 * @param {Object} params
 * @param {boolean} [params.excludeSecretChats] - Pass true to keep local message
 * drafts in secret chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ClearAllDraftMessagesParams, OkUnion>>}
 */
export type clearAllDraftMessages = (
  params?: ClearAllDraftMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ClearAllDraftMessagesParams, OkUnion>>
