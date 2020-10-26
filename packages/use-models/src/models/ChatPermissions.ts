/** Describes actions that a user is allowed to take in a chat */
export class ChatPermissionsBaseModel {
  public _: 'chatPermissions'

  /** True, if the user can send text messages, contacts, locations, and venues */
  public canSendMessages: boolean

  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  public canSendMediaMessages: boolean

  /** True, if the user can send polls. Implies can_send_messages permissions */
  public canSendPolls: boolean

  /**
   * True, if the user can send animations, games, stickers, and dice and use inline bots.
   * Implies can_send_messages permissions
   */
  public canSendOtherMessages: boolean

  /**
   * True, if the user may add a web page preview to their messages. Implies can_send_messages
   * permissions
   */
  public canAddWebPagePreviews: boolean

  /** True, if the user can change the chat title, photo, and other settings */
  public canChangeInfo: boolean

  /** True, if the user can invite new users to the chat */
  public canInviteUsers: boolean

  /** True, if the user can pin messages */
  public canPinMessages: boolean
}
