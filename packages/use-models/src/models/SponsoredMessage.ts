import { MessageContentUnion } from '@airgram/core'

/** Describes a sponsored message */
export class SponsoredMessageBaseModel {
  public _: 'sponsoredMessage'

  /** Unique sponsored message identifier */
  public id: number

  /** Chat identifier */
  public sponsorChatId: number

  /** Parameter for the bot start message if the sponsored chat is a chat with a bot */
  public startParameter: string

  /** Content of the message */
  public content: MessageContentUnion
}
