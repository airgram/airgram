// tslint:disable:max-line-length

import * as ag from '../types'
import * as methods from './methods'
export * from './inputs'
export * from './methods'
export * from './models'
export * from './outputs'
export * from './enums'

import {
  AccountTtlInput,
  CallProtocolInput,
  CallbackQueryPayloadInputUnion,
  ChatActionInputUnion,
  ChatEventLogFiltersInput,
  ChatMemberStatusInputUnion,
  ChatMembersFilterInputUnion,
  ChatNotificationSettingsInput,
  ChatReportReasonInputUnion,
  ContactInput,
  DeviceTokenInputUnion,
  DraftMessageInput,
  ErrorInput,
  FileTypeInputUnion,
  FormattedTextInput,
  InputCredentialsInputUnion,
  InputFileInputUnion,
  InputInlineQueryResultInputUnion,
  InputMessageContentInputUnion,
  InputPassportElementErrorInput,
  InputPassportElementInputUnion,
  InputStickerInput,
  LanguagePackInfoInput,
  LanguagePackStringInput,
  LocationInput,
  NetworkStatisticsEntryInputUnion,
  NetworkTypeInputUnion,
  NotificationSettingsScopeInputUnion,
  OptionValueInputUnion,
  OrderInfoInput,
  PassportElementTypeInputUnion,
  ProxyTypeInputUnion,
  ReplyMarkupInputUnion,
  ScopeNotificationSettingsInput,
  SearchMessagesFilterInputUnion,
  ShippingOptionInput,
  SupergroupMembersFilterInputUnion,
  TdlibParametersInput,
  TestIntInput,
  TestStringInput,
  TextParseModeInputUnion,
  TopChatCategoryInputUnion,
  UserPrivacySettingInputUnion,
  UserPrivacySettingRulesInput
} from './inputs'

import {
  AccountTtlUnion,
  AnimationsUnion,
  AuthenticationCodeInfoUnion,
  AuthorizationStateUnion,
  BasicGroupFullInfoUnion,
  BasicGroupUnion,
  CallIdUnion,
  CallbackQueryAnswerUnion,
  ChatEventsUnion,
  ChatInviteLinkInfoUnion,
  ChatInviteLinkUnion,
  ChatMemberUnion,
  ChatMembersUnion,
  ChatReportSpamStateUnion,
  ChatUnion,
  ChatsUnion,
  CheckChatUsernameResultUnion,
  ConnectedWebsitesUnion,
  CountUnion,
  CustomRequestResultUnion,
  DeepLinkInfoUnion,
  EmailAddressAuthenticationCodeInfoUnion,
  ErrorUnion,
  FileUnion,
  FormattedTextUnion,
  FoundMessagesUnion,
  GameHighScoresUnion,
  HashtagsUnion,
  ImportedContactsUnion,
  InlineQueryResultsUnion,
  LanguagePackStringValueUnion,
  LanguagePackStringsUnion,
  LocalizationTargetInfoUnion,
  MessageUnion,
  MessagesUnion,
  NetworkStatisticsUnion,
  OkUnion,
  OptionValueUnion,
  OrderInfoUnion,
  PassportAuthorizationFormUnion,
  PassportElementUnion,
  PassportElementsUnion,
  PasswordStateUnion,
  PaymentFormUnion,
  PaymentReceiptUnion,
  PaymentResultUnion,
  ProxiesUnion,
  ProxyUnion,
  PublicMessageLinkUnion,
  RecoveryEmailAddressUnion,
  ScopeNotificationSettingsUnion,
  SecondsUnion,
  SecretChatUnion,
  SessionsUnion,
  StickerEmojisUnion,
  StickerSetUnion,
  StickerSetsUnion,
  StickersUnion,
  StorageStatisticsFastUnion,
  StorageStatisticsUnion,
  SupergroupFullInfoUnion,
  SupergroupUnion,
  TMeUrlsUnion,
  TemporaryPasswordStateUnion,
  TestBytesUnion,
  TestIntUnion,
  TestStringUnion,
  TestVectorIntObjectUnion,
  TestVectorIntUnion,
  TestVectorStringObjectUnion,
  TestVectorStringUnion,
  TextEntitiesUnion,
  TextUnion,
  UpdateUnion,
  UserFullInfoUnion,
  UserPrivacySettingRulesUnion,
  UserProfilePhotosUnion,
  UserUnion,
  UsersUnion,
  ValidatedOrderInfoUnion,
  WallpapersUnion,
  WebPageInstantViewUnion,
  WebPageUnion
} from './outputs'

