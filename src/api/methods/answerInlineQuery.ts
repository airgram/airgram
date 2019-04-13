import { InputInlineQueryResultInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sets the result of an inline query; for bots only
 * @param {Object} params
 * @param {number | string} [params.inlineQueryId] - Identifier of the inline query
 * @param {boolean} [params.isPersonal] - True, if the result of the query can be
 * cached for the specified user
 * @param {InputInlineQueryResultInputUnion[]} [params.results] - The results of
 * the query
 * @param {number} [params.cacheTime] - Allowed time to cache the results of the
 * query, in seconds
 * @param {string} [params.nextOffset] - Offset for the next inline query; pass an
 * empty string if there are no more results
 * @param {string} [params.switchPmText] - If non-empty, this text should be shown
 * on the button that opens a private chat with the bot and sends a start message to
 * the bot with the parameter switch_pm_parameter
 * @param {string} [params.switchPmParameter] - The parameter for the bot start message
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AnswerInlineQueryMethod = <ResponseT = OkUnion>(
  params: AnswerInlineQueryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AnswerInlineQueryParams {
  /** Identifier of the inline query */
  inlineQueryId?: number | string
  /** True, if the result of the query can be cached for the specified user */
  isPersonal?: boolean
  /** The results of the query */
  results?: InputInlineQueryResultInputUnion[]
  /** Allowed time to cache the results of the query, in seconds */
  cacheTime?: number
  /** Offset for the next inline query; pass an empty string if there are no more results */
  nextOffset?: string
  /**
   * If non-empty, this text should be shown on the button that opens a private chat with
   * the bot and sends a start message to the bot with the parameter switch_pm_parameter
   */
  switchPmText?: string
  /** The parameter for the bot start message */
  switchPmParameter?: string
}
