import { InputBotInlineMessageUnion } from './InputBotInlineMessage'
import { InputDocumentUnion } from './InputDocument'
import { InputPhotoUnion } from './InputPhoto'

export interface InputBotInlineResult {
  _: 'inputBotInlineResult'
  flags: number
  id: string
  type: string
  title?: string
  description?: string
  url?: string
  thumb_url?: string
  content_url?: string
  content_type?: string
  w?: number
  h?: number
  duration?: number
  send_message: InputBotInlineMessageUnion
}

export interface InputBotInlineResultDocument {
  _: 'inputBotInlineResultDocument'
  flags: number
  id: string
  type: string
  title?: string
  description?: string
  document: InputDocumentUnion
  send_message: InputBotInlineMessageUnion
}

export interface InputBotInlineResultGame {
  _: 'inputBotInlineResultGame'
  id: string
  short_name: string
  send_message: InputBotInlineMessageUnion
}

export interface InputBotInlineResultPhoto {
  _: 'inputBotInlineResultPhoto'
  id: string
  type: string
  photo: InputPhotoUnion
  send_message: InputBotInlineMessageUnion
}

export type InputBotInlineResultUnion = InputBotInlineResult
  | InputBotInlineResultDocument
  | InputBotInlineResultGame
  | InputBotInlineResultPhoto
