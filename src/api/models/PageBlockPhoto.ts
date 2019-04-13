import { Photo, RichTextUnion } from '../outputs'

/** A photo */
export class PageBlockPhotoBaseModel {
  public _: 'pageBlockPhoto'
  /** Photo file; may be null */
  public photo?: Photo
  /** Photo caption */
  public caption: RichTextUnion
}
