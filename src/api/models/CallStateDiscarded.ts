import { CallDiscardReasonUnion } from '../outputs'

/** The call has ended successfully */
export class CallStateDiscardedBaseModel {
  public _: 'callStateDiscarded'
  /** The reason, why the call has ended */
  public reason: CallDiscardReasonUnion
  /** True, if the call rating should be sent to the server */
  public needRating: boolean
  /** True, if the call debug information should be sent to the server */
  public needDebugInformation: boolean
}
