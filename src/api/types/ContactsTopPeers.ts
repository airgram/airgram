import { ChatUnion } from './Chat'
import { TopPeerCategoryPeersUnion } from './TopPeerCategoryPeers'
import { UserUnion } from './User'

export interface ContactsTopPeers {
  _: 'contacts.topPeers'
  categories: TopPeerCategoryPeersUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export interface ContactsTopPeersNotModified {
  _: 'contacts.topPeersNotModified'
}

export type ContactsTopPeersUnion = ContactsTopPeers
  | ContactsTopPeersNotModified
