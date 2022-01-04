/** A message with information about an invite to a video chat */
export class MessageInviteVideoChatParticipantsBaseModel {
  public _: 'messageInviteVideoChatParticipants'

  /** Identifier of the video chat. The video chat can be received through the method getGroupCall */
  public groupCallId: number

  /** Invited user identifiers */
  public userIds: number[]
}
