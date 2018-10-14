
export interface KeyboardButton {
  _: 'keyboardButton'
  text: string
}

export interface KeyboardButtonBuy {
  _: 'keyboardButtonBuy'
  text: string
}

export interface KeyboardButtonCallback {
  _: 'keyboardButtonCallback'
  text: string
  data: number[]
}

export interface KeyboardButtonGame {
  _: 'keyboardButtonGame'
  text: string
}

export interface KeyboardButtonRequestGeoLocation {
  _: 'keyboardButtonRequestGeoLocation'
  text: string
}

export interface KeyboardButtonRequestPhone {
  _: 'keyboardButtonRequestPhone'
  text: string
}

export interface KeyboardButtonSwitchInline {
  _: 'keyboardButtonSwitchInline'
  flags: number
  same_peer?: true
  text: string
  query: string
}

export interface KeyboardButtonUrl {
  _: 'keyboardButtonUrl'
  text: string
  url: string
}

export type KeyboardButtonUnion = KeyboardButton
  | KeyboardButtonBuy
  | KeyboardButtonCallback
  | KeyboardButtonGame
  | KeyboardButtonRequestGeoLocation
  | KeyboardButtonRequestPhone
  | KeyboardButtonSwitchInline
  | KeyboardButtonUrl
