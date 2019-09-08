import {
  Invoice,
  OrderInfo,
  PaymentsProviderStripe,
  SavedCredentials
} from '@airgram/core'

/** Contains information about an invoice payment form */
export class PaymentFormBaseModel {
  public _: 'paymentForm'

  /** Full information of the invoice */
  public invoice: Invoice

  /** Payment form URL */
  public url: string

  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  public paymentsProvider?: PaymentsProviderStripe

  /** Saved server-side order information; may be null */
  public savedOrderInfo?: OrderInfo

  /** Contains information about saved card credentials; may be null */
  public savedCredentials?: SavedCredentials

  /** True, if the user can choose to save credentials */
  public canSaveCredentials: boolean

  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  public needPassword: boolean
}
