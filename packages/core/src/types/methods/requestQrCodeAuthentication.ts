import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RequestQrCodeAuthenticationParams {
  otherUserIds?: number[] // List of user identifiers of other users currently using the client
}

/**
 * Requests QR code authentication by scanning a QR code on another logged in device.
 * Works only when the current authorization state is authorizationStateWaitPhoneNumber
 * @param {Object} params
 * @param {number[]} [params.otherUserIds] - List of user identifiers of other users
 * currently using the client
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RequestQrCodeAuthenticationParams, OkUnion>>}
 */
export type requestQrCodeAuthentication = (
  params?: RequestQrCodeAuthenticationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RequestQrCodeAuthenticationParams, OkUnion>>
