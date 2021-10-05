/** Part of the face, relative to which a mask is placed */
export type MaskPointInputUnion = MaskPointForeheadInput
  | MaskPointEyesInput
  | MaskPointMouthInput
  | MaskPointChinInput

/** The mask is placed relatively to the forehead */
export interface MaskPointForeheadInput {
  _: 'maskPointForehead'
}

/** The mask is placed relatively to the eyes */
export interface MaskPointEyesInput {
  _: 'maskPointEyes'
}

/** The mask is placed relatively to the mouth */
export interface MaskPointMouthInput {
  _: 'maskPointMouth'
}

/** The mask is placed relatively to the chin */
export interface MaskPointChinInput {
  _: 'maskPointChin'
}
