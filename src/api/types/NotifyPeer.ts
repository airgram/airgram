import { PeerUnion } from './Peer'

export interface NotifyAll {
  _: 'notifyAll'
}

export interface NotifyChats {
  _: 'notifyChats'
}

export interface NotifyPeer {
  _: 'notifyPeer'
  peer: PeerUnion
}

export interface NotifyUsers {
  _: 'notifyUsers'
}

export type NotifyPeerUnion = NotifyAll
  | NotifyChats
  | NotifyPeer
  | NotifyUsers
