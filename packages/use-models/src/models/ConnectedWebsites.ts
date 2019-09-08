import { ConnectedWebsite } from '@airgram/core'

/** Contains a list of websites the current user is logged in with Telegram */
export class ConnectedWebsitesBaseModel {
  public _: 'connectedWebsites'

  /** List of connected websites */
  public websites: ConnectedWebsite[]
}
