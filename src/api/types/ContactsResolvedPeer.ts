import { ChatUnion } from './Chat'
import { PeerUnion } from './Peer'
import { UserUnion } from './User'

export interface ContactsResolvedPeer {
  _: 'contacts.resolvedPeer'
  peer: PeerUnion
  chats: ChatUnion[]
  users: UserUnion[]
}

export type ContactsResolvedPeerUnion = ContactsResolvedPeer
