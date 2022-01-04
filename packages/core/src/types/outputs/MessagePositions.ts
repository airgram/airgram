import { MessagePosition } from './index'

export type MessagePositionsUnion = MessagePositions

/** Contains a list of message positions */
export interface MessagePositions {
  _: 'messagePositions'
  /** Total count of messages found */
  totalCount: number
  /** List of message positions */
  positions: MessagePosition[]
}
