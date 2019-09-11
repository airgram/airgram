import * as api from '@airgram/web'
import { Airgram } from '@airgram/web'
import Vue, { VueConstructor } from 'vue'
import { DollarTd } from './DollarTd'
import { TdProvider } from './TdProvider'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type TdEventContext<UpdateT extends Airgram.ResponseBody, ContextT = {}> =
  Omit<Airgram.UpdateContext<UpdateT>, '_' | 'update'> & ContextT

export interface BaseTdHandlers<ContextT> {
  updateAuthorizationState?: (
    update: api.UpdateAuthorizationState,
    context: TdEventContext<api.UpdateAuthorizationState, ContextT>
  ) => any
  updateNewMessage?: (
    update: api.UpdateNewMessage,
    context: TdEventContext<api.UpdateNewMessage, ContextT>
  ) => any
  updateMessageSendAcknowledged?: (
    update: api.UpdateMessageSendAcknowledged,
    context: TdEventContext<api.UpdateMessageSendAcknowledged, ContextT>
  ) => any
  updateMessageSendSucceeded?: (
    update: api.UpdateMessageSendSucceeded,
    context: TdEventContext<api.UpdateMessageSendSucceeded, ContextT>
  ) => any
  updateMessageSendFailed?: (
    update: api.UpdateMessageSendFailed,
    context: TdEventContext<api.UpdateMessageSendFailed, ContextT>
  ) => any
  updateMessageContent?: (
    update: api.UpdateMessageContent,
    context: TdEventContext<api.UpdateMessageContent, ContextT>
  ) => any
  updateMessageEdited?: (
    update: api.UpdateMessageEdited,
    context: TdEventContext<api.UpdateMessageEdited, ContextT>
  ) => any
  updateMessageViews?: (
    update: api.UpdateMessageViews,
    context: TdEventContext<api.UpdateMessageViews, ContextT>
  ) => any
  updateMessageContentOpened?: (
    update: api.UpdateMessageContentOpened,
    context: TdEventContext<api.UpdateMessageContentOpened, ContextT>
  ) => any
  updateMessageMentionRead?: (
    update: api.UpdateMessageMentionRead,
    context: TdEventContext<api.UpdateMessageMentionRead, ContextT>
  ) => any
  updateNewChat?: (
    update: api.UpdateNewChat,
    context: TdEventContext<api.UpdateNewChat, ContextT>
  ) => any
  updateChatTitle?: (
    update: api.UpdateChatTitle,
    context: TdEventContext<api.UpdateChatTitle, ContextT>
  ) => any
  updateChatPhoto?: (
    update: api.UpdateChatPhoto,
    context: TdEventContext<api.UpdateChatPhoto, ContextT>
  ) => any
  updateChatLastMessage?: (
    update: api.UpdateChatLastMessage,
    context: TdEventContext<api.UpdateChatLastMessage, ContextT>
  ) => any
  updateChatOrder?: (
    update: api.UpdateChatOrder,
    context: TdEventContext<api.UpdateChatOrder, ContextT>
  ) => any
  updateChatIsPinned?: (
    update: api.UpdateChatIsPinned,
    context: TdEventContext<api.UpdateChatIsPinned, ContextT>
  ) => any
  updateChatIsMarkedAsUnread?: (
    update: api.UpdateChatIsMarkedAsUnread,
    context: TdEventContext<api.UpdateChatIsMarkedAsUnread, ContextT>
  ) => any
  updateChatIsSponsored?: (
    update: api.UpdateChatIsSponsored,
    context: TdEventContext<api.UpdateChatIsSponsored, ContextT>
  ) => any
  updateChatDefaultDisableNotification?: (
    update: api.UpdateChatDefaultDisableNotification,
    context: TdEventContext<api.UpdateChatDefaultDisableNotification, ContextT>
  ) => any
  updateChatReadInbox?: (
    update: api.UpdateChatReadInbox,
    context: TdEventContext<api.UpdateChatReadInbox, ContextT>
  ) => any
  updateChatReadOutbox?: (
    update: api.UpdateChatReadOutbox,
    context: TdEventContext<api.UpdateChatReadOutbox, ContextT>
  ) => any
  updateChatUnreadMentionCount?: (
    update: api.UpdateChatUnreadMentionCount,
    context: TdEventContext<api.UpdateChatUnreadMentionCount, ContextT>
  ) => any
  updateChatNotificationSettings?: (
    update: api.UpdateChatNotificationSettings,
    context: TdEventContext<api.UpdateChatNotificationSettings, ContextT>
  ) => any
  updateScopeNotificationSettings?: (
    update: api.UpdateScopeNotificationSettings,
    context: TdEventContext<api.UpdateScopeNotificationSettings, ContextT>
  ) => any
  updateChatPinnedMessage?: (
    update: api.UpdateChatPinnedMessage,
    context: TdEventContext<api.UpdateChatPinnedMessage, ContextT>
  ) => any
  updateChatReplyMarkup?: (
    update: api.UpdateChatReplyMarkup,
    context: TdEventContext<api.UpdateChatReplyMarkup, ContextT>
  ) => any
  updateChatDraftMessage?: (
    update: api.UpdateChatDraftMessage,
    context: TdEventContext<api.UpdateChatDraftMessage, ContextT>
  ) => any
  updateChatOnlineMemberCount?: (
    update: api.UpdateChatOnlineMemberCount,
    context: TdEventContext<api.UpdateChatOnlineMemberCount, ContextT>
  ) => any
  updateNotification?: (
    update: api.UpdateNotification,
    context: TdEventContext<api.UpdateNotification, ContextT>
  ) => any
  updateNotificationGroup?: (
    update: api.UpdateNotificationGroup,
    context: TdEventContext<api.UpdateNotificationGroup, ContextT>
  ) => any
  updateActiveNotifications?: (
    update: api.UpdateActiveNotifications,
    context: TdEventContext<api.UpdateActiveNotifications, ContextT>
  ) => any
  updateHavePendingNotifications?: (
    update: api.UpdateHavePendingNotifications,
    context: TdEventContext<api.UpdateHavePendingNotifications, ContextT>
  ) => any
  updateDeleteMessages?: (
    update: api.UpdateDeleteMessages,
    context: TdEventContext<api.UpdateDeleteMessages, ContextT>
  ) => any
  updateUserChatAction?: (
    update: api.UpdateUserChatAction,
    context: TdEventContext<api.UpdateUserChatAction, ContextT>
  ) => any
  updateUserStatus?: (
    update: api.UpdateUserStatus,
    context: TdEventContext<api.UpdateUserStatus, ContextT>
  ) => any
  updateUser?: (
    update: api.UpdateUser,
    context: TdEventContext<api.UpdateUser, ContextT>
  ) => any
  updateBasicGroup?: (
    update: api.UpdateBasicGroup,
    context: TdEventContext<api.UpdateBasicGroup, ContextT>
  ) => any
  updateSupergroup?: (
    update: api.UpdateSupergroup,
    context: TdEventContext<api.UpdateSupergroup, ContextT>
  ) => any
  updateSecretChat?: (
    update: api.UpdateSecretChat,
    context: TdEventContext<api.UpdateSecretChat, ContextT>
  ) => any
  updateUserFullInfo?: (
    update: api.UpdateUserFullInfo,
    context: TdEventContext<api.UpdateUserFullInfo, ContextT>
  ) => any
  updateBasicGroupFullInfo?: (
    update: api.UpdateBasicGroupFullInfo,
    context: TdEventContext<api.UpdateBasicGroupFullInfo, ContextT>
  ) => any
  updateSupergroupFullInfo?: (
    update: api.UpdateSupergroupFullInfo,
    context: TdEventContext<api.UpdateSupergroupFullInfo, ContextT>
  ) => any
  updateServiceNotification?: (
    update: api.UpdateServiceNotification,
    context: TdEventContext<api.UpdateServiceNotification, ContextT>
  ) => any
  updateFile?: (
    update: api.UpdateFile,
    context: TdEventContext<api.UpdateFile, ContextT>
  ) => any
  updateFileGenerationStart?: (
    update: api.UpdateFileGenerationStart,
    context: TdEventContext<api.UpdateFileGenerationStart, ContextT>
  ) => any
  updateFileGenerationStop?: (
    update: api.UpdateFileGenerationStop,
    context: TdEventContext<api.UpdateFileGenerationStop, ContextT>
  ) => any
  updateCall?: (
    update: api.UpdateCall,
    context: TdEventContext<api.UpdateCall, ContextT>
  ) => any
  updateUserPrivacySettingRules?: (
    update: api.UpdateUserPrivacySettingRules,
    context: TdEventContext<api.UpdateUserPrivacySettingRules, ContextT>
  ) => any
  updateUnreadMessageCount?: (
    update: api.UpdateUnreadMessageCount,
    context: TdEventContext<api.UpdateUnreadMessageCount, ContextT>
  ) => any
  updateUnreadChatCount?: (
    update: api.UpdateUnreadChatCount,
    context: TdEventContext<api.UpdateUnreadChatCount, ContextT>
  ) => any
  updateOption?: (
    update: api.UpdateOption,
    context: TdEventContext<api.UpdateOption, ContextT>
  ) => any
  updateInstalledStickerSets?: (
    update: api.UpdateInstalledStickerSets,
    context: TdEventContext<api.UpdateInstalledStickerSets, ContextT>
  ) => any
  updateTrendingStickerSets?: (
    update: api.UpdateTrendingStickerSets,
    context: TdEventContext<api.UpdateTrendingStickerSets, ContextT>
  ) => any
  updateRecentStickers?: (
    update: api.UpdateRecentStickers,
    context: TdEventContext<api.UpdateRecentStickers, ContextT>
  ) => any
  updateFavoriteStickers?: (
    update: api.UpdateFavoriteStickers,
    context: TdEventContext<api.UpdateFavoriteStickers, ContextT>
  ) => any
  updateSavedAnimations?: (
    update: api.UpdateSavedAnimations,
    context: TdEventContext<api.UpdateSavedAnimations, ContextT>
  ) => any
  updateLanguagePackStrings?: (
    update: api.UpdateLanguagePackStrings,
    context: TdEventContext<api.UpdateLanguagePackStrings, ContextT>
  ) => any
  updateConnectionState?: (
    update: api.UpdateConnectionState,
    context: TdEventContext<api.UpdateConnectionState, ContextT>
  ) => any
  updateTermsOfService?: (
    update: api.UpdateTermsOfService,
    context: TdEventContext<api.UpdateTermsOfService, ContextT>
  ) => any
  updateNewInlineQuery?: (
    update: api.UpdateNewInlineQuery,
    context: TdEventContext<api.UpdateNewInlineQuery, ContextT>
  ) => any
  updateNewChosenInlineResult?: (
    update: api.UpdateNewChosenInlineResult,
    context: TdEventContext<api.UpdateNewChosenInlineResult, ContextT>
  ) => any
  updateNewCallbackQuery?: (
    update: api.UpdateNewCallbackQuery,
    context: TdEventContext<api.UpdateNewCallbackQuery, ContextT>
  ) => any
  updateNewInlineCallbackQuery?: (
    update: api.UpdateNewInlineCallbackQuery,
    context: TdEventContext<api.UpdateNewInlineCallbackQuery, ContextT>
  ) => any
  updateNewShippingQuery?: (
    update: api.UpdateNewShippingQuery,
    context: TdEventContext<api.UpdateNewShippingQuery, ContextT>
  ) => any
  updateNewPreCheckoutQuery?: (
    update: api.UpdateNewPreCheckoutQuery,
    context: TdEventContext<api.UpdateNewPreCheckoutQuery, ContextT>
  ) => any
  updateNewCustomEvent?: (
    update: api.UpdateNewCustomEvent,
    context: TdEventContext<api.UpdateNewCustomEvent, ContextT>
  ) => any
  updateNewCustomQuery?: (
    update: api.UpdateNewCustomQuery,
    context: TdEventContext<api.UpdateNewCustomQuery, ContextT>
  ) => any
  updatePoll?: (
    update: api.UpdatePoll,
    context: TdEventContext<api.UpdatePoll, ContextT>
  ) => any
}

export type TdHandler<UpdateT extends Airgram.ResponseBody, ContextT> =
  (update: UpdateT, context: TdEventContext<UpdateT, ContextT>) => any

export type TdHandlers<ContextT> = BaseTdHandlers<ContextT> & Record<string, TdHandler<Airgram.ResponseBody, ContextT>>

export interface TdVue<ContextT> extends Vue {
  $_tdSubscriptions?: Array<() => void>
  $_tdProvider: TdProvider<ContextT>
  $_td?: DollarTd
}

export interface TdVueConstructor<ContextT> extends VueConstructor, TdVue<ContextT> {}

export type TdEventHandler<UpdateT extends Airgram.ResponseBody, ContextT> =
  (update: UpdateT, context: TdEventContext<UpdateT, ContextT>) => any
