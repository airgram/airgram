import { PhoneCallDiscardReasonUnion } from './PhoneCallDiscardReason'
import { PhoneCallProtocolUnion } from './PhoneCallProtocol'
import { PhoneConnectionUnion } from './PhoneConnection'

export interface PhoneCall {
  _: 'phoneCall'
  id: string
  access_hash: string
  date: number
  admin_id: number
  participant_id: number
  g_a_or_b: number[]
  key_fingerprint: string
  protocol: PhoneCallProtocolUnion
  connection: PhoneConnectionUnion
  alternative_connections: PhoneConnectionUnion[]
  start_date: number
}

export interface PhoneCallAccepted {
  _: 'phoneCallAccepted'
  id: string
  access_hash: string
  date: number
  admin_id: number
  participant_id: number
  g_b: number[]
  protocol: PhoneCallProtocolUnion
}

export interface PhoneCallDiscarded {
  _: 'phoneCallDiscarded'
  flags: number
  need_rating?: true
  need_debug?: true
  id: string
  reason?: PhoneCallDiscardReasonUnion
  duration?: number
}

export interface PhoneCallEmpty {
  _: 'phoneCallEmpty'
  id: string
}

export interface PhoneCallRequested {
  _: 'phoneCallRequested'
  id: string
  access_hash: string
  date: number
  admin_id: number
  participant_id: number
  g_a_hash: number[]
  protocol: PhoneCallProtocolUnion
}

export interface PhoneCallWaiting {
  _: 'phoneCallWaiting'
  flags: number
  id: string
  access_hash: string
  date: number
  admin_id: number
  participant_id: number
  protocol: PhoneCallProtocolUnion
  receive_date?: number
}

export type PhoneCallUnion = PhoneCall
  | PhoneCallAccepted
  | PhoneCallDiscarded
  | PhoneCallEmpty
  | PhoneCallRequested
  | PhoneCallWaiting
