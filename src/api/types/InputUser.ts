
export interface InputUser {
  _: 'inputUser'
  user_id: number
  access_hash: number
}

export interface InputUserEmpty {
  _: 'inputUserEmpty'
}

export interface InputUserSelf {
  _: 'inputUserSelf'
}

export type InputUserUnion = InputUser
  | InputUserEmpty
  | InputUserSelf
