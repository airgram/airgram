/** Part of the face, relative to which a mask is placed */
export type MaskPointUnion = MaskPointForehead
  | MaskPointEyes
  | MaskPointMouth
  | MaskPointChin

/** The mask is placed relatively to the forehead */
export interface MaskPointForehead {
  _: 'maskPointForehead'
}

/** The mask is placed relatively to the eyes */
export interface MaskPointEyes {
  _: 'maskPointEyes'
}

/** The mask is placed relatively to the mouth */
export interface MaskPointMouth {
  _: 'maskPointMouth'
}

/** The mask is placed relatively to the chin */
export interface MaskPointChin {
  _: 'maskPointChin'
}
