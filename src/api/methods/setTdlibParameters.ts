import { TdlibParametersInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization
 * state is authorizationStateWaitTdlibParameters
 * @param {Object} params
 * @param {TdlibParametersInput} [params.parameters] - Parameters
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetTdlibParametersMethod = <ResponseT = OkUnion>(
  params: SetTdlibParametersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetTdlibParametersParams {
  /** Parameters */
  parameters?: TdlibParametersInput
}
