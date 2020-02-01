import { Message } from '@airgram/core'

/**
 * The last message of a chat was changed. If last_message is null, then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export class UpdateChatLastMessageBaseModel {
  public _: 'updateChatLastMessage'

  /** Chat identifier */
  public chatId: number

  /** The new last message in the chat; may be null */
  public lastMessage?: Message

  /** New value of the chat order */
  public order: string
}
