/** Represents a filter of user chats */
export class ChatFilterBaseModel {
  public _: 'chatFilter'

  /** The title of the filter; 1-12 characters without line feeds */
  public title: string

  /**
   * The chosen icon name for short filter representation. If non-empty, must be one of
   * "All", "Unread", "Unmuted", "Bots", "Channels", "Groups", "Private", "Custom", "Setup",
   * "Cat", "Crown", "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party", "Sport",
   * "Study", "Trade", "Travel", "Work". If empty, use getChatFilterDefaultIconName to
   * get default icon name for the filter
   */
  public iconName: string

  /** The chat identifiers of pinned chats in the filtered chat list */
  public pinnedChatIds: number[]

  /** The chat identifiers of always included chats in the filtered chat list */
  public includedChatIds: number[]

  /** The chat identifiers of always excluded chats in the filtered chat list */
  public excludedChatIds: number[]

  /** True, if muted chats need to be excluded */
  public excludeMuted: boolean

  /** True, if read chats need to be excluded */
  public excludeRead: boolean

  /** True, if archived chats need to be excluded */
  public excludeArchived: boolean

  /** True, if contacts need to be included */
  public includeContacts: boolean

  /** True, if non-contact users need to be included */
  public includeNonContacts: boolean

  /** True, if bots need to be included */
  public includeBots: boolean

  /** True, if basic groups and supergroups need to be included */
  public includeGroups: boolean

  /** True, if channels need to be included */
  public includeChannels: boolean
}
