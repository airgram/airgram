import { Invoice, OrderInfo, ShippingOption } from './index'

export type PaymentReceiptUnion = PaymentReceipt

/** Contains information about a successful payment */
export interface PaymentReceipt {
  _: 'paymentReceipt'
  /** Point in time (Unix timestamp) when the payment was made */
  date: number
  /** User identifier of the payment provider bot */
  paymentsProviderUserId: number
  /** Contains information about the invoice */
  invoice: Invoice
  /** Contains order information; may be null */
  orderInfo?: OrderInfo
  /** Chosen shipping option; may be null */
  shippingOption?: ShippingOption
  /** Title of the saved credentials */
  credentialsTitle: string
}
