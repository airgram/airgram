import { ReplyMarkupUnion } from '@airgram/core'

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export class UpdateMessageEditedBaseModel {
  public _: 'updateMessageEdited'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** Point in time (Unix timestamp) when the message was edited */
  public editDate: number

  /** New message reply markup; may be null */
  public replyMarkup?: ReplyMarkupUnion
}
