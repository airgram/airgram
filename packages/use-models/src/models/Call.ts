import { CallStateUnion } from '@airgram/core'

/** Describes a call */
export class CallBaseModel {
  public _: 'call'

  /** Call identifier, not persistent */
  public id: number

  /** Peer user identifier */
  public userId: number

  /** True, if the call is outgoing */
  public isOutgoing: boolean

  /** True, if the call is a video call */
  public isVideo: boolean

  /** Call state */
  public state: CallStateUnion
}
