import { DeepLinkInfoUnion } from '../outputs'

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
 * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
 * Can be called before authorization
 * @param {Object} params
 * @param {string} [params.link] - The link
 * @param {Object} state
 * @returns {DeepLinkInfoUnion}
 */
export type GetDeepLinkInfoMethod = <ResponseT = DeepLinkInfoUnion>(
  params: GetDeepLinkInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetDeepLinkInfoParams {
  /** The link */
  link?: string
}
