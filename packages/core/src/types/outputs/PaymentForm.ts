import {
  Invoice,
  OrderInfo,
  PaymentsProviderStripe,
  SavedCredentials
} from './index'

export type PaymentFormUnion = PaymentForm

/** Contains information about an invoice payment form */
export interface PaymentForm {
  _: 'paymentForm'
  /** Full information of the invoice */
  invoice: Invoice
  /** Payment form URL */
  url: string
  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  paymentsProvider?: PaymentsProviderStripe
  /** Saved server-side order information; may be null */
  savedOrderInfo?: OrderInfo
  /** Contains information about saved card credentials; may be null */
  savedCredentials?: SavedCredentials
  /** True, if the user can choose to save credentials */
  canSaveCredentials: boolean
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  needPassword: boolean
}
