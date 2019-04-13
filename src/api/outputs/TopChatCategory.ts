/**
 * Represents the categories of chats for which a list of frequently used chats can
 * be retrieved
 */
export type TopChatCategoryUnion = TopChatCategoryUsers
  | TopChatCategoryBots
  | TopChatCategoryGroups
  | TopChatCategoryChannels
  | TopChatCategoryInlineBots
  | TopChatCategoryCalls

/** A category containing frequently used private chats with non-bot users */
export interface TopChatCategoryUsers {
  _: 'topChatCategoryUsers'
}

/** A category containing frequently used private chats with bot users */
export interface TopChatCategoryBots {
  _: 'topChatCategoryBots'
}

/** A category containing frequently used basic groups and supergroups */
export interface TopChatCategoryGroups {
  _: 'topChatCategoryGroups'
}

/** A category containing frequently used channels */
export interface TopChatCategoryChannels {
  _: 'topChatCategoryChannels'
}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export interface TopChatCategoryInlineBots {
  _: 'topChatCategoryInlineBots'
}

/** A category containing frequently used chats used for calls */
export interface TopChatCategoryCalls {
  _: 'topChatCategoryCalls'
}
