/**
 * The user is watching animations sent by the other party by clicking on an animated
 * emoji
 */
export class ChatActionWatchingAnimationsBaseModel {
  public _: 'chatActionWatchingAnimations'

  /** The animated emoji */
  public emoji: string
}
