
export interface PhoneConnection {
  _: 'phoneConnection'
  id: string
  ip: string
  ipv6: string
  port: number
  peer_tag: number[]
}

export type PhoneConnectionUnion = PhoneConnection
