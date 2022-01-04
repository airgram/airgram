/** Contains information about a message in a specific position */
export class MessagePositionBaseModel {
  public _: 'messagePosition'

  /** 0-based message position in the full list of suitable messages */
  public position: number

  /** Message identifier */
  public messageId: number

  /** Point in time (Unix timestamp) when the message was sent */
  public date: number
}
