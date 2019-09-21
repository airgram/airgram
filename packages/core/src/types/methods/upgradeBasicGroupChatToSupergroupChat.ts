import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface UpgradeBasicGroupChatToSupergroupChatParams {
  chatId?: number // Identifier of the chat to upgrade
}

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
 * and messageChatUpgradeFrom; requires creator privileges. Deactivates the original
 * basic group
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to upgrade
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UpgradeBasicGroupChatToSupergroupChatParams, ChatUnion>>}
 */
export type upgradeBasicGroupChatToSupergroupChat = (
  params?: UpgradeBasicGroupChatToSupergroupChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UpgradeBasicGroupChatToSupergroupChatParams, ChatUnion>>
