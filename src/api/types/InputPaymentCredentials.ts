import { DataJsonUnion } from './DataJson'

export interface InputPaymentCredentials {
  _: 'inputPaymentCredentials'
  flags: number
  save?: true
  data: DataJsonUnion
}

export interface InputPaymentCredentialsSaved {
  _: 'inputPaymentCredentialsSaved'
  id: string
  tmp_password: number[]
}

export type InputPaymentCredentialsUnion = InputPaymentCredentials
  | InputPaymentCredentialsSaved
