/*tslint:disable:variable-name*/
/*tslint:disable:max-line-length*/
/*tslint:disable:ordered-imports*/

import { ag } from '../../interfaces'

import {
  ChatInviteUnion,
  DocumentUnion,
  EncryptedChatUnion,
  ExportedChatInviteUnion,
  InlineBotSwitchPmUnion,
  InputBotInlineMessageIdUnion,
  InputBotInlineResultUnion,
  InputChatPhotoUnion,
  InputDocumentUnion,
  InputEncryptedChatUnion,
  InputEncryptedFileUnion,
  InputGeoPointUnion,
  InputMediaUnion,
  InputPeerUnion,
  InputStickerSetUnion,
  InputStickeredMediaUnion,
  InputUserUnion,
  MessageEntityUnion,
  MessageMediaUnion,
  MessagesAffectedHistoryUnion,
  MessagesAffectedMessagesUnion,
  MessagesAllStickersUnion,
  MessagesArchivedStickersUnion,
  MessagesBotCallbackAnswerUnion,
  MessagesBotResultsUnion,
  MessagesChatFullUnion,
  MessagesChatsUnion,
  MessagesDhConfigUnion,
  MessagesDialogsUnion,
  MessagesFavedStickersUnion,
  MessagesFeaturedStickersUnion,
  MessagesFilterUnion,
  MessagesFoundGifsUnion,
  MessagesHighScoresUnion,
  MessagesMessageEditDataUnion,
  MessagesMessagesUnion,
  MessagesPeerDialogsUnion,
  MessagesRecentStickersUnion,
  MessagesSavedGifsUnion,
  MessagesSentEncryptedMessageUnion,
  MessagesStickerSetUnion,
  MessagesStickerSetInstallResultUnion,
  PeerSettingsUnion,
  ReceivedNotifyMessageUnion,
  ReplyMarkupUnion,
  SendMessageActionUnion,
  ShippingOptionUnion,
  StickerSetCoveredUnion,
  UpdatesUnion,
  WebPageUnion
} from '../'

export interface AcceptEncryptionParams {
  g_b: number[],
  key_fingerprint: number,
  peer: InputEncryptedChatUnion
}

export interface AddChatUserParams {
  chat_id: number,
  fwd_limit: number,
  user_id: InputUserUnion
}

export interface CheckChatInviteParams {
  hash: string
}

export interface ClearRecentStickersParams {
  flags: number,
  attached?: true
}

export interface CreateChatParams {
  title: string,
  users: InputUserUnion[]
}

export interface DeleteChatUserParams {
  chat_id: number,
  user_id: InputUserUnion
}

export interface DeleteHistoryParams {
  flags: number,
  max_id: number,
  peer: InputPeerUnion,
  just_clear?: true
}

export interface DeleteMessagesParams {
  flags: number,
  id: number[],
  revoke?: true
}

export interface DiscardEncryptionParams {
  chat_id: number
}

export interface EditChatAdminParams {
  chat_id: number,
  is_admin: boolean,
  user_id: InputUserUnion
}

export interface EditChatPhotoParams {
  chat_id: number,
  photo: InputChatPhotoUnion
}

export interface EditChatTitleParams {
  chat_id: number,
  title: string
}

export interface EditInlineBotMessageParams {
  flags: number,
  id: InputBotInlineMessageIdUnion,
  entities?: MessageEntityUnion[],
  message?: string,
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion
}

export interface EditMessageParams {
  flags: number,
  id: number,
  peer: InputPeerUnion,
  entities?: MessageEntityUnion[],
  message?: string,
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion
}

export interface ExportChatInviteParams {
  chat_id: number
}

export interface FaveStickerParams {
  id: InputDocumentUnion,
  unfave: boolean
}

export interface ForwardMessageParams {
  id: number,
  peer: InputPeerUnion,
  random_id: number
}

export interface ForwardMessagesParams {
  flags: number,
  from_peer: InputPeerUnion,
  id: number[],
  random_id: number[],
  to_peer: InputPeerUnion,
  background?: true,
  silent?: true,
  with_my_score?: true
}

export interface GetAllChatsParams {
  except_ids: number[]
}

export interface GetAllStickersParams {
  hash: number
}

export interface GetArchivedStickersParams {
  flags: number,
  limit: number,
  offset_id: number,
  masks?: true
}

export interface GetAttachedStickersParams {
  media: InputStickeredMediaUnion
}

export interface GetBotCallbackAnswerParams {
  flags: number,
  msg_id: number,
  peer: InputPeerUnion,
  data?: number[],
  game?: true
}

export interface GetChatsParams {
  id: number[]
}

export interface GetCommonChatsParams {
  limit: number,
  max_id: number,
  user_id: InputUserUnion
}

export interface GetDhConfigParams {
  random_length: number,
  version: number
}

