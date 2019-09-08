/** Represents commands supported by a bot */
export class BotCommandBaseModel {
  public _: 'botCommand'

  /** Text of the bot command */
  public command: string

  /** Description of the bot command */
  public description: string
}
