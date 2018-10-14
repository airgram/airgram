import { PeerUnion } from './Peer'

export interface TopPeer {
  _: 'topPeer'
  peer: PeerUnion
  rating: number
}

export type TopPeerUnion = TopPeer
