import { Background } from './index'

export type BackgroundsUnion = Backgrounds

/** Contains a list of backgrounds */
export interface Backgrounds {
  _: 'backgrounds'
  /** A list of backgrounds */
  backgrounds: Background[]
}
