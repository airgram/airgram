export type PublicMessageLinkUnion = PublicMessageLink

/** Contains a public HTTPS link to a message in a supergroup or channel with a username */
export interface PublicMessageLink {
  _: 'publicMessageLink'
  /** Message link */
  link: string
  /** HTML-code for embedding the message */
  html: string
}
