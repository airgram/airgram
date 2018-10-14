/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  DataJsonUnion
} from '../'

export interface AnswerWebhookJsonQueryParams {
  data: DataJsonUnion,
  query_id: number
}

export interface SendCustomRequestParams {
  custom_method: string,
  params: DataJsonUnion
}

export interface BotsApi {
  answerWebhookJSONQuery: (params: AnswerWebhookJsonQueryParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  sendCustomRequest: (params: SendCustomRequestParams, options?: ag.MtpRequestOptions) => Promise<DataJsonUnion>
}

export const factory = (callApi: ag.CallApiFn): BotsApi => ({
  answerWebhookJSONQuery: (params: AnswerWebhookJsonQueryParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<AnswerWebhookJsonQueryParams, boolean>('bots.answerWebhookJSONQuery', params, options),

  sendCustomRequest: (params: SendCustomRequestParams, options?: ag.MtpRequestOptions): Promise<DataJsonUnion> =>
    callApi<SendCustomRequestParams, DataJsonUnion>('bots.sendCustomRequest', params, options)
})
