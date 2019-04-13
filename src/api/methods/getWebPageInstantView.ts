import { WebPageInstantViewUnion } from '../outputs'

/**
 * Returns an instant view version of a web page if available. Returns a 404 error if
 * the web page has no instant view page
 * @param {Object} params
 * @param {string} [params.url] - The web page URL
 * @param {boolean} [params.forceFull] - If true, the full instant view for the web
 * page will be returned
 * @param {Object} state
 * @returns {WebPageInstantViewUnion}
 */
export type GetWebPageInstantViewMethod = <ResponseT = WebPageInstantViewUnion>(
  params: GetWebPageInstantViewParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetWebPageInstantViewParams {
  /** The web page URL */
  url?: string
  /** If true, the full instant view for the web page will be returned */
  forceFull?: boolean
}
