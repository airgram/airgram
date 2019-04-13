/** A message with a game; not supported for channels or secret chats */
export class InputMessageGameBaseModel {
  public _: 'inputMessageGame'
  /** User identifier of the bot that owns the game */
  public botUserId: number
  /** Short name of the game */
  public gameShortName: string
}
