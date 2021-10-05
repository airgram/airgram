import { GroupCall } from '@airgram/core'

/** Information about a group call was updated */
export class UpdateGroupCallBaseModel {
  public _: 'updateGroupCall'

  /** New data about a group call */
  public groupCall: GroupCall
}
