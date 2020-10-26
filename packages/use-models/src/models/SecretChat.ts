import { SecretChatStateUnion } from '@airgram/core'

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
   * key. This is a string of 36 little-endian bytes, which must be split into groups
   * of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3, 2D5775, and 2F99C9.
   * The pixels must be used to make a 12x12 square image filled from left to right, top
   * to bottom. Alternatively, the first 32 bytes of the hash can be converted to the
   * hexadecimal format and printed as 32 2-digit hex numbers
   */
  public keyHash: string

  /**
   * Secret chat layer; determines features supported by the chat partner's application.
   * Video notes are supported if the layer >= 66; nested text entities and underline
   * and strikethrough entities are supported if the layer >= 101
   */
  public layer: number
}
