/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  AccountAuthorizationsUnion,
  AccountDaysTtlUnion,
  AccountPasswordUnion,
  AccountPasswordSettingsUnion,
  AccountPrivacyRulesUnion,
  AccountTmpPasswordUnion,
  AuthSentCodeUnion,
  InputNotifyPeerUnion,
  InputPeerUnion,
  InputPeerNotifySettingsUnion,
  InputPrivacyKeyUnion,
  InputPrivacyRuleUnion,
  PeerNotifySettingsUnion,
  ReportReasonUnion,
  UserUnion,
  WallPaperUnion
} from '../'

export interface ChangePhoneParams {
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}

export interface CheckUsernameParams {
  username: string
}

export interface ConfirmPhoneParams {
  phone_code: string,
  phone_code_hash: string
}

export interface DeleteAccountParams {
  reason: string
}

export interface GetNotifySettingsParams {
  peer: InputNotifyPeerUnion
}

export interface GetPasswordSettingsParams {
  current_password_hash: number[]
}

export interface GetPrivacyParams {
  key: InputPrivacyKeyUnion
}

export interface GetTmpPasswordParams {
  password_hash: number[],
  period: number
}

export interface RegisterDeviceParams {
  token: string,
  token_type: number
}

export interface ReportPeerParams {
  peer: InputPeerUnion,
  reason: ReportReasonUnion
}

export interface ResetAuthorizationParams {
  hash: number
}

export interface SendChangePhoneCodeParams {
  flags?: number,
  phone_number: string,
  allow_flashcall?: true,
  current_number?: boolean
}

export interface SendConfirmPhoneCodeParams {
  flags?: number,
  hash: string,
  allow_flashcall?: true,
  current_number?: boolean
}

export interface SetAccountTtlParams {
  ttl: AccountDaysTtlUnion
}

export interface SetPrivacyParams {
  key: InputPrivacyKeyUnion,
  rules: InputPrivacyRuleUnion[]
}

export interface UnregisterDeviceParams {
  token: string,
  token_type: number
}

export interface UpdateDeviceLockedParams {
  period: number
}

export interface UpdateNotifySettingsParams {
  peer: InputNotifyPeerUnion,
  settings: InputPeerNotifySettingsUnion
}

export interface UpdatePasswordSettingsParams {
  current_password_hash: number[],
  new_settings: AccountPasswordSettingsUnion
}

export interface UpdateProfileParams {
  flags?: number,
  about?: string,
  first_name?: string,
  last_name?: string
}

export interface UpdateStatusParams {
  offline: boolean
}

export interface UpdateUsernameParams {
  username: string
}

