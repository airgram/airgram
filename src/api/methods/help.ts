/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  CdnConfigUnion,
  ConfigUnion,
  HelpAppUpdateUnion,
  HelpInviteTextUnion,
  HelpSupportUnion,
  HelpTermsOfServiceUnion,
  InputAppEventUnion,
  NearestDcUnion,
  UpdatesUnion
} from '../'

export interface GetAppChangelogParams {
  prev_app_version: string
}

export interface SaveAppLogParams {
  events: InputAppEventUnion[]
}

export interface SetBotUpdatesStatusParams {
  message: string,
  pending_updates_count: number
}

export interface HelpApi {
  getAppChangelog: (params: GetAppChangelogParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  getAppUpdate: (options?: ag.MtpRequestOptions) => Promise<HelpAppUpdateUnion>
  getCdnConfig: (options?: ag.MtpRequestOptions) => Promise<CdnConfigUnion>
  getConfig: (options?: ag.MtpRequestOptions) => Promise<ConfigUnion>
  getInviteText: (options?: ag.MtpRequestOptions) => Promise<HelpInviteTextUnion>
  getNearestDc: (options?: ag.MtpRequestOptions) => Promise<NearestDcUnion>
  getSupport: (options?: ag.MtpRequestOptions) => Promise<HelpSupportUnion>
  getTermsOfService: (options?: ag.MtpRequestOptions) => Promise<HelpTermsOfServiceUnion>
  saveAppLog: (params: SaveAppLogParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setBotUpdatesStatus: (params: SetBotUpdatesStatusParams, options?: ag.MtpRequestOptions) => Promise<boolean>
}

export const factory = (callApi: ag.CallApiFn): HelpApi => ({
  getAppChangelog: (params: GetAppChangelogParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<GetAppChangelogParams, UpdatesUnion>('help.getAppChangelog', params, options),

  getAppUpdate: (options?: ag.MtpRequestOptions): Promise<HelpAppUpdateUnion> =>
    callApi<void, HelpAppUpdateUnion>('help.getAppUpdate', undefined, options),

  getCdnConfig: (options?: ag.MtpRequestOptions): Promise<CdnConfigUnion> =>
    callApi<void, CdnConfigUnion>('help.getCdnConfig', undefined, options),

  getConfig: (options?: ag.MtpRequestOptions): Promise<ConfigUnion> =>
    callApi<void, ConfigUnion>('help.getConfig', undefined, options),

  getInviteText: (options?: ag.MtpRequestOptions): Promise<HelpInviteTextUnion> =>
    callApi<void, HelpInviteTextUnion>('help.getInviteText', undefined, options),

  getNearestDc: (options?: ag.MtpRequestOptions): Promise<NearestDcUnion> =>
    callApi<void, NearestDcUnion>('help.getNearestDc', undefined, options),

  getSupport: (options?: ag.MtpRequestOptions): Promise<HelpSupportUnion> =>
    callApi<void, HelpSupportUnion>('help.getSupport', undefined, options),

  getTermsOfService: (options?: ag.MtpRequestOptions): Promise<HelpTermsOfServiceUnion> =>
    callApi<void, HelpTermsOfServiceUnion>('help.getTermsOfService', undefined, options),

  saveAppLog: (params: SaveAppLogParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveAppLogParams, boolean>('help.saveAppLog', params, options),

  setBotUpdatesStatus: (params: SetBotUpdatesStatusParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetBotUpdatesStatusParams, boolean>('help.setBotUpdatesStatus', params, options)
})
