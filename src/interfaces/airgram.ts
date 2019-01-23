// ----------------
// Composer
// ----------------

import { AxiosPromise, AxiosRequestConfig, CancelTokenSource } from 'axios'
import { interfaces } from 'inversify'
import * as api from '../api'

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
export interface TelegramModesConfig {
  test?: boolean
}

export interface TelegramAppConfig {
  hash: string
  id: number
  token?: string
  version: string
}

export interface Config {
  app: TelegramAppConfig
  dcOptions: any[]
  deviceModel: string
  systemVersion: string
  langCode: string
  layer: number
  modes: TelegramModesConfig
}

export interface Me {
  id?: number
}

// ----------------
// Logger
// ----------------
export interface Logger {
  namespace: string[]

  debug (...args: any[]): void

  error (...args: any[]): void

  info (...args: any[]): void

  verbose (...args: any[]): void

  warn (...args: any[]): void
}

// ----------------
// Store
// ----------------
export interface Store<DocT extends { [key: string]: any }> {
  delete (key: string): Promise<void>

  get (key: string): Promise<DocT | null>

  get (key: string, field: string): Promise<any>

  set (key: string, value: Partial<DocT>): Promise<Partial<DocT>>
}

// ----------------
// Crypto
// ----------------
export interface Crypto {
  decrypt (text: string, encoding?: string): string

  encrypt (text: string, encoding?: string): string

  getSecretKeys (): { [key: string]: string }

  setSecretKeys (keys: { [key: string]: string | Buffer }): void
}

// ----------------
// Client
// ----------------

// export type Update = api.UpdateUnion | { _: 'new_session_created' }

export interface Client<ContextT = Context> extends Composer<ContextT> {
  // Api
  account: api.account.AccountApi
  auth: api.auth.AuthApi
  bots: api.bots.BotsApi
  callApi: CallApiFn
  channels: api.channels.ChannelsApi
  config: Config
  contacts: api.contacts.ContactsApi
  createRequest: MtpRequestCreator
  network: MtpNetwork
  crypto: Crypto
  handleError: (error: Error, ctx: { _: string, [key: string]: any }) => any
  handleUpdates: (updates: UpdatesResponse) => any
  help: api.help.HelpApi
  langpack: api.langpack.LangpackApi
  me: Me
  messages: api.messages.MessagesApi
  mtpState: MtpState
  name: string
  payments: api.payments.PaymentsApi
  phone: api.phone.PhoneApi
  photos: api.photos.PhotosApi
  stickers: api.stickers.StickersApi
  timeManager: MtpTimeManager
  updates: api.updates.UpdatesApi
  upload: api.upload.UploadApi
  users: api.users.UsersApi

  catch (handler: (error: Error, ctx?: { _: string, [key: string]: any }) => void): Client

  destroy (): Promise<void>

  getApiUrl (dcId: number): string

  getMtpClient (dcId, options: MtpClientGetterOptions): Promise<MtpClient>

  setConfig (config: Config): Client

  startPolling (): Promise<any>

  stop (): Promise<any>
}

export type ClientFactory = (config: Config) => Client

// ----------------
// Api
// ----------------
export interface Api {
  [key: string]: CallApiFn
}

export type CallApiFn = <ParamsT, ResponseT, DataT = { [key: string]: any }> (
  method: string,
  params?: ParamsT,
  data?: DataT,
  options?: MtpRequestOptions
) => Promise<ResponseT>

export type ApiFactory = <ApiT>(name: string, callApi: CallApiFn) => ApiT

// ----------------
// Context
// ----------------
export interface Context<ParamsT = any, ResponseT = any> {
  _: string
  client: Client
  // deferred?: DeferredResponse<ResponseT>
  handled: boolean
  request?: ContextRequest
  response?: ResponseT
  state: { [key: string]: any }
  updates?: UpdatesResponse,
}

export interface ContextRequest<ParamsT = any, ResponseT = any> {
  method: string
  options?: MtpRequestOptions
  params?: ParamsT
}

// ----------------
// MtpClient
// ----------------
export interface MtpClient {
  client: Client
  dcId: number
  isNewConnection: boolean
  prevSessionId: number[]
  serverSalt: Uint8Array | number[]
  sessionId: number[]

