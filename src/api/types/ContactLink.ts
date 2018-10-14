
export interface ContactLinkContact {
  _: 'contactLinkContact'
}

export interface ContactLinkHasPhone {
  _: 'contactLinkHasPhone'
}

export interface ContactLinkNone {
  _: 'contactLinkNone'
}

export interface ContactLinkUnknown {
  _: 'contactLinkUnknown'
}

export type ContactLinkUnion = ContactLinkContact
  | ContactLinkHasPhone
  | ContactLinkNone
  | ContactLinkUnknown
