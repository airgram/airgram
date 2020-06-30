import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AutoDownloadSettingsPresetsUnion } from '../outputs'



/**
 * Returns auto-download settings presets for the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AutoDownloadSettingsPresetsUnion>>}
 */
export type getAutoDownloadSettingsPresets = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AutoDownloadSettingsPresetsUnion>>
