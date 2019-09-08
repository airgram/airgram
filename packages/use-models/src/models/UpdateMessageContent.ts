import { MessageContentUnion } from '@airgram/core'

/** The message content has changed */
export class UpdateMessageContentBaseModel {
  public _: 'updateMessageContent'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** New message content */
  public newContent: MessageContentUnion
}
