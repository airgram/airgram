import { PageBlockUnion } from '../outputs'

/** Describes an instant view page for a web page */
export class WebPageInstantViewBaseModel {
  public _: 'webPageInstantView'
  /** Content of the web page */
  public pageBlocks: PageBlockUnion[]
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  public isFull: boolean
}
