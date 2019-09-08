/** A text message */
export class PushMessageContentTextBaseModel {
  public _: 'pushMessageContentText'

  /** Message text */
  public text: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
