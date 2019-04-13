import { InputPassportElementErrorInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors;
 * for bots only. The user will not be able to resend the elements, until the errors
 * are fixed
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {InputPassportElementErrorInput[]} [params.errors] - The errors
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetPassportElementErrorsMethod = <ResponseT = OkUnion>(
  params: SetPassportElementErrorsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetPassportElementErrorsParams {
  /** User identifier */
  userId?: number
  /** The errors */
  errors?: InputPassportElementErrorInput[]
}
