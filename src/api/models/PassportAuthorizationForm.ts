import {
  PassportElementError,
  PassportElementUnion,
  PassportRequiredElement
} from '../outputs'

/** Contains information about a Telegram Passport authorization form that was requested */
export class PassportAuthorizationFormBaseModel {
  public _: 'passportAuthorizationForm'
  /** Unique identifier of the authorization form */
  public id: number
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  public requiredElements: PassportRequiredElement[]
  /** Already available Telegram Passport elements */
  public elements: PassportElementUnion[]
  /** Errors in the elements that are already available */
  public errors: PassportElementError[]
  /** URL for the privacy policy of the service; can be empty */
  public privacyPolicyUrl: string
}
