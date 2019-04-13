import { PassportElementsUnion } from '../outputs'

/**
 * Returns all available Telegram Passport elements
 * @param {Object} params
 * @param {string} [params.password] - Password of the current user
 * @param {Object} state
 * @returns {PassportElementsUnion}
 */
export type GetAllPassportElementsMethod = <ResponseT = PassportElementsUnion>(
  params: GetAllPassportElementsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetAllPassportElementsParams {
  /** Password of the current user */
  password?: string
}
