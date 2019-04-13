import { OkUnion } from '../outputs'

/**
 * Sets the result of a callback query; for bots only
 * @param {Object} params
 * @param {number | string} [params.callbackQueryId] - Identifier of the callback
 * query
 * @param {string} [params.text] - Text of the answer
 * @param {boolean} [params.showAlert] - If true, an alert should be shown to the
 * user instead of a toast notification
 * @param {string} [params.url] - URL to be opened
 * @param {number} [params.cacheTime] - Time during which the result of the query
 * can be cached, in seconds
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AnswerCallbackQueryMethod = <ResponseT = OkUnion>(
  params: AnswerCallbackQueryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AnswerCallbackQueryParams {
  /** Identifier of the callback query */
  callbackQueryId?: number | string
  /** Text of the answer */
  text?: string
  /** If true, an alert should be shown to the user instead of a toast notification */
  showAlert?: boolean
  /** URL to be opened */
  url?: string
  /** Time during which the result of the query can be cached, in seconds */
  cacheTime?: number
}
