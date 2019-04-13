import { OptionValueUnion } from '../outputs'

/**
 * Returns the value of an option by its name. (Check the list of available options
 * on https://core.telegram.org/tdlib/options.) Can be called before authorization
 * @param {Object} params
 * @param {string} [params.name] - The name of the option
 * @param {Object} state
 * @returns {OptionValueUnion}
 */
export type GetOptionMethod = <ResponseT = OptionValueUnion>(
  params: GetOptionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetOptionParams {
  /** The name of the option */
  name?: string
}
