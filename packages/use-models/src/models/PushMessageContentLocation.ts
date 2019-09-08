/** A message with a location */
export class PushMessageContentLocationBaseModel {
  public _: 'pushMessageContentLocation'

  /** True, if the location is live */
  public isLive: boolean

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
