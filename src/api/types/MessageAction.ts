import { PaymentChargeUnion } from './PaymentCharge'
import { PaymentRequestedInfoUnion } from './PaymentRequestedInfo'
import { PhoneCallDiscardReasonUnion } from './PhoneCallDiscardReason'
import { PhotoUnion } from './Photo'

export interface MessageActionChannelCreate {
  _: 'messageActionChannelCreate'
  title: string
}

export interface MessageActionChannelMigrateFrom {
  _: 'messageActionChannelMigrateFrom'
  title: string
  chat_id: number
}

export interface MessageActionChatAddUser {
  _: 'messageActionChatAddUser'
  users: number[]
}

export interface MessageActionChatCreate {
  _: 'messageActionChatCreate'
  title: string
  users: number[]
}

export interface MessageActionChatDeletePhoto {
  _: 'messageActionChatDeletePhoto'
}

export interface MessageActionChatDeleteUser {
  _: 'messageActionChatDeleteUser'
  user_id: number
}

export interface MessageActionChatEditPhoto {
  _: 'messageActionChatEditPhoto'
  photo: PhotoUnion
}

export interface MessageActionChatEditTitle {
  _: 'messageActionChatEditTitle'
  title: string
}

export interface MessageActionChatJoinedByLink {
  _: 'messageActionChatJoinedByLink'
  inviter_id: number
}

export interface MessageActionChatMigrateTo {
  _: 'messageActionChatMigrateTo'
  channel_id: number
}

export interface MessageActionEmpty {
  _: 'messageActionEmpty'
}

export interface MessageActionGameScore {
  _: 'messageActionGameScore'
  game_id: string
  score: number
}

export interface MessageActionHistoryClear {
  _: 'messageActionHistoryClear'
}

export interface MessageActionPaymentSent {
  _: 'messageActionPaymentSent'
  currency: string
  total_amount: string
}

export interface MessageActionPaymentSentMe {
  _: 'messageActionPaymentSentMe'
  flags: number
  currency: string
  total_amount: string
  payload: number[]
  info?: PaymentRequestedInfoUnion
  shipping_option_id?: string
  charge: PaymentChargeUnion
}

export interface MessageActionPhoneCall {
  _: 'messageActionPhoneCall'
  flags: number
  call_id: string
  reason?: PhoneCallDiscardReasonUnion
  duration?: number
}

export interface MessageActionPinMessage {
  _: 'messageActionPinMessage'
}

export interface MessageActionScreenshotTaken {
  _: 'messageActionScreenshotTaken'
}

export type MessageActionUnion = MessageActionChannelCreate
  | MessageActionChannelMigrateFrom
  | MessageActionChatAddUser
  | MessageActionChatCreate
  | MessageActionChatDeletePhoto
  | MessageActionChatDeleteUser
  | MessageActionChatEditPhoto
  | MessageActionChatEditTitle
  | MessageActionChatJoinedByLink
  | MessageActionChatMigrateTo
  | MessageActionEmpty
  | MessageActionGameScore
  | MessageActionHistoryClear
  | MessageActionPaymentSent
  | MessageActionPaymentSentMe
  | MessageActionPhoneCall
  | MessageActionPinMessage
  | MessageActionScreenshotTaken
