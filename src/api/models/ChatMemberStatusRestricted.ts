/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export class ChatMemberStatusRestrictedBaseModel {
  public _: 'chatMemberStatusRestricted'
  /** True, if the user is a member of the chat */
  public isMember: boolean
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  public restrictedUntilDate: number
  /** True, if the user can send text messages, contacts, locations, and venues */
  public canSendMessages: boolean
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  public canSendMediaMessages: boolean
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_media_messages permissions
   */
  public canSendOtherMessages: boolean
  /**
   * True, if the user may add a web page preview to his messages. Implies can_send_messages
   * permissions
   */
  public canAddWebPagePreviews: boolean
}
