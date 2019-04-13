import { PassportElementTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Deletes a Telegram Passport element
 * @param {Object} params
 * @param {PassportElementTypeInputUnion} [params.type] - Element type
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeletePassportElementMethod = <ResponseT = OkUnion>(
  params: DeletePassportElementParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeletePassportElementParams {
  /** Element type */
  type?: PassportElementTypeInputUnion
}
