import { OptionValueInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.name] - The name of the option
 * @param {OptionValueInputUnion} [params.value] - The new value of the option
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetOptionMethod = <ResponseT = OkUnion>(
  params: SetOptionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetOptionParams {
  /** The name of the option */
  name?: string
  /** The new value of the option */
  value?: OptionValueInputUnion
}
