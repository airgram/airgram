/** Describes a chat located nearby */
export class ChatNearbyBaseModel {
  public _: 'chatNearby'

  /** Chat identifier */
  public chatId: number

  /** Distance to the chat location, in meters */
  public distance: number
}
