import { Chat } from '@airgram/core'

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the client. The chat field changes will be reported
 * through separate updates
 */
export class UpdateNewChatBaseModel {
  public _: 'updateNewChat'

  /** The chat */
  public chat: Chat
}
