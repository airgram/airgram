import { InvoiceUnion } from './Invoice'
import { PaymentRequestedInfoUnion } from './PaymentRequestedInfo'
import { ShippingOptionUnion } from './ShippingOption'
import { UserUnion } from './User'

export interface PaymentsPaymentReceipt {
  _: 'payments.paymentReceipt'
  flags: number
  date: number
  bot_id: number
  invoice: InvoiceUnion
  provider_id: number
  info?: PaymentRequestedInfoUnion
  shipping?: ShippingOptionUnion
  currency: string
  total_amount: number
  credentials_title: string
  users: UserUnion[]
}

export type PaymentsPaymentReceiptUnion = PaymentsPaymentReceipt
