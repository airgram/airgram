/** Part of the face, relative to which a mask should be placed */
export type MaskPointUnion = MaskPointForehead
  | MaskPointEyes
  | MaskPointMouth
  | MaskPointChin

/** A mask should be placed relatively to the forehead */
export interface MaskPointForehead {
  _: 'maskPointForehead'
}

/** A mask should be placed relatively to the eyes */
export interface MaskPointEyes {
  _: 'maskPointEyes'
}

/** A mask should be placed relatively to the mouth */
export interface MaskPointMouth {
  _: 'maskPointMouth'
}

/** A mask should be placed relatively to the chin */
export interface MaskPointChin {
  _: 'maskPointChin'
}
