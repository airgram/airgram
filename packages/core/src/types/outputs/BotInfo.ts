import { BotCommand } from './index'

export type BotInfoUnion = BotInfo

/** Provides information about a bot and its supported commands */
export interface BotInfo {
  _: 'botInfo'
  /** Long description shown on the user info page */
  description: string
  /** A list of commands supported by the bot */
  commands: BotCommand[]
}
