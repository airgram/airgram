import { MessageContentUnion } from './index'

export type SponsoredMessageUnion = SponsoredMessage

/** Describes a sponsored message */
export interface SponsoredMessage {
  _: 'sponsoredMessage'
  /** Unique sponsored message identifier */
  id: number
  /** Chat identifier */
  sponsorChatId: number
  /** Parameter for the bot start message if the sponsored chat is a chat with a bot */
  startParameter: string
  /** Content of the message */
  content: MessageContentUnion
}
