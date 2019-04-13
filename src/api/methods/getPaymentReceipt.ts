import { PaymentReceiptUnion } from '../outputs'

/**
 * Returns information about a successful payment
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the PaymentSuccessful message
 * @param {number} [params.messageId] - Message identifier
 * @param {Object} state
 * @returns {PaymentReceiptUnion}
 */
export type GetPaymentReceiptMethod = <ResponseT = PaymentReceiptUnion>(
  params: GetPaymentReceiptParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPaymentReceiptParams {
  /** Chat identifier of the PaymentSuccessful message */
  chatId?: number
  /** Message identifier */
  messageId?: number
}
