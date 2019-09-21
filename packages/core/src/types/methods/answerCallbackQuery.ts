import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AnswerCallbackQueryParams {
  callbackQueryId?: string // Identifier of the callback query
  text?: string // Text of the answer
  showAlert?: boolean // If true, an alert should be shown to the user instead of a toast notification
  url?: string // URL to be opened
  cacheTime?: number // Time during which the result of the query can be cached, in seconds
}

/**
 * Sets the result of a callback query; for bots only
 * @param {Object} params
 * @param {string} [params.callbackQueryId] - Identifier of the callback query
 * @param {string} [params.text] - Text of the answer
 * @param {boolean} [params.showAlert] - If true, an alert should be shown to the
 * user instead of a toast notification
 * @param {string} [params.url] - URL to be opened
 * @param {number} [params.cacheTime] - Time during which the result of the query
 * can be cached, in seconds
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerCallbackQueryParams, OkUnion>>}
 */
export type answerCallbackQuery = (
  params?: AnswerCallbackQueryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AnswerCallbackQueryParams, OkUnion>>
