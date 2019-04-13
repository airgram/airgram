/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export class MessageWebsiteConnectedBaseModel {
  public _: 'messageWebsiteConnected'
  /** Domain name of the connected website */
  public domainName: string
}
