/* tslint:disable:unified-signatures max-line-length */

import { ApiResponse, BaseTdObject, Middleware, TdObject, UpdateContext } from './airgram'
import * as api from './api'

export interface MiddlewareOn<ContextT = {}> {
  // API
  (
    predicateTypes: 'acceptCall',
    ...fns: Array<Middleware<ApiResponse<api.AcceptCallParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'acceptTermsOfService',
    ...fns: Array<Middleware<ApiResponse<api.AcceptTermsOfServiceParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addChatMember',
    ...fns: Array<Middleware<ApiResponse<api.AddChatMemberParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addChatMembers',
    ...fns: Array<Middleware<ApiResponse<api.AddChatMembersParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addCustomServerLanguagePack',
    ...fns: Array<Middleware<ApiResponse<api.AddCustomServerLanguagePackParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addFavoriteSticker',
    ...fns: Array<Middleware<ApiResponse<api.AddFavoriteStickerParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addLocalMessage',
    ...fns: Array<Middleware<ApiResponse<api.AddLocalMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addLogMessage',
    ...fns: Array<Middleware<ApiResponse<api.AddLogMessageParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addNetworkStatistics',
    ...fns: Array<Middleware<ApiResponse<api.AddNetworkStatisticsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addProxy',
    ...fns: Array<Middleware<ApiResponse<api.AddProxyParams, api.ProxyUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addRecentSticker',
    ...fns: Array<Middleware<ApiResponse<api.AddRecentStickerParams, api.StickersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addRecentlyFoundChat',
    ...fns: Array<Middleware<ApiResponse<api.AddRecentlyFoundChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addSavedAnimation',
    ...fns: Array<Middleware<ApiResponse<api.AddSavedAnimationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'addStickerToSet',
    ...fns: Array<Middleware<ApiResponse<api.AddStickerToSetParams, api.StickerSetUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'answerCallbackQuery',
    ...fns: Array<Middleware<ApiResponse<api.AnswerCallbackQueryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'answerCustomQuery',
    ...fns: Array<Middleware<ApiResponse<api.AnswerCustomQueryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'answerInlineQuery',
    ...fns: Array<Middleware<ApiResponse<api.AnswerInlineQueryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'answerPreCheckoutQuery',
    ...fns: Array<Middleware<ApiResponse<api.AnswerPreCheckoutQueryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'answerShippingQuery',
    ...fns: Array<Middleware<ApiResponse<api.AnswerShippingQueryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'blockUser',
    ...fns: Array<Middleware<ApiResponse<api.BlockUserParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'cancelDownloadFile',
    ...fns: Array<Middleware<ApiResponse<api.CancelDownloadFileParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'cancelUploadFile',
    ...fns: Array<Middleware<ApiResponse<api.CancelUploadFileParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'changeChatReportSpamState',
    ...fns: Array<Middleware<ApiResponse<api.ChangeChatReportSpamStateParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'changeImportedContacts',
    ...fns: Array<Middleware<ApiResponse<api.ChangeImportedContactsParams, api.ImportedContactsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'changePhoneNumber',
    ...fns: Array<Middleware<ApiResponse<api.ChangePhoneNumberParams, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'changeStickerSet',
    ...fns: Array<Middleware<ApiResponse<api.ChangeStickerSetParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkAuthenticationBotToken',
    ...fns: Array<Middleware<ApiResponse<api.CheckAuthenticationBotTokenParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkAuthenticationCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckAuthenticationCodeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkAuthenticationPassword',
    ...fns: Array<Middleware<ApiResponse<api.CheckAuthenticationPasswordParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkChangePhoneNumberCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckChangePhoneNumberCodeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkChatInviteLink',
    ...fns: Array<Middleware<ApiResponse<api.CheckChatInviteLinkParams, api.ChatInviteLinkInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkChatUsername',
    ...fns: Array<Middleware<ApiResponse<api.CheckChatUsernameParams, api.CheckChatUsernameResultUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkDatabaseEncryptionKey',
    ...fns: Array<Middleware<ApiResponse<api.CheckDatabaseEncryptionKeyParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkEmailAddressVerificationCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckEmailAddressVerificationCodeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkPhoneNumberConfirmationCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckPhoneNumberConfirmationCodeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkPhoneNumberVerificationCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckPhoneNumberVerificationCodeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'checkRecoveryEmailAddressCode',
    ...fns: Array<Middleware<ApiResponse<api.CheckRecoveryEmailAddressCodeParams, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'cleanFileName',
    ...fns: Array<Middleware<ApiResponse<api.CleanFileNameParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'clearAllDraftMessages',
    ...fns: Array<Middleware<ApiResponse<api.ClearAllDraftMessagesParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'clearImportedContacts',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'clearRecentStickers',
    ...fns: Array<Middleware<ApiResponse<api.ClearRecentStickersParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'clearRecentlyFoundChats',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'close',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'closeChat',
    ...fns: Array<Middleware<ApiResponse<api.CloseChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'closeSecretChat',
    ...fns: Array<Middleware<ApiResponse<api.CloseSecretChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createBasicGroupChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateBasicGroupChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createCall',
    ...fns: Array<Middleware<ApiResponse<api.CreateCallParams, api.CallIdUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createNewBasicGroupChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateNewBasicGroupChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createNewSecretChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateNewSecretChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createNewStickerSet',
    ...fns: Array<Middleware<ApiResponse<api.CreateNewStickerSetParams, api.StickerSetUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createNewSupergroupChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateNewSupergroupChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createPrivateChat',
    ...fns: Array<Middleware<ApiResponse<api.CreatePrivateChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createSecretChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateSecretChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createSupergroupChat',
    ...fns: Array<Middleware<ApiResponse<api.CreateSupergroupChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'createTemporaryPassword',
    ...fns: Array<Middleware<ApiResponse<api.CreateTemporaryPasswordParams, api.TemporaryPasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteAccount',
    ...fns: Array<Middleware<ApiResponse<api.DeleteAccountParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteChatHistory',
    ...fns: Array<Middleware<ApiResponse<api.DeleteChatHistoryParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteChatMessagesFromUser',
    ...fns: Array<Middleware<ApiResponse<api.DeleteChatMessagesFromUserParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteChatReplyMarkup',
    ...fns: Array<Middleware<ApiResponse<api.DeleteChatReplyMarkupParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteFile',
    ...fns: Array<Middleware<ApiResponse<api.DeleteFileParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteLanguagePack',
    ...fns: Array<Middleware<ApiResponse<api.DeleteLanguagePackParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteMessages',
    ...fns: Array<Middleware<ApiResponse<api.DeleteMessagesParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deletePassportElement',
    ...fns: Array<Middleware<ApiResponse<api.DeletePassportElementParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteProfilePhoto',
    ...fns: Array<Middleware<ApiResponse<api.DeleteProfilePhotoParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteSavedCredentials',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteSavedOrderInfo',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'deleteSupergroup',
    ...fns: Array<Middleware<ApiResponse<api.DeleteSupergroupParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'destroy',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'disableProxy',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'discardCall',
    ...fns: Array<Middleware<ApiResponse<api.DiscardCallParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'disconnectAllWebsites',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'disconnectWebsite',
    ...fns: Array<Middleware<ApiResponse<api.DisconnectWebsiteParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'downloadFile',
    ...fns: Array<Middleware<ApiResponse<api.DownloadFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editCustomLanguagePackInfo',
    ...fns: Array<Middleware<ApiResponse<api.EditCustomLanguagePackInfoParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editInlineMessageCaption',
    ...fns: Array<Middleware<ApiResponse<api.EditInlineMessageCaptionParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editInlineMessageLiveLocation',
    ...fns: Array<Middleware<ApiResponse<api.EditInlineMessageLiveLocationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editInlineMessageMedia',
    ...fns: Array<Middleware<ApiResponse<api.EditInlineMessageMediaParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editInlineMessageReplyMarkup',
    ...fns: Array<Middleware<ApiResponse<api.EditInlineMessageReplyMarkupParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editInlineMessageText',
    ...fns: Array<Middleware<ApiResponse<api.EditInlineMessageTextParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editMessageCaption',
    ...fns: Array<Middleware<ApiResponse<api.EditMessageCaptionParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editMessageLiveLocation',
    ...fns: Array<Middleware<ApiResponse<api.EditMessageLiveLocationParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editMessageMedia',
    ...fns: Array<Middleware<ApiResponse<api.EditMessageMediaParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editMessageReplyMarkup',
    ...fns: Array<Middleware<ApiResponse<api.EditMessageReplyMarkupParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editMessageText',
    ...fns: Array<Middleware<ApiResponse<api.EditMessageTextParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'editProxy',
    ...fns: Array<Middleware<ApiResponse<api.EditProxyParams, api.ProxyUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'enableProxy',
    ...fns: Array<Middleware<ApiResponse<api.EnableProxyParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'finishFileGeneration',
    ...fns: Array<Middleware<ApiResponse<api.FinishFileGenerationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'forwardMessages',
    ...fns: Array<Middleware<ApiResponse<api.ForwardMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'generateChatInviteLink',
    ...fns: Array<Middleware<ApiResponse<api.GenerateChatInviteLinkParams, api.ChatInviteLinkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getAccountTtl',
    ...fns: Array<Middleware<ApiResponse<never, api.AccountTtlUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getActiveLiveLocationMessages',
    ...fns: Array<Middleware<ApiResponse<never, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getActiveSessions',
    ...fns: Array<Middleware<ApiResponse<never, api.SessionsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getAllPassportElements',
    ...fns: Array<Middleware<ApiResponse<api.GetAllPassportElementsParams, api.PassportElementsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getApplicationConfig',
    ...fns: Array<Middleware<ApiResponse<never, api.JsonValueUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getArchivedStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.GetArchivedStickerSetsParams, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getAttachedStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.GetAttachedStickerSetsParams, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getAuthorizationState',
    ...fns: Array<Middleware<ApiResponse<never, api.AuthorizationStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getAutoDownloadSettingsPresets',
    ...fns: Array<Middleware<ApiResponse<never, api.AutoDownloadSettingsPresetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getBackgroundUrl',
    ...fns: Array<Middleware<ApiResponse<api.GetBackgroundUrlParams, api.HttpUrlUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getBackgrounds',
    ...fns: Array<Middleware<ApiResponse<api.GetBackgroundsParams, api.BackgroundsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getBasicGroup',
    ...fns: Array<Middleware<ApiResponse<api.GetBasicGroupParams, api.BasicGroupUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getBasicGroupFullInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetBasicGroupFullInfoParams, api.BasicGroupFullInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getBlockedUsers',
    ...fns: Array<Middleware<ApiResponse<api.GetBlockedUsersParams, api.UsersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getCallbackQueryAnswer',
    ...fns: Array<Middleware<ApiResponse<api.GetCallbackQueryAnswerParams, api.CallbackQueryAnswerUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChat',
    ...fns: Array<Middleware<ApiResponse<api.GetChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatAdministrators',
    ...fns: Array<Middleware<ApiResponse<api.GetChatAdministratorsParams, api.UsersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatEventLog',
    ...fns: Array<Middleware<ApiResponse<api.GetChatEventLogParams, api.ChatEventsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatHistory',
    ...fns: Array<Middleware<ApiResponse<api.GetChatHistoryParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatMember',
    ...fns: Array<Middleware<ApiResponse<api.GetChatMemberParams, api.ChatMemberUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatMessageByDate',
    ...fns: Array<Middleware<ApiResponse<api.GetChatMessageByDateParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatMessageCount',
    ...fns: Array<Middleware<ApiResponse<api.GetChatMessageCountParams, api.CountUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatNotificationSettingsExceptions',
    ...fns: Array<Middleware<ApiResponse<api.GetChatNotificationSettingsExceptionsParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatPinnedMessage',
    ...fns: Array<Middleware<ApiResponse<api.GetChatPinnedMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatReportSpamState',
    ...fns: Array<Middleware<ApiResponse<api.GetChatReportSpamStateParams, api.ChatReportSpamStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChatStatisticsUrl',
    ...fns: Array<Middleware<ApiResponse<api.GetChatStatisticsUrlParams, api.HttpUrlUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getChats',
    ...fns: Array<Middleware<ApiResponse<api.GetChatsParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getConnectedWebsites',
    ...fns: Array<Middleware<ApiResponse<never, api.ConnectedWebsitesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getContacts',
    ...fns: Array<Middleware<ApiResponse<never, api.UsersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getCountryCode',
    ...fns: Array<Middleware<ApiResponse<never, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getCreatedPublicChats',
    ...fns: Array<Middleware<ApiResponse<never, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getCurrentState',
    ...fns: Array<Middleware<ApiResponse<never, api.UpdatesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getDatabaseStatistics',
    ...fns: Array<Middleware<ApiResponse<never, api.DatabaseStatisticsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getDeepLinkInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetDeepLinkInfoParams, api.DeepLinkInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getEmojiSuggestionsUrl',
    ...fns: Array<Middleware<ApiResponse<api.GetEmojiSuggestionsUrlParams, api.HttpUrlUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getFavoriteStickers',
    ...fns: Array<Middleware<ApiResponse<never, api.StickersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getFile',
    ...fns: Array<Middleware<ApiResponse<api.GetFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getFileDownloadedPrefixSize',
    ...fns: Array<Middleware<ApiResponse<api.GetFileDownloadedPrefixSizeParams, api.CountUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getFileExtension',
    ...fns: Array<Middleware<ApiResponse<api.GetFileExtensionParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getFileMimeType',
    ...fns: Array<Middleware<ApiResponse<api.GetFileMimeTypeParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getGameHighScores',
    ...fns: Array<Middleware<ApiResponse<api.GetGameHighScoresParams, api.GameHighScoresUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getGroupsInCommon',
    ...fns: Array<Middleware<ApiResponse<api.GetGroupsInCommonParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getImportedContactCount',
    ...fns: Array<Middleware<ApiResponse<never, api.CountUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getInlineGameHighScores',
    ...fns: Array<Middleware<ApiResponse<api.GetInlineGameHighScoresParams, api.GameHighScoresUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getInlineQueryResults',
    ...fns: Array<Middleware<ApiResponse<api.GetInlineQueryResultsParams, api.InlineQueryResultsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getInstalledStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.GetInstalledStickerSetsParams, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getInviteText',
    ...fns: Array<Middleware<ApiResponse<never, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getJsonString',
    ...fns: Array<Middleware<ApiResponse<api.GetJsonStringParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getJsonValue',
    ...fns: Array<Middleware<ApiResponse<api.GetJsonValueParams, api.JsonValueUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLanguagePackInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetLanguagePackInfoParams, api.LanguagePackInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLanguagePackString',
    ...fns: Array<Middleware<ApiResponse<api.GetLanguagePackStringParams, api.LanguagePackStringValueUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLanguagePackStrings',
    ...fns: Array<Middleware<ApiResponse<api.GetLanguagePackStringsParams, api.LanguagePackStringsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLocalizationTargetInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetLocalizationTargetInfoParams, api.LocalizationTargetInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLogStream',
    ...fns: Array<Middleware<ApiResponse<never, api.LogStreamUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLogTagVerbosityLevel',
    ...fns: Array<Middleware<ApiResponse<api.GetLogTagVerbosityLevelParams, api.LogVerbosityLevelUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLogTags',
    ...fns: Array<Middleware<ApiResponse<never, api.LogTagsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getLogVerbosityLevel',
    ...fns: Array<Middleware<ApiResponse<never, api.LogVerbosityLevelUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMapThumbnailFile',
    ...fns: Array<Middleware<ApiResponse<api.GetMapThumbnailFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMe',
    ...fns: Array<Middleware<ApiResponse<never, api.UserUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMessage',
    ...fns: Array<Middleware<ApiResponse<api.GetMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMessageLink',
    ...fns: Array<Middleware<ApiResponse<api.GetMessageLinkParams, api.HttpUrlUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMessageLinkInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetMessageLinkInfoParams, api.MessageLinkInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMessageLocally',
    ...fns: Array<Middleware<ApiResponse<api.GetMessageLocallyParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getMessages',
    ...fns: Array<Middleware<ApiResponse<api.GetMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getNetworkStatistics',
    ...fns: Array<Middleware<ApiResponse<api.GetNetworkStatisticsParams, api.NetworkStatisticsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getOption',
    ...fns: Array<Middleware<ApiResponse<api.GetOptionParams, api.OptionValueUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPassportAuthorizationForm',
    ...fns: Array<Middleware<ApiResponse<api.GetPassportAuthorizationFormParams, api.PassportAuthorizationFormUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPassportAuthorizationFormAvailableElements',
    ...fns: Array<Middleware<ApiResponse<api.GetPassportAuthorizationFormAvailableElementsParams, api.PassportElementsWithErrorsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPassportElement',
    ...fns: Array<Middleware<ApiResponse<api.GetPassportElementParams, api.PassportElementUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPasswordState',
    ...fns: Array<Middleware<ApiResponse<never, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPaymentForm',
    ...fns: Array<Middleware<ApiResponse<api.GetPaymentFormParams, api.PaymentFormUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPaymentReceipt',
    ...fns: Array<Middleware<ApiResponse<api.GetPaymentReceiptParams, api.PaymentReceiptUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPreferredCountryLanguage',
    ...fns: Array<Middleware<ApiResponse<api.GetPreferredCountryLanguageParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getProxies',
    ...fns: Array<Middleware<ApiResponse<never, api.ProxiesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getProxyLink',
    ...fns: Array<Middleware<ApiResponse<api.GetProxyLinkParams, api.TextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPublicMessageLink',
    ...fns: Array<Middleware<ApiResponse<api.GetPublicMessageLinkParams, api.PublicMessageLinkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getPushReceiverId',
    ...fns: Array<Middleware<ApiResponse<api.GetPushReceiverIdParams, api.PushReceiverIdUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRecentInlineBots',
    ...fns: Array<Middleware<ApiResponse<never, api.UsersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRecentStickers',
    ...fns: Array<Middleware<ApiResponse<api.GetRecentStickersParams, api.StickersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRecentlyVisitedTMeUrls',
    ...fns: Array<Middleware<ApiResponse<api.GetRecentlyVisitedTMeUrlsParams, api.TMeUrlsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRecoveryEmailAddress',
    ...fns: Array<Middleware<ApiResponse<api.GetRecoveryEmailAddressParams, api.RecoveryEmailAddressUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRemoteFile',
    ...fns: Array<Middleware<ApiResponse<api.GetRemoteFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getRepliedMessage',
    ...fns: Array<Middleware<ApiResponse<api.GetRepliedMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSavedAnimations',
    ...fns: Array<Middleware<ApiResponse<never, api.AnimationsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSavedOrderInfo',
    ...fns: Array<Middleware<ApiResponse<never, api.OrderInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getScopeNotificationSettings',
    ...fns: Array<Middleware<ApiResponse<api.GetScopeNotificationSettingsParams, api.ScopeNotificationSettingsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSecretChat',
    ...fns: Array<Middleware<ApiResponse<api.GetSecretChatParams, api.SecretChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getStickerEmojis',
    ...fns: Array<Middleware<ApiResponse<api.GetStickerEmojisParams, api.EmojisUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getStickerSet',
    ...fns: Array<Middleware<ApiResponse<api.GetStickerSetParams, api.StickerSetUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getStickers',
    ...fns: Array<Middleware<ApiResponse<api.GetStickersParams, api.StickersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getStorageStatistics',
    ...fns: Array<Middleware<ApiResponse<api.GetStorageStatisticsParams, api.StorageStatisticsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getStorageStatisticsFast',
    ...fns: Array<Middleware<ApiResponse<never, api.StorageStatisticsFastUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSupergroup',
    ...fns: Array<Middleware<ApiResponse<api.GetSupergroupParams, api.SupergroupUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSupergroupFullInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetSupergroupFullInfoParams, api.SupergroupFullInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSupergroupMembers',
    ...fns: Array<Middleware<ApiResponse<api.GetSupergroupMembersParams, api.ChatMembersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getSupportUser',
    ...fns: Array<Middleware<ApiResponse<never, api.UserUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getTemporaryPasswordState',
    ...fns: Array<Middleware<ApiResponse<never, api.TemporaryPasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getTextEntities',
    ...fns: Array<Middleware<ApiResponse<api.GetTextEntitiesParams, api.TextEntitiesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getTopChats',
    ...fns: Array<Middleware<ApiResponse<api.GetTopChatsParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getTrendingStickerSets',
    ...fns: Array<Middleware<ApiResponse<never, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getUser',
    ...fns: Array<Middleware<ApiResponse<api.GetUserParams, api.UserUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getUserFullInfo',
    ...fns: Array<Middleware<ApiResponse<api.GetUserFullInfoParams, api.UserFullInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getUserPrivacySettingRules',
    ...fns: Array<Middleware<ApiResponse<api.GetUserPrivacySettingRulesParams, api.UserPrivacySettingRulesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getUserProfilePhotos',
    ...fns: Array<Middleware<ApiResponse<api.GetUserProfilePhotosParams, api.UserProfilePhotosUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getWebPageInstantView',
    ...fns: Array<Middleware<ApiResponse<api.GetWebPageInstantViewParams, api.WebPageInstantViewUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'getWebPagePreview',
    ...fns: Array<Middleware<ApiResponse<api.GetWebPagePreviewParams, api.WebPageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'importContacts',
    ...fns: Array<Middleware<ApiResponse<api.ImportContactsParams, api.ImportedContactsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'joinChat',
    ...fns: Array<Middleware<ApiResponse<api.JoinChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'joinChatByInviteLink',
    ...fns: Array<Middleware<ApiResponse<api.JoinChatByInviteLinkParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'leaveChat',
    ...fns: Array<Middleware<ApiResponse<api.LeaveChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'logOut',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'openChat',
    ...fns: Array<Middleware<ApiResponse<api.OpenChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'openMessageContent',
    ...fns: Array<Middleware<ApiResponse<api.OpenMessageContentParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'optimizeStorage',
    ...fns: Array<Middleware<ApiResponse<api.OptimizeStorageParams, api.StorageStatisticsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'parseTextEntities',
    ...fns: Array<Middleware<ApiResponse<api.ParseTextEntitiesParams, api.FormattedTextUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'pinChatMessage',
    ...fns: Array<Middleware<ApiResponse<api.PinChatMessageParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'pingProxy',
    ...fns: Array<Middleware<ApiResponse<api.PingProxyParams, api.SecondsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'processPushNotification',
    ...fns: Array<Middleware<ApiResponse<api.ProcessPushNotificationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'readAllChatMentions',
    ...fns: Array<Middleware<ApiResponse<api.ReadAllChatMentionsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'readFilePart',
    ...fns: Array<Middleware<ApiResponse<api.ReadFilePartParams, api.FilePartUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'recoverAuthenticationPassword',
    ...fns: Array<Middleware<ApiResponse<api.RecoverAuthenticationPasswordParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'recoverPassword',
    ...fns: Array<Middleware<ApiResponse<api.RecoverPasswordParams, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'registerDevice',
    ...fns: Array<Middleware<ApiResponse<api.RegisterDeviceParams, api.PushReceiverIdUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'registerUser',
    ...fns: Array<Middleware<ApiResponse<api.RegisterUserParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeBackground',
    ...fns: Array<Middleware<ApiResponse<api.RemoveBackgroundParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeContacts',
    ...fns: Array<Middleware<ApiResponse<api.RemoveContactsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeFavoriteSticker',
    ...fns: Array<Middleware<ApiResponse<api.RemoveFavoriteStickerParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeNotification',
    ...fns: Array<Middleware<ApiResponse<api.RemoveNotificationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeNotificationGroup',
    ...fns: Array<Middleware<ApiResponse<api.RemoveNotificationGroupParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeProxy',
    ...fns: Array<Middleware<ApiResponse<api.RemoveProxyParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeRecentHashtag',
    ...fns: Array<Middleware<ApiResponse<api.RemoveRecentHashtagParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeRecentSticker',
    ...fns: Array<Middleware<ApiResponse<api.RemoveRecentStickerParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeRecentlyFoundChat',
    ...fns: Array<Middleware<ApiResponse<api.RemoveRecentlyFoundChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeSavedAnimation',
    ...fns: Array<Middleware<ApiResponse<api.RemoveSavedAnimationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeStickerFromSet',
    ...fns: Array<Middleware<ApiResponse<api.RemoveStickerFromSetParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'removeTopChat',
    ...fns: Array<Middleware<ApiResponse<api.RemoveTopChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'reorderInstalledStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.ReorderInstalledStickerSetsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'reportChat',
    ...fns: Array<Middleware<ApiResponse<api.ReportChatParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'reportSupergroupSpam',
    ...fns: Array<Middleware<ApiResponse<api.ReportSupergroupSpamParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'requestAuthenticationPasswordRecovery',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'requestPasswordRecovery',
    ...fns: Array<Middleware<ApiResponse<never, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendAuthenticationCode',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendChangePhoneNumberCode',
    ...fns: Array<Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendEmailAddressVerificationCode',
    ...fns: Array<Middleware<ApiResponse<never, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendMessages',
    ...fns: Array<Middleware<ApiResponse<api.ResendMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendPhoneNumberConfirmationCode',
    ...fns: Array<Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendPhoneNumberVerificationCode',
    ...fns: Array<Middleware<ApiResponse<never, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resendRecoveryEmailAddressCode',
    ...fns: Array<Middleware<ApiResponse<never, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resetAllNotificationSettings',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resetBackgrounds',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'resetNetworkStatistics',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'saveApplicationLogEvent',
    ...fns: Array<Middleware<ApiResponse<api.SaveApplicationLogEventParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchBackground',
    ...fns: Array<Middleware<ApiResponse<api.SearchBackgroundParams, api.BackgroundUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchCallMessages',
    ...fns: Array<Middleware<ApiResponse<api.SearchCallMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchChatMembers',
    ...fns: Array<Middleware<ApiResponse<api.SearchChatMembersParams, api.ChatMembersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchChatMessages',
    ...fns: Array<Middleware<ApiResponse<api.SearchChatMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchChatRecentLocationMessages',
    ...fns: Array<Middleware<ApiResponse<api.SearchChatRecentLocationMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchChats',
    ...fns: Array<Middleware<ApiResponse<api.SearchChatsParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchChatsOnServer',
    ...fns: Array<Middleware<ApiResponse<api.SearchChatsOnServerParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchContacts',
    ...fns: Array<Middleware<ApiResponse<api.SearchContactsParams, api.UsersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchEmojis',
    ...fns: Array<Middleware<ApiResponse<api.SearchEmojisParams, api.EmojisUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchHashtags',
    ...fns: Array<Middleware<ApiResponse<api.SearchHashtagsParams, api.HashtagsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchInstalledStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.SearchInstalledStickerSetsParams, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchMessages',
    ...fns: Array<Middleware<ApiResponse<api.SearchMessagesParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchPublicChat',
    ...fns: Array<Middleware<ApiResponse<api.SearchPublicChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchPublicChats',
    ...fns: Array<Middleware<ApiResponse<api.SearchPublicChatsParams, api.ChatsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchSecretMessages',
    ...fns: Array<Middleware<ApiResponse<api.SearchSecretMessagesParams, api.FoundMessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchStickerSet',
    ...fns: Array<Middleware<ApiResponse<api.SearchStickerSetParams, api.StickerSetUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.SearchStickerSetsParams, api.StickerSetsUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'searchStickers',
    ...fns: Array<Middleware<ApiResponse<api.SearchStickersParams, api.StickersUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendBotStartMessage',
    ...fns: Array<Middleware<ApiResponse<api.SendBotStartMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendCallDebugInformation',
    ...fns: Array<Middleware<ApiResponse<api.SendCallDebugInformationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendCallRating',
    ...fns: Array<Middleware<ApiResponse<api.SendCallRatingParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendChatAction',
    ...fns: Array<Middleware<ApiResponse<api.SendChatActionParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendChatScreenshotTakenNotification',
    ...fns: Array<Middleware<ApiResponse<api.SendChatScreenshotTakenNotificationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendChatSetTtlMessage',
    ...fns: Array<Middleware<ApiResponse<api.SendChatSetTtlMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendCustomRequest',
    ...fns: Array<Middleware<ApiResponse<api.SendCustomRequestParams, api.CustomRequestResultUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendEmailAddressVerificationCode',
    ...fns: Array<Middleware<ApiResponse<api.SendEmailAddressVerificationCodeParams, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendInlineQueryResultMessage',
    ...fns: Array<Middleware<ApiResponse<api.SendInlineQueryResultMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendMessage',
    ...fns: Array<Middleware<ApiResponse<api.SendMessageParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendMessageAlbum',
    ...fns: Array<Middleware<ApiResponse<api.SendMessageAlbumParams, api.MessagesUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendPassportAuthorizationForm',
    ...fns: Array<Middleware<ApiResponse<api.SendPassportAuthorizationFormParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendPaymentForm',
    ...fns: Array<Middleware<ApiResponse<api.SendPaymentFormParams, api.PaymentResultUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendPhoneNumberConfirmationCode',
    ...fns: Array<Middleware<ApiResponse<api.SendPhoneNumberConfirmationCodeParams, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'sendPhoneNumberVerificationCode',
    ...fns: Array<Middleware<ApiResponse<api.SendPhoneNumberVerificationCodeParams, api.AuthenticationCodeInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setAccountTtl',
    ...fns: Array<Middleware<ApiResponse<api.SetAccountTtlParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setAlarm',
    ...fns: Array<Middleware<ApiResponse<api.SetAlarmParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setAuthenticationPhoneNumber',
    ...fns: Array<Middleware<ApiResponse<api.SetAuthenticationPhoneNumberParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setAutoDownloadSettings',
    ...fns: Array<Middleware<ApiResponse<api.SetAutoDownloadSettingsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setBackground',
    ...fns: Array<Middleware<ApiResponse<api.SetBackgroundParams, api.BackgroundUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setBio',
    ...fns: Array<Middleware<ApiResponse<api.SetBioParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setBotUpdatesStatus',
    ...fns: Array<Middleware<ApiResponse<api.SetBotUpdatesStatusParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatClientData',
    ...fns: Array<Middleware<ApiResponse<api.SetChatClientDataParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatDescription',
    ...fns: Array<Middleware<ApiResponse<api.SetChatDescriptionParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatDraftMessage',
    ...fns: Array<Middleware<ApiResponse<api.SetChatDraftMessageParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatMemberStatus',
    ...fns: Array<Middleware<ApiResponse<api.SetChatMemberStatusParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatNotificationSettings',
    ...fns: Array<Middleware<ApiResponse<api.SetChatNotificationSettingsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatPermissions',
    ...fns: Array<Middleware<ApiResponse<api.SetChatPermissionsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatPhoto',
    ...fns: Array<Middleware<ApiResponse<api.SetChatPhotoParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setChatTitle',
    ...fns: Array<Middleware<ApiResponse<api.SetChatTitleParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setCustomLanguagePack',
    ...fns: Array<Middleware<ApiResponse<api.SetCustomLanguagePackParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setCustomLanguagePackString',
    ...fns: Array<Middleware<ApiResponse<api.SetCustomLanguagePackStringParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setDatabaseEncryptionKey',
    ...fns: Array<Middleware<ApiResponse<api.SetDatabaseEncryptionKeyParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setFileGenerationProgress',
    ...fns: Array<Middleware<ApiResponse<api.SetFileGenerationProgressParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setGameScore',
    ...fns: Array<Middleware<ApiResponse<api.SetGameScoreParams, api.MessageUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setInlineGameScore',
    ...fns: Array<Middleware<ApiResponse<api.SetInlineGameScoreParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setLogStream',
    ...fns: Array<Middleware<ApiResponse<api.SetLogStreamParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setLogTagVerbosityLevel',
    ...fns: Array<Middleware<ApiResponse<api.SetLogTagVerbosityLevelParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setLogVerbosityLevel',
    ...fns: Array<Middleware<ApiResponse<api.SetLogVerbosityLevelParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setName',
    ...fns: Array<Middleware<ApiResponse<api.SetNameParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setNetworkType',
    ...fns: Array<Middleware<ApiResponse<api.SetNetworkTypeParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setOption',
    ...fns: Array<Middleware<ApiResponse<api.SetOptionParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setPassportElement',
    ...fns: Array<Middleware<ApiResponse<api.SetPassportElementParams, api.PassportElementUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setPassportElementErrors',
    ...fns: Array<Middleware<ApiResponse<api.SetPassportElementErrorsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setPassword',
    ...fns: Array<Middleware<ApiResponse<api.SetPasswordParams, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setPinnedChats',
    ...fns: Array<Middleware<ApiResponse<api.SetPinnedChatsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setPollAnswer',
    ...fns: Array<Middleware<ApiResponse<api.SetPollAnswerParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setProfilePhoto',
    ...fns: Array<Middleware<ApiResponse<api.SetProfilePhotoParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setRecoveryEmailAddress',
    ...fns: Array<Middleware<ApiResponse<api.SetRecoveryEmailAddressParams, api.PasswordStateUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setScopeNotificationSettings',
    ...fns: Array<Middleware<ApiResponse<api.SetScopeNotificationSettingsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setStickerPositionInSet',
    ...fns: Array<Middleware<ApiResponse<api.SetStickerPositionInSetParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setSupergroupStickerSet',
    ...fns: Array<Middleware<ApiResponse<api.SetSupergroupStickerSetParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setSupergroupUsername',
    ...fns: Array<Middleware<ApiResponse<api.SetSupergroupUsernameParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setTdlibParameters',
    ...fns: Array<Middleware<ApiResponse<api.SetTdlibParametersParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setUserPrivacySettingRules',
    ...fns: Array<Middleware<ApiResponse<api.SetUserPrivacySettingRulesParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'setUsername',
    ...fns: Array<Middleware<ApiResponse<api.SetUsernameParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'stopPoll',
    ...fns: Array<Middleware<ApiResponse<api.StopPollParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'synchronizeLanguagePack',
    ...fns: Array<Middleware<ApiResponse<api.SynchronizeLanguagePackParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'terminateAllOtherSessions',
    ...fns: Array<Middleware<ApiResponse<never, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'terminateSession',
    ...fns: Array<Middleware<ApiResponse<api.TerminateSessionParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'toggleChatDefaultDisableNotification',
    ...fns: Array<Middleware<ApiResponse<api.ToggleChatDefaultDisableNotificationParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'toggleChatIsMarkedAsUnread',
    ...fns: Array<Middleware<ApiResponse<api.ToggleChatIsMarkedAsUnreadParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'toggleChatIsPinned',
    ...fns: Array<Middleware<ApiResponse<api.ToggleChatIsPinnedParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'toggleSupergroupIsAllHistoryAvailable',
    ...fns: Array<Middleware<ApiResponse<api.ToggleSupergroupIsAllHistoryAvailableParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'toggleSupergroupSignMessages',
    ...fns: Array<Middleware<ApiResponse<api.ToggleSupergroupSignMessagesParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'unblockUser',
    ...fns: Array<Middleware<ApiResponse<api.UnblockUserParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'unpinChatMessage',
    ...fns: Array<Middleware<ApiResponse<api.UnpinChatMessageParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'upgradeBasicGroupChatToSupergroupChat',
    ...fns: Array<Middleware<ApiResponse<api.UpgradeBasicGroupChatToSupergroupChatParams, api.ChatUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'uploadFile',
    ...fns: Array<Middleware<ApiResponse<api.UploadFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'uploadStickerFile',
    ...fns: Array<Middleware<ApiResponse<api.UploadStickerFileParams, api.FileUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'validateOrderInfo',
    ...fns: Array<Middleware<ApiResponse<api.ValidateOrderInfoParams, api.ValidatedOrderInfoUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'viewMessages',
    ...fns: Array<Middleware<ApiResponse<api.ViewMessagesParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'viewTrendingStickerSets',
    ...fns: Array<Middleware<ApiResponse<api.ViewTrendingStickerSetsParams, api.OkUnion> & ContextT>>
  ): void
  (
    predicateTypes: 'writeGeneratedFilePart',
    ...fns: Array<Middleware<ApiResponse<api.WriteGeneratedFilePartParams, api.OkUnion> & ContextT>>
  ): void
  // Updates
  (
    predicateTypes: 'updateAuthorizationState',
    ...fns: Middleware<UpdateContext<api.UpdateAuthorizationState> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewMessage',
    ...fns: Middleware<UpdateContext<api.UpdateNewMessage> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageSendAcknowledged',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendAcknowledged> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageSendSucceeded',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendSucceeded> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageSendFailed',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendFailed> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageContent',
    ...fns: Middleware<UpdateContext<api.UpdateMessageContent> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageEdited',
    ...fns: Middleware<UpdateContext<api.UpdateMessageEdited> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageViews',
    ...fns: Middleware<UpdateContext<api.UpdateMessageViews> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageContentOpened',
    ...fns: Middleware<UpdateContext<api.UpdateMessageContentOpened> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateMessageMentionRead',
    ...fns: Middleware<UpdateContext<api.UpdateMessageMentionRead> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewChat',
    ...fns: Middleware<UpdateContext<api.UpdateNewChat> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatTitle',
    ...fns: Middleware<UpdateContext<api.UpdateChatTitle> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatPhoto',
    ...fns: Middleware<UpdateContext<api.UpdateChatPhoto> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatPermissions',
    ...fns: Middleware<UpdateContext<api.UpdateChatPermissions> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatLastMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatLastMessage> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatOrder',
    ...fns: Middleware<UpdateContext<api.UpdateChatOrder> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatIsPinned',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsPinned> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatIsMarkedAsUnread',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsMarkedAsUnread> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatIsSponsored',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsSponsored> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatDefaultDisableNotification',
    ...fns: Middleware<UpdateContext<api.UpdateChatDefaultDisableNotification> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatReadInbox',
    ...fns: Middleware<UpdateContext<api.UpdateChatReadInbox> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatReadOutbox',
    ...fns: Middleware<UpdateContext<api.UpdateChatReadOutbox> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatUnreadMentionCount',
    ...fns: Middleware<UpdateContext<api.UpdateChatUnreadMentionCount> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatNotificationSettings',
    ...fns: Middleware<UpdateContext<api.UpdateChatNotificationSettings> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateScopeNotificationSettings',
    ...fns: Middleware<UpdateContext<api.UpdateScopeNotificationSettings> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatPinnedMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatPinnedMessage> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatReplyMarkup',
    ...fns: Middleware<UpdateContext<api.UpdateChatReplyMarkup> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatDraftMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatDraftMessage> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateChatOnlineMemberCount',
    ...fns: Middleware<UpdateContext<api.UpdateChatOnlineMemberCount> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNotification',
    ...fns: Middleware<UpdateContext<api.UpdateNotification> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNotificationGroup',
    ...fns: Middleware<UpdateContext<api.UpdateNotificationGroup> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateActiveNotifications',
    ...fns: Middleware<UpdateContext<api.UpdateActiveNotifications> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateHavePendingNotifications',
    ...fns: Middleware<UpdateContext<api.UpdateHavePendingNotifications> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateDeleteMessages',
    ...fns: Middleware<UpdateContext<api.UpdateDeleteMessages> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUserChatAction',
    ...fns: Middleware<UpdateContext<api.UpdateUserChatAction> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUserStatus',
    ...fns: Middleware<UpdateContext<api.UpdateUserStatus> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUser',
    ...fns: Middleware<UpdateContext<api.UpdateUser> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateBasicGroup',
    ...fns: Middleware<UpdateContext<api.UpdateBasicGroup> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateSupergroup',
    ...fns: Middleware<UpdateContext<api.UpdateSupergroup> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateSecretChat',
    ...fns: Middleware<UpdateContext<api.UpdateSecretChat> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUserFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateUserFullInfo> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateBasicGroupFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateBasicGroupFullInfo> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateSupergroupFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateSupergroupFullInfo> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateServiceNotification',
    ...fns: Middleware<UpdateContext<api.UpdateServiceNotification> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateFile',
    ...fns: Middleware<UpdateContext<api.UpdateFile> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateFileGenerationStart',
    ...fns: Middleware<UpdateContext<api.UpdateFileGenerationStart> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateFileGenerationStop',
    ...fns: Middleware<UpdateContext<api.UpdateFileGenerationStop> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateCall',
    ...fns: Middleware<UpdateContext<api.UpdateCall> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUserPrivacySettingRules',
    ...fns: Middleware<UpdateContext<api.UpdateUserPrivacySettingRules> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUnreadMessageCount',
    ...fns: Middleware<UpdateContext<api.UpdateUnreadMessageCount> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateUnreadChatCount',
    ...fns: Middleware<UpdateContext<api.UpdateUnreadChatCount> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateOption',
    ...fns: Middleware<UpdateContext<api.UpdateOption> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateInstalledStickerSets',
    ...fns: Middleware<UpdateContext<api.UpdateInstalledStickerSets> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateTrendingStickerSets',
    ...fns: Middleware<UpdateContext<api.UpdateTrendingStickerSets> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateRecentStickers',
    ...fns: Middleware<UpdateContext<api.UpdateRecentStickers> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateFavoriteStickers',
    ...fns: Middleware<UpdateContext<api.UpdateFavoriteStickers> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateSavedAnimations',
    ...fns: Middleware<UpdateContext<api.UpdateSavedAnimations> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateSelectedBackground',
    ...fns: Middleware<UpdateContext<api.UpdateSelectedBackground> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateLanguagePackStrings',
    ...fns: Middleware<UpdateContext<api.UpdateLanguagePackStrings> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateConnectionState',
    ...fns: Middleware<UpdateContext<api.UpdateConnectionState> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateTermsOfService',
    ...fns: Middleware<UpdateContext<api.UpdateTermsOfService> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewInlineQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewInlineQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewChosenInlineResult',
    ...fns: Middleware<UpdateContext<api.UpdateNewChosenInlineResult> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewCallbackQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewCallbackQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewInlineCallbackQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewInlineCallbackQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewShippingQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewShippingQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewPreCheckoutQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewPreCheckoutQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewCustomEvent',
    ...fns: Middleware<UpdateContext<api.UpdateNewCustomEvent> & ContextT>[]
  ): void
  (
    predicateTypes: 'updateNewCustomQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewCustomQuery> & ContextT>[]
  ): void
  (
    predicateTypes: 'updatePoll',
    ...fns: Middleware<UpdateContext<api.UpdatePoll> & ContextT>[]
  ): void
  <ResponseT extends BaseTdObject = TdObject> (
    predicateTypes: string | string[],
    ...fns: Array<Middleware<(ApiResponse<any, ResponseT> | UpdateContext<ResponseT>) & ContextT>>
  ): void
}
