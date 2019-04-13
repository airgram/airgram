/** A chat was marked as unread or was read */
export class UpdateChatIsMarkedAsUnreadBaseModel {
  public _: 'updateChatIsMarkedAsUnread'
  /** Chat identifier */
  public chatId: number
  /** New value of is_marked_as_unread */
  public isMarkedAsUnread: boolean
}
