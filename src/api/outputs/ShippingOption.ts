import { LabeledPricePart } from './index'

export type ShippingOptionUnion = ShippingOption

/** One shipping option */
export interface ShippingOption {
  _: 'shippingOption'
  /** Shipping option identifier */
  id: string
  /** Option title */
  title: string
  /** A list of objects used to calculate the total shipping costs */
  priceParts: LabeledPricePart[]
}
