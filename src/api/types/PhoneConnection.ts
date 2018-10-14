
export interface PhoneConnection {
  _: 'phoneConnection'
  id: number
  ip: string
  ipv6: string
  port: number
  peer_tag: number[]
}

export type PhoneConnectionUnion = PhoneConnection
