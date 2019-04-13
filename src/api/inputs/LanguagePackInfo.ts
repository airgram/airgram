export type LanguagePackInfoInputUnion = LanguagePackInfoInput

/** Contains information about a language pack */
export interface LanguagePackInfoInput {
  _: 'languagePackInfo'
  /** Unique language pack identifier */
  id?: string
  /** Language name */
  name?: string
  /** Name of the language in that language */
  nativeName?: string
  /** Total number of non-deleted strings from the language pack available locally */
  localStringCount?: number
}
