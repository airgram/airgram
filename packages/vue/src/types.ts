import { BaseTdObject, UpdateContext } from '@airgram/core'
import * as api from '@airgram/core/types/api'
import Vue from 'vue'
import { AirgramDollar } from './AirgramDollar'
import { AirgramProvider } from './AirgramProvider'
import './vue'

export interface UpdateHandlers {
  updateAuthorizationState?: (context: UpdateContext<api.UpdateAuthorizationState>) => any
  updateNewMessage?: (context: UpdateContext<api.UpdateNewMessage>) => any
  updateMessageSendAcknowledged?: (context: UpdateContext<api.UpdateMessageSendAcknowledged>) => any
  updateMessageSendSucceeded?: (context: UpdateContext<api.UpdateMessageSendSucceeded>) => any
  updateMessageSendFailed?: (context: UpdateContext<api.UpdateMessageSendFailed>) => any
  updateMessageContent?: (context: UpdateContext<api.UpdateMessageContent>) => any
  updateMessageEdited?: (context: UpdateContext<api.UpdateMessageEdited>) => any
  updateMessageViews?: (context: UpdateContext<api.UpdateMessageViews>) => any
  updateMessageContentOpened?: (context: UpdateContext<api.UpdateMessageContentOpened>) => any
  updateMessageMentionRead?: (context: UpdateContext<api.UpdateMessageMentionRead>) => any
  updateNewChat?: (context: UpdateContext<api.UpdateNewChat>) => any
  updateChatTitle?: (context: UpdateContext<api.UpdateChatTitle>) => any
  updateChatPhoto?: (context: UpdateContext<api.UpdateChatPhoto>) => any
  updateChatPermissions?: (context: UpdateContext<api.UpdateChatPermissions>) => any
  updateChatLastMessage?: (context: UpdateContext<api.UpdateChatLastMessage>) => any
  updateChatOrder?: (context: UpdateContext<api.UpdateChatOrder>) => any
  updateChatIsPinned?: (context: UpdateContext<api.UpdateChatIsPinned>) => any
  updateChatIsMarkedAsUnread?: (context: UpdateContext<api.UpdateChatIsMarkedAsUnread>) => any
  updateChatIsSponsored?: (context: UpdateContext<api.UpdateChatIsSponsored>) => any
  updateChatDefaultDisableNotification?: (context: UpdateContext<api.UpdateChatDefaultDisableNotification>) => any
  updateChatReadInbox?: (context: UpdateContext<api.UpdateChatReadInbox>) => any
  updateChatReadOutbox?: (context: UpdateContext<api.UpdateChatReadOutbox>) => any
  updateChatUnreadMentionCount?: (context: UpdateContext<api.UpdateChatUnreadMentionCount>) => any
  updateChatNotificationSettings?: (context: UpdateContext<api.UpdateChatNotificationSettings>) => any
  updateScopeNotificationSettings?: (context: UpdateContext<api.UpdateScopeNotificationSettings>) => any
  updateChatPinnedMessage?: (context: UpdateContext<api.UpdateChatPinnedMessage>) => any
  updateChatReplyMarkup?: (context: UpdateContext<api.UpdateChatReplyMarkup>) => any
  updateChatDraftMessage?: (context: UpdateContext<api.UpdateChatDraftMessage>) => any
  updateChatOnlineMemberCount?: (context: UpdateContext<api.UpdateChatOnlineMemberCount>) => any
  updateNotification?: (context: UpdateContext<api.UpdateNotification>) => any
  updateNotificationGroup?: (context: UpdateContext<api.UpdateNotificationGroup>) => any
  updateActiveNotifications?: (context: UpdateContext<api.UpdateActiveNotifications>) => any
  updateHavePendingNotifications?: (context: UpdateContext<api.UpdateHavePendingNotifications>) => any
  updateDeleteMessages?: (context: UpdateContext<api.UpdateDeleteMessages>) => any
  updateUserChatAction?: (context: UpdateContext<api.UpdateUserChatAction>) => any
  updateUserStatus?: (context: UpdateContext<api.UpdateUserStatus>) => any
  updateUser?: (context: UpdateContext<api.UpdateUser>) => any
  updateBasicGroup?: (context: UpdateContext<api.UpdateBasicGroup>) => any
  updateSupergroup?: (context: UpdateContext<api.UpdateSupergroup>) => any
  updateSecretChat?: (context: UpdateContext<api.UpdateSecretChat>) => any
  updateUserFullInfo?: (context: UpdateContext<api.UpdateUserFullInfo>) => any
  updateBasicGroupFullInfo?: (context: UpdateContext<api.UpdateBasicGroupFullInfo>) => any
  updateSupergroupFullInfo?: (context: UpdateContext<api.UpdateSupergroupFullInfo>) => any
  updateServiceNotification?: (context: UpdateContext<api.UpdateServiceNotification>) => any
  updateFile?: (context: UpdateContext<api.UpdateFile>) => any
  updateFileGenerationStart?: (context: UpdateContext<api.UpdateFileGenerationStart>) => any
  updateFileGenerationStop?: (context: UpdateContext<api.UpdateFileGenerationStop>) => any
  updateCall?: (context: UpdateContext<api.UpdateCall>) => any
  updateUserPrivacySettingRules?: (context: UpdateContext<api.UpdateUserPrivacySettingRules>) => any
  updateUnreadMessageCount?: (context: UpdateContext<api.UpdateUnreadMessageCount>) => any
  updateUnreadChatCount?: (context: UpdateContext<api.UpdateUnreadChatCount>) => any
  updateOption?: (context: UpdateContext<api.UpdateOption>) => any
  updateInstalledStickerSets?: (context: UpdateContext<api.UpdateInstalledStickerSets>) => any
  updateTrendingStickerSets?: (context: UpdateContext<api.UpdateTrendingStickerSets>) => any
  updateRecentStickers?: (context: UpdateContext<api.UpdateRecentStickers>) => any
  updateFavoriteStickers?: (context: UpdateContext<api.UpdateFavoriteStickers>) => any
  updateSavedAnimations?: (context: UpdateContext<api.UpdateSavedAnimations>) => any
  updateSelectedBackground?: (context: UpdateContext<api.UpdateSelectedBackground>) => any
  updateLanguagePackStrings?: (context: UpdateContext<api.UpdateLanguagePackStrings>) => any
  updateConnectionState?: (context: UpdateContext<api.UpdateConnectionState>) => any
  updateTermsOfService?: (context: UpdateContext<api.UpdateTermsOfService>) => any
  updateNewInlineQuery?: (context: UpdateContext<api.UpdateNewInlineQuery>) => any
  updateNewChosenInlineResult?: (context: UpdateContext<api.UpdateNewChosenInlineResult>) => any
  updateNewCallbackQuery?: (context: UpdateContext<api.UpdateNewCallbackQuery>) => any
  updateNewInlineCallbackQuery?: (context: UpdateContext<api.UpdateNewInlineCallbackQuery>) => any
  updateNewShippingQuery?: (context: UpdateContext<api.UpdateNewShippingQuery>) => any
  updateNewPreCheckoutQuery?: (context: UpdateContext<api.UpdateNewPreCheckoutQuery>) => any
  updateNewCustomEvent?: (context: UpdateContext<api.UpdateNewCustomEvent>) => any
  updateNewCustomQuery?: (context: UpdateContext<api.UpdateNewCustomQuery>) => any
  updatePoll?: (context: UpdateContext<api.UpdatePoll>) => any
}

export type UpdateHandler<UpdateT extends BaseTdObject> = (context: UpdateContext<UpdateT>) => any

export interface AirgramVue extends Vue {
  $_airgramSubscriptions?: Array<() => void>
  $_airgramProvider: AirgramProvider
  $_airgramDollar?: AirgramDollar
}
