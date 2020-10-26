/** Specifies the supported call protocols */
export class CallProtocolBaseModel {
  public _: 'callProtocol'

  /** True, if UDP peer-to-peer connections are supported */
  public udpP2P: boolean

  /** True, if connection through UDP reflectors is supported */
  public udpReflector: boolean

  /** The minimum supported API layer; use 65 */
  public minLayer: number

  /** The maximum supported API layer; use 65 */
  public maxLayer: number

  /** List of supported libtgvoip versions */
  public libraryVersions: string[]
}
