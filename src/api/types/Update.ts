import { ChatParticipantsUnion } from './ChatParticipants'
import { ContactLinkUnion } from './ContactLink'
import { DataJsonUnion } from './DataJson'
import { DcOptionUnion } from './DcOption'
import { DraftMessageUnion } from './DraftMessage'
import { EncryptedChatUnion } from './EncryptedChat'
import { EncryptedMessageUnion } from './EncryptedMessage'
import { GeoPointUnion } from './GeoPoint'
import { InputBotInlineMessageIdUnion } from './InputBotInlineMessageId'
import { LangPackDifferenceUnion } from './LangPackDifference'
import { MessageUnion } from './Message'
import { MessageEntityUnion } from './MessageEntity'
import { MessageMediaUnion } from './MessageMedia'
import { MessagesStickerSetUnion } from './MessagesStickerSet'
import { NotifyPeerUnion } from './NotifyPeer'
import { PaymentRequestedInfoUnion } from './PaymentRequestedInfo'
import { PeerUnion } from './Peer'
import { PeerNotifySettingsUnion } from './PeerNotifySettings'
import { PhoneCallUnion } from './PhoneCall'
import { PostAddressUnion } from './PostAddress'
import { PrivacyKeyUnion } from './PrivacyKey'
import { PrivacyRuleUnion } from './PrivacyRule'
import { SendMessageActionUnion } from './SendMessageAction'
import { UserProfilePhotoUnion } from './UserProfilePhoto'
import { UserStatusUnion } from './UserStatus'
import { WebPageUnion } from './WebPage'

export interface UpdateBotCallbackQuery {
  _: 'updateBotCallbackQuery'
  flags: number
  query_id: number
  user_id: number
  peer: PeerUnion
  msg_id: number
  chat_instance: number
  data?: number[]
  game_short_name?: string
}

export interface UpdateBotInlineQuery {
  _: 'updateBotInlineQuery'
  flags: number
  query_id: number
  user_id: number
  query: string
  geo?: GeoPointUnion
  offset: string
}

export interface UpdateBotInlineSend {
  _: 'updateBotInlineSend'
  flags: number
  user_id: number
  query: string
  geo?: GeoPointUnion
  id: string
  msg_id?: InputBotInlineMessageIdUnion
}

export interface UpdateBotPrecheckoutQuery {
  _: 'updateBotPrecheckoutQuery'
  flags: number
  query_id: number
  user_id: number
  payload: number[]
  info?: PaymentRequestedInfoUnion
  shipping_option_id?: string
  currency: string
  total_amount: number
}

export interface UpdateBotShippingQuery {
  _: 'updateBotShippingQuery'
  query_id: number
  user_id: number
  payload: number[]
  shipping_address: PostAddressUnion
}

export interface UpdateBotWebhookJson {
  _: 'updateBotWebhookJSON'
  data: DataJsonUnion
}

export interface UpdateBotWebhookJsonQuery {
  _: 'updateBotWebhookJSONQuery'
  query_id: number
  data: DataJsonUnion
  timeout: number
}

export interface UpdateChannel {
  _: 'updateChannel'
  channel_id: number
}

export interface UpdateChannelMessageViews {
  _: 'updateChannelMessageViews'
  channel_id: number
  id: number
  views: number
}

export interface UpdateChannelPinnedMessage {
  _: 'updateChannelPinnedMessage'
  channel_id: number
  id: number
}

export interface UpdateChannelReadMessagesContents {
  _: 'updateChannelReadMessagesContents'
  channel_id: number
  messages: number[]
}

export interface UpdateChannelTooLong {
  _: 'updateChannelTooLong'
  flags: number
  channel_id: number
  pts?: number
}

export interface UpdateChannelWebPage {
  _: 'updateChannelWebPage'
  channel_id: number
  webpage: WebPageUnion
  pts: number
  pts_count: number
}

export interface UpdateChatAdmins {
  _: 'updateChatAdmins'
  chat_id: number
  enabled: boolean
  version: number
}

export interface UpdateChatParticipantAdd {
  _: 'updateChatParticipantAdd'
  chat_id: number
  user_id: number
  inviter_id: number
  date: number
  version: number
}

export interface UpdateChatParticipantAdmin {
  _: 'updateChatParticipantAdmin'
  chat_id: number
  user_id: number
  is_admin: boolean
  version: number
}

