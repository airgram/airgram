import { InputUserUnion } from './InputUser'

export interface InputMessageEntityMentionName {
  _: 'inputMessageEntityMentionName'
  offset: number
  length: number
  user_id: InputUserUnion
}

export interface MessageEntityBold {
  _: 'messageEntityBold'
  offset: number
  length: number
}

export interface MessageEntityBotCommand {
  _: 'messageEntityBotCommand'
  offset: number
  length: number
}

export interface MessageEntityCode {
  _: 'messageEntityCode'
  offset: number
  length: number
}

export interface MessageEntityEmail {
  _: 'messageEntityEmail'
  offset: number
  length: number
}

export interface MessageEntityHashtag {
  _: 'messageEntityHashtag'
  offset: number
  length: number
}

export interface MessageEntityItalic {
  _: 'messageEntityItalic'
  offset: number
  length: number
}

export interface MessageEntityMention {
  _: 'messageEntityMention'
  offset: number
  length: number
}

export interface MessageEntityMentionName {
  _: 'messageEntityMentionName'
  offset: number
  length: number
  user_id: number
}

export interface MessageEntityPre {
  _: 'messageEntityPre'
  offset: number
  length: number
  language: string
}

export interface MessageEntityTextUrl {
  _: 'messageEntityTextUrl'
  offset: number
  length: number
  url: string
}

export interface MessageEntityUnknown {
  _: 'messageEntityUnknown'
  offset: number
  length: number
}

export interface MessageEntityUrl {
  _: 'messageEntityUrl'
  offset: number
  length: number
}

export type MessageEntityUnion = InputMessageEntityMentionName
  | MessageEntityBold
  | MessageEntityBotCommand
  | MessageEntityCode
  | MessageEntityEmail
  | MessageEntityHashtag
  | MessageEntityItalic
  | MessageEntityMention
  | MessageEntityMentionName
  | MessageEntityPre
  | MessageEntityTextUrl
  | MessageEntityUnknown
  | MessageEntityUrl
