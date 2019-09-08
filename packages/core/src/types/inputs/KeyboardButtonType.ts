/** Describes a keyboard button type */
export type KeyboardButtonTypeInputUnion = KeyboardButtonTypeTextInput
  | KeyboardButtonTypeRequestPhoneNumberInput
  | KeyboardButtonTypeRequestLocationInput

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
