import { OrderInfo } from '../outputs'

/** A payment has been completed; for bots only */
export class MessagePaymentSuccessfulBotBaseModel {
  public _: 'messagePaymentSuccessfulBot'
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  public invoiceMessageId: number
  /** Currency for price of the product */
  public currency: string
  /** Total price for the product, in the minimal quantity of the currency */
  public totalAmount: number
  /** Invoice payload */
  public invoicePayload: string
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  public shippingOptionId: string
  /** Information about the order; may be null */
  public orderInfo?: OrderInfo
  /** Telegram payment identifier */
  public telegramPaymentChargeId: string
  /** Provider payment identifier */
  public providerPaymentChargeId: string
}
