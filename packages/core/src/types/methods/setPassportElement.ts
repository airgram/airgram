import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputPassportElementInputUnion } from '../inputs'
import { PassportElementUnion } from '../outputs'

export interface SetPassportElementParams {
  element?: InputPassportElementInputUnion // Input Telegram Passport element
  password?: string // Password of the current user
}

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message
 * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
 * or the chosen email address must be verified first
 * @param {Object} params
 * @param {InputPassportElementInputUnion} [params.element] - Input Telegram Passport
 * element
 * @param {string} [params.password] - Password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPassportElementParams, PassportElementUnion>>}
 */
export type setPassportElement<ExtensionT> = (
  params?: SetPassportElementParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPassportElementParams, PassportElementUnion> & ExtensionT>
