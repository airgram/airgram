import { Game } from '@airgram/core'

/** Represents information about a game */
export class InlineQueryResultGameBaseModel {
  public _: 'inlineQueryResultGame'

  /** Unique identifier of the query result */
  public id: string

  /** Game result */
  public game: Game
}
