import { Animation } from '../outputs'

/** Represents a list of animations */
export class AnimationsBaseModel {
  public _: 'animations'
  /** List of animations */
  public animations: Animation[]
}
