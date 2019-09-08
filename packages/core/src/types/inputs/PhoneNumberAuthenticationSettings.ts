export type PhoneNumberAuthenticationSettingsInputUnion = PhoneNumberAuthenticationSettingsInput

/** Contains settings for the authentication of the user's phone number */
export interface PhoneNumberAuthenticationSettingsInput {
  _: 'phoneNumberAuthenticationSettings'
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allowFlashCall?: boolean
  /** Pass true if the authenticated phone number is used on the current device */
  isCurrentPhoneNumber?: boolean
  /**
   * For official applications only. True, if the app can use Android SMS Retriever API
   * (requires Google Play Services >= 10.2) to automatically receive the authentication
   * code from the SMS. See https://developers.google.com/identity/sms-retriever/ for
   * more details
   */
  allowSmsRetrieverApi?: boolean
}
