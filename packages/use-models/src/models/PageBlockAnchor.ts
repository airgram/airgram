/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export class PageBlockAnchorBaseModel {
  public _: 'pageBlockAnchor'

  /** Name of the anchor */
  public name: string
}
