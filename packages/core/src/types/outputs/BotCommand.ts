export type BotCommandUnion = BotCommand

/** Represents commands supported by a bot */
export interface BotCommand {
  _: 'botCommand'
  /** Text of the bot command */
  command: string
  /** Description of the bot command */
  description: string
}
