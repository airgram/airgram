/** The view count of the message has changed */
export class UpdateMessageViewsBaseModel {
  public _: 'updateMessageViews'
  /** Chat identifier */
  public chatId: number
  /** Message identifier */
  public messageId: number
  /** New value of the view count */
  public views: number
}
