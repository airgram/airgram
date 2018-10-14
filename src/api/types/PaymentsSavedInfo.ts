import { PaymentRequestedInfoUnion } from './PaymentRequestedInfo'

export interface PaymentsSavedInfo {
  _: 'payments.savedInfo'
  flags: number
  has_saved_credentials?: true
  saved_info?: PaymentRequestedInfoUnion
}

export type PaymentsSavedInfoUnion = PaymentsSavedInfo
