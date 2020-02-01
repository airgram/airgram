import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextParseModeInputUnion } from '../inputs'
import { FormattedTextUnion } from '../outputs'

export interface ParseTextEntitiesParams {
  text?: string // The text which should be parsed
  parseMode?: TextParseModeInputUnion // Text parse mode
}

/**
 * Parses Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
 * entities contained in the text. This is an offline method. Can be called before authorization.
 * Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text which should be parsed
 * @param {TextParseModeInputUnion} [params.parseMode] - Text parse mode
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>}
 */
export type parseTextEntities = (
  params?: ParseTextEntitiesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>

export type parseTextEntitiesSync = (params?: ParseTextEntitiesParams) => FormattedTextUnion
