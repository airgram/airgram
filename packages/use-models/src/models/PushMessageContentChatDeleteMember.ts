/** A chat member was deleted */
export class PushMessageContentChatDeleteMemberBaseModel {
  public _: 'pushMessageContentChatDeleteMember'

  /** Name of the deleted member */
  public memberName: string

  /** True, if the current user was deleted from the group */
  public isCurrentUser: boolean

  /** True, if the user has left the group himself */
  public isLeft: boolean
}
