import { PassportElementTypeInputUnion } from '../inputs'
import { PassportElementUnion } from '../outputs'

/**
 * Returns one of the available Telegram Passport elements
 * @param {Object} params
 * @param {PassportElementTypeInputUnion} [params.type] - Telegram Passport element
 * type
 * @param {string} [params.password] - Password of the current user
 * @param {Object} state
 * @returns {PassportElementUnion}
 */
export type GetPassportElementMethod = <ResponseT = PassportElementUnion>(
  params: GetPassportElementParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPassportElementParams {
  /** Telegram Passport element type */
  type?: PassportElementTypeInputUnion
  /** Password of the current user */
  password?: string
}
