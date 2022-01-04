import { InternalLinkTypeUnion, PageBlockUnion } from '@airgram/core'

/** Describes an instant view page for a web page */
export class WebPageInstantViewBaseModel {
  public _: 'webPageInstantView'

  /** Content of the web page */
  public pageBlocks: PageBlockUnion[]

  /** Number of the instant view views; 0 if unknown */
  public viewCount: number

  /** Version of the instant view; currently, can be 1 or 2 */
  public version: number

  /** True, if the instant view must be shown from right to left */
  public isRtl: boolean

  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  public isFull: boolean

  /** An internal link to be opened to leave feedback about the instant view */
  public feedbackLink: InternalLinkTypeUnion
}
