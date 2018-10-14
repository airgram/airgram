import { UserStatusUnion } from './UserStatus'

export interface ContactStatus {
  _: 'contactStatus'
  user_id: number
  status: UserStatusUnion
}

export type ContactStatusUnion = ContactStatus
