import { DocumentUnion } from './Document'
import { GameUnion } from './Game'
import { GeoPointUnion } from './GeoPoint'
import { PhotoUnion } from './Photo'
import { WebDocumentUnion } from './WebDocument'
import { WebPageUnion } from './WebPage'

export interface MessageMediaContact {
  _: 'messageMediaContact'
  phone_number: string
  first_name: string
  last_name: string
  user_id: number
}

export interface MessageMediaDocument {
  _: 'messageMediaDocument'
  flags: number
  document?: DocumentUnion
  caption?: string
  ttl_seconds?: number
}

export interface MessageMediaEmpty {
  _: 'messageMediaEmpty'
}

export interface MessageMediaGame {
  _: 'messageMediaGame'
  game: GameUnion
}

export interface MessageMediaGeo {
  _: 'messageMediaGeo'
  geo: GeoPointUnion
}

export interface MessageMediaInvoice {
  _: 'messageMediaInvoice'
  flags: number
  shipping_address_requested?: true
  test?: true
  title: string
  description: string
  photo?: WebDocumentUnion
  receipt_msg_id?: number
  currency: string
  total_amount: string
  start_param: string
}

export interface MessageMediaPhoto {
  _: 'messageMediaPhoto'
  flags: number
  photo?: PhotoUnion
  caption?: string
  ttl_seconds?: number
}

export interface MessageMediaUnsupported {
  _: 'messageMediaUnsupported'
}

export interface MessageMediaVenue {
  _: 'messageMediaVenue'
  geo: GeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
}

export interface MessageMediaWebPage {
  _: 'messageMediaWebPage'
  webpage: WebPageUnion
}

export type MessageMediaUnion = MessageMediaContact
  | MessageMediaDocument
  | MessageMediaEmpty
  | MessageMediaGame
  | MessageMediaGeo
  | MessageMediaInvoice
  | MessageMediaPhoto
  | MessageMediaUnsupported
  | MessageMediaVenue
  | MessageMediaWebPage
