export type BotCommandInputUnion = BotCommandInput

/** Represents a command supported by a bot */
export interface BotCommandInput {
  _: 'botCommand'
  /** Text of the bot command */
  command?: string
  /** Description of the bot command */
  description?: string
}
