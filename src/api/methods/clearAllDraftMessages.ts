import { OkUnion } from '../outputs'

/**
 * Clears draft messages in all chats
 * @param {Object} params
 * @param {boolean} [params.excludeSecretChats] - If true, local draft messages in
 * secret chats will not be cleared
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ClearAllDraftMessagesMethod = <ResponseT = OkUnion>(
  params: ClearAllDraftMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ClearAllDraftMessagesParams {
  /** If true, local draft messages in secret chats will not be cleared */
  excludeSecretChats?: boolean
}
