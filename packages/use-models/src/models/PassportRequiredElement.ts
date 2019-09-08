import { PassportSuitableElement } from '@airgram/core'

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export class PassportRequiredElementBaseModel {
  public _: 'passportRequiredElement'

  /** List of Telegram Passport elements any of which is enough to provide */
  public suitableElements: PassportSuitableElement[]
}
