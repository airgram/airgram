import { ChatUnion } from '../outputs'

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
 * and messageChatUpgradeFrom. Deactivates the original basic group
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to upgrade
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type UpgradeBasicGroupChatToSupergroupChatMethod = <ResponseT = ChatUnion>(
  params: UpgradeBasicGroupChatToSupergroupChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UpgradeBasicGroupChatToSupergroupChatParams {
  /** Identifier of the chat to upgrade */
  chatId?: number
}