export interface UpdateChatParticipantDelete {
  _: 'updateChatParticipantDelete'
  chat_id: number
  user_id: number
  version: number
}

export interface UpdateChatParticipants {
  _: 'updateChatParticipants'
  participants: ChatParticipantsUnion
}

export interface UpdateChatUserTyping {
  _: 'updateChatUserTyping'
  chat_id: number
  user_id: number
  action: SendMessageActionUnion
}

export interface UpdateConfig {
  _: 'updateConfig'
}

export interface UpdateContactLink {
  _: 'updateContactLink'
  user_id: number
  my_link: ContactLinkUnion
  foreign_link: ContactLinkUnion
}

export interface UpdateContactRegistered {
  _: 'updateContactRegistered'
  user_id: number
  date: number
}

export interface UpdateContactsReset {
  _: 'updateContactsReset'
}

export interface UpdateDcOptions {
  _: 'updateDcOptions'
  dc_options: DcOptionUnion[]
}

export interface UpdateDeleteChannelMessages {
  _: 'updateDeleteChannelMessages'
  channel_id: number
  messages: number[]
  pts: number
  pts_count: number
}

export interface UpdateDeleteMessages {
  _: 'updateDeleteMessages'
  messages: number[]
  pts: number
  pts_count: number
}

export interface UpdateDialogPinned {
  _: 'updateDialogPinned'
  flags: number
  pinned?: true
  peer: PeerUnion
}

export interface UpdateDraftMessage {
  _: 'updateDraftMessage'
  peer: PeerUnion
  draft: DraftMessageUnion
}