export interface ApiMethods {
  /**
   * Accepts an incoming call
   * @param {Object} params
   * @param {number} [params.callId] - Call identifier
   * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
   * supported by the client
   * @param {Object} state
   * @returns {OkUnion}
   */
  acceptCall: methods.AcceptCallMethod
  /**
   * Accepts Telegram terms of services
   * @param {Object} params
   * @param {string} [params.termsOfServiceId] - Terms of service identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  acceptTermsOfService: methods.AcceptTermsOfServiceMethod
  /**
   * Adds a new member to a chat. Members can't be added to private or secret chats. Members
   * will not be added until the chat state has been synchronized with the server
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.userId] - Identifier of the user
   * @param {number} [params.forwardLimit] - The number of earlier messages from the
   * chat to be forwarded to the new member; up to 300. Ignored for supergroups and channels
   * @param {Object} state
   * @returns {OkUnion}
   */
  addChatMember: methods.AddChatMemberMethod
  /**
   * Adds multiple new members to a chat. Currently this option is only available for
   * supergroups and channels. This option can't be used to join a chat. Members can't
   * be added to a channel if it has more than 200 members. Members will not be added
   * until the chat state has been synchronized with the server
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number[]} [params.userIds] - Identifiers of the users to be added to the
   * chat
   * @param {Object} state
   * @returns {OkUnion}
   */
  addChatMembers: methods.AddChatMembersMethod
  /**
   * Adds a new sticker to the list of favorite stickers. The new sticker is added to
   * the top of the list. If the sticker was already in the list, it is removed from the
   * list first. Only stickers belonging to a sticker set can be added to this list
   * @param {Object} params
   * @param {InputFileInputUnion} [params.sticker] - Sticker file to add
   * @param {Object} state
   * @returns {OkUnion}
   */
  addFavoriteSticker: methods.AddFavoriteStickerMethod
  /**
   * Adds a local message to a chat. The message is persistent across application restarts
   * only if the message database is used. Returns the added message
   * @param {Object} params
   * @param {number} [params.chatId] - Target chat
   * @param {number} [params.senderUserId] - Identifier of the user who will be shown
   * as the sender of the message; may be 0 for channel posts
   * @param {number} [params.replyToMessageId] - Identifier of the message to reply
   * to or 0
   * @param {boolean} [params.disableNotification] - Pass true to disable notification
   * for the message
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
   * of the message to be added
   * @param {Object} state
   * @returns {MessageUnion}
   */
  addLocalMessage: methods.AddLocalMessageMethod
  /**
   * Adds the specified data to data usage statistics. Can be called before authorization
   * @param {Object} params
   * @param {NetworkStatisticsEntryInputUnion} [params.entry] - The network statistics
   * entry with the data to be added to statistics
   * @param {Object} state
   * @returns {OkUnion}
   */
  addNetworkStatistics: methods.AddNetworkStatisticsMethod
  /**
   * Adds a proxy server for network requests. Can be called before authorization
   * @param {Object} params
   * @param {string} [params.server] - Proxy server IP address
   * @param {number} [params.port] - Proxy server port
   * @param {boolean} [params.enable] - True, if the proxy should be enabled
   * @param {ProxyTypeInputUnion} [params.type] - Proxy type
   * @param {Object} state
   * @returns {ProxyUnion}
   */
  addProxy: methods.AddProxyMethod
  /**
   * Manually adds a new sticker to the list of recently used stickers. The new sticker
   * is added to the top of the list. If the sticker was already in the list, it is removed
   * from the list first. Only stickers belonging to a sticker set can be added to this
   * list
   * @param {Object} params
   * @param {boolean} [params.isAttached] - Pass true to add the sticker to the list
   * of stickers recently attached to photo or video files; pass false to add the sticker
   * to the list of recently sent stickers
   * @param {InputFileInputUnion} [params.sticker] - Sticker file to add
   * @param {Object} state
   * @returns {StickersUnion}
   */
  addRecentSticker: methods.AddRecentStickerMethod
  /**
   * Adds a chat to the list of recently found chats. The chat is added to the beginning
   * of the list. If the chat is already in the list, it will be removed from the list
   * first
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat to add
   * @param {Object} state
   * @returns {OkUnion}
   */
  addRecentlyFoundChat: methods.AddRecentlyFoundChatMethod
  /**
   * Manually adds a new animation to the list of saved animations. The new animation
   * is added to the beginning of the list. If the animation was already in the list,
   * it is removed first. Only non-secret video animations with MIME type "video/mp4"
   * can be added to the list
   * @param {Object} params
   * @param {InputFileInputUnion} [params.animation] - The animation file to be added.
   * Only animations known to the server (i.e. successfully sent via a message) can be
   * added to the list
   * @param {Object} state
   * @returns {OkUnion}
   */
  addSavedAnimation: methods.AddSavedAnimationMethod
  /**
   * Adds a new sticker to a set; for bots only. Returns the sticker set
   * @param {Object} params
   * @param {number} [params.userId] - Sticker set owner
   * @param {string} [params.name] - Sticker set name
   * @param {InputStickerInput} [params.sticker] - Sticker to add to the set
   * @param {Object} state
   * @returns {StickerSetUnion}
   */
  addStickerToSet: methods.AddStickerToSetMethod
  /**
   * Sets the result of a callback query; for bots only
   * @param {Object} params
   * @param {number | string} [params.callbackQueryId] - Identifier of the callback
   * query
   * @param {string} [params.text] - Text of the answer
   * @param {boolean} [params.showAlert] - If true, an alert should be shown to the
   * user instead of a toast notification
   * @param {string} [params.url] - URL to be opened
   * @param {number} [params.cacheTime] - Time during which the result of the query
   * can be cached, in seconds
   * @param {Object} state
   * @returns {OkUnion}
   */
  answerCallbackQuery: methods.AnswerCallbackQueryMethod
  /**
   * Answers a custom query; for bots only
   * @param {Object} params
   * @param {number | string} [params.customQueryId] - Identifier of a custom query
   * @param {string} [params.data] - JSON-serialized answer to the query
   * @param {Object} state
   * @returns {OkUnion}
   */
  answerCustomQuery: methods.AnswerCustomQueryMethod
  /**
   * Sets the result of an inline query; for bots only
   * @param {Object} params
   * @param {number | string} [params.inlineQueryId] - Identifier of the inline query
   * @param {boolean} [params.isPersonal] - True, if the result of the query can be
   * cached for the specified user
   * @param {InputInlineQueryResultInputUnion[]} [params.results] - The results of
   * the query
   * @param {number} [params.cacheTime] - Allowed time to cache the results of the
   * query, in seconds
   * @param {string} [params.nextOffset] - Offset for the next inline query; pass an
   * empty string if there are no more results
   * @param {string} [params.switchPmText] - If non-empty, this text should be shown
   * on the button that opens a private chat with the bot and sends a start message to
   * the bot with the parameter switch_pm_parameter
   * @param {string} [params.switchPmParameter] - The parameter for the bot start message
   * @param {Object} state
   * @returns {OkUnion}
   */
  answerInlineQuery: methods.AnswerInlineQueryMethod
  /**
   * Sets the result of a pre-checkout query; for bots only
   * @param {Object} params
   * @param {number | string} [params.preCheckoutQueryId] - Identifier of the pre-checkout
   * query
   * @param {string} [params.errorMessage] - An error message, empty on success
   * @param {Object} state
   * @returns {OkUnion}
   */
  answerPreCheckoutQuery: methods.AnswerPreCheckoutQueryMethod
  /**
   * Sets the result of a shipping query; for bots only
   * @param {Object} params
   * @param {number | string} [params.shippingQueryId] - Identifier of the shipping
   * query
   * @param {ShippingOptionInput[]} [params.shippingOptions] - Available shipping options
   * @param {string} [params.errorMessage] - An error message, empty on success
   * @param {Object} state
   * @returns {OkUnion}
   */
  answerShippingQuery: methods.AnswerShippingQueryMethod
  /**
   * Adds a user to the blacklist
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  blockUser: methods.BlockUserMethod
  /**
   * Stops the downloading of a file. If a file has already been downloaded, does nothing
   * @param {Object} params
   * @param {number} [params.fileId] - Identifier of a file to stop downloading
   * @param {boolean} [params.onlyIfPending] - Pass true to stop downloading only if
   * it hasn't been started, i.e. request hasn't been sent to server
   * @param {Object} state
   * @returns {OkUnion}
   */
  cancelDownloadFile: methods.CancelDownloadFileMethod
  /**
   * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
   * For other files the behavior is undefined
   * @param {Object} params
   * @param {number} [params.fileId] - Identifier of the file to stop uploading
   * @param {Object} state
   * @returns {OkUnion}
   */
  cancelUploadFile: methods.CancelUploadFileMethod
  /**
   * Used to let the server know whether a chat is spam or not. Can be used only if ChatReportSpamState.can_report_spam
   * is true. After this request, ChatReportSpamState.can_report_spam becomes false forever
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {boolean} [params.isSpamChat] - If true, the chat will be reported as spam;
   * otherwise it will be marked as not spam
   * @param {Object} state
   * @returns {OkUnion}
   */
  changeChatReportSpamState: methods.ChangeChatReportSpamStateMethod
  /**
   * Changes imported contacts using the list of current user contacts saved on the device.
   * Imports newly added contacts and, if at least the file database is enabled, deletes
   * recently deleted contacts. Query result depends on the result of the previous query,
   * so only one query is possible at the same time
   * @param {Object} params
   * @param {ContactInput[]} [params.contacts] - The new list of contacts, contact's
   * vCard are ignored and are not imported
   * @param {Object} state
   * @returns {ImportedContactsUnion}
   */
  changeImportedContacts: methods.ChangeImportedContactsMethod
  /**
   * Changes the phone number of the user and sends an authentication code to the user's
   * new phone number. On success, returns information about the sent code
   * @param {Object} params
   * @param {string} [params.phoneNumber] - The new phone number of the user in international
   * format
   * @param {boolean} [params.allowFlashCall] - Pass true if the code can be sent via
   * flash call to the specified phone number
   * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
   * is used on the current device. Ignored if allow_flash_call is false
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  changePhoneNumber: methods.ChangePhoneNumberMethod
  /**
   * Installs/uninstalls or activates/archives a sticker set
   * @param {Object} params
   * @param {number | string} [params.setId] - Identifier of the sticker set
   * @param {boolean} [params.isInstalled] - The new value of is_installed
   * @param {boolean} [params.isArchived] - The new value of is_archived. A sticker
   * set can't be installed and archived simultaneously
   * @param {Object} state
   * @returns {OkUnion}
   */
  changeStickerSet: methods.ChangeStickerSetMethod
  /**
   * Checks the authentication token of a bot; to log in as a bot. Works only when the
   * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
   * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
   * @param {Object} params
   * @param {string} [params.token] - The bot token
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkAuthenticationBotToken: methods.CheckAuthenticationBotTokenMethod
  /**
   * Checks the authentication code. Works only when the current authorization state is
   * authorizationStateWaitCode
   * @param {Object} params
   * @param {string} [params.code] - The verification code received via SMS, Telegram
   * message, phone call, or flash call
   * @param {string} [params.firstName] - If the user is not yet registered, the first
   * name of the user; 1-255 characters
   * @param {string} [params.lastName] - If the user is not yet registered; the last
   * name of the user; optional; 0-255 characters
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkAuthenticationCode: methods.CheckAuthenticationCodeMethod
  /**
   * Checks the authentication password for correctness. Works only when the current authorization
   * state is authorizationStateWaitPassword
   * @param {Object} params
   * @param {string} [params.password] - The password to check
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkAuthenticationPassword: methods.CheckAuthenticationPasswordMethod
  /**
   * Checks the authentication code sent to confirm a new phone number of the user
   * @param {Object} params
   * @param {string} [params.code] - Verification code received by SMS, phone call
   * or flash call
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkChangePhoneNumberCode: methods.CheckChangePhoneNumberCodeMethod
  /**
   * Checks the validity of an invite link for a chat and returns information about the
   * corresponding chat
   * @param {Object} params
   * @param {string} [params.inviteLink] - Invite link to be checked; should begin
   * with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
   * @param {Object} state
   * @returns {ChatInviteLinkInfoUnion}
   */
  checkChatInviteLink: methods.CheckChatInviteLinkMethod
  /**
   * Checks whether a username can be set for a chat
   * @param {Object} params
   * @param {number | string} [params.chatId] - Chat identifier; should be identifier
   * of a supergroup chat, or a channel chat, or a private chat with self, or zero if
   * chat is being created
   * @param {string} [params.username] - Username to be checked
   * @param {Object} state
   * @returns {CheckChatUsernameResultUnion}
   */
  checkChatUsername: methods.CheckChatUsernameMethod
  /**
   * Checks the database encryption key for correctness. Works only when the current authorization
   * state is authorizationStateWaitEncryptionKey
   * @param {Object} params
   * @param {string} [params.encryptionKey] - Encryption key to check or set up
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkDatabaseEncryptionKey: methods.CheckDatabaseEncryptionKeyMethod
  /**
   * Checks the email address verification code for Telegram Passport
   * @param {Object} params
   * @param {string} [params.code] - Verification code
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkEmailAddressVerificationCode: methods.CheckEmailAddressVerificationCodeMethod
  /**
   * Checks phone number confirmation code
   * @param {Object} params
   * @param {string} [params.code] - The phone number confirmation code
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkPhoneNumberConfirmationCode: methods.CheckPhoneNumberConfirmationCodeMethod
  /**
   * Checks the phone number verification code for Telegram Passport
   * @param {Object} params
   * @param {string} [params.code] - Verification code
   * @param {Object} state
   * @returns {OkUnion}
   */
  checkPhoneNumberVerificationCode: methods.CheckPhoneNumberVerificationCodeMethod
  /**
   * Removes potentially dangerous characters from the name of a file. The encoding of
   * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
   * an offline method. Can be called before authorization. Can be called synchronously
   * @param {Object} params
   * @param {string} [params.fileName] - File name or path to the file
   * @param {Object} state
   * @returns {TextUnion}
   */
  cleanFileName: methods.CleanFileNameMethod
  /**
   * Clears draft messages in all chats
   * @param {Object} params
   * @param {boolean} [params.excludeSecretChats] - If true, local draft messages in
   * secret chats will not be cleared
   * @param {Object} state
   * @returns {OkUnion}
   */
  clearAllDraftMessages: methods.ClearAllDraftMessagesMethod
  /**
   * Clears all imported contacts, contacts list remains unchanged
   * @param {Object} state
   * @returns {OkUnion}
   */
  clearImportedContacts: methods.ClearImportedContactsMethod
  /**
   * Clears the list of recently used stickers
   * @param {Object} params
   * @param {boolean} [params.isAttached] - Pass true to clear the list of stickers
   * recently attached to photo or video files; pass false to clear the list of recently
   * sent stickers
   * @param {Object} state
   * @returns {OkUnion}
   */
  clearRecentStickers: methods.ClearRecentStickersMethod
  /**
   * Clears the list of recently found chats
   * @param {Object} state
   * @returns {OkUnion}
   */
  clearRecentlyFoundChats: methods.ClearRecentlyFoundChatsMethod
  /**
   * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
   * After the close completes, updateAuthorizationState with authorizationStateClosed
   * will be sent
   * @param {Object} state
   * @returns {OkUnion}
   */
  close: methods.CloseMethod
  /**
   * This method should be called if the chat is closed by the user. Many useful activities
   * depend on the chat being opened or closed
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  closeChat: methods.CloseChatMethod
  /**
   * Closes a secret chat, effectively transfering its state to secretChatStateClosed
   * @param {Object} params
   * @param {number} [params.secretChatId] - Secret chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  closeSecretChat: methods.CloseSecretChatMethod
  /**
   * Returns an existing chat corresponding to a known basic group
   * @param {Object} params
   * @param {number} [params.basicGroupId] - Basic group identifier
   * @param {boolean} [params.force] - If true, the chat will be created without network
   * request. In this case all information about the chat except its type, title and photo
   * can be incorrect
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createBasicGroupChat: methods.CreateBasicGroupChatMethod
  /**
   * Creates a new call
   * @param {Object} params
   * @param {number} [params.userId] - Identifier of the user to be called
   * @param {CallProtocolInput} [params.protocol] - Description of the call protocols
   * supported by the client
   * @param {Object} state
   * @returns {CallIdUnion}
   */
  createCall: methods.CreateCallMethod
  /**
   * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
   * Returns the newly created chat
   * @param {Object} params
   * @param {number[]} [params.userIds] - Identifiers of users to be added to the basic
   * group
   * @param {string} [params.title] - Title of the new basic group; 1-255 characters
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createNewBasicGroupChat: methods.CreateNewBasicGroupChatMethod
  /**
   * Creates a new secret chat. Returns the newly created chat
   * @param {Object} params
   * @param {number} [params.userId] - Identifier of the target user
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createNewSecretChat: methods.CreateNewSecretChatMethod
  /**
   * Creates a new sticker set; for bots only. Returns the newly created sticker set
   * @param {Object} params
   * @param {number} [params.userId] - Sticker set owner
   * @param {string} [params.title] - Sticker set title; 1-64 characters
   * @param {string} [params.name] - Sticker set name. Can contain only English letters,
   * digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is
   * case insensitive); 1-64 characters
   * @param {boolean} [params.isMasks] - True, if stickers are masks
   * @param {InputStickerInput[]} [params.stickers] - List of stickers to be added
   * to the set
   * @param {Object} state
   * @returns {StickerSetUnion}
   */
  createNewStickerSet: methods.CreateNewStickerSetMethod
  /**
   * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
   * Returns the newly created chat
   * @param {Object} params
   * @param {string} [params.title] - Title of the new chat; 1-255 characters
   * @param {boolean} [params.isChannel] - True, if a channel chat should be created
   * @param {string} [params.description] - Chat description; 0-255 characters
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createNewSupergroupChat: methods.CreateNewSupergroupChatMethod
  /**
   * Returns an existing chat corresponding to a given user
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {boolean} [params.force] - If true, the chat will be created without network
   * request. In this case all information about the chat except its type, title and photo
   * can be incorrect
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createPrivateChat: methods.CreatePrivateChatMethod
  /**
   * Returns an existing chat corresponding to a known secret chat
   * @param {Object} params
   * @param {number} [params.secretChatId] - Secret chat identifier
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createSecretChat: methods.CreateSecretChatMethod
  /**
   * Returns an existing chat corresponding to a known supergroup or channel
   * @param {Object} params
   * @param {number} [params.supergroupId] - Supergroup or channel identifier
   * @param {boolean} [params.force] - If true, the chat will be created without network
   * request. In this case all information about the chat except its type, title and photo
   * can be incorrect
   * @param {Object} state
   * @returns {ChatUnion}
   */
  createSupergroupChat: methods.CreateSupergroupChatMethod
  /**
   * Creates a new temporary password for processing payments
   * @param {Object} params
   * @param {string} [params.password] - Persistent user password
   * @param {number} [params.validFor] - Time during which the temporary password will
   * be valid, in seconds; should be between 60 and 86400
   * @param {Object} state
   * @returns {TemporaryPasswordStateUnion}
   */
  createTemporaryPassword: methods.CreateTemporaryPasswordMethod
  /**
   * Deletes the account of the current user, deleting all information associated with
   * the user from the server. The phone number of the account can be used to create a
   * new account. Can be called before authorization when the current authorization state
   * is authorizationStateWaitPassword
   * @param {Object} params
   * @param {string} [params.reason] - The reason why the account was deleted; optional
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteAccount: methods.DeleteAccountMethod
  /**
   * Deletes all messages in the chat only for the user. Cannot be used in channels and
   * public supergroups
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {boolean} [params.removeFromChatList] - Pass true if the chat should be
   * removed from the chats list
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteChatHistory: methods.DeleteChatHistoryMethod
  /**
   * Deletes all messages sent by the specified user to a chat. Supported only in supergroups;
   * requires can_delete_messages administrator privileges
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteChatMessagesFromUser: methods.DeleteChatMessagesFromUserMethod
  /**
   * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
   * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
   * the reply markup will be changed
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.messageId] - The message identifier of the used keyboard
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteChatReplyMarkup: methods.DeleteChatReplyMarkupMethod
  /**
   * Deletes a file from the TDLib file cache
   * @param {Object} params
   * @param {number} [params.fileId] - Identifier of the file to delete
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteFile: methods.DeleteFileMethod
  /**
   * Deletes all information about a language pack in the current localization target.
   * The language pack that is currently in use can't be deleted
   * @param {Object} params
   * @param {string} [params.languagePackId] - Identifier of the language pack to delete
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteLanguagePack: methods.DeleteLanguagePackMethod
  /**
   * Deletes messages
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number[]} [params.messageIds] - Identifiers of the messages to be deleted
   * @param {boolean} [params.revoke] - Pass true to try to delete outgoing messages
   * for all chat members (may fail if messages are too old). Always true for supergroups,
   * channels and secret chats
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteMessages: methods.DeleteMessagesMethod
  /**
   * Deletes a Telegram Passport element
   * @param {Object} params
   * @param {PassportElementTypeInputUnion} [params.type] - Element type
   * @param {Object} state
   * @returns {OkUnion}
   */
  deletePassportElement: methods.DeletePassportElementMethod
  /**
   * Deletes a profile photo. If something changes, updateUser will be sent
   * @param {Object} params
   * @param {number | string} [params.profilePhotoId] - Identifier of the profile photo
   * to delete
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteProfilePhoto: methods.DeleteProfilePhotoMethod
  /**
   * Deletes saved credentials for all payment provider bots
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteSavedCredentials: methods.DeleteSavedCredentialsMethod
  /**
   * Deletes saved order info
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteSavedOrderInfo: methods.DeleteSavedOrderInfoMethod
  /**
   * Deletes a supergroup or channel along with all messages in the corresponding chat.
   * This will release the supergroup or channel username and remove all members; requires
   * creator privileges in the supergroup or channel. Chats with more than 1000 members
   * can't be deleted using this method
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {Object} state
   * @returns {OkUnion}
   */
  deleteSupergroup: methods.DeleteSupergroupMethod
  /**
   * Closes the TDLib instance, destroying all local data without a proper logout. The
   * current user session will remain in the list of all active sessions. All local data
   * will be destroyed. After the destruction completes updateAuthorizationState with
   * authorizationStateClosed will be sent
   * @param {Object} state
   * @returns {OkUnion}
   */
  destroy: methods.DestroyMethod
  /**
   * Disables the currently enabled proxy. Can be called before authorization
   * @param {Object} state
   * @returns {OkUnion}
   */
  disableProxy: methods.DisableProxyMethod
  /**
   * Discards a call
   * @param {Object} params
   * @param {number} [params.callId] - Call identifier
   * @param {boolean} [params.isDisconnected] - True, if the user was disconnected
   * @param {number} [params.duration] - The call duration, in seconds
   * @param {number | string} [params.connectionId] - Identifier of the connection
   * used during the call
   * @param {Object} state
   * @returns {OkUnion}
   */
  discardCall: methods.DiscardCallMethod
  /**
   * Disconnects all websites from the current user's Telegram account
   * @param {Object} state
   * @returns {OkUnion}
   */
  disconnectAllWebsites: methods.DisconnectAllWebsitesMethod
  /**
   * Disconnects website from the current user's Telegram account
   * @param {Object} params
   * @param {number | string} [params.websiteId] - Website identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  disconnectWebsite: methods.DisconnectWebsiteMethod
  /**
   * Asynchronously downloads a file from the cloud. updateFile will be used to notify
   * about the download progress and successful completion of the download. Returns file
   * state just after the download has been started
   * @param {Object} params
   * @param {number} [params.fileId] - Identifier of the file to download
   * @param {number} [params.priority] - Priority of the download (1-32). The higher
   * the priority, the earlier the file will be downloaded. If the priorities of two files
   * are equal, then the last one for which downloadFile was called will be downloaded
   * first
   * @param {Object} state
   * @returns {FileUnion}
   */
  downloadFile: methods.DownloadFileMethod
  /**
   * Edits information about a custom language pack in the current localization target
   * @param {Object} params
   * @param {LanguagePackInfoInput} [params.info] - New information about the custom
   * language pack
   * @param {Object} state
   * @returns {OkUnion}
   */
  editCustomLanguagePackInfo: methods.EditCustomLanguagePackInfoMethod
  /**
   * Edits the caption of an inline message sent via a bot; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
   * @param {FormattedTextInput} [params.caption] - New message content caption; 0-GetOption("message_caption_length_max")
   * characters
   * @param {Object} state
   * @returns {OkUnion}
   */
  editInlineMessageCaption: methods.EditInlineMessageCaptionMethod
  /**
   * Edits the content of a live location in an inline message sent via a bot; for bots
   * only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
   * @param {LocationInput} [params.location] - New location content of the message;
   * may be null. Pass null to stop sharing the live location
   * @param {Object} state
   * @returns {OkUnion}
   */
  editInlineMessageLiveLocation: methods.EditInlineMessageLiveLocationMethod
  /**
   * Edits the content of a message with an animation, an audio, a document, a photo or
   * a video in an inline message sent via a bot; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
   * for bots only
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
   * of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio,
   * InputMessageDocument, InputMessagePhoto or InputMessageVideo
   * @param {Object} state
   * @returns {OkUnion}
   */
  editInlineMessageMedia: methods.EditInlineMessageMediaMethod
  /**
   * Edits the reply markup of an inline message sent via a bot; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
   * @param {Object} state
   * @returns {OkUnion}
   */
  editInlineMessageReplyMarkup: methods.EditInlineMessageReplyMarkupMethod
  /**
   * Edits the text of an inline text or game message sent via a bot; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
   * content of the message. Should be of type InputMessageText
   * @param {Object} state
   * @returns {OkUnion}
   */
  editInlineMessageText: methods.EditInlineMessageTextMethod
  /**
   * Edits the message content caption. Returns the edited message after the edit is completed
   * on the server side
   * @param {Object} params
   * @param {number} [params.chatId] - The chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
   * for bots only
   * @param {FormattedTextInput} [params.caption] - New message content caption; 0-GetOption("message_caption_length_max")
   * characters
   * @param {Object} state
   * @returns {MessageUnion}
   */
  editMessageCaption: methods.EditMessageCaptionMethod
  /**
   * Edits the message content of a live location. Messages can be edited for a limited
   * period of time specified in the live location. Returns the edited message after the
   * edit is completed on the server side
   * @param {Object} params
   * @param {number} [params.chatId] - The chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
   * for bots only
   * @param {LocationInput} [params.location] - New location content of the message;
   * may be null. Pass null to stop sharing the live location
   * @param {Object} state
   * @returns {MessageUnion}
   */
  editMessageLiveLocation: methods.EditMessageLiveLocationMethod
  /**
   * Edits the content of a message with an animation, an audio, a document, a photo or
   * a video. The media in the message can't be replaced if the message was set to self-destruct.
   * Media can't be replaced by self-destructing media. Media in an album can be edited
   * only to contain a photo or a video. Returns the edited message after the edit is
   * completed on the server side
   * @param {Object} params
   * @param {number} [params.chatId] - The chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
   * for bots only
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New content
   * of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio,
   * InputMessageDocument, InputMessagePhoto or InputMessageVideo
   * @param {Object} state
   * @returns {MessageUnion}
   */
  editMessageMedia: methods.EditMessageMediaMethod
  /**
   * Edits the message reply markup; for bots only. Returns the edited message after the
   * edit is completed on the server side
   * @param {Object} params
   * @param {number} [params.chatId] - The chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup
   * @param {Object} state
   * @returns {MessageUnion}
   */
  editMessageReplyMarkup: methods.EditMessageReplyMarkupMethod
  /**
   * Edits the text of a message (or a text of a game message). Returns the edited message
   * after the edit is completed on the server side
   * @param {Object} params
   * @param {number} [params.chatId] - The chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - The new message reply markup;
   * for bots only
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - New text
   * content of the message. Should be of type InputMessageText
   * @param {Object} state
   * @returns {MessageUnion}
   */
  editMessageText: methods.EditMessageTextMethod
  /**
   * Edits an existing proxy server for network requests. Can be called before authorization
   * @param {Object} params
   * @param {number} [params.proxyId] - Proxy identifier
   * @param {string} [params.server] - Proxy server IP address
   * @param {number} [params.port] - Proxy server port
   * @param {boolean} [params.enable] - True, if the proxy should be enabled
   * @param {ProxyTypeInputUnion} [params.type] - Proxy type
   * @param {Object} state
   * @returns {ProxyUnion}
   */
  editProxy: methods.EditProxyMethod
  /**
   * Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization
   * @param {Object} params
   * @param {number} [params.proxyId] - Proxy identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  enableProxy: methods.EnableProxyMethod
  /**
   * Finishes the file generation
   * @param {Object} params
   * @param {number | string} [params.generationId] - The identifier of the generation
   * process
   * @param {ErrorInput} [params.error] - If set, means that file generation has failed
   * and should be terminated
   * @param {Object} state
   * @returns {OkUnion}
   */
  finishFileGeneration: methods.FinishFileGenerationMethod
  /**
   * Forwards previously sent messages. Returns the forwarded messages in the same order
   * as the message identifiers passed in message_ids. If a message can't be forwarded,
   * null will be returned instead of the message
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat to which to forward messages
   * @param {number} [params.fromChatId] - Identifier of the chat from which to forward
   * messages
   * @param {number[]} [params.messageIds] - Identifiers of the messages to forward
   * @param {boolean} [params.disableNotification] - Pass true to disable notification
   * for the message, doesn't work if messages are forwarded to a secret chat
   * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
   * the background
   * @param {boolean} [params.asAlbum] - True, if the messages should be grouped into
   * an album after forwarding. For this to work, no more than 10 messages may be forwarded,
   * and all of them must be photo or video messages
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  forwardMessages: methods.ForwardMessagesMethod
  /**
   * Generates a new invite link for a chat; the previously generated link is revoked.
   * Available for basic groups, supergroups, and channels. In basic groups this can be
   * called only by the group's creator; in supergroups and channels this requires appropriate
   * administrator rights
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {ChatInviteLinkUnion}
   */
  generateChatInviteLink: methods.GenerateChatInviteLinkMethod
  /**
   * Returns the period of inactivity after which the account of the current user will
   * automatically be deleted
   * @param {Object} state
   * @returns {AccountTtlUnion}
   */
  getAccountTtl: methods.GetAccountTtlMethod
  /**
   * Returns all active live locations that should be updated by the client. The list
   * is persistent across application restarts only if the message database is used
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  getActiveLiveLocationMessages: methods.GetActiveLiveLocationMessagesMethod
  /**
   * Returns all active sessions of the current user
   * @param {Object} state
   * @returns {SessionsUnion}
   */
  getActiveSessions: methods.GetActiveSessionsMethod
  /**
   * Returns all available Telegram Passport elements
   * @param {Object} params
   * @param {string} [params.password] - Password of the current user
   * @param {Object} state
   * @returns {PassportElementsUnion}
   */
  getAllPassportElements: methods.GetAllPassportElementsMethod
  /**
   * Returns a list of archived sticker sets
   * @param {Object} params
   * @param {boolean} [params.isMasks] - Pass true to return mask stickers sets; pass
   * false to return ordinary sticker sets
   * @param {number | string} [params.offsetStickerSetId] - Identifier of the sticker
   * set from which to return the result
   * @param {number} [params.limit] - Maximum number of sticker sets to return
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  getArchivedStickerSets: methods.GetArchivedStickerSetsMethod
  /**
   * Returns a list of sticker sets attached to a file. Currently only photos and videos
   * can have attached sticker sets
   * @param {Object} params
   * @param {number} [params.fileId] - File identifier
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  getAttachedStickerSets: methods.GetAttachedStickerSetsMethod
  /**
   * Returns the current authorization state; this is an offline request. For informational
   * purposes only. Use updateAuthorizationState instead to maintain the current authorization
   * state
   * @param {Object} state
   * @returns {AuthorizationStateUnion}
   */
  getAuthorizationState: methods.GetAuthorizationStateMethod
  /**
   * Returns information about a basic group by its identifier. This is an offline request
   * if the current user is not a bot
   * @param {Object} params
   * @param {number} [params.basicGroupId] - Basic group identifier
   * @param {Object} state
   * @returns {BasicGroupUnion}
   */
  getBasicGroup: methods.GetBasicGroupMethod
  /**
   * Returns full information about a basic group by its identifier
   * @param {Object} params
   * @param {number} [params.basicGroupId] - Basic group identifier
   * @param {Object} state
   * @returns {BasicGroupFullInfoUnion}
   */
  getBasicGroupFullInfo: methods.GetBasicGroupFullInfoMethod
  /**
   * Returns users that were blocked by the current user
   * @param {Object} params
   * @param {number} [params.offset] - Number of users to skip in the result; must
   * be non-negative
   * @param {number} [params.limit] - Maximum number of users to return; up to 100
   * @param {Object} state
   * @returns {UsersUnion}
   */
  getBlockedUsers: methods.GetBlockedUsersMethod
  /**
   * Sends a callback query to a bot and returns an answer. Returns an error with code
   * 502 if the bot fails to answer the query before the query timeout expires
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat with the message
   * @param {number} [params.messageId] - Identifier of the message from which the
   * query originated
   * @param {CallbackQueryPayloadInputUnion} [params.payload] - Query payload
   * @param {Object} state
   * @returns {CallbackQueryAnswerUnion}
   */
  getCallbackQueryAnswer: methods.GetCallbackQueryAnswerMethod
  /**
   * Returns information about a chat by its identifier, this is an offline request if
   * the current user is not a bot
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {ChatUnion}
   */
  getChat: methods.GetChatMethod
  /**
   * Returns a list of users who are administrators of the chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {UsersUnion}
   */
  getChatAdministrators: methods.GetChatAdministratorsMethod
  /**
   * Returns a list of service actions taken by chat members and administrators in the
   * last 48 hours. Available only in supergroups and channels. Requires administrator
   * rights. Returns results in reverse chronological order (i. e., in order of decreasing
   * event_id)
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {string} [params.query] - Search query by which to filter events
   * @param {number | string} [params.fromEventId] - Identifier of an event from which
   * to return results. Use 0 to get results from the latest events
   * @param {number} [params.limit] - Maximum number of events to return; up to 100
   * @param {ChatEventLogFiltersInput} [params.filters] - The types of events to return.
   * By default, all types will be returned
   * @param {number[]} [params.userIds] - User identifiers by which to filter events.
   * By default, events relating to all users will be returned
   * @param {Object} state
   * @returns {ChatEventsUnion}
   */
  getChatEventLog: methods.GetChatEventLogMethod
  /**
   * Returns messages in a chat. The messages are returned in a reverse chronological
   * order (i.e., in order of decreasing message_id). For optimal performance the number
   * of returned messages is chosen by the library. This is an offline request if only_local
   * is true
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.fromMessageId] - Identifier of the message starting from
   * which history must be fetched; use 0 to get results from the last message
   * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
   * or a negative offset to get the specified message and some newer messages
   * @param {number} [params.limit] - The maximum number of messages to be returned;
   * must be positive and can't be greater than 100. If the offset is negative, the limit
   * must be greater than -offset. Fewer messages may be returned than specified by the
   * limit, even if the end of the message history has not been reached
   * @param {boolean} [params.onlyLocal] - If true, returns only messages that are
   * available locally without sending network requests
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  getChatHistory: methods.GetChatHistoryMethod
  /**
   * Returns information about a single member of a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {ChatMemberUnion}
   */
  getChatMember: methods.GetChatMemberMethod
  /**
   * Returns the last message sent in a chat no later than the specified date
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.date] - Point in time (Unix timestamp) relative to which
   * to search for messages
   * @param {Object} state
   * @returns {MessageUnion}
   */
  getChatMessageByDate: methods.GetChatMessageByDateMethod
  /**
   * Returns approximate number of messages of the specified type in the chat
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat in which to count messages
   * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content;
   * searchMessagesFilterEmpty is unsupported in this function
   * @param {boolean} [params.returnLocal] - If true, returns count that is available
   * locally without sending network requests, returning -1 if the number of messages
   * is unknown
   * @param {Object} state
   * @returns {CountUnion}
   */
  getChatMessageCount: methods.GetChatMessageCountMethod
  /**
   * Returns information about a pinned chat message
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat the message belongs to
   * @param {Object} state
   * @returns {MessageUnion}
   */
  getChatPinnedMessage: methods.GetChatPinnedMessageMethod
  /**
   * Returns information on whether the current chat can be reported as spam
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {ChatReportSpamStateUnion}
   */
  getChatReportSpamState: methods.GetChatReportSpamStateMethod
  /**
   * Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in
   * decreasing order. (For example, to get a list of chats from the beginning, the offset_order
   * should be equal to 2^63 - 1). For optimal performance the number of returned chats
   * is chosen by the library.
   * @param {Object} params
   * @param {number | string} [params.offsetOrder] - Chat order to return chats from
   * @param {number} [params.offsetChatId] - Chat identifier to return chats from
   * @param {number} [params.limit] - The maximum number of chats to be returned. It
   * is possible that fewer chats than the limit are returned even if the end of the list
   * is not reached
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  getChats: methods.GetChatsMethod
  /**
   * Returns all website where the current user used Telegram to log in
   * @param {Object} state
   * @returns {ConnectedWebsitesUnion}
   */
  getConnectedWebsites: methods.GetConnectedWebsitesMethod
  /**
   * Returns all user contacts
   * @param {Object} state
   * @returns {UsersUnion}
   */
  getContacts: methods.GetContactsMethod
  /**
   * Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2
   * country code. Can be called before authorization
   * @param {Object} state
   * @returns {TextUnion}
   */
  getCountryCode: methods.GetCountryCodeMethod
  /**
   * Returns a list of public chats created by the user
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  getCreatedPublicChats: methods.GetCreatedPublicChatsMethod
  /**
   * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
   * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
   * Can be called before authorization
   * @param {Object} params
   * @param {string} [params.link] - The link
   * @param {Object} state
   * @returns {DeepLinkInfoUnion}
   */
  getDeepLinkInfo: methods.GetDeepLinkInfoMethod
  /**
   * Returns favorite stickers
   * @param {Object} state
   * @returns {StickersUnion}
   */
  getFavoriteStickers: methods.GetFavoriteStickersMethod
  /**
   * Returns information about a file; this is an offline request
   * @param {Object} params
   * @param {number} [params.fileId] - Identifier of the file to get
   * @param {Object} state
   * @returns {FileUnion}
   */
  getFile: methods.GetFileMethod
  /**
   * Returns the extension of a file, guessed by its MIME type. Returns an empty string
   * on failure. This is an offline method. Can be called before authorization. Can be
   * called synchronously
   * @param {Object} params
   * @param {string} [params.mimeType] - The MIME type of the file
   * @param {Object} state
   * @returns {TextUnion}
   */
  getFileExtension: methods.GetFileExtensionMethod
  /**
   * Returns the MIME type of a file, guessed by its extension. Returns an empty string
   * on failure. This is an offline method. Can be called before authorization. Can be
   * called synchronously
   * @param {Object} params
   * @param {string} [params.fileName] - The name of the file or path to the file
   * @param {Object} state
   * @returns {TextUnion}
   */
  getFileMimeType: methods.GetFileMimeTypeMethod
  /**
   * Returns the high scores for a game and some part of the high score table in the range
   * of the specified user; for bots only
   * @param {Object} params
   * @param {number} [params.chatId] - The chat that contains the message with the
   * game
   * @param {number} [params.messageId] - Identifier of the message
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {GameHighScoresUnion}
   */
  getGameHighScores: methods.GetGameHighScoresMethod
  /**
   * Returns a list of common chats with a given user. Chats are sorted by their type
   * and creation date
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {number} [params.offsetChatId] - Chat identifier starting from which to
   * return chats; use 0 for the first request
   * @param {number} [params.limit] - Maximum number of chats to be returned; up to
   * 100
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  getGroupsInCommon: methods.GetGroupsInCommonMethod
  /**
   * Returns the total number of imported contacts
   * @param {Object} state
   * @returns {CountUnion}
   */
  getImportedContactCount: methods.GetImportedContactCountMethod
  /**
   * Returns game high scores and some part of the high score table in the range of the
   * specified user; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {GameHighScoresUnion}
   */
  getInlineGameHighScores: methods.GetInlineGameHighScoresMethod
  /**
   * Sends an inline query to a bot and returns its results. Returns an error with code
   * 502 if the bot fails to answer the query before the query timeout expires
   * @param {Object} params
   * @param {number} [params.botUserId] - The identifier of the target bot
   * @param {number} [params.chatId] - Identifier of the chat, where the query was
   * sent
   * @param {LocationInput} [params.userLocation] - Location of the user, only if needed
   * @param {string} [params.query] - Text of the query
   * @param {string} [params.offset] - Offset of the first entry to return
   * @param {Object} state
   * @returns {InlineQueryResultsUnion}
   */
  getInlineQueryResults: methods.GetInlineQueryResultsMethod
  /**
   * Returns a list of installed sticker sets
   * @param {Object} params
   * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
   * false to return ordinary sticker sets
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  getInstalledStickerSets: methods.GetInstalledStickerSetsMethod
  /**
   * Returns the default text for invitation messages to be used as a placeholder when
   * the current user invites friends to Telegram
   * @param {Object} state
   * @returns {TextUnion}
   */
  getInviteText: methods.GetInviteTextMethod
  /**
   * Returns a string stored in the local database from the specified localization target
   * and language pack by its key. Returns a 404 error if the string is not found. This
   * is an offline method. Can be called before authorization. Can be called synchronously
   * @param {Object} params
   * @param {string} [params.languagePackDatabasePath] - Path to the language pack
   * database in which strings are stored
   * @param {string} [params.localizationTarget] - Localization target to which the
   * language pack belongs
   * @param {string} [params.languagePackId] - Language pack identifier
   * @param {string} [params.key] - Language pack key of the string to be returned
   * @param {Object} state
   * @returns {LanguagePackStringValueUnion}
   */
  getLanguagePackString: methods.GetLanguagePackStringMethod
  /**
   * Returns strings from a language pack in the current localization target by their
   * keys
   * @param {Object} params
   * @param {string} [params.languagePackId] - Language pack identifier of the strings
   * to be returned
   * @param {string[]} [params.keys] - Language pack keys of the strings to be returned;
   * leave empty to request all available strings
   * @param {Object} state
   * @returns {LanguagePackStringsUnion}
   */
  getLanguagePackStrings: methods.GetLanguagePackStringsMethod
  /**
   * Returns information about the current localization target. This is an offline request
   * if only_local is true
   * @param {Object} params
   * @param {boolean} [params.onlyLocal] - If true, returns only locally available
   * information without sending network requests
   * @param {Object} state
   * @returns {LocalizationTargetInfoUnion}
   */
  getLocalizationTargetInfo: methods.GetLocalizationTargetInfoMethod
  /**
   * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail
   * files with size less than 1MB can be downloaded
   * @param {Object} params
   * @param {LocationInput} [params.location] - Location of the map center
   * @param {number} [params.zoom] - Map zoom level; 13-20
   * @param {number} [params.width] - Map width in pixels before applying scale; 16-1024
   * @param {number} [params.height] - Map height in pixels before applying scale;
   * 16-1024
   * @param {number} [params.scale] - Map scale; 1-3
   * @param {number} [params.chatId] - Identifier of a chat, in which the thumbnail
   * will be shown. Use 0 if unknown
   * @param {Object} state
   * @returns {FileUnion}
   */
  getMapThumbnailFile: methods.GetMapThumbnailFileMethod
  /**
   * Returns the current user
   * @param {Object} state
   * @returns {UserUnion}
   */
  getMe: methods.GetMeMethod
  /**
   * Returns information about a message
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message to get
   * @param {Object} state
   * @returns {MessageUnion}
   */
  getMessage: methods.GetMessageMethod
  /**
   * Returns information about messages. If a message is not found, returns null on the
   * corresponding position of the result
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat the messages belong to
   * @param {number[]} [params.messageIds] - Identifiers of the messages to get
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  getMessages: methods.GetMessagesMethod
  /**
   * Returns network data usage statistics. Can be called before authorization
   * @param {Object} params
   * @param {boolean} [params.onlyCurrent] - If true, returns only data for the current
   * library launch
   * @param {Object} state
   * @returns {NetworkStatisticsUnion}
   */
  getNetworkStatistics: methods.GetNetworkStatisticsMethod
  /**
   * Returns the value of an option by its name. (Check the list of available options
   * on https://core.telegram.org/tdlib/options.) Can be called before authorization
   * @param {Object} params
   * @param {string} [params.name] - The name of the option
   * @param {Object} state
   * @returns {OptionValueUnion}
   */
  getOption: methods.GetOptionMethod
  /**
   * Returns a Telegram Passport authorization form for sharing data with a service
   * @param {Object} params
   * @param {number} [params.botUserId] - User identifier of the service's bot
   * @param {string} [params.scope] - Telegram Passport element types requested by
   * the service
   * @param {string} [params.publicKey] - Service's public_key
   * @param {string} [params.nonce] - Authorization form nonce provided by the service
   * @param {string} [params.password] - Password of the current user
   * @param {Object} state
   * @returns {PassportAuthorizationFormUnion}
   */
  getPassportAuthorizationForm: methods.GetPassportAuthorizationFormMethod
  /**
   * Returns one of the available Telegram Passport elements
   * @param {Object} params
   * @param {PassportElementTypeInputUnion} [params.type] - Telegram Passport element
   * type
   * @param {string} [params.password] - Password of the current user
   * @param {Object} state
   * @returns {PassportElementUnion}
   */
  getPassportElement: methods.GetPassportElementMethod
  /**
   * Returns the current state of 2-step verification
   * @param {Object} state
   * @returns {PasswordStateUnion}
   */
  getPasswordState: methods.GetPasswordStateMethod
  /**
   * Returns an invoice payment form. This method should be called when the user presses
   * inlineKeyboardButtonBuy
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier of the Invoice message
   * @param {number} [params.messageId] - Message identifier
   * @param {Object} state
   * @returns {PaymentFormUnion}
   */
  getPaymentForm: methods.GetPaymentFormMethod
  /**
   * Returns information about a successful payment
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier of the PaymentSuccessful message
   * @param {number} [params.messageId] - Message identifier
   * @param {Object} state
   * @returns {PaymentReceiptUnion}
   */
  getPaymentReceipt: methods.GetPaymentReceiptMethod
  /**
   * Returns an IETF language tag of the language preferred in the country, which should
   * be used to fill native fields in Telegram Passport personal details. Returns a 404
   * error if unknown
   * @param {Object} params
   * @param {string} [params.countryCode] - A two-letter ISO 3166-1 alpha-2 country
   * code
   * @param {Object} state
   * @returns {TextUnion}
   */
  getPreferredCountryLanguage: methods.GetPreferredCountryLanguageMethod
  /**
   * Returns list of proxies that are currently set up. Can be called before authorization
   * @param {Object} state
   * @returns {ProxiesUnion}
   */
  getProxies: methods.GetProxiesMethod
  /**
   * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
   * and MTProto proxies. Can be called before authorization
   * @param {Object} params
   * @param {number} [params.proxyId] - Proxy identifier
   * @param {Object} state
   * @returns {TextUnion}
   */
  getProxyLink: methods.GetProxyLinkMethod
  /**
   * Returns a public HTTPS link to a message. Available only for messages in public supergroups
   * and channels
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat to which the message
   * belongs
   * @param {number} [params.messageId] - Identifier of the message
   * @param {boolean} [params.forAlbum] - Pass true if a link for a whole media album
   * should be returned
   * @param {Object} state
   * @returns {PublicMessageLinkUnion}
   */
  getPublicMessageLink: methods.GetPublicMessageLinkMethod
  /**
   * Returns up to 20 recently used inline bots in the order of their last usage
   * @param {Object} state
   * @returns {UsersUnion}
   */
  getRecentInlineBots: methods.GetRecentInlineBotsMethod
  /**
   * Returns a list of recently used stickers
   * @param {Object} params
   * @param {boolean} [params.isAttached] - Pass true to return stickers and masks
   * that were recently attached to photos or video files; pass false to return recently
   * sent stickers
   * @param {Object} state
   * @returns {StickersUnion}
   */
  getRecentStickers: methods.GetRecentStickersMethod
  /**
   * Returns t.me URLs recently visited by a newly registered user
   * @param {Object} params
   * @param {string} [params.referrer] - Google Play referrer to identify the user
   * @param {Object} state
   * @returns {TMeUrlsUnion}
   */
  getRecentlyVisitedTMeUrls: methods.GetRecentlyVisitedTMeUrlsMethod
  /**
   * Returns a recovery email address that was previously set up. This method can be used
   * to verify a password provided by the user
   * @param {Object} params
   * @param {string} [params.password] - The password for the current user
   * @param {Object} state
   * @returns {RecoveryEmailAddressUnion}
   */
  getRecoveryEmailAddress: methods.GetRecoveryEmailAddressMethod
  /**
   * Returns information about a file by its remote ID; this is an offline request. Can
   * be used to register a URL as a file for further uploading, or sending as a message
   * @param {Object} params
   * @param {string} [params.remoteFileId] - Remote identifier of the file to get
   * @param {FileTypeInputUnion} [params.fileType] - File type, if known
   * @param {Object} state
   * @returns {FileUnion}
   */
  getRemoteFile: methods.GetRemoteFileMethod
  /**
   * Returns information about a message that is replied by given message
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat the message belongs to
   * @param {number} [params.messageId] - Identifier of the message reply to which
   * get
   * @param {Object} state
   * @returns {MessageUnion}
   */
  getRepliedMessage: methods.GetRepliedMessageMethod
  /**
   * Returns saved animations
   * @param {Object} state
   * @returns {AnimationsUnion}
   */
  getSavedAnimations: methods.GetSavedAnimationsMethod
  /**
   * Returns saved order info, if any
   * @param {Object} state
   * @returns {OrderInfoUnion}
   */
  getSavedOrderInfo: methods.GetSavedOrderInfoMethod
  /**
   * Returns the notification settings for chats of a given type
   * @param {Object} params
   * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
   * which to return the notification settings information
   * @param {Object} state
   * @returns {ScopeNotificationSettingsUnion}
   */
  getScopeNotificationSettings: methods.GetScopeNotificationSettingsMethod
  /**
   * Returns information about a secret chat by its identifier. This is an offline request
   * @param {Object} params
   * @param {number} [params.secretChatId] - Secret chat identifier
   * @param {Object} state
   * @returns {SecretChatUnion}
   */
  getSecretChat: methods.GetSecretChatMethod
  /**
   * Returns emoji corresponding to a sticker
   * @param {Object} params
   * @param {InputFileInputUnion} [params.sticker] - Sticker file identifier
   * @param {Object} state
   * @returns {StickerEmojisUnion}
   */
  getStickerEmojis: methods.GetStickerEmojisMethod
  /**
   * Returns information about a sticker set by its identifier
   * @param {Object} params
   * @param {number | string} [params.setId] - Identifier of the sticker set
   * @param {Object} state
   * @returns {StickerSetUnion}
   */
  getStickerSet: methods.GetStickerSetMethod
  /**
   * Returns stickers from the installed sticker sets that correspond to a given emoji.
   * If the emoji is not empty, favorite and recently used stickers may also be returned
   * @param {Object} params
   * @param {string} [params.emoji] - String representation of emoji. If empty, returns
   * all known installed stickers
   * @param {number} [params.limit] - Maximum number of stickers to be returned
   * @param {Object} state
   * @returns {StickersUnion}
   */
  getStickers: methods.GetStickersMethod
  /**
   * Returns storage usage statistics
   * @param {Object} params
   * @param {number} [params.chatLimit] - Maximum number of chats with the largest
   * storage usage for which separate statistics should be returned. All other chats will
   * be grouped in entries with chat_id == 0. If the chat info database is not used, the
   * chat_limit is ignored and is always set to 0
   * @param {Object} state
   * @returns {StorageStatisticsUnion}
   */
  getStorageStatistics: methods.GetStorageStatisticsMethod
  /**
   * Quickly returns approximate storage usage statistics
   * @param {Object} state
   * @returns {StorageStatisticsFastUnion}
   */
  getStorageStatisticsFast: methods.GetStorageStatisticsFastMethod
  /**
   * Returns information about a supergroup or channel by its identifier. This is an offline
   * request if the current user is not a bot
   * @param {Object} params
   * @param {number} [params.supergroupId] - Supergroup or channel identifier
   * @param {Object} state
   * @returns {SupergroupUnion}
   */
  getSupergroup: methods.GetSupergroupMethod
  /**
   * Returns full information about a supergroup or channel by its identifier, cached
   * for up to 1 minute
   * @param {Object} params
   * @param {number} [params.supergroupId] - Supergroup or channel identifier
   * @param {Object} state
   * @returns {SupergroupFullInfoUnion}
   */
  getSupergroupFullInfo: methods.GetSupergroupFullInfoMethod
  /**
   * Returns information about members or banned users in a supergroup or channel. Can
   * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
   * privileges may be required for some filters
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {SupergroupMembersFilterInputUnion} [params.filter] - The type of users
   * to return. By default, supergroupMembersRecent
   * @param {number} [params.offset] - Number of users to skip
   * @param {number} [params.limit] - The maximum number of users be returned; up to
   * 200
   * @param {Object} state
   * @returns {ChatMembersUnion}
   */
  getSupergroupMembers: methods.GetSupergroupMembersMethod
  /**
   * Returns a user that can be contacted to get support
   * @param {Object} state
   * @returns {UserUnion}
   */
  getSupportUser: methods.GetSupportUserMethod
  /**
   * Returns information about the current temporary password
   * @param {Object} state
   * @returns {TemporaryPasswordStateUnion}
   */
  getTemporaryPasswordState: methods.GetTemporaryPasswordStateMethod
  /**
   * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
   * addresses) contained in the text. This is an offline method. Can be called before
   * authorization. Can be called synchronously
   * @param {Object} params
   * @param {string} [params.text] - The text in which to look for entites
   * @param {Object} state
   * @returns {TextEntitiesUnion}
   */
  getTextEntities: methods.GetTextEntitiesMethod
  /**
   * Returns a list of frequently used chats. Supported only if the chat info database
   * is enabled
   * @param {Object} params
   * @param {TopChatCategoryInputUnion} [params.category] - Category of chats to be
   * returned
   * @param {number} [params.limit] - Maximum number of chats to be returned; up to
   * 30
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  getTopChats: methods.GetTopChatsMethod
  /**
   * Returns a list of trending sticker sets
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  getTrendingStickerSets: methods.GetTrendingStickerSetsMethod
  /**
   * Returns information about a user by their identifier. This is an offline request
   * if the current user is not a bot
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {UserUnion}
   */
  getUser: methods.GetUserMethod
  /**
   * Returns full information about a user by their identifier
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {UserFullInfoUnion}
   */
  getUserFullInfo: methods.GetUserFullInfoMethod
  /**
   * Returns the current privacy settings
   * @param {Object} params
   * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
   * @param {Object} state
   * @returns {UserPrivacySettingRulesUnion}
   */
  getUserPrivacySettingRules: methods.GetUserPrivacySettingRulesMethod
  /**
   * Returns the profile photos of a user. The result of this query may be outdated: some
   * photos might have been deleted already
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {number} [params.offset] - The number of photos to skip; must be non-negative
   * @param {number} [params.limit] - Maximum number of photos to be returned; up to
   * 100
   * @param {Object} state
   * @returns {UserProfilePhotosUnion}
   */
  getUserProfilePhotos: methods.GetUserProfilePhotosMethod
  /**
   * Returns background wallpapers
   * @param {Object} state
   * @returns {WallpapersUnion}
   */
  getWallpapers: methods.GetWallpapersMethod
  /**
   * Returns an instant view version of a web page if available. Returns a 404 error if
   * the web page has no instant view page
   * @param {Object} params
   * @param {string} [params.url] - The web page URL
   * @param {boolean} [params.forceFull] - If true, the full instant view for the web
   * page will be returned
   * @param {Object} state
   * @returns {WebPageInstantViewUnion}
   */
  getWebPageInstantView: methods.GetWebPageInstantViewMethod
  /**
   * Returns a web page preview by the text of the message. Do not call this function
   * too often. Returns a 404 error if the web page has no preview
   * @param {Object} params
   * @param {FormattedTextInput} [params.text] - Message text with formatting
   * @param {Object} state
   * @returns {WebPageUnion}
   */
  getWebPagePreview: methods.GetWebPagePreviewMethod
  /**
   * Adds new contacts or edits existing contacts; contacts' user identifiers are ignored
   * @param {Object} params
   * @param {ContactInput[]} [params.contacts] - The list of contacts to import or
   * edit, contact's vCard are ignored and are not imported
   * @param {Object} state
   * @returns {ImportedContactsUnion}
   */
  importContacts: methods.ImportContactsMethod
  /**
   * Adds current user as a new member to a chat. Private and secret chats can't be joined
   * using this method
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  joinChat: methods.JoinChatMethod
  /**
   * Uses an invite link to add the current user to the chat if possible. The new member
   * will not be added until the chat state has been synchronized with the server
   * @param {Object} params
   * @param {string} [params.inviteLink] - Invite link to import; should begin with
   * "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
   * @param {Object} state
   * @returns {ChatUnion}
   */
  joinChatByInviteLink: methods.JoinChatByInviteLinkMethod
  /**
   * Removes current user from chat members. Private and secret chats can't be left using
   * this method
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  leaveChat: methods.LeaveChatMethod
  /**
   * Closes the TDLib instance after a proper logout. Requires an available network connection.
   * All local data will be destroyed. After the logout completes, updateAuthorizationState
   * with authorizationStateClosed will be sent
   * @param {Object} state
   * @returns {OkUnion}
   */
  logOut: methods.LogOutMethod
  /**
   * This method should be called if the chat is opened by the user. Many useful activities
   * depend on the chat being opened or closed (e.g., in supergroups and channels all
   * updates are received only for opened chats)
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  openChat: methods.OpenChatMethod
  /**
   * This method should be called if the message content has been opened (e.g., the user
   * has opened a photo, video, document, location or venue, or has listened to an audio
   * file or voice note message). An updateMessageContentOpened update will be generated
   * if something has changed
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier of the message
   * @param {number} [params.messageId] - Identifier of the message with the opened
   * content
   * @param {Object} state
   * @returns {OkUnion}
   */
  openMessageContent: methods.OpenMessageContentMethod
  /**
   * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
   * Secret thumbnails can't be deleted
   * @param {Object} params
   * @param {number} [params.size] - Limit on the total size of files after deletion.
   * Pass -1 to use the default limit
   * @param {number} [params.ttl] - Limit on the time that has passed since the last
   * time a file was accessed (or creation time for some filesystems). Pass -1 to use
   * the default limit
   * @param {number} [params.count] - Limit on the total count of files after deletion.
   * Pass -1 to use the default limit
   * @param {number} [params.immunityDelay] - The amount of time after the creation
   * of a file during which it can't be deleted, in seconds. Pass -1 to use the default
   * value
   * @param {FileTypeInputUnion[]} [params.fileTypes] - If not empty, only files with
   * the given type(s) are considered. By default, all types except thumbnails, profile
   * photos, stickers and wallpapers are deleted
   * @param {number[]} [params.chatIds] - If not empty, only files from the given chats
   * are considered. Use 0 as chat identifier to delete files not belonging to any chat
   * (e.g., profile photos)
   * @param {number[]} [params.excludeChatIds] - If not empty, files from the given
   * chats are excluded. Use 0 as chat identifier to exclude all files not belonging to
   * any chat (e.g., profile photos)
   * @param {number} [params.chatLimit] - Same as in getStorageStatistics. Affects
   * only returned statistics
   * @param {Object} state
   * @returns {StorageStatisticsUnion}
   */
  optimizeStorage: methods.OptimizeStorageMethod
  /**
   * Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text.
   * This is an offline method. Can be called before authorization. Can be called synchronously
   * @param {Object} params
   * @param {string} [params.text] - The text which should be parsed
   * @param {TextParseModeInputUnion} [params.parseMode] - Text parse mode
   * @param {Object} state
   * @returns {FormattedTextUnion}
   */
  parseTextEntities: methods.ParseTextEntitiesMethod
  /**
   * Pins a message in a supergroup or channel; requires appropriate administrator rights
   * in the supergroup or channel
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {number} [params.messageId] - Identifier of the new pinned message
   * @param {boolean} [params.disableNotification] - True, if there should be no notification
   * about the pinned message
   * @param {Object} state
   * @returns {OkUnion}
   */
  pinSupergroupMessage: methods.PinSupergroupMessageMethod
  /**
   * Computes time needed to receive a response from a Telegram server through a proxy.
   * Can be called before authorization
   * @param {Object} params
   * @param {number} [params.proxyId] - Proxy identifier. Use 0 to ping a Telegram
   * server without a proxy
   * @param {Object} state
   * @returns {SecondsUnion}
   */
  pingProxy: methods.PingProxyMethod
  /**
   * Handles a DC_UPDATE push service notification. Can be called before authorization
   * @param {Object} params
   * @param {string} [params.dc] - Value of the "dc" parameter of the notification
   * @param {string} [params.addr] - Value of the "addr" parameter of the notification
   * @param {Object} state
   * @returns {OkUnion}
   */
  processDcUpdate: methods.ProcessDcUpdateMethod
  /**
   * Marks all mentions in a chat as read
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  readAllChatMentions: methods.ReadAllChatMentionsMethod
  /**
   * Recovers the password with a password recovery code sent to an email address that
   * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
   * @param {Object} params
   * @param {string} [params.recoveryCode] - Recovery code to check
   * @param {Object} state
   * @returns {OkUnion}
   */
  recoverAuthenticationPassword: methods.RecoverAuthenticationPasswordMethod
  /**
   * Recovers the password using a recovery code sent to an email address that was previously
   * set up
   * @param {Object} params
   * @param {string} [params.recoveryCode] - Recovery code to check
   * @param {Object} state
   * @returns {PasswordStateUnion}
   */
  recoverPassword: methods.RecoverPasswordMethod
  /**
   * Registers the currently used device for receiving push notifications
   * @param {Object} params
   * @param {DeviceTokenInputUnion} [params.deviceToken] - Device token
   * @param {number[]} [params.otherUserIds] - List of at most 100 user identifiers
   * of other users currently using the client
   * @param {Object} state
   * @returns {OkUnion}
   */
  registerDevice: methods.RegisterDeviceMethod
  /**
   * Removes users from the contacts list
   * @param {Object} params
   * @param {number[]} [params.userIds] - Identifiers of users to be deleted
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeContacts: methods.RemoveContactsMethod
  /**
   * Removes a sticker from the list of favorite stickers
   * @param {Object} params
   * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete from the
   * list
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeFavoriteSticker: methods.RemoveFavoriteStickerMethod
  /**
   * Removes a proxy server. Can be called before authorization
   * @param {Object} params
   * @param {number} [params.proxyId] - Proxy identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeProxy: methods.RemoveProxyMethod
  /**
   * Removes a hashtag from the list of recently used hashtags
   * @param {Object} params
   * @param {string} [params.hashtag] - Hashtag to delete
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeRecentHashtag: methods.RemoveRecentHashtagMethod
  /**
   * Removes a sticker from the list of recently used stickers
   * @param {Object} params
   * @param {boolean} [params.isAttached] - Pass true to remove the sticker from the
   * list of stickers recently attached to photo or video files; pass false to remove
   * the sticker from the list of recently sent stickers
   * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeRecentSticker: methods.RemoveRecentStickerMethod
  /**
   * Removes a chat from the list of recently found chats
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat to be removed
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeRecentlyFoundChat: methods.RemoveRecentlyFoundChatMethod
  /**
   * Removes an animation from the list of saved animations
   * @param {Object} params
   * @param {InputFileInputUnion} [params.animation] - Animation file to be removed
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeSavedAnimation: methods.RemoveSavedAnimationMethod
  /**
   * Removes a sticker from the set to which it belongs; for bots only. The sticker set
   * must have been created by the bot
   * @param {Object} params
   * @param {InputFileInputUnion} [params.sticker] - Sticker
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeStickerFromSet: methods.RemoveStickerFromSetMethod
  /**
   * Removes a chat from the list of frequently used chats. Supported only if the chat
   * info database is enabled
   * @param {Object} params
   * @param {TopChatCategoryInputUnion} [params.category] - Category of frequently
   * used chats
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  removeTopChat: methods.RemoveTopChatMethod
  /**
   * Changes the order of installed sticker sets
   * @param {Object} params
   * @param {boolean} [params.isMasks] - Pass true to change the order of mask sticker
   * sets; pass false to change the order of ordinary sticker sets
   * @param {number | string[]} [params.stickerSetIds] - Identifiers of installed sticker
   * sets in the new correct order
   * @param {Object} state
   * @returns {OkUnion}
   */
  reorderInstalledStickerSets: methods.ReorderInstalledStickerSetsMethod
  /**
   * Reports a chat to the Telegram moderators. Supported only for supergroups, channels,
   * or private chats with bots, since other chats can't be checked by moderators
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {ChatReportReasonInputUnion} [params.reason] - The reason for reporting
   * the chat
   * @param {number[]} [params.messageIds] - Identifiers of reported messages, if any
   * @param {Object} state
   * @returns {OkUnion}
   */
  reportChat: methods.ReportChatMethod
  /**
   * Reports some messages from a user in a supergroup as spam; requires administrator
   * rights in the supergroup
   * @param {Object} params
   * @param {number} [params.supergroupId] - Supergroup identifier
   * @param {number} [params.userId] - User identifier
   * @param {number[]} [params.messageIds] - Identifiers of messages sent in the supergroup
   * by the user. This list must be non-empty
   * @param {Object} state
   * @returns {OkUnion}
   */
  reportSupergroupSpam: methods.ReportSupergroupSpamMethod
  /**
   * Requests to send a password recovery code to an email address that was previously
   * set up. Works only when the current authorization state is authorizationStateWaitPassword
   * @param {Object} state
   * @returns {OkUnion}
   */
  requestAuthenticationPasswordRecovery: methods.RequestAuthenticationPasswordRecoveryMethod
  /**
   * Requests to send a password recovery code to an email address that was previously
   * set up
   * @param {Object} state
   * @returns {EmailAddressAuthenticationCodeInfoUnion}
   */
  requestPasswordRecovery: methods.RequestPasswordRecoveryMethod
  /**
   * Re-sends an authentication code to the user. Works only when the current authorization
   * state is authorizationStateWaitCode and the next_code_type of the result is not null
   * @param {Object} state
   * @returns {OkUnion}
   */
  resendAuthenticationCode: methods.ResendAuthenticationCodeMethod
  /**
   * Re-sends the authentication code sent to confirm a new phone number for the user.
   * Works only if the previously received authenticationCodeInfo next_code_type was not
   * null
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  resendChangePhoneNumberCode: methods.ResendChangePhoneNumberCodeMethod
  /**
   * Re-sends the code to verify an email address to be added to a user's Telegram Passport
   * @param {Object} state
   * @returns {EmailAddressAuthenticationCodeInfoUnion}
   */
  resendEmailAddressVerificationCode: methods.ResendEmailAddressVerificationCodeMethod
  /**
   * Resends phone number confirmation code
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  resendPhoneNumberConfirmationCode: methods.ResendPhoneNumberConfirmationCodeMethod
  /**
   * Re-sends the code to verify a phone number to be added to a user's Telegram Passport
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  resendPhoneNumberVerificationCode: methods.ResendPhoneNumberVerificationCodeMethod
  /**
   * Resets all notification settings to their default values. By default, all chats are
   * unmuted, the sound is set to "default" and message previews are shown
   * @param {Object} state
   * @returns {OkUnion}
   */
  resetAllNotificationSettings: methods.ResetAllNotificationSettingsMethod
  /**
   * Resets all network data usage statistics to zero. Can be called before authorization
   * @param {Object} state
   * @returns {OkUnion}
   */
  resetNetworkStatistics: methods.ResetNetworkStatisticsMethod
  /**
   * Searches for call messages. Returns the results in reverse chronological order (i.
   * e., in order of decreasing message_id). For optimal performance the number of returned
   * messages is chosen by the library
   * @param {Object} params
   * @param {number} [params.fromMessageId] - Identifier of the message from which
   * to search; use 0 to get results from the last message
   * @param {number} [params.limit] - The maximum number of messages to be returned;
   * up to 100. Fewer messages may be returned than specified by the limit, even if the
   * end of the message history has not been reached
   * @param {boolean} [params.onlyMissed] - If true, returns only messages with missed
   * calls
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  searchCallMessages: methods.SearchCallMessagesMethod
  /**
   * Searches for a specified query in the first name, last name and username of the members
   * of a specified chat. Requires administrator rights in channels
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {string} [params.query] - Query to search for
   * @param {number} [params.limit] - The maximum number of users to be returned
   * @param {ChatMembersFilterInputUnion} [params.filter] - The type of users to return.
   * By default, chatMembersFilterMembers
   * @param {Object} state
   * @returns {ChatMembersUnion}
   */
  searchChatMembers: methods.SearchChatMembersMethod
  /**
   * Searches for messages with given words in the chat. Returns the results in reverse
   * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
   * chats with a non-empty query (searchSecretMessages should be used instead), or without
   * an enabled message database. For optimal performance the number of returned messages
   * is chosen by the library
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat in which to search messages
   * @param {string} [params.query] - Query to search for
   * @param {number} [params.senderUserId] - If not 0, only messages sent by the specified
   * user will be returned. Not supported in secret chats
   * @param {number} [params.fromMessageId] - Identifier of the message starting from
   * which history must be fetched; use 0 to get results from the last message
   * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
   * or a negative offset to get the specified message and some newer messages
   * @param {number} [params.limit] - The maximum number of messages to be returned;
   * must be positive and can't be greater than 100. If the offset is negative, the limit
   * must be greater than -offset. Fewer messages may be returned than specified by the
   * limit, even if the end of the message history has not been reached
   * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content
   * in the search results
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  searchChatMessages: methods.SearchChatMessagesMethod
  /**
   * Returns information about the recent locations of chat members that were sent to
   * the chat. Returns up to 1 location message per user
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.limit] - Maximum number of messages to be returned
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  searchChatRecentLocationMessages: methods.SearchChatRecentLocationMessagesMethod
  /**
   * Searches for the specified query in the title and username of already known chats,
   * this is an offline request. Returns chats in the order seen in the chat list
   * @param {Object} params
   * @param {string} [params.query] - Query to search for. If the query is empty, returns
   * up to 20 recently found chats
   * @param {number} [params.limit] - Maximum number of chats to be returned
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  searchChats: methods.SearchChatsMethod
  /**
   * Searches for the specified query in the title and username of already known chats
   * via request to the server. Returns chats in the order seen in the chat list
   * @param {Object} params
   * @param {string} [params.query] - Query to search for
   * @param {number} [params.limit] - Maximum number of chats to be returned
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  searchChatsOnServer: methods.SearchChatsOnServerMethod
  /**
   * Searches for the specified query in the first names, last names and usernames of
   * the known user contacts
   * @param {Object} params
   * @param {string} [params.query] - Query to search for; can be empty to return all
   * contacts
   * @param {number} [params.limit] - Maximum number of users to be returned
   * @param {Object} state
   * @returns {UsersUnion}
   */
  searchContacts: methods.SearchContactsMethod
  /**
   * Searches for recently used hashtags by their prefix
   * @param {Object} params
   * @param {string} [params.prefix] - Hashtag prefix to search for
   * @param {number} [params.limit] - Maximum number of hashtags to be returned
   * @param {Object} state
   * @returns {HashtagsUnion}
   */
  searchHashtags: methods.SearchHashtagsMethod
  /**
   * Searches for installed sticker sets by looking for specified query in their title
   * and name
   * @param {Object} params
   * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
   * false to return ordinary sticker sets
   * @param {string} [params.query] - Query to search for
   * @param {number} [params.limit] - Maximum number of sticker sets to return
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  searchInstalledStickerSets: methods.SearchInstalledStickerSetsMethod
  /**
   * Searches for messages in all chats except secret chats. Returns the results in reverse
   * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
   * optimal performance the number of returned messages is chosen by the library
   * @param {Object} params
   * @param {string} [params.query] - Query to search for
   * @param {number} [params.offsetDate] - The date of the message starting from which
   * the results should be fetched. Use 0 or any date in the future to get results from
   * the last message
   * @param {number} [params.offsetChatId] - The chat identifier of the last found
   * message, or 0 for the first request
   * @param {number} [params.offsetMessageId] - The message identifier of the last
   * found message, or 0 for the first request
   * @param {number} [params.limit] - The maximum number of messages to be returned,
   * up to 100. Fewer messages may be returned than specified by the limit, even if the
   * end of the message history has not been reached
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  searchMessages: methods.SearchMessagesMethod
  /**
   * Searches a public chat by its username. Currently only private chats, supergroups
   * and channels can be public. Returns the chat if found; otherwise an error is returned
   * @param {Object} params
   * @param {string} [params.username] - Username to be resolved
   * @param {Object} state
   * @returns {ChatUnion}
   */
  searchPublicChat: methods.SearchPublicChatMethod
  /**
   * Searches public chats by looking for specified query in their username and title.
   * Currently only private chats, supergroups and channels can be public. Returns a meaningful
   * number of results. Returns nothing if the length of the searched username prefix
   * is less than 5. Excludes private chats with contacts and chats from the chat list
   * from the results
   * @param {Object} params
   * @param {string} [params.query] - Query to search for
   * @param {Object} state
   * @returns {ChatsUnion}
   */
  searchPublicChats: methods.SearchPublicChatsMethod
  /**
   * Searches for messages in secret chats. Returns the results in reverse chronological
   * order. For optimal performance the number of returned messages is chosen by the library
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat in which to search. Specify
   * 0 to search in all secret chats
   * @param {string} [params.query] - Query to search for. If empty, searchChatMessages
   * should be used instead
   * @param {number | string} [params.fromSearchId] - The identifier from the result
   * of a previous request, use 0 to get results from the last message
   * @param {number} [params.limit] - Maximum number of messages to be returned; up
   * to 100. Fewer messages may be returned than specified by the limit, even if the end
   * of the message history has not been reached
   * @param {SearchMessagesFilterInputUnion} [params.filter] - A filter for the content
   * of messages in the search results
   * @param {Object} state
   * @returns {FoundMessagesUnion}
   */
  searchSecretMessages: methods.SearchSecretMessagesMethod
  /**
   * Searches for a sticker set by its name
   * @param {Object} params
   * @param {string} [params.name] - Name of the sticker set
   * @param {Object} state
   * @returns {StickerSetUnion}
   */
  searchStickerSet: methods.SearchStickerSetMethod
  /**
   * Searches for ordinary sticker sets by looking for specified query in their title
   * and name. Excludes installed sticker sets from the results
   * @param {Object} params
   * @param {string} [params.query] - Query to search for
   * @param {Object} state
   * @returns {StickerSetsUnion}
   */
  searchStickerSets: methods.SearchStickerSetsMethod
  /**
   * Searches for stickers from public sticker sets that correspond to a given emoji
   * @param {Object} params
   * @param {string} [params.emoji] - String representation of emoji; must be non-empty
   * @param {number} [params.limit] - Maximum number of stickers to be returned
   * @param {Object} state
   * @returns {StickersUnion}
   */
  searchStickers: methods.SearchStickersMethod
  /**
   * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
   * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
   * be invited to channels (although they can be added as admins) and secret chats. Returns
   * the sent message
   * @param {Object} params
   * @param {number} [params.botUserId] - Identifier of the bot
   * @param {number} [params.chatId] - Identifier of the target chat
   * @param {string} [params.parameter] - A hidden parameter sent to the bot for deep
   * linking purposes (https://api.telegram.org/bots#deep-linking)
   * @param {Object} state
   * @returns {MessageUnion}
   */
  sendBotStartMessage: methods.SendBotStartMessageMethod
  /**
   * Sends debug information for a call
   * @param {Object} params
   * @param {number} [params.callId] - Call identifier
   * @param {string} [params.debugInformation] - Debug information in application-specific
   * format
   * @param {Object} state
   * @returns {OkUnion}
   */
  sendCallDebugInformation: methods.SendCallDebugInformationMethod
  /**
   * Sends a call rating
   * @param {Object} params
   * @param {number} [params.callId] - Call identifier
   * @param {number} [params.rating] - Call rating; 1-5
   * @param {string} [params.comment] - An optional user comment if the rating is less
   * than 5
   * @param {Object} state
   * @returns {OkUnion}
   */
  sendCallRating: methods.SendCallRatingMethod
  /**
   * Sends a notification about user activity in a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {ChatActionInputUnion} [params.action] - The action description
   * @param {Object} state
   * @returns {OkUnion}
   */
  sendChatAction: methods.SendChatActionMethod
  /**
   * Sends a notification about a screenshot taken in a chat. Supported only in private
   * and secret chats
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  sendChatScreenshotTakenNotification: methods.SendChatScreenshotTakenNotificationMethod
  /**
   * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
   * and sends the corresponding message
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.ttl] - New TTL value, in seconds
   * @param {Object} state
   * @returns {MessageUnion}
   */
  sendChatSetTtlMessage: methods.SendChatSetTtlMessageMethod
  /**
   * Sends a custom request; for bots only
   * @param {Object} params
   * @param {string} [params.method] - The method name
   * @param {string} [params.parameters] - JSON-serialized method parameters
   * @param {Object} state
   * @returns {CustomRequestResultUnion}
   */
  sendCustomRequest: methods.SendCustomRequestMethod
  /**
   * Sends a code to verify an email address to be added to a user's Telegram Passport
   * @param {Object} params
   * @param {string} [params.emailAddress] - Email address
   * @param {Object} state
   * @returns {EmailAddressAuthenticationCodeInfoUnion}
   */
  sendEmailAddressVerificationCode: methods.SendEmailAddressVerificationCodeMethod
  /**
   * Sends the result of an inline query as a message. Returns the sent message. Always
   * clears a chat draft message
   * @param {Object} params
   * @param {number} [params.chatId] - Target chat
   * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
   * or 0
   * @param {boolean} [params.disableNotification] - Pass true to disable notification
   * for the message. Not supported in secret chats
   * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
   * background
   * @param {number | string} [params.queryId] - Identifier of the inline query
   * @param {string} [params.resultId] - Identifier of the inline result
   * @param {Object} state
   * @returns {MessageUnion}
   */
  sendInlineQueryResultMessage: methods.SendInlineQueryResultMessageMethod
  /**
   * Sends a message. Returns the sent message
   * @param {Object} params
   * @param {number} [params.chatId] - Target chat
   * @param {number} [params.replyToMessageId] - Identifier of the message to reply
   * to or 0
   * @param {boolean} [params.disableNotification] - Pass true to disable notification
   * for the message. Not supported in secret chats
   * @param {boolean} [params.fromBackground] - Pass true if the message is sent from
   * the background
   * @param {ReplyMarkupInputUnion} [params.replyMarkup] - Markup for replying to the
   * message; for bots only
   * @param {InputMessageContentInputUnion} [params.inputMessageContent] - The content
   * of the message to be sent
   * @param {Object} state
   * @returns {MessageUnion}
   */
  sendMessage: methods.SendMessageMethod
  /**
   * Sends messages grouped together into an album. Currently only photo and video messages
   * can be grouped into an album. Returns sent messages
   * @param {Object} params
   * @param {number} [params.chatId] - Target chat
   * @param {number} [params.replyToMessageId] - Identifier of a message to reply to
   * or 0
   * @param {boolean} [params.disableNotification] - Pass true to disable notification
   * for the messages. Not supported in secret chats
   * @param {boolean} [params.fromBackground] - Pass true if the messages are sent
   * from the background
   * @param {InputMessageContentInputUnion[]} [params.inputMessageContents] - Contents
   * of messages to be sent
   * @param {Object} state
   * @returns {MessagesUnion}
   */
  sendMessageAlbum: methods.SendMessageAlbumMethod
  /**
   * Sends a Telegram Passport authorization form, effectively sharing data with the service
   * @param {Object} params
   * @param {number} [params.autorizationFormId] - Authorization form identifier
   * @param {PassportElementTypeInputUnion[]} [params.types] - Types of Telegram Passport
   * elements chosen by user to complete the authorization form
   * @param {Object} state
   * @returns {OkUnion}
   */
  sendPassportAuthorizationForm: methods.SendPassportAuthorizationFormMethod
  /**
   * Sends a filled-out payment form to the bot for final verification
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier of the Invoice message
   * @param {number} [params.messageId] - Message identifier
   * @param {string} [params.orderInfoId] - Identifier returned by ValidateOrderInfo,
   * or an empty string
   * @param {string} [params.shippingOptionId] - Identifier of a chosen shipping option,
   * if applicable
   * @param {InputCredentialsInputUnion} [params.credentials] - The credentials chosen
   * by user for payment
   * @param {Object} state
   * @returns {PaymentResultUnion}
   */
  sendPaymentForm: methods.SendPaymentFormMethod
  /**
   * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
   * or "tg://confirmphone?phone=*******&hash=**********" link
   * @param {Object} params
   * @param {string} [params.hash] - Value of the "hash" parameter from the link
   * @param {string} [params.phoneNumber] - Value of the "phone" parameter from the
   * link
   * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
   * may be sent via flash call to the specified phone number
   * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
   * is used on the current device. Ignored if allow_flash_call is false
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  sendPhoneNumberConfirmationCode: methods.SendPhoneNumberConfirmationCodeMethod
  /**
   * Sends a code to verify a phone number to be added to a user's Telegram Passport
   * @param {Object} params
   * @param {string} [params.phoneNumber] - The phone number of the user, in international
   * format
   * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
   * may be sent via flash call to the specified phone number
   * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
   * is used on the current device. Ignored if allow_flash_call is false
   * @param {Object} state
   * @returns {AuthenticationCodeInfoUnion}
   */
  sendPhoneNumberVerificationCode: methods.SendPhoneNumberVerificationCodeMethod
  /**
   * Changes the period of inactivity after which the account of the current user will
   * automatically be deleted
   * @param {Object} params
   * @param {AccountTtlInput} [params.ttl] - New account TTL
   * @param {Object} state
   * @returns {OkUnion}
   */
  setAccountTtl: methods.SetAccountTtlMethod
  /**
   * Succeeds after a specified amount of time has passed. Can be called before authorization.
   * Can be called before initialization
   * @param {Object} params
   * @param {number} [params.seconds] - Number of seconds before the function returns
   * @param {Object} state
   * @returns {OkUnion}
   */
  setAlarm: methods.SetAlarmMethod
  /**
   * Sets the phone number of the user and sends an authentication code to the user. Works
   * only when the current authorization state is authorizationStateWaitPhoneNumber
   * @param {Object} params
   * @param {string} [params.phoneNumber] - The phone number of the user, in international
   * format
   * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
   * may be sent via flash call to the specified phone number
   * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
   * is used on the current device. Ignored if allow_flash_call is false
   * @param {Object} state
   * @returns {OkUnion}
   */
  setAuthenticationPhoneNumber: methods.SetAuthenticationPhoneNumberMethod
  /**
   * Changes the bio of the current user
   * @param {Object} params
   * @param {string} [params.bio] - The new value of the user bio; 0-70 characters
   * without line feeds
   * @param {Object} state
   * @returns {OkUnion}
   */
  setBio: methods.SetBioMethod
  /**
   * Informs the server about the number of pending bot updates if they haven't been processed
   * for a long time; for bots only
   * @param {Object} params
   * @param {number} [params.pendingUpdateCount] - The number of pending updates
   * @param {string} [params.errorMessage] - The last error message
   * @param {Object} state
   * @returns {OkUnion}
   */
  setBotUpdatesStatus: methods.SetBotUpdatesStatusMethod
  /**
   * Changes client data associated with a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {string} [params.clientData] - New value of client_data
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatClientData: methods.SetChatClientDataMethod
  /**
   * Changes the draft message in a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {DraftMessageInput} [params.draftMessage] - New draft message; may be null
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatDraftMessage: methods.SetChatDraftMessageMethod
  /**
   * Changes the status of a chat member, needs appropriate privileges. This function
   * is currently not suitable for adding new members to the chat; instead, use addChatMember.
   * The chat member status will not be changed until it has been synchronized with the
   * server
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number} [params.userId] - User identifier
   * @param {ChatMemberStatusInputUnion} [params.status] - The new status of the member
   * in the chat
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatMemberStatus: methods.SetChatMemberStatusMethod
  /**
   * Changes the notification settings of a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {ChatNotificationSettingsInput} [params.notificationSettings] - New notification
   * settings for the chat
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatNotificationSettings: methods.SetChatNotificationSettingsMethod
  /**
   * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
   * Requires administrator rights in basic groups and the appropriate administrator rights
   * in supergroups and channels. The photo will not be changed before request to the
   * server has been completed
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {InputFileInputUnion} [params.photo] - New chat photo. You can use a zero
   * InputFileId to delete the chat photo. Files that are accessible only by HTTP URL
   * are not acceptable
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatPhoto: methods.SetChatPhotoMethod
  /**
   * Changes the chat title. Supported only for basic groups, supergroups and channels.
   * Requires administrator rights in basic groups and the appropriate administrator rights
   * in supergroups and channels. The title will not be changed until the request to the
   * server has been completed
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {string} [params.title] - New title of the chat; 1-255 characters
   * @param {Object} state
   * @returns {OkUnion}
   */
  setChatTitle: methods.SetChatTitleMethod
  /**
   * Adds or changes a custom language pack to the current localization target
   * @param {Object} params
   * @param {LanguagePackInfoInput} [params.info] - Information about the language
   * pack. Language pack ID must start with 'X', consist only of English letters, digits
   * and hyphens, and must not exceed 64 characters
   * @param {LanguagePackStringInput[]} [params.strings] - Strings of the new language
   * pack
   * @param {Object} state
   * @returns {OkUnion}
   */
  setCustomLanguagePack: methods.SetCustomLanguagePackMethod
  /**
   * Adds, edits or deletes a string in a custom language pack
   * @param {Object} params
   * @param {string} [params.languagePackId] - Identifier of a previously added custom
   * language pack in the current localization target
   * @param {LanguagePackStringInput} [params.newString] - New language pack string
   * @param {Object} state
   * @returns {OkUnion}
   */
  setCustomLanguagePackString: methods.SetCustomLanguagePackStringMethod
  /**
   * Changes the database encryption key. Usually the encryption key is never changed
   * and is stored in some OS keychain
   * @param {Object} params
   * @param {string} [params.newEncryptionKey] - New encryption key
   * @param {Object} state
   * @returns {OkUnion}
   */
  setDatabaseEncryptionKey: methods.SetDatabaseEncryptionKeyMethod
  /**
   * The next part of a file was generated
   * @param {Object} params
   * @param {number | string} [params.generationId] - The identifier of the generation
   * process
   * @param {number} [params.expectedSize] - Expected size of the generated file, in
   * bytes; 0 if unknown
   * @param {number} [params.localPrefixSize] - The number of bytes already generated
   * @param {Object} state
   * @returns {OkUnion}
   */
  setFileGenerationProgress: methods.SetFileGenerationProgressMethod
  /**
   * Updates the game score of the specified user in the game; for bots only
   * @param {Object} params
   * @param {number} [params.chatId] - The chat to which the message with the game
   * @param {number} [params.messageId] - Identifier of the message
   * @param {boolean} [params.editMessage] - True, if the message should be edited
   * @param {number} [params.userId] - User identifier
   * @param {number} [params.score] - The new score
   * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
   * If the score is 0, the user will be deleted from the high score table
   * @param {Object} state
   * @returns {MessageUnion}
   */
  setGameScore: methods.SetGameScoreMethod
  /**
   * Updates the game score of the specified user in a game; for bots only
   * @param {Object} params
   * @param {string} [params.inlineMessageId] - Inline message identifier
   * @param {boolean} [params.editMessage] - True, if the message should be edited
   * @param {number} [params.userId] - User identifier
   * @param {number} [params.score] - The new score
   * @param {boolean} [params.force] - Pass true to update the score even if it decreases.
   * If the score is 0, the user will be deleted from the high score table
   * @param {Object} state
   * @returns {OkUnion}
   */
  setInlineGameScore: methods.SetInlineGameScoreMethod
  /**
   * Changes the first and last name of the current user. If something changes, updateUser
   * will be sent
   * @param {Object} params
   * @param {string} [params.firstName] - The new value of the first name for the user;
   * 1-255 characters
   * @param {string} [params.lastName] - The new value of the optional last name for
   * the user; 0-255 characters
   * @param {Object} state
   * @returns {OkUnion}
   */
  setName: methods.SetNameMethod
  /**
   * Sets the current network type. Can be called before authorization. Calling this method
   * forces all network connections to reopen, mitigating the delay in switching between
   * different networks, so it should be called whenever the network is changed, even
   * if the network type remains the same. Network type is used to check whether the library
   * can use the network at all and also for collecting detailed network data usage statistics
   * @param {Object} params
   * @param {NetworkTypeInputUnion} [params.type] - The new network type. By default,
   * networkTypeOther
   * @param {Object} state
   * @returns {OkUnion}
   */
  setNetworkType: methods.SetNetworkTypeMethod
  /**
   * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
   * Only writable options can be set. Can be called before authorization
   * @param {Object} params
   * @param {string} [params.name] - The name of the option
   * @param {OptionValueInputUnion} [params.value] - The new value of the option
   * @param {Object} state
   * @returns {OkUnion}
   */
  setOption: methods.SetOptionMethod
  /**
   * Adds an element to the user's Telegram Passport. May return an error with a message
   * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
   * or the chosen email address must be verified first
   * @param {Object} params
   * @param {InputPassportElementInputUnion} [params.element] - Input Telegram Passport
   * element
   * @param {string} [params.password] - Password of the current user
   * @param {Object} state
   * @returns {PassportElementUnion}
   */
  setPassportElement: methods.SetPassportElementMethod
  /**
   * Informs the user that some of the elements in their Telegram Passport contain errors;
   * for bots only. The user will not be able to resend the elements, until the errors
   * are fixed
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {InputPassportElementErrorInput[]} [params.errors] - The errors
   * @param {Object} state
   * @returns {OkUnion}
   */
  setPassportElementErrors: methods.SetPassportElementErrorsMethod
  /**
   * Changes the password for the user. If a new recovery email address is specified,
   * then the error EMAIL_UNCONFIRMED is returned and the password change will not be
   * applied until the new recovery email address has been confirmed. The application
   * should periodically call getPasswordState to check whether the new email address
   * has been confirmed
   * @param {Object} params
   * @param {string} [params.oldPassword] - Previous password of the user
   * @param {string} [params.newPassword] - New password of the user; may be empty
   * to remove the password
   * @param {string} [params.newHint] - New password hint; may be empty
   * @param {boolean} [params.setRecoveryEmailAddress] - Pass true if the recovery
   * email address should be changed
   * @param {string} [params.newRecoveryEmailAddress] - New recovery email address;
   * may be empty
   * @param {Object} state
   * @returns {PasswordStateUnion}
   */
  setPassword: methods.SetPasswordMethod
  /**
   * Changes the order of pinned chats
   * @param {Object} params
   * @param {number[]} [params.chatIds] - The new list of pinned chats
   * @param {Object} state
   * @returns {OkUnion}
   */
  setPinnedChats: methods.SetPinnedChatsMethod
  /**
   * Uploads a new profile photo for the current user. If something changes, updateUser
   * will be sent
   * @param {Object} params
   * @param {InputFileInputUnion} [params.photo] - Profile photo to set. inputFileId
   * and inputFileRemote may still be unsupported
   * @param {Object} state
   * @returns {OkUnion}
   */
  setProfilePhoto: methods.SetProfilePhotoMethod
  /**
   * Changes the recovery email address of the user. If a new recovery email address is
   * specified, then the error EMAIL_UNCONFIRMED is returned and the email address will
   * not be changed until the new email has been confirmed. The application should periodically
   * call getPasswordState to check whether the email address has been confirmed. If new_recovery_email_address
   * is the same as the email address that is currently set up, this call succeeds immediately
   * and aborts all other requests waiting for an email confirmation
   * @param {Object} params
   * @param {string} [params.password] - Password of the current user
   * @param {string} [params.newRecoveryEmailAddress] - New recovery email address
   * @param {Object} state
   * @returns {PasswordStateUnion}
   */
  setRecoveryEmailAddress: methods.SetRecoveryEmailAddressMethod
  /**
   * Changes notification settings for chats of a given type
   * @param {Object} params
   * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
   * which to change the notification settings
   * @param {ScopeNotificationSettingsInput} [params.notificationSettings] - The new
   * notification settings for the given scope
   * @param {Object} state
   * @returns {OkUnion}
   */
  setScopeNotificationSettings: methods.SetScopeNotificationSettingsMethod
  /**
   * Changes the position of a sticker in the set to which it belongs; for bots only.
   * The sticker set must have been created by the bot
   * @param {Object} params
   * @param {InputFileInputUnion} [params.sticker] - Sticker
   * @param {number} [params.position] - New position of the sticker in the set, zero-based
   * @param {Object} state
   * @returns {OkUnion}
   */
  setStickerPositionInSet: methods.SetStickerPositionInSetMethod
  /**
   * Changes information about a supergroup or channel; requires appropriate administrator
   * rights
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {string} [params.description] - New supergroup or channel description;
   * 0-255 characters
   * @param {Object} state
   * @returns {OkUnion}
   */
  setSupergroupDescription: methods.SetSupergroupDescriptionMethod
  /**
   * Changes the sticker set of a supergroup; requires appropriate rights in the supergroup
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup
   * @param {number | string} [params.stickerSetId] - New value of the supergroup sticker
   * set identifier. Use 0 to remove the supergroup sticker set
   * @param {Object} state
   * @returns {OkUnion}
   */
  setSupergroupStickerSet: methods.SetSupergroupStickerSetMethod
  /**
   * Changes the username of a supergroup or channel, requires creator privileges in the
   * supergroup or channel
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {string} [params.username] - New value of the username. Use an empty string
   * to remove the username
   * @param {Object} state
   * @returns {OkUnion}
   */
  setSupergroupUsername: methods.SetSupergroupUsernameMethod
  /**
   * Sets the parameters for TDLib initialization. Works only when the current authorization
   * state is authorizationStateWaitTdlibParameters
   * @param {Object} params
   * @param {TdlibParametersInput} [params.parameters] - Parameters
   * @param {Object} state
   * @returns {OkUnion}
   */
  setTdlibParameters: methods.SetTdlibParametersMethod
  /**
   * Changes user privacy settings
   * @param {Object} params
   * @param {UserPrivacySettingInputUnion} [params.setting] - The privacy setting
   * @param {UserPrivacySettingRulesInput} [params.rules] - The new privacy rules
   * @param {Object} state
   * @returns {OkUnion}
   */
  setUserPrivacySettingRules: methods.SetUserPrivacySettingRulesMethod
  /**
   * Changes the username of the current user. If something changes, updateUser will be
   * sent
   * @param {Object} params
   * @param {string} [params.username] - The new value of the username. Use an empty
   * string to remove the username
   * @param {Object} state
   * @returns {OkUnion}
   */
  setUsername: methods.SetUsernameMethod
  /**
   * Terminates all other sessions of the current user
   * @param {Object} state
   * @returns {OkUnion}
   */
  terminateAllOtherSessions: methods.TerminateAllOtherSessionsMethod
  /**
   * Terminates a session of the current user
   * @param {Object} params
   * @param {number | string} [params.sessionId] - Session identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  terminateSession: methods.TerminateSessionMethod
  /**
   * Returns the received bytes; for testing only
   * @param {Object} params
   * @param {string} [params.x] - Bytes to return
   * @param {Object} state
   * @returns {TestBytesUnion}
   */
  testCallBytes: methods.TestCallBytesMethod
  /**
   * Does nothing; for testing only
   * @param {Object} state
   * @returns {OkUnion}
   */
  testCallEmpty: methods.TestCallEmptyMethod
  /**
   * Returns the received string; for testing only
   * @param {Object} params
   * @param {string} [params.x] - String to return
   * @param {Object} state
   * @returns {TestStringUnion}
   */
  testCallString: methods.TestCallStringMethod
  /**
   * Returns the received vector of numbers; for testing only
   * @param {Object} params
   * @param {number[]} [params.x] - Vector of numbers to return
   * @param {Object} state
   * @returns {TestVectorIntUnion}
   */
  testCallVectorInt: methods.TestCallVectorIntMethod
  /**
   * Returns the received vector of objects containing a number; for testing only
   * @param {Object} params
   * @param {TestIntInput[]} [params.x] - Vector of objects to return
   * @param {Object} state
   * @returns {TestVectorIntObjectUnion}
   */
  testCallVectorIntObject: methods.TestCallVectorIntObjectMethod
  /**
   * For testing only request. Returns the received vector of strings; for testing only
   * @param {Object} params
   * @param {string[]} [params.x] - Vector of strings to return
   * @param {Object} state
   * @returns {TestVectorStringUnion}
   */
  testCallVectorString: methods.TestCallVectorStringMethod
  /**
   * Returns the received vector of objects containing a string; for testing only
   * @param {Object} params
   * @param {TestStringInput[]} [params.x] - Vector of objects to return
   * @param {Object} state
   * @returns {TestVectorStringObjectUnion}
   */
  testCallVectorStringObject: methods.TestCallVectorStringObjectMethod
  /**
   * Forces an updates.getDifference call to the Telegram servers; for testing only
   * @param {Object} state
   * @returns {OkUnion}
   */
  testGetDifference: methods.TestGetDifferenceMethod
  /**
   * Sends a simple network request to the Telegram servers; for testing only
   * @param {Object} state
   * @returns {OkUnion}
   */
  testNetwork: methods.TestNetworkMethod
  /**
   * Returns the squared received number; for testing only
   * @param {Object} params
   * @param {number} [params.x] - Number to square
   * @param {Object} state
   * @returns {TestIntUnion}
   */
  testSquareInt: methods.TestSquareIntMethod
  /**
   * Does nothing and ensures that the Error object is used; for testing only
   * @param {Object} state
   * @returns {ErrorUnion}
   */
  testUseError: methods.TestUseErrorMethod
  /**
   * Does nothing and ensures that the Update object is used; for testing only
   * @param {Object} state
   * @returns {UpdateUnion}
   */
  testUseUpdate: methods.TestUseUpdateMethod
  /**
   * Toggles the "All members are admins" setting in basic groups; requires creator privileges
   * in the group
   * @param {Object} params
   * @param {number} [params.basicGroupId] - Identifier of the basic group
   * @param {boolean} [params.everyoneIsAdministrator] - New value of everyone_is_administrator
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleBasicGroupAdministrators: methods.ToggleBasicGroupAdministratorsMethod
  /**
   * Changes the value of the default disable_notification parameter, used when a message
   * is sent to a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {boolean} [params.defaultDisableNotification] - New value of default_disable_notification
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleChatDefaultDisableNotification: methods.ToggleChatDefaultDisableNotificationMethod
  /**
   * Changes the marked as unread state of a chat
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {boolean} [params.isMarkedAsUnread] - New value of is_marked_as_unread
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleChatIsMarkedAsUnread: methods.ToggleChatIsMarkedAsUnreadMethod
  /**
   * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")
   * non-secret chats and the same number of secret chats
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {boolean} [params.isPinned] - New value of is_pinned
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleChatIsPinned: methods.ToggleChatIsPinnedMethod
  /**
   * Toggles whether all members of a supergroup can add new members; requires appropriate
   * administrator rights in the supergroup.
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup
   * @param {boolean} [params.anyoneCanInvite] - New value of anyone_can_invite
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleSupergroupInvites: methods.ToggleSupergroupInvitesMethod
  /**
   * Toggles whether the message history of a supergroup is available to new members;
   * requires appropriate administrator rights in the supergroup.
   * @param {Object} params
   * @param {number} [params.supergroupId] - The identifier of the supergroup
   * @param {boolean} [params.isAllHistoryAvailable] - The new value of is_all_history_available
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleSupergroupIsAllHistoryAvailable: methods.ToggleSupergroupIsAllHistoryAvailableMethod
  /**
   * Toggles sender signatures messages sent in a channel; requires appropriate administrator
   * rights in the channel.
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the channel
   * @param {boolean} [params.signMessages] - New value of sign_messages
   * @param {Object} state
   * @returns {OkUnion}
   */
  toggleSupergroupSignMessages: methods.ToggleSupergroupSignMessagesMethod
  /**
   * Removes a user from the blacklist
   * @param {Object} params
   * @param {number} [params.userId] - User identifier
   * @param {Object} state
   * @returns {OkUnion}
   */
  unblockUser: methods.UnblockUserMethod
  /**
   * Removes the pinned message from a supergroup or channel; requires appropriate administrator
   * rights in the supergroup or channel
   * @param {Object} params
   * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
   * @param {Object} state
   * @returns {OkUnion}
   */
  unpinSupergroupMessage: methods.UnpinSupergroupMessageMethod
  /**
   * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
   * and messageChatUpgradeFrom. Deactivates the original basic group
   * @param {Object} params
   * @param {number} [params.chatId] - Identifier of the chat to upgrade
   * @param {Object} state
   * @returns {ChatUnion}
   */
  upgradeBasicGroupChatToSupergroupChat: methods.UpgradeBasicGroupChatToSupergroupChatMethod
  /**
   * Asynchronously uploads a file to the cloud without sending it in a message. updateFile
   * will be used to notify about upload progress and successful completion of the upload.
   * The file will not have a persistent remote identifier until it will be sent in a
   * message
   * @param {Object} params
   * @param {InputFileInputUnion} [params.file] - File to upload
   * @param {FileTypeInputUnion} [params.fileType] - File type
   * @param {number} [params.priority] - Priority of the upload (1-32). The higher
   * the priority, the earlier the file will be uploaded. If the priorities of two files
   * are equal, then the first one for which uploadFile was called will be uploaded first
   * @param {Object} state
   * @returns {FileUnion}
   */
  uploadFile: methods.UploadFileMethod
  /**
   * Uploads a PNG image with a sticker; for bots only; returns the uploaded file
   * @param {Object} params
   * @param {number} [params.userId] - Sticker file owner
   * @param {InputFileInputUnion} [params.pngSticker] - PNG image with the sticker;
   * must be up to 512 kB in size and fit in 512x512 square
   * @param {Object} state
   * @returns {FileUnion}
   */
  uploadStickerFile: methods.UploadStickerFileMethod
  /**
   * Validates the order information provided by a user and returns the available shipping
   * options for a flexible invoice
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier of the Invoice message
   * @param {number} [params.messageId] - Message identifier
   * @param {OrderInfoInput} [params.orderInfo] - The order information, provided by
   * the user
   * @param {boolean} [params.allowSave] - True, if the order information can be saved
   * @param {Object} state
   * @returns {ValidatedOrderInfoUnion}
   */
  validateOrderInfo: methods.ValidateOrderInfoMethod
  /**
   * This method should be called if messages are being viewed by the user. Many useful
   * activities depend on whether the messages are currently being viewed or not (e.g.,
   * marking messages as read, incrementing a view counter, updating a view counter, removing
   * deleted messages in supergroups and channels)
   * @param {Object} params
   * @param {number} [params.chatId] - Chat identifier
   * @param {number[]} [params.messageIds] - The identifiers of the messages being
   * viewed
   * @param {boolean} [params.forceRead] - True, if messages in closed chats should
   * be marked as read
   * @param {Object} state
   * @returns {OkUnion}
   */
  viewMessages: methods.ViewMessagesMethod
  /**
   * Informs the server that some trending sticker sets have been viewed by the user
   * @param {Object} params
   * @param {number | string[]} [params.stickerSetIds] - Identifiers of viewed trending
   * sticker sets
   * @param {Object} state
   * @returns {OkUnion}
   */
  viewTrendingStickerSets: methods.ViewTrendingStickerSetsMethod
}

