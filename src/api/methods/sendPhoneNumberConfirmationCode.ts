import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 * @param {Object} params
 * @param {string} [params.hash] - Value of the "hash" parameter from the link
 * @param {string} [params.phoneNumber] - Value of the "phone" parameter from the
 * link
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {Object} state
 * @returns {AuthenticationCodeInfoUnion}
 */
export type SendPhoneNumberConfirmationCodeMethod = <ResponseT = AuthenticationCodeInfoUnion>(
  params: SendPhoneNumberConfirmationCodeParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendPhoneNumberConfirmationCodeParams {
  /** Value of the "hash" parameter from the link */
  hash?: string
  /** Value of the "phone" parameter from the link */
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
