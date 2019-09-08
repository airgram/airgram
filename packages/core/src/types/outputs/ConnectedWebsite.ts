export type ConnectedWebsiteUnion = ConnectedWebsite

/** Contains information about one website the current user is logged in with Telegram */
export interface ConnectedWebsite {
  _: 'connectedWebsite'
  /** Website identifier */
  id: string
  /** The domain name of the website */
  domainName: string
  /** User identifier of a bot linked with the website */
  botUserId: number
  /** The version of a browser used to log in */
  browser: string
  /** Operating system the browser is running on */
  platform: string
  /** Point in time (Unix timestamp) when the user was logged in */
  logInDate: number
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  lastActiveDate: number
  /** IP address from which the user was logged in, in human-readable format */
  ip: string
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  location: string
}
