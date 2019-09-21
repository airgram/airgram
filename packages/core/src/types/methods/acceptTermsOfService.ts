import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AcceptTermsOfServiceParams {
  termsOfServiceId?: string // Terms of service identifier
}

/**
 * Accepts Telegram terms of services
 * @param {Object} params
 * @param {string} [params.termsOfServiceId] - Terms of service identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AcceptTermsOfServiceParams, OkUnion>>}
 */
export type acceptTermsOfService = (
  params?: AcceptTermsOfServiceParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AcceptTermsOfServiceParams, OkUnion>>
