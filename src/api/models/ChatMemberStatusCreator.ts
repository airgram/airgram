/** The user is the creator of a chat and has all the administrator privileges */
export class ChatMemberStatusCreatorBaseModel {
  public _: 'chatMemberStatusCreator'
  /** True, if the user is a member of the chat */
  public isMember: boolean
}
