import { OkUnion } from '../outputs'

/**
 * Accepts Telegram terms of services
 * @param {Object} params
 * @param {string} [params.termsOfServiceId] - Terms of service identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AcceptTermsOfServiceMethod = <ResponseT = OkUnion>(
  params: AcceptTermsOfServiceParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AcceptTermsOfServiceParams {
  /** Terms of service identifier */
  termsOfServiceId?: string
}
