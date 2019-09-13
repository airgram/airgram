import { TdObject, UpdateContext } from '@airgram/core'
import * as api from '@airgram/core/types/api'
import Vue from 'vue'
import { AirgramDollar } from './AirgramDollar'
import { AirgramProvider } from './AirgramProvider'
import './vue'

export interface BaseTdHandlers<ContextT> {
  updateAuthorizationState?: (context: UpdateContext<api.UpdateAuthorizationState> & ContextT) => any
  updateNewMessage?: (context: UpdateContext<api.UpdateNewMessage> & ContextT) => any
  updateMessageSendAcknowledged?: (context: UpdateContext<api.UpdateMessageSendAcknowledged> & ContextT) => any
  updateMessageSendSucceeded?: (context: UpdateContext<api.UpdateMessageSendSucceeded> & ContextT) => any
  updateMessageSendFailed?: (context: UpdateContext<api.UpdateMessageSendFailed> & ContextT) => any
  updateMessageContent?: (context: UpdateContext<api.UpdateMessageContent> & ContextT) => any
  updateMessageEdited?: (context: UpdateContext<api.UpdateMessageEdited> & ContextT) => any
  updateMessageViews?: (context: UpdateContext<api.UpdateMessageViews> & ContextT) => any
  updateMessageContentOpened?: (context: UpdateContext<api.UpdateMessageContentOpened> & ContextT) => any
  updateMessageMentionRead?: (context: UpdateContext<api.UpdateMessageMentionRead> & ContextT) => any
  updateNewChat?: (context: UpdateContext<api.UpdateNewChat> & ContextT) => any
  updateChatTitle?: (context: UpdateContext<api.UpdateChatTitle> & ContextT) => any
  updateChatPhoto?: (context: UpdateContext<api.UpdateChatPhoto> & ContextT) => any
  updateChatPermissions?: (context: UpdateContext<api.UpdateChatPermissions> & ContextT) => any
  updateChatLastMessage?: (context: UpdateContext<api.UpdateChatLastMessage> & ContextT) => any
  updateChatOrder?: (context: UpdateContext<api.UpdateChatOrder> & ContextT) => any
  updateChatIsPinned?: (context: UpdateContext<api.UpdateChatIsPinned> & ContextT) => any
  updateChatIsMarkedAsUnread?: (context: UpdateContext<api.UpdateChatIsMarkedAsUnread> & ContextT) => any
  updateChatIsSponsored?: (context: UpdateContext<api.UpdateChatIsSponsored> & ContextT) => any
  updateChatDefaultDisableNotification?: (context: UpdateContext<api.UpdateChatDefaultDisableNotification> & ContextT) => any
  updateChatReadInbox?: (context: UpdateContext<api.UpdateChatReadInbox> & ContextT) => any
  updateChatReadOutbox?: (context: UpdateContext<api.UpdateChatReadOutbox> & ContextT) => any
  updateChatUnreadMentionCount?: (context: UpdateContext<api.UpdateChatUnreadMentionCount> & ContextT) => any
  updateChatNotificationSettings?: (context: UpdateContext<api.UpdateChatNotificationSettings> & ContextT) => any
  updateScopeNotificationSettings?: (context: UpdateContext<api.UpdateScopeNotificationSettings> & ContextT) => any
  updateChatPinnedMessage?: (context: UpdateContext<api.UpdateChatPinnedMessage> & ContextT) => any
  updateChatReplyMarkup?: (context: UpdateContext<api.UpdateChatReplyMarkup> & ContextT) => any
  updateChatDraftMessage?: (context: UpdateContext<api.UpdateChatDraftMessage> & ContextT) => any
  updateChatOnlineMemberCount?: (context: UpdateContext<api.UpdateChatOnlineMemberCount> & ContextT) => any
  updateNotification?: (context: UpdateContext<api.UpdateNotification> & ContextT) => any
  updateNotificationGroup?: (context: UpdateContext<api.UpdateNotificationGroup> & ContextT) => any
  updateActiveNotifications?: (context: UpdateContext<api.UpdateActiveNotifications> & ContextT) => any
  updateHavePendingNotifications?: (context: UpdateContext<api.UpdateHavePendingNotifications> & ContextT) => any
  updateDeleteMessages?: (context: UpdateContext<api.UpdateDeleteMessages> & ContextT) => any
  updateUserChatAction?: (context: UpdateContext<api.UpdateUserChatAction> & ContextT) => any
  updateUserStatus?: (context: UpdateContext<api.UpdateUserStatus> & ContextT) => any
  updateUser?: (context: UpdateContext<api.UpdateUser> & ContextT) => any
  updateBasicGroup?: (context: UpdateContext<api.UpdateBasicGroup> & ContextT) => any
  updateSupergroup?: (context: UpdateContext<api.UpdateSupergroup> & ContextT) => any
  updateSecretChat?: (context: UpdateContext<api.UpdateSecretChat> & ContextT) => any
  updateUserFullInfo?: (context: UpdateContext<api.UpdateUserFullInfo> & ContextT) => any
  updateBasicGroupFullInfo?: (context: UpdateContext<api.UpdateBasicGroupFullInfo> & ContextT) => any
  updateSupergroupFullInfo?: (context: UpdateContext<api.UpdateSupergroupFullInfo> & ContextT) => any
  updateServiceNotification?: (context: UpdateContext<api.UpdateServiceNotification> & ContextT) => any
  updateFile?: (context: UpdateContext<api.UpdateFile> & ContextT) => any
  updateFileGenerationStart?: (context: UpdateContext<api.UpdateFileGenerationStart> & ContextT) => any
  updateFileGenerationStop?: (context: UpdateContext<api.UpdateFileGenerationStop> & ContextT) => any
  updateCall?: (context: UpdateContext<api.UpdateCall> & ContextT) => any
  updateUserPrivacySettingRules?: (context: UpdateContext<api.UpdateUserPrivacySettingRules> & ContextT) => any
  updateUnreadMessageCount?: (context: UpdateContext<api.UpdateUnreadMessageCount> & ContextT) => any
  updateUnreadChatCount?: (context: UpdateContext<api.UpdateUnreadChatCount> & ContextT) => any
  updateOption?: (context: UpdateContext<api.UpdateOption> & ContextT) => any
  updateInstalledStickerSets?: (context: UpdateContext<api.UpdateInstalledStickerSets> & ContextT) => any
  updateTrendingStickerSets?: (context: UpdateContext<api.UpdateTrendingStickerSets> & ContextT) => any
  updateRecentStickers?: (context: UpdateContext<api.UpdateRecentStickers> & ContextT) => any
  updateFavoriteStickers?: (context: UpdateContext<api.UpdateFavoriteStickers> & ContextT) => any
  updateSavedAnimations?: (context: UpdateContext<api.UpdateSavedAnimations> & ContextT) => any
  updateSelectedBackground?: (context: UpdateContext<api.UpdateSelectedBackground> & ContextT) => any
  updateLanguagePackStrings?: (context: UpdateContext<api.UpdateLanguagePackStrings> & ContextT) => any
  updateConnectionState?: (context: UpdateContext<api.UpdateConnectionState> & ContextT) => any
  updateTermsOfService?: (context: UpdateContext<api.UpdateTermsOfService> & ContextT) => any
  updateNewInlineQuery?: (context: UpdateContext<api.UpdateNewInlineQuery> & ContextT) => any
  updateNewChosenInlineResult?: (context: UpdateContext<api.UpdateNewChosenInlineResult> & ContextT) => any
  updateNewCallbackQuery?: (context: UpdateContext<api.UpdateNewCallbackQuery> & ContextT) => any
  updateNewInlineCallbackQuery?: (context: UpdateContext<api.UpdateNewInlineCallbackQuery> & ContextT) => any
  updateNewShippingQuery?: (context: UpdateContext<api.UpdateNewShippingQuery> & ContextT) => any
  updateNewPreCheckoutQuery?: (context: UpdateContext<api.UpdateNewPreCheckoutQuery> & ContextT) => any
  updateNewCustomEvent?: (context: UpdateContext<api.UpdateNewCustomEvent> & ContextT) => any
  updateNewCustomQuery?: (context: UpdateContext<api.UpdateNewCustomQuery> & ContextT) => any
  updatePoll?: (context: UpdateContext<api.UpdatePoll> & ContextT) => any
}

export type UpdateHandler<UpdateT extends TdObject> =
  (context: UpdateContext<UpdateT>) => any

export type AirgramUpdateHandlers<ContextT> = BaseTdHandlers<ContextT> & Record<string, UpdateHandler<TdObject>>

export interface AirgramVue<ContextT> extends Vue {
  $_airgramSubscriptions?: Array<() => void>
  $_airgramProvider: AirgramProvider<ContextT>
  $_airgramDollar?: AirgramDollar
}
