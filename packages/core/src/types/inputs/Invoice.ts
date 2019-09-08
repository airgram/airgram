import { LabeledPricePartInput } from './index'

export type InvoiceInputUnion = InvoiceInput

/** Product invoice */
export interface InvoiceInput {
  _: 'invoice'
  /** ISO 4217 currency code */
  currency?: string
  /** A list of objects used to calculate the total price of the product */
  priceParts?: LabeledPricePartInput[]
  /** True, if the payment is a test payment */
  isTest?: boolean
  /** True, if the user's name is needed for payment */
  needName?: boolean
  /** True, if the user's phone number is needed for payment */
  needPhoneNumber?: boolean
  /** True, if the user's email address is needed for payment */
  needEmailAddress?: boolean
  /** True, if the user's shipping address is needed for payment */
  needShippingAddress?: boolean
  /** True, if the user's phone number will be sent to the provider */
  sendPhoneNumberToProvider?: boolean
  /** True, if the user's email address will be sent to the provider */
  sendEmailAddressToProvider?: boolean
  /** True, if the total price depends on the shipping method */
  isFlexible?: boolean
}
