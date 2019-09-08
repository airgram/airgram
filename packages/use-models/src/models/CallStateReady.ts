import { CallConnection, CallProtocol } from '@airgram/core'

/** The call is ready to use */
export class CallStateReadyBaseModel {
  public _: 'callStateReady'

  /** Call protocols supported by the peer */
  public protocol: CallProtocol

  /** Available UDP reflectors */
  public connections: CallConnection[]

  /** A JSON-encoded call config */
  public config: string

  /** Call encryption key */
  public encryptionKey: string

  /** Encryption key emojis fingerprint */
  public emojis: string[]

  /** True, if peer-to-peer connection is allowed by users privacy settings */
  public allowP2P: boolean
}
