import { Location } from '@airgram/core'

/** The user has chosen a result of an inline query; for bots only */
export class UpdateNewChosenInlineResultBaseModel {
  public _: 'updateNewChosenInlineResult'

  /** Identifier of the user who sent the query */
  public senderUserId: number

  /** User location; may be null */
  public userLocation?: Location

  /** Text of the query */
  public query: string

  /** Identifier of the chosen result */
  public resultId: string

  /** Identifier of the sent inline message, if known */
  public inlineMessageId: string
}
