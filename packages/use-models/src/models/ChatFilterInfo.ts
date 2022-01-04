/** Contains basic information about a chat filter */
export class ChatFilterInfoBaseModel {
  public _: 'chatFilterInfo'

  /** Unique chat filter identifier */
  public id: number

  /** The title of the filter; 1-12 characters without line feeds */
  public title: string

  /**
   * The chosen or default icon name for short filter representation. One of "All", "Unread",
   * "Unmuted", "Bots", "Channels", "Groups", "Private", "Custom", "Setup", "Cat", "Crown",
   * "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party", "Sport", "Study",
   * "Trade", "Travel", "Work"
   */
  public iconName: string
}
