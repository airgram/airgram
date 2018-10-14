import { DocumentAttributeUnion } from './DocumentAttribute'
import { InputDocumentUnion } from './InputDocument'
import { InputFileUnion } from './InputFile'
import { InputGameUnion } from './InputGame'
import { InputGeoPointUnion } from './InputGeoPoint'
import { InputPhotoUnion } from './InputPhoto'
import { InputWebDocumentUnion } from './InputWebDocument'
import { InvoiceUnion } from './Invoice'

export interface InputMediaContact {
  _: 'inputMediaContact'
  phone_number: string
  first_name: string
  last_name: string
}

export interface InputMediaDocument {
  _: 'inputMediaDocument'
  flags: number
  id: InputDocumentUnion
  caption: string
  ttl_seconds?: number
}

export interface InputMediaDocumentExternal {
  _: 'inputMediaDocumentExternal'
  flags: number
  url: string
  caption: string
  ttl_seconds?: number
}

export interface InputMediaEmpty {
  _: 'inputMediaEmpty'
}

export interface InputMediaGame {
  _: 'inputMediaGame'
  id: InputGameUnion
}

export interface InputMediaGeoPoint {
  _: 'inputMediaGeoPoint'
  geo_point: InputGeoPointUnion
}

export interface InputMediaGifExternal {
  _: 'inputMediaGifExternal'
  url: string
  q: string
}

export interface InputMediaInvoice {
  _: 'inputMediaInvoice'
  flags: number
  title: string
  description: string
  photo?: InputWebDocumentUnion
  invoice: InvoiceUnion
  payload: number[]
  provider: string
  start_param: string
}

export interface InputMediaPhoto {
  _: 'inputMediaPhoto'
  flags: number
  id: InputPhotoUnion
  caption: string
  ttl_seconds?: number
}

export interface InputMediaPhotoExternal {
  _: 'inputMediaPhotoExternal'
  flags: number
  url: string
  caption: string
  ttl_seconds?: number
}

export interface InputMediaUploadedDocument {
  _: 'inputMediaUploadedDocument'
  flags: number
  file: InputFileUnion
  thumb?: InputFileUnion
  mime_type: string
  attributes: DocumentAttributeUnion[]
  caption: string
  stickers?: InputDocumentUnion[]
  ttl_seconds?: number
}

export interface InputMediaUploadedPhoto {
  _: 'inputMediaUploadedPhoto'
  flags: number
  file: InputFileUnion
  caption: string
  stickers?: InputDocumentUnion[]
  ttl_seconds?: number
}

export interface InputMediaVenue {
  _: 'inputMediaVenue'
  geo_point: InputGeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
}

export type InputMediaUnion = InputMediaContact
  | InputMediaDocument
  | InputMediaDocumentExternal
  | InputMediaEmpty
  | InputMediaGame
  | InputMediaGeoPoint
  | InputMediaGifExternal
  | InputMediaInvoice
  | InputMediaPhoto
  | InputMediaPhotoExternal
  | InputMediaUploadedDocument
  | InputMediaUploadedPhoto
  | InputMediaVenue
