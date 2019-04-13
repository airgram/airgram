import { OkUnion } from '../outputs'

/**
 * Re-sends an authentication code to the user. Works only when the current authorization
 * state is authorizationStateWaitCode and the next_code_type of the result is not null
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ResendAuthenticationCodeMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
