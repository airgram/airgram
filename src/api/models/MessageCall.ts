import { CallDiscardReasonUnion } from '../outputs'

/** A message with information about an ended call */
export class MessageCallBaseModel {
  public _: 'messageCall'
  /** Reason why the call was discarded */
  public discardReason: CallDiscardReasonUnion
  /** Call duration, in seconds */
  public duration: number
}
