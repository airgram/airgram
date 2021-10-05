/**
 * The user or the chat was banned (and hence is not a member of the chat). Implies
 * the user can't return to the chat, view messages, or be used as a participant identifier
 * to join a voice chat of the chat
 */
export class ChatMemberStatusBannedBaseModel {
  public _: 'chatMemberStatusBanned'

  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever. Always 0 in basic groups
   */
  public bannedUntilDate: number
}
