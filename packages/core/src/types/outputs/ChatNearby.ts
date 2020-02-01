export type ChatNearbyUnion = ChatNearby

/** Describes a chat located nearby */
export interface ChatNearby {
  _: 'chatNearby'
  /** Chat identifier */
  chatId: number
  /** Distance to the chat location in meters */
  distance: number
}
