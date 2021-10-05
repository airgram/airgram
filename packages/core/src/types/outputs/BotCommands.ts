import { BotCommand } from './index'

export type BotCommandsUnion = BotCommands

/** Contains a list of bot commands */
export interface BotCommands {
  _: 'botCommands'
  /** Bot's user identifier */
  botUserId: number
  /** List of bot commands */
  commands: BotCommand[]
}
