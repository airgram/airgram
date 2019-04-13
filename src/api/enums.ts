export enum ACCOUNT_TTL {
  accountTtl = 'accountTtl'
}

export enum ADDRESS {
  address = 'address'
}

export enum ANIMATION {
  animation = 'animation'
}

export enum ANIMATIONS {
  animations = 'animations'
}

export enum AUDIO {
  audio = 'audio'
}

export enum AUTHENTICATION_CODE_INFO {
  authenticationCodeInfo = 'authenticationCodeInfo'
}

export enum AUTHENTICATION_CODE_TYPE {
  authenticationCodeTypeTelegramMessage = 'authenticationCodeTypeTelegramMessage',
  authenticationCodeTypeSms = 'authenticationCodeTypeSms',
  authenticationCodeTypeCall = 'authenticationCodeTypeCall',
  authenticationCodeTypeFlashCall = 'authenticationCodeTypeFlashCall'
}

export enum AUTHORIZATION_STATE {
  authorizationStateWaitTdlibParameters = 'authorizationStateWaitTdlibParameters',
  authorizationStateWaitEncryptionKey = 'authorizationStateWaitEncryptionKey',
  authorizationStateWaitPhoneNumber = 'authorizationStateWaitPhoneNumber',
  authorizationStateWaitCode = 'authorizationStateWaitCode',
  authorizationStateWaitPassword = 'authorizationStateWaitPassword',
  authorizationStateReady = 'authorizationStateReady',
  authorizationStateLoggingOut = 'authorizationStateLoggingOut',
  authorizationStateClosing = 'authorizationStateClosing',
  authorizationStateClosed = 'authorizationStateClosed'
}

export enum BASIC_GROUP {
  basicGroup = 'basicGroup'
}

export enum BASIC_GROUP_FULL_INFO {
  basicGroupFullInfo = 'basicGroupFullInfo'
}

export enum BOT_COMMAND {
  botCommand = 'botCommand'
}

export enum BOT_INFO {
  botInfo = 'botInfo'
}

export enum CALL {
  call = 'call'
}

export enum CALL_CONNECTION {
  callConnection = 'callConnection'
}

export enum CALL_DISCARD_REASON {
  callDiscardReasonEmpty = 'callDiscardReasonEmpty',
  callDiscardReasonMissed = 'callDiscardReasonMissed',
  callDiscardReasonDeclined = 'callDiscardReasonDeclined',
  callDiscardReasonDisconnected = 'callDiscardReasonDisconnected',
  callDiscardReasonHungUp = 'callDiscardReasonHungUp'
}

export enum CALL_ID {
  callId = 'callId'
}

export enum CALL_PROTOCOL {
  callProtocol = 'callProtocol'
}

export enum CALL_STATE {
  callStatePending = 'callStatePending',
  callStateExchangingKeys = 'callStateExchangingKeys',
  callStateReady = 'callStateReady',
  callStateHangingUp = 'callStateHangingUp',
  callStateDiscarded = 'callStateDiscarded',
  callStateError = 'callStateError'
}

export enum CALLBACK_QUERY_ANSWER {
  callbackQueryAnswer = 'callbackQueryAnswer'
}

export enum CALLBACK_QUERY_PAYLOAD {
  callbackQueryPayloadData = 'callbackQueryPayloadData',
  callbackQueryPayloadGame = 'callbackQueryPayloadGame'
}

export enum CHAT {
  chat = 'chat'
}

export enum CHAT_ACTION {
  chatActionTyping = 'chatActionTyping',
  chatActionRecordingVideo = 'chatActionRecordingVideo',
  chatActionUploadingVideo = 'chatActionUploadingVideo',
  chatActionRecordingVoiceNote = 'chatActionRecordingVoiceNote',
  chatActionUploadingVoiceNote = 'chatActionUploadingVoiceNote',
  chatActionUploadingPhoto = 'chatActionUploadingPhoto',
  chatActionUploadingDocument = 'chatActionUploadingDocument',
  chatActionChoosingLocation = 'chatActionChoosingLocation',
  chatActionChoosingContact = 'chatActionChoosingContact',
  chatActionStartPlayingGame = 'chatActionStartPlayingGame',
  chatActionRecordingVideoNote = 'chatActionRecordingVideoNote',
  chatActionUploadingVideoNote = 'chatActionUploadingVideoNote',
  chatActionCancel = 'chatActionCancel'
}

export enum CHAT_EVENT {
  chatEvent = 'chatEvent'
}

export enum CHAT_EVENT_ACTION {
  chatEventMessageEdited = 'chatEventMessageEdited',
  chatEventMessageDeleted = 'chatEventMessageDeleted',
  chatEventMessagePinned = 'chatEventMessagePinned',
  chatEventMessageUnpinned = 'chatEventMessageUnpinned',
  chatEventMemberJoined = 'chatEventMemberJoined',
  chatEventMemberLeft = 'chatEventMemberLeft',
  chatEventMemberInvited = 'chatEventMemberInvited',
  chatEventMemberPromoted = 'chatEventMemberPromoted',
  chatEventMemberRestricted = 'chatEventMemberRestricted',
  chatEventTitleChanged = 'chatEventTitleChanged',
  chatEventDescriptionChanged = 'chatEventDescriptionChanged',
  chatEventUsernameChanged = 'chatEventUsernameChanged',
  chatEventPhotoChanged = 'chatEventPhotoChanged',
  chatEventInvitesToggled = 'chatEventInvitesToggled',
  chatEventSignMessagesToggled = 'chatEventSignMessagesToggled',
  chatEventStickerSetChanged = 'chatEventStickerSetChanged',
  chatEventIsAllHistoryAvailableToggled = 'chatEventIsAllHistoryAvailableToggled'
}

export enum CHAT_EVENT_LOG_FILTERS {
  chatEventLogFilters = 'chatEventLogFilters'
}

