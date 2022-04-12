import { AddedReaction } from './index'

export type AddedReactionsUnion = AddedReactions

/** Represents a list of reactions added to a message */
export interface AddedReactions {
  _: 'addedReactions'
  /** The total number of found reactions */
  totalCount: number
  /** The list of added reactions */
  reactions: AddedReaction[]
  /** The offset for the next request. If empty, there are no more results */
  nextOffset: string
}
