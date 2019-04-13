import { ClassType } from 'class-transformer/ClassTransformer'
import * as api from './api'
import { TdlibParametersInput } from './api/inputs'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// ----------------
// Composer
// ----------------
export interface Composer<ContextT> {
  middleware<MiddlewareContextT = any> (): MiddlewareFn<MiddlewareContextT>

  on (predicateTypes: string | string[], ...fns: Array<Middleware<ContextT>>): Composer<ContextT>

  use (...fns: Array<Middleware<ContextT>>): Composer<ContextT>
}

export type NextFn = () => any
export type MiddlewareFn<ContextT> = (ctx: ContextT, next: () => Promise<any>) => any
export type MiddlewarePromise<ContextT> = (ctx: ContextT, next?: () => Promise<any>) => Promise<any>
export type Middleware<ContextT = any> = { middleware: () => MiddlewareFn<ContextT> } | MiddlewareFn<ContextT>

// ----------------
// Config
// ----------------
export type TdLibConfig = Omit<TdlibParametersInput, '_'>

export interface TdProxyConfig {
  command?: string
  logFilePath?: string | null
  logMaxFileSize?: number | string
  logVerbosityLevel?: number
  models?: Record<string, ClassType<any>>
}

export interface AirgramConfig extends TdLibConfig, TdProxyConfig {
  createContext?: (options: ContextOptions) => Context
  databaseEncryptionKey?: string
  name?: string
  client?: TdClient
  token?: string
}

// ----------------
// Airgram
// ----------------
export type ErrorHandler = (error: Error, ctx: Record<string, any>) => any

export interface Airgram<ContextT = any> extends Composer<Context & ContextT> {
  readonly api: api.ApiMethods
  readonly client: TdClient
  readonly config: AirgramConfig
  readonly updates: Updates<Context & ContextT>
  readonly name: string
  handleError: ErrorHandler

  catch (handler: (error: Error, ctx?: Record<string, any>) => void): void

  destroy (): Promise<void>

  on<UpdateT = any> (
    predicateTypes: string | string[], ...fns: Array<Middleware<Context & ContextT & { update: UpdateT }>>
  ): Composer<Context & ContextT & { update: UpdateT }>

  pause (): void

  resume (): void
}

// ----------------
// Updates
// ----------------

export interface Update {
  _: string

  [key: string]: any
}

