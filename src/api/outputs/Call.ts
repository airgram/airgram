import { CallStateUnion } from './index'

export type CallUnion = Call

/** Describes a call */
export interface Call {
  _: 'call'
  /** Call identifier, not persistent */
  id: number
  /** Peer user identifier */
  userId: number
  /** True, if the call is outgoing */
  isOutgoing: boolean
  /** Call state */
  state: CallStateUnion
}
