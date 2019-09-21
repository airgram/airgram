import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FormattedTextInput } from '../inputs'
import { WebPageUnion } from '../outputs'

export interface GetWebPagePreviewParams {
  text?: FormattedTextInput // Message text with formatting
}

/**
 * Returns a web page preview by the text of the message. Do not call this function
 * too often. Returns a 404 error if the web page has no preview
 * @param {Object} params
 * @param {FormattedTextInput} [params.text] - Message text with formatting
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetWebPagePreviewParams, WebPageUnion>>}
 */
export type getWebPagePreview = (
  params?: GetWebPagePreviewParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetWebPagePreviewParams, WebPageUnion>>
