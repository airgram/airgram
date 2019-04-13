/** New chat members were added */
export class MessageChatAddMembersBaseModel {
  public _: 'messageChatAddMembers'
  /** User identifiers of the new members */
  public memberUserIds: number[]
}
