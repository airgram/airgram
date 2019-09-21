import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputPassportElementErrorInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetPassportElementErrorsParams {
  userId?: number // User identifier
  errors?: InputPassportElementErrorInput[] // The errors
}

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors;
 * for bots only. The user will not be able to resend the elements, until the errors
 * are fixed
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {InputPassportElementErrorInput[]} [params.errors] - The errors
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPassportElementErrorsParams, OkUnion>>}
 */
export type setPassportElementErrors = (
  params?: SetPassportElementErrorsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPassportElementErrorsParams, OkUnion>>
