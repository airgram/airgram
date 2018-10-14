
export interface PhoneCallProtocol {
  _: 'phoneCallProtocol'
  flags: number
  udp_p2p?: true
  udp_reflector?: true
  min_layer: number
  max_layer: number
}

export type PhoneCallProtocolUnion = PhoneCallProtocol
