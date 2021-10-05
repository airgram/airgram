import { SponsoredMessage } from './index'

export type SponsoredMessagesUnion = SponsoredMessages

/** Contains a list of sponsored messages */
export interface SponsoredMessages {
  _: 'sponsoredMessages'
  /** List of sponsored messages */
  messages: SponsoredMessage[]
}
