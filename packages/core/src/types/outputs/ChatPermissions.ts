export type ChatPermissionsUnion = ChatPermissions

/** Describes actions that a user is allowed to take in a chat */
export interface ChatPermissions {
  _: 'chatPermissions'
  /** True, if the user can send text messages, contacts, locations, and venues */
  canSendMessages: boolean
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  canSendMediaMessages: boolean
  /** True, if the user can send polls. Implies can_send_messages permissions */
  canSendPolls: boolean
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_messages permissions
   */
  canSendOtherMessages: boolean
  /**
   * True, if the user may add a web page preview to their messages. Implies can_send_messages
   * permissions
   */
  canAddWebPagePreviews: boolean
  /** True, if the user can change the chat title, photo, and other settings */
  canChangeInfo: boolean
  /** True, if the user can invite new users to the chat */
  canInviteUsers: boolean
  /** True, if the user can pin messages */
  canPinMessages: boolean
}
