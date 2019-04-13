import { Animation } from '../outputs'

/** Represents an animation file */
export class InlineQueryResultAnimationBaseModel {
  public _: 'inlineQueryResultAnimation'
  /** Unique identifier of the query result */
  public id: string
  /** Animation file */
  public animation: Animation
  /** Animation title */
  public title: string
}
