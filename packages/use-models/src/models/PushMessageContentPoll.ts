/** A message with a poll */
export class PushMessageContentPollBaseModel {
  public _: 'pushMessageContentPoll'

  /** Poll question */
  public question: string

  /** True, if the poll is regular and not in quiz mode */
  public isRegular: boolean

  /** True, if the message is a pinned message with the specified content */
  public isPinned: boolean
}
