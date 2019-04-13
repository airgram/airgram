import { TMeUrlTypeUnion } from '../outputs'

/** Represents a URL linking to an internal Telegram entity */
export class TMeUrlBaseModel {
  public _: 'tMeUrl'
  /** URL */
  public url: string
  /** Type of the URL */
  public type: TMeUrlTypeUnion
}
