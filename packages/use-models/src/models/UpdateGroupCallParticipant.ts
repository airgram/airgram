import { GroupCallParticipant } from '@airgram/core'

/**
 * Information about a group call participant was changed. The updates are sent only
 * after the group call is received through getGroupCall and only if the call is joined
 * or being joined
 */
export class UpdateGroupCallParticipantBaseModel {
  public _: 'updateGroupCallParticipant'

  /** Identifier of group call */
  public groupCallId: number

  /** New data about a participant */
  public participant: GroupCallParticipant
}