export type ApiFactory = (fn: ag.ApiFn) => ApiMethods

export const apiFactory: ApiFactory = (fn: ag.ApiFn) => ({
  acceptCall: (params, state) => fn('acceptCall', params, state),
  acceptTermsOfService: (params, state) => fn('acceptTermsOfService', params, state),
  addChatMember: (params, state) => fn('addChatMember', params, state),
  addChatMembers: (params, state) => fn('addChatMembers', params, state),
  addFavoriteSticker: (params, state) => fn('addFavoriteSticker', params, state),
  addLocalMessage: (params, state) => fn('addLocalMessage', params, state),
  addNetworkStatistics: (params, state) => fn('addNetworkStatistics', params, state),
  addProxy: (params, state) => fn('addProxy', params, state),
  addRecentSticker: (params, state) => fn('addRecentSticker', params, state),
  addRecentlyFoundChat: (params, state) => fn('addRecentlyFoundChat', params, state),
  addSavedAnimation: (params, state) => fn('addSavedAnimation', params, state),
  addStickerToSet: (params, state) => fn('addStickerToSet', params, state),
  answerCallbackQuery: (params, state) => fn('answerCallbackQuery', params, state),
  answerCustomQuery: (params, state) => fn('answerCustomQuery', params, state),
  answerInlineQuery: (params, state) => fn('answerInlineQuery', params, state),
  answerPreCheckoutQuery: (params, state) => fn('answerPreCheckoutQuery', params, state),
  answerShippingQuery: (params, state) => fn('answerShippingQuery', params, state),
  blockUser: (params, state) => fn('blockUser', params, state),
  cancelDownloadFile: (params, state) => fn('cancelDownloadFile', params, state),
  cancelUploadFile: (params, state) => fn('cancelUploadFile', params, state),
  changeChatReportSpamState: (params, state) => fn('changeChatReportSpamState', params, state),
  changeImportedContacts: (params, state) => fn('changeImportedContacts', params, state),
  changePhoneNumber: (params, state) => fn('changePhoneNumber', params, state),
  changeStickerSet: (params, state) => fn('changeStickerSet', params, state),
  checkAuthenticationBotToken: (params, state) => fn('checkAuthenticationBotToken', params, state),
  checkAuthenticationCode: (params, state) => fn('checkAuthenticationCode', params, state),
  checkAuthenticationPassword: (params, state) => fn('checkAuthenticationPassword', params, state),
  checkChangePhoneNumberCode: (params, state) => fn('checkChangePhoneNumberCode', params, state),
  checkChatInviteLink: (params, state) => fn('checkChatInviteLink', params, state),
  checkChatUsername: (params, state) => fn('checkChatUsername', params, state),
  checkDatabaseEncryptionKey: (params, state) => fn('checkDatabaseEncryptionKey', params, state),
  checkEmailAddressVerificationCode: (params, state) => fn('checkEmailAddressVerificationCode', params, state),
  checkPhoneNumberConfirmationCode: (params, state) => fn('checkPhoneNumberConfirmationCode', params, state),
  checkPhoneNumberVerificationCode: (params, state) => fn('checkPhoneNumberVerificationCode', params, state),
  cleanFileName: (params, state) => fn('cleanFileName', params, state),
  clearAllDraftMessages: (params, state) => fn('clearAllDraftMessages', params, state),
  clearImportedContacts: (state) => fn('clearImportedContacts', null, state),
  clearRecentStickers: (params, state) => fn('clearRecentStickers', params, state),
  clearRecentlyFoundChats: (state) => fn('clearRecentlyFoundChats', null, state),
  close: (state) => fn('close', null, state),
  closeChat: (params, state) => fn('closeChat', params, state),
  closeSecretChat: (params, state) => fn('closeSecretChat', params, state),
  createBasicGroupChat: (params, state) => fn('createBasicGroupChat', params, state),
  createCall: (params, state) => fn('createCall', params, state),
  createNewBasicGroupChat: (params, state) => fn('createNewBasicGroupChat', params, state),
  createNewSecretChat: (params, state) => fn('createNewSecretChat', params, state),
  createNewStickerSet: (params, state) => fn('createNewStickerSet', params, state),
  createNewSupergroupChat: (params, state) => fn('createNewSupergroupChat', params, state),
  createPrivateChat: (params, state) => fn('createPrivateChat', params, state),
  createSecretChat: (params, state) => fn('createSecretChat', params, state),
  createSupergroupChat: (params, state) => fn('createSupergroupChat', params, state),
  createTemporaryPassword: (params, state) => fn('createTemporaryPassword', params, state),
  deleteAccount: (params, state) => fn('deleteAccount', params, state),
  deleteChatHistory: (params, state) => fn('deleteChatHistory', params, state),
  deleteChatMessagesFromUser: (params, state) => fn('deleteChatMessagesFromUser', params, state),
  deleteChatReplyMarkup: (params, state) => fn('deleteChatReplyMarkup', params, state),
  deleteFile: (params, state) => fn('deleteFile', params, state),
  deleteLanguagePack: (params, state) => fn('deleteLanguagePack', params, state),
  deleteMessages: (params, state) => fn('deleteMessages', params, state),
  deletePassportElement: (params, state) => fn('deletePassportElement', params, state),
  deleteProfilePhoto: (params, state) => fn('deleteProfilePhoto', params, state),
  deleteSavedCredentials: (state) => fn('deleteSavedCredentials', null, state),
  deleteSavedOrderInfo: (state) => fn('deleteSavedOrderInfo', null, state),
  deleteSupergroup: (params, state) => fn('deleteSupergroup', params, state),
  destroy: (state) => fn('destroy', null, state),
  disableProxy: (state) => fn('disableProxy', null, state),
  discardCall: (params, state) => fn('discardCall', params, state),
  disconnectAllWebsites: (state) => fn('disconnectAllWebsites', null, state),
  disconnectWebsite: (params, state) => fn('disconnectWebsite', params, state),
  downloadFile: (params, state) => fn('downloadFile', params, state),
  editCustomLanguagePackInfo: (params, state) => fn('editCustomLanguagePackInfo', params, state),
  editInlineMessageCaption: (params, state) => fn('editInlineMessageCaption', params, state),
  editInlineMessageLiveLocation: (params, state) => fn('editInlineMessageLiveLocation', params, state),
  editInlineMessageMedia: (params, state) => fn('editInlineMessageMedia', params, state),
  editInlineMessageReplyMarkup: (params, state) => fn('editInlineMessageReplyMarkup', params, state),
  editInlineMessageText: (params, state) => fn('editInlineMessageText', params, state),
  editMessageCaption: (params, state) => fn('editMessageCaption', params, state),
  editMessageLiveLocation: (params, state) => fn('editMessageLiveLocation', params, state),
  editMessageMedia: (params, state) => fn('editMessageMedia', params, state),
  editMessageReplyMarkup: (params, state) => fn('editMessageReplyMarkup', params, state),
  editMessageText: (params, state) => fn('editMessageText', params, state),
  editProxy: (params, state) => fn('editProxy', params, state),
  enableProxy: (params, state) => fn('enableProxy', params, state),
  finishFileGeneration: (params, state) => fn('finishFileGeneration', params, state),
  forwardMessages: (params, state) => fn('forwardMessages', params, state),
  generateChatInviteLink: (params, state) => fn('generateChatInviteLink', params, state),
  getAccountTtl: (state) => fn('getAccountTtl', null, state),
  getActiveLiveLocationMessages: (state) => fn('getActiveLiveLocationMessages', null, state),
  getActiveSessions: (state) => fn('getActiveSessions', null, state),
  getAllPassportElements: (params, state) => fn('getAllPassportElements', params, state),
  getArchivedStickerSets: (params, state) => fn('getArchivedStickerSets', params, state),
  getAttachedStickerSets: (params, state) => fn('getAttachedStickerSets', params, state),
  getAuthorizationState: (state) => fn('getAuthorizationState', null, state),
  getBasicGroup: (params, state) => fn('getBasicGroup', params, state),
  getBasicGroupFullInfo: (params, state) => fn('getBasicGroupFullInfo', params, state),
  getBlockedUsers: (params, state) => fn('getBlockedUsers', params, state),
  getCallbackQueryAnswer: (params, state) => fn('getCallbackQueryAnswer', params, state),
  getChat: (params, state) => fn('getChat', params, state),
  getChatAdministrators: (params, state) => fn('getChatAdministrators', params, state),
  getChatEventLog: (params, state) => fn('getChatEventLog', params, state),
  getChatHistory: (params, state) => fn('getChatHistory', params, state),
  getChatMember: (params, state) => fn('getChatMember', params, state),
  getChatMessageByDate: (params, state) => fn('getChatMessageByDate', params, state),
  getChatMessageCount: (params, state) => fn('getChatMessageCount', params, state),
  getChatPinnedMessage: (params, state) => fn('getChatPinnedMessage', params, state),
  getChatReportSpamState: (params, state) => fn('getChatReportSpamState', params, state),
  getChats: (params, state) => fn('getChats', params, state),
  getConnectedWebsites: (state) => fn('getConnectedWebsites', null, state),
  getContacts: (state) => fn('getContacts', null, state),
  getCountryCode: (state) => fn('getCountryCode', null, state),
  getCreatedPublicChats: (state) => fn('getCreatedPublicChats', null, state),
  getDeepLinkInfo: (params, state) => fn('getDeepLinkInfo', params, state),
  getFavoriteStickers: (state) => fn('getFavoriteStickers', null, state),
  getFile: (params, state) => fn('getFile', params, state),
  getFileExtension: (params, state) => fn('getFileExtension', params, state),
  getFileMimeType: (params, state) => fn('getFileMimeType', params, state),
  getGameHighScores: (params, state) => fn('getGameHighScores', params, state),
  getGroupsInCommon: (params, state) => fn('getGroupsInCommon', params, state),
  getImportedContactCount: (state) => fn('getImportedContactCount', null, state),
  getInlineGameHighScores: (params, state) => fn('getInlineGameHighScores', params, state),
  getInlineQueryResults: (params, state) => fn('getInlineQueryResults', params, state),
  getInstalledStickerSets: (params, state) => fn('getInstalledStickerSets', params, state),
  getInviteText: (state) => fn('getInviteText', null, state),
  getLanguagePackString: (params, state) => fn('getLanguagePackString', params, state),
  getLanguagePackStrings: (params, state) => fn('getLanguagePackStrings', params, state),
  getLocalizationTargetInfo: (params, state) => fn('getLocalizationTargetInfo', params, state),
  getMapThumbnailFile: (params, state) => fn('getMapThumbnailFile', params, state),
  getMe: (state) => fn('getMe', null, state),
  getMessage: (params, state) => fn('getMessage', params, state),
  getMessages: (params, state) => fn('getMessages', params, state),
  getNetworkStatistics: (params, state) => fn('getNetworkStatistics', params, state),
  getOption: (params, state) => fn('getOption', params, state),
  getPassportAuthorizationForm: (params, state) => fn('getPassportAuthorizationForm', params, state),
  getPassportElement: (params, state) => fn('getPassportElement', params, state),
  getPasswordState: (state) => fn('getPasswordState', null, state),
  getPaymentForm: (params, state) => fn('getPaymentForm', params, state),
  getPaymentReceipt: (params, state) => fn('getPaymentReceipt', params, state),
  getPreferredCountryLanguage: (params, state) => fn('getPreferredCountryLanguage', params, state),
  getProxies: (state) => fn('getProxies', null, state),
  getProxyLink: (params, state) => fn('getProxyLink', params, state),
  getPublicMessageLink: (params, state) => fn('getPublicMessageLink', params, state),
  getRecentInlineBots: (state) => fn('getRecentInlineBots', null, state),
  getRecentStickers: (params, state) => fn('getRecentStickers', params, state),
  getRecentlyVisitedTMeUrls: (params, state) => fn('getRecentlyVisitedTMeUrls', params, state),
  getRecoveryEmailAddress: (params, state) => fn('getRecoveryEmailAddress', params, state),
  getRemoteFile: (params, state) => fn('getRemoteFile', params, state),
  getRepliedMessage: (params, state) => fn('getRepliedMessage', params, state),
  getSavedAnimations: (state) => fn('getSavedAnimations', null, state),
  getSavedOrderInfo: (state) => fn('getSavedOrderInfo', null, state),
  getScopeNotificationSettings: (params, state) => fn('getScopeNotificationSettings', params, state),
  getSecretChat: (params, state) => fn('getSecretChat', params, state),
  getStickerEmojis: (params, state) => fn('getStickerEmojis', params, state),
  getStickerSet: (params, state) => fn('getStickerSet', params, state),
  getStickers: (params, state) => fn('getStickers', params, state),
  getStorageStatistics: (params, state) => fn('getStorageStatistics', params, state),
  getStorageStatisticsFast: (state) => fn('getStorageStatisticsFast', null, state),
  getSupergroup: (params, state) => fn('getSupergroup', params, state),
  getSupergroupFullInfo: (params, state) => fn('getSupergroupFullInfo', params, state),
  getSupergroupMembers: (params, state) => fn('getSupergroupMembers', params, state),
  getSupportUser: (state) => fn('getSupportUser', null, state),
  getTemporaryPasswordState: (state) => fn('getTemporaryPasswordState', null, state),
  getTextEntities: (params, state) => fn('getTextEntities', params, state),
  getTopChats: (params, state) => fn('getTopChats', params, state),
  getTrendingStickerSets: (state) => fn('getTrendingStickerSets', null, state),
  getUser: (params, state) => fn('getUser', params, state),
  getUserFullInfo: (params, state) => fn('getUserFullInfo', params, state),
  getUserPrivacySettingRules: (params, state) => fn('getUserPrivacySettingRules', params, state),
  getUserProfilePhotos: (params, state) => fn('getUserProfilePhotos', params, state),
  getWallpapers: (state) => fn('getWallpapers', null, state),
  getWebPageInstantView: (params, state) => fn('getWebPageInstantView', params, state),
  getWebPagePreview: (params, state) => fn('getWebPagePreview', params, state),
  importContacts: (params, state) => fn('importContacts', params, state),
  joinChat: (params, state) => fn('joinChat', params, state),
  joinChatByInviteLink: (params, state) => fn('joinChatByInviteLink', params, state),
  leaveChat: (params, state) => fn('leaveChat', params, state),
  logOut: (state) => fn('logOut', null, state),
  openChat: (params, state) => fn('openChat', params, state),
  openMessageContent: (params, state) => fn('openMessageContent', params, state),
  optimizeStorage: (params, state) => fn('optimizeStorage', params, state),
  parseTextEntities: (params, state) => fn('parseTextEntities', params, state),
  pinSupergroupMessage: (params, state) => fn('pinSupergroupMessage', params, state),
  pingProxy: (params, state) => fn('pingProxy', params, state),
  processDcUpdate: (params, state) => fn('processDcUpdate', params, state),
  readAllChatMentions: (params, state) => fn('readAllChatMentions', params, state),
  recoverAuthenticationPassword: (params, state) => fn('recoverAuthenticationPassword', params, state),
  recoverPassword: (params, state) => fn('recoverPassword', params, state),
  registerDevice: (params, state) => fn('registerDevice', params, state),
  removeContacts: (params, state) => fn('removeContacts', params, state),
  removeFavoriteSticker: (params, state) => fn('removeFavoriteSticker', params, state),
  removeProxy: (params, state) => fn('removeProxy', params, state),
  removeRecentHashtag: (params, state) => fn('removeRecentHashtag', params, state),
  removeRecentSticker: (params, state) => fn('removeRecentSticker', params, state),
  removeRecentlyFoundChat: (params, state) => fn('removeRecentlyFoundChat', params, state),
  removeSavedAnimation: (params, state) => fn('removeSavedAnimation', params, state),
  removeStickerFromSet: (params, state) => fn('removeStickerFromSet', params, state),
  removeTopChat: (params, state) => fn('removeTopChat', params, state),
  reorderInstalledStickerSets: (params, state) => fn('reorderInstalledStickerSets', params, state),
  reportChat: (params, state) => fn('reportChat', params, state),
  reportSupergroupSpam: (params, state) => fn('reportSupergroupSpam', params, state),
  requestAuthenticationPasswordRecovery: (state) => fn('requestAuthenticationPasswordRecovery', null, state),
  requestPasswordRecovery: (state) => fn('requestPasswordRecovery', null, state),
  resendAuthenticationCode: (state) => fn('resendAuthenticationCode', null, state),
  resendChangePhoneNumberCode: (state) => fn('resendChangePhoneNumberCode', null, state),
  resendEmailAddressVerificationCode: (state) => fn('resendEmailAddressVerificationCode', null, state),
  resendPhoneNumberConfirmationCode: (state) => fn('resendPhoneNumberConfirmationCode', null, state),
  resendPhoneNumberVerificationCode: (state) => fn('resendPhoneNumberVerificationCode', null, state),
  resetAllNotificationSettings: (state) => fn('resetAllNotificationSettings', null, state),
  resetNetworkStatistics: (state) => fn('resetNetworkStatistics', null, state),
  searchCallMessages: (params, state) => fn('searchCallMessages', params, state),
  searchChatMembers: (params, state) => fn('searchChatMembers', params, state),
  searchChatMessages: (params, state) => fn('searchChatMessages', params, state),
  searchChatRecentLocationMessages: (params, state) => fn('searchChatRecentLocationMessages', params, state),
  searchChats: (params, state) => fn('searchChats', params, state),
  searchChatsOnServer: (params, state) => fn('searchChatsOnServer', params, state),
  searchContacts: (params, state) => fn('searchContacts', params, state),
  searchHashtags: (params, state) => fn('searchHashtags', params, state),
  searchInstalledStickerSets: (params, state) => fn('searchInstalledStickerSets', params, state),
  searchMessages: (params, state) => fn('searchMessages', params, state),
  searchPublicChat: (params, state) => fn('searchPublicChat', params, state),
  searchPublicChats: (params, state) => fn('searchPublicChats', params, state),
  searchSecretMessages: (params, state) => fn('searchSecretMessages', params, state),
  searchStickerSet: (params, state) => fn('searchStickerSet', params, state),
  searchStickerSets: (params, state) => fn('searchStickerSets', params, state),
  searchStickers: (params, state) => fn('searchStickers', params, state),
  sendBotStartMessage: (params, state) => fn('sendBotStartMessage', params, state),
  sendCallDebugInformation: (params, state) => fn('sendCallDebugInformation', params, state),
  sendCallRating: (params, state) => fn('sendCallRating', params, state),
  sendChatAction: (params, state) => fn('sendChatAction', params, state),
  sendChatScreenshotTakenNotification: (params, state) => fn('sendChatScreenshotTakenNotification', params, state),
  sendChatSetTtlMessage: (params, state) => fn('sendChatSetTtlMessage', params, state),
  sendCustomRequest: (params, state) => fn('sendCustomRequest', params, state),
  sendEmailAddressVerificationCode: (params, state) => fn('sendEmailAddressVerificationCode', params, state),
  sendInlineQueryResultMessage: (params, state) => fn('sendInlineQueryResultMessage', params, state),
  sendMessage: (params, state) => fn('sendMessage', params, state),
  sendMessageAlbum: (params, state) => fn('sendMessageAlbum', params, state),
  sendPassportAuthorizationForm: (params, state) => fn('sendPassportAuthorizationForm', params, state),
  sendPaymentForm: (params, state) => fn('sendPaymentForm', params, state),
  sendPhoneNumberConfirmationCode: (params, state) => fn('sendPhoneNumberConfirmationCode', params, state),
  sendPhoneNumberVerificationCode: (params, state) => fn('sendPhoneNumberVerificationCode', params, state),
  setAccountTtl: (params, state) => fn('setAccountTtl', params, state),
  setAlarm: (params, state) => fn('setAlarm', params, state),
  setAuthenticationPhoneNumber: (params, state) => fn('setAuthenticationPhoneNumber', params, state),
  setBio: (params, state) => fn('setBio', params, state),
  setBotUpdatesStatus: (params, state) => fn('setBotUpdatesStatus', params, state),
  setChatClientData: (params, state) => fn('setChatClientData', params, state),
  setChatDraftMessage: (params, state) => fn('setChatDraftMessage', params, state),
  setChatMemberStatus: (params, state) => fn('setChatMemberStatus', params, state),
  setChatNotificationSettings: (params, state) => fn('setChatNotificationSettings', params, state),
  setChatPhoto: (params, state) => fn('setChatPhoto', params, state),
  setChatTitle: (params, state) => fn('setChatTitle', params, state),
  setCustomLanguagePack: (params, state) => fn('setCustomLanguagePack', params, state),
  setCustomLanguagePackString: (params, state) => fn('setCustomLanguagePackString', params, state),
  setDatabaseEncryptionKey: (params, state) => fn('setDatabaseEncryptionKey', params, state),
  setFileGenerationProgress: (params, state) => fn('setFileGenerationProgress', params, state),
  setGameScore: (params, state) => fn('setGameScore', params, state),
  setInlineGameScore: (params, state) => fn('setInlineGameScore', params, state),
  setName: (params, state) => fn('setName', params, state),
  setNetworkType: (params, state) => fn('setNetworkType', params, state),
  setOption: (params, state) => fn('setOption', params, state),
  setPassportElement: (params, state) => fn('setPassportElement', params, state),
  setPassportElementErrors: (params, state) => fn('setPassportElementErrors', params, state),
  setPassword: (params, state) => fn('setPassword', params, state),
  setPinnedChats: (params, state) => fn('setPinnedChats', params, state),
  setProfilePhoto: (params, state) => fn('setProfilePhoto', params, state),
  setRecoveryEmailAddress: (params, state) => fn('setRecoveryEmailAddress', params, state),
  setScopeNotificationSettings: (params, state) => fn('setScopeNotificationSettings', params, state),
  setStickerPositionInSet: (params, state) => fn('setStickerPositionInSet', params, state),
  setSupergroupDescription: (params, state) => fn('setSupergroupDescription', params, state),
  setSupergroupStickerSet: (params, state) => fn('setSupergroupStickerSet', params, state),
  setSupergroupUsername: (params, state) => fn('setSupergroupUsername', params, state),
  setTdlibParameters: (params, state) => fn('setTdlibParameters', params, state),
  setUserPrivacySettingRules: (params, state) => fn('setUserPrivacySettingRules', params, state),
  setUsername: (params, state) => fn('setUsername', params, state),
  terminateAllOtherSessions: (state) => fn('terminateAllOtherSessions', null, state),
  terminateSession: (params, state) => fn('terminateSession', params, state),
  testCallBytes: (params, state) => fn('testCallBytes', params, state),
  testCallEmpty: (state) => fn('testCallEmpty', null, state),
  testCallString: (params, state) => fn('testCallString', params, state),
  testCallVectorInt: (params, state) => fn('testCallVectorInt', params, state),
  testCallVectorIntObject: (params, state) => fn('testCallVectorIntObject', params, state),
  testCallVectorString: (params, state) => fn('testCallVectorString', params, state),
  testCallVectorStringObject: (params, state) => fn('testCallVectorStringObject', params, state),
  testGetDifference: (state) => fn('testGetDifference', null, state),
  testNetwork: (state) => fn('testNetwork', null, state),
  testSquareInt: (params, state) => fn('testSquareInt', params, state),
  testUseError: (state) => fn('testUseError', null, state),
  testUseUpdate: (state) => fn('testUseUpdate', null, state),
  toggleBasicGroupAdministrators: (params, state) => fn('toggleBasicGroupAdministrators', params, state),
  toggleChatDefaultDisableNotification: (params, state) => fn('toggleChatDefaultDisableNotification', params, state),
  toggleChatIsMarkedAsUnread: (params, state) => fn('toggleChatIsMarkedAsUnread', params, state),
  toggleChatIsPinned: (params, state) => fn('toggleChatIsPinned', params, state),
  toggleSupergroupInvites: (params, state) => fn('toggleSupergroupInvites', params, state),
  toggleSupergroupIsAllHistoryAvailable: (params, state) => fn('toggleSupergroupIsAllHistoryAvailable', params, state),
  toggleSupergroupSignMessages: (params, state) => fn('toggleSupergroupSignMessages', params, state),
  unblockUser: (params, state) => fn('unblockUser', params, state),
  unpinSupergroupMessage: (params, state) => fn('unpinSupergroupMessage', params, state),
  upgradeBasicGroupChatToSupergroupChat: (params, state) => fn('upgradeBasicGroupChatToSupergroupChat', params, state),
  uploadFile: (params, state) => fn('uploadFile', params, state),
  uploadStickerFile: (params, state) => fn('uploadStickerFile', params, state),
  validateOrderInfo: (params, state) => fn('validateOrderInfo', params, state),
  viewMessages: (params, state) => fn('viewMessages', params, state),
  viewTrendingStickerSets: (params, state) => fn('viewTrendingStickerSets', params, state)
})
