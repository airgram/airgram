import { UpdatesUnion } from './Updates'

export interface PaymentsPaymentResult {
  _: 'payments.paymentResult'
  updates: UpdatesUnion
}

export interface PaymentsPaymentVerficationNeeded {
  _: 'payments.paymentVerficationNeeded'
  url: string
}

export type PaymentsPaymentResultUnion = PaymentsPaymentResult
  | PaymentsPaymentVerficationNeeded
