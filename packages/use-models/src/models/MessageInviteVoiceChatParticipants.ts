/** A message with information about an invite to a voice chat */
export class MessageInviteVoiceChatParticipantsBaseModel {
  public _: 'messageInviteVoiceChatParticipants'

  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  public groupCallId: number

  /** Invited user identifiers */
  public userIds: number[]
}
