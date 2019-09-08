import { Invoice, OrderInfo, ShippingOption } from '@airgram/core'

/** Contains information about a successful payment */
export class PaymentReceiptBaseModel {
  public _: 'paymentReceipt'

  /** Point in time (Unix timestamp) when the payment was made */
  public date: number

  /** User identifier of the payment provider bot */
  public paymentsProviderUserId: number

  /** Contains information about the invoice */
  public invoice: Invoice

  /** Contains order information; may be null */
  public orderInfo?: OrderInfo

  /** Chosen shipping option; may be null */
  public shippingOption?: ShippingOption

  /** Title of the saved credentials */
  public credentialsTitle: string
}