  callApi<ParamsT, ResponseT> (
    method: string,
    params?: ParamsT,
    options?: MtpOptions
  ): Promise<ResponseT>

  configure (options: MtpClientOptions): void

  destroy (): Promise<void>

  startPolling (): void

  stop (): void
}

export type MtpClientFactory = (client: Client, context?: interfaces.Context) => MtpClientCreator

export type MtpClientCreator = (options: MtpClientOptions) => MtpClient

export interface MtpClients {
  [dcId: number]: Promise<MtpClient>
}

export interface MtpClientGetterOptions {
  createClient?: boolean
  isFileTransfer?: boolean
}

export interface MtpClientOptions {
  authKey: number[]
  dcId: number
  isFileTransfer: boolean
  serverSalt: number[]
}

export interface DeferredResponse<ResponseT = any> {
  reject: (reason: any) => any
  resolve: (response?: ResponseT) => any
}

export interface MtpCrypto {
  configure (client: MtpClient, authKey: Uint8Array | number[]): void

  decryptResponse (response: Buffer, getSentMessage: (msgId: string) => MtpMessage): {
    messageId: string,
    response: MtpResponseMessage,
    seqNo: number,
    sessionId: number[] | Uint8Array
  }

  encryptRequest (message: MtpMessage): Int32Array

  generatePingId (): [number, number]

  generateSessionId (): number[]
}

export type MtpCryptoFactory = (client: MtpClient, authKey: number[]) => MtpCrypto

export interface MtpAuthorizerInfo {
  authKey: number[]
  dcId: number
  deferred: DeferredResponse
  newNonce: number[]
  nonce: number[]
  serverNonce: number[]
  serverSalt: number[]
  tmpAesIv?: Uint8Array | number[]

  [key: string]: any
}

export interface MtpAuthorizer {
  client: Client

  auth (dcId: number): Promise<MtpAuthorizerInfo>
}

export type MtpAuthorizerFactory = (client: Client) => MtpAuthorizer

export interface MtpRequest<ParamsT, ResponseT> {
  client: Client
  method: string
  options: MtpRequestOptions
  params?: ParamsT

  configure (client: Client, method: string, params?: ParamsT, options?: MtpRequestOptions)

  send (dcId: number): Promise<ResponseT>
}

export type MtpRequestFactory = (client: Client, context?: interfaces.Context) => MtpRequestCreator

export type MtpRequestCreator = <ParamsT, ResponseT>(
  method: string,
  params?: ParamsT,
  options?: MtpRequestOptions
) => MtpRequest<ParamsT, ResponseT>

export interface MtpRequestOptions extends MtpClientGetterOptions {
  mtp?: MtpOptions
  resendDelay?: number
  timeout?: number
  waitUntil?: number
}

export interface MtpNetwork {
  configure (client: Client)

  createCancelToken (): CancelTokenSource

  sendRequest (url: string, requestData: { [name: string]: any }, options?: AxiosRequestConfig): AxiosPromise
}

export type MtpNetworkFactory = (client: Client) => MtpNetwork

export interface MtpOptions {
  afterMessageId?: string
  maxLength?: number
  noResponse?: boolean
  notContentRelated?: boolean
  secondary?: boolean
}

export interface MtpMessage {
  body?: Uint8Array | number[]
  deferred?: DeferredResponse
  inner?: string[]
  isAcked?: boolean
  isApi?: boolean
  isContainer?: boolean
  longPoll?: boolean
  messageId: string
  noResponse?: boolean
  // noSchedule?: boolean
  notContentRelated?: boolean
  resultType?: string
  seqNo: number
}

export type MtpMessageFactory = (message: Partial<MtpMessage>, options?: Partial<MtpOptions>) => MtpMessage

export interface MtpResponseMessage {
  _: string
  answer_msg_id?: string
  bad_msg_id?: string
  bad_msg_seqno?: number
  body?: any
  bytes?: number[]
  error_code?: number
  error_message?: string
  first_msg_id?: string
  messageId?: string
  messages?: MtpResponseMessage[]
  msg_id?: string
  msg_ids?: string[]
  new_server_salt?: string
  result?: MtpResponseMessage
  seqno?: number
  server_salt?: string
  session_id?: number
  unique_id?: number

