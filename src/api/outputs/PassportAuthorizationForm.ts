import {
  PassportElementError,
  PassportElementUnion,
  PassportRequiredElement
} from './index'

export type PassportAuthorizationFormUnion = PassportAuthorizationForm

/** Contains information about a Telegram Passport authorization form that was requested */
export interface PassportAuthorizationForm {
  _: 'passportAuthorizationForm'
  /** Unique identifier of the authorization form */
  id: number
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  requiredElements: PassportRequiredElement[]
  /** Already available Telegram Passport elements */
  elements: PassportElementUnion[]
  /** Errors in the elements that are already available */
  errors: PassportElementError[]
  /** URL for the privacy policy of the service; can be empty */
  privacyPolicyUrl: string
}
