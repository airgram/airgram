import { PassportElementTypeUnion } from '../outputs'

/** Contains information about a Telegram Passport element that was requested by a service */
export class PassportSuitableElementBaseModel {
  public _: 'passportSuitableElement'
  /** Type of the element */
  public type: PassportElementTypeUnion
  /** True, if a selfie is required with the identity document */
  public isSelfieRequired: boolean
  /** True, if a certified English translation is required with the document */
  public isTranslationRequired: boolean
  /**
   * True, if personal details must include the user's name in the language of their country
   * of residence
   */
  public isNativeNameRequired: boolean
}
