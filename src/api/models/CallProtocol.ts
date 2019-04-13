/** Specifies the supported call protocols */
export class CallProtocolBaseModel {
  public _: 'callProtocol'
  /** True, if UDP peer-to-peer connections are supported */
  public udpP2P: boolean
  /** True, if connection through UDP reflectors is supported */
  public udpReflector: boolean
  /** Minimum supported API layer; use 65 */
  public minLayer: number
  /** Maximum supported API layer; use 65 */
  public maxLayer: number
}