export interface AccountApi {
  changePhone: (params: ChangePhoneParams, options?: ag.MtpRequestOptions) => Promise<UserUnion>
  checkUsername: (params: CheckUsernameParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  confirmPhone: (params: ConfirmPhoneParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  deleteAccount: (params: DeleteAccountParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  getAccountTTL: (options?: ag.MtpRequestOptions) => Promise<AccountDaysTtlUnion>
  getAuthorizations: (options?: ag.MtpRequestOptions) => Promise<AccountAuthorizationsUnion>
  getNotifySettings: (params: GetNotifySettingsParams, options?: ag.MtpRequestOptions) => Promise<PeerNotifySettingsUnion>
  getPassword: (options?: ag.MtpRequestOptions) => Promise<AccountPasswordUnion>
  getPasswordSettings: (params: GetPasswordSettingsParams, options?: ag.MtpRequestOptions) => Promise<AccountPasswordSettingsUnion>
  getPrivacy: (params: GetPrivacyParams, options?: ag.MtpRequestOptions) => Promise<AccountPrivacyRulesUnion>
  getTmpPassword: (params: GetTmpPasswordParams, options?: ag.MtpRequestOptions) => Promise<AccountTmpPasswordUnion>
  getWallPapers: (options?: ag.MtpRequestOptions) => Promise<WallPaperUnion[]>
  registerDevice: (params: RegisterDeviceParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  reportPeer: (params: ReportPeerParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  resetAuthorization: (params: ResetAuthorizationParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  resetNotifySettings: (options?: ag.MtpRequestOptions) => Promise<boolean>
  sendChangePhoneCode: (params: SendChangePhoneCodeParams, options?: ag.MtpRequestOptions) => Promise<AuthSentCodeUnion>
  sendConfirmPhoneCode: (params: SendConfirmPhoneCodeParams, options?: ag.MtpRequestOptions) => Promise<AuthSentCodeUnion>
  setAccountTTL: (params: SetAccountTtlParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setPrivacy: (params: SetPrivacyParams, options?: ag.MtpRequestOptions) => Promise<AccountPrivacyRulesUnion>
  unregisterDevice: (params: UnregisterDeviceParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  updateDeviceLocked: (params: UpdateDeviceLockedParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  updateNotifySettings: (params: UpdateNotifySettingsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  updatePasswordSettings: (params: UpdatePasswordSettingsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  updateProfile: (params: UpdateProfileParams, options?: ag.MtpRequestOptions) => Promise<UserUnion>
  updateStatus: (params: UpdateStatusParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  updateUsername: (params: UpdateUsernameParams, options?: ag.MtpRequestOptions) => Promise<UserUnion>
}

export const factory = (callApi: ag.CallApiFn): AccountApi => ({
  changePhone: (params: ChangePhoneParams, options?: ag.MtpRequestOptions): Promise<UserUnion> =>
    callApi<ChangePhoneParams, UserUnion>('account.changePhone', params, options),

  checkUsername: (params: CheckUsernameParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<CheckUsernameParams, boolean>('account.checkUsername', params, options),

  confirmPhone: (params: ConfirmPhoneParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ConfirmPhoneParams, boolean>('account.confirmPhone', params, options),

  deleteAccount: (params: DeleteAccountParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<DeleteAccountParams, boolean>('account.deleteAccount', params, options),

  getAccountTTL: (options?: ag.MtpRequestOptions): Promise<AccountDaysTtlUnion> =>
    callApi<void, AccountDaysTtlUnion>('account.getAccountTTL', undefined, options),

  getAuthorizations: (options?: ag.MtpRequestOptions): Promise<AccountAuthorizationsUnion> =>
    callApi<void, AccountAuthorizationsUnion>('account.getAuthorizations', undefined, options),

  getNotifySettings: (params: GetNotifySettingsParams, options?: ag.MtpRequestOptions): Promise<PeerNotifySettingsUnion> =>
    callApi<GetNotifySettingsParams, PeerNotifySettingsUnion>('account.getNotifySettings', params, options),

  getPassword: (options?: ag.MtpRequestOptions): Promise<AccountPasswordUnion> =>
    callApi<void, AccountPasswordUnion>('account.getPassword', undefined, options),

  getPasswordSettings: (params: GetPasswordSettingsParams, options?: ag.MtpRequestOptions): Promise<AccountPasswordSettingsUnion> =>
    callApi<GetPasswordSettingsParams, AccountPasswordSettingsUnion>('account.getPasswordSettings', params, options),

  getPrivacy: (params: GetPrivacyParams, options?: ag.MtpRequestOptions): Promise<AccountPrivacyRulesUnion> =>
    callApi<GetPrivacyParams, AccountPrivacyRulesUnion>('account.getPrivacy', params, options),

  getTmpPassword: (params: GetTmpPasswordParams, options?: ag.MtpRequestOptions): Promise<AccountTmpPasswordUnion> =>
    callApi<GetTmpPasswordParams, AccountTmpPasswordUnion>('account.getTmpPassword', params, options),

  getWallPapers: (options?: ag.MtpRequestOptions): Promise<WallPaperUnion[]> =>
    callApi<void, WallPaperUnion[]>('account.getWallPapers', undefined, options),

  registerDevice: (params: RegisterDeviceParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<RegisterDeviceParams, boolean>('account.registerDevice', params, options),

  reportPeer: (params: ReportPeerParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReportPeerParams, boolean>('account.reportPeer', params, options),

  resetAuthorization: (params: ResetAuthorizationParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ResetAuthorizationParams, boolean>('account.resetAuthorization', params, options),

  resetNotifySettings: (options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<void, boolean>('account.resetNotifySettings', undefined, options),

  sendChangePhoneCode: (params: SendChangePhoneCodeParams, options?: ag.MtpRequestOptions): Promise<AuthSentCodeUnion> =>
    callApi<SendChangePhoneCodeParams, AuthSentCodeUnion>('account.sendChangePhoneCode', params, options),

  sendConfirmPhoneCode: (params: SendConfirmPhoneCodeParams, options?: ag.MtpRequestOptions): Promise<AuthSentCodeUnion> =>
    callApi<SendConfirmPhoneCodeParams, AuthSentCodeUnion>('account.sendConfirmPhoneCode', params, options),

  setAccountTTL: (params: SetAccountTtlParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetAccountTtlParams, boolean>('account.setAccountTTL', params, options),

  setPrivacy: (params: SetPrivacyParams, options?: ag.MtpRequestOptions): Promise<AccountPrivacyRulesUnion> =>
    callApi<SetPrivacyParams, AccountPrivacyRulesUnion>('account.setPrivacy', params, options),

  unregisterDevice: (params: UnregisterDeviceParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UnregisterDeviceParams, boolean>('account.unregisterDevice', params, options),

  updateDeviceLocked: (params: UpdateDeviceLockedParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UpdateDeviceLockedParams, boolean>('account.updateDeviceLocked', params, options),

  updateNotifySettings: (params: UpdateNotifySettingsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UpdateNotifySettingsParams, boolean>('account.updateNotifySettings', params, options),

  updatePasswordSettings: (params: UpdatePasswordSettingsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UpdatePasswordSettingsParams, boolean>('account.updatePasswordSettings', params, options),

  updateProfile: (params: UpdateProfileParams, options?: ag.MtpRequestOptions): Promise<UserUnion> =>
    callApi<UpdateProfileParams, UserUnion>('account.updateProfile', params, options),

  updateStatus: (params: UpdateStatusParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UpdateStatusParams, boolean>('account.updateStatus', params, options),

  updateUsername: (params: UpdateUsernameParams, options?: ag.MtpRequestOptions): Promise<UserUnion> =>
    callApi<UpdateUsernameParams, UserUnion>('account.updateUsername', params, options)
})
