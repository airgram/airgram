
export interface PrivacyValueAllowAll {
  _: 'privacyValueAllowAll'
}

export interface PrivacyValueAllowContacts {
  _: 'privacyValueAllowContacts'
}

export interface PrivacyValueAllowUsers {
  _: 'privacyValueAllowUsers'
  users: number[]
}

export interface PrivacyValueDisallowAll {
  _: 'privacyValueDisallowAll'
}

export interface PrivacyValueDisallowContacts {
  _: 'privacyValueDisallowContacts'
}

export interface PrivacyValueDisallowUsers {
  _: 'privacyValueDisallowUsers'
  users: number[]
}

export type PrivacyRuleUnion = PrivacyValueAllowAll
  | PrivacyValueAllowContacts
  | PrivacyValueAllowUsers
  | PrivacyValueDisallowAll
  | PrivacyValueDisallowContacts
  | PrivacyValueDisallowUsers
