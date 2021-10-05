import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputCredentialsInputUnion } from '../inputs'
import { PaymentResultUnion } from '../outputs'

export interface SendPaymentFormParams {
  chatId?: number // Chat identifier of the Invoice message
  messageId?: number // Message identifier
  paymentFormId?: string // Payment form identifier returned by getPaymentForm
  orderInfoId?: string // Identifier returned by validateOrderInfo, or an empty string
  shippingOptionId?: string // Identifier of a chosen shipping option, if applicable
  credentials?: InputCredentialsInputUnion // The credentials chosen by user for payment
  tipAmount?: number // Chosen by the user amount of tip in the smallest units of the currency
}

/**
 * Sends a filled-out payment form to the bot for final verification
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {string} [params.paymentFormId] - Payment form identifier returned by getPaymentForm
 * @param {string} [params.orderInfoId] - Identifier returned by validateOrderInfo,
 * or an empty string
 * @param {string} [params.shippingOptionId] - Identifier of a chosen shipping option,
 * if applicable
 * @param {InputCredentialsInputUnion} [params.credentials] - The credentials chosen
 * by user for payment
 * @param {number} [params.tipAmount] - Chosen by the user amount of tip in the smallest
 * units of the currency
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>}
 */
export type sendPaymentForm = (
  params?: SendPaymentFormParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPaymentFormParams, PaymentResultUnion>>
