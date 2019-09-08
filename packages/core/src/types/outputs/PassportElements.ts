import { PassportElementUnion } from './index'

export type PassportElementsUnion = PassportElements

/** Contains information about saved Telegram Passport elements */
export interface PassportElements {
  _: 'passportElements'
  /** Telegram Passport elements */
  elements: PassportElementUnion[]
}
