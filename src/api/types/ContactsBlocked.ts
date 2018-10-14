import { ContactBlockedUnion } from './ContactBlocked'
import { UserUnion } from './User'

export interface ContactsBlocked {
  _: 'contacts.blocked'
  blocked: ContactBlockedUnion[]
  users: UserUnion[]
}

export interface ContactsBlockedSlice {
  _: 'contacts.blockedSlice'
  count: number
  blocked: ContactBlockedUnion[]
  users: UserUnion[]
}

export type ContactsBlockedUnion = ContactsBlocked
  | ContactsBlockedSlice
