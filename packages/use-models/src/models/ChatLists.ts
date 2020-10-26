import { ChatListUnion } from '@airgram/core'

/** Contains a list of chat lists */
export class ChatListsBaseModel {
  public _: 'chatLists'

  /** List of chat lists */
  public chatLists: ChatListUnion[]
}
