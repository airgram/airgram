/** Part of the face, relative to which a mask should be placed */
export type MaskPointInputUnion = MaskPointForeheadInput
  | MaskPointEyesInput
  | MaskPointMouthInput
  | MaskPointChinInput

/** A mask should be placed relatively to the forehead */
export interface MaskPointForeheadInput {
  _: 'maskPointForehead'
}

/** A mask should be placed relatively to the eyes */
export interface MaskPointEyesInput {
  _: 'maskPointEyes'
}

/** A mask should be placed relatively to the mouth */
export interface MaskPointMouthInput {
  _: 'maskPointMouth'
}

/** A mask should be placed relatively to the chin */
export interface MaskPointChinInput {
  _: 'maskPointChin'
}
