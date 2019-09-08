/** A general message with hidden content */
export class PushMessageContentHiddenBaseModel {
  public _: 'pushMessageContentHidden'

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
