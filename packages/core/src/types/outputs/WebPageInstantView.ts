import { InternalLinkTypeUnion, PageBlockUnion } from './index'

export type WebPageInstantViewUnion = WebPageInstantView

/** Describes an instant view page for a web page */
export interface WebPageInstantView {
  _: 'webPageInstantView'
  /** Content of the web page */
  pageBlocks: PageBlockUnion[]
  /** Number of the instant view views; 0 if unknown */
  viewCount: number
  /** Version of the instant view; currently, can be 1 or 2 */
  version: number
  /** True, if the instant view must be shown from right to left */
  isRtl: boolean
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  isFull: boolean
  /** An internal link to be opened to leave feedback about the instant view */
  feedbackLink: InternalLinkTypeUnion
}
