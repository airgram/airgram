import { MessageSenderUnion } from '@airgram/core'

/** The message sender that is selected to send messages in a chat has changed */
export class UpdateChatMessageSenderBaseModel {
  public _: 'updateChatMessageSender'

  /** Chat identifier */
  public chatId: number

  /** New value of message_sender_id; may be null if the user can't change message sender */
  public messageSenderId?: MessageSenderUnion
}
