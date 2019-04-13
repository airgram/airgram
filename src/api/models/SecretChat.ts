import { SecretChatStateUnion } from '../outputs'

/** Represents a secret chat */
export class SecretChatBaseModel {
  public _: 'secretChat'
  /** Secret chat identifier */
  public id: number
  /** Identifier of the chat partner */
  public userId: number
  /** State of the secret chat */
  public state: SecretChatStateUnion
  /** True, if the chat was created by the current user; otherwise false */
  public isOutbound: boolean
  /** Current message Time To Live setting (self-destruct timer) for the chat, in seconds */
  public ttl: number
  /**
   * Hash of the currently used key for comparison with the hash of the chat partner's
   * key. This is a string of 36 bytes, which must be used to make a 12x12 square image
   * with a color depth of 4. The first 16 bytes should be used to make a central 8x8
   * square, while the remaining 20 bytes should be used to construct a 2-pixel-wide border
   * around that square. Alternatively, the first 32 bytes of the hash can be converted
   * to the hexadecimal format and printed as 32 2-digit hex numbers
   */
  public keyHash: string
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66
   */
  public layer: number
}
