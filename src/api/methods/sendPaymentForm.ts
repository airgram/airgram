import { InputCredentialsInputUnion } from '../inputs'
import { PaymentResultUnion } from '../outputs'

/**
 * Sends a filled-out payment form to the bot for final verification
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.orderInfoId] - Identifier returned by ValidateOrderInfo,
 * or an empty string
 * @param {string} [params.shippingOptionId] - Identifier of a chosen shipping option,
 * if applicable
 * @param {InputCredentialsInputUnion} [params.credentials] - The credentials chosen
 * by user for payment
 * @param {Object} state
 * @returns {PaymentResultUnion}
 */
export type SendPaymentFormMethod = <ResponseT = PaymentResultUnion>(
  params: SendPaymentFormParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendPaymentFormParams {
  /** Chat identifier of the Invoice message */
  chatId?: number
  /** Message identifier */
  messageId?: number
  /** Identifier returned by ValidateOrderInfo, or an empty string */
  orderInfoId?: string
  /** Identifier of a chosen shipping option, if applicable */
  shippingOptionId?: string
  /** The credentials chosen by user for payment */
  credentials?: InputCredentialsInputUnion
}
