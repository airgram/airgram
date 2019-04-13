import { Animation, FormattedText, Photo } from '../outputs'

/** Describes a game */
export class GameBaseModel {
  public _: 'game'
  /** Game ID */
  public id: number | string
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  public shortName: string
  /** Game title */
  public title: string
  /** Game text, usually containing scoreboards for a game */
  public text: FormattedText
  /** Game description */
  public description: string
  /** Game photo */
  public photo: Photo
  /** Game animation; may be null */
  public animation?: Animation
}
