import { PageBlockTableCell, RichTextUnion } from '@airgram/core'

/** A table */
export class PageBlockTableBaseModel {
  public _: 'pageBlockTable'

  /** Table caption */
  public caption: RichTextUnion

  /** Table cells */
  public cells: PageBlockTableCell[][]

  /** True, if the table is bordered */
  public isBordered: boolean

  /** True, if the table is striped */
  public isStriped: boolean
}