  // [name: string]: any
}

export interface RpcError {
  code: number
  message: string
  name: string
  stack: any
  type: string
}

export interface MtpStateDoc {
  currentDcId: number
  prevDcId: number

  [key: string]: string | number
}

export interface MtpState {
  encryptedFields: boolean | string[] | ((field: string) => boolean)
  serverTimeOffset: number
  store: Store<MtpStateDoc>
  storeKey: string

  authKey (dcId: number): Promise<string>

  authKey (dcId: number, nextValue: string): Promise<Partial<MtpStateDoc>>

  clearState (): Promise<void>

  configure (client: Client, store: Store<MtpStateDoc>)

  currentDcId (): Promise<number>

  currentDcId (nextValue: number): Promise<Partial<MtpStateDoc>>

  decrypt (field: string, value: string): Promise<string>

  encrypt (field: string, value: string): Promise<string>

  get (field?: string): Promise<any>

  prevDcId (): Promise<number>

  prevDcId (nextValue: number): Promise<Partial<MtpStateDoc>>

  serverSalt (dcId: number): Promise<string>

  serverSalt (dcId: number, nextValue: string): Promise<Partial<MtpStateDoc>>

  set (nextState: Partial<MtpStateDoc>): Promise<Partial<MtpStateDoc>>
}

export type MtpStateFactory = (client: Client, context?: interfaces.Context) => MtpState

export interface MtpTimeManager {
  client: Client
  timeOffset: number

  applyServerTime (serverTime: number, localTime?: number): boolean

  generateMessageId (): string
}

export type MtpTimeManagerFactory = (client: Client, context?: interfaces.Context) => MtpTimeManager

export interface MtpSerializer {
  offset: number

  configure (options: MtpSerializerOptions)

  getArray (): Int32Array

  getBuffer (): ArrayBuffer

  getBytes (typed?: boolean): Uint8Array | number[]

  storeBytes (bytes: any, field: string): void

  storeBytes (bytes: any, field: string): void

  storeInt (i: number, field: string): void

  storeIntBytes (bytes: any, bits, field): void

  storeLong (messageId: string, field: string): void

  storeLongP (iHigh: number, iLow: number, field: string): void

  storeMethod (methodName: string, params: { [name: string]: any }): string

  storeObject (obj: any, type: string, field?: string): any

  storeRawBytes (bytes: any, field: string): void

  storeString (s: string, field: string): void
}

export type MtpSerializerFactory = (options?: MtpSerializerOptions) => MtpSerializer

export interface MtpSerializerOptions {
  isMtp?: boolean
  maxLength?: number,
}

export interface MtpDeserializer {
  configure (buffer: ArrayBuffer | Buffer | ArrayLike<number>, options: MtpDeserializerOptions)

  fetchInt (field?: string): number

  fetchIntBytes (bits: number, typed: boolean, field: string): Uint8Array | number[]

  fetchLong (field: string): string

  fetchObject (type: string, field?: string): any

  fetchRawBytes (len: number | false, typed: boolean, field: string): Uint8Array | number[]

  getOffset (): number
}

export type MtpDeserializerFactory = (
  buffer: ArrayBuffer | ArrayLike<number> | Buffer,
  options?: MtpDeserializerOptions,
  context?: interfaces.Context
) => MtpDeserializer

export interface MtpDeserializerOptions {
  isMtp?: boolean
  override?: { [key: string]: any }
}

export interface MtpRsaKeysManager {
  prepareRsaKeys (): void

  selectRsaKeyByFingerPrint (fingerprints): any
}

export interface Auth<ContextT = AuthContext> extends Composer<ContextT> {
  maxAttempts: number

  checkCode (code): Promise<api.AuthAuthorizationUnion>

  clearState (): Promise<void>

  configure (client: Client<any>)

  getState (): Promise<AuthDoc>

  login (next?: () => any): Promise<AuthDoc>

  logout (next?: () => any): Promise<boolean>
}

export interface AuthDoc {
  codeType?: string,
  firstName?: string
  isRegistered?: boolean,
  lastName?: string
  phoneCodeHash?: string,
  phoneNumber?: string
  userId?: number
  waitUntil?: number
}