export interface GetDialogsParams {
  flags: number,
  limit: number,
  offset_date: number,
  offset_id: number,
  offset_peer: InputPeerUnion,
  exclude_pinned?: true
}

export interface GetDocumentByHashParams {
  mime_type: string,
  sha256: number[],
  size: number
}

export interface GetFavedStickersParams {
  hash: number
}

export interface GetFeaturedStickersParams {
  hash: number
}

export interface GetFullChatParams {
  chat_id: number
}

export interface GetGameHighScoresParams {
  id: number,
  peer: InputPeerUnion,
  user_id: InputUserUnion
}

export interface GetHistoryParams {
  add_offset: number,
  limit: number,
  max_id: number,
  min_id: number,
  offset_date: number,
  offset_id: number,
  peer: InputPeerUnion
}

export interface GetInlineBotResultsParams {
  bot: InputUserUnion,
  flags: number,
  offset: string,
  peer: InputPeerUnion,
  query: string,
  geo_point?: InputGeoPointUnion
}

export interface GetInlineGameHighScoresParams {
  id: InputBotInlineMessageIdUnion,
  user_id: InputUserUnion
}

export interface GetMaskStickersParams {
  hash: number
}

export interface GetMessageEditDataParams {
  id: number,
  peer: InputPeerUnion
}

export interface GetMessagesParams {
  id: number[]
}

export interface GetMessagesViewsParams {
  id: number[],
  increment: boolean,
  peer: InputPeerUnion
}

export interface GetPeerDialogsParams {
  peers: InputPeerUnion[]
}

export interface GetPeerSettingsParams {
  peer: InputPeerUnion
}

export interface GetRecentStickersParams {
  flags: number,
  hash: number,
  attached?: true
}

export interface GetSavedGifsParams {
  hash: number
}

export interface GetStickerSetParams {
  stickerset: InputStickerSetUnion
}

export interface GetUnreadMentionsParams {
  add_offset: number,
  limit: number,
  max_id: number,
  min_id: number,
  offset_id: number,
  peer: InputPeerUnion
}

export interface GetWebPageParams {
  hash: number,
  url: string
}

export interface GetWebPagePreviewParams {
  message: string
}

export interface HideReportSpamParams {
  peer: InputPeerUnion
}

export interface ImportChatInviteParams {
  hash: string
}

export interface InstallStickerSetParams {
  archived: boolean,
  stickerset: InputStickerSetUnion
}

export interface MigrateChatParams {
  chat_id: number
}

export interface ReadEncryptedHistoryParams {
  max_date: number,
  peer: InputEncryptedChatUnion
}

export interface ReadFeaturedStickersParams {
  id: number[]
}

export interface ReadHistoryParams {
  max_id: number,
  peer: InputPeerUnion
}

export interface ReadMessageContentsParams {
  id: number[]
}

export interface ReceivedMessagesParams {
  max_id: number
}

export interface ReceivedQueueParams {
  max_qts: number
}

export interface ReorderPinnedDialogsParams {
  flags: number,
  order: InputPeerUnion[],
  force?: true
}

export interface ReorderStickerSetsParams {
  flags: number,
  order: number[],
  masks?: true
}

export interface ReportEncryptedSpamParams {
  peer: InputEncryptedChatUnion
}

export interface ReportSpamParams {
  peer: InputPeerUnion
}

export interface RequestEncryptionParams {
  g_a: number[],
  random_id: number,
  user_id: InputUserUnion
}

export interface SaveDraftParams {
  flags: number,
  message: string,
  peer: InputPeerUnion,
  entities?: MessageEntityUnion[],
  no_webpage?: true,
  reply_to_msg_id?: number
}

export interface SaveGifParams {
  id: InputDocumentUnion,
  unsave: boolean
}

export interface SaveRecentStickerParams {
  flags: number,
  id: InputDocumentUnion,
  unsave: boolean,
  attached?: true
}

export interface SearchParams {
  add_offset: number,
  filter: MessagesFilterUnion,
  flags: number,
  limit: number,
  max_date: number,
  max_id: number,
  min_date: number,
  min_id: number,
  offset_id: number,
  peer: InputPeerUnion,
  q: string,
  from_id?: InputUserUnion
}

export interface SearchGifsParams {
  offset: number,
  q: string
}

export interface SearchGlobalParams {
  limit: number,
  offset_date: number,
  offset_id: number,
  offset_peer: InputPeerUnion,
  q: string
}

export interface SendEncryptedParams {
  data: number[],
  peer: InputEncryptedChatUnion,
  random_id: number
}

export interface SendEncryptedFileParams {
  data: number[],
  file: InputEncryptedFileUnion,
  peer: InputEncryptedChatUnion,
  random_id: number
}

export interface SendEncryptedServiceParams {
  data: number[],
  peer: InputEncryptedChatUnion,
  random_id: number
}

