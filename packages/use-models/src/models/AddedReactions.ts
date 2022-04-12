import { AddedReaction } from '@airgram/core'

/** Represents a list of reactions added to a message */
export class AddedReactionsBaseModel {
  public _: 'addedReactions'

  /** The total number of found reactions */
  public totalCount: number

  /** The list of added reactions */
  public reactions: AddedReaction[]

  /** The offset for the next request. If empty, there are no more results */
  public nextOffset: string
}
