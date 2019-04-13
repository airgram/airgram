import { Photo } from '../outputs'

/** Represents a photo */
export class InlineQueryResultPhotoBaseModel {
  public _: 'inlineQueryResultPhoto'
  /** Unique identifier of the query result */
  public id: string
  /** Photo */
  public photo: Photo
  /** Title of the result, if known */
  public title: string
  /** A short description of the result, if known */
  public description: string
}