export enum CHAT_EVENTS {
  chatEvents = 'chatEvents'
}

export enum CHAT_INVITE_LINK {
  chatInviteLink = 'chatInviteLink'
}

export enum CHAT_INVITE_LINK_INFO {
  chatInviteLinkInfo = 'chatInviteLinkInfo'
}

export enum CHAT_MEMBER {
  chatMember = 'chatMember'
}

export enum CHAT_MEMBER_STATUS {
  chatMemberStatusCreator = 'chatMemberStatusCreator',
  chatMemberStatusAdministrator = 'chatMemberStatusAdministrator',
  chatMemberStatusMember = 'chatMemberStatusMember',
  chatMemberStatusRestricted = 'chatMemberStatusRestricted',
  chatMemberStatusLeft = 'chatMemberStatusLeft',
  chatMemberStatusBanned = 'chatMemberStatusBanned'
}

export enum CHAT_MEMBERS {
  chatMembers = 'chatMembers'
}

export enum CHAT_MEMBERS_FILTER {
  chatMembersFilterAdministrators = 'chatMembersFilterAdministrators',
  chatMembersFilterMembers = 'chatMembersFilterMembers',
  chatMembersFilterRestricted = 'chatMembersFilterRestricted',
  chatMembersFilterBanned = 'chatMembersFilterBanned',
  chatMembersFilterBots = 'chatMembersFilterBots'
}

export enum CHAT_NOTIFICATION_SETTINGS {
  chatNotificationSettings = 'chatNotificationSettings'
}

export enum CHAT_PHOTO {
  chatPhoto = 'chatPhoto'
}

export enum CHAT_REPORT_REASON {
  chatReportReasonSpam = 'chatReportReasonSpam',
  chatReportReasonViolence = 'chatReportReasonViolence',
  chatReportReasonPornography = 'chatReportReasonPornography',
  chatReportReasonCopyright = 'chatReportReasonCopyright',
  chatReportReasonCustom = 'chatReportReasonCustom'
}

export enum CHAT_REPORT_SPAM_STATE {
  chatReportSpamState = 'chatReportSpamState'
}

export enum CHAT_TYPE {
  chatTypePrivate = 'chatTypePrivate',
  chatTypeBasicGroup = 'chatTypeBasicGroup',
  chatTypeSupergroup = 'chatTypeSupergroup',
  chatTypeSecret = 'chatTypeSecret'
}

export enum CHATS {
  chats = 'chats'
}

export enum CHECK_CHAT_USERNAME_RESULT {
  checkChatUsernameResultOk = 'checkChatUsernameResultOk',
  checkChatUsernameResultUsernameInvalid = 'checkChatUsernameResultUsernameInvalid',
  checkChatUsernameResultUsernameOccupied = 'checkChatUsernameResultUsernameOccupied',
  checkChatUsernameResultPublicChatsTooMuch = 'checkChatUsernameResultPublicChatsTooMuch',
  checkChatUsernameResultPublicGroupsUnavailable = 'checkChatUsernameResultPublicGroupsUnavailable'
}

export enum CONNECTED_WEBSITE {
  connectedWebsite = 'connectedWebsite'
}

export enum CONNECTED_WEBSITES {
  connectedWebsites = 'connectedWebsites'
}

export enum CONNECTION_STATE {
  connectionStateWaitingForNetwork = 'connectionStateWaitingForNetwork',
  connectionStateConnectingToProxy = 'connectionStateConnectingToProxy',
  connectionStateConnecting = 'connectionStateConnecting',
  connectionStateUpdating = 'connectionStateUpdating',
  connectionStateReady = 'connectionStateReady'
}

export enum CONTACT {
  contact = 'contact'
}

export enum COUNT {
  count = 'count'
}

export enum CUSTOM_REQUEST_RESULT {
  customRequestResult = 'customRequestResult'
}

export enum DATE {
  date = 'date'
}

export enum DATED_FILE {
  datedFile = 'datedFile'
}

export enum DEEP_LINK_INFO {
  deepLinkInfo = 'deepLinkInfo'
}

export enum DEVICE_TOKEN {
  deviceTokenGoogleCloudMessaging = 'deviceTokenGoogleCloudMessaging',
  deviceTokenApplePush = 'deviceTokenApplePush',
  deviceTokenApplePushVoIP = 'deviceTokenApplePushVoIP',
  deviceTokenWindowsPush = 'deviceTokenWindowsPush',
  deviceTokenMicrosoftPush = 'deviceTokenMicrosoftPush',
  deviceTokenMicrosoftPushVoIP = 'deviceTokenMicrosoftPushVoIP',
  deviceTokenWebPush = 'deviceTokenWebPush',
  deviceTokenSimplePush = 'deviceTokenSimplePush',
  deviceTokenUbuntuPush = 'deviceTokenUbuntuPush',
  deviceTokenBlackBerryPush = 'deviceTokenBlackBerryPush',
  deviceTokenTizenPush = 'deviceTokenTizenPush'
}

export enum DOCUMENT {
  document = 'document'
}

export enum DRAFT_MESSAGE {
  draftMessage = 'draftMessage'
}

export enum EMAIL_ADDRESS_AUTHENTICATION_CODE_INFO {
  emailAddressAuthenticationCodeInfo = 'emailAddressAuthenticationCodeInfo'
}

export enum ENCRYPTED_CREDENTIALS {
  encryptedCredentials = 'encryptedCredentials'
}

export enum ENCRYPTED_PASSPORT_ELEMENT {
  encryptedPassportElement = 'encryptedPassportElement'
}

export enum ERROR {
  error = 'error'
}

export enum FILE {
  file = 'file'
}

