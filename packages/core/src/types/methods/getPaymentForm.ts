import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PaymentFormUnion } from '../outputs'

export interface GetPaymentFormParams {
  chatId?: number // Chat identifier of the Invoice message
  messageId?: number // Message identifier
}

/**
 * Returns an invoice payment form. This method should be called when the user presses
 * inlineKeyboardButtonBuy
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPaymentFormParams, PaymentFormUnion>>}
 */
export type getPaymentForm = (
  params?: GetPaymentFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPaymentFormParams, PaymentFormUnion>>
