import { BotCommand } from '@airgram/core'

/** Contains a list of bot commands */
export class BotCommandsBaseModel {
  public _: 'botCommands'

  /** Bot's user identifier */
  public botUserId: number

  /** List of bot commands */
  public commands: BotCommand[]
}
