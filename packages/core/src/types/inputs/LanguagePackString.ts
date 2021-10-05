import { LanguagePackStringValueInputUnion } from './index'

export type LanguagePackStringInputUnion = LanguagePackStringInput

/** Represents one language pack string */
export interface LanguagePackStringInput {
  _: 'languagePackString'
  /** String key */
  key?: string
  /**
   * String value; pass null if the string needs to be taken from the built-in English
   * language pack
   */
  value?: LanguagePackStringValueInputUnion
}
