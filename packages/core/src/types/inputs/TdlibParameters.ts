export type TdlibParametersInputUnion = TdlibParametersInput

/** Contains parameters for TDLib initialization */
export interface TdlibParametersInput {
  _: 'tdlibParameters'
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  useTestDc?: boolean
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  databaseDirectory?: string
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  filesDirectory?: string
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  useFileDatabase?: boolean
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  useChatInfoDatabase?: boolean
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  useMessageDatabase?: boolean
  /** If set to true, support for secret chats will be enabled */
  useSecretChats?: boolean
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  apiId?: number
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  apiHash?: string
  /** IETF language tag of the user's operating system language; must be non-empty */
  systemLanguageCode?: string
  /** Model of the device the application is being run on; must be non-empty */
  deviceModel?: string
  /**
   * Version of the operating system the application is being run on. If empty, the version
   * is automatically detected by TDLib
   */
  systemVersion?: string
  /** Application version; must be non-empty */
  applicationVersion?: string
  /** If set to true, old files will automatically be deleted */
  enableStorageOptimizer?: boolean
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  ignoreFileNames?: boolean
}
