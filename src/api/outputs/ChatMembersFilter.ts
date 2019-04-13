/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilterUnion = ChatMembersFilterAdministrators
  | ChatMembersFilterMembers
  | ChatMembersFilterRestricted
  | ChatMembersFilterBanned
  | ChatMembersFilterBots

/** Returns the creator and administrators */
export interface ChatMembersFilterAdministrators {
  _: 'chatMembersFilterAdministrators'
}

/** Returns all chat members, including restricted chat members */
export interface ChatMembersFilterMembers {
  _: 'chatMembersFilterMembers'
}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export interface ChatMembersFilterRestricted {
  _: 'chatMembersFilterRestricted'
}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export interface ChatMembersFilterBanned {
  _: 'chatMembersFilterBanned'
}

/** Returns bot members of the chat */
export interface ChatMembersFilterBots {
  _: 'chatMembersFilterBots'
}
