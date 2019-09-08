import { Background } from '@airgram/core'

/** Contains a list of backgrounds */
export class BackgroundsBaseModel {
  public _: 'backgrounds'

  /** A list of backgrounds */
  public backgrounds: Background[]
}
