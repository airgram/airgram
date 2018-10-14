import { ImportedContactUnion } from './ImportedContact'
import { PopularContactUnion } from './PopularContact'
import { UserUnion } from './User'

export interface ContactsImportedContacts {
  _: 'contacts.importedContacts'
  imported: ImportedContactUnion[]
  popular_invites: PopularContactUnion[]
  retry_contacts: number[]
  users: UserUnion[]
}

export type ContactsImportedContactsUnion = ContactsImportedContacts
