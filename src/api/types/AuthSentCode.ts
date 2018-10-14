import { AuthCodeTypeUnion } from './AuthCodeType'
import { AuthSentCodeTypeUnion } from './AuthSentCodeType'

export interface AuthSentCode {
  _: 'auth.sentCode'
  flags: number
  phone_registered?: true
  type: AuthSentCodeTypeUnion
  phone_code_hash: string
  next_type?: AuthCodeTypeUnion
  timeout?: number
}

export type AuthSentCodeUnion = AuthSentCode
