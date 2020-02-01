/** Describes a keyboard button type */
export type KeyboardButtonTypeInputUnion = KeyboardButtonTypeTextInput
  | KeyboardButtonTypeRequestPhoneNumberInput
  | KeyboardButtonTypeRequestLocationInput
  | KeyboardButtonTypeRequestPollInput

/** A simple button, with text that should be sent when the button is pressed */
export interface KeyboardButtonTypeTextInput {
  _: 'keyboardButtonTypeText'
}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export interface KeyboardButtonTypeRequestPhoneNumberInput {
  _: 'keyboardButtonTypeRequestPhoneNumber'
}

/** A button that sends the user's location when pressed; available only in private chats */
export interface KeyboardButtonTypeRequestLocationInput {
  _: 'keyboardButtonTypeRequestLocation'
}

/**
 * A button that allows the user to create and send a poll when pressed; available only
 * in private chats
 */
export interface KeyboardButtonTypeRequestPollInput {
  _: 'keyboardButtonTypeRequestPoll'
  /** If true, only regular polls must be allowed to create */
  forceRegular?: boolean
  /** If true, only polls in quiz mode must be allowed to create */
  forceQuiz?: boolean
}
