import { ChatActionUnion, MessageSenderUnion } from '@airgram/core'

/** A message sender activity in the chat has changed */
export class UpdateChatActionBaseModel {
  public _: 'updateChatAction'

  /** Chat identifier */
  public chatId: number

  /** If not 0, a message thread identifier in which the action was performed */
  public messageThreadId: number

  /** Identifier of a message sender performing the action */
  public senderId: MessageSenderUnion

  /** The action */
  public action: ChatActionUnion
}