export enum FILE_TYPE {
  fileTypeNone = 'fileTypeNone',
  fileTypeAnimation = 'fileTypeAnimation',
  fileTypeAudio = 'fileTypeAudio',
  fileTypeDocument = 'fileTypeDocument',
  fileTypePhoto = 'fileTypePhoto',
  fileTypeProfilePhoto = 'fileTypeProfilePhoto',
  fileTypeSecret = 'fileTypeSecret',
  fileTypeSecretThumbnail = 'fileTypeSecretThumbnail',
  fileTypeSecure = 'fileTypeSecure',
  fileTypeSticker = 'fileTypeSticker',
  fileTypeThumbnail = 'fileTypeThumbnail',
  fileTypeUnknown = 'fileTypeUnknown',
  fileTypeVideo = 'fileTypeVideo',
  fileTypeVideoNote = 'fileTypeVideoNote',
  fileTypeVoiceNote = 'fileTypeVoiceNote',
  fileTypeWallpaper = 'fileTypeWallpaper'
}

export enum FORMATTED_TEXT {
  formattedText = 'formattedText'
}

export enum FOUND_MESSAGES {
  foundMessages = 'foundMessages'
}

export enum GAME {
  game = 'game'
}

export enum GAME_HIGH_SCORE {
  gameHighScore = 'gameHighScore'
}

export enum GAME_HIGH_SCORES {
  gameHighScores = 'gameHighScores'
}

export enum HASHTAGS {
  hashtags = 'hashtags'
}

export enum IDENTITY_DOCUMENT {
  identityDocument = 'identityDocument'
}

export enum IMPORTED_CONTACTS {
  importedContacts = 'importedContacts'
}

export enum INLINE_KEYBOARD_BUTTON {
  inlineKeyboardButton = 'inlineKeyboardButton'
}

export enum INLINE_KEYBOARD_BUTTON_TYPE {
  inlineKeyboardButtonTypeUrl = 'inlineKeyboardButtonTypeUrl',
  inlineKeyboardButtonTypeCallback = 'inlineKeyboardButtonTypeCallback',
  inlineKeyboardButtonTypeCallbackGame = 'inlineKeyboardButtonTypeCallbackGame',
  inlineKeyboardButtonTypeSwitchInline = 'inlineKeyboardButtonTypeSwitchInline',
  inlineKeyboardButtonTypeBuy = 'inlineKeyboardButtonTypeBuy'
}

export enum INLINE_QUERY_RESULT {
  inlineQueryResultArticle = 'inlineQueryResultArticle',
  inlineQueryResultContact = 'inlineQueryResultContact',
  inlineQueryResultLocation = 'inlineQueryResultLocation',
  inlineQueryResultVenue = 'inlineQueryResultVenue',
  inlineQueryResultGame = 'inlineQueryResultGame',
  inlineQueryResultAnimation = 'inlineQueryResultAnimation',
  inlineQueryResultAudio = 'inlineQueryResultAudio',
  inlineQueryResultDocument = 'inlineQueryResultDocument',
  inlineQueryResultPhoto = 'inlineQueryResultPhoto',
  inlineQueryResultSticker = 'inlineQueryResultSticker',
  inlineQueryResultVideo = 'inlineQueryResultVideo',
  inlineQueryResultVoiceNote = 'inlineQueryResultVoiceNote'
}

export enum INLINE_QUERY_RESULTS {
  inlineQueryResults = 'inlineQueryResults'
}

export enum INPUT_CREDENTIALS {
  inputCredentialsSaved = 'inputCredentialsSaved',
  inputCredentialsNew = 'inputCredentialsNew',
  inputCredentialsAndroidPay = 'inputCredentialsAndroidPay',
  inputCredentialsApplePay = 'inputCredentialsApplePay'
}

export enum INPUT_FILE {
  inputFileId = 'inputFileId',
  inputFileRemote = 'inputFileRemote',
  inputFileLocal = 'inputFileLocal',
  inputFileGenerated = 'inputFileGenerated'
}

export enum INPUT_IDENTITY_DOCUMENT {
  inputIdentityDocument = 'inputIdentityDocument'
}

export enum INPUT_INLINE_QUERY_RESULT {
  inputInlineQueryResultAnimatedGif = 'inputInlineQueryResultAnimatedGif',
  inputInlineQueryResultAnimatedMpeg4 = 'inputInlineQueryResultAnimatedMpeg4',
  inputInlineQueryResultArticle = 'inputInlineQueryResultArticle',
  inputInlineQueryResultAudio = 'inputInlineQueryResultAudio',
  inputInlineQueryResultContact = 'inputInlineQueryResultContact',
  inputInlineQueryResultDocument = 'inputInlineQueryResultDocument',
  inputInlineQueryResultGame = 'inputInlineQueryResultGame',
  inputInlineQueryResultLocation = 'inputInlineQueryResultLocation',
  inputInlineQueryResultPhoto = 'inputInlineQueryResultPhoto',
  inputInlineQueryResultSticker = 'inputInlineQueryResultSticker',
  inputInlineQueryResultVenue = 'inputInlineQueryResultVenue',
  inputInlineQueryResultVideo = 'inputInlineQueryResultVideo',
  inputInlineQueryResultVoiceNote = 'inputInlineQueryResultVoiceNote'
}

export enum INPUT_MESSAGE_CONTENT {
  inputMessageText = 'inputMessageText',
  inputMessageAnimation = 'inputMessageAnimation',
  inputMessageAudio = 'inputMessageAudio',
  inputMessageDocument = 'inputMessageDocument',
  inputMessagePhoto = 'inputMessagePhoto',
  inputMessageSticker = 'inputMessageSticker',
  inputMessageVideo = 'inputMessageVideo',
  inputMessageVideoNote = 'inputMessageVideoNote',
  inputMessageVoiceNote = 'inputMessageVoiceNote',
  inputMessageLocation = 'inputMessageLocation',
  inputMessageVenue = 'inputMessageVenue',
  inputMessageContact = 'inputMessageContact',
  inputMessageGame = 'inputMessageGame',
  inputMessageInvoice = 'inputMessageInvoice',
  inputMessageForwarded = 'inputMessageForwarded'
}

