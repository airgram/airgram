/** Represents a payload of a callback query */
export type CallbackQueryPayloadInputUnion = CallbackQueryPayloadDataInput
  | CallbackQueryPayloadDataWithPasswordInput
  | CallbackQueryPayloadGameInput

/** The payload for a general callback button */
export interface CallbackQueryPayloadDataInput {
  _: 'callbackQueryPayloadData'
  /** Data that was attached to the callback button */
  data?: string
}

/** The payload for a callback button requiring password */
export interface CallbackQueryPayloadDataWithPasswordInput {
  _: 'callbackQueryPayloadDataWithPassword'
  /** The password for the current user */
  password?: string
  /** Data that was attached to the callback button */
  data?: string
}

/** The payload for a game callback button */
export interface CallbackQueryPayloadGameInput {
  _: 'callbackQueryPayloadGame'
  /** A short name of the game that was attached to the callback button */
  gameShortName?: string
}
