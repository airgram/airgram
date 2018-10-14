import { KeyboardButtonRowUnion } from './KeyboardButtonRow'

export interface ReplyInlineMarkup {
  _: 'replyInlineMarkup'
  rows: KeyboardButtonRowUnion[]
}

export interface ReplyKeyboardForceReply {
  _: 'replyKeyboardForceReply'
  flags: number
  single_use?: true
  selective?: true
}

export interface ReplyKeyboardHide {
  _: 'replyKeyboardHide'
  flags: number
  selective?: true
}

export interface ReplyKeyboardMarkup {
  _: 'replyKeyboardMarkup'
  flags: number
  resize?: true
  single_use?: true
  selective?: true
  rows: KeyboardButtonRowUnion[]
}

export type ReplyMarkupUnion = ReplyInlineMarkup
  | ReplyKeyboardForceReply
  | ReplyKeyboardHide
  | ReplyKeyboardMarkup
