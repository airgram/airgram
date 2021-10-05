import { InlineQueryResultUnion } from './index'

export type InlineQueryResultsUnion = InlineQueryResults

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export interface InlineQueryResults {
  _: 'inlineQueryResults'
  /** Unique identifier of the inline query */
  inlineQueryId: string
  /** The offset for the next request. If empty, there are no more results */
  nextOffset: string
  /** Results of the query */
  results: InlineQueryResultUnion[]
  /**
   * If non-empty, this text must be shown on the button, which opens a private chat with
   * the bot and sends the bot a start message with the switch_pm_parameter
   */
  switchPmText: string
  /** Parameter for the bot start message */
  switchPmParameter: string
}