export enum INPUT_PASSPORT_ELEMENT {
  inputPassportElementPersonalDetails = 'inputPassportElementPersonalDetails',
  inputPassportElementPassport = 'inputPassportElementPassport',
  inputPassportElementDriverLicense = 'inputPassportElementDriverLicense',
  inputPassportElementIdentityCard = 'inputPassportElementIdentityCard',
  inputPassportElementInternalPassport = 'inputPassportElementInternalPassport',
  inputPassportElementAddress = 'inputPassportElementAddress',
  inputPassportElementUtilityBill = 'inputPassportElementUtilityBill',
  inputPassportElementBankStatement = 'inputPassportElementBankStatement',
  inputPassportElementRentalAgreement = 'inputPassportElementRentalAgreement',
  inputPassportElementPassportRegistration = 'inputPassportElementPassportRegistration',
  inputPassportElementTemporaryRegistration = 'inputPassportElementTemporaryRegistration',
  inputPassportElementPhoneNumber = 'inputPassportElementPhoneNumber',
  inputPassportElementEmailAddress = 'inputPassportElementEmailAddress'
}

export enum INPUT_PASSPORT_ELEMENT_ERROR {
  inputPassportElementError = 'inputPassportElementError'
}

export enum INPUT_PASSPORT_ELEMENT_ERROR_SOURCE {
  inputPassportElementErrorSourceUnspecified = 'inputPassportElementErrorSourceUnspecified',
  inputPassportElementErrorSourceDataField = 'inputPassportElementErrorSourceDataField',
  inputPassportElementErrorSourceFrontSide = 'inputPassportElementErrorSourceFrontSide',
  inputPassportElementErrorSourceReverseSide = 'inputPassportElementErrorSourceReverseSide',
  inputPassportElementErrorSourceSelfie = 'inputPassportElementErrorSourceSelfie',
  inputPassportElementErrorSourceTranslationFile = 'inputPassportElementErrorSourceTranslationFile',
  inputPassportElementErrorSourceTranslationFiles = 'inputPassportElementErrorSourceTranslationFiles',
  inputPassportElementErrorSourceFile = 'inputPassportElementErrorSourceFile',
  inputPassportElementErrorSourceFiles = 'inputPassportElementErrorSourceFiles'
}

export enum INPUT_PERSONAL_DOCUMENT {
  inputPersonalDocument = 'inputPersonalDocument'
}

export enum INPUT_STICKER {
  inputSticker = 'inputSticker'
}

export enum INPUT_THUMBNAIL {
  inputThumbnail = 'inputThumbnail'
}

export enum INVOICE {
  invoice = 'invoice'
}

export enum KEYBOARD_BUTTON {
  keyboardButton = 'keyboardButton'
}

export enum KEYBOARD_BUTTON_TYPE {
  keyboardButtonTypeText = 'keyboardButtonTypeText',
  keyboardButtonTypeRequestPhoneNumber = 'keyboardButtonTypeRequestPhoneNumber',
  keyboardButtonTypeRequestLocation = 'keyboardButtonTypeRequestLocation'
}

export enum LABELED_PRICE_PART {
  labeledPricePart = 'labeledPricePart'
}

export enum LANGUAGE_PACK_INFO {
  languagePackInfo = 'languagePackInfo'
}

export enum LANGUAGE_PACK_STRING {
  languagePackString = 'languagePackString'
}

export enum LANGUAGE_PACK_STRING_VALUE {
  languagePackStringValueOrdinary = 'languagePackStringValueOrdinary',
  languagePackStringValuePluralized = 'languagePackStringValuePluralized',
  languagePackStringValueDeleted = 'languagePackStringValueDeleted'
}

export enum LANGUAGE_PACK_STRINGS {
  languagePackStrings = 'languagePackStrings'
}

export enum LINK_STATE {
  linkStateNone = 'linkStateNone',
  linkStateKnowsPhoneNumber = 'linkStateKnowsPhoneNumber',
  linkStateIsContact = 'linkStateIsContact'
}

export enum LOCAL_FILE {
  localFile = 'localFile'
}

export enum LOCALIZATION_TARGET_INFO {
  localizationTargetInfo = 'localizationTargetInfo'
}

export enum LOCATION {
  location = 'location'
}

export enum MASK_POINT {
  maskPointForehead = 'maskPointForehead',
  maskPointEyes = 'maskPointEyes',
  maskPointMouth = 'maskPointMouth',
  maskPointChin = 'maskPointChin'
}

export enum MASK_POSITION {
  maskPosition = 'maskPosition'
}

export enum MESSAGE {
  message = 'message'
}

export enum MESSAGE_CONTENT {
  messageText = 'messageText',
  messageAnimation = 'messageAnimation',
  messageAudio = 'messageAudio',
  messageDocument = 'messageDocument',
  messagePhoto = 'messagePhoto',
  messageExpiredPhoto = 'messageExpiredPhoto',
  messageSticker = 'messageSticker',
  messageVideo = 'messageVideo',
  messageExpiredVideo = 'messageExpiredVideo',
  messageVideoNote = 'messageVideoNote',
  messageVoiceNote = 'messageVoiceNote',
  messageLocation = 'messageLocation',
  messageVenue = 'messageVenue',
  messageContact = 'messageContact',
  messageGame = 'messageGame',
  messageInvoice = 'messageInvoice',
  messageCall = 'messageCall',
  messageBasicGroupChatCreate = 'messageBasicGroupChatCreate',
  messageSupergroupChatCreate = 'messageSupergroupChatCreate',
  messageChatChangeTitle = 'messageChatChangeTitle',
  messageChatChangePhoto = 'messageChatChangePhoto',
  messageChatDeletePhoto = 'messageChatDeletePhoto',
  messageChatAddMembers = 'messageChatAddMembers',
  messageChatJoinByLink = 'messageChatJoinByLink',
  messageChatDeleteMember = 'messageChatDeleteMember',
  messageChatUpgradeTo = 'messageChatUpgradeTo',
  messageChatUpgradeFrom = 'messageChatUpgradeFrom',
  messagePinMessage = 'messagePinMessage',
  messageScreenshotTaken = 'messageScreenshotTaken',
  messageChatSetTtl = 'messageChatSetTtl',
  messageCustomServiceAction = 'messageCustomServiceAction',
  messageGameScore = 'messageGameScore',
  messagePaymentSuccessful = 'messagePaymentSuccessful',
  messagePaymentSuccessfulBot = 'messagePaymentSuccessfulBot',
  messageContactRegistered = 'messageContactRegistered',
  messageWebsiteConnected = 'messageWebsiteConnected',
  messagePassportDataSent = 'messagePassportDataSent',
  messagePassportDataReceived = 'messagePassportDataReceived',
  messageUnsupported = 'messageUnsupported'
}

