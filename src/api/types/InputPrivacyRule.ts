import { InputUserUnion } from './InputUser'

export interface InputPrivacyValueAllowAll {
  _: 'inputPrivacyValueAllowAll'
}

export interface InputPrivacyValueAllowContacts {
  _: 'inputPrivacyValueAllowContacts'
}

export interface InputPrivacyValueAllowUsers {
  _: 'inputPrivacyValueAllowUsers'
  users: InputUserUnion[]
}

export interface InputPrivacyValueDisallowAll {
  _: 'inputPrivacyValueDisallowAll'
}

export interface InputPrivacyValueDisallowContacts {
  _: 'inputPrivacyValueDisallowContacts'
}

export interface InputPrivacyValueDisallowUsers {
  _: 'inputPrivacyValueDisallowUsers'
  users: InputUserUnion[]
}

export type InputPrivacyRuleUnion = InputPrivacyValueAllowAll
  | InputPrivacyValueAllowContacts
  | InputPrivacyValueAllowUsers
  | InputPrivacyValueDisallowAll
  | InputPrivacyValueDisallowContacts
  | InputPrivacyValueDisallowUsers
