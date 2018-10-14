import { AuthorizationUnion } from './Authorization'

export interface AccountAuthorizations {
  _: 'account.authorizations'
  authorizations: AuthorizationUnion[]
}

export type AccountAuthorizationsUnion = AccountAuthorizations
