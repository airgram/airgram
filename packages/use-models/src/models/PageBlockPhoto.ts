import { PageBlockCaption, Photo } from '@airgram/core'

/** A photo */
export class PageBlockPhotoBaseModel {
  public _: 'pageBlockPhoto'

  /** Photo file; may be null */
  public photo?: Photo

  /** Photo caption */
  public caption: PageBlockCaption

  /** URL that needs to be opened when the photo is clicked */
  public url: string
}
