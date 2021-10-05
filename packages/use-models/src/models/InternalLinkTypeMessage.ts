/**
 * The link is a link to a Telegram message. Call getMessageLinkInfo with the given
 * URL to process the link
 */
export class InternalLinkTypeMessageBaseModel {
  public _: 'internalLinkTypeMessage'

  /** URL to be passed to getMessageLinkInfo */
  public url: string
}
