
export interface AuthCodeTypeCall {
  _: 'auth.codeTypeCall'
}

export interface AuthCodeTypeFlashCall {
  _: 'auth.codeTypeFlashCall'
}

export interface AuthCodeTypeSms {
  _: 'auth.codeTypeSms'
}

export type AuthCodeTypeUnion = AuthCodeTypeCall
  | AuthCodeTypeFlashCall
  | AuthCodeTypeSms
