import { PageBlockUnion } from './index'

export type WebPageInstantViewUnion = WebPageInstantView

/** Describes an instant view page for a web page */
export interface WebPageInstantView {
  _: 'webPageInstantView'
  /** Content of the web page */
  pageBlocks: PageBlockUnion[]
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  isFull: boolean
}
