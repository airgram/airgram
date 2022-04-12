export type LanguagePackInfoUnion = LanguagePackInfo

/** Contains information about a language pack */
export interface LanguagePackInfo {
  _: 'languagePackInfo'
  /** Unique language pack identifier */
  id: string
  /**
   * Identifier of a base language pack; may be empty. If a string is missed in the language
   * pack, then it must be fetched from base language pack. Unsupported in custom language
   * packs
   */
  baseLanguagePackId: string
  /** Language name */
  name: string
  /** Name of the language in that language */
  nativeName: string
  /**
   * A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
   * for more information
   */
  pluralCode: string
  /** True, if the language pack is official */
  isOfficial: boolean
  /** True, if the language pack strings are RTL */
  isRtl: boolean
  /** True, if the language pack is a beta language pack */
  isBeta: boolean
  /** True, if the language pack is installed by the current user */
  isInstalled: boolean
  /** Total number of non-deleted strings from the language pack */
  totalStringCount: number
  /** Total number of translated strings from the language pack */
  translatedStringCount: number
  /** Total number of non-deleted strings from the language pack available locally */
  localStringCount: number
  /** Link to language translation interface; empty for custom local language packs */
  translationUrl: string
}
