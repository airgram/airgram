/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  ChannelMessagesFilterUnion,
  InputChannelUnion,
  UpdatesChannelDifferenceUnion,
  UpdatesDifferenceUnion,
  UpdatesStateUnion
} from '../'

export interface GetChannelDifferenceParams {
  channel: InputChannelUnion,
  filter: ChannelMessagesFilterUnion,
  flags: number,
  limit: number,
  pts: number,
  force?: true
}

export interface GetDifferenceParams {
  date: number,
  flags: number,
  pts: number,
  qts: number,
  pts_total_limit?: number
}

export interface UpdatesApi {
  getChannelDifference: (params: GetChannelDifferenceParams, options?: ag.MtpRequestOptions) => Promise<UpdatesChannelDifferenceUnion>
  getDifference: (params: GetDifferenceParams, options?: ag.MtpRequestOptions) => Promise<UpdatesDifferenceUnion>
  getState: (options?: ag.MtpRequestOptions) => Promise<UpdatesStateUnion>
}

export const factory = (callApi: ag.CallApiFn): UpdatesApi => ({
  getChannelDifference: (params: GetChannelDifferenceParams, options?: ag.MtpRequestOptions): Promise<UpdatesChannelDifferenceUnion> =>
    callApi<GetChannelDifferenceParams, UpdatesChannelDifferenceUnion>('updates.getChannelDifference', params, options),

  getDifference: (params: GetDifferenceParams, options?: ag.MtpRequestOptions): Promise<UpdatesDifferenceUnion> =>
    callApi<GetDifferenceParams, UpdatesDifferenceUnion>('updates.getDifference', params, options),

  getState: (options?: ag.MtpRequestOptions): Promise<UpdatesStateUnion> =>
    callApi<void, UpdatesStateUnion>('updates.getState', undefined, options)
})
