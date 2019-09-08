import { TermsOfService } from '@airgram/core'

/**
 * The user is unregistered and need to accept terms of service and enter their first
 * name and last name to finish registration
 */
export class AuthorizationStateWaitRegistrationBaseModel {
  public _: 'authorizationStateWaitRegistration'

  /** Telegram terms of service */
  public termsOfService: TermsOfService
}
