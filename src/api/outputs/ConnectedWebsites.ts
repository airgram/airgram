import { ConnectedWebsite } from './index'

export type ConnectedWebsitesUnion = ConnectedWebsites

/** Contains a list of websites the current user is logged in with Telegram */
export interface ConnectedWebsites {
  _: 'connectedWebsites'
  /** List of connected websites */
  websites: ConnectedWebsite[]
}
