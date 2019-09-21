import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AutoDownloadSettingsInput, NetworkTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetAutoDownloadSettingsParams {
  settings?: AutoDownloadSettingsInput // New user auto-download settings
  type?: NetworkTypeInputUnion // Type of the network for which the new settings are applied
}

/**
 * Sets auto-download settings
 * @param {Object} params
 * @param {AutoDownloadSettingsInput} [params.settings] - New user auto-download
 * settings
 * @param {NetworkTypeInputUnion} [params.type] - Type of the network for which the
 * new settings are applied
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetAutoDownloadSettingsParams, OkUnion>>}
 */
export type setAutoDownloadSettings = (
  params?: SetAutoDownloadSettingsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetAutoDownloadSettingsParams, OkUnion>>