export interface SendInlineBotResultParams {
  flags: number,
  id: string,
  peer: InputPeerUnion,
  query_id: number,
  random_id: number,
  background?: true,
  clear_draft?: true,
  reply_to_msg_id?: number,
  silent?: true
}

export interface SendMediaParams {
  flags: number,
  media: InputMediaUnion,
  peer: InputPeerUnion,
  random_id: number,
  background?: true,
  clear_draft?: true,
  reply_markup?: ReplyMarkupUnion,
  reply_to_msg_id?: number,
  silent?: true
}

export interface SendMessageParams {
  flags: number,
  message: string,
  peer: InputPeerUnion,
  random_id: number,
  background?: true,
  clear_draft?: true,
  entities?: MessageEntityUnion[],
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion,
  reply_to_msg_id?: number,
  silent?: true
}

export interface SendScreenshotNotificationParams {
  peer: InputPeerUnion,
  random_id: number,
  reply_to_msg_id: number
}

export interface SetBotCallbackAnswerParams {
  cache_time: number,
  flags: number,
  query_id: number,
  alert?: true,
  message?: string,
  url?: string
}

export interface SetBotPrecheckoutResultsParams {
  flags: number,
  query_id: number,
  error?: string,
  success?: true
}

export interface SetBotShippingResultsParams {
  flags: number,
  query_id: number,
  error?: string,
  shipping_options?: ShippingOptionUnion[]
}

export interface SetEncryptedTypingParams {
  peer: InputEncryptedChatUnion,
  typing: boolean
}

export interface SetGameScoreParams {
  flags: number,
  id: number,
  peer: InputPeerUnion,
  score: number,
  user_id: InputUserUnion,
  edit_message?: true,
  force?: true
}

export interface SetInlineBotResultsParams {
  cache_time: number,
  flags: number,
  query_id: number,
  results: InputBotInlineResultUnion[],
  gallery?: true,
  next_offset?: string,
  private?: true,
  switch_pm?: InlineBotSwitchPmUnion
}

export interface SetInlineGameScoreParams {
  flags: number,
  id: InputBotInlineMessageIdUnion,
  score: number,
  user_id: InputUserUnion,
  edit_message?: true,
  force?: true
}

export interface SetTypingParams {
  action: SendMessageActionUnion,
  peer: InputPeerUnion
}

export interface StartBotParams {
  bot: InputUserUnion,
  peer: InputPeerUnion,
  random_id: number,
  start_param: string
}

export interface ToggleChatAdminsParams {
  chat_id: number,
  enabled: boolean
}

export interface ToggleDialogPinParams {
  flags: number,
  peer: InputPeerUnion,
  pinned?: true
}

export interface UninstallStickerSetParams {
  stickerset: InputStickerSetUnion
}

export interface UploadMediaParams {
  media: InputMediaUnion,
  peer: InputPeerUnion
}

