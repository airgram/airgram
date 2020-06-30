/** Describes a list of chats */
export type ChatListInputUnion = ChatListMainInput
  | ChatListArchiveInput
  | ChatListFilterInput

/** A main list of chats */
export interface ChatListMainInput {
  _: 'chatListMain'
}

/**
 * A list of chats usually located at the top of the main chat list. Unmuted chats are
 * automatically moved from the Archive to the Main chat list when a new message arrives
 */
export interface ChatListArchiveInput {
  _: 'chatListArchive'
}

/** A list of chats belonging to a chat filter */
export interface ChatListFilterInput {
  _: 'chatListFilter'
  /** Chat filter identifier */
  chatFilterId?: number
}
