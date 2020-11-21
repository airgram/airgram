/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilterInputUnion = ChatMembersFilterContactsInput
  | ChatMembersFilterAdministratorsInput
  | ChatMembersFilterMembersInput
  | ChatMembersFilterMentionInput
  | ChatMembersFilterRestrictedInput
  | ChatMembersFilterBannedInput
  | ChatMembersFilterBotsInput

/** Returns contacts of the user */
export interface ChatMembersFilterContactsInput {
  _: 'chatMembersFilterContacts'
}

/** Returns the owner and administrators */
export interface ChatMembersFilterAdministratorsInput {
  _: 'chatMembersFilterAdministrators'
}

/** Returns all chat members, including restricted chat members */
export interface ChatMembersFilterMembersInput {
  _: 'chatMembersFilterMembers'
}

/** Returns users which can be mentioned in the chat */
export interface ChatMembersFilterMentionInput {
  _: 'chatMembersFilterMention'
  /** If non-zero, the identifier of the current message thread */
  messageThreadId?: number
}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export interface ChatMembersFilterRestrictedInput {
  _: 'chatMembersFilterRestricted'
}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export interface ChatMembersFilterBannedInput {
  _: 'chatMembersFilterBanned'
}

/** Returns bot members of the chat */
export interface ChatMembersFilterBotsInput {
  _: 'chatMembersFilterBots'
}
