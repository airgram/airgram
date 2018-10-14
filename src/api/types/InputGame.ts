import { InputUserUnion } from './InputUser'

export interface InputGameId {
  _: 'inputGameID'
  id: number
  access_hash: number
}

export interface InputGameShortName {
  _: 'inputGameShortName'
  bot_id: InputUserUnion
  short_name: string
}

export type InputGameUnion = InputGameId
  | InputGameShortName
