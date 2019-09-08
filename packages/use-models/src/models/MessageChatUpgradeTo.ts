/** A basic group was upgraded to a supergroup and was deactivated as the result */
export class MessageChatUpgradeToBaseModel {
  public _: 'messageChatUpgradeTo'

  /** Identifier of the supergroup to which the basic group was upgraded */
  public supergroupId: number
}
