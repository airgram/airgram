import { AutoDownloadSettings } from '@airgram/core'

/** Contains auto-download settings presets for the user */
export class AutoDownloadSettingsPresetsBaseModel {
  public _: 'autoDownloadSettingsPresets'

  /** Preset with lowest settings; supposed to be used by default when roaming */
  public low: AutoDownloadSettings

  /** Preset with medium settings; supposed to be used by default when using mobile data */
  public medium: AutoDownloadSettings

  /** Preset with highest settings; supposed to be used by default when connected on Wi-Fi */
  public high: AutoDownloadSettings
}
