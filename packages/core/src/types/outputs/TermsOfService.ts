import { FormattedText } from './index'

export type TermsOfServiceUnion = TermsOfService

/** Contains Telegram terms of service */
export interface TermsOfService {
  _: 'termsOfService'
  /** Text of the terms of service */
  text: FormattedText
  /** The minimum age of a user to be able to accept the terms; 0 if any */
  minUserAge: number
  /** True, if a blocking popup with terms of service must be shown to the user */
  showPopup: boolean
}
