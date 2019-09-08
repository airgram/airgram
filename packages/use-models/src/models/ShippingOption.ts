import { LabeledPricePart } from '@airgram/core'

/** One shipping option */
export class ShippingOptionBaseModel {
  public _: 'shippingOption'

  /** Shipping option identifier */
  public id: string

  /** Option title */
  public title: string

  /** A list of objects used to calculate the total shipping costs */
  public priceParts: LabeledPricePart[]
}
