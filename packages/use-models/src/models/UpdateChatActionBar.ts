import { ChatActionBarUnion } from '@airgram/core'

/** The chat action bar was changed */
export class UpdateChatActionBarBaseModel {
  public _: 'updateChatActionBar'

  /** Chat identifier */
  public chatId: number

  /** The new value of the action bar; may be null */
  public actionBar?: ChatActionBarUnion
}
