import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FormattedTextInput } from '../inputs'
import { FormattedTextUnion } from '../outputs'

export interface ParseMarkdownParams {
  text?: FormattedTextInput // The text to parse. For example, "__italic__ ~~strikethrough~~ **bold** `code` ```pre``` __[italic__ text_url](telegram.org) __italic**bold italic__bold**"
}

/**
 * Parses Markdown entities in a human-friendly format, ignoring mark up errors. This
 * is an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {FormattedTextInput} [params.text] - The text to parse. For example, "__italic__
 * ~~strikethrough~~ **bold** `code` ```pre``` __[italic__ text_url](telegram.org) __italic**bold
 * italic__bold**"
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ParseMarkdownParams, FormattedTextUnion>>}
 */
export type parseMarkdown = (
  params?: ParseMarkdownParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ParseMarkdownParams, FormattedTextUnion>>

export type parseMarkdownSync = (params?: ParseMarkdownParams) => FormattedTextUnion
