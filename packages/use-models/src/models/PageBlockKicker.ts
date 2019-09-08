import { RichTextUnion } from '@airgram/core'

/** A kicker */
export class PageBlockKickerBaseModel {
  public _: 'pageBlockKicker'

  /** Kicker */
  public kicker: RichTextUnion
}
