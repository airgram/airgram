import { AutoDownloadSettings } from './index'

export type AutoDownloadSettingsPresetsUnion = AutoDownloadSettingsPresets

/** Contains auto-download settings presets for the user */
export interface AutoDownloadSettingsPresets {
  _: 'autoDownloadSettingsPresets'
  /** Preset with lowest settings; supposed to be used by default when roaming */
  low: AutoDownloadSettings
  /** Preset with medium settings; supposed to be used by default when using mobile data */
  medium: AutoDownloadSettings
  /** Preset with highest settings; supposed to be used by default when connected on Wi-Fi */
  high: AutoDownloadSettings
}
