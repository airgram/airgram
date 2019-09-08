/** New chat members were invited to a group */
export class PushMessageContentChatAddMembersBaseModel {
  public _: 'pushMessageContentChatAddMembers'

  /** Name of the added member */
  public memberName: string

  /** True, if the current user was added to the group */
  public isCurrentUser: boolean

  /** True, if the user has returned to the group himself */
  public isReturned: boolean
}
