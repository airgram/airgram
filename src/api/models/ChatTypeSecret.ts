/** A secret chat with a user */
export class ChatTypeSecretBaseModel {
  public _: 'chatTypeSecret'
  /** Secret chat identifier */
  public secretChatId: number
  /** User identifier of the secret chat peer */
  public userId: number
}
