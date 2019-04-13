import { ReplyMarkupUnion } from '../outputs'

/** Represents a game */
export class InputInlineQueryResultGameBaseModel {
  public _: 'inputInlineQueryResultGame'
  /** Unique identifier of the query result */
  public id: string
  /** Short name of the game */
  public gameShortName: string
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  public replyMarkup?: ReplyMarkupUnion
}
