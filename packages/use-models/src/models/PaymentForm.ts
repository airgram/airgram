import {
  Invoice,
  OrderInfo,
  PaymentsProviderStripe,
  SavedCredentials
} from '@airgram/core'

/** Contains information about an invoice payment form */
export class PaymentFormBaseModel {
  public _: 'paymentForm'

  /** The payment form identifier */
  public id: string

  /** Full information of the invoice */
  public invoice: Invoice

  /** Payment form URL */
  public url: string

  /** User identifier of the seller bot */
  public sellerBotUserId: number

  /** User identifier of the payment provider bot */
  public paymentsProviderUserId: number

  /**
   * Information about the payment provider, if available, to support it natively without
   * the need for opening the URL; may be null
   */
  public paymentsProvider?: PaymentsProviderStripe

  /** Saved server-side order information; may be null */
  public savedOrderInfo?: OrderInfo

  /** Information about saved card credentials; may be null */
  public savedCredentials?: SavedCredentials

  /** True, if the user can choose to save credentials */
  public canSaveCredentials: boolean

  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  public needPassword: boolean
}
