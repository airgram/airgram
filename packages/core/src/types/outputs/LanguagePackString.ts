import { LanguagePackStringValueUnion } from './index'

export type LanguagePackStringUnion = LanguagePackString

/** Represents one language pack string */
export interface LanguagePackString {
  _: 'languagePackString'
  /** String key */
  key: string
  /** String value */
  value: LanguagePackStringValueUnion
}