export enum MESSAGE_FORWARD_INFO {
  messageForwardedFromUser = 'messageForwardedFromUser',
  messageForwardedPost = 'messageForwardedPost'
}

export enum MESSAGE_SENDING_STATE {
  messageSendingStatePending = 'messageSendingStatePending',
  messageSendingStateFailed = 'messageSendingStateFailed'
}

export enum MESSAGES {
  messages = 'messages'
}

export enum NETWORK_STATISTICS {
  networkStatistics = 'networkStatistics'
}

export enum NETWORK_STATISTICS_ENTRY {
  networkStatisticsEntryFile = 'networkStatisticsEntryFile',
  networkStatisticsEntryCall = 'networkStatisticsEntryCall'
}

export enum NETWORK_TYPE {
  networkTypeNone = 'networkTypeNone',
  networkTypeMobile = 'networkTypeMobile',
  networkTypeMobileRoaming = 'networkTypeMobileRoaming',
  networkTypeWiFi = 'networkTypeWiFi',
  networkTypeOther = 'networkTypeOther'
}

export enum NOTIFICATION_SETTINGS_SCOPE {
  notificationSettingsScopePrivateChats = 'notificationSettingsScopePrivateChats',
  notificationSettingsScopeGroupChats = 'notificationSettingsScopeGroupChats'
}

export enum OK {
  ok = 'ok'
}

export enum OPTION_VALUE {
  optionValueBoolean = 'optionValueBoolean',
  optionValueEmpty = 'optionValueEmpty',
  optionValueInteger = 'optionValueInteger',
  optionValueString = 'optionValueString'
}

export enum ORDER_INFO {
  orderInfo = 'orderInfo'
}

export enum PAGE_BLOCK {
  pageBlockTitle = 'pageBlockTitle',
  pageBlockSubtitle = 'pageBlockSubtitle',
  pageBlockAuthorDate = 'pageBlockAuthorDate',
  pageBlockHeader = 'pageBlockHeader',
  pageBlockSubheader = 'pageBlockSubheader',
  pageBlockParagraph = 'pageBlockParagraph',
  pageBlockPreformatted = 'pageBlockPreformatted',
  pageBlockFooter = 'pageBlockFooter',
  pageBlockDivider = 'pageBlockDivider',
  pageBlockAnchor = 'pageBlockAnchor',
  pageBlockList = 'pageBlockList',
  pageBlockBlockQuote = 'pageBlockBlockQuote',
  pageBlockPullQuote = 'pageBlockPullQuote',
  pageBlockAnimation = 'pageBlockAnimation',
  pageBlockAudio = 'pageBlockAudio',
  pageBlockPhoto = 'pageBlockPhoto',
  pageBlockVideo = 'pageBlockVideo',
  pageBlockCover = 'pageBlockCover',
  pageBlockEmbedded = 'pageBlockEmbedded',
  pageBlockEmbeddedPost = 'pageBlockEmbeddedPost',
  pageBlockCollage = 'pageBlockCollage',
  pageBlockSlideshow = 'pageBlockSlideshow',
  pageBlockChatLink = 'pageBlockChatLink'
}

export enum PASSPORT_AUTHORIZATION_FORM {
  passportAuthorizationForm = 'passportAuthorizationForm'
}

export enum PASSPORT_ELEMENT {
  passportElementPersonalDetails = 'passportElementPersonalDetails',
  passportElementPassport = 'passportElementPassport',
  passportElementDriverLicense = 'passportElementDriverLicense',
  passportElementIdentityCard = 'passportElementIdentityCard',
  passportElementInternalPassport = 'passportElementInternalPassport',
  passportElementAddress = 'passportElementAddress',
  passportElementUtilityBill = 'passportElementUtilityBill',
  passportElementBankStatement = 'passportElementBankStatement',
  passportElementRentalAgreement = 'passportElementRentalAgreement',
  passportElementPassportRegistration = 'passportElementPassportRegistration',
  passportElementTemporaryRegistration = 'passportElementTemporaryRegistration',
  passportElementPhoneNumber = 'passportElementPhoneNumber',
  passportElementEmailAddress = 'passportElementEmailAddress'
}

export enum PASSPORT_ELEMENT_ERROR {
  passportElementError = 'passportElementError'
}

export enum PASSPORT_ELEMENT_ERROR_SOURCE {
  passportElementErrorSourceUnspecified = 'passportElementErrorSourceUnspecified',
  passportElementErrorSourceDataField = 'passportElementErrorSourceDataField',
  passportElementErrorSourceFrontSide = 'passportElementErrorSourceFrontSide',
  passportElementErrorSourceReverseSide = 'passportElementErrorSourceReverseSide',
  passportElementErrorSourceSelfie = 'passportElementErrorSourceSelfie',
  passportElementErrorSourceTranslationFile = 'passportElementErrorSourceTranslationFile',
  passportElementErrorSourceTranslationFiles = 'passportElementErrorSourceTranslationFiles',
  passportElementErrorSourceFile = 'passportElementErrorSourceFile',
  passportElementErrorSourceFiles = 'passportElementErrorSourceFiles'
}

