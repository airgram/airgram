import { LabeledPriceUnion } from './LabeledPrice'

export interface ShippingOption {
  _: 'shippingOption'
  id: string
  title: string
  prices: LabeledPriceUnion[]
}

export type ShippingOptionUnion = ShippingOption
