import { GeoPointUnion } from './GeoPoint'
import { MessageEntityUnion } from './MessageEntity'
import { ReplyMarkupUnion } from './ReplyMarkup'

export interface BotInlineMessageMediaAuto {
  _: 'botInlineMessageMediaAuto'
  flags: number
  caption: string
  reply_markup?: ReplyMarkupUnion
}

export interface BotInlineMessageMediaContact {
  _: 'botInlineMessageMediaContact'
  flags: number
  phone_number: string
  first_name: string
  last_name: string
  reply_markup?: ReplyMarkupUnion
}

export interface BotInlineMessageMediaGeo {
  _: 'botInlineMessageMediaGeo'
  flags: number
  geo: GeoPointUnion
  reply_markup?: ReplyMarkupUnion
}

export interface BotInlineMessageMediaVenue {
  _: 'botInlineMessageMediaVenue'
  flags: number
  geo: GeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
  reply_markup?: ReplyMarkupUnion
}

export interface BotInlineMessageText {
  _: 'botInlineMessageText'
  flags: number
  no_webpage?: true
  message: string
  entities?: MessageEntityUnion[]
  reply_markup?: ReplyMarkupUnion
}

export type BotInlineMessageUnion = BotInlineMessageMediaAuto
  | BotInlineMessageMediaContact
  | BotInlineMessageMediaGeo
  | BotInlineMessageMediaVenue
  | BotInlineMessageText
