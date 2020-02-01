/** Contains a public HTTPS link to a message in a supergroup or channel with a username */
export class PublicMessageLinkBaseModel {
  public _: 'publicMessageLink'

  /** Message link */
  public link: string

  /** HTML-code for embedding the message */
  public html: string
}
