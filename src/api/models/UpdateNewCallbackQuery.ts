import { CallbackQueryPayloadUnion } from '../outputs'

/** A new incoming callback query; for bots only */
export class UpdateNewCallbackQueryBaseModel {
  public _: 'updateNewCallbackQuery'
  /** Unique query identifier */
  public id: number | string
  /** Identifier of the user who sent the query */
  public senderUserId: number
  /** Identifier of the chat, in which the query was sent */
  public chatId: number
  /** Identifier of the message, from which the query originated */
  public messageId: number
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  public chatInstance: number | string
  /** Query payload */
  public payload: CallbackQueryPayloadUnion
}
