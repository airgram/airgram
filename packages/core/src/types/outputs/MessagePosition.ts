export type MessagePositionUnion = MessagePosition

/** Contains information about a message in a specific position */
export interface MessagePosition {
  _: 'messagePosition'
  /** 0-based message position in the full list of suitable messages */
  position: number
  /** Message identifier */
  messageId: number
  /** Point in time (Unix timestamp) when the message was sent */
  date: number
}
