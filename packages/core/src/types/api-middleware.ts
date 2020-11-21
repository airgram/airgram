/* tslint:disable:unified-signatures max-line-length */

import { ApiResponse, BaseTdObject, Middleware, TdObject, UpdateContext } from './airgram'
import * as api from './api'

export type AcceptCallMiddleware = Middleware<ApiResponse<api.AcceptCallParams, api.OkUnion>>
export type AcceptTermsOfServiceMiddleware = Middleware<ApiResponse<api.AcceptTermsOfServiceParams, api.OkUnion>>
export type AddChatMemberMiddleware = Middleware<ApiResponse<api.AddChatMemberParams, api.OkUnion>>
export type AddChatMembersMiddleware = Middleware<ApiResponse<api.AddChatMembersParams, api.OkUnion>>
export type AddChatToListMiddleware = Middleware<ApiResponse<api.AddChatToListParams, api.OkUnion>>
export type AddContactMiddleware = Middleware<ApiResponse<api.AddContactParams, api.OkUnion>>
export type AddCustomServerLanguagePackMiddleware = Middleware<ApiResponse<api.AddCustomServerLanguagePackParams, api.OkUnion>>
export type AddFavoriteStickerMiddleware = Middleware<ApiResponse<api.AddFavoriteStickerParams, api.OkUnion>>
export type AddLocalMessageMiddleware = Middleware<ApiResponse<api.AddLocalMessageParams, api.MessageUnion>>
export type AddLogMessageMiddleware = Middleware<ApiResponse<api.AddLogMessageParams, api.OkUnion>>
export type AddNetworkStatisticsMiddleware = Middleware<ApiResponse<api.AddNetworkStatisticsParams, api.OkUnion>>
export type AddProxyMiddleware = Middleware<ApiResponse<api.AddProxyParams, api.ProxyUnion>>
export type AddRecentStickerMiddleware = Middleware<ApiResponse<api.AddRecentStickerParams, api.StickersUnion>>
export type AddRecentlyFoundChatMiddleware = Middleware<ApiResponse<api.AddRecentlyFoundChatParams, api.OkUnion>>
export type AddSavedAnimationMiddleware = Middleware<ApiResponse<api.AddSavedAnimationParams, api.OkUnion>>
export type AddStickerToSetMiddleware = Middleware<ApiResponse<api.AddStickerToSetParams, api.StickerSetUnion>>
export type AnswerCallbackQueryMiddleware = Middleware<ApiResponse<api.AnswerCallbackQueryParams, api.OkUnion>>
export type AnswerCustomQueryMiddleware = Middleware<ApiResponse<api.AnswerCustomQueryParams, api.OkUnion>>
export type AnswerInlineQueryMiddleware = Middleware<ApiResponse<api.AnswerInlineQueryParams, api.OkUnion>>
export type AnswerPreCheckoutQueryMiddleware = Middleware<ApiResponse<api.AnswerPreCheckoutQueryParams, api.OkUnion>>
export type AnswerShippingQueryMiddleware = Middleware<ApiResponse<api.AnswerShippingQueryParams, api.OkUnion>>
export type BlockMessageSenderFromRepliesMiddleware = Middleware<ApiResponse<api.BlockMessageSenderFromRepliesParams, api.OkUnion>>
export type CanTransferOwnershipMiddleware = Middleware<ApiResponse<never, api.CanTransferOwnershipResultUnion>>
export type CancelDownloadFileMiddleware = Middleware<ApiResponse<api.CancelDownloadFileParams, api.OkUnion>>
export type CancelUploadFileMiddleware = Middleware<ApiResponse<api.CancelUploadFileParams, api.OkUnion>>
export type ChangeImportedContactsMiddleware = Middleware<ApiResponse<api.ChangeImportedContactsParams, api.ImportedContactsUnion>>
export type ChangePhoneNumberMiddleware = Middleware<ApiResponse<api.ChangePhoneNumberParams, api.AuthenticationCodeInfoUnion>>
export type ChangeStickerSetMiddleware = Middleware<ApiResponse<api.ChangeStickerSetParams, api.OkUnion>>
export type CheckAuthenticationBotTokenMiddleware = Middleware<ApiResponse<api.CheckAuthenticationBotTokenParams, api.OkUnion>>
export type CheckAuthenticationCodeMiddleware = Middleware<ApiResponse<api.CheckAuthenticationCodeParams, api.OkUnion>>
export type CheckAuthenticationPasswordMiddleware = Middleware<ApiResponse<api.CheckAuthenticationPasswordParams, api.OkUnion>>
export type CheckChangePhoneNumberCodeMiddleware = Middleware<ApiResponse<api.CheckChangePhoneNumberCodeParams, api.OkUnion>>
export type CheckChatInviteLinkMiddleware = Middleware<ApiResponse<api.CheckChatInviteLinkParams, api.ChatInviteLinkInfoUnion>>
export type CheckChatUsernameMiddleware = Middleware<ApiResponse<api.CheckChatUsernameParams, api.CheckChatUsernameResultUnion>>
export type CheckCreatedPublicChatsLimitMiddleware = Middleware<ApiResponse<api.CheckCreatedPublicChatsLimitParams, api.OkUnion>>
export type CheckDatabaseEncryptionKeyMiddleware = Middleware<ApiResponse<api.CheckDatabaseEncryptionKeyParams, api.OkUnion>>
export type CheckEmailAddressVerificationCodeMiddleware = Middleware<ApiResponse<api.CheckEmailAddressVerificationCodeParams, api.OkUnion>>
export type CheckPhoneNumberConfirmationCodeMiddleware = Middleware<ApiResponse<api.CheckPhoneNumberConfirmationCodeParams, api.OkUnion>>
export type CheckPhoneNumberVerificationCodeMiddleware = Middleware<ApiResponse<api.CheckPhoneNumberVerificationCodeParams, api.OkUnion>>
export type CheckRecoveryEmailAddressCodeMiddleware = Middleware<ApiResponse<api.CheckRecoveryEmailAddressCodeParams, api.PasswordStateUnion>>
export type CleanFileNameMiddleware = Middleware<ApiResponse<api.CleanFileNameParams, api.TextUnion>>
export type ClearAllDraftMessagesMiddleware = Middleware<ApiResponse<api.ClearAllDraftMessagesParams, api.OkUnion>>
export type ClearImportedContactsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type ClearRecentStickersMiddleware = Middleware<ApiResponse<api.ClearRecentStickersParams, api.OkUnion>>
export type ClearRecentlyFoundChatsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type CloseMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type CloseChatMiddleware = Middleware<ApiResponse<api.CloseChatParams, api.OkUnion>>
export type CloseSecretChatMiddleware = Middleware<ApiResponse<api.CloseSecretChatParams, api.OkUnion>>
export type ConfirmQrCodeAuthenticationMiddleware = Middleware<ApiResponse<api.ConfirmQrCodeAuthenticationParams, api.SessionUnion>>
export type CreateBasicGroupChatMiddleware = Middleware<ApiResponse<api.CreateBasicGroupChatParams, api.ChatUnion>>
export type CreateCallMiddleware = Middleware<ApiResponse<api.CreateCallParams, api.CallIdUnion>>
export type CreateChatFilterMiddleware = Middleware<ApiResponse<api.CreateChatFilterParams, api.ChatFilterInfoUnion>>
export type CreateNewBasicGroupChatMiddleware = Middleware<ApiResponse<api.CreateNewBasicGroupChatParams, api.ChatUnion>>
export type CreateNewSecretChatMiddleware = Middleware<ApiResponse<api.CreateNewSecretChatParams, api.ChatUnion>>
export type CreateNewStickerSetMiddleware = Middleware<ApiResponse<api.CreateNewStickerSetParams, api.StickerSetUnion>>
export type CreateNewSupergroupChatMiddleware = Middleware<ApiResponse<api.CreateNewSupergroupChatParams, api.ChatUnion>>
export type CreatePrivateChatMiddleware = Middleware<ApiResponse<api.CreatePrivateChatParams, api.ChatUnion>>
export type CreateSecretChatMiddleware = Middleware<ApiResponse<api.CreateSecretChatParams, api.ChatUnion>>
export type CreateSupergroupChatMiddleware = Middleware<ApiResponse<api.CreateSupergroupChatParams, api.ChatUnion>>
export type CreateTemporaryPasswordMiddleware = Middleware<ApiResponse<api.CreateTemporaryPasswordParams, api.TemporaryPasswordStateUnion>>
export type DeleteAccountMiddleware = Middleware<ApiResponse<api.DeleteAccountParams, api.OkUnion>>
export type DeleteChatFilterMiddleware = Middleware<ApiResponse<api.DeleteChatFilterParams, api.OkUnion>>
export type DeleteChatHistoryMiddleware = Middleware<ApiResponse<api.DeleteChatHistoryParams, api.OkUnion>>
export type DeleteChatMessagesFromUserMiddleware = Middleware<ApiResponse<api.DeleteChatMessagesFromUserParams, api.OkUnion>>
export type DeleteChatReplyMarkupMiddleware = Middleware<ApiResponse<api.DeleteChatReplyMarkupParams, api.OkUnion>>
export type DeleteFileMiddleware = Middleware<ApiResponse<api.DeleteFileParams, api.OkUnion>>
export type DeleteLanguagePackMiddleware = Middleware<ApiResponse<api.DeleteLanguagePackParams, api.OkUnion>>
export type DeleteMessagesMiddleware = Middleware<ApiResponse<api.DeleteMessagesParams, api.OkUnion>>
export type DeletePassportElementMiddleware = Middleware<ApiResponse<api.DeletePassportElementParams, api.OkUnion>>
export type DeleteProfilePhotoMiddleware = Middleware<ApiResponse<api.DeleteProfilePhotoParams, api.OkUnion>>
export type DeleteSavedCredentialsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type DeleteSavedOrderInfoMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type DeleteSupergroupMiddleware = Middleware<ApiResponse<api.DeleteSupergroupParams, api.OkUnion>>
export type DestroyMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type DisableProxyMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type DiscardCallMiddleware = Middleware<ApiResponse<api.DiscardCallParams, api.OkUnion>>
export type DisconnectAllWebsitesMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type DisconnectWebsiteMiddleware = Middleware<ApiResponse<api.DisconnectWebsiteParams, api.OkUnion>>
export type DownloadFileMiddleware = Middleware<ApiResponse<api.DownloadFileParams, api.FileUnion>>
export type EditChatFilterMiddleware = Middleware<ApiResponse<api.EditChatFilterParams, api.ChatFilterInfoUnion>>
export type EditCustomLanguagePackInfoMiddleware = Middleware<ApiResponse<api.EditCustomLanguagePackInfoParams, api.OkUnion>>
export type EditInlineMessageCaptionMiddleware = Middleware<ApiResponse<api.EditInlineMessageCaptionParams, api.OkUnion>>
export type EditInlineMessageLiveLocationMiddleware = Middleware<ApiResponse<api.EditInlineMessageLiveLocationParams, api.OkUnion>>
export type EditInlineMessageMediaMiddleware = Middleware<ApiResponse<api.EditInlineMessageMediaParams, api.OkUnion>>
export type EditInlineMessageReplyMarkupMiddleware = Middleware<ApiResponse<api.EditInlineMessageReplyMarkupParams, api.OkUnion>>
export type EditInlineMessageTextMiddleware = Middleware<ApiResponse<api.EditInlineMessageTextParams, api.OkUnion>>
export type EditMessageCaptionMiddleware = Middleware<ApiResponse<api.EditMessageCaptionParams, api.MessageUnion>>
export type EditMessageLiveLocationMiddleware = Middleware<ApiResponse<api.EditMessageLiveLocationParams, api.MessageUnion>>
export type EditMessageMediaMiddleware = Middleware<ApiResponse<api.EditMessageMediaParams, api.MessageUnion>>
export type EditMessageReplyMarkupMiddleware = Middleware<ApiResponse<api.EditMessageReplyMarkupParams, api.MessageUnion>>
export type EditMessageSchedulingStateMiddleware = Middleware<ApiResponse<api.EditMessageSchedulingStateParams, api.OkUnion>>
export type EditMessageTextMiddleware = Middleware<ApiResponse<api.EditMessageTextParams, api.MessageUnion>>
export type EditProxyMiddleware = Middleware<ApiResponse<api.EditProxyParams, api.ProxyUnion>>
export type EnableProxyMiddleware = Middleware<ApiResponse<api.EnableProxyParams, api.OkUnion>>
export type FinishFileGenerationMiddleware = Middleware<ApiResponse<api.FinishFileGenerationParams, api.OkUnion>>
export type ForwardMessagesMiddleware = Middleware<ApiResponse<api.ForwardMessagesParams, api.MessagesUnion>>
export type GenerateChatInviteLinkMiddleware = Middleware<ApiResponse<api.GenerateChatInviteLinkParams, api.ChatInviteLinkUnion>>
export type GetAccountTtlMiddleware = Middleware<ApiResponse<never, api.AccountTtlUnion>>
export type GetActiveLiveLocationMessagesMiddleware = Middleware<ApiResponse<never, api.MessagesUnion>>
export type GetActiveSessionsMiddleware = Middleware<ApiResponse<never, api.SessionsUnion>>
export type GetAllPassportElementsMiddleware = Middleware<ApiResponse<api.GetAllPassportElementsParams, api.PassportElementsUnion>>
export type GetApplicationConfigMiddleware = Middleware<ApiResponse<never, api.JsonValueUnion>>
export type GetArchivedStickerSetsMiddleware = Middleware<ApiResponse<api.GetArchivedStickerSetsParams, api.StickerSetsUnion>>
export type GetAttachedStickerSetsMiddleware = Middleware<ApiResponse<api.GetAttachedStickerSetsParams, api.StickerSetsUnion>>
export type GetAuthorizationStateMiddleware = Middleware<ApiResponse<never, api.AuthorizationStateUnion>>
export type GetAutoDownloadSettingsPresetsMiddleware = Middleware<ApiResponse<never, api.AutoDownloadSettingsPresetsUnion>>
export type GetBackgroundUrlMiddleware = Middleware<ApiResponse<api.GetBackgroundUrlParams, api.HttpUrlUnion>>
export type GetBackgroundsMiddleware = Middleware<ApiResponse<api.GetBackgroundsParams, api.BackgroundsUnion>>
export type GetBankCardInfoMiddleware = Middleware<ApiResponse<api.GetBankCardInfoParams, api.BankCardInfoUnion>>
export type GetBasicGroupMiddleware = Middleware<ApiResponse<api.GetBasicGroupParams, api.BasicGroupUnion>>
export type GetBasicGroupFullInfoMiddleware = Middleware<ApiResponse<api.GetBasicGroupFullInfoParams, api.BasicGroupFullInfoUnion>>
export type GetBlockedMessageSendersMiddleware = Middleware<ApiResponse<api.GetBlockedMessageSendersParams, api.MessageSendersUnion>>
export type GetCallbackQueryAnswerMiddleware = Middleware<ApiResponse<api.GetCallbackQueryAnswerParams, api.CallbackQueryAnswerUnion>>
export type GetCallbackQueryMessageMiddleware = Middleware<ApiResponse<api.GetCallbackQueryMessageParams, api.MessageUnion>>
export type GetChatMiddleware = Middleware<ApiResponse<api.GetChatParams, api.ChatUnion>>
export type GetChatAdministratorsMiddleware = Middleware<ApiResponse<api.GetChatAdministratorsParams, api.ChatAdministratorsUnion>>
export type GetChatEventLogMiddleware = Middleware<ApiResponse<api.GetChatEventLogParams, api.ChatEventsUnion>>
export type GetChatFilterMiddleware = Middleware<ApiResponse<api.GetChatFilterParams, api.ChatFilterUnion>>
export type GetChatFilterDefaultIconNameMiddleware = Middleware<ApiResponse<api.GetChatFilterDefaultIconNameParams, api.TextUnion>>
export type GetChatHistoryMiddleware = Middleware<ApiResponse<api.GetChatHistoryParams, api.MessagesUnion>>
export type GetChatListsToAddChatMiddleware = Middleware<ApiResponse<api.GetChatListsToAddChatParams, api.ChatListsUnion>>
export type GetChatMemberMiddleware = Middleware<ApiResponse<api.GetChatMemberParams, api.ChatMemberUnion>>
export type GetChatMessageByDateMiddleware = Middleware<ApiResponse<api.GetChatMessageByDateParams, api.MessageUnion>>
export type GetChatMessageCountMiddleware = Middleware<ApiResponse<api.GetChatMessageCountParams, api.CountUnion>>
export type GetChatNotificationSettingsExceptionsMiddleware = Middleware<ApiResponse<api.GetChatNotificationSettingsExceptionsParams, api.ChatsUnion>>
export type GetChatPinnedMessageMiddleware = Middleware<ApiResponse<api.GetChatPinnedMessageParams, api.MessageUnion>>
export type GetChatScheduledMessagesMiddleware = Middleware<ApiResponse<api.GetChatScheduledMessagesParams, api.MessagesUnion>>
export type GetChatStatisticsMiddleware = Middleware<ApiResponse<api.GetChatStatisticsParams, api.ChatStatisticsUnion>>
export type GetChatStatisticsUrlMiddleware = Middleware<ApiResponse<api.GetChatStatisticsUrlParams, api.HttpUrlUnion>>
export type GetChatsMiddleware = Middleware<ApiResponse<api.GetChatsParams, api.ChatsUnion>>
export type GetConnectedWebsitesMiddleware = Middleware<ApiResponse<never, api.ConnectedWebsitesUnion>>
export type GetContactsMiddleware = Middleware<ApiResponse<never, api.UsersUnion>>
export type GetCountriesMiddleware = Middleware<ApiResponse<never, api.CountriesUnion>>
export type GetCountryCodeMiddleware = Middleware<ApiResponse<never, api.TextUnion>>
export type GetCreatedPublicChatsMiddleware = Middleware<ApiResponse<api.GetCreatedPublicChatsParams, api.ChatsUnion>>
export type GetCurrentStateMiddleware = Middleware<ApiResponse<never, api.UpdatesUnion>>
export type GetDatabaseStatisticsMiddleware = Middleware<ApiResponse<never, api.DatabaseStatisticsUnion>>
export type GetDeepLinkInfoMiddleware = Middleware<ApiResponse<api.GetDeepLinkInfoParams, api.DeepLinkInfoUnion>>
export type GetEmojiSuggestionsUrlMiddleware = Middleware<ApiResponse<api.GetEmojiSuggestionsUrlParams, api.HttpUrlUnion>>
export type GetFavoriteStickersMiddleware = Middleware<ApiResponse<never, api.StickersUnion>>
export type GetFileMiddleware = Middleware<ApiResponse<api.GetFileParams, api.FileUnion>>
export type GetFileDownloadedPrefixSizeMiddleware = Middleware<ApiResponse<api.GetFileDownloadedPrefixSizeParams, api.CountUnion>>
export type GetFileExtensionMiddleware = Middleware<ApiResponse<api.GetFileExtensionParams, api.TextUnion>>
export type GetFileMimeTypeMiddleware = Middleware<ApiResponse<api.GetFileMimeTypeParams, api.TextUnion>>
export type GetGameHighScoresMiddleware = Middleware<ApiResponse<api.GetGameHighScoresParams, api.GameHighScoresUnion>>
export type GetGroupsInCommonMiddleware = Middleware<ApiResponse<api.GetGroupsInCommonParams, api.ChatsUnion>>
export type GetImportedContactCountMiddleware = Middleware<ApiResponse<never, api.CountUnion>>
export type GetInactiveSupergroupChatsMiddleware = Middleware<ApiResponse<never, api.ChatsUnion>>
export type GetInlineGameHighScoresMiddleware = Middleware<ApiResponse<api.GetInlineGameHighScoresParams, api.GameHighScoresUnion>>
export type GetInlineQueryResultsMiddleware = Middleware<ApiResponse<api.GetInlineQueryResultsParams, api.InlineQueryResultsUnion>>
export type GetInstalledStickerSetsMiddleware = Middleware<ApiResponse<api.GetInstalledStickerSetsParams, api.StickerSetsUnion>>
export type GetInviteTextMiddleware = Middleware<ApiResponse<never, api.TextUnion>>
export type GetJsonStringMiddleware = Middleware<ApiResponse<api.GetJsonStringParams, api.TextUnion>>
export type GetJsonValueMiddleware = Middleware<ApiResponse<api.GetJsonValueParams, api.JsonValueUnion>>
export type GetLanguagePackInfoMiddleware = Middleware<ApiResponse<api.GetLanguagePackInfoParams, api.LanguagePackInfoUnion>>
export type GetLanguagePackStringMiddleware = Middleware<ApiResponse<api.GetLanguagePackStringParams, api.LanguagePackStringValueUnion>>
export type GetLanguagePackStringsMiddleware = Middleware<ApiResponse<api.GetLanguagePackStringsParams, api.LanguagePackStringsUnion>>
export type GetLocalizationTargetInfoMiddleware = Middleware<ApiResponse<api.GetLocalizationTargetInfoParams, api.LocalizationTargetInfoUnion>>
export type GetLogStreamMiddleware = Middleware<ApiResponse<never, api.LogStreamUnion>>
export type GetLogTagVerbosityLevelMiddleware = Middleware<ApiResponse<api.GetLogTagVerbosityLevelParams, api.LogVerbosityLevelUnion>>
export type GetLogTagsMiddleware = Middleware<ApiResponse<never, api.LogTagsUnion>>
export type GetLogVerbosityLevelMiddleware = Middleware<ApiResponse<never, api.LogVerbosityLevelUnion>>
export type GetLoginUrlMiddleware = Middleware<ApiResponse<api.GetLoginUrlParams, api.HttpUrlUnion>>
export type GetLoginUrlInfoMiddleware = Middleware<ApiResponse<api.GetLoginUrlInfoParams, api.LoginUrlInfoUnion>>
export type GetMapThumbnailFileMiddleware = Middleware<ApiResponse<api.GetMapThumbnailFileParams, api.FileUnion>>
export type GetMarkdownTextMiddleware = Middleware<ApiResponse<api.GetMarkdownTextParams, api.FormattedTextUnion>>
export type GetMeMiddleware = Middleware<ApiResponse<never, api.UserUnion>>
export type GetMessageMiddleware = Middleware<ApiResponse<api.GetMessageParams, api.MessageUnion>>
export type GetMessageEmbeddingCodeMiddleware = Middleware<ApiResponse<api.GetMessageEmbeddingCodeParams, api.TextUnion>>
export type GetMessageLinkMiddleware = Middleware<ApiResponse<api.GetMessageLinkParams, api.MessageLinkUnion>>
export type GetMessageLinkInfoMiddleware = Middleware<ApiResponse<api.GetMessageLinkInfoParams, api.MessageLinkInfoUnion>>
export type GetMessageLocallyMiddleware = Middleware<ApiResponse<api.GetMessageLocallyParams, api.MessageUnion>>
export type GetMessagePublicForwardsMiddleware = Middleware<ApiResponse<api.GetMessagePublicForwardsParams, api.FoundMessagesUnion>>
export type GetMessageStatisticsMiddleware = Middleware<ApiResponse<api.GetMessageStatisticsParams, api.MessageStatisticsUnion>>
export type GetMessageThreadMiddleware = Middleware<ApiResponse<api.GetMessageThreadParams, api.MessageThreadInfoUnion>>
export type GetMessageThreadHistoryMiddleware = Middleware<ApiResponse<api.GetMessageThreadHistoryParams, api.MessagesUnion>>
export type GetMessagesMiddleware = Middleware<ApiResponse<api.GetMessagesParams, api.MessagesUnion>>
export type GetNetworkStatisticsMiddleware = Middleware<ApiResponse<api.GetNetworkStatisticsParams, api.NetworkStatisticsUnion>>
export type GetOptionMiddleware = Middleware<ApiResponse<api.GetOptionParams, api.OptionValueUnion>>
export type GetPassportAuthorizationFormMiddleware = Middleware<ApiResponse<api.GetPassportAuthorizationFormParams, api.PassportAuthorizationFormUnion>>
export type GetPassportAuthorizationFormAvailableElementsMiddleware = Middleware<ApiResponse<api.GetPassportAuthorizationFormAvailableElementsParams, api.PassportElementsWithErrorsUnion>>
export type GetPassportElementMiddleware = Middleware<ApiResponse<api.GetPassportElementParams, api.PassportElementUnion>>
export type GetPasswordStateMiddleware = Middleware<ApiResponse<never, api.PasswordStateUnion>>
export type GetPaymentFormMiddleware = Middleware<ApiResponse<api.GetPaymentFormParams, api.PaymentFormUnion>>
export type GetPaymentReceiptMiddleware = Middleware<ApiResponse<api.GetPaymentReceiptParams, api.PaymentReceiptUnion>>
export type GetPhoneNumberInfoMiddleware = Middleware<ApiResponse<api.GetPhoneNumberInfoParams, api.PhoneNumberInfoUnion>>
export type GetPollVotersMiddleware = Middleware<ApiResponse<api.GetPollVotersParams, api.UsersUnion>>
export type GetPreferredCountryLanguageMiddleware = Middleware<ApiResponse<api.GetPreferredCountryLanguageParams, api.TextUnion>>
export type GetProxiesMiddleware = Middleware<ApiResponse<never, api.ProxiesUnion>>
export type GetProxyLinkMiddleware = Middleware<ApiResponse<api.GetProxyLinkParams, api.TextUnion>>
export type GetPushReceiverIdMiddleware = Middleware<ApiResponse<api.GetPushReceiverIdParams, api.PushReceiverIdUnion>>
export type GetRecentInlineBotsMiddleware = Middleware<ApiResponse<never, api.UsersUnion>>
export type GetRecentStickersMiddleware = Middleware<ApiResponse<api.GetRecentStickersParams, api.StickersUnion>>
export type GetRecentlyVisitedTMeUrlsMiddleware = Middleware<ApiResponse<api.GetRecentlyVisitedTMeUrlsParams, api.TMeUrlsUnion>>
export type GetRecommendedChatFiltersMiddleware = Middleware<ApiResponse<never, api.RecommendedChatFiltersUnion>>
export type GetRecoveryEmailAddressMiddleware = Middleware<ApiResponse<api.GetRecoveryEmailAddressParams, api.RecoveryEmailAddressUnion>>
export type GetRemoteFileMiddleware = Middleware<ApiResponse<api.GetRemoteFileParams, api.FileUnion>>
export type GetRepliedMessageMiddleware = Middleware<ApiResponse<api.GetRepliedMessageParams, api.MessageUnion>>
export type GetSavedAnimationsMiddleware = Middleware<ApiResponse<never, api.AnimationsUnion>>
export type GetSavedOrderInfoMiddleware = Middleware<ApiResponse<never, api.OrderInfoUnion>>
export type GetScopeNotificationSettingsMiddleware = Middleware<ApiResponse<api.GetScopeNotificationSettingsParams, api.ScopeNotificationSettingsUnion>>
export type GetSecretChatMiddleware = Middleware<ApiResponse<api.GetSecretChatParams, api.SecretChatUnion>>
export type GetStatisticalGraphMiddleware = Middleware<ApiResponse<api.GetStatisticalGraphParams, api.StatisticalGraphUnion>>
export type GetStickerEmojisMiddleware = Middleware<ApiResponse<api.GetStickerEmojisParams, api.EmojisUnion>>
export type GetStickerSetMiddleware = Middleware<ApiResponse<api.GetStickerSetParams, api.StickerSetUnion>>
export type GetStickersMiddleware = Middleware<ApiResponse<api.GetStickersParams, api.StickersUnion>>
export type GetStorageStatisticsMiddleware = Middleware<ApiResponse<api.GetStorageStatisticsParams, api.StorageStatisticsUnion>>
export type GetStorageStatisticsFastMiddleware = Middleware<ApiResponse<never, api.StorageStatisticsFastUnion>>
export type GetSuitableDiscussionChatsMiddleware = Middleware<ApiResponse<never, api.ChatsUnion>>
export type GetSupergroupMiddleware = Middleware<ApiResponse<api.GetSupergroupParams, api.SupergroupUnion>>
export type GetSupergroupFullInfoMiddleware = Middleware<ApiResponse<api.GetSupergroupFullInfoParams, api.SupergroupFullInfoUnion>>
export type GetSupergroupMembersMiddleware = Middleware<ApiResponse<api.GetSupergroupMembersParams, api.ChatMembersUnion>>
export type GetSupportUserMiddleware = Middleware<ApiResponse<never, api.UserUnion>>
export type GetTemporaryPasswordStateMiddleware = Middleware<ApiResponse<never, api.TemporaryPasswordStateUnion>>
export type GetTextEntitiesMiddleware = Middleware<ApiResponse<api.GetTextEntitiesParams, api.TextEntitiesUnion>>
export type GetTopChatsMiddleware = Middleware<ApiResponse<api.GetTopChatsParams, api.ChatsUnion>>
export type GetTrendingStickerSetsMiddleware = Middleware<ApiResponse<api.GetTrendingStickerSetsParams, api.StickerSetsUnion>>
export type GetUserMiddleware = Middleware<ApiResponse<api.GetUserParams, api.UserUnion>>
export type GetUserFullInfoMiddleware = Middleware<ApiResponse<api.GetUserFullInfoParams, api.UserFullInfoUnion>>
export type GetUserPrivacySettingRulesMiddleware = Middleware<ApiResponse<api.GetUserPrivacySettingRulesParams, api.UserPrivacySettingRulesUnion>>
export type GetUserProfilePhotosMiddleware = Middleware<ApiResponse<api.GetUserProfilePhotosParams, api.ChatPhotosUnion>>
export type GetWebPageInstantViewMiddleware = Middleware<ApiResponse<api.GetWebPageInstantViewParams, api.WebPageInstantViewUnion>>
export type GetWebPagePreviewMiddleware = Middleware<ApiResponse<api.GetWebPagePreviewParams, api.WebPageUnion>>
export type HideSuggestedActionMiddleware = Middleware<ApiResponse<api.HideSuggestedActionParams, api.OkUnion>>
export type ImportContactsMiddleware = Middleware<ApiResponse<api.ImportContactsParams, api.ImportedContactsUnion>>
export type JoinChatMiddleware = Middleware<ApiResponse<api.JoinChatParams, api.OkUnion>>
export type JoinChatByInviteLinkMiddleware = Middleware<ApiResponse<api.JoinChatByInviteLinkParams, api.ChatUnion>>
export type LeaveChatMiddleware = Middleware<ApiResponse<api.LeaveChatParams, api.OkUnion>>
export type LogOutMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type OpenChatMiddleware = Middleware<ApiResponse<api.OpenChatParams, api.OkUnion>>
export type OpenMessageContentMiddleware = Middleware<ApiResponse<api.OpenMessageContentParams, api.OkUnion>>
export type OptimizeStorageMiddleware = Middleware<ApiResponse<api.OptimizeStorageParams, api.StorageStatisticsUnion>>
export type ParseMarkdownMiddleware = Middleware<ApiResponse<api.ParseMarkdownParams, api.FormattedTextUnion>>
export type ParseTextEntitiesMiddleware = Middleware<ApiResponse<api.ParseTextEntitiesParams, api.FormattedTextUnion>>
export type PinChatMessageMiddleware = Middleware<ApiResponse<api.PinChatMessageParams, api.OkUnion>>
export type PingProxyMiddleware = Middleware<ApiResponse<api.PingProxyParams, api.SecondsUnion>>
export type ProcessPushNotificationMiddleware = Middleware<ApiResponse<api.ProcessPushNotificationParams, api.OkUnion>>
export type ReadAllChatMentionsMiddleware = Middleware<ApiResponse<api.ReadAllChatMentionsParams, api.OkUnion>>
export type ReadFilePartMiddleware = Middleware<ApiResponse<api.ReadFilePartParams, api.FilePartUnion>>
export type RecoverAuthenticationPasswordMiddleware = Middleware<ApiResponse<api.RecoverAuthenticationPasswordParams, api.OkUnion>>
export type RecoverPasswordMiddleware = Middleware<ApiResponse<api.RecoverPasswordParams, api.PasswordStateUnion>>
export type RegisterDeviceMiddleware = Middleware<ApiResponse<api.RegisterDeviceParams, api.PushReceiverIdUnion>>
export type RegisterUserMiddleware = Middleware<ApiResponse<api.RegisterUserParams, api.OkUnion>>
export type RemoveBackgroundMiddleware = Middleware<ApiResponse<api.RemoveBackgroundParams, api.OkUnion>>
export type RemoveChatActionBarMiddleware = Middleware<ApiResponse<api.RemoveChatActionBarParams, api.OkUnion>>
export type RemoveContactsMiddleware = Middleware<ApiResponse<api.RemoveContactsParams, api.OkUnion>>
export type RemoveFavoriteStickerMiddleware = Middleware<ApiResponse<api.RemoveFavoriteStickerParams, api.OkUnion>>
export type RemoveNotificationMiddleware = Middleware<ApiResponse<api.RemoveNotificationParams, api.OkUnion>>
export type RemoveNotificationGroupMiddleware = Middleware<ApiResponse<api.RemoveNotificationGroupParams, api.OkUnion>>
export type RemoveProxyMiddleware = Middleware<ApiResponse<api.RemoveProxyParams, api.OkUnion>>
export type RemoveRecentHashtagMiddleware = Middleware<ApiResponse<api.RemoveRecentHashtagParams, api.OkUnion>>
export type RemoveRecentStickerMiddleware = Middleware<ApiResponse<api.RemoveRecentStickerParams, api.OkUnion>>
export type RemoveRecentlyFoundChatMiddleware = Middleware<ApiResponse<api.RemoveRecentlyFoundChatParams, api.OkUnion>>
export type RemoveSavedAnimationMiddleware = Middleware<ApiResponse<api.RemoveSavedAnimationParams, api.OkUnion>>
export type RemoveStickerFromSetMiddleware = Middleware<ApiResponse<api.RemoveStickerFromSetParams, api.OkUnion>>
export type RemoveTopChatMiddleware = Middleware<ApiResponse<api.RemoveTopChatParams, api.OkUnion>>
export type ReorderChatFiltersMiddleware = Middleware<ApiResponse<api.ReorderChatFiltersParams, api.OkUnion>>
export type ReorderInstalledStickerSetsMiddleware = Middleware<ApiResponse<api.ReorderInstalledStickerSetsParams, api.OkUnion>>
export type ReportChatMiddleware = Middleware<ApiResponse<api.ReportChatParams, api.OkUnion>>
export type ReportSupergroupSpamMiddleware = Middleware<ApiResponse<api.ReportSupergroupSpamParams, api.OkUnion>>
export type RequestAuthenticationPasswordRecoveryMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type RequestPasswordRecoveryMiddleware = Middleware<ApiResponse<never, api.EmailAddressAuthenticationCodeInfoUnion>>
export type RequestQrCodeAuthenticationMiddleware = Middleware<ApiResponse<api.RequestQrCodeAuthenticationParams, api.OkUnion>>
export type ResendAuthenticationCodeMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type ResendChangePhoneNumberCodeMiddleware = Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion>>
export type ResendEmailAddressVerificationCodeMiddleware = Middleware<ApiResponse<never, api.EmailAddressAuthenticationCodeInfoUnion>>
export type ResendMessagesMiddleware = Middleware<ApiResponse<api.ResendMessagesParams, api.MessagesUnion>>
export type ResendPhoneNumberConfirmationCodeMiddleware = Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion>>
export type ResendPhoneNumberVerificationCodeMiddleware = Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion>>
export type ResendRecoveryEmailAddressCodeMiddleware = Middleware<ApiResponse<never, api.PasswordStateUnion>>
export type ResetAllNotificationSettingsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type ResetBackgroundsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type ResetNetworkStatisticsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type SaveApplicationLogEventMiddleware = Middleware<ApiResponse<api.SaveApplicationLogEventParams, api.OkUnion>>
export type SearchBackgroundMiddleware = Middleware<ApiResponse<api.SearchBackgroundParams, api.BackgroundUnion>>
export type SearchCallMessagesMiddleware = Middleware<ApiResponse<api.SearchCallMessagesParams, api.MessagesUnion>>
export type SearchChatMembersMiddleware = Middleware<ApiResponse<api.SearchChatMembersParams, api.ChatMembersUnion>>
export type SearchChatMessagesMiddleware = Middleware<ApiResponse<api.SearchChatMessagesParams, api.MessagesUnion>>
export type SearchChatRecentLocationMessagesMiddleware = Middleware<ApiResponse<api.SearchChatRecentLocationMessagesParams, api.MessagesUnion>>
export type SearchChatsMiddleware = Middleware<ApiResponse<api.SearchChatsParams, api.ChatsUnion>>
export type SearchChatsNearbyMiddleware = Middleware<ApiResponse<api.SearchChatsNearbyParams, api.ChatsNearbyUnion>>
export type SearchChatsOnServerMiddleware = Middleware<ApiResponse<api.SearchChatsOnServerParams, api.ChatsUnion>>
export type SearchContactsMiddleware = Middleware<ApiResponse<api.SearchContactsParams, api.UsersUnion>>
export type SearchEmojisMiddleware = Middleware<ApiResponse<api.SearchEmojisParams, api.EmojisUnion>>
export type SearchHashtagsMiddleware = Middleware<ApiResponse<api.SearchHashtagsParams, api.HashtagsUnion>>
export type SearchInstalledStickerSetsMiddleware = Middleware<ApiResponse<api.SearchInstalledStickerSetsParams, api.StickerSetsUnion>>
export type SearchMessagesMiddleware = Middleware<ApiResponse<api.SearchMessagesParams, api.MessagesUnion>>
export type SearchPublicChatMiddleware = Middleware<ApiResponse<api.SearchPublicChatParams, api.ChatUnion>>
export type SearchPublicChatsMiddleware = Middleware<ApiResponse<api.SearchPublicChatsParams, api.ChatsUnion>>
export type SearchSecretMessagesMiddleware = Middleware<ApiResponse<api.SearchSecretMessagesParams, api.FoundMessagesUnion>>
export type SearchStickerSetMiddleware = Middleware<ApiResponse<api.SearchStickerSetParams, api.StickerSetUnion>>
export type SearchStickerSetsMiddleware = Middleware<ApiResponse<api.SearchStickerSetsParams, api.StickerSetsUnion>>
export type SearchStickersMiddleware = Middleware<ApiResponse<api.SearchStickersParams, api.StickersUnion>>
export type SendBotStartMessageMiddleware = Middleware<ApiResponse<api.SendBotStartMessageParams, api.MessageUnion>>
export type SendCallDebugInformationMiddleware = Middleware<ApiResponse<api.SendCallDebugInformationParams, api.OkUnion>>
export type SendCallRatingMiddleware = Middleware<ApiResponse<api.SendCallRatingParams, api.OkUnion>>
export type SendCallSignalingDataMiddleware = Middleware<ApiResponse<api.SendCallSignalingDataParams, api.OkUnion>>
export type SendChatActionMiddleware = Middleware<ApiResponse<api.SendChatActionParams, api.OkUnion>>
export type SendChatScreenshotTakenNotificationMiddleware = Middleware<ApiResponse<api.SendChatScreenshotTakenNotificationParams, api.OkUnion>>
export type SendChatSetTtlMessageMiddleware = Middleware<ApiResponse<api.SendChatSetTtlMessageParams, api.MessageUnion>>
export type SendCustomRequestMiddleware = Middleware<ApiResponse<api.SendCustomRequestParams, api.CustomRequestResultUnion>>
export type SendEmailAddressVerificationCodeMiddleware = Middleware<ApiResponse<api.SendEmailAddressVerificationCodeParams, api.EmailAddressAuthenticationCodeInfoUnion>>
export type SendInlineQueryResultMessageMiddleware = Middleware<ApiResponse<api.SendInlineQueryResultMessageParams, api.MessageUnion>>
export type SendMessageMiddleware = Middleware<ApiResponse<api.SendMessageParams, api.MessageUnion>>
export type SendMessageAlbumMiddleware = Middleware<ApiResponse<api.SendMessageAlbumParams, api.MessagesUnion>>
export type SendPassportAuthorizationFormMiddleware = Middleware<ApiResponse<api.SendPassportAuthorizationFormParams, api.OkUnion>>
export type SendPaymentFormMiddleware = Middleware<ApiResponse<api.SendPaymentFormParams, api.PaymentResultUnion>>
export type SendPhoneNumberConfirmationCodeMiddleware = Middleware<ApiResponse<api.SendPhoneNumberConfirmationCodeParams, api.AuthenticationCodeInfoUnion>>
export type SendPhoneNumberVerificationCodeMiddleware = Middleware<ApiResponse<api.SendPhoneNumberVerificationCodeParams, api.AuthenticationCodeInfoUnion>>
export type SetAccountTtlMiddleware = Middleware<ApiResponse<api.SetAccountTtlParams, api.OkUnion>>
export type SetAlarmMiddleware = Middleware<ApiResponse<api.SetAlarmParams, api.OkUnion>>
export type SetAuthenticationPhoneNumberMiddleware = Middleware<ApiResponse<api.SetAuthenticationPhoneNumberParams, api.OkUnion>>
export type SetAutoDownloadSettingsMiddleware = Middleware<ApiResponse<api.SetAutoDownloadSettingsParams, api.OkUnion>>
export type SetBackgroundMiddleware = Middleware<ApiResponse<api.SetBackgroundParams, api.BackgroundUnion>>
export type SetBioMiddleware = Middleware<ApiResponse<api.SetBioParams, api.OkUnion>>
export type SetBotUpdatesStatusMiddleware = Middleware<ApiResponse<api.SetBotUpdatesStatusParams, api.OkUnion>>
export type SetChatClientDataMiddleware = Middleware<ApiResponse<api.SetChatClientDataParams, api.OkUnion>>
export type SetChatDescriptionMiddleware = Middleware<ApiResponse<api.SetChatDescriptionParams, api.OkUnion>>
export type SetChatDiscussionGroupMiddleware = Middleware<ApiResponse<api.SetChatDiscussionGroupParams, api.OkUnion>>
export type SetChatDraftMessageMiddleware = Middleware<ApiResponse<api.SetChatDraftMessageParams, api.OkUnion>>
export type SetChatLocationMiddleware = Middleware<ApiResponse<api.SetChatLocationParams, api.OkUnion>>
export type SetChatMemberStatusMiddleware = Middleware<ApiResponse<api.SetChatMemberStatusParams, api.OkUnion>>
export type SetChatNotificationSettingsMiddleware = Middleware<ApiResponse<api.SetChatNotificationSettingsParams, api.OkUnion>>
export type SetChatPermissionsMiddleware = Middleware<ApiResponse<api.SetChatPermissionsParams, api.OkUnion>>
export type SetChatPhotoMiddleware = Middleware<ApiResponse<api.SetChatPhotoParams, api.OkUnion>>
export type SetChatSlowModeDelayMiddleware = Middleware<ApiResponse<api.SetChatSlowModeDelayParams, api.OkUnion>>
export type SetChatTitleMiddleware = Middleware<ApiResponse<api.SetChatTitleParams, api.OkUnion>>
export type SetCommandsMiddleware = Middleware<ApiResponse<api.SetCommandsParams, api.OkUnion>>
export type SetCustomLanguagePackMiddleware = Middleware<ApiResponse<api.SetCustomLanguagePackParams, api.OkUnion>>
export type SetCustomLanguagePackStringMiddleware = Middleware<ApiResponse<api.SetCustomLanguagePackStringParams, api.OkUnion>>
export type SetDatabaseEncryptionKeyMiddleware = Middleware<ApiResponse<api.SetDatabaseEncryptionKeyParams, api.OkUnion>>
export type SetFileGenerationProgressMiddleware = Middleware<ApiResponse<api.SetFileGenerationProgressParams, api.OkUnion>>
export type SetGameScoreMiddleware = Middleware<ApiResponse<api.SetGameScoreParams, api.MessageUnion>>
export type SetInlineGameScoreMiddleware = Middleware<ApiResponse<api.SetInlineGameScoreParams, api.OkUnion>>
export type SetLocationMiddleware = Middleware<ApiResponse<api.SetLocationParams, api.OkUnion>>
export type SetLogStreamMiddleware = Middleware<ApiResponse<api.SetLogStreamParams, api.OkUnion>>
export type SetLogTagVerbosityLevelMiddleware = Middleware<ApiResponse<api.SetLogTagVerbosityLevelParams, api.OkUnion>>
export type SetLogVerbosityLevelMiddleware = Middleware<ApiResponse<api.SetLogVerbosityLevelParams, api.OkUnion>>
export type SetNameMiddleware = Middleware<ApiResponse<api.SetNameParams, api.OkUnion>>
export type SetNetworkTypeMiddleware = Middleware<ApiResponse<api.SetNetworkTypeParams, api.OkUnion>>
export type SetOptionMiddleware = Middleware<ApiResponse<api.SetOptionParams, api.OkUnion>>
export type SetPassportElementMiddleware = Middleware<ApiResponse<api.SetPassportElementParams, api.PassportElementUnion>>
export type SetPassportElementErrorsMiddleware = Middleware<ApiResponse<api.SetPassportElementErrorsParams, api.OkUnion>>
export type SetPasswordMiddleware = Middleware<ApiResponse<api.SetPasswordParams, api.PasswordStateUnion>>
export type SetPinnedChatsMiddleware = Middleware<ApiResponse<api.SetPinnedChatsParams, api.OkUnion>>
export type SetPollAnswerMiddleware = Middleware<ApiResponse<api.SetPollAnswerParams, api.OkUnion>>
export type SetProfilePhotoMiddleware = Middleware<ApiResponse<api.SetProfilePhotoParams, api.OkUnion>>
export type SetRecoveryEmailAddressMiddleware = Middleware<ApiResponse<api.SetRecoveryEmailAddressParams, api.PasswordStateUnion>>
export type SetScopeNotificationSettingsMiddleware = Middleware<ApiResponse<api.SetScopeNotificationSettingsParams, api.OkUnion>>
export type SetStickerPositionInSetMiddleware = Middleware<ApiResponse<api.SetStickerPositionInSetParams, api.OkUnion>>
export type SetStickerSetThumbnailMiddleware = Middleware<ApiResponse<api.SetStickerSetThumbnailParams, api.StickerSetUnion>>
export type SetSupergroupStickerSetMiddleware = Middleware<ApiResponse<api.SetSupergroupStickerSetParams, api.OkUnion>>
export type SetSupergroupUsernameMiddleware = Middleware<ApiResponse<api.SetSupergroupUsernameParams, api.OkUnion>>
export type SetTdlibParametersMiddleware = Middleware<ApiResponse<api.SetTdlibParametersParams, api.OkUnion>>
export type SetUserPrivacySettingRulesMiddleware = Middleware<ApiResponse<api.SetUserPrivacySettingRulesParams, api.OkUnion>>
export type SetUsernameMiddleware = Middleware<ApiResponse<api.SetUsernameParams, api.OkUnion>>
export type SharePhoneNumberMiddleware = Middleware<ApiResponse<api.SharePhoneNumberParams, api.OkUnion>>
export type StopPollMiddleware = Middleware<ApiResponse<api.StopPollParams, api.OkUnion>>
export type SynchronizeLanguagePackMiddleware = Middleware<ApiResponse<api.SynchronizeLanguagePackParams, api.OkUnion>>
export type TerminateAllOtherSessionsMiddleware = Middleware<ApiResponse<never, api.OkUnion>>
export type TerminateSessionMiddleware = Middleware<ApiResponse<api.TerminateSessionParams, api.OkUnion>>
export type ToggleChatDefaultDisableNotificationMiddleware = Middleware<ApiResponse<api.ToggleChatDefaultDisableNotificationParams, api.OkUnion>>
export type ToggleChatIsMarkedAsUnreadMiddleware = Middleware<ApiResponse<api.ToggleChatIsMarkedAsUnreadParams, api.OkUnion>>
export type ToggleChatIsPinnedMiddleware = Middleware<ApiResponse<api.ToggleChatIsPinnedParams, api.OkUnion>>
export type ToggleMessageSenderIsBlockedMiddleware = Middleware<ApiResponse<api.ToggleMessageSenderIsBlockedParams, api.OkUnion>>
export type ToggleSupergroupIsAllHistoryAvailableMiddleware = Middleware<ApiResponse<api.ToggleSupergroupIsAllHistoryAvailableParams, api.OkUnion>>
export type ToggleSupergroupSignMessagesMiddleware = Middleware<ApiResponse<api.ToggleSupergroupSignMessagesParams, api.OkUnion>>
export type TransferChatOwnershipMiddleware = Middleware<ApiResponse<api.TransferChatOwnershipParams, api.OkUnion>>
export type UnpinAllChatMessagesMiddleware = Middleware<ApiResponse<api.UnpinAllChatMessagesParams, api.OkUnion>>
export type UnpinChatMessageMiddleware = Middleware<ApiResponse<api.UnpinChatMessageParams, api.OkUnion>>
export type UpgradeBasicGroupChatToSupergroupChatMiddleware = Middleware<ApiResponse<api.UpgradeBasicGroupChatToSupergroupChatParams, api.ChatUnion>>
export type UploadFileMiddleware = Middleware<ApiResponse<api.UploadFileParams, api.FileUnion>>
export type UploadStickerFileMiddleware = Middleware<ApiResponse<api.UploadStickerFileParams, api.FileUnion>>
export type ValidateOrderInfoMiddleware = Middleware<ApiResponse<api.ValidateOrderInfoParams, api.ValidatedOrderInfoUnion>>
export type ViewMessagesMiddleware = Middleware<ApiResponse<api.ViewMessagesParams, api.OkUnion>>
export type ViewTrendingStickerSetsMiddleware = Middleware<ApiResponse<api.ViewTrendingStickerSetsParams, api.OkUnion>>
export type WriteGeneratedFilePartMiddleware = Middleware<ApiResponse<api.WriteGeneratedFilePartParams, api.OkUnion>>
export type UpdateAuthorizationStateMiddleware = Middleware<UpdateContext<api.UpdateAuthorizationState>>
export type UpdateNewMessageMiddleware = Middleware<UpdateContext<api.UpdateNewMessage>>
export type UpdateMessageSendAcknowledgedMiddleware = Middleware<UpdateContext<api.UpdateMessageSendAcknowledged>>
export type UpdateMessageSendSucceededMiddleware = Middleware<UpdateContext<api.UpdateMessageSendSucceeded>>
export type UpdateMessageSendFailedMiddleware = Middleware<UpdateContext<api.UpdateMessageSendFailed>>
export type UpdateMessageContentMiddleware = Middleware<UpdateContext<api.UpdateMessageContent>>
export type UpdateMessageEditedMiddleware = Middleware<UpdateContext<api.UpdateMessageEdited>>
export type UpdateMessageIsPinnedMiddleware = Middleware<UpdateContext<api.UpdateMessageIsPinned>>
export type UpdateMessageInteractionInfoMiddleware = Middleware<UpdateContext<api.UpdateMessageInteractionInfo>>
export type UpdateMessageContentOpenedMiddleware = Middleware<UpdateContext<api.UpdateMessageContentOpened>>
export type UpdateMessageMentionReadMiddleware = Middleware<UpdateContext<api.UpdateMessageMentionRead>>
export type UpdateMessageLiveLocationViewedMiddleware = Middleware<UpdateContext<api.UpdateMessageLiveLocationViewed>>
export type UpdateNewChatMiddleware = Middleware<UpdateContext<api.UpdateNewChat>>
export type UpdateChatTitleMiddleware = Middleware<UpdateContext<api.UpdateChatTitle>>
export type UpdateChatPhotoMiddleware = Middleware<UpdateContext<api.UpdateChatPhoto>>
export type UpdateChatPermissionsMiddleware = Middleware<UpdateContext<api.UpdateChatPermissions>>
export type UpdateChatLastMessageMiddleware = Middleware<UpdateContext<api.UpdateChatLastMessage>>
export type UpdateChatPositionMiddleware = Middleware<UpdateContext<api.UpdateChatPosition>>
export type UpdateChatIsMarkedAsUnreadMiddleware = Middleware<UpdateContext<api.UpdateChatIsMarkedAsUnread>>
export type UpdateChatIsBlockedMiddleware = Middleware<UpdateContext<api.UpdateChatIsBlocked>>
export type UpdateChatHasScheduledMessagesMiddleware = Middleware<UpdateContext<api.UpdateChatHasScheduledMessages>>
export type UpdateChatDefaultDisableNotificationMiddleware = Middleware<UpdateContext<api.UpdateChatDefaultDisableNotification>>
export type UpdateChatReadInboxMiddleware = Middleware<UpdateContext<api.UpdateChatReadInbox>>
export type UpdateChatReadOutboxMiddleware = Middleware<UpdateContext<api.UpdateChatReadOutbox>>
export type UpdateChatUnreadMentionCountMiddleware = Middleware<UpdateContext<api.UpdateChatUnreadMentionCount>>
export type UpdateChatNotificationSettingsMiddleware = Middleware<UpdateContext<api.UpdateChatNotificationSettings>>
export type UpdateScopeNotificationSettingsMiddleware = Middleware<UpdateContext<api.UpdateScopeNotificationSettings>>
export type UpdateChatActionBarMiddleware = Middleware<UpdateContext<api.UpdateChatActionBar>>
export type UpdateChatReplyMarkupMiddleware = Middleware<UpdateContext<api.UpdateChatReplyMarkup>>
export type UpdateChatDraftMessageMiddleware = Middleware<UpdateContext<api.UpdateChatDraftMessage>>
export type UpdateChatFiltersMiddleware = Middleware<UpdateContext<api.UpdateChatFilters>>
export type UpdateChatOnlineMemberCountMiddleware = Middleware<UpdateContext<api.UpdateChatOnlineMemberCount>>
export type UpdateNotificationMiddleware = Middleware<UpdateContext<api.UpdateNotification>>
export type UpdateNotificationGroupMiddleware = Middleware<UpdateContext<api.UpdateNotificationGroup>>
export type UpdateActiveNotificationsMiddleware = Middleware<UpdateContext<api.UpdateActiveNotifications>>
export type UpdateHavePendingNotificationsMiddleware = Middleware<UpdateContext<api.UpdateHavePendingNotifications>>
export type UpdateDeleteMessagesMiddleware = Middleware<UpdateContext<api.UpdateDeleteMessages>>
export type UpdateUserChatActionMiddleware = Middleware<UpdateContext<api.UpdateUserChatAction>>
export type UpdateUserStatusMiddleware = Middleware<UpdateContext<api.UpdateUserStatus>>
export type UpdateUserMiddleware = Middleware<UpdateContext<api.UpdateUser>>
export type UpdateBasicGroupMiddleware = Middleware<UpdateContext<api.UpdateBasicGroup>>
export type UpdateSupergroupMiddleware = Middleware<UpdateContext<api.UpdateSupergroup>>
export type UpdateSecretChatMiddleware = Middleware<UpdateContext<api.UpdateSecretChat>>
export type UpdateUserFullInfoMiddleware = Middleware<UpdateContext<api.UpdateUserFullInfo>>
export type UpdateBasicGroupFullInfoMiddleware = Middleware<UpdateContext<api.UpdateBasicGroupFullInfo>>
export type UpdateSupergroupFullInfoMiddleware = Middleware<UpdateContext<api.UpdateSupergroupFullInfo>>
export type UpdateServiceNotificationMiddleware = Middleware<UpdateContext<api.UpdateServiceNotification>>
export type UpdateFileMiddleware = Middleware<UpdateContext<api.UpdateFile>>
export type UpdateFileGenerationStartMiddleware = Middleware<UpdateContext<api.UpdateFileGenerationStart>>
export type UpdateFileGenerationStopMiddleware = Middleware<UpdateContext<api.UpdateFileGenerationStop>>
export type UpdateCallMiddleware = Middleware<UpdateContext<api.UpdateCall>>
export type UpdateNewCallSignalingDataMiddleware = Middleware<UpdateContext<api.UpdateNewCallSignalingData>>
export type UpdateUserPrivacySettingRulesMiddleware = Middleware<UpdateContext<api.UpdateUserPrivacySettingRules>>
export type UpdateUnreadMessageCountMiddleware = Middleware<UpdateContext<api.UpdateUnreadMessageCount>>
export type UpdateUnreadChatCountMiddleware = Middleware<UpdateContext<api.UpdateUnreadChatCount>>
export type UpdateOptionMiddleware = Middleware<UpdateContext<api.UpdateOption>>
export type UpdateStickerSetMiddleware = Middleware<UpdateContext<api.UpdateStickerSet>>
export type UpdateInstalledStickerSetsMiddleware = Middleware<UpdateContext<api.UpdateInstalledStickerSets>>
export type UpdateTrendingStickerSetsMiddleware = Middleware<UpdateContext<api.UpdateTrendingStickerSets>>
export type UpdateRecentStickersMiddleware = Middleware<UpdateContext<api.UpdateRecentStickers>>
export type UpdateFavoriteStickersMiddleware = Middleware<UpdateContext<api.UpdateFavoriteStickers>>
export type UpdateSavedAnimationsMiddleware = Middleware<UpdateContext<api.UpdateSavedAnimations>>
export type UpdateSelectedBackgroundMiddleware = Middleware<UpdateContext<api.UpdateSelectedBackground>>
export type UpdateLanguagePackStringsMiddleware = Middleware<UpdateContext<api.UpdateLanguagePackStrings>>
export type UpdateConnectionStateMiddleware = Middleware<UpdateContext<api.UpdateConnectionState>>
export type UpdateTermsOfServiceMiddleware = Middleware<UpdateContext<api.UpdateTermsOfService>>
export type UpdateUsersNearbyMiddleware = Middleware<UpdateContext<api.UpdateUsersNearby>>
export type UpdateDiceEmojisMiddleware = Middleware<UpdateContext<api.UpdateDiceEmojis>>
export type UpdateAnimationSearchParametersMiddleware = Middleware<UpdateContext<api.UpdateAnimationSearchParameters>>
export type UpdateSuggestedActionsMiddleware = Middleware<UpdateContext<api.UpdateSuggestedActions>>
export type UpdateNewInlineQueryMiddleware = Middleware<UpdateContext<api.UpdateNewInlineQuery>>
export type UpdateNewChosenInlineResultMiddleware = Middleware<UpdateContext<api.UpdateNewChosenInlineResult>>
export type UpdateNewCallbackQueryMiddleware = Middleware<UpdateContext<api.UpdateNewCallbackQuery>>
export type UpdateNewInlineCallbackQueryMiddleware = Middleware<UpdateContext<api.UpdateNewInlineCallbackQuery>>
export type UpdateNewShippingQueryMiddleware = Middleware<UpdateContext<api.UpdateNewShippingQuery>>
export type UpdateNewPreCheckoutQueryMiddleware = Middleware<UpdateContext<api.UpdateNewPreCheckoutQuery>>
export type UpdateNewCustomEventMiddleware = Middleware<UpdateContext<api.UpdateNewCustomEvent>>
export type UpdateNewCustomQueryMiddleware = Middleware<UpdateContext<api.UpdateNewCustomQuery>>
export type UpdatePollMiddleware = Middleware<UpdateContext<api.UpdatePoll>>
export type UpdatePollAnswerMiddleware = Middleware<UpdateContext<api.UpdatePollAnswer>>
export interface MiddlewareOn<ReturnT = void> {
  // API
  (predicateTypes: 'acceptCall', ...fns: AcceptCallMiddleware[]): ReturnT
  (predicateTypes: 'acceptTermsOfService', ...fns: AcceptTermsOfServiceMiddleware[]): ReturnT
  (predicateTypes: 'addChatMember', ...fns: AddChatMemberMiddleware[]): ReturnT
  (predicateTypes: 'addChatMembers', ...fns: AddChatMembersMiddleware[]): ReturnT
  (predicateTypes: 'addChatToList', ...fns: AddChatToListMiddleware[]): ReturnT
  (predicateTypes: 'addContact', ...fns: AddContactMiddleware[]): ReturnT
  (predicateTypes: 'addCustomServerLanguagePack', ...fns: AddCustomServerLanguagePackMiddleware[]): ReturnT
  (predicateTypes: 'addFavoriteSticker', ...fns: AddFavoriteStickerMiddleware[]): ReturnT
  (predicateTypes: 'addLocalMessage', ...fns: AddLocalMessageMiddleware[]): ReturnT
  (predicateTypes: 'addLogMessage', ...fns: AddLogMessageMiddleware[]): ReturnT
  (predicateTypes: 'addNetworkStatistics', ...fns: AddNetworkStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'addProxy', ...fns: AddProxyMiddleware[]): ReturnT
  (predicateTypes: 'addRecentSticker', ...fns: AddRecentStickerMiddleware[]): ReturnT
  (predicateTypes: 'addRecentlyFoundChat', ...fns: AddRecentlyFoundChatMiddleware[]): ReturnT
  (predicateTypes: 'addSavedAnimation', ...fns: AddSavedAnimationMiddleware[]): ReturnT
  (predicateTypes: 'addStickerToSet', ...fns: AddStickerToSetMiddleware[]): ReturnT
  (predicateTypes: 'answerCallbackQuery', ...fns: AnswerCallbackQueryMiddleware[]): ReturnT
  (predicateTypes: 'answerCustomQuery', ...fns: AnswerCustomQueryMiddleware[]): ReturnT
  (predicateTypes: 'answerInlineQuery', ...fns: AnswerInlineQueryMiddleware[]): ReturnT
  (predicateTypes: 'answerPreCheckoutQuery', ...fns: AnswerPreCheckoutQueryMiddleware[]): ReturnT
  (predicateTypes: 'answerShippingQuery', ...fns: AnswerShippingQueryMiddleware[]): ReturnT
  (predicateTypes: 'blockMessageSenderFromReplies', ...fns: BlockMessageSenderFromRepliesMiddleware[]): ReturnT
  (predicateTypes: 'canTransferOwnership', ...fns: CanTransferOwnershipMiddleware[]): ReturnT
  (predicateTypes: 'cancelDownloadFile', ...fns: CancelDownloadFileMiddleware[]): ReturnT
  (predicateTypes: 'cancelUploadFile', ...fns: CancelUploadFileMiddleware[]): ReturnT
  (predicateTypes: 'changeImportedContacts', ...fns: ChangeImportedContactsMiddleware[]): ReturnT
  (predicateTypes: 'changePhoneNumber', ...fns: ChangePhoneNumberMiddleware[]): ReturnT
  (predicateTypes: 'changeStickerSet', ...fns: ChangeStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'checkAuthenticationBotToken', ...fns: CheckAuthenticationBotTokenMiddleware[]): ReturnT
  (predicateTypes: 'checkAuthenticationCode', ...fns: CheckAuthenticationCodeMiddleware[]): ReturnT
  (predicateTypes: 'checkAuthenticationPassword', ...fns: CheckAuthenticationPasswordMiddleware[]): ReturnT
  (predicateTypes: 'checkChangePhoneNumberCode', ...fns: CheckChangePhoneNumberCodeMiddleware[]): ReturnT
  (predicateTypes: 'checkChatInviteLink', ...fns: CheckChatInviteLinkMiddleware[]): ReturnT
  (predicateTypes: 'checkChatUsername', ...fns: CheckChatUsernameMiddleware[]): ReturnT
  (predicateTypes: 'checkCreatedPublicChatsLimit', ...fns: CheckCreatedPublicChatsLimitMiddleware[]): ReturnT
  (predicateTypes: 'checkDatabaseEncryptionKey', ...fns: CheckDatabaseEncryptionKeyMiddleware[]): ReturnT
  (predicateTypes: 'checkEmailAddressVerificationCode', ...fns: CheckEmailAddressVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'checkPhoneNumberConfirmationCode', ...fns: CheckPhoneNumberConfirmationCodeMiddleware[]): ReturnT
  (predicateTypes: 'checkPhoneNumberVerificationCode', ...fns: CheckPhoneNumberVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'checkRecoveryEmailAddressCode', ...fns: CheckRecoveryEmailAddressCodeMiddleware[]): ReturnT
  (predicateTypes: 'cleanFileName', ...fns: CleanFileNameMiddleware[]): ReturnT
  (predicateTypes: 'clearAllDraftMessages', ...fns: ClearAllDraftMessagesMiddleware[]): ReturnT
  (predicateTypes: 'clearImportedContacts', ...fns: ClearImportedContactsMiddleware[]): ReturnT
  (predicateTypes: 'clearRecentStickers', ...fns: ClearRecentStickersMiddleware[]): ReturnT
  (predicateTypes: 'clearRecentlyFoundChats', ...fns: ClearRecentlyFoundChatsMiddleware[]): ReturnT
  (predicateTypes: 'close', ...fns: CloseMiddleware[]): ReturnT
  (predicateTypes: 'closeChat', ...fns: CloseChatMiddleware[]): ReturnT
  (predicateTypes: 'closeSecretChat', ...fns: CloseSecretChatMiddleware[]): ReturnT
  (predicateTypes: 'confirmQrCodeAuthentication', ...fns: ConfirmQrCodeAuthenticationMiddleware[]): ReturnT
  (predicateTypes: 'createBasicGroupChat', ...fns: CreateBasicGroupChatMiddleware[]): ReturnT
  (predicateTypes: 'createCall', ...fns: CreateCallMiddleware[]): ReturnT
  (predicateTypes: 'createChatFilter', ...fns: CreateChatFilterMiddleware[]): ReturnT
  (predicateTypes: 'createNewBasicGroupChat', ...fns: CreateNewBasicGroupChatMiddleware[]): ReturnT
  (predicateTypes: 'createNewSecretChat', ...fns: CreateNewSecretChatMiddleware[]): ReturnT
  (predicateTypes: 'createNewStickerSet', ...fns: CreateNewStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'createNewSupergroupChat', ...fns: CreateNewSupergroupChatMiddleware[]): ReturnT
  (predicateTypes: 'createPrivateChat', ...fns: CreatePrivateChatMiddleware[]): ReturnT
  (predicateTypes: 'createSecretChat', ...fns: CreateSecretChatMiddleware[]): ReturnT
  (predicateTypes: 'createSupergroupChat', ...fns: CreateSupergroupChatMiddleware[]): ReturnT
  (predicateTypes: 'createTemporaryPassword', ...fns: CreateTemporaryPasswordMiddleware[]): ReturnT
  (predicateTypes: 'deleteAccount', ...fns: DeleteAccountMiddleware[]): ReturnT
  (predicateTypes: 'deleteChatFilter', ...fns: DeleteChatFilterMiddleware[]): ReturnT
  (predicateTypes: 'deleteChatHistory', ...fns: DeleteChatHistoryMiddleware[]): ReturnT
  (predicateTypes: 'deleteChatMessagesFromUser', ...fns: DeleteChatMessagesFromUserMiddleware[]): ReturnT
  (predicateTypes: 'deleteChatReplyMarkup', ...fns: DeleteChatReplyMarkupMiddleware[]): ReturnT
  (predicateTypes: 'deleteFile', ...fns: DeleteFileMiddleware[]): ReturnT
  (predicateTypes: 'deleteLanguagePack', ...fns: DeleteLanguagePackMiddleware[]): ReturnT
  (predicateTypes: 'deleteMessages', ...fns: DeleteMessagesMiddleware[]): ReturnT
  (predicateTypes: 'deletePassportElement', ...fns: DeletePassportElementMiddleware[]): ReturnT
  (predicateTypes: 'deleteProfilePhoto', ...fns: DeleteProfilePhotoMiddleware[]): ReturnT
  (predicateTypes: 'deleteSavedCredentials', ...fns: DeleteSavedCredentialsMiddleware[]): ReturnT
  (predicateTypes: 'deleteSavedOrderInfo', ...fns: DeleteSavedOrderInfoMiddleware[]): ReturnT
  (predicateTypes: 'deleteSupergroup', ...fns: DeleteSupergroupMiddleware[]): ReturnT
  (predicateTypes: 'destroy', ...fns: DestroyMiddleware[]): ReturnT
  (predicateTypes: 'disableProxy', ...fns: DisableProxyMiddleware[]): ReturnT
  (predicateTypes: 'discardCall', ...fns: DiscardCallMiddleware[]): ReturnT
  (predicateTypes: 'disconnectAllWebsites', ...fns: DisconnectAllWebsitesMiddleware[]): ReturnT
  (predicateTypes: 'disconnectWebsite', ...fns: DisconnectWebsiteMiddleware[]): ReturnT
  (predicateTypes: 'downloadFile', ...fns: DownloadFileMiddleware[]): ReturnT
  (predicateTypes: 'editChatFilter', ...fns: EditChatFilterMiddleware[]): ReturnT
  (predicateTypes: 'editCustomLanguagePackInfo', ...fns: EditCustomLanguagePackInfoMiddleware[]): ReturnT
  (predicateTypes: 'editInlineMessageCaption', ...fns: EditInlineMessageCaptionMiddleware[]): ReturnT
  (predicateTypes: 'editInlineMessageLiveLocation', ...fns: EditInlineMessageLiveLocationMiddleware[]): ReturnT
  (predicateTypes: 'editInlineMessageMedia', ...fns: EditInlineMessageMediaMiddleware[]): ReturnT
  (predicateTypes: 'editInlineMessageReplyMarkup', ...fns: EditInlineMessageReplyMarkupMiddleware[]): ReturnT
  (predicateTypes: 'editInlineMessageText', ...fns: EditInlineMessageTextMiddleware[]): ReturnT
  (predicateTypes: 'editMessageCaption', ...fns: EditMessageCaptionMiddleware[]): ReturnT
  (predicateTypes: 'editMessageLiveLocation', ...fns: EditMessageLiveLocationMiddleware[]): ReturnT
  (predicateTypes: 'editMessageMedia', ...fns: EditMessageMediaMiddleware[]): ReturnT
  (predicateTypes: 'editMessageReplyMarkup', ...fns: EditMessageReplyMarkupMiddleware[]): ReturnT
  (predicateTypes: 'editMessageSchedulingState', ...fns: EditMessageSchedulingStateMiddleware[]): ReturnT
  (predicateTypes: 'editMessageText', ...fns: EditMessageTextMiddleware[]): ReturnT
  (predicateTypes: 'editProxy', ...fns: EditProxyMiddleware[]): ReturnT
  (predicateTypes: 'enableProxy', ...fns: EnableProxyMiddleware[]): ReturnT
  (predicateTypes: 'finishFileGeneration', ...fns: FinishFileGenerationMiddleware[]): ReturnT
  (predicateTypes: 'forwardMessages', ...fns: ForwardMessagesMiddleware[]): ReturnT
  (predicateTypes: 'generateChatInviteLink', ...fns: GenerateChatInviteLinkMiddleware[]): ReturnT
  (predicateTypes: 'getAccountTtl', ...fns: GetAccountTtlMiddleware[]): ReturnT
  (predicateTypes: 'getActiveLiveLocationMessages', ...fns: GetActiveLiveLocationMessagesMiddleware[]): ReturnT
  (predicateTypes: 'getActiveSessions', ...fns: GetActiveSessionsMiddleware[]): ReturnT
  (predicateTypes: 'getAllPassportElements', ...fns: GetAllPassportElementsMiddleware[]): ReturnT
  (predicateTypes: 'getApplicationConfig', ...fns: GetApplicationConfigMiddleware[]): ReturnT
  (predicateTypes: 'getArchivedStickerSets', ...fns: GetArchivedStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'getAttachedStickerSets', ...fns: GetAttachedStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'getAuthorizationState', ...fns: GetAuthorizationStateMiddleware[]): ReturnT
  (predicateTypes: 'getAutoDownloadSettingsPresets', ...fns: GetAutoDownloadSettingsPresetsMiddleware[]): ReturnT
  (predicateTypes: 'getBackgroundUrl', ...fns: GetBackgroundUrlMiddleware[]): ReturnT
  (predicateTypes: 'getBackgrounds', ...fns: GetBackgroundsMiddleware[]): ReturnT
  (predicateTypes: 'getBankCardInfo', ...fns: GetBankCardInfoMiddleware[]): ReturnT
  (predicateTypes: 'getBasicGroup', ...fns: GetBasicGroupMiddleware[]): ReturnT
  (predicateTypes: 'getBasicGroupFullInfo', ...fns: GetBasicGroupFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'getBlockedMessageSenders', ...fns: GetBlockedMessageSendersMiddleware[]): ReturnT
  (predicateTypes: 'getCallbackQueryAnswer', ...fns: GetCallbackQueryAnswerMiddleware[]): ReturnT
  (predicateTypes: 'getCallbackQueryMessage', ...fns: GetCallbackQueryMessageMiddleware[]): ReturnT
  (predicateTypes: 'getChat', ...fns: GetChatMiddleware[]): ReturnT
  (predicateTypes: 'getChatAdministrators', ...fns: GetChatAdministratorsMiddleware[]): ReturnT
  (predicateTypes: 'getChatEventLog', ...fns: GetChatEventLogMiddleware[]): ReturnT
  (predicateTypes: 'getChatFilter', ...fns: GetChatFilterMiddleware[]): ReturnT
  (predicateTypes: 'getChatFilterDefaultIconName', ...fns: GetChatFilterDefaultIconNameMiddleware[]): ReturnT
  (predicateTypes: 'getChatHistory', ...fns: GetChatHistoryMiddleware[]): ReturnT
  (predicateTypes: 'getChatListsToAddChat', ...fns: GetChatListsToAddChatMiddleware[]): ReturnT
  (predicateTypes: 'getChatMember', ...fns: GetChatMemberMiddleware[]): ReturnT
  (predicateTypes: 'getChatMessageByDate', ...fns: GetChatMessageByDateMiddleware[]): ReturnT
  (predicateTypes: 'getChatMessageCount', ...fns: GetChatMessageCountMiddleware[]): ReturnT
  (predicateTypes: 'getChatNotificationSettingsExceptions', ...fns: GetChatNotificationSettingsExceptionsMiddleware[]): ReturnT
  (predicateTypes: 'getChatPinnedMessage', ...fns: GetChatPinnedMessageMiddleware[]): ReturnT
  (predicateTypes: 'getChatScheduledMessages', ...fns: GetChatScheduledMessagesMiddleware[]): ReturnT
  (predicateTypes: 'getChatStatistics', ...fns: GetChatStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'getChatStatisticsUrl', ...fns: GetChatStatisticsUrlMiddleware[]): ReturnT
  (predicateTypes: 'getChats', ...fns: GetChatsMiddleware[]): ReturnT
  (predicateTypes: 'getConnectedWebsites', ...fns: GetConnectedWebsitesMiddleware[]): ReturnT
  (predicateTypes: 'getContacts', ...fns: GetContactsMiddleware[]): ReturnT
  (predicateTypes: 'getCountries', ...fns: GetCountriesMiddleware[]): ReturnT
  (predicateTypes: 'getCountryCode', ...fns: GetCountryCodeMiddleware[]): ReturnT
  (predicateTypes: 'getCreatedPublicChats', ...fns: GetCreatedPublicChatsMiddleware[]): ReturnT
  (predicateTypes: 'getCurrentState', ...fns: GetCurrentStateMiddleware[]): ReturnT
  (predicateTypes: 'getDatabaseStatistics', ...fns: GetDatabaseStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'getDeepLinkInfo', ...fns: GetDeepLinkInfoMiddleware[]): ReturnT
  (predicateTypes: 'getEmojiSuggestionsUrl', ...fns: GetEmojiSuggestionsUrlMiddleware[]): ReturnT
  (predicateTypes: 'getFavoriteStickers', ...fns: GetFavoriteStickersMiddleware[]): ReturnT
  (predicateTypes: 'getFile', ...fns: GetFileMiddleware[]): ReturnT
  (predicateTypes: 'getFileDownloadedPrefixSize', ...fns: GetFileDownloadedPrefixSizeMiddleware[]): ReturnT
  (predicateTypes: 'getFileExtension', ...fns: GetFileExtensionMiddleware[]): ReturnT
  (predicateTypes: 'getFileMimeType', ...fns: GetFileMimeTypeMiddleware[]): ReturnT
  (predicateTypes: 'getGameHighScores', ...fns: GetGameHighScoresMiddleware[]): ReturnT
  (predicateTypes: 'getGroupsInCommon', ...fns: GetGroupsInCommonMiddleware[]): ReturnT
  (predicateTypes: 'getImportedContactCount', ...fns: GetImportedContactCountMiddleware[]): ReturnT
  (predicateTypes: 'getInactiveSupergroupChats', ...fns: GetInactiveSupergroupChatsMiddleware[]): ReturnT
  (predicateTypes: 'getInlineGameHighScores', ...fns: GetInlineGameHighScoresMiddleware[]): ReturnT
  (predicateTypes: 'getInlineQueryResults', ...fns: GetInlineQueryResultsMiddleware[]): ReturnT
  (predicateTypes: 'getInstalledStickerSets', ...fns: GetInstalledStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'getInviteText', ...fns: GetInviteTextMiddleware[]): ReturnT
  (predicateTypes: 'getJsonString', ...fns: GetJsonStringMiddleware[]): ReturnT
  (predicateTypes: 'getJsonValue', ...fns: GetJsonValueMiddleware[]): ReturnT
  (predicateTypes: 'getLanguagePackInfo', ...fns: GetLanguagePackInfoMiddleware[]): ReturnT
  (predicateTypes: 'getLanguagePackString', ...fns: GetLanguagePackStringMiddleware[]): ReturnT
  (predicateTypes: 'getLanguagePackStrings', ...fns: GetLanguagePackStringsMiddleware[]): ReturnT
  (predicateTypes: 'getLocalizationTargetInfo', ...fns: GetLocalizationTargetInfoMiddleware[]): ReturnT
  (predicateTypes: 'getLogStream', ...fns: GetLogStreamMiddleware[]): ReturnT
  (predicateTypes: 'getLogTagVerbosityLevel', ...fns: GetLogTagVerbosityLevelMiddleware[]): ReturnT
  (predicateTypes: 'getLogTags', ...fns: GetLogTagsMiddleware[]): ReturnT
  (predicateTypes: 'getLogVerbosityLevel', ...fns: GetLogVerbosityLevelMiddleware[]): ReturnT
  (predicateTypes: 'getLoginUrl', ...fns: GetLoginUrlMiddleware[]): ReturnT
  (predicateTypes: 'getLoginUrlInfo', ...fns: GetLoginUrlInfoMiddleware[]): ReturnT
  (predicateTypes: 'getMapThumbnailFile', ...fns: GetMapThumbnailFileMiddleware[]): ReturnT
  (predicateTypes: 'getMarkdownText', ...fns: GetMarkdownTextMiddleware[]): ReturnT
  (predicateTypes: 'getMe', ...fns: GetMeMiddleware[]): ReturnT
  (predicateTypes: 'getMessage', ...fns: GetMessageMiddleware[]): ReturnT
  (predicateTypes: 'getMessageEmbeddingCode', ...fns: GetMessageEmbeddingCodeMiddleware[]): ReturnT
  (predicateTypes: 'getMessageLink', ...fns: GetMessageLinkMiddleware[]): ReturnT
  (predicateTypes: 'getMessageLinkInfo', ...fns: GetMessageLinkInfoMiddleware[]): ReturnT
  (predicateTypes: 'getMessageLocally', ...fns: GetMessageLocallyMiddleware[]): ReturnT
  (predicateTypes: 'getMessagePublicForwards', ...fns: GetMessagePublicForwardsMiddleware[]): ReturnT
  (predicateTypes: 'getMessageStatistics', ...fns: GetMessageStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'getMessageThread', ...fns: GetMessageThreadMiddleware[]): ReturnT
  (predicateTypes: 'getMessageThreadHistory', ...fns: GetMessageThreadHistoryMiddleware[]): ReturnT
  (predicateTypes: 'getMessages', ...fns: GetMessagesMiddleware[]): ReturnT
  (predicateTypes: 'getNetworkStatistics', ...fns: GetNetworkStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'getOption', ...fns: GetOptionMiddleware[]): ReturnT
  (predicateTypes: 'getPassportAuthorizationForm', ...fns: GetPassportAuthorizationFormMiddleware[]): ReturnT
  (predicateTypes: 'getPassportAuthorizationFormAvailableElements', ...fns: GetPassportAuthorizationFormAvailableElementsMiddleware[]): ReturnT
  (predicateTypes: 'getPassportElement', ...fns: GetPassportElementMiddleware[]): ReturnT
  (predicateTypes: 'getPasswordState', ...fns: GetPasswordStateMiddleware[]): ReturnT
  (predicateTypes: 'getPaymentForm', ...fns: GetPaymentFormMiddleware[]): ReturnT
  (predicateTypes: 'getPaymentReceipt', ...fns: GetPaymentReceiptMiddleware[]): ReturnT
  (predicateTypes: 'getPhoneNumberInfo', ...fns: GetPhoneNumberInfoMiddleware[]): ReturnT
  (predicateTypes: 'getPollVoters', ...fns: GetPollVotersMiddleware[]): ReturnT
  (predicateTypes: 'getPreferredCountryLanguage', ...fns: GetPreferredCountryLanguageMiddleware[]): ReturnT
  (predicateTypes: 'getProxies', ...fns: GetProxiesMiddleware[]): ReturnT
  (predicateTypes: 'getProxyLink', ...fns: GetProxyLinkMiddleware[]): ReturnT
  (predicateTypes: 'getPushReceiverId', ...fns: GetPushReceiverIdMiddleware[]): ReturnT
  (predicateTypes: 'getRecentInlineBots', ...fns: GetRecentInlineBotsMiddleware[]): ReturnT
  (predicateTypes: 'getRecentStickers', ...fns: GetRecentStickersMiddleware[]): ReturnT
  (predicateTypes: 'getRecentlyVisitedTMeUrls', ...fns: GetRecentlyVisitedTMeUrlsMiddleware[]): ReturnT
  (predicateTypes: 'getRecommendedChatFilters', ...fns: GetRecommendedChatFiltersMiddleware[]): ReturnT
  (predicateTypes: 'getRecoveryEmailAddress', ...fns: GetRecoveryEmailAddressMiddleware[]): ReturnT
  (predicateTypes: 'getRemoteFile', ...fns: GetRemoteFileMiddleware[]): ReturnT
  (predicateTypes: 'getRepliedMessage', ...fns: GetRepliedMessageMiddleware[]): ReturnT
  (predicateTypes: 'getSavedAnimations', ...fns: GetSavedAnimationsMiddleware[]): ReturnT
  (predicateTypes: 'getSavedOrderInfo', ...fns: GetSavedOrderInfoMiddleware[]): ReturnT
  (predicateTypes: 'getScopeNotificationSettings', ...fns: GetScopeNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'getSecretChat', ...fns: GetSecretChatMiddleware[]): ReturnT
  (predicateTypes: 'getStatisticalGraph', ...fns: GetStatisticalGraphMiddleware[]): ReturnT
  (predicateTypes: 'getStickerEmojis', ...fns: GetStickerEmojisMiddleware[]): ReturnT
  (predicateTypes: 'getStickerSet', ...fns: GetStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'getStickers', ...fns: GetStickersMiddleware[]): ReturnT
  (predicateTypes: 'getStorageStatistics', ...fns: GetStorageStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'getStorageStatisticsFast', ...fns: GetStorageStatisticsFastMiddleware[]): ReturnT
  (predicateTypes: 'getSuitableDiscussionChats', ...fns: GetSuitableDiscussionChatsMiddleware[]): ReturnT
  (predicateTypes: 'getSupergroup', ...fns: GetSupergroupMiddleware[]): ReturnT
  (predicateTypes: 'getSupergroupFullInfo', ...fns: GetSupergroupFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'getSupergroupMembers', ...fns: GetSupergroupMembersMiddleware[]): ReturnT
  (predicateTypes: 'getSupportUser', ...fns: GetSupportUserMiddleware[]): ReturnT
  (predicateTypes: 'getTemporaryPasswordState', ...fns: GetTemporaryPasswordStateMiddleware[]): ReturnT
  (predicateTypes: 'getTextEntities', ...fns: GetTextEntitiesMiddleware[]): ReturnT
  (predicateTypes: 'getTopChats', ...fns: GetTopChatsMiddleware[]): ReturnT
  (predicateTypes: 'getTrendingStickerSets', ...fns: GetTrendingStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'getUser', ...fns: GetUserMiddleware[]): ReturnT
  (predicateTypes: 'getUserFullInfo', ...fns: GetUserFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'getUserPrivacySettingRules', ...fns: GetUserPrivacySettingRulesMiddleware[]): ReturnT
  (predicateTypes: 'getUserProfilePhotos', ...fns: GetUserProfilePhotosMiddleware[]): ReturnT
  (predicateTypes: 'getWebPageInstantView', ...fns: GetWebPageInstantViewMiddleware[]): ReturnT
  (predicateTypes: 'getWebPagePreview', ...fns: GetWebPagePreviewMiddleware[]): ReturnT
  (predicateTypes: 'hideSuggestedAction', ...fns: HideSuggestedActionMiddleware[]): ReturnT
  (predicateTypes: 'importContacts', ...fns: ImportContactsMiddleware[]): ReturnT
  (predicateTypes: 'joinChat', ...fns: JoinChatMiddleware[]): ReturnT
  (predicateTypes: 'joinChatByInviteLink', ...fns: JoinChatByInviteLinkMiddleware[]): ReturnT
  (predicateTypes: 'leaveChat', ...fns: LeaveChatMiddleware[]): ReturnT
  (predicateTypes: 'logOut', ...fns: LogOutMiddleware[]): ReturnT
  (predicateTypes: 'openChat', ...fns: OpenChatMiddleware[]): ReturnT
  (predicateTypes: 'openMessageContent', ...fns: OpenMessageContentMiddleware[]): ReturnT
  (predicateTypes: 'optimizeStorage', ...fns: OptimizeStorageMiddleware[]): ReturnT
  (predicateTypes: 'parseMarkdown', ...fns: ParseMarkdownMiddleware[]): ReturnT
  (predicateTypes: 'parseTextEntities', ...fns: ParseTextEntitiesMiddleware[]): ReturnT
  (predicateTypes: 'pinChatMessage', ...fns: PinChatMessageMiddleware[]): ReturnT
  (predicateTypes: 'pingProxy', ...fns: PingProxyMiddleware[]): ReturnT
  (predicateTypes: 'processPushNotification', ...fns: ProcessPushNotificationMiddleware[]): ReturnT
  (predicateTypes: 'readAllChatMentions', ...fns: ReadAllChatMentionsMiddleware[]): ReturnT
  (predicateTypes: 'readFilePart', ...fns: ReadFilePartMiddleware[]): ReturnT
  (predicateTypes: 'recoverAuthenticationPassword', ...fns: RecoverAuthenticationPasswordMiddleware[]): ReturnT
  (predicateTypes: 'recoverPassword', ...fns: RecoverPasswordMiddleware[]): ReturnT
  (predicateTypes: 'registerDevice', ...fns: RegisterDeviceMiddleware[]): ReturnT
  (predicateTypes: 'registerUser', ...fns: RegisterUserMiddleware[]): ReturnT
  (predicateTypes: 'removeBackground', ...fns: RemoveBackgroundMiddleware[]): ReturnT
  (predicateTypes: 'removeChatActionBar', ...fns: RemoveChatActionBarMiddleware[]): ReturnT
  (predicateTypes: 'removeContacts', ...fns: RemoveContactsMiddleware[]): ReturnT
  (predicateTypes: 'removeFavoriteSticker', ...fns: RemoveFavoriteStickerMiddleware[]): ReturnT
  (predicateTypes: 'removeNotification', ...fns: RemoveNotificationMiddleware[]): ReturnT
  (predicateTypes: 'removeNotificationGroup', ...fns: RemoveNotificationGroupMiddleware[]): ReturnT
  (predicateTypes: 'removeProxy', ...fns: RemoveProxyMiddleware[]): ReturnT
  (predicateTypes: 'removeRecentHashtag', ...fns: RemoveRecentHashtagMiddleware[]): ReturnT
  (predicateTypes: 'removeRecentSticker', ...fns: RemoveRecentStickerMiddleware[]): ReturnT
  (predicateTypes: 'removeRecentlyFoundChat', ...fns: RemoveRecentlyFoundChatMiddleware[]): ReturnT
  (predicateTypes: 'removeSavedAnimation', ...fns: RemoveSavedAnimationMiddleware[]): ReturnT
  (predicateTypes: 'removeStickerFromSet', ...fns: RemoveStickerFromSetMiddleware[]): ReturnT
  (predicateTypes: 'removeTopChat', ...fns: RemoveTopChatMiddleware[]): ReturnT
  (predicateTypes: 'reorderChatFilters', ...fns: ReorderChatFiltersMiddleware[]): ReturnT
  (predicateTypes: 'reorderInstalledStickerSets', ...fns: ReorderInstalledStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'reportChat', ...fns: ReportChatMiddleware[]): ReturnT
  (predicateTypes: 'reportSupergroupSpam', ...fns: ReportSupergroupSpamMiddleware[]): ReturnT
  (predicateTypes: 'requestAuthenticationPasswordRecovery', ...fns: RequestAuthenticationPasswordRecoveryMiddleware[]): ReturnT
  (predicateTypes: 'requestPasswordRecovery', ...fns: RequestPasswordRecoveryMiddleware[]): ReturnT
  (predicateTypes: 'requestQrCodeAuthentication', ...fns: RequestQrCodeAuthenticationMiddleware[]): ReturnT
  (predicateTypes: 'resendAuthenticationCode', ...fns: ResendAuthenticationCodeMiddleware[]): ReturnT
  (predicateTypes: 'resendChangePhoneNumberCode', ...fns: ResendChangePhoneNumberCodeMiddleware[]): ReturnT
  (predicateTypes: 'resendEmailAddressVerificationCode', ...fns: ResendEmailAddressVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'resendMessages', ...fns: ResendMessagesMiddleware[]): ReturnT
  (predicateTypes: 'resendPhoneNumberConfirmationCode', ...fns: ResendPhoneNumberConfirmationCodeMiddleware[]): ReturnT
  (predicateTypes: 'resendPhoneNumberVerificationCode', ...fns: ResendPhoneNumberVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'resendRecoveryEmailAddressCode', ...fns: ResendRecoveryEmailAddressCodeMiddleware[]): ReturnT
  (predicateTypes: 'resetAllNotificationSettings', ...fns: ResetAllNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'resetBackgrounds', ...fns: ResetBackgroundsMiddleware[]): ReturnT
  (predicateTypes: 'resetNetworkStatistics', ...fns: ResetNetworkStatisticsMiddleware[]): ReturnT
  (predicateTypes: 'saveApplicationLogEvent', ...fns: SaveApplicationLogEventMiddleware[]): ReturnT
  (predicateTypes: 'searchBackground', ...fns: SearchBackgroundMiddleware[]): ReturnT
  (predicateTypes: 'searchCallMessages', ...fns: SearchCallMessagesMiddleware[]): ReturnT
  (predicateTypes: 'searchChatMembers', ...fns: SearchChatMembersMiddleware[]): ReturnT
  (predicateTypes: 'searchChatMessages', ...fns: SearchChatMessagesMiddleware[]): ReturnT
  (predicateTypes: 'searchChatRecentLocationMessages', ...fns: SearchChatRecentLocationMessagesMiddleware[]): ReturnT
  (predicateTypes: 'searchChats', ...fns: SearchChatsMiddleware[]): ReturnT
  (predicateTypes: 'searchChatsNearby', ...fns: SearchChatsNearbyMiddleware[]): ReturnT
  (predicateTypes: 'searchChatsOnServer', ...fns: SearchChatsOnServerMiddleware[]): ReturnT
  (predicateTypes: 'searchContacts', ...fns: SearchContactsMiddleware[]): ReturnT
  (predicateTypes: 'searchEmojis', ...fns: SearchEmojisMiddleware[]): ReturnT
  (predicateTypes: 'searchHashtags', ...fns: SearchHashtagsMiddleware[]): ReturnT
  (predicateTypes: 'searchInstalledStickerSets', ...fns: SearchInstalledStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'searchMessages', ...fns: SearchMessagesMiddleware[]): ReturnT
  (predicateTypes: 'searchPublicChat', ...fns: SearchPublicChatMiddleware[]): ReturnT
  (predicateTypes: 'searchPublicChats', ...fns: SearchPublicChatsMiddleware[]): ReturnT
  (predicateTypes: 'searchSecretMessages', ...fns: SearchSecretMessagesMiddleware[]): ReturnT
  (predicateTypes: 'searchStickerSet', ...fns: SearchStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'searchStickerSets', ...fns: SearchStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'searchStickers', ...fns: SearchStickersMiddleware[]): ReturnT
  (predicateTypes: 'sendBotStartMessage', ...fns: SendBotStartMessageMiddleware[]): ReturnT
  (predicateTypes: 'sendCallDebugInformation', ...fns: SendCallDebugInformationMiddleware[]): ReturnT
  (predicateTypes: 'sendCallRating', ...fns: SendCallRatingMiddleware[]): ReturnT
  (predicateTypes: 'sendCallSignalingData', ...fns: SendCallSignalingDataMiddleware[]): ReturnT
  (predicateTypes: 'sendChatAction', ...fns: SendChatActionMiddleware[]): ReturnT
  (predicateTypes: 'sendChatScreenshotTakenNotification', ...fns: SendChatScreenshotTakenNotificationMiddleware[]): ReturnT
  (predicateTypes: 'sendChatSetTtlMessage', ...fns: SendChatSetTtlMessageMiddleware[]): ReturnT
  (predicateTypes: 'sendCustomRequest', ...fns: SendCustomRequestMiddleware[]): ReturnT
  (predicateTypes: 'sendEmailAddressVerificationCode', ...fns: SendEmailAddressVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'sendInlineQueryResultMessage', ...fns: SendInlineQueryResultMessageMiddleware[]): ReturnT
  (predicateTypes: 'sendMessage', ...fns: SendMessageMiddleware[]): ReturnT
  (predicateTypes: 'sendMessageAlbum', ...fns: SendMessageAlbumMiddleware[]): ReturnT
  (predicateTypes: 'sendPassportAuthorizationForm', ...fns: SendPassportAuthorizationFormMiddleware[]): ReturnT
  (predicateTypes: 'sendPaymentForm', ...fns: SendPaymentFormMiddleware[]): ReturnT
  (predicateTypes: 'sendPhoneNumberConfirmationCode', ...fns: SendPhoneNumberConfirmationCodeMiddleware[]): ReturnT
  (predicateTypes: 'sendPhoneNumberVerificationCode', ...fns: SendPhoneNumberVerificationCodeMiddleware[]): ReturnT
  (predicateTypes: 'setAccountTtl', ...fns: SetAccountTtlMiddleware[]): ReturnT
  (predicateTypes: 'setAlarm', ...fns: SetAlarmMiddleware[]): ReturnT
  (predicateTypes: 'setAuthenticationPhoneNumber', ...fns: SetAuthenticationPhoneNumberMiddleware[]): ReturnT
  (predicateTypes: 'setAutoDownloadSettings', ...fns: SetAutoDownloadSettingsMiddleware[]): ReturnT
  (predicateTypes: 'setBackground', ...fns: SetBackgroundMiddleware[]): ReturnT
  (predicateTypes: 'setBio', ...fns: SetBioMiddleware[]): ReturnT
  (predicateTypes: 'setBotUpdatesStatus', ...fns: SetBotUpdatesStatusMiddleware[]): ReturnT
  (predicateTypes: 'setChatClientData', ...fns: SetChatClientDataMiddleware[]): ReturnT
  (predicateTypes: 'setChatDescription', ...fns: SetChatDescriptionMiddleware[]): ReturnT
  (predicateTypes: 'setChatDiscussionGroup', ...fns: SetChatDiscussionGroupMiddleware[]): ReturnT
  (predicateTypes: 'setChatDraftMessage', ...fns: SetChatDraftMessageMiddleware[]): ReturnT
  (predicateTypes: 'setChatLocation', ...fns: SetChatLocationMiddleware[]): ReturnT
  (predicateTypes: 'setChatMemberStatus', ...fns: SetChatMemberStatusMiddleware[]): ReturnT
  (predicateTypes: 'setChatNotificationSettings', ...fns: SetChatNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'setChatPermissions', ...fns: SetChatPermissionsMiddleware[]): ReturnT
  (predicateTypes: 'setChatPhoto', ...fns: SetChatPhotoMiddleware[]): ReturnT
  (predicateTypes: 'setChatSlowModeDelay', ...fns: SetChatSlowModeDelayMiddleware[]): ReturnT
  (predicateTypes: 'setChatTitle', ...fns: SetChatTitleMiddleware[]): ReturnT
  (predicateTypes: 'setCommands', ...fns: SetCommandsMiddleware[]): ReturnT
  (predicateTypes: 'setCustomLanguagePack', ...fns: SetCustomLanguagePackMiddleware[]): ReturnT
  (predicateTypes: 'setCustomLanguagePackString', ...fns: SetCustomLanguagePackStringMiddleware[]): ReturnT
  (predicateTypes: 'setDatabaseEncryptionKey', ...fns: SetDatabaseEncryptionKeyMiddleware[]): ReturnT
  (predicateTypes: 'setFileGenerationProgress', ...fns: SetFileGenerationProgressMiddleware[]): ReturnT
  (predicateTypes: 'setGameScore', ...fns: SetGameScoreMiddleware[]): ReturnT
  (predicateTypes: 'setInlineGameScore', ...fns: SetInlineGameScoreMiddleware[]): ReturnT
  (predicateTypes: 'setLocation', ...fns: SetLocationMiddleware[]): ReturnT
  (predicateTypes: 'setLogStream', ...fns: SetLogStreamMiddleware[]): ReturnT
  (predicateTypes: 'setLogTagVerbosityLevel', ...fns: SetLogTagVerbosityLevelMiddleware[]): ReturnT
  (predicateTypes: 'setLogVerbosityLevel', ...fns: SetLogVerbosityLevelMiddleware[]): ReturnT
  (predicateTypes: 'setName', ...fns: SetNameMiddleware[]): ReturnT
  (predicateTypes: 'setNetworkType', ...fns: SetNetworkTypeMiddleware[]): ReturnT
  (predicateTypes: 'setOption', ...fns: SetOptionMiddleware[]): ReturnT
  (predicateTypes: 'setPassportElement', ...fns: SetPassportElementMiddleware[]): ReturnT
  (predicateTypes: 'setPassportElementErrors', ...fns: SetPassportElementErrorsMiddleware[]): ReturnT
  (predicateTypes: 'setPassword', ...fns: SetPasswordMiddleware[]): ReturnT
  (predicateTypes: 'setPinnedChats', ...fns: SetPinnedChatsMiddleware[]): ReturnT
  (predicateTypes: 'setPollAnswer', ...fns: SetPollAnswerMiddleware[]): ReturnT
  (predicateTypes: 'setProfilePhoto', ...fns: SetProfilePhotoMiddleware[]): ReturnT
  (predicateTypes: 'setRecoveryEmailAddress', ...fns: SetRecoveryEmailAddressMiddleware[]): ReturnT
  (predicateTypes: 'setScopeNotificationSettings', ...fns: SetScopeNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'setStickerPositionInSet', ...fns: SetStickerPositionInSetMiddleware[]): ReturnT
  (predicateTypes: 'setStickerSetThumbnail', ...fns: SetStickerSetThumbnailMiddleware[]): ReturnT
  (predicateTypes: 'setSupergroupStickerSet', ...fns: SetSupergroupStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'setSupergroupUsername', ...fns: SetSupergroupUsernameMiddleware[]): ReturnT
  (predicateTypes: 'setTdlibParameters', ...fns: SetTdlibParametersMiddleware[]): ReturnT
  (predicateTypes: 'setUserPrivacySettingRules', ...fns: SetUserPrivacySettingRulesMiddleware[]): ReturnT
  (predicateTypes: 'setUsername', ...fns: SetUsernameMiddleware[]): ReturnT
  (predicateTypes: 'sharePhoneNumber', ...fns: SharePhoneNumberMiddleware[]): ReturnT
  (predicateTypes: 'stopPoll', ...fns: StopPollMiddleware[]): ReturnT
  (predicateTypes: 'synchronizeLanguagePack', ...fns: SynchronizeLanguagePackMiddleware[]): ReturnT
  (predicateTypes: 'terminateAllOtherSessions', ...fns: TerminateAllOtherSessionsMiddleware[]): ReturnT
  (predicateTypes: 'terminateSession', ...fns: TerminateSessionMiddleware[]): ReturnT
  (predicateTypes: 'toggleChatDefaultDisableNotification', ...fns: ToggleChatDefaultDisableNotificationMiddleware[]): ReturnT
  (predicateTypes: 'toggleChatIsMarkedAsUnread', ...fns: ToggleChatIsMarkedAsUnreadMiddleware[]): ReturnT
  (predicateTypes: 'toggleChatIsPinned', ...fns: ToggleChatIsPinnedMiddleware[]): ReturnT
  (predicateTypes: 'toggleMessageSenderIsBlocked', ...fns: ToggleMessageSenderIsBlockedMiddleware[]): ReturnT
  (predicateTypes: 'toggleSupergroupIsAllHistoryAvailable', ...fns: ToggleSupergroupIsAllHistoryAvailableMiddleware[]): ReturnT
  (predicateTypes: 'toggleSupergroupSignMessages', ...fns: ToggleSupergroupSignMessagesMiddleware[]): ReturnT
  (predicateTypes: 'transferChatOwnership', ...fns: TransferChatOwnershipMiddleware[]): ReturnT
  (predicateTypes: 'unpinAllChatMessages', ...fns: UnpinAllChatMessagesMiddleware[]): ReturnT
  (predicateTypes: 'unpinChatMessage', ...fns: UnpinChatMessageMiddleware[]): ReturnT
  (predicateTypes: 'upgradeBasicGroupChatToSupergroupChat', ...fns: UpgradeBasicGroupChatToSupergroupChatMiddleware[]): ReturnT
  (predicateTypes: 'uploadFile', ...fns: UploadFileMiddleware[]): ReturnT
  (predicateTypes: 'uploadStickerFile', ...fns: UploadStickerFileMiddleware[]): ReturnT
  (predicateTypes: 'validateOrderInfo', ...fns: ValidateOrderInfoMiddleware[]): ReturnT
  (predicateTypes: 'viewMessages', ...fns: ViewMessagesMiddleware[]): ReturnT
  (predicateTypes: 'viewTrendingStickerSets', ...fns: ViewTrendingStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'writeGeneratedFilePart', ...fns: WriteGeneratedFilePartMiddleware[]): ReturnT
  // Updates
  (predicateTypes: 'updateAuthorizationState', ...fns: UpdateAuthorizationStateMiddleware[]): ReturnT
  (predicateTypes: 'updateNewMessage', ...fns: UpdateNewMessageMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageSendAcknowledged', ...fns: UpdateMessageSendAcknowledgedMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageSendSucceeded', ...fns: UpdateMessageSendSucceededMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageSendFailed', ...fns: UpdateMessageSendFailedMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageContent', ...fns: UpdateMessageContentMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageEdited', ...fns: UpdateMessageEditedMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageIsPinned', ...fns: UpdateMessageIsPinnedMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageInteractionInfo', ...fns: UpdateMessageInteractionInfoMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageContentOpened', ...fns: UpdateMessageContentOpenedMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageMentionRead', ...fns: UpdateMessageMentionReadMiddleware[]): ReturnT
  (predicateTypes: 'updateMessageLiveLocationViewed', ...fns: UpdateMessageLiveLocationViewedMiddleware[]): ReturnT
  (predicateTypes: 'updateNewChat', ...fns: UpdateNewChatMiddleware[]): ReturnT
  (predicateTypes: 'updateChatTitle', ...fns: UpdateChatTitleMiddleware[]): ReturnT
  (predicateTypes: 'updateChatPhoto', ...fns: UpdateChatPhotoMiddleware[]): ReturnT
  (predicateTypes: 'updateChatPermissions', ...fns: UpdateChatPermissionsMiddleware[]): ReturnT
  (predicateTypes: 'updateChatLastMessage', ...fns: UpdateChatLastMessageMiddleware[]): ReturnT
  (predicateTypes: 'updateChatPosition', ...fns: UpdateChatPositionMiddleware[]): ReturnT
  (predicateTypes: 'updateChatIsMarkedAsUnread', ...fns: UpdateChatIsMarkedAsUnreadMiddleware[]): ReturnT
  (predicateTypes: 'updateChatIsBlocked', ...fns: UpdateChatIsBlockedMiddleware[]): ReturnT
  (predicateTypes: 'updateChatHasScheduledMessages', ...fns: UpdateChatHasScheduledMessagesMiddleware[]): ReturnT
  (predicateTypes: 'updateChatDefaultDisableNotification', ...fns: UpdateChatDefaultDisableNotificationMiddleware[]): ReturnT
  (predicateTypes: 'updateChatReadInbox', ...fns: UpdateChatReadInboxMiddleware[]): ReturnT
  (predicateTypes: 'updateChatReadOutbox', ...fns: UpdateChatReadOutboxMiddleware[]): ReturnT
  (predicateTypes: 'updateChatUnreadMentionCount', ...fns: UpdateChatUnreadMentionCountMiddleware[]): ReturnT
  (predicateTypes: 'updateChatNotificationSettings', ...fns: UpdateChatNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'updateScopeNotificationSettings', ...fns: UpdateScopeNotificationSettingsMiddleware[]): ReturnT
  (predicateTypes: 'updateChatActionBar', ...fns: UpdateChatActionBarMiddleware[]): ReturnT
  (predicateTypes: 'updateChatReplyMarkup', ...fns: UpdateChatReplyMarkupMiddleware[]): ReturnT
  (predicateTypes: 'updateChatDraftMessage', ...fns: UpdateChatDraftMessageMiddleware[]): ReturnT
  (predicateTypes: 'updateChatFilters', ...fns: UpdateChatFiltersMiddleware[]): ReturnT
  (predicateTypes: 'updateChatOnlineMemberCount', ...fns: UpdateChatOnlineMemberCountMiddleware[]): ReturnT
  (predicateTypes: 'updateNotification', ...fns: UpdateNotificationMiddleware[]): ReturnT
  (predicateTypes: 'updateNotificationGroup', ...fns: UpdateNotificationGroupMiddleware[]): ReturnT
  (predicateTypes: 'updateActiveNotifications', ...fns: UpdateActiveNotificationsMiddleware[]): ReturnT
  (predicateTypes: 'updateHavePendingNotifications', ...fns: UpdateHavePendingNotificationsMiddleware[]): ReturnT
  (predicateTypes: 'updateDeleteMessages', ...fns: UpdateDeleteMessagesMiddleware[]): ReturnT
  (predicateTypes: 'updateUserChatAction', ...fns: UpdateUserChatActionMiddleware[]): ReturnT
  (predicateTypes: 'updateUserStatus', ...fns: UpdateUserStatusMiddleware[]): ReturnT
  (predicateTypes: 'updateUser', ...fns: UpdateUserMiddleware[]): ReturnT
  (predicateTypes: 'updateBasicGroup', ...fns: UpdateBasicGroupMiddleware[]): ReturnT
  (predicateTypes: 'updateSupergroup', ...fns: UpdateSupergroupMiddleware[]): ReturnT
  (predicateTypes: 'updateSecretChat', ...fns: UpdateSecretChatMiddleware[]): ReturnT
  (predicateTypes: 'updateUserFullInfo', ...fns: UpdateUserFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'updateBasicGroupFullInfo', ...fns: UpdateBasicGroupFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'updateSupergroupFullInfo', ...fns: UpdateSupergroupFullInfoMiddleware[]): ReturnT
  (predicateTypes: 'updateServiceNotification', ...fns: UpdateServiceNotificationMiddleware[]): ReturnT
  (predicateTypes: 'updateFile', ...fns: UpdateFileMiddleware[]): ReturnT
  (predicateTypes: 'updateFileGenerationStart', ...fns: UpdateFileGenerationStartMiddleware[]): ReturnT
  (predicateTypes: 'updateFileGenerationStop', ...fns: UpdateFileGenerationStopMiddleware[]): ReturnT
  (predicateTypes: 'updateCall', ...fns: UpdateCallMiddleware[]): ReturnT
  (predicateTypes: 'updateNewCallSignalingData', ...fns: UpdateNewCallSignalingDataMiddleware[]): ReturnT
  (predicateTypes: 'updateUserPrivacySettingRules', ...fns: UpdateUserPrivacySettingRulesMiddleware[]): ReturnT
  (predicateTypes: 'updateUnreadMessageCount', ...fns: UpdateUnreadMessageCountMiddleware[]): ReturnT
  (predicateTypes: 'updateUnreadChatCount', ...fns: UpdateUnreadChatCountMiddleware[]): ReturnT
  (predicateTypes: 'updateOption', ...fns: UpdateOptionMiddleware[]): ReturnT
  (predicateTypes: 'updateStickerSet', ...fns: UpdateStickerSetMiddleware[]): ReturnT
  (predicateTypes: 'updateInstalledStickerSets', ...fns: UpdateInstalledStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'updateTrendingStickerSets', ...fns: UpdateTrendingStickerSetsMiddleware[]): ReturnT
  (predicateTypes: 'updateRecentStickers', ...fns: UpdateRecentStickersMiddleware[]): ReturnT
  (predicateTypes: 'updateFavoriteStickers', ...fns: UpdateFavoriteStickersMiddleware[]): ReturnT
  (predicateTypes: 'updateSavedAnimations', ...fns: UpdateSavedAnimationsMiddleware[]): ReturnT
  (predicateTypes: 'updateSelectedBackground', ...fns: UpdateSelectedBackgroundMiddleware[]): ReturnT
  (predicateTypes: 'updateLanguagePackStrings', ...fns: UpdateLanguagePackStringsMiddleware[]): ReturnT
  (predicateTypes: 'updateConnectionState', ...fns: UpdateConnectionStateMiddleware[]): ReturnT
  (predicateTypes: 'updateTermsOfService', ...fns: UpdateTermsOfServiceMiddleware[]): ReturnT
  (predicateTypes: 'updateUsersNearby', ...fns: UpdateUsersNearbyMiddleware[]): ReturnT
  (predicateTypes: 'updateDiceEmojis', ...fns: UpdateDiceEmojisMiddleware[]): ReturnT
  (predicateTypes: 'updateAnimationSearchParameters', ...fns: UpdateAnimationSearchParametersMiddleware[]): ReturnT
  (predicateTypes: 'updateSuggestedActions', ...fns: UpdateSuggestedActionsMiddleware[]): ReturnT
  (predicateTypes: 'updateNewInlineQuery', ...fns: UpdateNewInlineQueryMiddleware[]): ReturnT
  (predicateTypes: 'updateNewChosenInlineResult', ...fns: UpdateNewChosenInlineResultMiddleware[]): ReturnT
  (predicateTypes: 'updateNewCallbackQuery', ...fns: UpdateNewCallbackQueryMiddleware[]): ReturnT
  (predicateTypes: 'updateNewInlineCallbackQuery', ...fns: UpdateNewInlineCallbackQueryMiddleware[]): ReturnT
  (predicateTypes: 'updateNewShippingQuery', ...fns: UpdateNewShippingQueryMiddleware[]): ReturnT
  (predicateTypes: 'updateNewPreCheckoutQuery', ...fns: UpdateNewPreCheckoutQueryMiddleware[]): ReturnT
  (predicateTypes: 'updateNewCustomEvent', ...fns: UpdateNewCustomEventMiddleware[]): ReturnT
  (predicateTypes: 'updateNewCustomQuery', ...fns: UpdateNewCustomQueryMiddleware[]): ReturnT
  (predicateTypes: 'updatePoll', ...fns: UpdatePollMiddleware[]): ReturnT
  (predicateTypes: 'updatePollAnswer', ...fns: UpdatePollAnswerMiddleware[]): ReturnT
  <ResponseT extends BaseTdObject = TdObject> (
    predicateTypes: string | string[],
    ...fns: Array<Middleware<ApiResponse<any, ResponseT> | UpdateContext<ResponseT>>>
  ): ReturnT
}
