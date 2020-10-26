/**
 * The parameters of animation search through GetOption("animation_search_bot_username")
 * bot has changed
 */
export class UpdateAnimationSearchParametersBaseModel {
  public _: 'updateAnimationSearchParameters'

  /** Name of the animation search provider */
  public provider: string

  /** The new list of emojis suggested for searching */
  public emojis: string[]
}
