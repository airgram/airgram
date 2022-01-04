import { Invoice, OrderInfo, Photo, ShippingOption } from './index'

export type PaymentReceiptUnion = PaymentReceipt

/** Contains information about a successful payment */
export interface PaymentReceipt {
  _: 'paymentReceipt'
  /** Product title */
  title: string
  /** Product description */
  description: string
  /** Product photo; may be null */
  photo?: Photo
  /** Point in time (Unix timestamp) when the payment was made */
  date: number
  /** User identifier of the seller bot */
  sellerBotUserId: number
  /** User identifier of the payment provider bot */
  paymentsProviderUserId: number
  /** Information about the invoice */
  invoice: Invoice
  /** Order information; may be null */
  orderInfo?: OrderInfo
  /** Chosen shipping option; may be null */
  shippingOption?: ShippingOption
  /** Title of the saved credentials chosen by the buyer */
  credentialsTitle: string
  /** The amount of tip chosen by the buyer in the smallest units of the currency */
  tipAmount: number
}