export enum PASSPORT_ELEMENT_TYPE {
  passportElementTypePersonalDetails = 'passportElementTypePersonalDetails',
  passportElementTypePassport = 'passportElementTypePassport',
  passportElementTypeDriverLicense = 'passportElementTypeDriverLicense',
  passportElementTypeIdentityCard = 'passportElementTypeIdentityCard',
  passportElementTypeInternalPassport = 'passportElementTypeInternalPassport',
  passportElementTypeAddress = 'passportElementTypeAddress',
  passportElementTypeUtilityBill = 'passportElementTypeUtilityBill',
  passportElementTypeBankStatement = 'passportElementTypeBankStatement',
  passportElementTypeRentalAgreement = 'passportElementTypeRentalAgreement',
  passportElementTypePassportRegistration = 'passportElementTypePassportRegistration',
  passportElementTypeTemporaryRegistration = 'passportElementTypeTemporaryRegistration',
  passportElementTypePhoneNumber = 'passportElementTypePhoneNumber',
  passportElementTypeEmailAddress = 'passportElementTypeEmailAddress'
}

export enum PASSPORT_ELEMENTS {
  passportElements = 'passportElements'
}

export enum PASSPORT_REQUIRED_ELEMENT {
  passportRequiredElement = 'passportRequiredElement'
}

export enum PASSPORT_SUITABLE_ELEMENT {
  passportSuitableElement = 'passportSuitableElement'
}

export enum PASSWORD_STATE {
  passwordState = 'passwordState'
}

export enum PAYMENT_FORM {
  paymentForm = 'paymentForm'
}

export enum PAYMENT_RECEIPT {
  paymentReceipt = 'paymentReceipt'
}

export enum PAYMENT_RESULT {
  paymentResult = 'paymentResult'
}

export enum PAYMENTS_PROVIDER_STRIPE {
  paymentsProviderStripe = 'paymentsProviderStripe'
}

export enum PERSONAL_DETAILS {
  personalDetails = 'personalDetails'
}

export enum PERSONAL_DOCUMENT {
  personalDocument = 'personalDocument'
}

export enum PHOTO {
  photo = 'photo'
}

export enum PHOTO_SIZE {
  photoSize = 'photoSize'
}

export enum PROFILE_PHOTO {
  profilePhoto = 'profilePhoto'
}

export enum PROXIES {
  proxies = 'proxies'
}

export enum PROXY {
  proxy = 'proxy'
}

export enum PROXY_TYPE {
  proxyTypeSocks5 = 'proxyTypeSocks5',
  proxyTypeHttp = 'proxyTypeHttp',
  proxyTypeMtproto = 'proxyTypeMtproto'
}

export enum PUBLIC_MESSAGE_LINK {
  publicMessageLink = 'publicMessageLink'
}

export enum RECOVERY_EMAIL_ADDRESS {
  recoveryEmailAddress = 'recoveryEmailAddress'
}

export enum REMOTE_FILE {
  remoteFile = 'remoteFile'
}

export enum REPLY_MARKUP {
  replyMarkupRemoveKeyboard = 'replyMarkupRemoveKeyboard',
  replyMarkupForceReply = 'replyMarkupForceReply',
  replyMarkupShowKeyboard = 'replyMarkupShowKeyboard',
  replyMarkupInlineKeyboard = 'replyMarkupInlineKeyboard'
}

export enum RICH_TEXT {
  richTextPlain = 'richTextPlain',
  richTextBold = 'richTextBold',
  richTextItalic = 'richTextItalic',
  richTextUnderline = 'richTextUnderline',
  richTextStrikethrough = 'richTextStrikethrough',
  richTextFixed = 'richTextFixed',
  richTextUrl = 'richTextUrl',
  richTextEmailAddress = 'richTextEmailAddress',
  richTexts = 'richTexts'
}

export enum SAVED_CREDENTIALS {
  savedCredentials = 'savedCredentials'
}

export enum SCOPE_NOTIFICATION_SETTINGS {
  scopeNotificationSettings = 'scopeNotificationSettings'
}

export enum SEARCH_MESSAGES_FILTER {
  searchMessagesFilterEmpty = 'searchMessagesFilterEmpty',
  searchMessagesFilterAnimation = 'searchMessagesFilterAnimation',
  searchMessagesFilterAudio = 'searchMessagesFilterAudio',
  searchMessagesFilterDocument = 'searchMessagesFilterDocument',
  searchMessagesFilterPhoto = 'searchMessagesFilterPhoto',
  searchMessagesFilterVideo = 'searchMessagesFilterVideo',
  searchMessagesFilterVoiceNote = 'searchMessagesFilterVoiceNote',
  searchMessagesFilterPhotoAndVideo = 'searchMessagesFilterPhotoAndVideo',
  searchMessagesFilterUrl = 'searchMessagesFilterUrl',
  searchMessagesFilterChatPhoto = 'searchMessagesFilterChatPhoto',
  searchMessagesFilterCall = 'searchMessagesFilterCall',
  searchMessagesFilterMissedCall = 'searchMessagesFilterMissedCall',
  searchMessagesFilterVideoNote = 'searchMessagesFilterVideoNote',
  searchMessagesFilterVoiceAndVideoNote = 'searchMessagesFilterVoiceAndVideoNote',
  searchMessagesFilterMention = 'searchMessagesFilterMention',
  searchMessagesFilterUnreadMention = 'searchMessagesFilterUnreadMention'
}

export enum SECONDS {
  seconds = 'seconds'
}

export enum SECRET_CHAT {
  secretChat = 'secretChat'
}

export enum SECRET_CHAT_STATE {
  secretChatStatePending = 'secretChatStatePending',
  secretChatStateReady = 'secretChatStateReady',
  secretChatStateClosed = 'secretChatStateClosed'
}

