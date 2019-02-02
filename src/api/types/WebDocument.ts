import { DocumentAttributeUnion } from './DocumentAttribute'

export interface WebDocument {
  _: 'webDocument'
  url: string
  access_hash: string
  size: number
  mime_type: string
  attributes: DocumentAttributeUnion[]
  dc_id: number
}

export type WebDocumentUnion = WebDocument
