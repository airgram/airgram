import { ContactLinkUnion } from './ContactLink'
import { UserUnion } from './User'

export interface ContactsLink {
  _: 'contacts.link'
  my_link: ContactLinkUnion
  foreign_link: ContactLinkUnion
  user: UserUnion
}

export type ContactsLinkUnion = ContactsLink
