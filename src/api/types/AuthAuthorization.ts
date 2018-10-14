import { UserUnion } from './User'

export interface AuthAuthorization {
  _: 'auth.authorization'
  flags: number
  tmp_sessions?: number
  user: UserUnion
}

export type AuthAuthorizationUnion = AuthAuthorization
