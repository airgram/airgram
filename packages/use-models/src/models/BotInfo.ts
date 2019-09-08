import { BotCommand } from '@airgram/core'

/** Provides information about a bot and its supported commands */
export class BotInfoBaseModel {
  public _: 'botInfo'

  /** Long description shown on the user info page */
  public description: string

  /** A list of commands supported by the bot */
  public commands: BotCommand[]
}
