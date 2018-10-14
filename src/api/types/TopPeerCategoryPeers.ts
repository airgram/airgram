import { TopPeerUnion } from './TopPeer'
import { TopPeerCategoryUnion } from './TopPeerCategory'

export interface TopPeerCategoryPeers {
  _: 'topPeerCategoryPeers'
  category: TopPeerCategoryUnion
  count: number
  peers: TopPeerUnion[]
}

export type TopPeerCategoryPeersUnion = TopPeerCategoryPeers
