import { DocumentAttributeUnion } from './DocumentAttribute'
import { PhotoSizeUnion } from './PhotoSize'

export interface Document {
  _: 'document'
  id: string
  access_hash: string
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
  id: string
}

export type DocumentUnion = Document
  | DocumentEmpty
