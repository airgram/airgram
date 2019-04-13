/** Contains parameters for TDLib initialization */
export class TdlibParametersBaseModel {
  public _: 'tdlibParameters'
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  public useTestDc: boolean
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  public databaseDirectory: string
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  public filesDirectory: string
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  public useFileDatabase: boolean
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  public useChatInfoDatabase: boolean
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  public useMessageDatabase: boolean
  /** If set to true, support for secret chats will be enabled */
  public useSecretChats: boolean
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  public apiId: number
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  public apiHash: string
  /** IETF language tag of the user's operating system language; must be non-empty */
  public systemLanguageCode: string
  /** Model of the device the application is being run on; must be non-empty */
  public deviceModel: string
  /** Version of the operating system the application is being run on; must be non-empty */
  public systemVersion: string
  /** Application version; must be non-empty */
  public applicationVersion: string
  /** If set to true, old files will automatically be deleted */
  public enableStorageOptimizer: boolean
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  public ignoreFileNames: boolean
}
