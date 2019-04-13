/**
 * Contains information about one session in a Telegram application used by the current
 * user
 */
export class SessionBaseModel {
  public _: 'session'
  /** Session identifier */
  public id: number | string
  /** True, if this session is the current session */
  public isCurrent: boolean
  /** Telegram API identifier, as provided by the application */
  public apiId: number
  /** Name of the application, as provided by the application */
  public applicationName: string
  /** The version of the application, as provided by the application */
  public applicationVersion: string
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  public isOfficialApplication: boolean
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  public deviceModel: string
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  public platform: string
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  public systemVersion: string
  /** Point in time (Unix timestamp) when the user has logged in */
  public logInDate: number
  /** Point in time (Unix timestamp) when the session was last used */
  public lastActiveDate: number
  /** IP address from which the session was created, in human-readable format */
  public ip: string
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  public country: string
  /** Region code from which the session was created, based on the IP address */
  public region: string
}
