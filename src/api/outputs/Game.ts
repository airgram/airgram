import { Animation, FormattedText, Photo } from './index'

export type GameUnion = Game

/** Describes a game */
export interface Game {
  _: 'game'
  /** Game ID */
  id: number | string
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  shortName: string
  /** Game title */
  title: string
  /** Game text, usually containing scoreboards for a game */
  text: FormattedText
  /** Game description */
  description: string
  /** Game photo */
  photo: Photo
  /** Game animation; may be null */
  animation?: Animation
}
