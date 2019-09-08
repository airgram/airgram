export type SessionUnion = Session

/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions should be shown to the user in the returned order
 */
export interface Session {
  _: 'session'
  /** Session identifier */
  id: string
  /** True, if this session is the current session */
  isCurrent: boolean
  /** True, if a password is needed to complete authorization of the session */
  isPasswordPending: boolean
  /** Telegram API identifier, as provided by the application */
  apiId: number
  /** Name of the application, as provided by the application */
  applicationName: string
  /** The version of the application, as provided by the application */
  applicationVersion: string
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  isOfficialApplication: boolean
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  deviceModel: string
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  platform: string
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  systemVersion: string
  /** Point in time (Unix timestamp) when the user has logged in */
  logInDate: number
  /** Point in time (Unix timestamp) when the session was last used */
  lastActiveDate: number
  /** IP address from which the session was created, in human-readable format */
  ip: string
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  country: string
  /** Region code from which the session was created, based on the IP address */
  region: string
}
