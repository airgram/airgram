import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Sends a code to verify a phone number to be added to a user's Telegram Passport
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type SendPhoneNumberVerificationCodeMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  params: SendPhoneNumberVerificationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendPhoneNumberVerificationCodeParams {
  /** The phone number of the user, in international format */
  phoneNumber?: string
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allowFlashCall?: boolean
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  isCurrentPhoneNumber?: boolean
}
