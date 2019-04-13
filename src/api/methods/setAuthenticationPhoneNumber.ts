import { OkUnion } from '../outputs'

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetAuthenticationPhoneNumberMethod = <ResponseT = OkUnion>(
  params: SetAuthenticationPhoneNumberParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetAuthenticationPhoneNumberParams {
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
