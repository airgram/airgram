import { PhoneCallUnion } from './PhoneCall'
import { UserUnion } from './User'

export interface PhonePhoneCall {
  _: 'phone.phoneCall'
  phone_call: PhoneCallUnion
  users: UserUnion[]
}

export type PhonePhoneCallUnion = PhonePhoneCall
