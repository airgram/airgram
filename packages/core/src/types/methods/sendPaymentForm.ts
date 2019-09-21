import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputCredentialsInputUnion } from '../inputs'
import { PaymentResultUnion } from '../outputs'

export interface SendPaymentFormParams {
  chatId?: number // Chat identifier of the Invoice message
  messageId?: number // Message identifier
  orderInfoId?: string // Identifier returned by ValidateOrderInfo, or an empty string
  shippingOptionId?: string // Identifier of a chosen shipping option, if applicable
  credentials?: InputCredentialsInputUnion // The credentials chosen by user for payment
}

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
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>}
 */
export type sendPaymentForm = (
  params?: SendPaymentFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>
