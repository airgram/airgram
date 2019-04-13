/** Represents a payload of a callback query */
export type CallbackQueryPayloadUnion = CallbackQueryPayloadData
  | CallbackQueryPayloadGame

/** The payload from a general callback button */
export interface CallbackQueryPayloadData {
  _: 'callbackQueryPayloadData'
  /** Data that was attached to the callback button */
  data: string
}

/** The payload from a game callback button */
export interface CallbackQueryPayloadGame {
  _: 'callbackQueryPayloadGame'
  /** A short name of the game that was attached to the callback button */
  gameShortName: string
}
