import { LabeledPricePartInput } from './index'

export type ShippingOptionInputUnion = ShippingOptionInput

/** One shipping option */
export interface ShippingOptionInput {
  _: 'shippingOption'
  /** Shipping option identifier */
  id?: string
  /** Option title */
  title?: string
  /** A list of objects used to calculate the total shipping costs */
  priceParts?: LabeledPricePartInput[]
}
