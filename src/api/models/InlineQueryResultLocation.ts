import { Location, PhotoSize } from '../outputs'

/** Represents a point on the map */
export class InlineQueryResultLocationBaseModel {
  public _: 'inlineQueryResultLocation'
  /** Unique identifier of the query result */
  public id: string
  /** Location result */
  public location: Location
  /** Title of the result */
  public title: string
  /** Result thumbnail; may be null */
  public thumbnail?: PhotoSize
}
