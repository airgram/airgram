/** Contains an HTTPS link to a message in a supergroup or channel */
export class MessageLinkBaseModel {
  public _: 'messageLink'

  /** Message link */
  public link: string

  /** True, if the link will work for non-members of the chat */
  public isPublic: boolean
}
