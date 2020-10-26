import { TextEntityTypeUnion } from '@airgram/core'

/** Represents a part of the text that needs to be formatted in some unusual way */
export class TextEntityBaseModel {
  public _: 'textEntity'

  /** Offset of the entity, in UTF-16 code units */
  public offset: number

  /** Length of the entity, in UTF-16 code units */
  public length: number

  /** Type of the entity */
  public type: TextEntityTypeUnion
}
