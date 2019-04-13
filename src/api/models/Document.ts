import { File, PhotoSize } from '../outputs'

/** Describes a document of any type */
export class DocumentBaseModel {
  public _: 'document'
  /** Original name of the file; as defined by the sender */
  public fileName: string
  /** MIME type of the file; as defined by the sender */
  public mimeType: string
  /** Document thumbnail; as defined by the sender; may be null */
  public thumbnail?: PhotoSize
  /** File containing the document */
  public document: File
}