export interface MessagesApi {
  acceptEncryption: (params: AcceptEncryptionParams, options?: ag.MtpRequestOptions) => Promise<EncryptedChatUnion>
  addChatUser: (params: AddChatUserParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  checkChatInvite: (params: CheckChatInviteParams, options?: ag.MtpRequestOptions) => Promise<ChatInviteUnion>
  clearRecentStickers: (params: ClearRecentStickersParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  createChat: (params: CreateChatParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  deleteChatUser: (params: DeleteChatUserParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  deleteHistory: (params: DeleteHistoryParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedHistoryUnion>
  deleteMessages: (params: DeleteMessagesParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedMessagesUnion>
  discardEncryption: (params: DiscardEncryptionParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  editChatAdmin: (params: EditChatAdminParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  editChatPhoto: (params: EditChatPhotoParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  editChatTitle: (params: EditChatTitleParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  editInlineBotMessage: (params: EditInlineBotMessageParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  editMessage: (params: EditMessageParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  exportChatInvite: (params: ExportChatInviteParams, options?: ag.MtpRequestOptions) => Promise<ExportedChatInviteUnion>
  faveSticker: (params: FaveStickerParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  forwardMessage: (params: ForwardMessageParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  forwardMessages: (params: ForwardMessagesParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  getAllChats: (params: GetAllChatsParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatsUnion>
  getAllDrafts: (options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  getAllStickers: (params: GetAllStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesAllStickersUnion>
  getArchivedStickers: (params: GetArchivedStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesArchivedStickersUnion>
  getAttachedStickers: (params: GetAttachedStickersParams, options?: ag.MtpRequestOptions) => Promise<StickerSetCoveredUnion[]>
  getBotCallbackAnswer: (params: GetBotCallbackAnswerParams, options?: ag.MtpRequestOptions) => Promise<MessagesBotCallbackAnswerUnion>
  getChats: (params: GetChatsParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatsUnion>
  getCommonChats: (params: GetCommonChatsParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatsUnion>
  getDhConfig: (params: GetDhConfigParams, options?: ag.MtpRequestOptions) => Promise<MessagesDhConfigUnion>
  getDialogs: (params: GetDialogsParams, options?: ag.MtpRequestOptions) => Promise<MessagesDialogsUnion>
  getDocumentByHash: (params: GetDocumentByHashParams, options?: ag.MtpRequestOptions) => Promise<DocumentUnion>
  getFavedStickers: (params: GetFavedStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesFavedStickersUnion>
  getFeaturedStickers: (params: GetFeaturedStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesFeaturedStickersUnion>
  getFullChat: (params: GetFullChatParams, options?: ag.MtpRequestOptions) => Promise<MessagesChatFullUnion>
  getGameHighScores: (params: GetGameHighScoresParams, options?: ag.MtpRequestOptions) => Promise<MessagesHighScoresUnion>
  getHistory: (params: GetHistoryParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  getInlineBotResults: (params: GetInlineBotResultsParams, options?: ag.MtpRequestOptions) => Promise<MessagesBotResultsUnion>
  getInlineGameHighScores: (params: GetInlineGameHighScoresParams, options?: ag.MtpRequestOptions) => Promise<MessagesHighScoresUnion>
  getMaskStickers: (params: GetMaskStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesAllStickersUnion>
  getMessageEditData: (params: GetMessageEditDataParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessageEditDataUnion>
  getMessages: (params: GetMessagesParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  getMessagesViews: (params: GetMessagesViewsParams, options?: ag.MtpRequestOptions) => Promise<number[]>
  getPeerDialogs: (params: GetPeerDialogsParams, options?: ag.MtpRequestOptions) => Promise<MessagesPeerDialogsUnion>
  getPeerSettings: (params: GetPeerSettingsParams, options?: ag.MtpRequestOptions) => Promise<PeerSettingsUnion>
  getPinnedDialogs: (options?: ag.MtpRequestOptions) => Promise<MessagesPeerDialogsUnion>
  getRecentStickers: (params: GetRecentStickersParams, options?: ag.MtpRequestOptions) => Promise<MessagesRecentStickersUnion>
  getSavedGifs: (params: GetSavedGifsParams, options?: ag.MtpRequestOptions) => Promise<MessagesSavedGifsUnion>
  getStickerSet: (params: GetStickerSetParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetUnion>
  getUnreadMentions: (params: GetUnreadMentionsParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  getWebPage: (params: GetWebPageParams, options?: ag.MtpRequestOptions) => Promise<WebPageUnion>
  getWebPagePreview: (params: GetWebPagePreviewParams, options?: ag.MtpRequestOptions) => Promise<MessageMediaUnion>
  hideReportSpam: (params: HideReportSpamParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  importChatInvite: (params: ImportChatInviteParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  installStickerSet: (params: InstallStickerSetParams, options?: ag.MtpRequestOptions) => Promise<MessagesStickerSetInstallResultUnion>
  migrateChat: (params: MigrateChatParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  readEncryptedHistory: (params: ReadEncryptedHistoryParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  readFeaturedStickers: (params: ReadFeaturedStickersParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  readHistory: (params: ReadHistoryParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedMessagesUnion>
  readMessageContents: (params: ReadMessageContentsParams, options?: ag.MtpRequestOptions) => Promise<MessagesAffectedMessagesUnion>
  receivedMessages: (params: ReceivedMessagesParams, options?: ag.MtpRequestOptions) => Promise<ReceivedNotifyMessageUnion[]>
  receivedQueue: (params: ReceivedQueueParams, options?: ag.MtpRequestOptions) => Promise<number[]>
  reorderPinnedDialogs: (params: ReorderPinnedDialogsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  reorderStickerSets: (params: ReorderStickerSetsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  reportEncryptedSpam: (params: ReportEncryptedSpamParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  reportSpam: (params: ReportSpamParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  requestEncryption: (params: RequestEncryptionParams, options?: ag.MtpRequestOptions) => Promise<EncryptedChatUnion>
  saveDraft: (params: SaveDraftParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  saveGif: (params: SaveGifParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  saveRecentSticker: (params: SaveRecentStickerParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  search: (params: SearchParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  searchGifs: (params: SearchGifsParams, options?: ag.MtpRequestOptions) => Promise<MessagesFoundGifsUnion>
  searchGlobal: (params: SearchGlobalParams, options?: ag.MtpRequestOptions) => Promise<MessagesMessagesUnion>
  sendEncrypted: (params: SendEncryptedParams, options?: ag.MtpRequestOptions) => Promise<MessagesSentEncryptedMessageUnion>
  sendEncryptedFile: (params: SendEncryptedFileParams, options?: ag.MtpRequestOptions) => Promise<MessagesSentEncryptedMessageUnion>
  sendEncryptedService: (params: SendEncryptedServiceParams, options?: ag.MtpRequestOptions) => Promise<MessagesSentEncryptedMessageUnion>
  sendInlineBotResult: (params: SendInlineBotResultParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  sendMedia: (params: SendMediaParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  sendMessage: (params: SendMessageParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  sendScreenshotNotification: (params: SendScreenshotNotificationParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  setBotCallbackAnswer: (params: SetBotCallbackAnswerParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setBotPrecheckoutResults: (params: SetBotPrecheckoutResultsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setBotShippingResults: (params: SetBotShippingResultsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setEncryptedTyping: (params: SetEncryptedTypingParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setGameScore: (params: SetGameScoreParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  setInlineBotResults: (params: SetInlineBotResultsParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setInlineGameScore: (params: SetInlineGameScoreParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  setTyping: (params: SetTypingParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  startBot: (params: StartBotParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  toggleChatAdmins: (params: ToggleChatAdminsParams, options?: ag.MtpRequestOptions) => Promise<UpdatesUnion>
  toggleDialogPin: (params: ToggleDialogPinParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  uninstallStickerSet: (params: UninstallStickerSetParams, options?: ag.MtpRequestOptions) => Promise<boolean>
  uploadMedia: (params: UploadMediaParams, options?: ag.MtpRequestOptions) => Promise<MessageMediaUnion>
}

export const factory = (callApi: ag.CallApiFn): MessagesApi => ({
  acceptEncryption: (params: AcceptEncryptionParams, options?: ag.MtpRequestOptions): Promise<EncryptedChatUnion> =>
    callApi<AcceptEncryptionParams, EncryptedChatUnion>('messages.acceptEncryption', params, options),

  addChatUser: (params: AddChatUserParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<AddChatUserParams, UpdatesUnion>('messages.addChatUser', params, options),

  checkChatInvite: (params: CheckChatInviteParams, options?: ag.MtpRequestOptions): Promise<ChatInviteUnion> =>
    callApi<CheckChatInviteParams, ChatInviteUnion>('messages.checkChatInvite', params, options),

  clearRecentStickers: (params: ClearRecentStickersParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ClearRecentStickersParams, boolean>('messages.clearRecentStickers', params, options),

  createChat: (params: CreateChatParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<CreateChatParams, UpdatesUnion>('messages.createChat', params, options),

  deleteChatUser: (params: DeleteChatUserParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<DeleteChatUserParams, UpdatesUnion>('messages.deleteChatUser', params, options),

  deleteHistory: (params: DeleteHistoryParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedHistoryUnion> =>
    callApi<DeleteHistoryParams, MessagesAffectedHistoryUnion>('messages.deleteHistory', params, options),

  deleteMessages: (params: DeleteMessagesParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedMessagesUnion> =>
    callApi<DeleteMessagesParams, MessagesAffectedMessagesUnion>('messages.deleteMessages', params, options),

  discardEncryption: (params: DiscardEncryptionParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<DiscardEncryptionParams, boolean>('messages.discardEncryption', params, options),

  editChatAdmin: (params: EditChatAdminParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<EditChatAdminParams, boolean>('messages.editChatAdmin', params, options),

  editChatPhoto: (params: EditChatPhotoParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditChatPhotoParams, UpdatesUnion>('messages.editChatPhoto', params, options),

  editChatTitle: (params: EditChatTitleParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditChatTitleParams, UpdatesUnion>('messages.editChatTitle', params, options),

  editInlineBotMessage: (params: EditInlineBotMessageParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<EditInlineBotMessageParams, boolean>('messages.editInlineBotMessage', params, options),

  editMessage: (params: EditMessageParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<EditMessageParams, UpdatesUnion>('messages.editMessage', params, options),

  exportChatInvite: (params: ExportChatInviteParams, options?: ag.MtpRequestOptions): Promise<ExportedChatInviteUnion> =>
    callApi<ExportChatInviteParams, ExportedChatInviteUnion>('messages.exportChatInvite', params, options),

  faveSticker: (params: FaveStickerParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<FaveStickerParams, boolean>('messages.faveSticker', params, options),

  forwardMessage: (params: ForwardMessageParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ForwardMessageParams, UpdatesUnion>('messages.forwardMessage', params, options),

  forwardMessages: (params: ForwardMessagesParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ForwardMessagesParams, UpdatesUnion>('messages.forwardMessages', params, options),

  getAllChats: (params: GetAllChatsParams, options?: ag.MtpRequestOptions): Promise<MessagesChatsUnion> =>
    callApi<GetAllChatsParams, MessagesChatsUnion>('messages.getAllChats', params, options),

  getAllDrafts: (options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<void, UpdatesUnion>('messages.getAllDrafts', undefined, options),

  getAllStickers: (params: GetAllStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesAllStickersUnion> =>
    callApi<GetAllStickersParams, MessagesAllStickersUnion>('messages.getAllStickers', params, options),

  getArchivedStickers: (params: GetArchivedStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesArchivedStickersUnion> =>
    callApi<GetArchivedStickersParams, MessagesArchivedStickersUnion>('messages.getArchivedStickers', params, options),

  getAttachedStickers: (params: GetAttachedStickersParams, options?: ag.MtpRequestOptions): Promise<StickerSetCoveredUnion[]> =>
    callApi<GetAttachedStickersParams, StickerSetCoveredUnion[]>('messages.getAttachedStickers', params, options),

  getBotCallbackAnswer: (params: GetBotCallbackAnswerParams, options?: ag.MtpRequestOptions): Promise<MessagesBotCallbackAnswerUnion> =>
    callApi<GetBotCallbackAnswerParams, MessagesBotCallbackAnswerUnion>('messages.getBotCallbackAnswer', params, options),

  getChats: (params: GetChatsParams, options?: ag.MtpRequestOptions): Promise<MessagesChatsUnion> =>
    callApi<GetChatsParams, MessagesChatsUnion>('messages.getChats', params, options),

  getCommonChats: (params: GetCommonChatsParams, options?: ag.MtpRequestOptions): Promise<MessagesChatsUnion> =>
    callApi<GetCommonChatsParams, MessagesChatsUnion>('messages.getCommonChats', params, options),

  getDhConfig: (params: GetDhConfigParams, options?: ag.MtpRequestOptions): Promise<MessagesDhConfigUnion> =>
    callApi<GetDhConfigParams, MessagesDhConfigUnion>('messages.getDhConfig', params, options),

  getDialogs: (params: GetDialogsParams, options?: ag.MtpRequestOptions): Promise<MessagesDialogsUnion> =>
    callApi<GetDialogsParams, MessagesDialogsUnion>('messages.getDialogs', params, options),

  getDocumentByHash: (params: GetDocumentByHashParams, options?: ag.MtpRequestOptions): Promise<DocumentUnion> =>
    callApi<GetDocumentByHashParams, DocumentUnion>('messages.getDocumentByHash', params, options),

  getFavedStickers: (params: GetFavedStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesFavedStickersUnion> =>
    callApi<GetFavedStickersParams, MessagesFavedStickersUnion>('messages.getFavedStickers', params, options),

  getFeaturedStickers: (params: GetFeaturedStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesFeaturedStickersUnion> =>
    callApi<GetFeaturedStickersParams, MessagesFeaturedStickersUnion>('messages.getFeaturedStickers', params, options),

  getFullChat: (params: GetFullChatParams, options?: ag.MtpRequestOptions): Promise<MessagesChatFullUnion> =>
    callApi<GetFullChatParams, MessagesChatFullUnion>('messages.getFullChat', params, options),

  getGameHighScores: (params: GetGameHighScoresParams, options?: ag.MtpRequestOptions): Promise<MessagesHighScoresUnion> =>
    callApi<GetGameHighScoresParams, MessagesHighScoresUnion>('messages.getGameHighScores', params, options),

  getHistory: (params: GetHistoryParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<GetHistoryParams, MessagesMessagesUnion>('messages.getHistory', params, options),

  getInlineBotResults: (params: GetInlineBotResultsParams, options?: ag.MtpRequestOptions): Promise<MessagesBotResultsUnion> =>
    callApi<GetInlineBotResultsParams, MessagesBotResultsUnion>('messages.getInlineBotResults', params, options),

  getInlineGameHighScores: (params: GetInlineGameHighScoresParams, options?: ag.MtpRequestOptions): Promise<MessagesHighScoresUnion> =>
    callApi<GetInlineGameHighScoresParams, MessagesHighScoresUnion>('messages.getInlineGameHighScores', params, options),

  getMaskStickers: (params: GetMaskStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesAllStickersUnion> =>
    callApi<GetMaskStickersParams, MessagesAllStickersUnion>('messages.getMaskStickers', params, options),

  getMessageEditData: (params: GetMessageEditDataParams, options?: ag.MtpRequestOptions): Promise<MessagesMessageEditDataUnion> =>
    callApi<GetMessageEditDataParams, MessagesMessageEditDataUnion>('messages.getMessageEditData', params, options),

  getMessages: (params: GetMessagesParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<GetMessagesParams, MessagesMessagesUnion>('messages.getMessages', params, options),

  getMessagesViews: (params: GetMessagesViewsParams, options?: ag.MtpRequestOptions): Promise<number[]> =>
    callApi<GetMessagesViewsParams, number[]>('messages.getMessagesViews', params, options),

  getPeerDialogs: (params: GetPeerDialogsParams, options?: ag.MtpRequestOptions): Promise<MessagesPeerDialogsUnion> =>
    callApi<GetPeerDialogsParams, MessagesPeerDialogsUnion>('messages.getPeerDialogs', params, options),

  getPeerSettings: (params: GetPeerSettingsParams, options?: ag.MtpRequestOptions): Promise<PeerSettingsUnion> =>
    callApi<GetPeerSettingsParams, PeerSettingsUnion>('messages.getPeerSettings', params, options),

  getPinnedDialogs: (options?: ag.MtpRequestOptions): Promise<MessagesPeerDialogsUnion> =>
    callApi<void, MessagesPeerDialogsUnion>('messages.getPinnedDialogs', undefined, options),

  getRecentStickers: (params: GetRecentStickersParams, options?: ag.MtpRequestOptions): Promise<MessagesRecentStickersUnion> =>
    callApi<GetRecentStickersParams, MessagesRecentStickersUnion>('messages.getRecentStickers', params, options),

  getSavedGifs: (params: GetSavedGifsParams, options?: ag.MtpRequestOptions): Promise<MessagesSavedGifsUnion> =>
    callApi<GetSavedGifsParams, MessagesSavedGifsUnion>('messages.getSavedGifs', params, options),

  getStickerSet: (params: GetStickerSetParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetUnion> =>
    callApi<GetStickerSetParams, MessagesStickerSetUnion>('messages.getStickerSet', params, options),

  getUnreadMentions: (params: GetUnreadMentionsParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<GetUnreadMentionsParams, MessagesMessagesUnion>('messages.getUnreadMentions', params, options),

  getWebPage: (params: GetWebPageParams, options?: ag.MtpRequestOptions): Promise<WebPageUnion> =>
    callApi<GetWebPageParams, WebPageUnion>('messages.getWebPage', params, options),

  getWebPagePreview: (params: GetWebPagePreviewParams, options?: ag.MtpRequestOptions): Promise<MessageMediaUnion> =>
    callApi<GetWebPagePreviewParams, MessageMediaUnion>('messages.getWebPagePreview', params, options),

  hideReportSpam: (params: HideReportSpamParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<HideReportSpamParams, boolean>('messages.hideReportSpam', params, options),

  importChatInvite: (params: ImportChatInviteParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ImportChatInviteParams, UpdatesUnion>('messages.importChatInvite', params, options),

  installStickerSet: (params: InstallStickerSetParams, options?: ag.MtpRequestOptions): Promise<MessagesStickerSetInstallResultUnion> =>
    callApi<InstallStickerSetParams, MessagesStickerSetInstallResultUnion>('messages.installStickerSet', params, options),

  migrateChat: (params: MigrateChatParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<MigrateChatParams, UpdatesUnion>('messages.migrateChat', params, options),

  readEncryptedHistory: (params: ReadEncryptedHistoryParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReadEncryptedHistoryParams, boolean>('messages.readEncryptedHistory', params, options),

  readFeaturedStickers: (params: ReadFeaturedStickersParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReadFeaturedStickersParams, boolean>('messages.readFeaturedStickers', params, options),

  readHistory: (params: ReadHistoryParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedMessagesUnion> =>
    callApi<ReadHistoryParams, MessagesAffectedMessagesUnion>('messages.readHistory', params, options),

  readMessageContents: (params: ReadMessageContentsParams, options?: ag.MtpRequestOptions): Promise<MessagesAffectedMessagesUnion> =>
    callApi<ReadMessageContentsParams, MessagesAffectedMessagesUnion>('messages.readMessageContents', params, options),

  receivedMessages: (params: ReceivedMessagesParams, options?: ag.MtpRequestOptions): Promise<ReceivedNotifyMessageUnion[]> =>
    callApi<ReceivedMessagesParams, ReceivedNotifyMessageUnion[]>('messages.receivedMessages', params, options),

  receivedQueue: (params: ReceivedQueueParams, options?: ag.MtpRequestOptions): Promise<number[]> =>
    callApi<ReceivedQueueParams, number[]>('messages.receivedQueue', params, options),

  reorderPinnedDialogs: (params: ReorderPinnedDialogsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReorderPinnedDialogsParams, boolean>('messages.reorderPinnedDialogs', params, options),

  reorderStickerSets: (params: ReorderStickerSetsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReorderStickerSetsParams, boolean>('messages.reorderStickerSets', params, options),

  reportEncryptedSpam: (params: ReportEncryptedSpamParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReportEncryptedSpamParams, boolean>('messages.reportEncryptedSpam', params, options),

  reportSpam: (params: ReportSpamParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ReportSpamParams, boolean>('messages.reportSpam', params, options),

  requestEncryption: (params: RequestEncryptionParams, options?: ag.MtpRequestOptions): Promise<EncryptedChatUnion> =>
    callApi<RequestEncryptionParams, EncryptedChatUnion>('messages.requestEncryption', params, options),

  saveDraft: (params: SaveDraftParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveDraftParams, boolean>('messages.saveDraft', params, options),

  saveGif: (params: SaveGifParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveGifParams, boolean>('messages.saveGif', params, options),

  saveRecentSticker: (params: SaveRecentStickerParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SaveRecentStickerParams, boolean>('messages.saveRecentSticker', params, options),

  search: (params: SearchParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<SearchParams, MessagesMessagesUnion>('messages.search', params, options),

  searchGifs: (params: SearchGifsParams, options?: ag.MtpRequestOptions): Promise<MessagesFoundGifsUnion> =>
    callApi<SearchGifsParams, MessagesFoundGifsUnion>('messages.searchGifs', params, options),

  searchGlobal: (params: SearchGlobalParams, options?: ag.MtpRequestOptions): Promise<MessagesMessagesUnion> =>
    callApi<SearchGlobalParams, MessagesMessagesUnion>('messages.searchGlobal', params, options),

  sendEncrypted: (params: SendEncryptedParams, options?: ag.MtpRequestOptions): Promise<MessagesSentEncryptedMessageUnion> =>
    callApi<SendEncryptedParams, MessagesSentEncryptedMessageUnion>('messages.sendEncrypted', params, options),

  sendEncryptedFile: (params: SendEncryptedFileParams, options?: ag.MtpRequestOptions): Promise<MessagesSentEncryptedMessageUnion> =>
    callApi<SendEncryptedFileParams, MessagesSentEncryptedMessageUnion>('messages.sendEncryptedFile', params, options),

  sendEncryptedService: (params: SendEncryptedServiceParams, options?: ag.MtpRequestOptions): Promise<MessagesSentEncryptedMessageUnion> =>
    callApi<SendEncryptedServiceParams, MessagesSentEncryptedMessageUnion>('messages.sendEncryptedService', params, options),

  sendInlineBotResult: (params: SendInlineBotResultParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SendInlineBotResultParams, UpdatesUnion>('messages.sendInlineBotResult', params, options),

  sendMedia: (params: SendMediaParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SendMediaParams, UpdatesUnion>('messages.sendMedia', params, options),

  sendMessage: (params: SendMessageParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SendMessageParams, UpdatesUnion>('messages.sendMessage', params, options),

  sendScreenshotNotification: (params: SendScreenshotNotificationParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SendScreenshotNotificationParams, UpdatesUnion>('messages.sendScreenshotNotification', params, options),

  setBotCallbackAnswer: (params: SetBotCallbackAnswerParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetBotCallbackAnswerParams, boolean>('messages.setBotCallbackAnswer', params, options),

  setBotPrecheckoutResults: (params: SetBotPrecheckoutResultsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetBotPrecheckoutResultsParams, boolean>('messages.setBotPrecheckoutResults', params, options),

  setBotShippingResults: (params: SetBotShippingResultsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetBotShippingResultsParams, boolean>('messages.setBotShippingResults', params, options),

  setEncryptedTyping: (params: SetEncryptedTypingParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetEncryptedTypingParams, boolean>('messages.setEncryptedTyping', params, options),

  setGameScore: (params: SetGameScoreParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<SetGameScoreParams, UpdatesUnion>('messages.setGameScore', params, options),

  setInlineBotResults: (params: SetInlineBotResultsParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetInlineBotResultsParams, boolean>('messages.setInlineBotResults', params, options),

  setInlineGameScore: (params: SetInlineGameScoreParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetInlineGameScoreParams, boolean>('messages.setInlineGameScore', params, options),

  setTyping: (params: SetTypingParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<SetTypingParams, boolean>('messages.setTyping', params, options),

  startBot: (params: StartBotParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<StartBotParams, UpdatesUnion>('messages.startBot', params, options),

  toggleChatAdmins: (params: ToggleChatAdminsParams, options?: ag.MtpRequestOptions): Promise<UpdatesUnion> =>
    callApi<ToggleChatAdminsParams, UpdatesUnion>('messages.toggleChatAdmins', params, options),

  toggleDialogPin: (params: ToggleDialogPinParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<ToggleDialogPinParams, boolean>('messages.toggleDialogPin', params, options),

  uninstallStickerSet: (params: UninstallStickerSetParams, options?: ag.MtpRequestOptions): Promise<boolean> =>
    callApi<UninstallStickerSetParams, boolean>('messages.uninstallStickerSet', params, options),

  uploadMedia: (params: UploadMediaParams, options?: ag.MtpRequestOptions): Promise<MessageMediaUnion> =>
    callApi<UploadMediaParams, MessageMediaUnion>('messages.uploadMedia', params, options)
})
