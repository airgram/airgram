export type ChatFilterInfoUnion = ChatFilterInfo

/** Contains basic information about a chat filter */
export interface ChatFilterInfo {
  _: 'chatFilterInfo'
  /** Unique chat filter identifier */
  id: number
  /** The title of the filter; 1-12 characters without line feeds */
  title: string
  /**
   * The chosen or default icon name for short filter representation. One of "All", "Unread",
   * "Unmuted", "Bots", "Channels", "Groups", "Private", "Custom", "Setup", "Cat", "Crown",
   * "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party", "Sport", "Study",
   * "Trade", "Travel", "Work"
   */
  iconName: string
}
