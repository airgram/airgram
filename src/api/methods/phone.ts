/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  DataJsonUnion,
  InputPhoneCallUnion,
  InputUserUnion,
  PhoneCallDiscardReasonUnion,
  PhoneCallProtocolUnion,
  PhonePhoneCallUnion,
  UpdatesUnion
} from '../'

export interface AcceptCallParams {
  g_b: number[],
  peer: InputPhoneCallUnion,
  protocol: PhoneCallProtocolUnion
}

export interface ConfirmCallParams {
  g_a: number[],
  key_fingerprint: string,
  peer: InputPhoneCallUnion,
  protocol: PhoneCallProtocolUnion
}

export interface DiscardCallParams {
  connection_id: string,
  duration: number,
  peer: InputPhoneCallUnion,
  reason: PhoneCallDiscardReasonUnion
}

export interface ReceivedCallParams {
  peer: InputPhoneCallUnion
}

export interface RequestCallParams {
  g_a_hash: number[],
  protocol: PhoneCallProtocolUnion,
  random_id: number,
  user_id: InputUserUnion
}

export interface SaveCallDebugParams {
  debug: DataJsonUnion,
  peer: InputPhoneCallUnion
}

export interface SetCallRatingParams {
  comment: string,
  peer: InputPhoneCallUnion,
  rating: number
}

export interface PhoneApi {
  acceptCall: (params: AcceptCallParams, options?: ag.MtpRequestOptions) => Promise<PhonePhoneCallUnion>
  confirmCall: (params: ConfirmCallParams, options?: ag.MtpRequestOptions) => Promise<PhonePhoneCallUnion>
  discardCall: (params: DiscardCallParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  getCallConfig: (options?: ag.MtpRequestOptions) => Promise<DataJsonUnion>
  receivedCall: (params: ReceivedCallParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  requestCall: (params: RequestCallParams, options?: ag.MtpRequestOptions) => Promise<PhonePhoneCallUnion>
  saveCallDebug: (params: SaveCallDebugParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setCallRating: (params: SetCallRatingParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
}

export const factory = (callApi: ag.CallApiFn): PhoneApi => ({
  acceptCall: (params: AcceptCallParams, options?: ag.MtpRequestOptions): Promise<PhonePhoneCallUnion> =>
    callApi<AcceptCallParams, PhonePhoneCallUnion>('phone.acceptCall', params, options),

  confirmCall: (params: ConfirmCallParams, options?: ag.MtpRequestOptions): Promise<PhonePhoneCallUnion> =>
    callApi<ConfirmCallParams, PhonePhoneCallUnion>('phone.confirmCall', params, options),

  discardCall: (params: DiscardCallParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<DiscardCallParams, UpdatesUnion>('phone.discardCall', params, options),

  getCallConfig: (options?: ag.MtpRequestOptions): Promise<DataJsonUnion> =>
    callApi<void, DataJsonUnion>('phone.getCallConfig', undefined, options),

  receivedCall: (params: ReceivedCallParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReceivedCallParams, boolean>('phone.receivedCall', params, options),

  requestCall: (params: RequestCallParams, options?: ag.MtpRequestOptions): Promise<PhonePhoneCallUnion> =>
    callApi<RequestCallParams, PhonePhoneCallUnion>('phone.requestCall', params, options),

  saveCallDebug: (params: SaveCallDebugParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveCallDebugParams, boolean>('phone.saveCallDebug', params, options),

  setCallRating: (params: SetCallRatingParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SetCallRatingParams, UpdatesUnion>('phone.setCallRating', params, options)
})
