/** Describes a list of chats */
export type ChatListUnion = ChatListMain | ChatListArchive

/** A main list of chats */
export interface ChatListMain {
  _: 'chatListMain'
}

/**
 * A list of chats usually located at the top of the main chat list. Unmuted chats are
 * automatically moved from the Archive to the Main chat list when a new message arrives
 */
export interface ChatListArchive {
  _: 'chatListArchive'
}
