/**
 * The link is a link to a language pack. Call getLanguagePackInfo with the given language
 * pack identifier to process the link
 */
export class InternalLinkTypeLanguagePackBaseModel {
  public _: 'internalLinkTypeLanguagePack'

  /** Language pack identifier */
  public languagePackId: string
}
