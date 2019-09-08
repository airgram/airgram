import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ConnectedWebsitesUnion } from '../outputs'

/**
 * Returns all website where the current user used Telegram to log in
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ConnectedWebsitesUnion>>}
 */
export type getConnectedWebsites<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ConnectedWebsitesUnion> & ExtensionT>
