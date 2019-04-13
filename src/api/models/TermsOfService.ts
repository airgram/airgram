import { FormattedText } from '../outputs'

/** Contains Telegram terms of service */
export class TermsOfServiceBaseModel {
  public _: 'termsOfService'
  /** Text of the terms of service */
  public text: FormattedText
  /** Mininum age of a user to be able to accept the terms; 0 if any */
  public minUserAge: number
  /** True, if a blocking popup with terms of service must be shown to the user */
  public showPopup: boolean
}
