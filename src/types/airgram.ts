import * as api from 'airgram-api'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface ClassType<T> {
  new (...args: any[]): T
}

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

export type ErrorHandler = (error: Error, ctx: Record<string, any>) => any

export type TdLibConfig = Omit<api.TdlibParametersInput, '_'>

export type PlainObjectToModelTransformer = (plainObject: Record<string, any>) => ClassType<any> | Record<string, any>

// ----------------
// Airgram
// ----------------
export interface AirgramConfig<ContextT> extends TdLibConfig {
  provider: TdProvider<any>
  contextFactory?: ContextFactory<ContextT>
  databaseEncryptionKey?: string
  name?: string
  token?: string
  models?: PlainObjectToModelTransformer
}

export interface Airgram<ContextT = Context> extends Composer<ContextT> {
  readonly api: api.ApiMethods
  readonly config: AirgramConfig<ContextT>
  readonly updates: Updates<ContextT>
  readonly name: string
  handleError: ErrorHandler

  catch (handler: (error: Error, ctx?: Record<string, any>) => void): void

  emit (update: TdUpdate): Promise<any>
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
    predicateTypes: 'updateChatPinnedMessage',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatPinnedMessage }>>
  ): Composer<ContextT & { update: api.UpdateChatPinnedMessage }>

  on (
    predicateTypes: 'updateChatReplyMarkup', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReplyMarkup }>>
  ): Composer<ContextT & { update: api.UpdateChatReplyMarkup }>

  on (
    predicateTypes: 'updateChatDraftMessage',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatDraftMessage }>>
  ): Composer<ContextT & { update: api.UpdateChatDraftMessage }>

  on (
    predicateTypes: 'updateChatOnlineMemberCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatOnlineMemberCount }>>
  ): Composer<ContextT & { update: api.UpdateChatOnlineMemberCount }>

  on (
    predicateTypes: 'updateNotification', ...fns: Array<Middleware<ContextT & { update: api.UpdateNotification }>>
  ): Composer<ContextT & { update: api.UpdateNotification }>

  on (
    predicateTypes: 'updateNotificationGroup',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNotificationGroup }>>
  ): Composer<ContextT & { update: api.UpdateNotificationGroup }>

  on (
    predicateTypes: 'updateActiveNotifications',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateActiveNotifications }>>
  ): Composer<ContextT & { update: api.UpdateActiveNotifications }>

  on (
    predicateTypes: 'updateHavePendingNotifications',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateHavePendingNotifications }>>
  ): Composer<ContextT & { update: api.UpdateHavePendingNotifications }>

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

  on (
    predicateTypes: 'updatePoll', ...fns: Array<Middleware<ContextT & { update: api.UpdatePoll }>>
  ): Composer<ContextT & { update: api.UpdatePoll }>

  on<UpdateT> (
    predicateTypes: string | string[], ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): Composer<ContextT & { update: UpdateT }>

  use<UpdateT = Update> (
    ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): Composer<ContextT & { update: UpdateT }>
}

// ----------------
// TD
// ----------------
export interface TdClientConfig {
  handleUpdate: (update: TdUpdate) => Promise<any>,
  handleError: (error: any) => void,
  models?: PlainObjectToModelTransformer
}

export interface TdProvider<ClientT> {
  initialize (
    handleUpdate: (update: Record<string, any>) => Promise<any>,
    handleError: (error: any) => void,
    models?: PlainObjectToModelTransformer
  ): void

  send (request: ApiRequest): Promise<TdResponse>
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

// ----------------
// Context
// ----------------
export interface ContextOptions {
  _: string
  airgram: Airgram<any>
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
  update?: any
}

export type ContextFactory<ContextT> = (airgram: Airgram<any>) => (options: ContextOptions) => ContextT
