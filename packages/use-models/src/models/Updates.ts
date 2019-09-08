import { UpdateUnion } from '@airgram/core'

/** Contains a list of updates */
export class UpdatesBaseModel {
  public _: 'updates'

  /** List of updates */
  public updates: UpdateUnion[]
}
