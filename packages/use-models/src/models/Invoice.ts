import { LabeledPricePart } from '@airgram/core'

/** Product invoice */
export class InvoiceBaseModel {
  public _: 'invoice'

  /** ISO 4217 currency code */
  public currency: string

  /** A list of objects used to calculate the total price of the product */
  public priceParts: LabeledPricePart[]

  /** The maximum allowed amount of tip in the smallest units of the currency */
  public maxTipAmount: number

  /** Suggested amounts of tip in the smallest units of the currency */
  public suggestedTipAmounts: number[]

  /** True, if the payment is a test payment */
  public isTest: boolean

  /** True, if the user's name is needed for payment */
  public needName: boolean

  /** True, if the user's phone number is needed for payment */
  public needPhoneNumber: boolean

  /** True, if the user's email address is needed for payment */
  public needEmailAddress: boolean

  /** True, if the user's shipping address is needed for payment */
  public needShippingAddress: boolean

  /** True, if the user's phone number will be sent to the provider */
  public sendPhoneNumberToProvider: boolean

  /** True, if the user's email address will be sent to the provider */
  public sendEmailAddressToProvider: boolean

  /** True, if the total price depends on the shipping method */
  public isFlexible: boolean
}
