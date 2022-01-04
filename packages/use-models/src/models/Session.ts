/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions must be shown to the user in the returned order
 */
export class SessionBaseModel {
  public _: 'session'

  /** Session identifier */
  public id: string

  /** True, if this session is the current session */
  public isCurrent: boolean

  /** True, if a password is needed to complete authorization of the session */
  public isPasswordPending: boolean

  /** True, if incoming secret chats can be accepted by the session */
  public canAcceptSecretChats: boolean

  /** True, if incoming calls can be accepted by the session */
  public canAcceptCalls: boolean

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
