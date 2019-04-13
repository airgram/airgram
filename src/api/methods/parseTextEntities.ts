import { TextParseModeInputUnion } from '../inputs'
import { FormattedTextUnion } from '../outputs'

/**
 * Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text which should be parsed
 * @param {TextParseModeInputUnion} [params.parseMode] - Text parse mode
 * @param {Object} state
 * @returns {FormattedTextUnion}
 */
export type ParseTextEntitiesMethod = <ResponseT = FormattedTextUnion>(
  params: ParseTextEntitiesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ParseTextEntitiesParams {
  /** The text which should be parsed */
  text?: string
  /** Text parse mode */
  parseMode?: TextParseModeInputUnion
}
