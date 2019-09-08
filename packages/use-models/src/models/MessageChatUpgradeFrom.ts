/** A supergroup has been created from a basic group */
export class MessageChatUpgradeFromBaseModel {
  public _: 'messageChatUpgradeFrom'

  /** Title of the newly created supergroup */
  public title: string

  /** The identifier of the original basic group */
  public basicGroupId: number
}
