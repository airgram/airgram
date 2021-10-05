import { LanguagePackStringValueUnion } from '@airgram/core'

/** Represents one language pack string */
export class LanguagePackStringBaseModel {
  public _: 'languagePackString'

  /** String key */
  public key: string

  /**
   * String value; pass null if the string needs to be taken from the built-in English
   * language pack
   */
  public value: LanguagePackStringValueUnion
}
