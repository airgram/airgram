import { PaymentFormUnion } from '../outputs'

/**
 * Returns an invoice payment form. This method should be called when the user presses
 * inlineKeyboardButtonBuy
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {Object} state
 * @returns {PaymentFormUnion}
 */
export type GetPaymentFormMethod = <ResponseT = PaymentFormUnion>(
  params: GetPaymentFormParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPaymentFormParams {
  /** Chat identifier of the Invoice message */
  chatId?: number
  /** Message identifier */
  messageId?: number
}
