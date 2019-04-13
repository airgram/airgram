import { InlineQueryResultUnion } from '../outputs'

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export class InlineQueryResultsBaseModel {
  public _: 'inlineQueryResults'
  /** Unique identifier of the inline query */
  public inlineQueryId: number | string
  /** The offset for the next request. If empty, there are no more results */
  public nextOffset: string
  /** Results of the query */
  public results: InlineQueryResultUnion[]
  /**
   * If non-empty, this text should be shown on the button, which opens a private chat
   * with the bot and sends the bot a start message with the switch_pm_parameter
   */
  public switchPmText: string
  /** Parameter for the bot start message */
  public switchPmParameter: string
}
