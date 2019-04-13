/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilterInputUnion = ChatMembersFilterAdministratorsInput
  | ChatMembersFilterMembersInput
  | ChatMembersFilterRestrictedInput
  | ChatMembersFilterBannedInput
  | ChatMembersFilterBotsInput

/** Returns the creator and administrators */
export interface ChatMembersFilterAdministratorsInput {
  _: 'chatMembersFilterAdministrators'
}

/** Returns all chat members, including restricted chat members */
export interface ChatMembersFilterMembersInput {
  _: 'chatMembersFilterMembers'
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
