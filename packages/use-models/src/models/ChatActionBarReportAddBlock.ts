/**
 * The chat is a private or secret chat, which can be reported using the method reportChat,
 * or the other user can be blocked using the method blockUser, or the other user can
 * be added to the contact list using the method addContact
 */
export class ChatActionBarReportAddBlockBaseModel {
  public _: 'chatActionBarReportAddBlock'

  /**
   * If true, the chat was automatically archived and can be moved back to the main chat
   * list using addChatToList simultaneously with setting chat notification settings to
   * default using setChatNotificationSettings
   */
  public canUnarchive: boolean

  /**
   * If non-negative, the current user was found by the peer through searchChatsNearby
   * and this is the distance between the users
   */
  public distance: number
}
