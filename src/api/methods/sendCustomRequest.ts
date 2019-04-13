import { CustomRequestResultUnion } from '../outputs'

/**
 * Sends a custom request; for bots only
 * @param {Object} params
 * @param {string} [params.method] - The method name
 * @param {string} [params.parameters] - JSON-serialized method parameters
 * @param {Object} state
 * @returns {CustomRequestResultUnion}
 */
export type SendCustomRequestMethod = <ResponseT = CustomRequestResultUnion>(
  params: SendCustomRequestParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendCustomRequestParams {
  /** The method name */
  method?: string
  /** JSON-serialized method parameters */
  parameters?: string
}
