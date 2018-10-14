// ----------------
// Composer
// ----------------

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
  hash: string,
  id: number,
  version: string
}

export interface Config {
  app: TelegramAppConfig
  dcOptions: any[]
  // handlerTimeout?: number
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
  create (key: string, value: DocT): Promise<DocT>

  get (key: string): Promise<DocT | null>

  update (key: string, value: Partial<DocT>): Promise<Partial<DocT>>
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
  handleError: (error: Error, ctx: { _: string, [key: string]: any }) => any
  handleUpdates: (updates: UpdatesResponse) => any
  help: api.help.HelpApi
  langpack: api.langpack.LangpackApi
  me: Me
  messages: api.messages.MessagesApi
  mtpState: MtpState
  payments: api.payments.PaymentsApi
  phone: api.phone.PhoneApi
  photos: api.photos.PhotosApi
  stickers: api.stickers.StickersApi
  timeManager: MtpTimeManager
  updates: api.updates.UpdatesApi
  upload: api.upload.UploadApi
  users: api.users.UsersApi

  catch (handler: (error: Error) => void): Client

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
  serverSalt: Uint8Array | number[]
  sessionId: number[]
  prevSessionId: number[]

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

export interface MtpOptions {
  afterMessageId?: string
  maxLength?: number
  noResponse?: boolean
  immediately?: boolean
  notContentRelated?: boolean
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

export interface MtpStateDc {
  authKey: string
  dcId: number
  serverSalt: string
}

export interface MtpStateDoc {
  readonly currentDcId: number
  readonly dc: { readonly [key: number]: MtpStateDc }
  readonly prevDcId: number
  readonly userId: number
}

export interface MtpState {
  serverTimeOffset: number
  store: Store<MtpStateDoc>

  currentDcId (): Promise<number>

  currentDcId (nextValue: number): Promise<MtpStateDoc>

  dc (): Promise<{ readonly [key: number]: MtpStateDc }>

  dc (id: number): Promise<MtpStateDc>

  dc (id: number, state: MtpStateDc): Promise<any>

  prevDcId (): Promise<number>

  prevDcId (nextValue: number): Promise<MtpStateDoc>

  set (nextState: Partial<MtpStateDoc>): Promise<any>

  userId (): Promise<number>

  userId (nextValue: number): Promise<MtpStateDoc>
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
  client: Client
  maxAttempts: number

  // catch (errorHandle: (error: Error) => any): Auth

  checkCode (code): Promise<api.AuthAuthorizationUnion>

  clearState (): Promise<Auth>

  getState (): Promise<AuthDoc>

  login (next?: () => any): Promise<api.AuthAuthorizationUnion>

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

export interface Updates extends Composer<UpdateContext> {
  chats: Chats
  client: Client
  updatesState: UpdatesState

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

export interface UpdateContext<ContextT = UpdatesResponse> {
  _: string
  client: Client
  state: { [key: string]: any }
  update: ContextT,
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

  // pts (): Promise<number>
  //
  // pts (nextValue: number): Promise<void>
  //
  // ptsTs (): Promise<number>
  //
  // ptsTs (nextValue: number): Promise<void>
  //
  // qts (): Promise<number>
  //
  // qts (nextValue: number): Promise<void>
  //
  // date (): Promise<number>
  //
  // date (nextValue: number): Promise<void>
  //
  // seq (): Promise<number>
  //
  // seq (nextValue: number): Promise<void>
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

export type UpdatesResponse = api.UpdateUnion
  | api.UpdatesUnion
  | api.UpdatesDifferenceUnion
  | api.UpdatesChannelDifferenceUnion
  | { _: 'new_session_created' }
  | { _: 'updateChannelReload', channel_id: number }

export type ModelId = number | string

// export interface Model<DocT> {
//   _id: ModelId
//
//   set (attributes: Partial<DocT>): Promise<this>
//
//   get (): Promise<DocT>
//
//   save (): Promise<this>
//
//   toJSON (): DocT
//
//   toString (): string
// }
//
// export type ModelFactory = <ModelT, DocT>(doc: DocT) => (ModelT)

export interface Collection<DocT> {
  create (id: ModelId, attributes: DocT): Promise<DocT>

  get (id: ModelId): Promise<DocT | null>

  update (id: ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>>

  upsert (id: ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>>
}

// export type ChatInput = number | ChatDoc

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

  getChat (id: number): Chat
}

export interface TelegramConstructor {
  id: number
  params: [] | Array<{ name: string, type: string }>
  predicate: string
  type: string
}
