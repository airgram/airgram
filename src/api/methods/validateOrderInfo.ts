import { OrderInfoInput } from '../inputs'
import { ValidatedOrderInfoUnion } from '../outputs'

/**
 * Validates the order information provided by a user and returns the available shipping
 * options for a flexible invoice
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier of the Invoice message
 * @param {number} [params.messageId] - Message identifier
 * @param {OrderInfoInput} [params.orderInfo] - The order information, provided by
 * the user
 * @param {boolean} [params.allowSave] - True, if the order information can be saved
 * @param {Object} state
 * @returns {ValidatedOrderInfoUnion}
 */
export type ValidateOrderInfoMethod = <ResponseT = ValidatedOrderInfoUnion>(
  params: ValidateOrderInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ValidateOrderInfoParams {
  /** Chat identifier of the Invoice message */
  chatId?: number
  /** Message identifier */
  messageId?: number
  /** The order information, provided by the user */
  orderInfo?: OrderInfoInput
  /** True, if the order information can be saved */
  allowSave?: boolean
}
