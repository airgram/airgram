import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputInlineQueryResultInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface AnswerInlineQueryParams {
  inlineQueryId?: string // Identifier of the inline query
  isPersonal?: boolean // Pass true if results may be cached and returned only for the user that sent the query. By default, results may be returned to any user who sends the same query
  results?: InputInlineQueryResultInputUnion[] // The results of the query
  cacheTime?: number // Allowed time to cache the results of the query, in seconds
  nextOffset?: string // Offset for the next inline query; pass an empty string if there are no more results
  switchPmText?: string // If non-empty, this text must be shown on the button that opens a private chat with the bot and sends a start message to the bot with the parameter switch_pm_parameter
  switchPmParameter?: string // The parameter for the bot start message
}

/**
 * Sets the result of an inline query; for bots only
 * @param {Object} params
 * @param {string} [params.inlineQueryId] - Identifier of the inline query
 * @param {boolean} [params.isPersonal] - Pass true if results may be cached and
 * returned only for the user that sent the query. By default, results may be returned
 * to any user who sends the same query
 * @param {InputInlineQueryResultInputUnion[]} [params.results] - The results of
 * the query
 * @param {number} [params.cacheTime] - Allowed time to cache the results of the
 * query, in seconds
 * @param {string} [params.nextOffset] - Offset for the next inline query; pass an
 * empty string if there are no more results
 * @param {string} [params.switchPmText] - If non-empty, this text must be shown
 * on the button that opens a private chat with the bot and sends a start message to
 * the bot with the parameter switch_pm_parameter
 * @param {string} [params.switchPmParameter] - The parameter for the bot start message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerInlineQueryParams, OkUnion>>}
 */
export type answerInlineQuery = (
  params?: AnswerInlineQueryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AnswerInlineQueryParams, OkUnion>>
