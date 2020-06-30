import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FormattedTextInput } from '../inputs'
import { FormattedTextUnion } from '../outputs'

export interface GetMarkdownTextParams {
  text?: FormattedTextInput // The text
}

/**
 * Replaces text entities with Markdown formatting in a human-friendly format. Entities
 * that can't be represented in Markdown unambiguously are kept as is. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {FormattedTextInput} [params.text] - The text
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMarkdownTextParams, FormattedTextUnion>>}
 */
export type getMarkdownText = (
  params?: GetMarkdownTextParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMarkdownTextParams, FormattedTextUnion>>

export type getMarkdownTextSync = (params?: GetMarkdownTextParams) => FormattedTextUnion
