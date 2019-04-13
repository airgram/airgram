import { PhotoSize, Venue } from '../outputs'

/** Represents information about a venue */
export class InlineQueryResultVenueBaseModel {
  public _: 'inlineQueryResultVenue'
  /** Unique identifier of the query result */
  public id: string
  /** Venue result */
  public venue: Venue
  /** Result thumbnail; may be null */
  public thumbnail?: PhotoSize
}
