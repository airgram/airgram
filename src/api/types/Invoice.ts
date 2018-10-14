import { LabeledPriceUnion } from './LabeledPrice'

export interface Invoice {
  _: 'invoice'
  flags: number
  test?: true
  name_requested?: true
  phone_requested?: true
  email_requested?: true
  shipping_address_requested?: true
  flexible?: true
  currency: string
  prices: LabeledPriceUnion[]
}

export type InvoiceUnion = Invoice
