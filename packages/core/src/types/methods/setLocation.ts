import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LocationInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetLocationParams {
  location?: LocationInput // The new location of the user
}

/**
 * Changes the location of the current user. Needs to be called if GetOption("is_location_visible")
 * is true and location changes for more than 1 kilometer
 * @param {Object} params
 * @param {LocationInput} [params.location] - The new location of the user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetLocationParams, OkUnion>>}
 */
export type setLocation = (
  params?: SetLocationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetLocationParams, OkUnion>>
