import { ChatNearby } from '@airgram/core'

/** Represents a list of chats located nearby */
export class ChatsNearbyBaseModel {
  public _: 'chatsNearby'

  /** List of users nearby */
  public usersNearby: ChatNearby[]

  /** List of location-based supergroups nearby */
  public supergroupsNearby: ChatNearby[]
}
