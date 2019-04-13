import { LanguagePackString } from './index'

export type LanguagePackStringsUnion = LanguagePackStrings

/** Contains a list of language pack strings */
export interface LanguagePackStrings {
  _: 'languagePackStrings'
  /** A list of language pack strings */
  strings: LanguagePackString[]
}
