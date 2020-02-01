/** Describes actions which should be possible to do through a chat action bar */
export type ChatActionBarUnion = ChatActionBarReportSpam
  | ChatActionBarReportUnrelatedLocation
  | ChatActionBarReportAddBlock
  | ChatActionBarAddContact
  | ChatActionBarSharePhoneNumber

/** The chat can be reported as spam using the method reportChat with the reason chatReportReasonSpam */
export interface ChatActionBarReportSpam {
  _: 'chatActionBarReportSpam'
}

/**
 * The chat is a location-based supergroup, which can be reported as having unrelated
 * location using the method reportChat with the reason chatReportReasonUnrelatedLocation
 */
export interface ChatActionBarReportUnrelatedLocation {
  _: 'chatActionBarReportUnrelatedLocation'
}

/**
 * The chat is a private or secret chat, which can be reported using the method reportChat,
 * or the other user can be added to the contact list using the method addContact, or
 * the other user can be blocked using the method blockUser
 */
export interface ChatActionBarReportAddBlock {
  _: 'chatActionBarReportAddBlock'
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