export enum SESSION {
  session = 'session'
}

export enum SESSIONS {
  sessions = 'sessions'
}

export enum SHIPPING_OPTION {
  shippingOption = 'shippingOption'
}

export enum STICKER {
  sticker = 'sticker'
}

export enum STICKER_EMOJIS {
  stickerEmojis = 'stickerEmojis'
}

export enum STICKER_SET {
  stickerSet = 'stickerSet'
}

export enum STICKER_SET_INFO {
  stickerSetInfo = 'stickerSetInfo'
}

export enum STICKER_SETS {
  stickerSets = 'stickerSets'
}

export enum STICKERS {
  stickers = 'stickers'
}

export enum STORAGE_STATISTICS {
  storageStatistics = 'storageStatistics'
}

export enum STORAGE_STATISTICS_BY_CHAT {
  storageStatisticsByChat = 'storageStatisticsByChat'
}

export enum STORAGE_STATISTICS_BY_FILE_TYPE {
  storageStatisticsByFileType = 'storageStatisticsByFileType'
}

export enum STORAGE_STATISTICS_FAST {
  storageStatisticsFast = 'storageStatisticsFast'
}

export enum SUPERGROUP {
  supergroup = 'supergroup'
}

export enum SUPERGROUP_FULL_INFO {
  supergroupFullInfo = 'supergroupFullInfo'
}

export enum SUPERGROUP_MEMBERS_FILTER {
  supergroupMembersFilterRecent = 'supergroupMembersFilterRecent',
  supergroupMembersFilterAdministrators = 'supergroupMembersFilterAdministrators',
  supergroupMembersFilterSearch = 'supergroupMembersFilterSearch',
  supergroupMembersFilterRestricted = 'supergroupMembersFilterRestricted',
  supergroupMembersFilterBanned = 'supergroupMembersFilterBanned',
  supergroupMembersFilterBots = 'supergroupMembersFilterBots'
}

export enum T_ME_URL {
  tMeUrl = 'tMeUrl'
}

export enum T_ME_URL_TYPE {
  tMeUrlTypeUser = 'tMeUrlTypeUser',
  tMeUrlTypeSupergroup = 'tMeUrlTypeSupergroup',
  tMeUrlTypeChatInvite = 'tMeUrlTypeChatInvite',
  tMeUrlTypeStickerSet = 'tMeUrlTypeStickerSet'
}

export enum T_ME_URLS {
  tMeUrls = 'tMeUrls'
}

export enum TDLIB_PARAMETERS {
  tdlibParameters = 'tdlibParameters'
}

export enum TEMPORARY_PASSWORD_STATE {
  temporaryPasswordState = 'temporaryPasswordState'
}

export enum TERMS_OF_SERVICE {
  termsOfService = 'termsOfService'
}

export enum TEST_BYTES {
  testBytes = 'testBytes'
}

export enum TEST_INT {
  testInt = 'testInt'
}

export enum TEST_STRING {
  testString = 'testString'
}

export enum TEST_VECTOR_INT {
  testVectorInt = 'testVectorInt'
}

export enum TEST_VECTOR_INT_OBJECT {
  testVectorIntObject = 'testVectorIntObject'
}

export enum TEST_VECTOR_STRING {
  testVectorString = 'testVectorString'
}

export enum TEST_VECTOR_STRING_OBJECT {
  testVectorStringObject = 'testVectorStringObject'
}

export enum TEXT {
  text = 'text'
}

export enum TEXT_ENTITIES {
  textEntities = 'textEntities'
}

export enum TEXT_ENTITY {
  textEntity = 'textEntity'
}

export enum TEXT_ENTITY_TYPE {
  textEntityTypeMention = 'textEntityTypeMention',
  textEntityTypeHashtag = 'textEntityTypeHashtag',
  textEntityTypeCashtag = 'textEntityTypeCashtag',
  textEntityTypeBotCommand = 'textEntityTypeBotCommand',
  textEntityTypeUrl = 'textEntityTypeUrl',
  textEntityTypeEmailAddress = 'textEntityTypeEmailAddress',
  textEntityTypeBold = 'textEntityTypeBold',
  textEntityTypeItalic = 'textEntityTypeItalic',
  textEntityTypeCode = 'textEntityTypeCode',
  textEntityTypePre = 'textEntityTypePre',
  textEntityTypePreCode = 'textEntityTypePreCode',
  textEntityTypeTextUrl = 'textEntityTypeTextUrl',
  textEntityTypeMentionName = 'textEntityTypeMentionName',
  textEntityTypePhoneNumber = 'textEntityTypePhoneNumber'
}

export enum TEXT_PARSE_MODE {
  textParseModeMarkdown = 'textParseModeMarkdown',
  textParseModeHTML = 'textParseModeHTML'
}

export enum TOP_CHAT_CATEGORY {
  topChatCategoryUsers = 'topChatCategoryUsers',
  topChatCategoryBots = 'topChatCategoryBots',
  topChatCategoryGroups = 'topChatCategoryGroups',
  topChatCategoryChannels = 'topChatCategoryChannels',
  topChatCategoryInlineBots = 'topChatCategoryInlineBots',
  topChatCategoryCalls = 'topChatCategoryCalls'
}

