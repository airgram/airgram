import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OrderInfoInput } from '../inputs'
import { ValidatedOrderInfoUnion } from '../outputs'

export interface ValidateOrderInfoParams {
  chatId?: number // Chat identifier of the Invoice message
  messageId?: number // Message identifier
  orderInfo?: OrderInfoInput // The order information, provided by the user; pass null if empty
  allowSave?: boolean // True, if the order information can be saved
}

/**
 * Validates the order information provided by a user and returns the available shipping
 * options for a flexible invoice
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {OrderInfoInput} [params.orderInfo] - The order information, provided by
 * the user; pass null if empty
 * @param {boolean} [params.allowSave] - True, if the order information can be saved
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ValidateOrderInfoParams, ValidatedOrderInfoUnion>>}
 */
export type validateOrderInfo = (
  params?: ValidateOrderInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ValidateOrderInfoParams, ValidatedOrderInfoUnion>>
