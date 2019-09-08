import { InlineKeyboardButton, KeyboardButton } from './index'

/**
 * Contains a description of a custom keyboard and actions that can be done with it
 * to quickly reply to bots
 */
export type ReplyMarkupUnion = ReplyMarkupRemoveKeyboard
  | ReplyMarkupForceReply
  | ReplyMarkupShowKeyboard
  | ReplyMarkupInlineKeyboard

/**
 * Instructs clients to remove the keyboard once this message has been received. This
 * kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export interface ReplyMarkupRemoveKeyboard {
  _: 'replyMarkupRemoveKeyboard'
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  isPersonal: boolean
}

/** Instructs clients to force a reply to this message */
export interface ReplyMarkupForceReply {
  _: 'replyMarkupForceReply'
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  isPersonal: boolean
}

/** Contains a custom keyboard layout to quickly reply to bots */
export interface ReplyMarkupShowKeyboard {
  _: 'replyMarkupShowKeyboard'
  /** A list of rows of bot keyboard buttons */
  rows: KeyboardButton[][]
  /** True, if the client needs to resize the keyboard vertically */
  resizeKeyboard: boolean
  /** True, if the client needs to hide the keyboard after use */
  oneTime: boolean
  /**
   * True, if the keyboard must automatically be shown to the current user. For outgoing
   * messages, specify true to show the keyboard only for the mentioned users and for
   * the target user of a reply
   */
  isPersonal: boolean
}

/** Contains an inline keyboard layout */
export interface ReplyMarkupInlineKeyboard {
  _: 'replyMarkupInlineKeyboard'
  /** A list of rows of inline keyboard buttons */
  rows: InlineKeyboardButton[][]
}
