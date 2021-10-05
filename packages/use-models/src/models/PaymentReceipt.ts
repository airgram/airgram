import { Invoice, OrderInfo, Photo, ShippingOption } from '@airgram/core'

/** Contains information about a successful payment */
export class PaymentReceiptBaseModel {
  public _: 'paymentReceipt'

  /** Product title */
  public title: string

  /** Product description */
  public description: string

  /** Product photo; may be null */
  public photo?: Photo

  /** Point in time (Unix timestamp) when the payment was made */
  public date: number

  /** User identifier of the seller bot */
  public sellerBotUserId: number

  /** User identifier of the payment provider bot */
  public paymentsProviderUserId: number

  /** Contains information about the invoice */
  public invoice: Invoice

  /** Order information; may be null */
  public orderInfo?: OrderInfo

  /** Chosen shipping option; may be null */
  public shippingOption?: ShippingOption

  /** Title of the saved credentials chosen by the buyer */
  public credentialsTitle: string

  /** The amount of tip chosen by the buyer in the smallest units of the currency */
  public tipAmount: number
}
