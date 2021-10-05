/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonTypeUnion = InlineKeyboardButtonTypeUrl
  | InlineKeyboardButtonTypeLoginUrl
  | InlineKeyboardButtonTypeCallback
  | InlineKeyboardButtonTypeCallbackWithPassword
  | InlineKeyboardButtonTypeCallbackGame
  | InlineKeyboardButtonTypeSwitchInline
  | InlineKeyboardButtonTypeBuy

/** A button that opens a specified URL */
export interface InlineKeyboardButtonTypeUrl {
  _: 'inlineKeyboardButtonTypeUrl'
  /** HTTP or tg:// URL to open */
  url: string
}

/**
 * A button that opens a specified URL and automatically authorize the current user
 * if allowed to do so
 */
export interface InlineKeyboardButtonTypeLoginUrl {
  _: 'inlineKeyboardButtonTypeLoginUrl'
  /** An HTTP URL to open */
  url: string
  /** Unique button identifier */
  id: number
  /** If non-empty, new text of the button in forwarded messages */
  forwardText: string
}

/** A button that sends a callback query to a bot */
export interface InlineKeyboardButtonTypeCallback {
  _: 'inlineKeyboardButtonTypeCallback'
  /** Data to be sent to the bot via a callback query */
  data: string
}

/**
 * A button that asks for password of the current user and then sends a callback query
 * to a bot
 */
export interface InlineKeyboardButtonTypeCallbackWithPassword {
  _: 'inlineKeyboardButtonTypeCallbackWithPassword'
  /** Data to be sent to the bot via a callback query */
  data: string
}

/**
 * A button with a game that sends a callback query to a bot. This button must be in
 * the first column and row of the keyboard and can be attached only to a message with
 * content of the type messageGame
 */
export interface InlineKeyboardButtonTypeCallbackGame {
  _: 'inlineKeyboardButtonTypeCallbackGame'
}

/** A button that forces an inline query to the bot to be inserted in the input field */
export interface InlineKeyboardButtonTypeSwitchInline {
  _: 'inlineKeyboardButtonTypeSwitchInline'
  /** Inline query to be sent to the bot */
  query: string
  /** True, if the inline query must be sent from the current chat */
  inCurrentChat: boolean
}

/**
 * A button to buy something. This button must be in the first column and row of the
 * keyboard and can be attached only to a message with content of the type messageInvoice
 */
export interface InlineKeyboardButtonTypeBuy {
  _: 'inlineKeyboardButtonTypeBuy'
}
