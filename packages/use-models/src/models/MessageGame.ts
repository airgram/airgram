import { Game } from '@airgram/core'

/** A message with a game */
export class MessageGameBaseModel {
  public _: 'messageGame'

  /** Game */
  public game: Game
}
