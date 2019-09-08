/** Represents a payload of a callback query */
export type CallbackQueryPayloadInputUnion = CallbackQueryPayloadDataInput
  | CallbackQueryPayloadGameInput

/** The payload from a general callback button */
export interface CallbackQueryPayloadDataInput {
  _: 'callbackQueryPayloadData'
  /** Data that was attached to the callback button */
  data?: string
}

/** The payload from a game callback button */
export interface CallbackQueryPayloadGameInput {
  _: 'callbackQueryPayloadGame'
  /** A short name of the game that was attached to the callback button */
  gameShortName?: string
}
