import { DocumentAttributeUnion } from './DocumentAttribute'
import { PhotoSizeUnion } from './PhotoSize'

export interface Document {
  _: 'document'
  id: number
  access_hash: number
  date: number
  mime_type: string
  size: number
  thumb: PhotoSizeUnion
  dc_id: number
  version: number
  attributes: DocumentAttributeUnion[]
}

export interface DocumentEmpty {
  _: 'documentEmpty'
  id: number
}

export type DocumentUnion = Document
  | DocumentEmpty
