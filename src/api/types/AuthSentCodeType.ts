
export interface AuthSentCodeTypeApp {
  _: 'auth.sentCodeTypeApp'
  length: number
}

export interface AuthSentCodeTypeCall {
  _: 'auth.sentCodeTypeCall'
  length: number
}

export interface AuthSentCodeTypeFlashCall {
  _: 'auth.sentCodeTypeFlashCall'
  pattern: string
}

export interface AuthSentCodeTypeSms {
  _: 'auth.sentCodeTypeSms'
  length: number
}

export type AuthSentCodeTypeUnion = AuthSentCodeTypeApp
  | AuthSentCodeTypeCall
  | AuthSentCodeTypeFlashCall
  | AuthSentCodeTypeSms
