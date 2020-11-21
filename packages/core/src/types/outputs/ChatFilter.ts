export type ChatFilterUnion = ChatFilter

/** Represents a filter of user chats */
export interface ChatFilter {
  _: 'chatFilter'
  /** The title of the filter; 1-12 characters without line feeds */
  title: string
  /**
   * The icon name for short filter representation. If non-empty, must be one of "All",
   * "Unread", "Unmuted", "Bots", "Channels", "Groups", "Private", "Custom", "Setup",
   * "Cat", "Crown", "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party", "Sport",
   * "Study", "Trade", "Travel", "Work". If empty, use getChatFilterDefaultIconName to
   * get default icon name for the filter
   */
  iconName: string
  /** The chat identifiers of pinned chats in the filtered chat list */
  pinnedChatIds: number[]
  /** The chat identifiers of always included chats in the filtered chat list */
  includedChatIds: number[]
  /** The chat identifiers of always excluded chats in the filtered chat list */
  excludedChatIds: number[]
  /** True, if muted chats need to be excluded */
  excludeMuted: boolean
  /** True, if read chats need to be excluded */
  excludeRead: boolean
  /** True, if archived chats need to be excluded */
  excludeArchived: boolean
  /** True, if contacts need to be included */
  includeContacts: boolean
  /** True, if non-contact users need to be included */
  includeNonContacts: boolean
  /** True, if bots need to be included */
  includeBots: boolean
  /** True, if basic groups and supergroups need to be included */
  includeGroups: boolean
  /** True, if channels need to be included */
  includeChannels: boolean
}
