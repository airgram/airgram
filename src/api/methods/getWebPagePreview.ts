import { FormattedTextInput } from '../inputs'
import { WebPageUnion } from '../outputs'

/**
 * Returns a web page preview by the text of the message. Do not call this function
 * too often. Returns a 404 error if the web page has no preview
 * @param {Object} params
 * @param {FormattedTextInput} [params.text] - Message text with formatting
 * @param {Object} state
 * @returns {WebPageUnion}
 */
export type GetWebPagePreviewMethod = <ResponseT = WebPageUnion>(
  params: GetWebPagePreviewParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetWebPagePreviewParams {
  /** Message text with formatting */
  text?: FormattedTextInput
}
