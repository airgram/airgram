import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The new phone number of the user in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the code can be sent via
 * flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type ChangePhoneNumberMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  params: ChangePhoneNumberParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ChangePhoneNumberParams {
  /** The new phone number of the user in international format */
  phoneNumber?: string
  /** Pass true if the code can be sent via flash call to the specified phone number */
  allowFlashCall?: boolean
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  isCurrentPhoneNumber?: boolean
}