export interface Updates<ContextT> extends Composer<ContextT> {
  on (
    predicateTypes: 'updateAuthorizationState',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateAuthorizationState }>>
  ): Composer<ContextT & { update: api.UpdateAuthorizationState }>

  on (
    predicateTypes: 'updateNewMessage', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewMessage }>>
  ): Composer<ContextT & { update: api.UpdateNewMessage }>

  on (
    predicateTypes: 'updateMessageSendAcknowledged',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendAcknowledged }>>
  ): Composer<ContextT & { update: api.UpdateMessageSendAcknowledged }>

  on (
    predicateTypes: 'updateMessageSendSucceeded',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendSucceeded }>>
  ): Composer<ContextT & { update: api.UpdateMessageSendSucceeded }>

  on (
    predicateTypes: 'updateMessageSendFailed',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendFailed }>>
  ): Composer<ContextT & { update: api.UpdateMessageSendFailed }>

  on (
    predicateTypes: 'updateMessageContent', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageContent }>>
  ): Composer<ContextT & { update: api.UpdateMessageContent }>

  on (
    predicateTypes: 'updateMessageEdited', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageEdited }>>
  ): Composer<ContextT & { update: api.UpdateMessageEdited }>

  on (
    predicateTypes: 'updateMessageViews', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageViews }>>
  ): Composer<ContextT & { update: api.UpdateMessageViews }>

  on (
    predicateTypes: 'updateMessageContentOpened',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageContentOpened }>>
  ): Composer<ContextT & { update: api.UpdateMessageContentOpened }>

  on (
    predicateTypes: 'updateMessageMentionRead',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageMentionRead }>>
  ): Composer<ContextT & { update: api.UpdateMessageMentionRead }>

  on (
    predicateTypes: 'updateNewChat', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewChat }>>
  ): Composer<ContextT & { update: api.UpdateNewChat }>

  on (
    predicateTypes: 'updateChatTitle', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatTitle }>>
  ): Composer<ContextT & { update: api.UpdateChatTitle }>

  on (
    predicateTypes: 'updateChatPhoto', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatPhoto }>>
  ): Composer<ContextT & { update: api.UpdateChatPhoto }>

  on (
    predicateTypes: 'updateChatLastMessage', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatLastMessage }>>
  ): Composer<ContextT & { update: api.UpdateChatLastMessage }>

  on (
    predicateTypes: 'updateChatOrder', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatOrder }>>
  ): Composer<ContextT & { update: api.UpdateChatOrder }>

  on (
    predicateTypes: 'updateChatIsPinned', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsPinned }>>
  ): Composer<ContextT & { update: api.UpdateChatIsPinned }>

  on (
    predicateTypes: 'updateChatIsMarkedAsUnread',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsMarkedAsUnread }>>
  ): Composer<ContextT & { update: api.UpdateChatIsMarkedAsUnread }>

  on (
    predicateTypes: 'updateChatIsSponsored', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsSponsored }>>
  ): Composer<ContextT & { update: api.UpdateChatIsSponsored }>

  on (
    predicateTypes: 'updateChatDefaultDisableNotification',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatDefaultDisableNotification }>>
  ): Composer<ContextT & { update: api.UpdateChatDefaultDisableNotification }>

  on (
    predicateTypes: 'updateChatReadInbox', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReadInbox }>>
  ): Composer<ContextT & { update: api.UpdateChatReadInbox }>

  on (
    predicateTypes: 'updateChatReadOutbox', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReadOutbox }>>
  ): Composer<ContextT & { update: api.UpdateChatReadOutbox }>

  on (
    predicateTypes: 'updateChatUnreadMentionCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatUnreadMentionCount }>>
  ): Composer<ContextT & { update: api.UpdateChatUnreadMentionCount }>

  on (
    predicateTypes: 'updateChatNotificationSettings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatNotificationSettings }>>
  ): Composer<ContextT & { update: api.UpdateChatNotificationSettings }>

  on (
    predicateTypes: 'updateScopeNotificationSettings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateScopeNotificationSettings }>>
  ): Composer<ContextT & { update: api.UpdateScopeNotificationSettings }>

  on (
    predicateTypes: 'updateChatReplyMarkup', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReplyMarkup }>>
  ): Composer<ContextT & { update: api.UpdateChatReplyMarkup }>

  on (
    predicateTypes: 'updateChatDraftMessage',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatDraftMessage }>>
  ): Composer<ContextT & { update: api.UpdateChatDraftMessage }>

  on (
    predicateTypes: 'updateDeleteMessages', ...fns: Array<Middleware<ContextT & { update: api.UpdateDeleteMessages }>>
  ): Composer<ContextT & { update: api.UpdateDeleteMessages }>

  on (
    predicateTypes: 'updateUserChatAction', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserChatAction }>>
  ): Composer<ContextT & { update: api.UpdateUserChatAction }>

  on (
    predicateTypes: 'updateUserStatus', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserStatus }>>
  ): Composer<ContextT & { update: api.UpdateUserStatus }>

  on (
    predicateTypes: 'updateUser', ...fns: Array<Middleware<ContextT & { update: api.UpdateUser }>>
  ): Composer<ContextT & { update: api.UpdateUser }>

  on (
    predicateTypes: 'updateBasicGroup', ...fns: Array<Middleware<ContextT & { update: api.UpdateBasicGroup }>>
  ): Composer<ContextT & { update: api.UpdateBasicGroup }>

  on (
    predicateTypes: 'updateSupergroup', ...fns: Array<Middleware<ContextT & { update: api.UpdateSupergroup }>>
  ): Composer<ContextT & { update: api.UpdateSupergroup }>

  on (
    predicateTypes: 'updateSecretChat', ...fns: Array<Middleware<ContextT & { update: api.UpdateSecretChat }>>
  ): Composer<ContextT & { update: api.UpdateSecretChat }>

  on (
    predicateTypes: 'updateUserFullInfo', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserFullInfo }>>
  ): Composer<ContextT & { update: api.UpdateUserFullInfo }>

  on (
    predicateTypes: 'updateBasicGroupFullInfo',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateBasicGroupFullInfo }>>
  ): Composer<ContextT & { update: api.UpdateBasicGroupFullInfo }>

  on (
    predicateTypes: 'updateSupergroupFullInfo',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateSupergroupFullInfo }>>
  ): Composer<ContextT & { update: api.UpdateSupergroupFullInfo }>

  on (
    predicateTypes: 'updateServiceNotification',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateServiceNotification }>>
  ): Composer<ContextT & { update: api.UpdateServiceNotification }>

  on (
    predicateTypes: 'updateFile', ...fns: Array<Middleware<ContextT & { update: api.UpdateFile }>>
  ): Composer<ContextT & { update: api.UpdateFile }>

  on (
    predicateTypes: 'updateFileGenerationStart',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFileGenerationStart }>>
  ): Composer<ContextT & { update: api.UpdateFileGenerationStart }>

  on (
    predicateTypes: 'updateFileGenerationStop',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFileGenerationStop }>>
  ): Composer<ContextT & { update: api.UpdateFileGenerationStop }>

  on (
    predicateTypes: 'updateCall', ...fns: Array<Middleware<ContextT & { update: api.UpdateCall }>>
  ): Composer<ContextT & { update: api.UpdateCall }>

  on (
    predicateTypes: 'updateUserPrivacySettingRules',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateUserPrivacySettingRules }>>
  ): Composer<ContextT & { update: api.UpdateUserPrivacySettingRules }>

  on (
    predicateTypes: 'updateUnreadMessageCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateUnreadMessageCount }>>
  ): Composer<ContextT & { update: api.UpdateUnreadMessageCount }>

  on (
    predicateTypes: 'updateUnreadChatCount', ...fns: Array<Middleware<ContextT & { update: api.UpdateUnreadChatCount }>>
  ): Composer<ContextT & { update: api.UpdateUnreadChatCount }>

  on (
    predicateTypes: 'updateOption', ...fns: Array<Middleware<ContextT & { update: api.UpdateOption }>>
  ): Composer<ContextT & { update: api.UpdateOption }>

  on (
    predicateTypes: 'updateInstalledStickerSets',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateInstalledStickerSets }>>
  ): Composer<ContextT & { update: api.UpdateInstalledStickerSets }>

  on (
    predicateTypes: 'updateTrendingStickerSets',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateTrendingStickerSets }>>
  ): Composer<ContextT & { update: api.UpdateTrendingStickerSets }>

  on (
    predicateTypes: 'updateRecentStickers', ...fns: Array<Middleware<ContextT & { update: api.UpdateRecentStickers }>>
  ): Composer<ContextT & { update: api.UpdateRecentStickers }>

  on (
    predicateTypes: 'updateFavoriteStickers',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFavoriteStickers }>>
  ): Composer<ContextT & { update: api.UpdateFavoriteStickers }>

  on (
    predicateTypes: 'updateSavedAnimations', ...fns: Array<Middleware<ContextT & { update: api.UpdateSavedAnimations }>>
  ): Composer<ContextT & { update: api.UpdateSavedAnimations }>

  on (
    predicateTypes: 'updateLanguagePackStrings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateLanguagePackStrings }>>
  ): Composer<ContextT & { update: api.UpdateLanguagePackStrings }>

  on (
    predicateTypes: 'updateConnectionState', ...fns: Array<Middleware<ContextT & { update: api.UpdateConnectionState }>>
  ): Composer<ContextT & { update: api.UpdateConnectionState }>

  on (
    predicateTypes: 'updateTermsOfService', ...fns: Array<Middleware<ContextT & { update: api.UpdateTermsOfService }>>
  ): Composer<ContextT & { update: api.UpdateTermsOfService }>

  on (
    predicateTypes: 'updateNewInlineQuery', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewInlineQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewInlineQuery }>

  on (
    predicateTypes: 'updateNewChosenInlineResult',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewChosenInlineResult }>>
  ): Composer<ContextT & { update: api.UpdateNewChosenInlineResult }>

  on (
    predicateTypes: 'updateNewCallbackQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCallbackQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewCallbackQuery }>

  on (
    predicateTypes: 'updateNewInlineCallbackQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewInlineCallbackQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewInlineCallbackQuery }>

  on (
    predicateTypes: 'updateNewShippingQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewShippingQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewShippingQuery }>

  on (
    predicateTypes: 'updateNewPreCheckoutQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewPreCheckoutQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewPreCheckoutQuery }>

  on (
    predicateTypes: 'updateNewCustomEvent', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCustomEvent }>>
  ): Composer<ContextT & { update: api.UpdateNewCustomEvent }>

  on (
    predicateTypes: 'updateNewCustomQuery', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCustomQuery }>>
  ): Composer<ContextT & { update: api.UpdateNewCustomQuery }>

  on<UpdateT = Update> (
    predicateTypes: string | string[], ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): Composer<ContextT & { update: UpdateT }>

  use<UpdateT = Update> (
    ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): Composer<ContextT & { update: UpdateT }>
}

// ----------------
// TD
// ----------------

export type ReplacerFn = (key: string, value: any) => any

export interface TdLib<TDLibClient> {
  create (): TDLibClient

  destroy (client: TDLibClient): void

  execute (client: TDLibClient, query: string): string | null

  receive (client: TDLibClient, timeout: number): Promise<string | null>

  send (client: TDLibClient, query: string): Promise<void>

  setLogFatalErrorCallback (fn: ((errorMessage: string) => any) | null): void

  setLogFilePath (path: string | null): number

  setLogMaxFileSize (maxFileSize: number | string): void

  setLogVerbosityLevel (verbosity: number): void
}

export type TdClient = Buffer

export interface TdProxy {
  readonly client: TdClient

  destroy (): void

  pause (): void

  resume (): void

  send (request: ApiRequest, deferred: ApiDeferred): Promise<void>
}

export interface TdResponse {
  '@extra'?: string
  _: string

  [key: string]: any
}

export interface TdUpdate {
  _: string

  [key: string]: any
}

// ----------------
// Api
// ----------------
export interface ApiRequest<ParamsT = any> {
  method: string
  params?: ParamsT
}

export interface ApiDeferred {
  _: string
  resolve: (result: TdResponse) => any
  reject: (error: Error) => any
}

export type ApiFn = <ParamsT, ResponseT, StateT = { [key: string]: any }> (
  method: string,
  params?: ParamsT,
  state?: StateT
) => Promise<ResponseT>

// ----------------
// Context
// ----------------

export interface ContextOptions {
  _: string
  airgram: Airgram
  request?: ApiRequest
  update?: TdUpdate
  state: Record<string, any>
}

export interface Context<ParamsT = any, ResponseT = any> {
  _: string
  airgram: Airgram
  setState: (nextState: Record<string, any>) => void
  getState: () => Record<string, any>
  request?: ApiRequest<ParamsT>
  response?: ResponseT
}

// export interface RequestContext<ParamsT = any, ResponseT = any> extends BaseContext<ParamsT, ResponseT, void> {}
//
export interface UpdateContext extends Context<void, void> {
  update: Update
}

//
// export type Context = RequestContext | UpdateContext
