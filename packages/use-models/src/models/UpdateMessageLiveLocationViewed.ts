/**
 * A message with a live location was viewed. When the update is received, the application
 * is supposed to update the live location
 */
export class UpdateMessageLiveLocationViewedBaseModel {
  public _: 'updateMessageLiveLocationViewed'

  /** Identifier of the chat with the live location message */
  public chatId: number

  /** Identifier of the message with live location */
  public messageId: number
}
