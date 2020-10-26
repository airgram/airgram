import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CountriesUnion } from '../outputs'



/**
 * Returns information about existing countries. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, CountriesUnion>>}
 */
export type getCountries = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, CountriesUnion>>
