/** A newly created basic group */
export class MessageBasicGroupChatCreateBaseModel {
  public _: 'messageBasicGroupChatCreate'

  /** Title of the basic group */
  public title: string

  /** User identifiers of members in the basic group */
  public memberUserIds: number[]
}
