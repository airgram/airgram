/** A message with a user contact */
export class PushMessageContentContactBaseModel {
  public _: 'pushMessageContentContact'

  /** Contact's name */
  public name: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
