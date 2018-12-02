/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  AuthAuthorizationUnion,
  AuthCheckedPhoneUnion,
  AuthExportedAuthorizationUnion,
  AuthPasswordRecoveryUnion,
  AuthSentCodeUnion
} from '../'

export interface BindTempAuthKeyParams {
  encrypted_message: number[],
  expires_at: number,
  nonce: number,
  perm_auth_key_id: number
}

export interface CancelCodeParams {
  phone_code_hash: string,
  phone_number: string
}

export interface CheckPasswordParams {
  password_hash: number[]
}

export interface CheckPhoneParams {
  phone_number: string
}

export interface DropTempAuthKeysParams {
  except_auth_keys: number[]
}

export interface ExportAuthorizationParams {
  dc_id: number
}

export interface ImportAuthorizationParams {
  bytes: number[],
  id: number
}

export interface ImportBotAuthorizationParams {
  api_hash: string,
  api_id: number,
  bot_auth_token: string,
  flags?: number
}

export interface RecoverPasswordParams {
  code: string
}

export interface ResendCodeParams {
  phone_code_hash: string,
  phone_number: string
}

export interface SendCodeParams {
  api_hash: string,
  api_id: number,
  flags?: number,
  phone_number: string,
  allow_flashcall?: true,
  current_number?: boolean
}

export interface SendInvitesParams {
  message: string,
  phone_numbers: string[]
}

export interface SignInParams {
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}

export interface SignUpParams {
  first_name: string,
  last_name: string,
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}

export interface AuthApi {
  bindTempAuthKey: (params: BindTempAuthKeyParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  cancelCode: (params: CancelCodeParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  checkPassword: (params: CheckPasswordParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
  checkPhone: (params: CheckPhoneParams, options?: ag.MtpRequestOptions) => Promise<AuthCheckedPhoneUnion>
  dropTempAuthKeys: (params: DropTempAuthKeysParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  exportAuthorization: (params: ExportAuthorizationParams, options?: ag.MtpRequestOptions) => Promise<AuthExportedAuthorizationUnion>
  importAuthorization: (params: ImportAuthorizationParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
  importBotAuthorization: (params: ImportBotAuthorizationParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
  logOut: (options?: ag.MtpRequestOptions) => Promise<boolean>
  recoverPassword: (params: RecoverPasswordParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
  requestPasswordRecovery: (options?: ag.MtpRequestOptions) => Promise<AuthPasswordRecoveryUnion>
  resendCode: (params: ResendCodeParams, options?: ag.MtpRequestOptions) => Promise<AuthSentCodeUnion>
  resetAuthorizations: (options?: ag.MtpRequestOptions) => Promise<boolean>
  sendCode: (params: SendCodeParams, options?: ag.MtpRequestOptions) => Promise<AuthSentCodeUnion>
  sendInvites: (params: SendInvitesParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  signIn: (params: SignInParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
  signUp: (params: SignUpParams, options?: ag.MtpRequestOptions) => Promise<AuthAuthorizationUnion>
}

export const factory = (callApi: ag.CallApiFn): AuthApi => ({
  bindTempAuthKey: (params: BindTempAuthKeyParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<BindTempAuthKeyParams, boolean>('auth.bindTempAuthKey', params, options),

  cancelCode: (params: CancelCodeParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<CancelCodeParams, boolean>('auth.cancelCode', params, options),

  checkPassword: (params: CheckPasswordParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<CheckPasswordParams, AuthAuthorizationUnion>('auth.checkPassword', params, options),

  checkPhone: (params: CheckPhoneParams, options?: ag.MtpRequestOptions): Promise<AuthCheckedPhoneUnion> =>
    callApi<CheckPhoneParams, AuthCheckedPhoneUnion>('auth.checkPhone', params, options),

  dropTempAuthKeys: (params: DropTempAuthKeysParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<DropTempAuthKeysParams, boolean>('auth.dropTempAuthKeys', params, options),

  exportAuthorization: (params: ExportAuthorizationParams, options?: ag.MtpRequestOptions): Promise<AuthExportedAuthorizationUnion> =>
    callApi<ExportAuthorizationParams, AuthExportedAuthorizationUnion>('auth.exportAuthorization', params, options),

  importAuthorization: (params: ImportAuthorizationParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<ImportAuthorizationParams, AuthAuthorizationUnion>('auth.importAuthorization', params, options),

  importBotAuthorization: (params: ImportBotAuthorizationParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<ImportBotAuthorizationParams, AuthAuthorizationUnion>('auth.importBotAuthorization', params, options),

  logOut: (options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<void, boolean>('auth.logOut', undefined, options),

  recoverPassword: (params: RecoverPasswordParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<RecoverPasswordParams, AuthAuthorizationUnion>('auth.recoverPassword', params, options),

  requestPasswordRecovery: (options?: ag.MtpRequestOptions): Promise<AuthPasswordRecoveryUnion> =>
    callApi<void, AuthPasswordRecoveryUnion>('auth.requestPasswordRecovery', undefined, options),

  resendCode: (params: ResendCodeParams, options?: ag.MtpRequestOptions): Promise<AuthSentCodeUnion> =>
    callApi<ResendCodeParams, AuthSentCodeUnion>('auth.resendCode', params, options),

  resetAuthorizations: (options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<void, boolean>('auth.resetAuthorizations', undefined, options),

  sendCode: (params: SendCodeParams, options?: ag.MtpRequestOptions): Promise<AuthSentCodeUnion> =>
    callApi<SendCodeParams, AuthSentCodeUnion>('auth.sendCode', params, options),

  sendInvites: (params: SendInvitesParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SendInvitesParams, boolean>('auth.sendInvites', params, options),

  signIn: (params: SignInParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<SignInParams, AuthAuthorizationUnion>('auth.signIn', params, options),

  signUp: (params: SignUpParams, options?: ag.MtpRequestOptions): Promise<AuthAuthorizationUnion> =>
    callApi<SignUpParams, AuthAuthorizationUnion>('auth.signUp', params, options)
})
