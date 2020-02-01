/** Describes a keyboard button type */
export type KeyboardButtonTypeUnion = KeyboardButtonTypeText
  | KeyboardButtonTypeRequestPhoneNumber
  | KeyboardButtonTypeRequestLocation
  | KeyboardButtonTypeRequestPoll

/** A simple button, with text that should be sent when the button is pressed */
export interface KeyboardButtonTypeText {
  _: 'keyboardButtonTypeText'
}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export interface KeyboardButtonTypeRequestPhoneNumber {
  _: 'keyboardButtonTypeRequestPhoneNumber'
}

/** A button that sends the user's location when pressed; available only in private chats */
export interface KeyboardButtonTypeRequestLocation {
  _: 'keyboardButtonTypeRequestLocation'
}

/**
 * A button that allows the user to create and send a poll when pressed; available only
 * in private chats
 */
export interface KeyboardButtonTypeRequestPoll {
  _: 'keyboardButtonTypeRequestPoll'
  /** If true, only regular polls must be allowed to create */
  forceRegular: boolean
  /** If true, only polls in quiz mode must be allowed to create */
  forceQuiz: boolean
}