export interface UpdateEditChannelMessage {
  _: 'updateEditChannelMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}

export interface UpdateEditMessage {
  _: 'updateEditMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}

export interface UpdateEncryptedChatTyping {
  _: 'updateEncryptedChatTyping'
  chat_id: number
}

export interface UpdateEncryptedMessagesRead {
  _: 'updateEncryptedMessagesRead'
  chat_id: number
  max_date: number
  date: number
}

export interface UpdateEncryption {
  _: 'updateEncryption'
  chat: EncryptedChatUnion
  date: number
}

export interface UpdateFavedStickers {
  _: 'updateFavedStickers'
}

export interface UpdateInlineBotCallbackQuery {
  _: 'updateInlineBotCallbackQuery'
  flags: number
  query_id: number
  user_id: number
  msg_id: InputBotInlineMessageIdUnion
  chat_instance: number
  data?: number[]
  game_short_name?: string
}

export interface UpdateLangPack {
  _: 'updateLangPack'
  difference: LangPackDifferenceUnion
}

export interface UpdateLangPackTooLong {
  _: 'updateLangPackTooLong'
}

export interface UpdateMessageId {
  _: 'updateMessageID'
  id: number
  random_id: number
}

export interface UpdateNewChannelMessage {
  _: 'updateNewChannelMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}

export interface UpdateNewEncryptedMessage {
  _: 'updateNewEncryptedMessage'
  message: EncryptedMessageUnion
  qts: number
}

export interface UpdateNewMessage {
  _: 'updateNewMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}

export interface UpdateNewStickerSet {
  _: 'updateNewStickerSet'
  stickerset: MessagesStickerSetUnion
}

export interface UpdateNotifySettings {
  _: 'updateNotifySettings'
  peer: NotifyPeerUnion
  notify_settings: PeerNotifySettingsUnion
}

export interface UpdatePhoneCall {
  _: 'updatePhoneCall'
  phone_call: PhoneCallUnion
}

export interface UpdatePinnedDialogs {
  _: 'updatePinnedDialogs'
  flags: number
  order?: PeerUnion[]
}

export interface UpdatePrivacy {
  _: 'updatePrivacy'
  key: PrivacyKeyUnion
  rules: PrivacyRuleUnion[]
}

export interface UpdatePtsChanged {
  _: 'updatePtsChanged'
}

export interface UpdateReadChannelInbox {
  _: 'updateReadChannelInbox'
  channel_id: number
  max_id: number
}

export interface UpdateReadChannelOutbox {
  _: 'updateReadChannelOutbox'
  channel_id: number
  max_id: number
}

export interface UpdateReadFeaturedStickers {
  _: 'updateReadFeaturedStickers'
}

export interface UpdateReadHistoryInbox {
  _: 'updateReadHistoryInbox'
  peer: PeerUnion
  max_id: number
  pts: number
  pts_count: number
}

export interface UpdateReadHistoryOutbox {
  _: 'updateReadHistoryOutbox'
  peer: PeerUnion
  max_id: number
  pts: number
  pts_count: number
}

export interface UpdateReadMessagesContents {
  _: 'updateReadMessagesContents'
  messages: number[]
  pts: number
  pts_count: number
}

export interface UpdateRecentStickers {
  _: 'updateRecentStickers'
}

export interface UpdateSavedGifs {
  _: 'updateSavedGifs'
}

export interface UpdateServiceNotification {
  _: 'updateServiceNotification'
  flags: number
  popup?: true
  inbox_date?: number
  type: string
  message: string
  media: MessageMediaUnion
  entities: MessageEntityUnion[]
}

export interface UpdateStickerSets {
  _: 'updateStickerSets'
}

export interface UpdateStickerSetsOrder {
  _: 'updateStickerSetsOrder'
  flags: number
  masks?: true
  order: number[]
}

export interface UpdateUserBlocked {
  _: 'updateUserBlocked'
  user_id: number
  blocked: boolean
}

export interface UpdateUserName {
  _: 'updateUserName'
  user_id: number
  first_name: string
  last_name: string
  username: string
}

export interface UpdateUserPhone {
  _: 'updateUserPhone'
  user_id: number
  phone: string
}

export interface UpdateUserPhoto {
  _: 'updateUserPhoto'
  user_id: number
  date: number
  photo: UserProfilePhotoUnion
  previous: boolean
}

export interface UpdateUserStatus {
  _: 'updateUserStatus'
  user_id: number
  status: UserStatusUnion
}

export interface UpdateUserTyping {
  _: 'updateUserTyping'
  user_id: number
  action: SendMessageActionUnion
}

export interface UpdateWebPage {
  _: 'updateWebPage'
  webpage: WebPageUnion
  pts: number
  pts_count: number
}

export type UpdateUnion = UpdateBotCallbackQuery
  | UpdateBotInlineQuery
  | UpdateBotInlineSend
  | UpdateBotPrecheckoutQuery
  | UpdateBotShippingQuery
  | UpdateBotWebhookJson
  | UpdateBotWebhookJsonQuery
  | UpdateChannel
  | UpdateChannelMessageViews
  | UpdateChannelPinnedMessage
  | UpdateChannelReadMessagesContents
  | UpdateChannelTooLong
  | UpdateChannelWebPage
  | UpdateChatAdmins
  | UpdateChatParticipantAdd
  | UpdateChatParticipantAdmin
  | UpdateChatParticipantDelete
  | UpdateChatParticipants
  | UpdateChatUserTyping
  | UpdateConfig
  | UpdateContactLink
  | UpdateContactRegistered
  | UpdateContactsReset
  | UpdateDcOptions
  | UpdateDeleteChannelMessages
  | UpdateDeleteMessages
  | UpdateDialogPinned
  | UpdateDraftMessage
  | UpdateEditChannelMessage
  | UpdateEditMessage
  | UpdateEncryptedChatTyping
  | UpdateEncryptedMessagesRead
  | UpdateEncryption
  | UpdateFavedStickers
  | UpdateInlineBotCallbackQuery
  | UpdateLangPack
  | UpdateLangPackTooLong
  | UpdateMessageId
  | UpdateNewChannelMessage
  | UpdateNewEncryptedMessage
  | UpdateNewMessage
  | UpdateNewStickerSet
  | UpdateNotifySettings
  | UpdatePhoneCall
  | UpdatePinnedDialogs
  | UpdatePrivacy
  | UpdatePtsChanged
  | UpdateReadChannelInbox
  | UpdateReadChannelOutbox
  | UpdateReadFeaturedStickers
  | UpdateReadHistoryInbox
  | UpdateReadHistoryOutbox
  | UpdateReadMessagesContents
  | UpdateRecentStickers
  | UpdateSavedGifs
  | UpdateServiceNotification
  | UpdateStickerSets
  | UpdateStickerSetsOrder
  | UpdateUserBlocked
  | UpdateUserName
  | UpdateUserPhone
  | UpdateUserPhoto
  | UpdateUserStatus
  | UpdateUserTyping
  | UpdateWebPage
