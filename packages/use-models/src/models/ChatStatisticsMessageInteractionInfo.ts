/** Contains statistics about interactions with a message */
export class ChatStatisticsMessageInteractionInfoBaseModel {
  public _: 'chatStatisticsMessageInteractionInfo'

  /** Message identifier */
  public messageId: number

  /** Number of times the message was viewed */
  public viewCount: number

  /** Number of times the message was forwarded */
  public forwardCount: number
}
