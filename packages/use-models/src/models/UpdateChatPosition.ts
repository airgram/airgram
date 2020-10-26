import { ChatPosition } from '@airgram/core'

/**
 * The position of a chat in a chat list has changed. Instead of this update updateChatLastMessage
 * or updateChatDraftMessage might be sent
 */
export class UpdateChatPositionBaseModel {
  public _: 'updateChatPosition'

  /** Chat identifier */
  public chatId: number

  /**
   * New chat position. If new order is 0, then the chat needs to be removed from the
   * list
   */
  public position: ChatPosition
}
