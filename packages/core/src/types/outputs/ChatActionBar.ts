/** Describes actions which must be possible to do through a chat action bar */
export type ChatActionBarUnion = ChatActionBarReportSpam
  | ChatActionBarReportUnrelatedLocation
  | ChatActionBarInviteMembers
  | ChatActionBarReportAddBlock
  | ChatActionBarAddContact
  | ChatActionBarSharePhoneNumber

/** The chat can be reported as spam using the method reportChat with the reason chatReportReasonSpam */
export interface ChatActionBarReportSpam {
  _: 'chatActionBarReportSpam'
  /**
   * If true, the chat was automatically archived and can be moved back to the main chat
   * list using addChatToList simultaneously with setting chat notification settings to
   * default using setChatNotificationSettings
   */
  canUnarchive: boolean
}

/**
 * The chat is a location-based supergroup, which can be reported as having unrelated
 * location using the method reportChat with the reason chatReportReasonUnrelatedLocation
 */
export interface ChatActionBarReportUnrelatedLocation {
  _: 'chatActionBarReportUnrelatedLocation'
}

/** The chat is a recently created group chat, to which new members can be invited */
export interface ChatActionBarInviteMembers {
  _: 'chatActionBarInviteMembers'
}

/**
 * The chat is a private or secret chat, which can be reported using the method reportChat,
 * or the other user can be blocked using the method toggleMessageSenderIsBlocked, or
 * the other user can be added to the contact list using the method addContact
 */
export interface ChatActionBarReportAddBlock {
  _: 'chatActionBarReportAddBlock'
  /**
   * If true, the chat was automatically archived and can be moved back to the main chat
   * list using addChatToList simultaneously with setting chat notification settings to
   * default using setChatNotificationSettings
   */
  canUnarchive: boolean
  /**
   * If non-negative, the current user was found by the peer through searchChatsNearby
   * and this is the distance between the users
   */
  distance: number
}

/**
 * The chat is a private or secret chat and the other user can be added to the contact
 * list using the method addContact
 */
export interface ChatActionBarAddContact {
  _: 'chatActionBarAddContact'
}

/**
 * The chat is a private or secret chat with a mutual contact and the user's phone number
 * can be shared with the other user using the method sharePhoneNumber
 */
export interface ChatActionBarSharePhoneNumber {
  _: 'chatActionBarSharePhoneNumber'
}
