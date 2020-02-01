import { ChatNearby } from './index'

export type ChatsNearbyUnion = ChatsNearby

/** Represents a list of chats located nearby */
export interface ChatsNearby {
  _: 'chatsNearby'
  /** List of users nearby */
  usersNearby: ChatNearby[]
  /** List of location-based supergroups nearby */
  supergroupsNearby: ChatNearby[]
}
