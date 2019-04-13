/** Contains information about one website the current user is logged in with Telegram */
export class ConnectedWebsiteBaseModel {
  public _: 'connectedWebsite'
  /** Website identifier */
  public id: number | string
  /** The domain name of the website */
  public domainName: string
  /** User identifier of a bot linked with the website */
  public botUserId: number
  /** The version of a browser used to log in */
  public browser: string
  /** Operating system the browser is running on */
  public platform: string
  /** Point in time (Unix timestamp) when the user was logged in */
  public logInDate: number
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  public lastActiveDate: number
  /** IP address from which the user was logged in, in human-readable format */
  public ip: string
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  public location: string
}
