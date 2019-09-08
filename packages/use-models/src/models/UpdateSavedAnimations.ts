/** The list of saved animations was updated */
export class UpdateSavedAnimationsBaseModel {
  public _: 'updateSavedAnimations'

  /** The new list of file identifiers of saved animations */
  public animationIds: number[]
}
