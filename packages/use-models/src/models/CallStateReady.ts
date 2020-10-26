import { CallProtocol, CallServer } from '@airgram/core'

/** The call is ready to use */
export class CallStateReadyBaseModel {
  public _: 'callStateReady'

  /** Call protocols supported by the peer */
  public protocol: CallProtocol

  /** List of available call servers */
  public servers: CallServer[]

  /** A JSON-encoded call config */
  public config: string

  /** Call encryption key */
  public encryptionKey: string

  /** Encryption key emojis fingerprint */
  public emojis: string[]

  /** True, if peer-to-peer connection is allowed by users privacy settings */
  public allowP2P: boolean
}
