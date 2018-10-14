import { UserUnion } from './User'

export interface HelpSupport {
  _: 'help.support'
  phone_number: string
  user: UserUnion
}

export type HelpSupportUnion = HelpSupport
