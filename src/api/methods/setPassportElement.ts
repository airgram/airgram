import { InputPassportElementInputUnion } from '../inputs'
import { PassportElementUnion } from '../outputs'

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message
 * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
 * or the chosen email address must be verified first
 * @param {Object} params
 * @param {InputPassportElementInputUnion} [params.element] - Input Telegram Passport
 * element
 * @param {string} [params.password] - Password of the current user
 * @param {Object} state
 * @returns {PassportElementUnion}
 */
export type SetPassportElementMethod = <ResponseT = PassportElementUnion>(
  params: SetPassportElementParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetPassportElementParams {
  /** Input Telegram Passport element */
  element?: InputPassportElementInputUnion
  /** Password of the current user */
  password?: string
}
