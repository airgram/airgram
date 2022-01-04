import { PassportRequiredElement } from './index'

export type PassportAuthorizationFormUnion = PassportAuthorizationForm

/** Contains information about a Telegram Passport authorization form that was requested */
export interface PassportAuthorizationForm {
  _: 'passportAuthorizationForm'
  /** Unique identifier of the authorization form */
  id: number
  /** Telegram Passport elements that must be provided to complete the form */
  requiredElements: PassportRequiredElement[]
  /** URL for the privacy policy of the service; may be empty */
  privacyPolicyUrl: string
}
