/** The list of supported dice emojis has changed */
export class UpdateDiceEmojisBaseModel {
  public _: 'updateDiceEmojis'

  /** The new list of supported dice emojis */
  public emojis: string[]
}
