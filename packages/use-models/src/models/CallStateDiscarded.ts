import { CallDiscardReasonUnion } from '@airgram/core'

/** The call has ended successfully */
export class CallStateDiscardedBaseModel {
  public _: 'callStateDiscarded'

  /** The reason, why the call has ended */
  public reason: CallDiscardReasonUnion

  /** True, if the call rating must be sent to the server */
  public needRating: boolean

  /** True, if the call debug information must be sent to the server */
  public needDebugInformation: boolean
}