export enum UPDATE {
  updateAuthorizationState = 'updateAuthorizationState',
  updateNewMessage = 'updateNewMessage',
  updateMessageSendAcknowledged = 'updateMessageSendAcknowledged',
  updateMessageSendSucceeded = 'updateMessageSendSucceeded',
  updateMessageSendFailed = 'updateMessageSendFailed',
  updateMessageContent = 'updateMessageContent',
  updateMessageEdited = 'updateMessageEdited',
  updateMessageViews = 'updateMessageViews',
  updateMessageContentOpened = 'updateMessageContentOpened',
  updateMessageMentionRead = 'updateMessageMentionRead',
  updateNewChat = 'updateNewChat',
  updateChatTitle = 'updateChatTitle',
  updateChatPhoto = 'updateChatPhoto',
  updateChatLastMessage = 'updateChatLastMessage',
  updateChatOrder = 'updateChatOrder',
  updateChatIsPinned = 'updateChatIsPinned',
  updateChatIsMarkedAsUnread = 'updateChatIsMarkedAsUnread',
  updateChatIsSponsored = 'updateChatIsSponsored',
  updateChatDefaultDisableNotification = 'updateChatDefaultDisableNotification',
  updateChatReadInbox = 'updateChatReadInbox',
  updateChatReadOutbox = 'updateChatReadOutbox',
  updateChatUnreadMentionCount = 'updateChatUnreadMentionCount',
  updateChatNotificationSettings = 'updateChatNotificationSettings',
  updateScopeNotificationSettings = 'updateScopeNotificationSettings',
  updateChatReplyMarkup = 'updateChatReplyMarkup',
  updateChatDraftMessage = 'updateChatDraftMessage',
  updateDeleteMessages = 'updateDeleteMessages',
  updateUserChatAction = 'updateUserChatAction',
  updateUserStatus = 'updateUserStatus',
  updateUser = 'updateUser',
  updateBasicGroup = 'updateBasicGroup',
  updateSupergroup = 'updateSupergroup',
  updateSecretChat = 'updateSecretChat',
  updateUserFullInfo = 'updateUserFullInfo',
  updateBasicGroupFullInfo = 'updateBasicGroupFullInfo',
  updateSupergroupFullInfo = 'updateSupergroupFullInfo',
  updateServiceNotification = 'updateServiceNotification',
  updateFile = 'updateFile',
  updateFileGenerationStart = 'updateFileGenerationStart',
  updateFileGenerationStop = 'updateFileGenerationStop',
  updateCall = 'updateCall',
  updateUserPrivacySettingRules = 'updateUserPrivacySettingRules',
  updateUnreadMessageCount = 'updateUnreadMessageCount',
  updateUnreadChatCount = 'updateUnreadChatCount',
  updateOption = 'updateOption',
  updateInstalledStickerSets = 'updateInstalledStickerSets',
  updateTrendingStickerSets = 'updateTrendingStickerSets',
  updateRecentStickers = 'updateRecentStickers',
  updateFavoriteStickers = 'updateFavoriteStickers',
  updateSavedAnimations = 'updateSavedAnimations',
  updateLanguagePackStrings = 'updateLanguagePackStrings',
  updateConnectionState = 'updateConnectionState',
  updateTermsOfService = 'updateTermsOfService',
  updateNewInlineQuery = 'updateNewInlineQuery',
  updateNewChosenInlineResult = 'updateNewChosenInlineResult',
  updateNewCallbackQuery = 'updateNewCallbackQuery',
  updateNewInlineCallbackQuery = 'updateNewInlineCallbackQuery',
  updateNewShippingQuery = 'updateNewShippingQuery',
  updateNewPreCheckoutQuery = 'updateNewPreCheckoutQuery',
  updateNewCustomEvent = 'updateNewCustomEvent',
  updateNewCustomQuery = 'updateNewCustomQuery'
}

export enum USER {
  user = 'user'
}

export enum USER_FULL_INFO {
  userFullInfo = 'userFullInfo'
}

export enum USER_PRIVACY_SETTING {
  userPrivacySettingShowStatus = 'userPrivacySettingShowStatus',
  userPrivacySettingAllowChatInvites = 'userPrivacySettingAllowChatInvites',
  userPrivacySettingAllowCalls = 'userPrivacySettingAllowCalls'
}

export enum USER_PRIVACY_SETTING_RULE {
  userPrivacySettingRuleAllowAll = 'userPrivacySettingRuleAllowAll',
  userPrivacySettingRuleAllowContacts = 'userPrivacySettingRuleAllowContacts',
  userPrivacySettingRuleAllowUsers = 'userPrivacySettingRuleAllowUsers',
  userPrivacySettingRuleRestrictAll = 'userPrivacySettingRuleRestrictAll',
  userPrivacySettingRuleRestrictContacts = 'userPrivacySettingRuleRestrictContacts',
  userPrivacySettingRuleRestrictUsers = 'userPrivacySettingRuleRestrictUsers'
}

export enum USER_PRIVACY_SETTING_RULES {
  userPrivacySettingRules = 'userPrivacySettingRules'
}

export enum USER_PROFILE_PHOTOS {
  userProfilePhotos = 'userProfilePhotos'
}

export enum USER_STATUS {
  userStatusEmpty = 'userStatusEmpty',
  userStatusOnline = 'userStatusOnline',
  userStatusOffline = 'userStatusOffline',
  userStatusRecently = 'userStatusRecently',
  userStatusLastWeek = 'userStatusLastWeek',
  userStatusLastMonth = 'userStatusLastMonth'
}

export enum USER_TYPE {
  userTypeRegular = 'userTypeRegular',
  userTypeDeleted = 'userTypeDeleted',
  userTypeBot = 'userTypeBot',
  userTypeUnknown = 'userTypeUnknown'
}

export enum USERS {
  users = 'users'
}

export enum VALIDATED_ORDER_INFO {
  validatedOrderInfo = 'validatedOrderInfo'
}

export enum VENUE {
  venue = 'venue'
}

export enum VIDEO {
  video = 'video'
}

export enum VIDEO_NOTE {
  videoNote = 'videoNote'
}

export enum VOICE_NOTE {
  voiceNote = 'voiceNote'
}

export enum WALLPAPER {
  wallpaper = 'wallpaper'
}

export enum WALLPAPERS {
  wallpapers = 'wallpapers'
}

export enum WEB_PAGE {
  webPage = 'webPage'
}

export enum WEB_PAGE_INSTANT_VIEW {
  webPageInstantView = 'webPageInstantView'
}
