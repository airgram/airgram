import { Animation } from './index'

export type AnimationsUnion = Animations

/** Represents a list of animations */
export interface Animations {
  _: 'animations'
  /** List of animations */
  animations: Animation[]
}
