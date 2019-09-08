import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BackgroundTypeInputUnion, InputBackgroundInputUnion } from '../inputs'
import { BackgroundUnion } from '../outputs'

export interface SetBackgroundParams {
  background?: InputBackgroundInputUnion // The input background to use, null for solid backgrounds
  type?: BackgroundTypeInputUnion // Background type; null for default background. The method will return error 404 if type is null
  forDarkTheme?: boolean // True, if the background is chosen for dark theme
}

/**
 * Changes the background selected by the user; adds background to the list of installed
 * backgrounds
 * @param {Object} params
 * @param {InputBackgroundInputUnion} [params.background] - The input background
 * to use, null for solid backgrounds
 * @param {BackgroundTypeInputUnion} [params.type] - Background type; null for default
 * background. The method will return error 404 if type is null
 * @param {boolean} [params.forDarkTheme] - True, if the background is chosen for
 * dark theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetBackgroundParams, BackgroundUnion>>}
 */
export type setBackground<ExtensionT> = (
  params?: SetBackgroundParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetBackgroundParams, BackgroundUnion> & ExtensionT>
