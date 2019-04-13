import { Game } from '../outputs'

/** A message with a game */
export class MessageGameBaseModel {
  public _: 'messageGame'
  /** Game */
  public game: Game
}
