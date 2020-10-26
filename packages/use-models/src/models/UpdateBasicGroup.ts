import { BasicGroup } from '@airgram/core'

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the application
 */
export class UpdateBasicGroupBaseModel {
  public _: 'updateBasicGroup'

  /** New data about the group */
  public basicGroup: BasicGroup
}
