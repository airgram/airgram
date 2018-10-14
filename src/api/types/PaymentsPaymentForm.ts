import { DataJsonUnion } from './DataJson'
import { InvoiceUnion } from './Invoice'
import { PaymentRequestedInfoUnion } from './PaymentRequestedInfo'
import { PaymentSavedCredentialsUnion } from './PaymentSavedCredentials'
import { UserUnion } from './User'

export interface PaymentsPaymentForm {
  _: 'payments.paymentForm'
  flags: number
  can_save_credentials?: true
  password_missing?: true
  bot_id: number
  invoice: InvoiceUnion
  provider_id: number
  url: string
  native_provider?: string
  native_params?: DataJsonUnion
  saved_info?: PaymentRequestedInfoUnion
  saved_credentials?: PaymentSavedCredentialsUnion
  users: UserUnion[]
}

export type PaymentsPaymentFormUnion = PaymentsPaymentForm
