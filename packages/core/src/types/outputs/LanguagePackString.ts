import { LanguagePackStringValueUnion } from './index'

export type LanguagePackStringUnion = LanguagePackString

/** Represents one language pack string */
export interface LanguagePackString {
  _: 'languagePackString'
  /** String key */
  key: string
  /**
   * String value; pass null if the string needs to be taken from the built-in English
   * language pack
   */
  value: LanguagePackStringValueUnion
}
