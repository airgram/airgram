import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PaymentFormThemeInput } from '../inputs'
import { PaymentFormUnion } from '../outputs'

export interface GetPaymentFormParams {
  chatId?: number // Chat identifier of the Invoice message
  messageId?: number // Message identifier
  theme?: PaymentFormThemeInput // Preferred payment form theme; pass null to use the default theme
}

/**
 * Returns an invoice payment form. This method must be called when the user presses
 * inlineKeyboardButtonBuy
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {PaymentFormThemeInput} [params.theme] - Preferred payment form theme;
 * pass null to use the default theme
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPaymentFormParams, PaymentFormUnion>>}
 */
export type getPaymentForm = (
  params?: GetPaymentFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPaymentFormParams, PaymentFormUnion>>
