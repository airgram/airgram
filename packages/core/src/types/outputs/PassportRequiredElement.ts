import { PassportSuitableElement } from './index'

export type PassportRequiredElementUnion = PassportRequiredElement

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export interface PassportRequiredElement {
  _: 'passportRequiredElement'
  /** List of Telegram Passport elements any of which is enough to provide */
  suitableElements: PassportSuitableElement[]
}
