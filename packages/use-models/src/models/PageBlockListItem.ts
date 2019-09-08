import { PageBlockUnion } from '@airgram/core'

/** Describes an item of a list page block */
export class PageBlockListItemBaseModel {
  public _: 'pageBlockListItem'

  /** Item label */
  public label: string

  /** Item blocks */
  public pageBlocks: PageBlockUnion[]
}
