import { Reaction } from '@airgram/core'

/** The list of supported reactions has changed */
export class UpdateReactionsBaseModel {
  public _: 'updateReactions'

  /** The new list of supported reactions */
  public reactions: Reaction[]
}
