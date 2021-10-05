import { PageBlockCaption, Photo } from '@airgram/core'

/** An embedded web page */
export class PageBlockEmbeddedBaseModel {
  public _: 'pageBlockEmbedded'

  /** Web page URL, if available */
  public url: string

  /** HTML-markup of the embedded page */
  public html: string

  /** Poster photo, if available; may be null */
  public posterPhoto?: Photo

  /** Block width; 0 if unknown */
  public width: number

  /** Block height; 0 if unknown */
  public height: number

  /** Block caption */
  public caption: PageBlockCaption

  /** True, if the block must be full width */
  public isFullWidth: boolean

  /** True, if scrolling needs to be allowed */
  public allowScrolling: boolean
}
