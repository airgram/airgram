import { MaskPointUnion } from './index'

export type MaskPositionUnion = MaskPosition

/** Position on a photo where a mask should be placed */
export interface MaskPosition {
  _: 'maskPosition'
  /** Part of the face, relative to which the mask should be placed */
  point: MaskPointUnion
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left
   * to right. (For example, -1.0 will place the mask just to the left of the default
   * mask position)
   */
  xShift: number
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
   * to bottom. (For example, 1.0 will place the mask just below the default mask position)
   */
  yShift: number
  /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
  scale: number
}
