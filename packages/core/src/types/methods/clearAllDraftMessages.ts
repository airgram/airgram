import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ClearAllDraftMessagesParams {
  excludeSecretChats?: boolean // If true, local draft messages in secret chats will not be cleared
}

/**
 * Clears draft messages in all chats
 * @param {Object} params
 * @param {boolean} [params.excludeSecretChats] - If true, local draft messages in
 * secret chats will not be cleared
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ClearAllDraftMessagesParams, OkUnion>>}
 */
export type clearAllDraftMessages<ExtensionT> = (
  params?: ClearAllDraftMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ClearAllDraftMessagesParams, OkUnion> & ExtensionT>
