import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SessionUnion } from '../outputs'

export interface ConfirmQrCodeAuthenticationParams {
  link?: string // A link from a QR code. The link must be scanned by the in-app camera
}

/**
 * Confirms QR code authentication on another device. Returns created session on success
 * @param {Object} params
 * @param {string} [params.link] - A link from a QR code. The link must be scanned
 * by the in-app camera
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ConfirmQrCodeAuthenticationParams, SessionUnion>>}
 */
export type confirmQrCodeAuthentication = (
  params?: ConfirmQrCodeAuthenticationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ConfirmQrCodeAuthenticationParams, SessionUnion>>
