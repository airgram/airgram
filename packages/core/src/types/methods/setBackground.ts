import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BackgroundTypeInputUnion, InputBackgroundInputUnion } from '../inputs'
import { BackgroundUnion } from '../outputs'

export interface SetBackgroundParams {
  background?: InputBackgroundInputUnion // The input background to use; pass null to create a new filled backgrounds or to remove the current background
  type?: BackgroundTypeInputUnion // Background type; pass null to use the default type of the remote background or to remove the current background
  forDarkTheme?: boolean // True, if the background is chosen for dark theme
}

/**
 * Changes the background selected by the user; adds background to the list of installed
 * backgrounds
 * @param {Object} params
 * @param {InputBackgroundInputUnion} [params.background] - The input background
 * to use; pass null to create a new filled backgrounds or to remove the current background
 * @param {BackgroundTypeInputUnion} [params.type] - Background type; pass null to
 * use the default type of the remote background or to remove the current background
 * @param {boolean} [params.forDarkTheme] - True, if the background is chosen for
 * dark theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetBackgroundParams, BackgroundUnion>>}
 */
export type setBackground = (
  params?: SetBackgroundParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetBackgroundParams, BackgroundUnion>>
