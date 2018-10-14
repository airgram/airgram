import { InputGeoPointUnion } from './InputGeoPoint'
import { MessageEntityUnion } from './MessageEntity'
import { ReplyMarkupUnion } from './ReplyMarkup'

export interface InputBotInlineMessageGame {
  _: 'inputBotInlineMessageGame'
  flags: number
  reply_markup?: ReplyMarkupUnion
}

export interface InputBotInlineMessageMediaAuto {
  _: 'inputBotInlineMessageMediaAuto'
  flags: number
  caption: string
  reply_markup?: ReplyMarkupUnion
}

export interface InputBotInlineMessageMediaContact {
  _: 'inputBotInlineMessageMediaContact'
  flags: number
  phone_number: string
  first_name: string
  last_name: string
  reply_markup?: ReplyMarkupUnion
}

export interface InputBotInlineMessageMediaGeo {
  _: 'inputBotInlineMessageMediaGeo'
  flags: number
  geo_point: InputGeoPointUnion
  reply_markup?: ReplyMarkupUnion
}

export interface InputBotInlineMessageMediaVenue {
  _: 'inputBotInlineMessageMediaVenue'
  flags: number
  geo_point: InputGeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
  reply_markup?: ReplyMarkupUnion
}

export interface InputBotInlineMessageText {
  _: 'inputBotInlineMessageText'
  flags: number
  no_webpage?: true
  message: string
  entities?: MessageEntityUnion[]
  reply_markup?: ReplyMarkupUnion
}

export type InputBotInlineMessageUnion = InputBotInlineMessageGame
  | InputBotInlineMessageMediaAuto
  | InputBotInlineMessageMediaContact
  | InputBotInlineMessageMediaGeo
  | InputBotInlineMessageMediaVenue
  | InputBotInlineMessageText
