import { ChatActionUnion } from '@airgram/core'

/** User activity in the chat has changed */
export class UpdateUserChatActionBaseModel {
  public _: 'updateUserChatAction'

  /** Chat identifier */
  public chatId: number

  /** Identifier of a user performing an action */
  public userId: number

  /** The action description */
  public action: ChatActionUnion
}
