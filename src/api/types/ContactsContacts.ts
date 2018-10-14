import { ContactUnion } from './Contact'
import { UserUnion } from './User'

export interface ContactsContacts {
  _: 'contacts.contacts'
  contacts: ContactUnion[]
  saved_count: number
  users: UserUnion[]
}

export interface ContactsContactsNotModified {
  _: 'contacts.contactsNotModified'
}

export type ContactsContactsUnion = ContactsContacts
  | ContactsContactsNotModified
