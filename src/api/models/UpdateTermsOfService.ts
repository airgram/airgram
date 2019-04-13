import { TermsOfService } from '../outputs'

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method should be called with the reason "Decline ToS update"
 */
export class UpdateTermsOfServiceBaseModel {
  public _: 'updateTermsOfService'
  /** Identifier of the terms of service */
  public termsOfServiceId: string
  /** The new terms of service */
  public termsOfService: TermsOfService
}
