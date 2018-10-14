import { BotCommandUnion } from './BotCommand'

export interface BotInfo {
  _: 'botInfo'
  user_id: number
  description: string
  commands: BotCommandUnion[]
}

export type BotInfoUnion = BotInfo
