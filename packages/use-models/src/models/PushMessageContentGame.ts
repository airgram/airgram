/** A message with a game */
export class PushMessageContentGameBaseModel {
  public _: 'pushMessageContentGame'

  /** Game title, empty for pinned game message */
  public title: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
