/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  LangPackDifferenceUnion,
  LangPackLanguageUnion,
  LangPackStringUnion
} from '../'

export interface GetDifferenceParams {
  from_version: number
}

export interface GetLangPackParams {
  lang_code: string
}

export interface GetStringsParams {
  keys: string[],
  lang_code: string
}

export interface LangpackApi {
  getDifference: (params: GetDifferenceParams, options?: ag.MtpRequestOptions) => Promise<LangPackDifferenceUnion>
  getLangPack: (params: GetLangPackParams, options?: ag.MtpRequestOptions) => Promise<LangPackDifferenceUnion>
  getLanguages: (options?: ag.MtpRequestOptions) => Promise<LangPackLanguageUnion[]>
  getStrings: (params: GetStringsParams, options?: ag.MtpRequestOptions) => Promise<LangPackStringUnion[]>
}

export const factory = (callApi: ag.CallApiFn): LangpackApi => ({
  getDifference: (params: GetDifferenceParams, options?: ag.MtpRequestOptions): Promise<LangPackDifferenceUnion> =>
    callApi<GetDifferenceParams, LangPackDifferenceUnion>('langpack.getDifference', params, options),

  getLangPack: (params: GetLangPackParams, options?: ag.MtpRequestOptions): Promise<LangPackDifferenceUnion> =>
    callApi<GetLangPackParams, LangPackDifferenceUnion>('langpack.getLangPack', params, options),

  getLanguages: (options?: ag.MtpRequestOptions): Promise<LangPackLanguageUnion[]> =>
    callApi<void, LangPackLanguageUnion[]>('langpack.getLanguages', undefined, options),

  getStrings: (params: GetStringsParams, options?: ag.MtpRequestOptions): Promise<LangPackStringUnion[]> =>
    callApi<GetStringsParams, LangPackStringUnion[]>('langpack.getStrings', params, options)
})
