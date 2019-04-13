import { LanguagePackInfo } from './index'

export type LocalizationTargetInfoUnion = LocalizationTargetInfo

/** Contains information about the current localization target */
export interface LocalizationTargetInfo {
  _: 'localizationTargetInfo'
  /** List of available language packs for this application */
  languagePacks: LanguagePackInfo[]
}
