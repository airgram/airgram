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
  /** The payment form identifier */
  id: string
  /** Full information of the invoice */
  invoice: Invoice
  /** Payment form URL */
  url: string
  /** User identifier of the seller bot */
  sellerBotUserId: number
  /** User identifier of the payment provider bot */
  paymentsProviderUserId: number
  /**
   * Information about the payment provider, if available, to support it natively without
   * the need for opening the URL; may be null
   */
  paymentsProvider?: PaymentsProviderStripe
  /** Saved server-side order information; may be null */
  savedOrderInfo?: OrderInfo
  /** Information about saved card credentials; may be null */
  savedCredentials?: SavedCredentials
  /** True, if the user can choose to save credentials */
  canSaveCredentials: boolean
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  needPassword: boolean
}
