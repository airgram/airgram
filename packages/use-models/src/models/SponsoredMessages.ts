import { SponsoredMessage } from '@airgram/core'

/** Contains a list of sponsored messages */
export class SponsoredMessagesBaseModel {
  public _: 'sponsoredMessages'

  /** List of sponsored messages */
  public messages: SponsoredMessage[]
}
