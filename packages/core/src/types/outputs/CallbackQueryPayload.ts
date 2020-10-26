/** Represents a payload of a callback query */
export type CallbackQueryPayloadUnion = CallbackQueryPayloadData
  | CallbackQueryPayloadDataWithPassword
  | CallbackQueryPayloadGame

/** The payload for a general callback button */
export interface CallbackQueryPayloadData {
  _: 'callbackQueryPayloadData'
  /** Data that was attached to the callback button */
  data: string
}

/** The payload for a callback button requiring password */
export interface CallbackQueryPayloadDataWithPassword {
  _: 'callbackQueryPayloadDataWithPassword'
  /** The password for the current user */
  password: string
  /** Data that was attached to the callback button */
  data: string
}

/** The payload for a game callback button */
export interface CallbackQueryPayloadGame {
  _: 'callbackQueryPayloadGame'
  /** A short name of the game that was attached to the callback button */
  gameShortName: string
}
