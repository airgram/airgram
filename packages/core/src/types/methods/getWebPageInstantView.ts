import { ApiRequestOptions, ApiResponse } from '../airgram'
import { WebPageInstantViewUnion } from '../outputs'

export interface GetWebPageInstantViewParams {
  url?: string // The web page URL
  forceFull?: boolean // If true, the full instant view for the web page will be returned
}

/**
 * Returns an instant view version of a web page if available. Returns a 404 error if
 * the web page has no instant view page
 * @param {Object} params
 * @param {string} [params.url] - The web page URL
 * @param {boolean} [params.forceFull] - If true, the full instant view for the web
 * page will be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetWebPageInstantViewParams, WebPageInstantViewUnion>>}
 */
export type getWebPageInstantView<ExtensionT> = (
  params?: GetWebPageInstantViewParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetWebPageInstantViewParams, WebPageInstantViewUnion> & ExtensionT>
