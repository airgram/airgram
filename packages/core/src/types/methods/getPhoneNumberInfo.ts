import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberInfoUnion } from '../outputs'

export interface GetPhoneNumberInfoParams {
  phoneNumberPrefix?: string // The phone number prefix
}

/**
 * Returns information about a phone number by its prefix. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.phoneNumberPrefix] - The phone number prefix
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPhoneNumberInfoParams, PhoneNumberInfoUnion>>}
 */
export type getPhoneNumberInfo = (
  params?: GetPhoneNumberInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPhoneNumberInfoParams, PhoneNumberInfoUnion>>