export interface AuthContext {
  _: string
  state: AuthDoc
}

export interface Updates<ContextT = UpdateContext> extends Composer<ContextT> {
  chats: Chats
  updatesState: UpdatesState

  configure (client: Client<any>)

  getChannelDifference (state: Chat): Promise<api.UpdatesChannelDifferenceUnion>

  getDifference (): Promise<api.UpdatesDifferenceUnion>

  // getState (): Promise<{ pts: number, qts: number, seq: number, date: number }>

  startPolling (): Promise<any>

  stop (): Promise<any>
}

export interface UpdatesHandler {
  chats: Chats
  complete: (update: UpdatesResponse) => any
  getChannelDifference: (state: Chat) => Promise<api.UpdatesChannelDifferenceUnion>
  getDifference: () => Promise<api.UpdatesDifferenceUnion>
  myId?: number
  request?: ContextRequest
  updatesState: UpdatesState

  handle (update: UpdatesResponse, options?: UpdatesStateOptions): Promise<any>
}

export type UpdatesHandlerFactory = (
  updates: Updates,
  ctx: Context,
  complete: (update: UpdatesResponse) => any
) => UpdatesHandler

export interface UpdateContext<ContextT = UpdatesResponse, ParentT = UpdatesResponse> {
  _: string
  client: Client
  parent?: ParentT
  state: { [key: string]: any }
  update: ContextT,
}

export interface UpdateContextOptions<ContextT = Context, UpdateT = UpdatesResponse, ParentT = UpdatesResponse> {
  ctx: Context
  parent?: ParentT
  update: UpdateT
}

export interface UpdatesContextManager<ContextT = UpdateContext> {
  createContext: ({ ctx, parent, update }: UpdateContextOptions) => ContextT
}

export interface PendingSeqUpdate {
  date: number
  seq: number
  updates: api.UpdateUnion[]
}

export interface PendingState<StateT> {
  loading: boolean

  applyPtsUpdates (complete): Promise<boolean>

  applySeqUpdates (complete): Promise<boolean>

  completeLoading (): Promise<void>

  get (): Promise<StateT>

  get (name: string): Promise<number>

  load (getDifference: () => any): Promise<any>

  postponePtsUpdate (update: api.UpdateUnion, getDifference: () => any): void

  postponeSeqUpdate (
    update: api.UpdateUnion,
    seqStart: number,
    seq: number,
    getDifference: () => any
  ): void

  set (nextState: Partial<StateT>): Promise<void>
}

export interface UpdatesState extends PendingState<UpdatesStateDoc> {
  store: Store<UpdatesStateDoc>
  storeKey: string

  configure (client: Client)
}

export interface UpdatesStateDoc {
  date: number
  pts: number
  ptsTs: number
  qts: number
  seq: number
}

export interface UpdatesStateOptions {
  date?: number
  seq?: number
  seqStart?: number
}

export interface UpdatesHandlerOptions extends UpdatesStateOptions {
  parent?: UpdatesResponse
}

export type UpdatesResponse = api.Dialog
  | api.MessagesAffectedHistory
  | api.MessagesAffectedMessages
  | api.MessagesMessages
  | api.UpdateUnion
  | api.UpdatesUnion
  | api.UpdatesDifferenceUnion
  | api.UpdatesChannelDifferenceUnion
  | api.UpdatesStateUnion
  | { _: 'new_session_created' }
  | { _: 'updateChannelReload', channel_id: number }

export type ModelId = number | string

export interface Collection<DocT> {
  get (id: ModelId): Promise<DocT | null>

  set (id: ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>>
}

export interface Chat extends PendingState<ChatDoc> {
  chats: Chats
  id: number
}

export interface ChatDoc {
  accessHash?: number
  date?: number
  id: number
  min?: boolean
  pts?: number
  ptsTs?: number
  type: string
}

export type ChatFactory = (id: number, chats: Chats) => Chat

export interface Chats extends Collection<ChatDoc> {
  store: any

  configure (client: Client)

  getChat (id: number): Chat
}

export interface TelegramConstructor {
  id: number
  params: [] | Array<{ name: string, type: string }>
  predicate: string
  type: string
}
