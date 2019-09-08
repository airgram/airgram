/**
 * Represents the categories of chats for which a list of frequently used chats can
 * be retrieved
 */
export type TopChatCategoryInputUnion = TopChatCategoryUsersInput
  | TopChatCategoryBotsInput
  | TopChatCategoryGroupsInput
  | TopChatCategoryChannelsInput
  | TopChatCategoryInlineBotsInput
  | TopChatCategoryCallsInput

/** A category containing frequently used private chats with non-bot users */
export interface TopChatCategoryUsersInput {
  _: 'topChatCategoryUsers'
}

/** A category containing frequently used private chats with bot users */
export interface TopChatCategoryBotsInput {
  _: 'topChatCategoryBots'
}

/** A category containing frequently used basic groups and supergroups */
export interface TopChatCategoryGroupsInput {
  _: 'topChatCategoryGroups'
}

/** A category containing frequently used channels */
export interface TopChatCategoryChannelsInput {
  _: 'topChatCategoryChannels'
}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export interface TopChatCategoryInlineBotsInput {
  _: 'topChatCategoryInlineBots'
}

/** A category containing frequently used chats used for calls */
export interface TopChatCategoryCallsInput {
  _: 'topChatCategoryCalls'
}
