import { Game } from '@airgram/core'

/** A message with a game */
export class MessageGameBaseModel {
  public _: 'messageGame'

  /** The game description */
  public game: Game
}
