import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageLinkInfoUnion } from '../outputs'

export interface GetMessageLinkInfoParams {
  url?: string // The message link in the format "https://t.me/c/...", or "tg://privatepost?...", or "https://t.me/username/...", or "tg://resolve?..."
}

/**
 * Returns information about a public or private message link
 * @param {Object} params
 * @param {string} [params.url] - The message link in the format "https://t.me/c/...",
 * or "tg://privatepost?...", or "https://t.me/username/...", or "tg://resolve?..."
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion>>}
 */
export type getMessageLinkInfo<ExtensionT> = (
  params?: GetMessageLinkInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageLinkInfoParams, MessageLinkInfoUnion> & ExtensionT>
