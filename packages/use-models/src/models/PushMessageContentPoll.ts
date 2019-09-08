/** A message with a poll */
export class PushMessageContentPollBaseModel {
  public _: 'pushMessageContentPoll'

  /** Poll question */
  public question: string

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
