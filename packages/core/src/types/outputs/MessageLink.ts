export type MessageLinkUnion = MessageLink

/** Contains an HTTPS link to a message in a supergroup or channel */
export interface MessageLink {
  _: 'messageLink'
  /** Message link */
  link: string
  /** True, if the link will work for non-members of the chat */
  isPublic: boolean
}
