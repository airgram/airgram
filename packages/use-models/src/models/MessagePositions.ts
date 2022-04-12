import { MessagePosition } from '@airgram/core'

/** Contains a list of message positions */
export class MessagePositionsBaseModel {
  public _: 'messagePositions'

  /** Total number of messages found */
  public totalCount: number

  /** List of message positions */
  public positions: MessagePosition[]
}
