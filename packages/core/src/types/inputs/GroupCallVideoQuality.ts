/** Describes the quality of a group call video */
export type GroupCallVideoQualityInputUnion = GroupCallVideoQualityThumbnailInput
  | GroupCallVideoQualityMediumInput
  | GroupCallVideoQualityFullInput

/** The worst available video quality */
export interface GroupCallVideoQualityThumbnailInput {
  _: 'groupCallVideoQualityThumbnail'
}

/** The medium video quality */
export interface GroupCallVideoQualityMediumInput {
  _: 'groupCallVideoQualityMedium'
}

/** The best available video quality */
export interface GroupCallVideoQualityFullInput {
  _: 'groupCallVideoQualityFull'
}
