import { Thumbnail, Venue } from '@airgram/core'

/** Represents information about a venue */
export class InlineQueryResultVenueBaseModel {
  public _: 'inlineQueryResultVenue'

  /** Unique identifier of the query result */
  public id: string

  /** Venue result */
  public venue: Venue

  /** Result thumbnail in JPEG format; may be null */
  public thumbnail?: Thumbnail
}
