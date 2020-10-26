import { MessageInteractionInfo } from '@airgram/core'

/** The information about interactions with a message has changed */
export class UpdateMessageInteractionInfoBaseModel {
  public _: 'updateMessageInteractionInfo'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** New information about interactions with the message; may be null */
  public interactionInfo?: MessageInteractionInfo
}
