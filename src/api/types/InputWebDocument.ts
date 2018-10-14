import { DocumentAttributeUnion } from './DocumentAttribute'

export interface InputWebDocument {
  _: 'inputWebDocument'
  url: string
  size: number
  mime_type: string
  attributes: DocumentAttributeUnion[]
}

export type InputWebDocumentUnion = InputWebDocument
