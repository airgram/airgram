import { PageBlockUnion, RichTextUnion } from '@airgram/core'

/** A collapsible block */
export class PageBlockDetailsBaseModel {
  public _: 'pageBlockDetails'

  /** Always visible heading for the block */
  public header: RichTextUnion

  /** Block contents */
  public pageBlocks: PageBlockUnion[]

  /** True, if the block is open by default */
  public isOpen: boolean
}
