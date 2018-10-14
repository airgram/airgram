import { InputPeerUnion } from './InputPeer'

export interface InputNotifyAll {
  _: 'inputNotifyAll'
}

export interface InputNotifyChats {
  _: 'inputNotifyChats'
}

export interface InputNotifyPeer {
  _: 'inputNotifyPeer'
  peer: InputPeerUnion
}

export interface InputNotifyUsers {
  _: 'inputNotifyUsers'
}

export type InputNotifyPeerUnion = InputNotifyAll
  | InputNotifyChats
  | InputNotifyPeer
  | InputNotifyUsers
