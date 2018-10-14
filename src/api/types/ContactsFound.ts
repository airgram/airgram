import { ChatUnion } from './Chat'
import { PeerUnion } from './Peer'
import { UserUnion } from './User'

export interface ContactsFound {
  _: 'contacts.found'
  results: PeerUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}

export type ContactsFoundUnion = ContactsFound
