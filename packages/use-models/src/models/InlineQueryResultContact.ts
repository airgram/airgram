import { Contact, Thumbnail } from '@airgram/core'

/** Represents a user contact */
export class InlineQueryResultContactBaseModel {
  public _: 'inlineQueryResultContact'

  /** Unique identifier of the query result */
  public id: string

  /** A user contact */
  public contact: Contact

  /** Result thumbnail in JPEG format; may be null */
  public thumbnail?: Thumbnail
}
