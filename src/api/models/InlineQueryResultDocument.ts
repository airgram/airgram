import { Document } from '../outputs'

/** Represents a document */
export class InlineQueryResultDocumentBaseModel {
  public _: 'inlineQueryResultDocument'
  /** Unique identifier of the query result */
  public id: string
  /** Document */
  public document: Document
  /** Document title */
  public title: string
  /** Document description */
  public description: string
}
