import { Contact, PhotoSize } from '../outputs'

/** Represents a user contact */
export class InlineQueryResultContactBaseModel {
  public _: 'inlineQueryResultContact'
  /** Unique identifier of the query result */
  public id: string
  /** A user contact */
  public contact: Contact
  /** Result thumbnail; may be null */
  public thumbnail?: PhotoSize
}
