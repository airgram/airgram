import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BankCardInfoUnion } from '../outputs'

export interface GetBankCardInfoParams {
  bankCardNumber?: string // The bank card number
}

/**
 * Returns information about a bank card
 * @param {Object} params
 * @param {string} [params.bankCardNumber] - The bank card number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBankCardInfoParams, BankCardInfoUnion>>}
 */
export type getBankCardInfo = (
  params?: GetBankCardInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBankCardInfoParams, BankCardInfoUnion>>
