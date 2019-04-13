import { LanguagePackInfo } from '../outputs'

/** Contains information about the current localization target */
export class LocalizationTargetInfoBaseModel {
  public _: 'localizationTargetInfo'
  /** List of available language packs for this application */
  public languagePacks: LanguagePackInfo[]
}
