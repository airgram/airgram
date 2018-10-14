import { BotInlineMessageUnion } from './BotInlineMessage'
import { DocumentUnion } from './Document'
import { PhotoUnion } from './Photo'

export interface BotInlineMediaResult {
  _: 'botInlineMediaResult'
  flags: number
  id: string
  type: string
  photo?: PhotoUnion
  document?: DocumentUnion
  title?: string
  description?: string
  send_message: BotInlineMessageUnion
}

export interface BotInlineResult {
  _: 'botInlineResult'
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
  send_message: BotInlineMessageUnion
}

export type BotInlineResultUnion = BotInlineMediaResult
  | BotInlineResult
