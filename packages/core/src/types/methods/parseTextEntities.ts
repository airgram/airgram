import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextParseModeInputUnion } from '../inputs'
import { FormattedTextUnion } from '../outputs'

export interface ParseTextEntitiesParams {
  text?: string // The text to parse
  parseMode?: TextParseModeInputUnion // Text parse mode
}

/**
 * Parses Bold, Italic, Underline, Strikethrough, Spoiler, Code, Pre, PreCode, TextUrl
 * and MentionName entities contained in the text. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.text] - The text to parse
 * @param {TextParseModeInputUnion} [params.parseMode] - Text parse mode
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>}
 */
export type parseTextEntities = (
  params?: ParseTextEntitiesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ParseTextEntitiesParams, FormattedTextUnion>>

export type parseTextEntitiesSync = (params?: ParseTextEntitiesParams) => FormattedTextUnion
