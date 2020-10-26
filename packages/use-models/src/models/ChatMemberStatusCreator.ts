/** The user is the owner of a chat and has all the administrator privileges */
export class ChatMemberStatusCreatorBaseModel {
  public _: 'chatMemberStatusCreator'

  /**
   * A custom title of the owner; 0-16 characters without emojis; applicable to supergroups
   * only
   */
  public customTitle: string

  /**
   * True, if the creator isn't shown in the chat member list and sends messages anonymously;
   * applicable to supergroups only
   */
  public isAnonymous: boolean

  /** True, if the user is a member of the chat */
  public isMember: boolean
}
