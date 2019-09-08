import { PageBlockUnion } from './index'

export type WebPageInstantViewUnion = WebPageInstantView

/** Describes an instant view page for a web page */
export interface WebPageInstantView {
  _: 'webPageInstantView'
  /** Content of the web page */
  pageBlocks: PageBlockUnion[]
  /** Version of the instant view, currently can be 1 or 2 */
  version: number
  /**
   * Instant view URL; may be different from WebPage.url and must be used for the correct
   * anchors handling
   */
  url: string
  /** True, if the instant view must be shown from right to left */
  isRtl: boolean
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  isFull: boolean
}
