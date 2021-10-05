/**
 * The link is a link to a chat by its username. Call searchPublicChat with the given
 * chat username to process the link
 */
export class InternalLinkTypePublicChatBaseModel {
  public _: 'internalLinkTypePublicChat'

  /** Username of the chat */
  public chatUsername: string
}
