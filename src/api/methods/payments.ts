/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  InputPaymentCredentialsUnion,
  PaymentRequestedInfoUnion,
  PaymentsPaymentFormUnion,
  PaymentsPaymentReceiptUnion,
  PaymentsPaymentResultUnion,
  PaymentsSavedInfoUnion,
  PaymentsValidatedRequestedInfoUnion
} from '../'

export interface ClearSavedInfoParams {
  flags: number,
  credentials?: true,
  info?: true
}

export interface GetPaymentFormParams {
  msg_id: number
}

export interface GetPaymentReceiptParams {
  msg_id: number
}

export interface SendPaymentFormParams {
  credentials: InputPaymentCredentialsUnion,
  flags: number,
  msg_id: number,
  requested_info_id?: string,
  shipping_option_id?: string
}

export interface ValidateRequestedInfoParams {
  flags: number,
  info: PaymentRequestedInfoUnion,
  msg_id: number,
  save?: true
}

export interface PaymentsApi {
  clearSavedInfo: (params: ClearSavedInfoParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  getPaymentForm: (params: GetPaymentFormParams, options?: ag.MtpRequestOptions) => Promise<PaymentsPaymentFormUnion>
  getPaymentReceipt: (params: GetPaymentReceiptParams, options?: ag.MtpRequestOptions) => Promise<PaymentsPaymentReceiptUnion>
  getSavedInfo: (options?: ag.MtpRequestOptions) => Promise<PaymentsSavedInfoUnion>
  sendPaymentForm: (params: SendPaymentFormParams, options?: ag.MtpRequestOptions) => Promise<PaymentsPaymentResultUnion>
  validateRequestedInfo: (params: ValidateRequestedInfoParams, options?: ag.MtpRequestOptions) => Promise<PaymentsValidatedRequestedInfoUnion>
}

export const factory = (callApi: ag.CallApiFn): PaymentsApi => ({
  clearSavedInfo: (params: ClearSavedInfoParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ClearSavedInfoParams, boolean>('payments.clearSavedInfo', params, options),

  getPaymentForm: (params: GetPaymentFormParams, options?: ag.MtpRequestOptions): Promise<PaymentsPaymentFormUnion> =>
    callApi<GetPaymentFormParams, PaymentsPaymentFormUnion>('payments.getPaymentForm', params, options),

  getPaymentReceipt: (params: GetPaymentReceiptParams, options?: ag.MtpRequestOptions): Promise<PaymentsPaymentReceiptUnion> =>
    callApi<GetPaymentReceiptParams, PaymentsPaymentReceiptUnion>('payments.getPaymentReceipt', params, options),

  getSavedInfo: (options?: ag.MtpRequestOptions): Promise<PaymentsSavedInfoUnion> =>
    callApi<void, PaymentsSavedInfoUnion>('payments.getSavedInfo', undefined, options),

  sendPaymentForm: (params: SendPaymentFormParams, options?: ag.MtpRequestOptions): Promise<PaymentsPaymentResultUnion> =>
    callApi<SendPaymentFormParams, PaymentsPaymentResultUnion>('payments.sendPaymentForm', params, options),

  validateRequestedInfo: (params: ValidateRequestedInfoParams, options?: ag.MtpRequestOptions): Promise<PaymentsValidatedRequestedInfoUnion> =>
    callApi<ValidateRequestedInfoParams, PaymentsValidatedRequestedInfoUnion>('payments.validateRequestedInfo', params, options)
})
