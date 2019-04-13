import { Photo } from '../outputs'

/** A message with an invoice from a bot */
export class MessageInvoiceBaseModel {
  public _: 'messageInvoice'
  /** Product title */
  public title: string
  /** Product description */
  public description: string
  /** Product photo; may be null */
  public photo?: Photo
  /** Currency for the product price */
  public currency: string
  /** Product total price in the minimal quantity of the currency */
  public totalAmount: number
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  public startParameter: string
  /** True, if the invoice is a test invoice */
  public isTest: boolean
  /** True, if the shipping address should be specified */
  public needShippingAddress: boolean
  /** The identifier of the message with the receipt, after the product has been purchased */
  public receiptMessageId: number
}
