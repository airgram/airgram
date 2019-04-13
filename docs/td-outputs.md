# TDLib output types

- [`AccountTtlUnion`](#accountttlunion)
- [`AnimationsUnion`](#animationsunion)
- [`AuthenticationCodeInfoUnion`](#authenticationcodeinfounion)
- [`AuthenticationCodeTypeUnion`](#authenticationcodetypeunion)
- [`AuthorizationStateUnion`](#authorizationstateunion)
- [`BasicGroupUnion`](#basicgroupunion)
- [`BasicGroupFullInfoUnion`](#basicgroupfullinfounion)
- [`CallDiscardReasonUnion`](#calldiscardreasonunion)
- [`CallIdUnion`](#callidunion)
- [`CallStateUnion`](#callstateunion)
- [`CallbackQueryAnswerUnion`](#callbackqueryanswerunion)
- [`CallbackQueryPayloadUnion`](#callbackquerypayloadunion)
- [`ChatUnion`](#chatunion)
- [`ChatActionUnion`](#chatactionunion)
- [`ChatEventActionUnion`](#chateventactionunion)
- [`ChatEventsUnion`](#chateventsunion)
- [`ChatInviteLinkUnion`](#chatinvitelinkunion)
- [`ChatInviteLinkInfoUnion`](#chatinvitelinkinfounion)
- [`ChatMemberUnion`](#chatmemberunion)
- [`ChatMemberStatusUnion`](#chatmemberstatusunion)
- [`ChatMembersUnion`](#chatmembersunion)
- [`ChatMembersFilterUnion`](#chatmembersfilterunion)
- [`ChatReportReasonUnion`](#chatreportreasonunion)
- [`ChatReportSpamStateUnion`](#chatreportspamstateunion)
- [`ChatTypeUnion`](#chattypeunion)
- [`ChatsUnion`](#chatsunion)
- [`CheckChatUsernameResultUnion`](#checkchatusernameresultunion)
- [`ConnectedWebsitesUnion`](#connectedwebsitesunion)
- [`ConnectionStateUnion`](#connectionstateunion)
- [`CountUnion`](#countunion)
- [`CustomRequestResultUnion`](#customrequestresultunion)
- [`DeepLinkInfoUnion`](#deeplinkinfounion)
- [`DeviceTokenUnion`](#devicetokenunion)
- [`EmailAddressAuthenticationCodeInfoUnion`](#emailaddressauthenticationcodeinfounion)
- [`ErrorUnion`](#errorunion)
- [`FileUnion`](#fileunion)
- [`FileTypeUnion`](#filetypeunion)
- [`FormattedTextUnion`](#formattedtextunion)
- [`FoundMessagesUnion`](#foundmessagesunion)
- [`GameHighScoresUnion`](#gamehighscoresunion)
- [`HashtagsUnion`](#hashtagsunion)
- [`ImportedContactsUnion`](#importedcontactsunion)
- [`InlineKeyboardButtonTypeUnion`](#inlinekeyboardbuttontypeunion)
- [`InlineQueryResultUnion`](#inlinequeryresultunion)
- [`InlineQueryResultsUnion`](#inlinequeryresultsunion)
- [`InputCredentialsUnion`](#inputcredentialsunion)
- [`InputFileUnion`](#inputfileunion)
- [`InputInlineQueryResultUnion`](#inputinlinequeryresultunion)
- [`InputMessageContentUnion`](#inputmessagecontentunion)
- [`InputPassportElementUnion`](#inputpassportelementunion)
- [`InputPassportElementErrorSourceUnion`](#inputpassportelementerrorsourceunion)
- [`KeyboardButtonTypeUnion`](#keyboardbuttontypeunion)
- [`LanguagePackStringValueUnion`](#languagepackstringvalueunion)
- [`LanguagePackStringsUnion`](#languagepackstringsunion)
- [`LinkStateUnion`](#linkstateunion)
- [`LocalizationTargetInfoUnion`](#localizationtargetinfounion)
- [`MaskPointUnion`](#maskpointunion)
- [`MessageUnion`](#messageunion)
- [`MessageContentUnion`](#messagecontentunion)
- [`MessageForwardInfoUnion`](#messageforwardinfounion)
- [`MessageSendingStateUnion`](#messagesendingstateunion)
- [`MessagesUnion`](#messagesunion)
- [`NetworkStatisticsUnion`](#networkstatisticsunion)
- [`NetworkStatisticsEntryUnion`](#networkstatisticsentryunion)
- [`NetworkTypeUnion`](#networktypeunion)
- [`NotificationSettingsScopeUnion`](#notificationsettingsscopeunion)
- [`OkUnion`](#okunion)
- [`OptionValueUnion`](#optionvalueunion)
- [`OrderInfoUnion`](#orderinfounion)
- [`PageBlockUnion`](#pageblockunion)
- [`PassportAuthorizationFormUnion`](#passportauthorizationformunion)
- [`PassportElementUnion`](#passportelementunion)
- [`PassportElementErrorSourceUnion`](#passportelementerrorsourceunion)
- [`PassportElementTypeUnion`](#passportelementtypeunion)
- [`PassportElementsUnion`](#passportelementsunion)
- [`PasswordStateUnion`](#passwordstateunion)
- [`PaymentFormUnion`](#paymentformunion)
- [`PaymentReceiptUnion`](#paymentreceiptunion)
- [`PaymentResultUnion`](#paymentresultunion)
- [`ProxiesUnion`](#proxiesunion)
- [`ProxyUnion`](#proxyunion)
- [`ProxyTypeUnion`](#proxytypeunion)
- [`PublicMessageLinkUnion`](#publicmessagelinkunion)
- [`RecoveryEmailAddressUnion`](#recoveryemailaddressunion)
- [`ReplyMarkupUnion`](#replymarkupunion)
- [`RichTextUnion`](#richtextunion)
- [`ScopeNotificationSettingsUnion`](#scopenotificationsettingsunion)
- [`SearchMessagesFilterUnion`](#searchmessagesfilterunion)
- [`SecondsUnion`](#secondsunion)
- [`SecretChatUnion`](#secretchatunion)
- [`SecretChatStateUnion`](#secretchatstateunion)
- [`SessionsUnion`](#sessionsunion)
- [`StickerEmojisUnion`](#stickeremojisunion)
- [`StickerSetUnion`](#stickersetunion)
- [`StickerSetsUnion`](#stickersetsunion)
- [`StickersUnion`](#stickersunion)
- [`StorageStatisticsUnion`](#storagestatisticsunion)
- [`StorageStatisticsFastUnion`](#storagestatisticsfastunion)
- [`SupergroupUnion`](#supergroupunion)
- [`SupergroupFullInfoUnion`](#supergroupfullinfounion)
- [`SupergroupMembersFilterUnion`](#supergroupmembersfilterunion)
- [`TMeUrlTypeUnion`](#tmeurltypeunion)
- [`TMeUrlsUnion`](#tmeurlsunion)
- [`TemporaryPasswordStateUnion`](#temporarypasswordstateunion)
- [`TestBytesUnion`](#testbytesunion)
- [`TestIntUnion`](#testintunion)
- [`TestStringUnion`](#teststringunion)
- [`TestVectorIntUnion`](#testvectorintunion)
- [`TestVectorIntObjectUnion`](#testvectorintobjectunion)
- [`TestVectorStringUnion`](#testvectorstringunion)
- [`TestVectorStringObjectUnion`](#testvectorstringobjectunion)
- [`TextUnion`](#textunion)
- [`TextEntitiesUnion`](#textentitiesunion)
- [`TextEntityTypeUnion`](#textentitytypeunion)
- [`TextParseModeUnion`](#textparsemodeunion)
- [`TopChatCategoryUnion`](#topchatcategoryunion)
- [`UpdateUnion`](#updateunion)
- [`UserUnion`](#userunion)
- [`UserFullInfoUnion`](#userfullinfounion)
- [`UserPrivacySettingUnion`](#userprivacysettingunion)
- [`UserPrivacySettingRuleUnion`](#userprivacysettingruleunion)
- [`UserPrivacySettingRulesUnion`](#userprivacysettingrulesunion)
- [`UserProfilePhotosUnion`](#userprofilephotosunion)
- [`UserStatusUnion`](#userstatusunion)
- [`UserTypeUnion`](#usertypeunion)
- [`UsersUnion`](#usersunion)
- [`ValidatedOrderInfoUnion`](#validatedorderinfounion)
- [`WallpapersUnion`](#wallpapersunion)
- [`WebPageUnion`](#webpageunion)
- [`WebPageInstantViewUnion`](#webpageinstantviewunion)
-------------
## AccountTtlUnion
It's an alias for the `AccountTtl` type.
#### AccountTtl
Contains information about the period of inactivity after which the current user's account will automatically be deleted


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "accountTtl" | |
| `days` | number | Number of days of inactivity before the account will be flagged for deletion; should range from 30-366 days |


## AnimationsUnion
It's an alias for the `Animations` type.
#### Animations
Represents a list of animations


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "animations" | |
| `animations` | [Animation[]](#animation) | List of animations |


## AuthenticationCodeInfoUnion
It's an alias for the `AuthenticationCodeInfo` type.
#### AuthenticationCodeInfo
Information about the authentication code that was sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authenticationCodeInfo" | |
| `phoneNumber` | string | A phone number that is being authenticated |
| `type` | [AuthenticationCodeTypeUnion](#authenticationcodetypeunion) | Describes the way the code was sent to the user |
| `nextType` | [AuthenticationCodeTypeUnion](#authenticationcodetypeunion) | Describes the way the next code will be sent to the user; may be null |
| `timeout` | number | Timeout before the code should be re-sent, in seconds |


## AuthenticationCodeTypeUnion
Provides information about the method by which an authentication code is delivered to the user
- [`AuthenticationCodeTypeTelegramMessage`](#authenticationcodetypetelegrammessage)
- [`AuthenticationCodeTypeSms`](#authenticationcodetypesms)
- [`AuthenticationCodeTypeCall`](#authenticationcodetypecall)
- [`AuthenticationCodeTypeFlashCall`](#authenticationcodetypeflashcall)
#### AuthenticationCodeTypeTelegramMessage
An authentication code is delivered via a private Telegram message, which can be viewed in another client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authenticationCodeTypeTelegramMessage" | |
| `length` | number | Length of the code |

#### AuthenticationCodeTypeSms
An authentication code is delivered via an SMS message to the specified phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authenticationCodeTypeSms" | |
| `length` | number | Length of the code |

#### AuthenticationCodeTypeCall
An authentication code is delivered via a phone call to the specified phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authenticationCodeTypeCall" | |
| `length` | number | Length of the code |

#### AuthenticationCodeTypeFlashCall
An authentication code is delivered by an immediately cancelled call to the specified phone number. The number from which the call was made is the code


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authenticationCodeTypeFlashCall" | |
| `pattern` | string | Pattern of the phone number from which the call will be made |


## AuthorizationStateUnion
Represents the current authorization state of the client
- [`AuthorizationStateWaitTdlibParameters`](#authorizationstatewaittdlibparameters)
- [`AuthorizationStateWaitEncryptionKey`](#authorizationstatewaitencryptionkey)
- [`AuthorizationStateWaitPhoneNumber`](#authorizationstatewaitphonenumber)
- [`AuthorizationStateWaitCode`](#authorizationstatewaitcode)
- [`AuthorizationStateWaitPassword`](#authorizationstatewaitpassword)
- [`AuthorizationStateReady`](#authorizationstateready)
- [`AuthorizationStateLoggingOut`](#authorizationstateloggingout)
- [`AuthorizationStateClosing`](#authorizationstateclosing)
- [`AuthorizationStateClosed`](#authorizationstateclosed)
#### AuthorizationStateWaitTdlibParameters
TDLib needs TdlibParameters for initialization


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateWaitTdlibParameters" | |

#### AuthorizationStateWaitEncryptionKey
TDLib needs an encryption key to decrypt the local database


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateWaitEncryptionKey" | |
| `isEncrypted` | boolean | True, if the database is currently encrypted |

#### AuthorizationStateWaitPhoneNumber
TDLib needs the user's phone number to authorize


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateWaitPhoneNumber" | |

#### AuthorizationStateWaitCode
TDLib needs the user's authentication code to finalize authorization


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateWaitCode" | |
| `isRegistered` | boolean | True, if the user is already registered |
| `termsOfService` | [TermsOfService](#termsofservice) | Telegram terms of service, which should be accepted before user can continue registration; may be null |
| `codeInfo` | [AuthenticationCodeInfo](#authenticationcodeinfo) | Information about the authorization code that was sent |

#### AuthorizationStateWaitPassword
The user has been authorized, but needs to enter a password to start using the application


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateWaitPassword" | |
| `passwordHint` | string | Hint for the password; can be empty |
| `hasRecoveryEmailAddress` | boolean | True if a recovery email address has been set up |
| `recoveryEmailAddressPattern` | string | Pattern of the email address to which the recovery email was sent; empty until a recovery email has been sent |

#### AuthorizationStateReady
The user has been successfully authorized. TDLib is now ready to answer queries


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateReady" | |

#### AuthorizationStateLoggingOut
The user is currently logging out


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateLoggingOut" | |

#### AuthorizationStateClosing
TDLib is closing, all subsequent queries will be answered with the error 500. Note that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed has been received


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateClosing" | |

#### AuthorizationStateClosed
TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be received after this. All queries will be responded to with error code 500. To continue working, one should create a new instance of the TDLib client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "authorizationStateClosed" | |


## BasicGroupUnion
It's an alias for the `BasicGroup` type.
#### BasicGroup
Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate more than 200 users)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "basicGroup" | |
| `id` | number | Group identifier |
| `memberCount` | number | Number of members in the group |
| `status` | [ChatMemberStatusUnion](#chatmemberstatusunion) | Status of the current user in the group |
| `everyoneIsAdministrator` | boolean | True, if all members have been granted administrator rights in the group |
| `isActive` | boolean | True, if the group is active |
| `upgradedToSupergroupId` | number | Identifier of the supergroup to which this group was upgraded; 0 if none |


## BasicGroupFullInfoUnion
It's an alias for the `BasicGroupFullInfo` type.
#### BasicGroupFullInfo
Contains full information about a basic group


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "basicGroupFullInfo" | |
| `creatorUserId` | number | User identifier of the creator of the group; 0 if unknown |
| `members` | [ChatMember[]](#chatmember) | Group members |
| `inviteLink` | string | Invite link for this group; available only for the group creator and only after it has been generated at least once |


## CallDiscardReasonUnion
Describes the reason why a call was discarded
- [`CallDiscardReasonEmpty`](#calldiscardreasonempty)
- [`CallDiscardReasonMissed`](#calldiscardreasonmissed)
- [`CallDiscardReasonDeclined`](#calldiscardreasondeclined)
- [`CallDiscardReasonDisconnected`](#calldiscardreasondisconnected)
- [`CallDiscardReasonHungUp`](#calldiscardreasonhungup)
#### CallDiscardReasonEmpty
The call wasn't discarded, or the reason is unknown


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callDiscardReasonEmpty" | |

#### CallDiscardReasonMissed
The call was ended before the conversation started. It was cancelled by the caller or missed by the other party


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callDiscardReasonMissed" | |

#### CallDiscardReasonDeclined
The call was ended before the conversation started. It was declined by the other party


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callDiscardReasonDeclined" | |

#### CallDiscardReasonDisconnected
The call was ended during the conversation because the users were disconnected


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callDiscardReasonDisconnected" | |

#### CallDiscardReasonHungUp
The call was ended because one of the parties hung up


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callDiscardReasonHungUp" | |


## CallIdUnion
It's an alias for the `CallId` type.
#### CallId
Contains the call identifier


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callId" | |
| `id` | number | Call identifier |


## CallStateUnion
Describes the current call state
- [`CallStatePending`](#callstatepending)
- [`CallStateExchangingKeys`](#callstateexchangingkeys)
- [`CallStateReady`](#callstateready)
- [`CallStateHangingUp`](#callstatehangingup)
- [`CallStateDiscarded`](#callstatediscarded)
- [`CallStateError`](#callstateerror)
#### CallStatePending
The call is pending, waiting to be accepted by a user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStatePending" | |
| `isCreated` | boolean | True, if the call has already been created by the server |
| `isReceived` | boolean | True, if the call has already been received by the other party |

#### CallStateExchangingKeys
The call has been answered and encryption keys are being exchanged


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStateExchangingKeys" | |

#### CallStateReady
The call is ready to use


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStateReady" | |
| `protocol` | [CallProtocol](#callprotocol) | Call protocols supported by the peer |
| `connections` | [CallConnection[]](#callconnection) | Available UDP reflectors |
| `config` | string | A JSON-encoded call config |
| `encryptionKey` | string | Call encryption key |
| `emojis` | string[] | Encryption key emojis fingerprint |

#### CallStateHangingUp
The call is hanging up after discardCall has been called


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStateHangingUp" | |

#### CallStateDiscarded
The call has ended successfully


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStateDiscarded" | |
| `reason` | [CallDiscardReasonUnion](#calldiscardreasonunion) | The reason, why the call has ended |
| `needRating` | boolean | True, if the call rating should be sent to the server |
| `needDebugInformation` | boolean | True, if the call debug information should be sent to the server |

#### CallStateError
The call has ended with an error


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callStateError" | |
| `error` | [Error](#error) | Error. An error with the code 4005000 will be returned if an outgoing call is missed because of an expired timeout |


## CallbackQueryAnswerUnion
It's an alias for the `CallbackQueryAnswer` type.
#### CallbackQueryAnswer
Contains a bot's answer to a callback query


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callbackQueryAnswer" | |
| `text` | string | Text of the answer |
| `showAlert` | boolean | True, if an alert should be shown to the user instead of a toast notification |
| `url` | string | URL to be opened |


## CallbackQueryPayloadUnion
Represents a payload of a callback query
- [`CallbackQueryPayloadData`](#callbackquerypayloaddata)
- [`CallbackQueryPayloadGame`](#callbackquerypayloadgame)
#### CallbackQueryPayloadData
The payload from a general callback button


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callbackQueryPayloadData" | |
| `data` | string | Data that was attached to the callback button |

#### CallbackQueryPayloadGame
The payload from a game callback button


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callbackQueryPayloadGame" | |
| `gameShortName` | string | A short name of the game that was attached to the callback button |


## ChatUnion
It's an alias for the `Chat` type.
#### Chat
A chat. (Can be a private chat, basic group, supergroup, or secret chat)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chat" | |
| `id` | number | Chat unique identifier |
| `type` | [ChatTypeUnion](#chattypeunion) | Type of the chat |
| `title` | string | Chat title |
| `photo` | [ChatPhoto](#chatphoto) | Chat photo; may be null |
| `lastMessage` | [Message](#message) | Last message in the chat; may be null |
| `order` | number &#124; string | Descending parameter by which chats are sorted in the main chat list. If the order number of two chats is the same, they must be sorted in descending order by ID. If 0, the position of the chat in the list is undetermined |
| `isPinned` | boolean | True, if the chat is pinned |
| `isMarkedAsUnread` | boolean | True, if the chat is marked as unread |
| `isSponsored` | boolean | True, if the chat is sponsored by the user's MTProxy server |
| `canBeReported` | boolean | True, if the chat can be reported to Telegram moderators through reportChat |
| `defaultDisableNotification` | boolean | Default value of the disable_notification parameter, used when a message is sent to the chat |
| `unreadCount` | number | Number of unread messages in the chat |
| `lastReadInboxMessageId` | number | Identifier of the last read incoming message |
| `lastReadOutboxMessageId` | number | Identifier of the last read outgoing message |
| `unreadMentionCount` | number | Number of unread messages with a mention/reply in the chat |
| `notificationSettings` | [ChatNotificationSettings](#chatnotificationsettings) | Notification settings for this chat |
| `replyMarkupMessageId` | number | Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat |
| `draftMessage` | [DraftMessage](#draftmessage) | A draft of a message in the chat; may be null |
| `clientData` | string | Contains client-specific data associated with the chat. (For example, the chat position or local chat notification settings can be stored here.) Persistent if a message database is used |


## ChatActionUnion
Describes the different types of activity in a chat
- [`ChatActionTyping`](#chatactiontyping)
- [`ChatActionRecordingVideo`](#chatactionrecordingvideo)
- [`ChatActionUploadingVideo`](#chatactionuploadingvideo)
- [`ChatActionRecordingVoiceNote`](#chatactionrecordingvoicenote)
- [`ChatActionUploadingVoiceNote`](#chatactionuploadingvoicenote)
- [`ChatActionUploadingPhoto`](#chatactionuploadingphoto)
- [`ChatActionUploadingDocument`](#chatactionuploadingdocument)
- [`ChatActionChoosingLocation`](#chatactionchoosinglocation)
- [`ChatActionChoosingContact`](#chatactionchoosingcontact)
- [`ChatActionStartPlayingGame`](#chatactionstartplayinggame)
- [`ChatActionRecordingVideoNote`](#chatactionrecordingvideonote)
- [`ChatActionUploadingVideoNote`](#chatactionuploadingvideonote)
- [`ChatActionCancel`](#chatactioncancel)
#### ChatActionTyping
The user is typing a message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionTyping" | |

#### ChatActionRecordingVideo
The user is recording a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVideo" | |

#### ChatActionUploadingVideo
The user is uploading a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVideo" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionRecordingVoiceNote
The user is recording a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVoiceNote" | |

#### ChatActionUploadingVoiceNote
The user is uploading a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVoiceNote" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionUploadingPhoto
The user is uploading a photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingPhoto" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionUploadingDocument
The user is uploading a document


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingDocument" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionChoosingLocation
The user is picking a location or venue to send


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionChoosingLocation" | |

#### ChatActionChoosingContact
The user is picking a contact to send


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionChoosingContact" | |

#### ChatActionStartPlayingGame
The user has started to play a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionStartPlayingGame" | |

#### ChatActionRecordingVideoNote
The user is recording a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVideoNote" | |

#### ChatActionUploadingVideoNote
The user is uploading a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVideoNote" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionCancel
The user has cancelled the previous action


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionCancel" | |


## ChatEventActionUnion
Represents a chat event
- [`ChatEventMessageEdited`](#chateventmessageedited)
- [`ChatEventMessageDeleted`](#chateventmessagedeleted)
- [`ChatEventMessagePinned`](#chateventmessagepinned)
- [`ChatEventMessageUnpinned`](#chateventmessageunpinned)
- [`ChatEventMemberJoined`](#chateventmemberjoined)
- [`ChatEventMemberLeft`](#chateventmemberleft)
- [`ChatEventMemberInvited`](#chateventmemberinvited)
- [`ChatEventMemberPromoted`](#chateventmemberpromoted)
- [`ChatEventMemberRestricted`](#chateventmemberrestricted)
- [`ChatEventTitleChanged`](#chateventtitlechanged)
- [`ChatEventDescriptionChanged`](#chateventdescriptionchanged)
- [`ChatEventUsernameChanged`](#chateventusernamechanged)
- [`ChatEventPhotoChanged`](#chateventphotochanged)
- [`ChatEventInvitesToggled`](#chateventinvitestoggled)
- [`ChatEventSignMessagesToggled`](#chateventsignmessagestoggled)
- [`ChatEventStickerSetChanged`](#chateventstickersetchanged)
- [`ChatEventIsAllHistoryAvailableToggled`](#chateventisallhistoryavailabletoggled)
#### ChatEventMessageEdited
A message was edited


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMessageEdited" | |
| `oldMessage` | [Message](#message) | The original message before the edit |
| `newMessage` | [Message](#message) | The message after it was edited |

#### ChatEventMessageDeleted
A message was deleted


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMessageDeleted" | |
| `message` | [Message](#message) | Deleted message |

#### ChatEventMessagePinned
A message was pinned


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMessagePinned" | |
| `message` | [Message](#message) | Pinned message |

#### ChatEventMessageUnpinned
A message was unpinned


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMessageUnpinned" | |

#### ChatEventMemberJoined
A new member joined the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMemberJoined" | |

#### ChatEventMemberLeft
A member left the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMemberLeft" | |

#### ChatEventMemberInvited
A new chat member was invited


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMemberInvited" | |
| `userId` | number | New member user identifier |
| `status` | [ChatMemberStatusUnion](#chatmemberstatusunion) | New member status |

#### ChatEventMemberPromoted
A chat member has gained/lost administrator status, or the list of their administrator privileges has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMemberPromoted" | |
| `userId` | number | Chat member user identifier |
| `oldStatus` | [ChatMemberStatusUnion](#chatmemberstatusunion) | Previous status of the chat member |
| `newStatus` | [ChatMemberStatusUnion](#chatmemberstatusunion) | New status of the chat member |

#### ChatEventMemberRestricted
A chat member was restricted/unrestricted or banned/unbanned, or the list of their restrictions has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventMemberRestricted" | |
| `userId` | number | Chat member user identifier |
| `oldStatus` | [ChatMemberStatusUnion](#chatmemberstatusunion) | Previous status of the chat member |
| `newStatus` | [ChatMemberStatusUnion](#chatmemberstatusunion) | New status of the chat member |

#### ChatEventTitleChanged
The chat title was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventTitleChanged" | |
| `oldTitle` | string | Previous chat title |
| `newTitle` | string | New chat title |

#### ChatEventDescriptionChanged
The chat description was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventDescriptionChanged" | |
| `oldDescription` | string | Previous chat description |
| `newDescription` | string | New chat description |

#### ChatEventUsernameChanged
The chat username was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventUsernameChanged" | |
| `oldUsername` | string | Previous chat username |
| `newUsername` | string | New chat username |

#### ChatEventPhotoChanged
The chat photo was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventPhotoChanged" | |
| `oldPhoto` | [ChatPhoto](#chatphoto) | Previous chat photo value; may be null |
| `newPhoto` | [ChatPhoto](#chatphoto) | New chat photo value; may be null |

#### ChatEventInvitesToggled
The anyone_can_invite setting of a supergroup chat was toggled


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventInvitesToggled" | |
| `anyoneCanInvite` | boolean | New value of anyone_can_invite |

#### ChatEventSignMessagesToggled
The sign_messages setting of a channel was toggled


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventSignMessagesToggled" | |
| `signMessages` | boolean | New value of sign_messages |

#### ChatEventStickerSetChanged
The supergroup sticker set was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventStickerSetChanged" | |
| `oldStickerSetId` | number &#124; string | Previous identifier of the chat sticker set; 0 if none |
| `newStickerSetId` | number &#124; string | New identifier of the chat sticker set; 0 if none |

#### ChatEventIsAllHistoryAvailableToggled
The is_all_history_available setting of a supergroup was toggled


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEventIsAllHistoryAvailableToggled" | |
| `isAllHistoryAvailable` | boolean | New value of is_all_history_available |


## ChatEventsUnion
It's an alias for the `ChatEvents` type.
#### ChatEvents
Contains a list of chat events


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatEvents" | |
| `events` | [ChatEvent[]](#chatevent) | List of events |


## ChatInviteLinkUnion
It's an alias for the `ChatInviteLink` type.
#### ChatInviteLink
Contains a chat invite link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatInviteLink" | |
| `inviteLink` | string | Chat invite link |


## ChatInviteLinkInfoUnion
It's an alias for the `ChatInviteLinkInfo` type.
#### ChatInviteLinkInfo
Contains information about a chat invite link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatInviteLinkInfo" | |
| `chatId` | number | Chat identifier of the invite link; 0 if the user is not a member of this chat |
| `type` | [ChatTypeUnion](#chattypeunion) | Contains information about the type of the chat |
| `title` | string | Title of the chat |
| `photo` | [ChatPhoto](#chatphoto) | Chat photo; may be null |
| `memberCount` | number | Number of members |
| `memberUserIds` | number[] | User identifiers of some chat members that may be known to the current user |
| `isPublic` | boolean | True, if the chat is a public supergroup or channel with a username |


## ChatMemberUnion
It's an alias for the `ChatMember` type.
#### ChatMember
A user with information about joining/leaving a chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMember" | |
| `userId` | number | User identifier of the chat member |
| `inviterUserId` | number | Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown |
| `joinedChatDate` | number | Point in time (Unix timestamp) when the user joined a chat |
| `status` | [ChatMemberStatusUnion](#chatmemberstatusunion) | Status of the member in the chat |
| `botInfo` | [BotInfo](#botinfo) | If the user is a bot, information about the bot; may be null. Can be null even for a bot if the bot is not a chat member |


## ChatMemberStatusUnion
Provides information about the status of a member in a chat
- [`ChatMemberStatusCreator`](#chatmemberstatuscreator)
- [`ChatMemberStatusAdministrator`](#chatmemberstatusadministrator)
- [`ChatMemberStatusMember`](#chatmemberstatusmember)
- [`ChatMemberStatusRestricted`](#chatmemberstatusrestricted)
- [`ChatMemberStatusLeft`](#chatmemberstatusleft)
- [`ChatMemberStatusBanned`](#chatmemberstatusbanned)
#### ChatMemberStatusCreator
The user is the creator of a chat and has all the administrator privileges


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusCreator" | |
| `isMember` | boolean | True, if the user is a member of the chat |

#### ChatMemberStatusAdministrator
The user is a member of a chat and has some additional privileges. In basic groups, administrators can edit and delete messages sent by others, add new members, and ban unprivileged members. In supergroups and channels, there are more detailed options for administrator privileges


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusAdministrator" | |
| `canBeEdited` | boolean | True, if the current user can edit the administrator privileges for the called user |
| `canChangeInfo` | boolean | True, if the administrator can change the chat title, photo, and other settings |
| `canPostMessages` | boolean | True, if the administrator can create channel posts; applicable to channels only |
| `canEditMessages` | boolean | True, if the administrator can edit messages of other users and pin messages; applicable to channels only |
| `canDeleteMessages` | boolean | True, if the administrator can delete messages of other users |
| `canInviteUsers` | boolean | True, if the administrator can invite new users to the chat |
| `canRestrictMembers` | boolean | True, if the administrator can restrict, ban, or unban chat members |
| `canPinMessages` | boolean | True, if the administrator can pin messages; applicable to supergroups only |
| `canPromoteMembers` | boolean | True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that were directly or indirectly promoted by him |

#### ChatMemberStatusMember
The user is a member of a chat, without any additional privileges or restrictions


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusMember" | |

#### ChatMemberStatusRestricted
The user is under certain restrictions in the chat. Not supported in basic groups and channels


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusRestricted" | |
| `isMember` | boolean | True, if the user is a member of the chat |
| `restrictedUntilDate` | number | Point in time (Unix timestamp) when restrictions will be lifted from the user; 0 if never. If the user is restricted for more than 366 days or for less than 30 seconds from the current time, the user is considered to be restricted forever |
| `canSendMessages` | boolean | True, if the user can send text messages, contacts, locations, and venues |
| `canSendMediaMessages` | boolean | True, if the user can send audio files, documents, photos, videos, video notes, and voice notes. Implies can_send_messages permissions |
| `canSendOtherMessages` | boolean | True, if the user can send animations, games, and stickers and use inline bots. Implies can_send_media_messages permissions |
| `canAddWebPagePreviews` | boolean | True, if the user may add a web page preview to his messages. Implies can_send_messages permissions |

#### ChatMemberStatusLeft
The user is not a chat member


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusLeft" | |

#### ChatMemberStatusBanned
The user was banned (and hence is not a member of the chat). Implies the user can't return to the chat or view messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusBanned" | |
| `bannedUntilDate` | number | Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever |


## ChatMembersUnion
It's an alias for the `ChatMembers` type.
#### ChatMembers
Contains a list of chat members


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembers" | |
| `totalCount` | number | Approximate total count of chat members found |
| `members` | [ChatMember[]](#chatmember) | A list of chat members |


## ChatMembersFilterUnion
Specifies the kind of chat members to return in searchChatMembers
- [`ChatMembersFilterAdministrators`](#chatmembersfilteradministrators)
- [`ChatMembersFilterMembers`](#chatmembersfiltermembers)
- [`ChatMembersFilterRestricted`](#chatmembersfilterrestricted)
- [`ChatMembersFilterBanned`](#chatmembersfilterbanned)
- [`ChatMembersFilterBots`](#chatmembersfilterbots)
#### ChatMembersFilterAdministrators
Returns the creator and administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterAdministrators" | |

#### ChatMembersFilterMembers
Returns all chat members, including restricted chat members


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterMembers" | |

#### ChatMembersFilterRestricted
Returns users under certain restrictions in the chat; can be used only by administrators in a supergroup


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterRestricted" | |

#### ChatMembersFilterBanned
Returns users banned from the chat; can be used only by administrators in a supergroup or in a channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterBanned" | |

#### ChatMembersFilterBots
Returns bot members of the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterBots" | |


## ChatReportReasonUnion
Describes the reason why a chat is reported
- [`ChatReportReasonSpam`](#chatreportreasonspam)
- [`ChatReportReasonViolence`](#chatreportreasonviolence)
- [`ChatReportReasonPornography`](#chatreportreasonpornography)
- [`ChatReportReasonCopyright`](#chatreportreasoncopyright)
- [`ChatReportReasonCustom`](#chatreportreasoncustom)
#### ChatReportReasonSpam
The chat contains spam messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonSpam" | |

#### ChatReportReasonViolence
The chat promotes violence


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonViolence" | |

#### ChatReportReasonPornography
The chat contains pornographic messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonPornography" | |

#### ChatReportReasonCopyright
The chat contains copyrighted content


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonCopyright" | |

#### ChatReportReasonCustom
A custom reason provided by the user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonCustom" | |
| `text` | string | Report text |


## ChatReportSpamStateUnion
It's an alias for the `ChatReportSpamState` type.
#### ChatReportSpamState
Contains information about the availability of the "Report spam" action for a chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportSpamState" | |
| `canReportSpam` | boolean | True, if a prompt with the "Report spam" action should be shown to the user |


## ChatTypeUnion
Describes the type of a chat
- [`ChatTypePrivate`](#chattypeprivate)
- [`ChatTypeBasicGroup`](#chattypebasicgroup)
- [`ChatTypeSupergroup`](#chattypesupergroup)
- [`ChatTypeSecret`](#chattypesecret)
#### ChatTypePrivate
An ordinary chat with a user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatTypePrivate" | |
| `userId` | number | User identifier |

#### ChatTypeBasicGroup
A basic group (i.e., a chat with 0-200 other users)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatTypeBasicGroup" | |
| `basicGroupId` | number | Basic group identifier |

#### ChatTypeSupergroup
A supergroup (i.e. a chat with up to GetOption("supergroup_max_size") other users), or channel (with unlimited members)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatTypeSupergroup" | |
| `supergroupId` | number | Supergroup or channel identifier |
| `isChannel` | boolean | True, if the supergroup is a channel |

#### ChatTypeSecret
A secret chat with a user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatTypeSecret" | |
| `secretChatId` | number | Secret chat identifier |
| `userId` | number | User identifier of the secret chat peer |


## ChatsUnion
It's an alias for the `Chats` type.
#### Chats
Represents a list of chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chats" | |
| `chatIds` | number[] | List of chat identifiers |


## CheckChatUsernameResultUnion
Represents result of checking whether a username can be set for a chat
- [`CheckChatUsernameResultOk`](#checkchatusernameresultok)
- [`CheckChatUsernameResultUsernameInvalid`](#checkchatusernameresultusernameinvalid)
- [`CheckChatUsernameResultUsernameOccupied`](#checkchatusernameresultusernameoccupied)
- [`CheckChatUsernameResultPublicChatsTooMuch`](#checkchatusernameresultpublicchatstoomuch)
- [`CheckChatUsernameResultPublicGroupsUnavailable`](#checkchatusernameresultpublicgroupsunavailable)
#### CheckChatUsernameResultOk
The username can be set


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "checkChatUsernameResultOk" | |

#### CheckChatUsernameResultUsernameInvalid
The username is invalid


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "checkChatUsernameResultUsernameInvalid" | |

#### CheckChatUsernameResultUsernameOccupied
The username is occupied


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "checkChatUsernameResultUsernameOccupied" | |

#### CheckChatUsernameResultPublicChatsTooMuch
The user has too much public chats, one of them should be made private first


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "checkChatUsernameResultPublicChatsTooMuch" | |

#### CheckChatUsernameResultPublicGroupsUnavailable
The user can't be a member of a public supergroup


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "checkChatUsernameResultPublicGroupsUnavailable" | |


## ConnectedWebsitesUnion
It's an alias for the `ConnectedWebsites` type.
#### ConnectedWebsites
Contains a list of websites the current user is logged in with Telegram


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectedWebsites" | |
| `websites` | [ConnectedWebsite[]](#connectedwebsite) | List of connected websites |


## ConnectionStateUnion
Describes the current state of the connection to Telegram servers
- [`ConnectionStateWaitingForNetwork`](#connectionstatewaitingfornetwork)
- [`ConnectionStateConnectingToProxy`](#connectionstateconnectingtoproxy)
- [`ConnectionStateConnecting`](#connectionstateconnecting)
- [`ConnectionStateUpdating`](#connectionstateupdating)
- [`ConnectionStateReady`](#connectionstateready)
#### ConnectionStateWaitingForNetwork
Currently waiting for the network to become available. Use SetNetworkType to change the available network type


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectionStateWaitingForNetwork" | |

#### ConnectionStateConnectingToProxy
Currently establishing a connection with a proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectionStateConnectingToProxy" | |

#### ConnectionStateConnecting
Currently establishing a connection to the Telegram servers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectionStateConnecting" | |

#### ConnectionStateUpdating
Downloading data received while the client was offline


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectionStateUpdating" | |

#### ConnectionStateReady
There is a working connection to the Telegram servers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "connectionStateReady" | |


## CountUnion
It's an alias for the `Count` type.
#### Count
Contains a counter


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "count" | |
| `count` | number | Count |


## CustomRequestResultUnion
It's an alias for the `CustomRequestResult` type.
#### CustomRequestResult
Contains the result of a custom request


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "customRequestResult" | |
| `result` | string | A JSON-serialized result |


## DeepLinkInfoUnion
It's an alias for the `DeepLinkInfo` type.
#### DeepLinkInfo
Contains information about a tg:// deep link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deepLinkInfo" | |
| `text` | [FormattedText](#formattedtext) | Text to be shown to the user |
| `needUpdateApplication` | boolean | True, if user should be asked to update the application |


## DeviceTokenUnion
Represents a data needed to subscribe for push notifications. To use specific push notification service, you must specify the correct application platform and upload valid server authentication data at https://my.telegram.org
- [`DeviceTokenGoogleCloudMessaging`](#devicetokengooglecloudmessaging)
- [`DeviceTokenApplePush`](#devicetokenapplepush)
- [`DeviceTokenApplePushVoIp`](#devicetokenapplepushvoip)
- [`DeviceTokenWindowsPush`](#devicetokenwindowspush)
- [`DeviceTokenMicrosoftPush`](#devicetokenmicrosoftpush)
- [`DeviceTokenMicrosoftPushVoIp`](#devicetokenmicrosoftpushvoip)
- [`DeviceTokenWebPush`](#devicetokenwebpush)
- [`DeviceTokenSimplePush`](#devicetokensimplepush)
- [`DeviceTokenUbuntuPush`](#devicetokenubuntupush)
- [`DeviceTokenBlackBerryPush`](#devicetokenblackberrypush)
- [`DeviceTokenTizenPush`](#devicetokentizenpush)
#### DeviceTokenGoogleCloudMessaging
A token for Google Cloud Messaging


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenGoogleCloudMessaging" | |
| `token` | string | Device registration token; may be empty to de-register a device |

#### DeviceTokenApplePush
A token for Apple Push Notification service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenApplePush" | |
| `deviceToken` | string | Device token; may be empty to de-register a device |
| `isAppSandbox` | boolean | True, if App Sandbox is enabled |

#### DeviceTokenApplePushVoIp
A token for Apple Push Notification service VoIP notifications


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenApplePushVoIP" | |
| `deviceToken` | string | Device token; may be empty to de-register a device |
| `isAppSandbox` | boolean | True, if App Sandbox is enabled |

#### DeviceTokenWindowsPush
A token for Windows Push Notification Services


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenWindowsPush" | |
| `accessToken` | string | The access token that will be used to send notifications; may be empty to de-register a device |

#### DeviceTokenMicrosoftPush
A token for Microsoft Push Notification Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenMicrosoftPush" | |
| `channelUri` | string | Push notification channel URI; may be empty to de-register a device |

#### DeviceTokenMicrosoftPushVoIp
A token for Microsoft Push Notification Service VoIP channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenMicrosoftPushVoIP" | |
| `channelUri` | string | Push notification channel URI; may be empty to de-register a device |

#### DeviceTokenWebPush
A token for web Push API


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenWebPush" | |
| `endpoint` | string | Absolute URL exposed by the push service where the application server can send push messages; may be empty to de-register a device |
| `p256DhBase64Url` | string | Base64url-encoded P-256 elliptic curve Diffie-Hellman public key |
| `authBase64Url` | string | Base64url-encoded authentication secret |

#### DeviceTokenSimplePush
A token for Simple Push API for Firefox OS


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenSimplePush" | |
| `endpoint` | string | Absolute URL exposed by the push service where the application server can send push messages; may be empty to de-register a device |

#### DeviceTokenUbuntuPush
A token for Ubuntu Push Client service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenUbuntuPush" | |
| `token` | string | Token; may be empty to de-register a device |

#### DeviceTokenBlackBerryPush
A token for BlackBerry Push Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenBlackBerryPush" | |
| `token` | string | Token; may be empty to de-register a device |

#### DeviceTokenTizenPush
A token for Tizen Push Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenTizenPush" | |
| `regId` | string | Push service registration identifier; may be empty to de-register a device |


## EmailAddressAuthenticationCodeInfoUnion
It's an alias for the `EmailAddressAuthenticationCodeInfo` type.
#### EmailAddressAuthenticationCodeInfo
Information about the email address authentication code that was sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "emailAddressAuthenticationCodeInfo" | |
| `emailAddressPattern` | string | Pattern of the email address to which an authentication code was sent |
| `length` | number | Length of the code; 0 if unknown |


## ErrorUnion
It's an alias for the `Error` type.
#### Error
An object of this type can be returned on every function call, in case of an error


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "error" | |
| `code` | number | Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user |
| `message` | string | Error message; subject to future changes |


## FileUnion
It's an alias for the `File` type.
#### File
Represents a file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "file" | |
| `id` | number | Unique file identifier |
| `size` | number | File size; 0 if unknown |
| `expectedSize` | number | Expected file size in case the exact file size is unknown, but an approximate size is known. Can be used to show download/upload progress |
| `local` | [LocalFile](#localfile) | Information about the local copy of the file |
| `remote` | [RemoteFile](#remotefile) | Information about the remote copy of the file |


## FileTypeUnion
Represents the type of a file
- [`FileTypeNone`](#filetypenone)
- [`FileTypeAnimation`](#filetypeanimation)
- [`FileTypeAudio`](#filetypeaudio)
- [`FileTypeDocument`](#filetypedocument)
- [`FileTypePhoto`](#filetypephoto)
- [`FileTypeProfilePhoto`](#filetypeprofilephoto)
- [`FileTypeSecret`](#filetypesecret)
- [`FileTypeSecretThumbnail`](#filetypesecretthumbnail)
- [`FileTypeSecure`](#filetypesecure)
- [`FileTypeSticker`](#filetypesticker)
- [`FileTypeThumbnail`](#filetypethumbnail)
- [`FileTypeUnknown`](#filetypeunknown)
- [`FileTypeVideo`](#filetypevideo)
- [`FileTypeVideoNote`](#filetypevideonote)
- [`FileTypeVoiceNote`](#filetypevoicenote)
- [`FileTypeWallpaper`](#filetypewallpaper)
#### FileTypeNone
The data is not a file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeNone" | |

#### FileTypeAnimation
The file is an animation


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeAnimation" | |

#### FileTypeAudio
The file is an audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeAudio" | |

#### FileTypeDocument
The file is a document


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeDocument" | |

#### FileTypePhoto
The file is a photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypePhoto" | |

#### FileTypeProfilePhoto
The file is a profile photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeProfilePhoto" | |

#### FileTypeSecret
The file was sent to a secret chat (the file type is not known to the server)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecret" | |

#### FileTypeSecretThumbnail
The file is a thumbnail of a file from a secret chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecretThumbnail" | |

#### FileTypeSecure
The file is a file from Secure storage used for storing Telegram Passport files


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecure" | |

#### FileTypeSticker
The file is a sticker


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSticker" | |

#### FileTypeThumbnail
The file is a thumbnail of another file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeThumbnail" | |

#### FileTypeUnknown
The file type is not yet known


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeUnknown" | |

#### FileTypeVideo
The file is a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVideo" | |

#### FileTypeVideoNote
The file is a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVideoNote" | |

#### FileTypeVoiceNote
The file is a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVoiceNote" | |

#### FileTypeWallpaper
The file is a wallpaper


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeWallpaper" | |


## FormattedTextUnion
It's an alias for the `FormattedText` type.
#### FormattedText
A text with some entities


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "formattedText" | |
| `text` | string | The text |
| `entities` | [TextEntity[]](#textentity) | Entities contained in the text |


## FoundMessagesUnion
It's an alias for the `FoundMessages` type.
#### FoundMessages
Contains a list of messages found by a search


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "foundMessages" | |
| `messages` | [Message[]](#message) | List of messages |
| `nextFromSearchId` | number &#124; string | Value to pass as from_search_id to get more results |


## GameHighScoresUnion
It's an alias for the `GameHighScores` type.
#### GameHighScores
Contains a list of game high scores


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "gameHighScores" | |
| `scores` | [GameHighScore[]](#gamehighscore) | A list of game high scores |


## HashtagsUnion
It's an alias for the `Hashtags` type.
#### Hashtags
Contains a list of hashtags


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "hashtags" | |
| `hashtags` | string[] | A list of hashtags |


## ImportedContactsUnion
It's an alias for the `ImportedContacts` type.
#### ImportedContacts
Represents the result of an ImportContacts request


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "importedContacts" | |
| `userIds` | number[] | User identifiers of the imported contacts in the same order as they were specified in the request; 0 if the contact is not yet a registered user |
| `importerCount` | number[] | The number of users that imported the corresponding contact; 0 for already registered users or if unavailable |


## InlineKeyboardButtonTypeUnion
Describes the type of an inline keyboard button
- [`InlineKeyboardButtonTypeUrl`](#inlinekeyboardbuttontypeurl)
- [`InlineKeyboardButtonTypeCallback`](#inlinekeyboardbuttontypecallback)
- [`InlineKeyboardButtonTypeCallbackGame`](#inlinekeyboardbuttontypecallbackgame)
- [`InlineKeyboardButtonTypeSwitchInline`](#inlinekeyboardbuttontypeswitchinline)
- [`InlineKeyboardButtonTypeBuy`](#inlinekeyboardbuttontypebuy)
#### InlineKeyboardButtonTypeUrl
A button that opens a specified URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeUrl" | |
| `url` | string | HTTP or tg:// URL to open |

#### InlineKeyboardButtonTypeCallback
A button that sends a special callback query to a bot


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeCallback" | |
| `data` | string | Data to be sent to the bot via a callback query |

#### InlineKeyboardButtonTypeCallbackGame
A button with a game that sends a special callback query to a bot. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageGame


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeCallbackGame" | |

#### InlineKeyboardButtonTypeSwitchInline
A button that forces an inline query to the bot to be inserted in the input field


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeSwitchInline" | |
| `query` | string | Inline query to be sent to the bot |
| `inCurrentChat` | boolean | True, if the inline query should be sent from the current chat |

#### InlineKeyboardButtonTypeBuy
A button to buy something. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageInvoice


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeBuy" | |


## InlineQueryResultUnion
Represents a single result of an inline query
- [`InlineQueryResultArticle`](#inlinequeryresultarticle)
- [`InlineQueryResultContact`](#inlinequeryresultcontact)
- [`InlineQueryResultLocation`](#inlinequeryresultlocation)
- [`InlineQueryResultVenue`](#inlinequeryresultvenue)
- [`InlineQueryResultGame`](#inlinequeryresultgame)
- [`InlineQueryResultAnimation`](#inlinequeryresultanimation)
- [`InlineQueryResultAudio`](#inlinequeryresultaudio)
- [`InlineQueryResultDocument`](#inlinequeryresultdocument)
- [`InlineQueryResultPhoto`](#inlinequeryresultphoto)
- [`InlineQueryResultSticker`](#inlinequeryresultsticker)
- [`InlineQueryResultVideo`](#inlinequeryresultvideo)
- [`InlineQueryResultVoiceNote`](#inlinequeryresultvoicenote)
#### InlineQueryResultArticle
Represents a link to an article or web page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultArticle" | |
| `id` | string | Unique identifier of the query result |
| `url` | string | URL of the result, if it exists |
| `hideUrl` | boolean | True, if the URL must be not shown |
| `title` | string | Title of the result |
| `description` | string | A short description of the result |
| `thumbnail` | [PhotoSize](#photosize) | Result thumbnail; may be null |

#### InlineQueryResultContact
Represents a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultContact" | |
| `id` | string | Unique identifier of the query result |
| `contact` | [Contact](#contact) | A user contact |
| `thumbnail` | [PhotoSize](#photosize) | Result thumbnail; may be null |

#### InlineQueryResultLocation
Represents a point on the map


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultLocation" | |
| `id` | string | Unique identifier of the query result |
| `location` | [Location](#location) | Location result |
| `title` | string | Title of the result |
| `thumbnail` | [PhotoSize](#photosize) | Result thumbnail; may be null |

#### InlineQueryResultVenue
Represents information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultVenue" | |
| `id` | string | Unique identifier of the query result |
| `venue` | [Venue](#venue) | Venue result |
| `thumbnail` | [PhotoSize](#photosize) | Result thumbnail; may be null |

#### InlineQueryResultGame
Represents information about a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultGame" | |
| `id` | string | Unique identifier of the query result |
| `game` | [Game](#game) | Game result |

#### InlineQueryResultAnimation
Represents an animation file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultAnimation" | |
| `id` | string | Unique identifier of the query result |
| `animation` | [Animation](#animation) | Animation file |
| `title` | string | Animation title |

#### InlineQueryResultAudio
Represents an audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultAudio" | |
| `id` | string | Unique identifier of the query result |
| `audio` | [Audio](#audio) | Audio file |

#### InlineQueryResultDocument
Represents a document


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultDocument" | |
| `id` | string | Unique identifier of the query result |
| `document` | [Document](#document) | Document |
| `title` | string | Document title |
| `description` | string | Document description |

#### InlineQueryResultPhoto
Represents a photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultPhoto" | |
| `id` | string | Unique identifier of the query result |
| `photo` | [Photo](#photo) | Photo |
| `title` | string | Title of the result, if known |
| `description` | string | A short description of the result, if known |

#### InlineQueryResultSticker
Represents a sticker


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultSticker" | |
| `id` | string | Unique identifier of the query result |
| `sticker` | [Sticker](#sticker) | Sticker |

#### InlineQueryResultVideo
Represents a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultVideo" | |
| `id` | string | Unique identifier of the query result |
| `video` | [Video](#video) | Video |
| `title` | string | Title of the video |
| `description` | string | Description of the video |

#### InlineQueryResultVoiceNote
Represents a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResultVoiceNote" | |
| `id` | string | Unique identifier of the query result |
| `voiceNote` | [VoiceNote](#voicenote) | Voice note |
| `title` | string | Title of the voice note |


## InlineQueryResultsUnion
It's an alias for the `InlineQueryResults` type.
#### InlineQueryResults
Represents the results of the inline query. Use sendInlineQueryResultMessage to send the result of the query


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineQueryResults" | |
| `inlineQueryId` | number &#124; string | Unique identifier of the inline query |
| `nextOffset` | string | The offset for the next request. If empty, there are no more results |
| `results` | [InlineQueryResultUnion[]](#inlinequeryresultunion) | Results of the query |
| `switchPmText` | string | If non-empty, this text should be shown on the button, which opens a private chat with the bot and sends the bot a start message with the switch_pm_parameter |
| `switchPmParameter` | string | Parameter for the bot start message |


## InputCredentialsUnion
Contains information about the payment method chosen by the user
- [`InputCredentialsSaved`](#inputcredentialssaved)
- [`InputCredentialsNew`](#inputcredentialsnew)
- [`InputCredentialsAndroidPay`](#inputcredentialsandroidpay)
- [`InputCredentialsApplePay`](#inputcredentialsapplepay)
#### InputCredentialsSaved
Applies if a user chooses some previously saved payment credentials. To use their previously saved credentials, the user must have a valid temporary password


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsSaved" | |
| `savedCredentialsId` | string | Identifier of the saved credentials |

#### InputCredentialsNew
Applies if a user enters new credentials on a payment provider website


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsNew" | |
| `data` | string | Contains JSON-encoded data with a credential identifier from the payment provider |
| `allowSave` | boolean | True, if the credential identifier can be saved on the server side |

#### InputCredentialsAndroidPay
Applies if a user enters new credentials using Android Pay


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsAndroidPay" | |
| `data` | string | JSON-encoded data with the credential identifier |

#### InputCredentialsApplePay
Applies if a user enters new credentials using Apple Pay


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsApplePay" | |
| `data` | string | JSON-encoded data with the credential identifier |


## InputFileUnion
Points to a file
- [`InputFileId`](#inputfileid)
- [`InputFileRemote`](#inputfileremote)
- [`InputFileLocal`](#inputfilelocal)
- [`InputFileGenerated`](#inputfilegenerated)
#### InputFileId
A file defined by its unique ID


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileId" | |
| `id` | number | Unique file identifier |

#### InputFileRemote
A file defined by its remote ID


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileRemote" | |
| `id` | string | Remote file identifier |

#### InputFileLocal
A file defined by a local path


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileLocal" | |
| `path` | string | Local path to the file |

#### InputFileGenerated
A file generated by the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileGenerated" | |
| `originalPath` | string | Local path to a file from which the file is generated; may be empty if there is no such file |
| `conversion` | string | String specifying the conversion applied to the original file; should be persistent across application restarts |
| `expectedSize` | number | Expected size of the generated file; 0 if unknown |


## InputInlineQueryResultUnion
Represents a single result of an inline query; for bots only
- [`InputInlineQueryResultAnimatedGif`](#inputinlinequeryresultanimatedgif)
- [`InputInlineQueryResultAnimatedMpeg4`](#inputinlinequeryresultanimatedmpeg4)
- [`InputInlineQueryResultArticle`](#inputinlinequeryresultarticle)
- [`InputInlineQueryResultAudio`](#inputinlinequeryresultaudio)
- [`InputInlineQueryResultContact`](#inputinlinequeryresultcontact)
- [`InputInlineQueryResultDocument`](#inputinlinequeryresultdocument)
- [`InputInlineQueryResultGame`](#inputinlinequeryresultgame)
- [`InputInlineQueryResultLocation`](#inputinlinequeryresultlocation)
- [`InputInlineQueryResultPhoto`](#inputinlinequeryresultphoto)
- [`InputInlineQueryResultSticker`](#inputinlinequeryresultsticker)
- [`InputInlineQueryResultVenue`](#inputinlinequeryresultvenue)
- [`InputInlineQueryResultVideo`](#inputinlinequeryresultvideo)
- [`InputInlineQueryResultVoiceNote`](#inputinlinequeryresultvoicenote)
#### InputInlineQueryResultAnimatedGif
Represents a link to an animated GIF


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultAnimatedGif" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the query result |
| `thumbnailUrl` | string | URL of the static result thumbnail (JPEG or GIF), if it exists |
| `gifUrl` | string | The URL of the GIF-file (file size must not exceed 1MB) |
| `gifDuration` | number | Duration of the GIF, in seconds |
| `gifWidth` | number | Width of the GIF |
| `gifHeight` | number | Height of the GIF |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultAnimatedMpeg4
Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultAnimatedMpeg4" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the result |
| `thumbnailUrl` | string | URL of the static result thumbnail (JPEG or GIF), if it exists |
| `mpeg4Url` | string | The URL of the MPEG4-file (file size must not exceed 1MB) |
| `mpeg4Duration` | number | Duration of the video, in seconds |
| `mpeg4Width` | number | Width of the video |
| `mpeg4Height` | number | Height of the video |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultArticle
Represents a link to an article or web page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultArticle" | |
| `id` | string | Unique identifier of the query result |
| `url` | string | URL of the result, if it exists |
| `hideUrl` | boolean | True, if the URL must be not shown |
| `title` | string | Title of the result |
| `description` | string | A short description of the result |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultAudio
Represents a link to an MP3 audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultAudio" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the audio file |
| `performer` | string | Performer of the audio file |
| `audioUrl` | string | The URL of the audio file |
| `audioDuration` | number | Audio file duration, in seconds |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultContact
Represents a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultContact" | |
| `id` | string | Unique identifier of the query result |
| `contact` | [Contact](#contact) | User contact |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultDocument
Represents a link to a file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultDocument" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the resulting file |
| `description` | string | Short description of the result, if known |
| `documentUrl` | string | URL of the file |
| `mimeType` | string | MIME type of the file content; only "application/pdf" and "application/zip" are currently allowed |
| `thumbnailUrl` | string | The URL of the file thumbnail, if it exists |
| `thumbnailWidth` | number | Width of the thumbnail |
| `thumbnailHeight` | number | Height of the thumbnail |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultGame
Represents a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultGame" | |
| `id` | string | Unique identifier of the query result |
| `gameShortName` | string | Short name of the game |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | Message reply markup. Must be of type replyMarkupInlineKeyboard or null |

#### InputInlineQueryResultLocation
Represents a point on the map


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultLocation" | |
| `id` | string | Unique identifier of the query result |
| `location` | [Location](#location) | Location result |
| `livePeriod` | number | Amount of time relative to the message sent time until the location can be updated, in seconds |
| `title` | string | Title of the result |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultPhoto
Represents link to a JPEG image


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultPhoto" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the result, if known |
| `description` | string | A short description of the result, if known |
| `thumbnailUrl` | string | URL of the photo thumbnail, if it exists |
| `photoUrl` | string | The URL of the JPEG photo (photo size must not exceed 5MB) |
| `photoWidth` | number | Width of the photo |
| `photoHeight` | number | Height of the photo |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultSticker
Represents a link to a WEBP sticker


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultSticker" | |
| `id` | string | Unique identifier of the query result |
| `thumbnailUrl` | string | URL of the sticker thumbnail, if it exists |
| `stickerUrl` | string | The URL of the WEBP sticker (sticker file size must not exceed 5MB) |
| `stickerWidth` | number | Width of the sticker |
| `stickerHeight` | number | Height of the sticker |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVenue
Represents information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultVenue" | |
| `id` | string | Unique identifier of the query result |
| `venue` | [Venue](#venue) | Venue result |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVideo
Represents a link to a page containing an embedded video player or a video file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultVideo" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the result |
| `description` | string | A short description of the result, if known |
| `thumbnailUrl` | string | The URL of the video thumbnail (JPEG), if it exists |
| `videoUrl` | string | URL of the embedded video player or video file |
| `mimeType` | string | MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently supported |
| `videoWidth` | number | Width of the video |
| `videoHeight` | number | Height of the video |
| `videoDuration` | number | Video duration, in seconds |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVoiceNote
Represents a link to an opus-encoded audio file within an OGG container, single channel audio


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultVoiceNote" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the voice note |
| `voiceNoteUrl` | string | The URL of the voice note file |
| `voiceNoteDuration` | number | Duration of the voice note, in seconds |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact |


## InputMessageContentUnion
The content of a message to send
- [`InputMessageText`](#inputmessagetext)
- [`InputMessageAnimation`](#inputmessageanimation)
- [`InputMessageAudio`](#inputmessageaudio)
- [`InputMessageDocument`](#inputmessagedocument)
- [`InputMessagePhoto`](#inputmessagephoto)
- [`InputMessageSticker`](#inputmessagesticker)
- [`InputMessageVideo`](#inputmessagevideo)
- [`InputMessageVideoNote`](#inputmessagevideonote)
- [`InputMessageVoiceNote`](#inputmessagevoicenote)
- [`InputMessageLocation`](#inputmessagelocation)
- [`InputMessageVenue`](#inputmessagevenue)
- [`InputMessageContact`](#inputmessagecontact)
- [`InputMessageGame`](#inputmessagegame)
- [`InputMessageInvoice`](#inputmessageinvoice)
- [`InputMessageForwarded`](#inputmessageforwarded)
#### InputMessageText
A text message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageText" | |
| `text` | [FormattedText](#formattedtext) | Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified manually |
| `disableWebPagePreview` | boolean | True, if rich web page previews for URLs in the message text should be disabled |
| `clearDraft` | boolean | True, if a chat message draft should be deleted |

#### InputMessageAnimation
An animation message (GIF-style).


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageAnimation" | |
| `animation` | [InputFileUnion](#inputfileunion) | Animation file to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Animation thumbnail, if available |
| `duration` | number | Duration of the animation, in seconds |
| `width` | number | Width of the animation; may be replaced by the server |
| `height` | number | Height of the animation; may be replaced by the server |
| `caption` | [FormattedText](#formattedtext) | Animation caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageAudio
An audio message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageAudio" | |
| `audio` | [InputFileUnion](#inputfileunion) | Audio file to be sent |
| `albumCoverThumbnail` | [InputThumbnail](#inputthumbnail) | Thumbnail of the cover for the album, if available |
| `duration` | number | Duration of the audio, in seconds; may be replaced by the server |
| `title` | string | Title of the audio; 0-64 characters; may be replaced by the server |
| `performer` | string | Performer of the audio; 0-64 characters, may be replaced by the server |
| `caption` | [FormattedText](#formattedtext) | Audio caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageDocument
A document message (general file)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageDocument" | |
| `document` | [InputFileUnion](#inputfileunion) | Document to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Document thumbnail, if available |
| `caption` | [FormattedText](#formattedtext) | Document caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessagePhoto
A photo message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessagePhoto" | |
| `photo` | [InputFileUnion](#inputfileunion) | Photo to send |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Photo thumbnail to be sent, this is sent to the other party in secret chats only |
| `addedStickerFileIds` | number[] | File identifiers of the stickers added to the photo, if applicable |
| `width` | number | Photo width |
| `height` | number | Photo height |
| `caption` | [FormattedText](#formattedtext) | Photo caption; 0-GetOption("message_caption_length_max") characters |
| `ttl` | number | Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats |

#### InputMessageSticker
A sticker message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageSticker" | |
| `sticker` | [InputFileUnion](#inputfileunion) | Sticker to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Sticker thumbnail, if available |
| `width` | number | Sticker width |
| `height` | number | Sticker height |

#### InputMessageVideo
A video message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVideo" | |
| `video` | [InputFileUnion](#inputfileunion) | Video to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Video thumbnail, if available |
| `addedStickerFileIds` | number[] | File identifiers of the stickers added to the video, if applicable |
| `duration` | number | Duration of the video, in seconds |
| `width` | number | Video width |
| `height` | number | Video height |
| `supportsStreaming` | boolean | True, if the video should be tried to be streamed |
| `caption` | [FormattedText](#formattedtext) | Video caption; 0-GetOption("message_caption_length_max") characters |
| `ttl` | number | Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats |

#### InputMessageVideoNote
A video note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVideoNote" | |
| `videoNote` | [InputFileUnion](#inputfileunion) | Video note to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnail) | Video thumbnail, if available |
| `duration` | number | Duration of the video, in seconds |
| `length` | number | Video width and height; must be positive and not greater than 640 |

#### InputMessageVoiceNote
A voice note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVoiceNote" | |
| `voiceNote` | [InputFileUnion](#inputfileunion) | Voice note to be sent |
| `duration` | number | Duration of the voice note, in seconds |
| `waveform` | string | Waveform representation of the voice note, in 5-bit format |
| `caption` | [FormattedText](#formattedtext) | Voice note caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageLocation
A message with a location


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageLocation" | |
| `location` | [Location](#location) | Location to be sent |
| `livePeriod` | number | Period for which the location can be updated, in seconds; should bebetween 60 and 86400 for a live location and 0 otherwise |

#### InputMessageVenue
A message with information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVenue" | |
| `venue` | [Venue](#venue) | Venue to send |

#### InputMessageContact
A message containing a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageContact" | |
| `contact` | [Contact](#contact) | Contact to send |

#### InputMessageGame
A message with a game; not supported for channels or secret chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageGame" | |
| `botUserId` | number | User identifier of the bot that owns the game |
| `gameShortName` | string | Short name of the game |

#### InputMessageInvoice
A message with an invoice; can be used only by bots and only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageInvoice" | |
| `invoice` | [Invoice](#invoice) | Invoice |
| `title` | string | Product title; 1-32 characters |
| `description` | string | Product description; 0-255 characters |
| `photoUrl` | string | Product photo URL; optional |
| `photoSize` | number | Product photo size |
| `photoWidth` | number | Product photo width |
| `photoHeight` | number | Product photo height |
| `payload` | string | The invoice payload |
| `providerToken` | string | Payment provider token |
| `providerData` | string | JSON-encoded data about the invoice, which will be shared with the payment provider |
| `startParameter` | string | Unique invoice bot start_parameter for the generation of this invoice |

#### InputMessageForwarded
A forwarded message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageForwarded" | |
| `fromChatId` | number | Identifier for the chat this forwarded message came from |
| `messageId` | number | Identifier of the message to forward |
| `inGameShare` | boolean | True, if a game message should be shared within a launched game; applies only to game messages |


## InputPassportElementUnion
Contains information about a Telegram Passport element to be saved
- [`InputPassportElementPersonalDetails`](#inputpassportelementpersonaldetails)
- [`InputPassportElementPassport`](#inputpassportelementpassport)
- [`InputPassportElementDriverLicense`](#inputpassportelementdriverlicense)
- [`InputPassportElementIdentityCard`](#inputpassportelementidentitycard)
- [`InputPassportElementInternalPassport`](#inputpassportelementinternalpassport)
- [`InputPassportElementAddress`](#inputpassportelementaddress)
- [`InputPassportElementUtilityBill`](#inputpassportelementutilitybill)
- [`InputPassportElementBankStatement`](#inputpassportelementbankstatement)
- [`InputPassportElementRentalAgreement`](#inputpassportelementrentalagreement)
- [`InputPassportElementPassportRegistration`](#inputpassportelementpassportregistration)
- [`InputPassportElementTemporaryRegistration`](#inputpassportelementtemporaryregistration)
- [`InputPassportElementPhoneNumber`](#inputpassportelementphonenumber)
- [`InputPassportElementEmailAddress`](#inputpassportelementemailaddress)
#### InputPassportElementPersonalDetails
A Telegram Passport element to be saved containing the user's personal details


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPersonalDetails" | |
| `personalDetails` | [PersonalDetails](#personaldetails) | Personal details of the user |

#### InputPassportElementPassport
A Telegram Passport element to be saved containing the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPassport" | |
| `passport` | [InputIdentityDocument](#inputidentitydocument) | The passport to be saved |

#### InputPassportElementDriverLicense
A Telegram Passport element to be saved containing the user's driver license


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementDriverLicense" | |
| `driverLicense` | [InputIdentityDocument](#inputidentitydocument) | The driver license to be saved |

#### InputPassportElementIdentityCard
A Telegram Passport element to be saved containing the user's identity card


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementIdentityCard" | |
| `identityCard` | [InputIdentityDocument](#inputidentitydocument) | The identity card to be saved |

#### InputPassportElementInternalPassport
A Telegram Passport element to be saved containing the user's internal passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementInternalPassport" | |
| `internalPassport` | [InputIdentityDocument](#inputidentitydocument) | The internal passport to be saved |

#### InputPassportElementAddress
A Telegram Passport element to be saved containing the user's address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementAddress" | |
| `address` | [Address](#address) | The address to be saved |

#### InputPassportElementUtilityBill
A Telegram Passport element to be saved containing the user's utility bill


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementUtilityBill" | |
| `utilityBill` | [InputPersonalDocument](#inputpersonaldocument) | The utility bill to be saved |

#### InputPassportElementBankStatement
A Telegram Passport element to be saved containing the user's bank statement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementBankStatement" | |
| `bankStatement` | [InputPersonalDocument](#inputpersonaldocument) | The bank statement to be saved |

#### InputPassportElementRentalAgreement
A Telegram Passport element to be saved containing the user's rental agreement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementRentalAgreement" | |
| `rentalAgreement` | [InputPersonalDocument](#inputpersonaldocument) | The rental agreement to be saved |

#### InputPassportElementPassportRegistration
A Telegram Passport element to be saved containing the user's passport registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPassportRegistration" | |
| `passportRegistration` | [InputPersonalDocument](#inputpersonaldocument) | The passport registration page to be saved |

#### InputPassportElementTemporaryRegistration
A Telegram Passport element to be saved containing the user's temporary registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementTemporaryRegistration" | |
| `temporaryRegistration` | [InputPersonalDocument](#inputpersonaldocument) | The temporary registration document to be saved |

#### InputPassportElementPhoneNumber
A Telegram Passport element to be saved containing the user's phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPhoneNumber" | |
| `phoneNumber` | string | The phone number to be saved |

#### InputPassportElementEmailAddress
A Telegram Passport element to be saved containing the user's email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementEmailAddress" | |
| `emailAddress` | string | The email address to be saved |


## InputPassportElementErrorSourceUnion
Contains the description of an error in a Telegram Passport element; for bots only
- [`InputPassportElementErrorSourceUnspecified`](#inputpassportelementerrorsourceunspecified)
- [`InputPassportElementErrorSourceDataField`](#inputpassportelementerrorsourcedatafield)
- [`InputPassportElementErrorSourceFrontSide`](#inputpassportelementerrorsourcefrontside)
- [`InputPassportElementErrorSourceReverseSide`](#inputpassportelementerrorsourcereverseside)
- [`InputPassportElementErrorSourceSelfie`](#inputpassportelementerrorsourceselfie)
- [`InputPassportElementErrorSourceTranslationFile`](#inputpassportelementerrorsourcetranslationfile)
- [`InputPassportElementErrorSourceTranslationFiles`](#inputpassportelementerrorsourcetranslationfiles)
- [`InputPassportElementErrorSourceFile`](#inputpassportelementerrorsourcefile)
- [`InputPassportElementErrorSourceFiles`](#inputpassportelementerrorsourcefiles)
#### InputPassportElementErrorSourceUnspecified
The element contains an error in an unspecified place. The error will be considered resolved when new data is added


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceUnspecified" | |
| `elementHash` | string | Current hash of the entire element |

#### InputPassportElementErrorSourceDataField
A data field contains an error. The error is considered resolved when the field's value changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceDataField" | |
| `fieldName` | string | Field name |
| `dataHash` | string | Current data hash |

#### InputPassportElementErrorSourceFrontSide
The front side of the document contains an error. The error is considered resolved when the file with the front side of the document changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFrontSide" | |
| `fileHash` | string | Current hash of the file containing the front side |

#### InputPassportElementErrorSourceReverseSide
The reverse side of the document contains an error. The error is considered resolved when the file with the reverse side of the document changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceReverseSide" | |
| `fileHash` | string | Current hash of the file containing the reverse side |

#### InputPassportElementErrorSourceSelfie
The selfie contains an error. The error is considered resolved when the file with the selfie changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceSelfie" | |
| `fileHash` | string | Current hash of the file containing the selfie |

#### InputPassportElementErrorSourceTranslationFile
One of the files containing the translation of the document contains an error. The error is considered resolved when the file with the translation changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceTranslationFile" | |
| `fileHash` | string | Current hash of the file containing the translation |

#### InputPassportElementErrorSourceTranslationFiles
The translation of the document contains an error. The error is considered resolved when the list of files changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceTranslationFiles" | |
| `fileHashes` | string[] | Current hashes of all files with the translation |

#### InputPassportElementErrorSourceFile
The file contains an error. The error is considered resolved when the file changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFile" | |
| `fileHash` | string | Current hash of the file which has the error |

#### InputPassportElementErrorSourceFiles
The list of attached files contains an error. The error is considered resolved when the file list changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFiles" | |
| `fileHashes` | string[] | Current hashes of all attached files |


## KeyboardButtonTypeUnion
Describes a keyboard button type
- [`KeyboardButtonTypeText`](#keyboardbuttontypetext)
- [`KeyboardButtonTypeRequestPhoneNumber`](#keyboardbuttontyperequestphonenumber)
- [`KeyboardButtonTypeRequestLocation`](#keyboardbuttontyperequestlocation)
#### KeyboardButtonTypeText
A simple button, with text that should be sent when the button is pressed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeText" | |

#### KeyboardButtonTypeRequestPhoneNumber
A button that sends the user's phone number when pressed; available only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeRequestPhoneNumber" | |

#### KeyboardButtonTypeRequestLocation
A button that sends the user's location when pressed; available only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeRequestLocation" | |


## LanguagePackStringValueUnion
Represents the value of a string in a language pack
- [`LanguagePackStringValueOrdinary`](#languagepackstringvalueordinary)
- [`LanguagePackStringValuePluralized`](#languagepackstringvaluepluralized)
- [`LanguagePackStringValueDeleted`](#languagepackstringvaluedeleted)
#### LanguagePackStringValueOrdinary
An ordinary language pack string


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStringValueOrdinary" | |
| `value` | string | String value |

#### LanguagePackStringValuePluralized
A language pack string which has different forms based on the number of some object it mentions


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStringValuePluralized" | |
| `zeroValue` | string | Value for zero objects |
| `oneValue` | string | Value for one object |
| `twoValue` | string | Value for two objects |
| `fewValue` | string | Value for few objects |
| `manyValue` | string | Value for many objects |
| `otherValue` | string | Default value |

#### LanguagePackStringValueDeleted
A deleted language pack string, the value should be taken from the built-in english language pack


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStringValueDeleted" | |


## LanguagePackStringsUnion
It's an alias for the `LanguagePackStrings` type.
#### LanguagePackStrings
Contains a list of language pack strings


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStrings" | |
| `strings` | [LanguagePackString[]](#languagepackstring) | A list of language pack strings |


## LinkStateUnion
Represents the relationship between user A and user B. For incoming_link, user A is the current user; for outgoing_link, user B is the current user
- [`LinkStateNone`](#linkstatenone)
- [`LinkStateKnowsPhoneNumber`](#linkstateknowsphonenumber)
- [`LinkStateIsContact`](#linkstateiscontact)
#### LinkStateNone
The phone number of user A is not known to user B


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "linkStateNone" | |

#### LinkStateKnowsPhoneNumber
The phone number of user A is known but that number has not been saved to the contacts list of user B


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "linkStateKnowsPhoneNumber" | |

#### LinkStateIsContact
The phone number of user A has been saved to the contacts list of user B


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "linkStateIsContact" | |


## LocalizationTargetInfoUnion
It's an alias for the `LocalizationTargetInfo` type.
#### LocalizationTargetInfo
Contains information about the current localization target


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "localizationTargetInfo" | |
| `languagePacks` | [LanguagePackInfo[]](#languagepackinfo) | List of available language packs for this application |


## MaskPointUnion
Part of the face, relative to which a mask should be placed
- [`MaskPointForehead`](#maskpointforehead)
- [`MaskPointEyes`](#maskpointeyes)
- [`MaskPointMouth`](#maskpointmouth)
- [`MaskPointChin`](#maskpointchin)
#### MaskPointForehead
A mask should be placed relatively to the forehead


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointForehead" | |

#### MaskPointEyes
A mask should be placed relatively to the eyes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointEyes" | |

#### MaskPointMouth
A mask should be placed relatively to the mouth


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointMouth" | |

#### MaskPointChin
A mask should be placed relatively to the chin


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointChin" | |


## MessageUnion
It's an alias for the `Message` type.
#### Message
Describes a message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "message" | |
| `id` | number | Message identifier, unique for the chat to which the message belongs |
| `senderUserId` | number | Identifier of the user who sent the message; 0 if unknown. It is unknown for channel posts |
| `chatId` | number | Chat identifier |
| `sendingState` | [MessageSendingStateUnion](#messagesendingstateunion) | Information about the sending state of the message; may be null |
| `isOutgoing` | boolean | True, if the message is outgoing |
| `canBeEdited` | boolean | True, if the message can be edited |
| `canBeForwarded` | boolean | True, if the message can be forwarded |
| `canBeDeletedOnlyForSelf` | boolean | True, if the message can be deleted only for the current user while other users will continue to see it |
| `canBeDeletedForAllUsers` | boolean | True, if the message can be deleted for all users |
| `isChannelPost` | boolean | True, if the message is a channel post. All messages to channels are channel posts, all other messages are not channel posts |
| `containsUnreadMention` | boolean | True, if the message contains an unread mention for the current user |
| `date` | number | Point in time (Unix timestamp) when the message was sent |
| `editDate` | number | Point in time (Unix timestamp) when the message was last edited |
| `forwardInfo` | [MessageForwardInfoUnion](#messageforwardinfounion) | Information about the initial message sender; may be null |
| `replyToMessageId` | number | If non-zero, the identifier of the message this message is replying to; can be the identifier of a deleted message |
| `ttl` | number | For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires |
| `ttlExpiresIn` | number | Time left before the message expires, in seconds |
| `viaBotUserId` | number | If non-zero, the user identifier of the bot through which this message was sent |
| `authorSignature` | string | For channel posts, optional author signature |
| `views` | number | Number of times this message was viewed |
| `mediaAlbumId` | number &#124; string | Unique identifier of an album this message belongs to. Only photos and videos can be grouped together in albums |
| `content` | [MessageContentUnion](#messagecontentunion) | Content of the message |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | Reply markup for the message; may be null |


## MessageContentUnion
Contains the content of a message
- [`MessageText`](#messagetext)
- [`MessageAnimation`](#messageanimation)
- [`MessageAudio`](#messageaudio)
- [`MessageDocument`](#messagedocument)
- [`MessagePhoto`](#messagephoto)
- [`MessageExpiredPhoto`](#messageexpiredphoto)
- [`MessageSticker`](#messagesticker)
- [`MessageVideo`](#messagevideo)
- [`MessageExpiredVideo`](#messageexpiredvideo)
- [`MessageVideoNote`](#messagevideonote)
- [`MessageVoiceNote`](#messagevoicenote)
- [`MessageLocation`](#messagelocation)
- [`MessageVenue`](#messagevenue)
- [`MessageContact`](#messagecontact)
- [`MessageGame`](#messagegame)
- [`MessageInvoice`](#messageinvoice)
- [`MessageCall`](#messagecall)
- [`MessageBasicGroupChatCreate`](#messagebasicgroupchatcreate)
- [`MessageSupergroupChatCreate`](#messagesupergroupchatcreate)
- [`MessageChatChangeTitle`](#messagechatchangetitle)
- [`MessageChatChangePhoto`](#messagechatchangephoto)
- [`MessageChatDeletePhoto`](#messagechatdeletephoto)
- [`MessageChatAddMembers`](#messagechataddmembers)
- [`MessageChatJoinByLink`](#messagechatjoinbylink)
- [`MessageChatDeleteMember`](#messagechatdeletemember)
- [`MessageChatUpgradeTo`](#messagechatupgradeto)
- [`MessageChatUpgradeFrom`](#messagechatupgradefrom)
- [`MessagePinMessage`](#messagepinmessage)
- [`MessageScreenshotTaken`](#messagescreenshottaken)
- [`MessageChatSetTtl`](#messagechatsetttl)
- [`MessageCustomServiceAction`](#messagecustomserviceaction)
- [`MessageGameScore`](#messagegamescore)
- [`MessagePaymentSuccessful`](#messagepaymentsuccessful)
- [`MessagePaymentSuccessfulBot`](#messagepaymentsuccessfulbot)
- [`MessageContactRegistered`](#messagecontactregistered)
- [`MessageWebsiteConnected`](#messagewebsiteconnected)
- [`MessagePassportDataSent`](#messagepassportdatasent)
- [`MessagePassportDataReceived`](#messagepassportdatareceived)
- [`MessageUnsupported`](#messageunsupported)
#### MessageText
A text message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageText" | |
| `text` | [FormattedText](#formattedtext) | Text of the message |
| `webPage` | [WebPage](#webpage) | A preview of the web page that's mentioned in the text; may be null |

#### MessageAnimation
An animation message (GIF-style).


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageAnimation" | |
| `animation` | [Animation](#animation) | Message content |
| `caption` | [FormattedText](#formattedtext) | Animation caption |
| `isSecret` | boolean | True, if the animation thumbnail must be blurred and the animation must be shown only while tapped |

#### MessageAudio
An audio message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageAudio" | |
| `audio` | [Audio](#audio) | Message content |
| `caption` | [FormattedText](#formattedtext) | Audio caption |

#### MessageDocument
A document message (general file)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageDocument" | |
| `document` | [Document](#document) | Message content |
| `caption` | [FormattedText](#formattedtext) | Document caption |

#### MessagePhoto
A photo message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePhoto" | |
| `photo` | [Photo](#photo) | Message content |
| `caption` | [FormattedText](#formattedtext) | Photo caption |
| `isSecret` | boolean | True, if the photo must be blurred and must be shown only while tapped |

#### MessageExpiredPhoto
An expired photo message (self-destructed after TTL has elapsed)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageExpiredPhoto" | |

#### MessageSticker
A sticker message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageSticker" | |
| `sticker` | [Sticker](#sticker) | Message content |

#### MessageVideo
A video message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageVideo" | |
| `video` | [Video](#video) | Message content |
| `caption` | [FormattedText](#formattedtext) | Video caption |
| `isSecret` | boolean | True, if the video thumbnail must be blurred and the video must be shown only while tapped |

#### MessageExpiredVideo
An expired video message (self-destructed after TTL has elapsed)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageExpiredVideo" | |

#### MessageVideoNote
A video note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageVideoNote" | |
| `videoNote` | [VideoNote](#videonote) | Message content |
| `isViewed` | boolean | True, if at least one of the recipients has viewed the video note |
| `isSecret` | boolean | True, if the video note thumbnail must be blurred and the video note must be shown only while tapped |

#### MessageVoiceNote
A voice note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageVoiceNote" | |
| `voiceNote` | [VoiceNote](#voicenote) | Message content |
| `caption` | [FormattedText](#formattedtext) | Voice note caption |
| `isListened` | boolean | True, if at least one of the recipients has listened to the voice note |

#### MessageLocation
A message with a location


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageLocation" | |
| `location` | [Location](#location) | Message content |
| `livePeriod` | number | Time relative to the message sent date until which the location can be updated, in seconds |
| `expiresIn` | number | Left time for which the location can be updated, in seconds. updateMessageContent is not sent when this field changes |

#### MessageVenue
A message with information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageVenue" | |
| `venue` | [Venue](#venue) | Message content |

#### MessageContact
A message with a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageContact" | |
| `contact` | [Contact](#contact) | Message content |

#### MessageGame
A message with a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageGame" | |
| `game` | [Game](#game) | Game |

#### MessageInvoice
A message with an invoice from a bot


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageInvoice" | |
| `title` | string | Product title |
| `description` | string | Product description |
| `photo` | [Photo](#photo) | Product photo; may be null |
| `currency` | string | Currency for the product price |
| `totalAmount` | number | Product total price in the minimal quantity of the currency |
| `startParameter` | string | Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} |
| `isTest` | boolean | True, if the invoice is a test invoice |
| `needShippingAddress` | boolean | True, if the shipping address should be specified |
| `receiptMessageId` | number | The identifier of the message with the receipt, after the product has been purchased |

#### MessageCall
A message with information about an ended call


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageCall" | |
| `discardReason` | [CallDiscardReasonUnion](#calldiscardreasonunion) | Reason why the call was discarded |
| `duration` | number | Call duration, in seconds |

#### MessageBasicGroupChatCreate
A newly created basic group


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageBasicGroupChatCreate" | |
| `title` | string | Title of the basic group |
| `memberUserIds` | number[] | User identifiers of members in the basic group |

#### MessageSupergroupChatCreate
A newly created supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageSupergroupChatCreate" | |
| `title` | string | Title of the supergroup or channel |

#### MessageChatChangeTitle
An updated chat title


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatChangeTitle" | |
| `title` | string | New chat title |

#### MessageChatChangePhoto
An updated chat photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatChangePhoto" | |
| `photo` | [Photo](#photo) | New chat photo |

#### MessageChatDeletePhoto
A deleted chat photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatDeletePhoto" | |

#### MessageChatAddMembers
New chat members were added


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatAddMembers" | |
| `memberUserIds` | number[] | User identifiers of the new members |

#### MessageChatJoinByLink
A new member joined the chat by invite link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatJoinByLink" | |

#### MessageChatDeleteMember
A chat member was deleted


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatDeleteMember" | |
| `userId` | number | User identifier of the deleted chat member |

#### MessageChatUpgradeTo
A basic group was upgraded to a supergroup and was deactivated as the result


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatUpgradeTo" | |
| `supergroupId` | number | Identifier of the supergroup to which the basic group was upgraded |

#### MessageChatUpgradeFrom
A supergroup has been created from a basic group


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatUpgradeFrom" | |
| `title` | string | Title of the newly created supergroup |
| `basicGroupId` | number | The identifier of the original basic group |

#### MessagePinMessage
A message has been pinned


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePinMessage" | |
| `messageId` | number | Identifier of the pinned message, can be an identifier of a deleted message |

#### MessageScreenshotTaken
A screenshot of a message in the chat has been taken


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageScreenshotTaken" | |

#### MessageChatSetTtl
The TTL (Time To Live) setting messages in a secret chat has been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageChatSetTtl" | |
| `ttl` | number | New TTL |

#### MessageCustomServiceAction
A non-standard action has happened in the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageCustomServiceAction" | |
| `text` | string | Message text to be shown in the chat |

#### MessageGameScore
A new high score was achieved in a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageGameScore" | |
| `gameMessageId` | number | Identifier of the message with the game, can be an identifier of a deleted message |
| `gameId` | number &#124; string | Identifier of the game, may be different from the games presented in the message with the game |
| `score` | number | New score |

#### MessagePaymentSuccessful
A payment has been completed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePaymentSuccessful" | |
| `invoiceMessageId` | number | Identifier of the message with the corresponding invoice; can be an identifier of a deleted message |
| `currency` | string | Currency for the price of the product |
| `totalAmount` | number | Total price for the product, in the minimal quantity of the currency |

#### MessagePaymentSuccessfulBot
A payment has been completed; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePaymentSuccessfulBot" | |
| `invoiceMessageId` | number | Identifier of the message with the corresponding invoice; can be an identifier of a deleted message |
| `currency` | string | Currency for price of the product |
| `totalAmount` | number | Total price for the product, in the minimal quantity of the currency |
| `invoicePayload` | string | Invoice payload |
| `shippingOptionId` | string | Identifier of the shipping option chosen by the user; may be empty if not applicable |
| `orderInfo` | [OrderInfo](#orderinfo) | Information about the order; may be null |
| `telegramPaymentChargeId` | string | Telegram payment identifier |
| `providerPaymentChargeId` | string | Provider payment identifier |

#### MessageContactRegistered
A contact has registered with Telegram


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageContactRegistered" | |

#### MessageWebsiteConnected
The current user has connected a website by logging in using Telegram Login Widget on it


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageWebsiteConnected" | |
| `domainName` | string | Domain name of the connected website |

#### MessagePassportDataSent
Telegram Passport data has been sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePassportDataSent" | |
| `types` | [PassportElementTypeUnion[]](#passportelementtypeunion) | List of Telegram Passport element types sent |

#### MessagePassportDataReceived
Telegram Passport data has been received; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messagePassportDataReceived" | |
| `elements` | [EncryptedPassportElement[]](#encryptedpassportelement) | List of received Telegram Passport elements |
| `credentials` | [EncryptedCredentials](#encryptedcredentials) | Encrypted data credentials |

#### MessageUnsupported
Message content that is not supported by the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageUnsupported" | |


## MessageForwardInfoUnion
Contains information about the initial sender of a forwarded message
- [`MessageForwardedFromUser`](#messageforwardedfromuser)
- [`MessageForwardedPost`](#messageforwardedpost)
#### MessageForwardedFromUser
The message was originally written by a known user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageForwardedFromUser" | |
| `senderUserId` | number | Identifier of the user that originally sent this message |
| `date` | number | Point in time (Unix timestamp) when the message was originally sent |
| `forwardedFromChatId` | number | For messages forwarded to the chat with the current user (saved messages), the identifier of the chat from which the message was forwarded; 0 if unknown |
| `forwardedFromMessageId` | number | For messages forwarded to the chat with the current user (saved messages) the identifier of the original message from which the new message was forwarded; 0 if unknown |

#### MessageForwardedPost
The message was originally a post in a channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageForwardedPost" | |
| `chatId` | number | Identifier of the chat from which the message was forwarded |
| `authorSignature` | string | Post author signature |
| `date` | number | Point in time (Unix timestamp) when the message was originally sent |
| `messageId` | number | Message identifier of the original message from which the new message was forwarded; 0 if unknown |
| `forwardedFromChatId` | number | For messages forwarded to the chat with the current user (saved messages), the identifier of the chat from which the message was forwarded; 0 if unknown |
| `forwardedFromMessageId` | number | For messages forwarded to the chat with the current user (saved messages), the identifier of the original message from which the new message was forwarded; 0 if unknown |


## MessageSendingStateUnion
Contains information about the sending state of the message
- [`MessageSendingStatePending`](#messagesendingstatepending)
- [`MessageSendingStateFailed`](#messagesendingstatefailed)
#### MessageSendingStatePending
The message is being sent now, but has not yet been delivered to the server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageSendingStatePending" | |

#### MessageSendingStateFailed
The message failed to be sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messageSendingStateFailed" | |


## MessagesUnion
It's an alias for the `Messages` type.
#### Messages
Contains a list of messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "messages" | |
| `totalCount` | number | Approximate total count of messages found |
| `messages` | [Message[]](#message) | List of messages; messages may be null |


## NetworkStatisticsUnion
It's an alias for the `NetworkStatistics` type.
#### NetworkStatistics
A full list of available network statistic entries


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkStatistics" | |
| `sinceDate` | number | Point in time (Unix timestamp) when the app began collecting statistics |
| `entries` | [NetworkStatisticsEntryUnion[]](#networkstatisticsentryunion) | Network statistics entries |


## NetworkStatisticsEntryUnion
Contains statistics about network usage
- [`NetworkStatisticsEntryFile`](#networkstatisticsentryfile)
- [`NetworkStatisticsEntryCall`](#networkstatisticsentrycall)
#### NetworkStatisticsEntryFile
Contains information about the total amount of data that was used to send and receive files


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkStatisticsEntryFile" | |
| `fileType` | [FileTypeUnion](#filetypeunion) | Type of the file the data is part of |
| `networkType` | [NetworkTypeUnion](#networktypeunion) | Type of the network the data was sent through. Call setNetworkType to maintain the actual network type |
| `sentBytes` | number | Total number of bytes sent |
| `receivedBytes` | number | Total number of bytes received |

#### NetworkStatisticsEntryCall
Contains information about the total amount of data that was used for calls


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkStatisticsEntryCall" | |
| `networkType` | [NetworkTypeUnion](#networktypeunion) | Type of the network the data was sent through. Call setNetworkType to maintain the actual network type |
| `sentBytes` | number | Total number of bytes sent |
| `receivedBytes` | number | Total number of bytes received |
| `duration` | number | Total call duration, in seconds |


## NetworkTypeUnion
Represents the type of a network
- [`NetworkTypeNone`](#networktypenone)
- [`NetworkTypeMobile`](#networktypemobile)
- [`NetworkTypeMobileRoaming`](#networktypemobileroaming)
- [`NetworkTypeWiFi`](#networktypewifi)
- [`NetworkTypeOther`](#networktypeother)
#### NetworkTypeNone
The network is not available


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeNone" | |

#### NetworkTypeMobile
A mobile network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeMobile" | |

#### NetworkTypeMobileRoaming
A mobile roaming network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeMobileRoaming" | |

#### NetworkTypeWiFi
A Wi-Fi network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeWiFi" | |

#### NetworkTypeOther
A different network type (e.g., Ethernet network)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeOther" | |


## NotificationSettingsScopeUnion
Describes the types of chats to which notification settings are applied
- [`NotificationSettingsScopePrivateChats`](#notificationsettingsscopeprivatechats)
- [`NotificationSettingsScopeGroupChats`](#notificationsettingsscopegroupchats)
#### NotificationSettingsScopePrivateChats
Notification settings applied to all private and secret chats when the corresponding chat setting has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "notificationSettingsScopePrivateChats" | |

#### NotificationSettingsScopeGroupChats
Notification settings applied to all basic groups, supergroups and channels when the corresponding chat setting has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "notificationSettingsScopeGroupChats" | |


## OkUnion
It's an alias for the `Ok` type.
#### Ok
An object of this type is returned on a successful function call for certain functions


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "ok" | |


## OptionValueUnion
Represents the value of an option
- [`OptionValueBoolean`](#optionvalueboolean)
- [`OptionValueEmpty`](#optionvalueempty)
- [`OptionValueInteger`](#optionvalueinteger)
- [`OptionValueString`](#optionvaluestring)
#### OptionValueBoolean
Boolean option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueBoolean" | |
| `value` | boolean | The value of the option |

#### OptionValueEmpty
An unknown option or an option which has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueEmpty" | |

#### OptionValueInteger
An integer option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueInteger" | |
| `value` | number | The value of the option |

#### OptionValueString
A string option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueString" | |
| `value` | string | The value of the option |


## OrderInfoUnion
It's an alias for the `OrderInfo` type.
#### OrderInfo
Order information


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "orderInfo" | |
| `name` | string | Name of the user |
| `phoneNumber` | string | Phone number of the user |
| `emailAddress` | string | Email address of the user |
| `shippingAddress` | [Address](#address) | Shipping address for this order; may be null |


## PageBlockUnion
Describes a block of an instant view web page
- [`PageBlockTitle`](#pageblocktitle)
- [`PageBlockSubtitle`](#pageblocksubtitle)
- [`PageBlockAuthorDate`](#pageblockauthordate)
- [`PageBlockHeader`](#pageblockheader)
- [`PageBlockSubheader`](#pageblocksubheader)
- [`PageBlockParagraph`](#pageblockparagraph)
- [`PageBlockPreformatted`](#pageblockpreformatted)
- [`PageBlockFooter`](#pageblockfooter)
- [`PageBlockDivider`](#pageblockdivider)
- [`PageBlockAnchor`](#pageblockanchor)
- [`PageBlockList`](#pageblocklist)
- [`PageBlockBlockQuote`](#pageblockblockquote)
- [`PageBlockPullQuote`](#pageblockpullquote)
- [`PageBlockAnimation`](#pageblockanimation)
- [`PageBlockAudio`](#pageblockaudio)
- [`PageBlockPhoto`](#pageblockphoto)
- [`PageBlockVideo`](#pageblockvideo)
- [`PageBlockCover`](#pageblockcover)
- [`PageBlockEmbedded`](#pageblockembedded)
- [`PageBlockEmbeddedPost`](#pageblockembeddedpost)
- [`PageBlockCollage`](#pageblockcollage)
- [`PageBlockSlideshow`](#pageblockslideshow)
- [`PageBlockChatLink`](#pageblockchatlink)
#### PageBlockTitle
The title of a page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockTitle" | |
| `title` | [RichTextUnion](#richtextunion) | Title |

#### PageBlockSubtitle
The subtitle of a page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockSubtitle" | |
| `subtitle` | [RichTextUnion](#richtextunion) | Subtitle |

#### PageBlockAuthorDate
The author and publishing date of a page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockAuthorDate" | |
| `author` | [RichTextUnion](#richtextunion) | Author |
| `publishDate` | number | Point in time (Unix timestamp) when the article was published; 0 if unknown |

#### PageBlockHeader
A header


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockHeader" | |
| `header` | [RichTextUnion](#richtextunion) | Header |

#### PageBlockSubheader
A subheader


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockSubheader" | |
| `subheader` | [RichTextUnion](#richtextunion) | Subheader |

#### PageBlockParagraph
A text paragraph


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockParagraph" | |
| `text` | [RichTextUnion](#richtextunion) | Paragraph text |

#### PageBlockPreformatted
A preformatted text paragraph


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockPreformatted" | |
| `text` | [RichTextUnion](#richtextunion) | Paragraph text |
| `language` | string | Programming language for which the text should be formatted |

#### PageBlockFooter
The footer of a page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockFooter" | |
| `footer` | [RichTextUnion](#richtextunion) | Footer |

#### PageBlockDivider
An empty block separating a page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockDivider" | |

#### PageBlockAnchor
An invisible anchor on a page, which can be used in a URL to open the page from the specified anchor


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockAnchor" | |
| `name` | string | Name of the anchor |

#### PageBlockList
A list of texts


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockList" | |
| `items` | [RichTextUnion[]](#richtextunion) | Texts |
| `isOrdered` | boolean | True, if the items should be marked with numbers |

#### PageBlockBlockQuote
A block quote


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockBlockQuote" | |
| `text` | [RichTextUnion](#richtextunion) | Quote text |
| `caption` | [RichTextUnion](#richtextunion) | Quote caption |

#### PageBlockPullQuote
A pull quote


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockPullQuote" | |
| `text` | [RichTextUnion](#richtextunion) | Quote text |
| `caption` | [RichTextUnion](#richtextunion) | Quote caption |

#### PageBlockAnimation
An animation


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockAnimation" | |
| `animation` | [Animation](#animation) | Animation file; may be null |
| `caption` | [RichTextUnion](#richtextunion) | Animation caption |
| `needAutoplay` | boolean | True, if the animation should be played automatically |

#### PageBlockAudio
An audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockAudio" | |
| `audio` | [Audio](#audio) | Audio file; may be null |
| `caption` | [RichTextUnion](#richtextunion) | Audio file caption |

#### PageBlockPhoto
A photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockPhoto" | |
| `photo` | [Photo](#photo) | Photo file; may be null |
| `caption` | [RichTextUnion](#richtextunion) | Photo caption |

#### PageBlockVideo
A video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockVideo" | |
| `video` | [Video](#video) | Video file; may be null |
| `caption` | [RichTextUnion](#richtextunion) | Video caption |
| `needAutoplay` | boolean | True, if the video should be played automatically |
| `isLooped` | boolean | True, if the video should be looped |

#### PageBlockCover
A page cover


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockCover" | |
| `cover` | [PageBlockUnion](#pageblockunion) | Cover |

#### PageBlockEmbedded
An embedded web page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockEmbedded" | |
| `url` | string | Web page URL, if available |
| `html` | string | HTML-markup of the embedded page |
| `posterPhoto` | [Photo](#photo) | Poster photo, if available; may be null |
| `width` | number | Block width |
| `height` | number | Block height |
| `caption` | [RichTextUnion](#richtextunion) | Block caption |
| `isFullWidth` | boolean | True, if the block should be full width |
| `allowScrolling` | boolean | True, if scrolling should be allowed |

#### PageBlockEmbeddedPost
An embedded post


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockEmbeddedPost" | |
| `url` | string | Web page URL |
| `author` | string | Post author |
| `authorPhoto` | [Photo](#photo) | Post author photo |
| `date` | number | Point in time (Unix timestamp) when the post was created; 0 if unknown |
| `pageBlocks` | [PageBlockUnion[]](#pageblockunion) | Post content |
| `caption` | [RichTextUnion](#richtextunion) | Post caption |

#### PageBlockCollage
A collage


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockCollage" | |
| `pageBlocks` | [PageBlockUnion[]](#pageblockunion) | Collage item contents |
| `caption` | [RichTextUnion](#richtextunion) | Block caption |

#### PageBlockSlideshow
A slideshow


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockSlideshow" | |
| `pageBlocks` | [PageBlockUnion[]](#pageblockunion) | Slideshow item contents |
| `caption` | [RichTextUnion](#richtextunion) | Block caption |

#### PageBlockChatLink
A link to a chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "pageBlockChatLink" | |
| `title` | string | Chat title |
| `photo` | [ChatPhoto](#chatphoto) | Chat photo; may be null |
| `username` | string | Chat username, by which all other information about the chat should be resolved |


## PassportAuthorizationFormUnion
It's an alias for the `PassportAuthorizationForm` type.
#### PassportAuthorizationForm
Contains information about a Telegram Passport authorization form that was requested


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportAuthorizationForm" | |
| `id` | number | Unique identifier of the authorization form |
| `requiredElements` | [PassportRequiredElement[]](#passportrequiredelement) | Information about the Telegram Passport elements that need to be provided to complete the form |
| `elements` | [PassportElementUnion[]](#passportelementunion) | Already available Telegram Passport elements |
| `errors` | [PassportElementError[]](#passportelementerror) | Errors in the elements that are already available |
| `privacyPolicyUrl` | string | URL for the privacy policy of the service; can be empty |


## PassportElementUnion
Contains information about a Telegram Passport element
- [`PassportElementPersonalDetails`](#passportelementpersonaldetails)
- [`PassportElementPassport`](#passportelementpassport)
- [`PassportElementDriverLicense`](#passportelementdriverlicense)
- [`PassportElementIdentityCard`](#passportelementidentitycard)
- [`PassportElementInternalPassport`](#passportelementinternalpassport)
- [`PassportElementAddress`](#passportelementaddress)
- [`PassportElementUtilityBill`](#passportelementutilitybill)
- [`PassportElementBankStatement`](#passportelementbankstatement)
- [`PassportElementRentalAgreement`](#passportelementrentalagreement)
- [`PassportElementPassportRegistration`](#passportelementpassportregistration)
- [`PassportElementTemporaryRegistration`](#passportelementtemporaryregistration)
- [`PassportElementPhoneNumber`](#passportelementphonenumber)
- [`PassportElementEmailAddress`](#passportelementemailaddress)
#### PassportElementPersonalDetails
A Telegram Passport element containing the user's personal details


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementPersonalDetails" | |
| `personalDetails` | [PersonalDetails](#personaldetails) | Personal details of the user |

#### PassportElementPassport
A Telegram Passport element containing the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementPassport" | |
| `passport` | [IdentityDocument](#identitydocument) | Passport |

#### PassportElementDriverLicense
A Telegram Passport element containing the user's driver license


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementDriverLicense" | |
| `driverLicense` | [IdentityDocument](#identitydocument) | Driver license |

#### PassportElementIdentityCard
A Telegram Passport element containing the user's identity card


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementIdentityCard" | |
| `identityCard` | [IdentityDocument](#identitydocument) | Identity card |

#### PassportElementInternalPassport
A Telegram Passport element containing the user's internal passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementInternalPassport" | |
| `internalPassport` | [IdentityDocument](#identitydocument) | Internal passport |

#### PassportElementAddress
A Telegram Passport element containing the user's address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementAddress" | |
| `address` | [Address](#address) | Address |

#### PassportElementUtilityBill
A Telegram Passport element containing the user's utility bill


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementUtilityBill" | |
| `utilityBill` | [PersonalDocument](#personaldocument) | Utility bill |

#### PassportElementBankStatement
A Telegram Passport element containing the user's bank statement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementBankStatement" | |
| `bankStatement` | [PersonalDocument](#personaldocument) | Bank statement |

#### PassportElementRentalAgreement
A Telegram Passport element containing the user's rental agreement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementRentalAgreement" | |
| `rentalAgreement` | [PersonalDocument](#personaldocument) | Rental agreement |

#### PassportElementPassportRegistration
A Telegram Passport element containing the user's passport registration pages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementPassportRegistration" | |
| `passportRegistration` | [PersonalDocument](#personaldocument) | Passport registration pages |

#### PassportElementTemporaryRegistration
A Telegram Passport element containing the user's temporary registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTemporaryRegistration" | |
| `temporaryRegistration` | [PersonalDocument](#personaldocument) | Temporary registration |

#### PassportElementPhoneNumber
A Telegram Passport element containing the user's phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementPhoneNumber" | |
| `phoneNumber` | string | Phone number |

#### PassportElementEmailAddress
A Telegram Passport element containing the user's email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementEmailAddress" | |
| `emailAddress` | string | Email address |


## PassportElementErrorSourceUnion
Contains the description of an error in a Telegram Passport element
- [`PassportElementErrorSourceUnspecified`](#passportelementerrorsourceunspecified)
- [`PassportElementErrorSourceDataField`](#passportelementerrorsourcedatafield)
- [`PassportElementErrorSourceFrontSide`](#passportelementerrorsourcefrontside)
- [`PassportElementErrorSourceReverseSide`](#passportelementerrorsourcereverseside)
- [`PassportElementErrorSourceSelfie`](#passportelementerrorsourceselfie)
- [`PassportElementErrorSourceTranslationFile`](#passportelementerrorsourcetranslationfile)
- [`PassportElementErrorSourceTranslationFiles`](#passportelementerrorsourcetranslationfiles)
- [`PassportElementErrorSourceFile`](#passportelementerrorsourcefile)
- [`PassportElementErrorSourceFiles`](#passportelementerrorsourcefiles)
#### PassportElementErrorSourceUnspecified
The element contains an error in an unspecified place. The error will be considered resolved when new data is added


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceUnspecified" | |

#### PassportElementErrorSourceDataField
One of the data fields contains an error. The error will be considered resolved when the value of the field changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceDataField" | |
| `fieldName` | string | Field name |

#### PassportElementErrorSourceFrontSide
The front side of the document contains an error. The error will be considered resolved when the file with the front side changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceFrontSide" | |

#### PassportElementErrorSourceReverseSide
The reverse side of the document contains an error. The error will be considered resolved when the file with the reverse side changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceReverseSide" | |

#### PassportElementErrorSourceSelfie
The selfie with the document contains an error. The error will be considered resolved when the file with the selfie changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceSelfie" | |

#### PassportElementErrorSourceTranslationFile
One of files with the translation of the document contains an error. The error will be considered resolved when the file changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceTranslationFile" | |

#### PassportElementErrorSourceTranslationFiles
The translation of the document contains an error. The error will be considered resolved when the list of translation files changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceTranslationFiles" | |

#### PassportElementErrorSourceFile
The file contains an error. The error will be considered resolved when the file changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceFile" | |

#### PassportElementErrorSourceFiles
The list of attached files contains an error. The error will be considered resolved when the list of files changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementErrorSourceFiles" | |


## PassportElementTypeUnion
Contains the type of a Telegram Passport element
- [`PassportElementTypePersonalDetails`](#passportelementtypepersonaldetails)
- [`PassportElementTypePassport`](#passportelementtypepassport)
- [`PassportElementTypeDriverLicense`](#passportelementtypedriverlicense)
- [`PassportElementTypeIdentityCard`](#passportelementtypeidentitycard)
- [`PassportElementTypeInternalPassport`](#passportelementtypeinternalpassport)
- [`PassportElementTypeAddress`](#passportelementtypeaddress)
- [`PassportElementTypeUtilityBill`](#passportelementtypeutilitybill)
- [`PassportElementTypeBankStatement`](#passportelementtypebankstatement)
- [`PassportElementTypeRentalAgreement`](#passportelementtyperentalagreement)
- [`PassportElementTypePassportRegistration`](#passportelementtypepassportregistration)
- [`PassportElementTypeTemporaryRegistration`](#passportelementtypetemporaryregistration)
- [`PassportElementTypePhoneNumber`](#passportelementtypephonenumber)
- [`PassportElementTypeEmailAddress`](#passportelementtypeemailaddress)
#### PassportElementTypePersonalDetails
A Telegram Passport element containing the user's personal details


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePersonalDetails" | |

#### PassportElementTypePassport
A Telegram Passport element containing the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePassport" | |

#### PassportElementTypeDriverLicense
A Telegram Passport element containing the user's driver license


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeDriverLicense" | |

#### PassportElementTypeIdentityCard
A Telegram Passport element containing the user's identity card


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeIdentityCard" | |

#### PassportElementTypeInternalPassport
A Telegram Passport element containing the user's internal passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeInternalPassport" | |

#### PassportElementTypeAddress
A Telegram Passport element containing the user's address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeAddress" | |

#### PassportElementTypeUtilityBill
A Telegram Passport element containing the user's utility bill


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeUtilityBill" | |

#### PassportElementTypeBankStatement
A Telegram Passport element containing the user's bank statement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeBankStatement" | |

#### PassportElementTypeRentalAgreement
A Telegram Passport element containing the user's rental agreement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeRentalAgreement" | |

#### PassportElementTypePassportRegistration
A Telegram Passport element containing the registration page of the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePassportRegistration" | |

#### PassportElementTypeTemporaryRegistration
A Telegram Passport element containing the user's temporary registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeTemporaryRegistration" | |

#### PassportElementTypePhoneNumber
A Telegram Passport element containing the user's phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePhoneNumber" | |

#### PassportElementTypeEmailAddress
A Telegram Passport element containing the user's email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeEmailAddress" | |


## PassportElementsUnion
It's an alias for the `PassportElements` type.
#### PassportElements
Contains information about saved Telegram Passport elements


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElements" | |
| `elements` | [PassportElementUnion[]](#passportelementunion) | Telegram Passport elements |


## PasswordStateUnion
It's an alias for the `PasswordState` type.
#### PasswordState
Represents the current state of 2-step verification


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passwordState" | |
| `hasPassword` | boolean | True if a 2-step verification password is set |
| `passwordHint` | string | Hint for the password; can be empty |
| `hasRecoveryEmailAddress` | boolean | True if a recovery email is set |
| `hasPassportData` | boolean | True if some Telegram Passport elements were saved |
| `unconfirmedRecoveryEmailAddressPattern` | string | Pattern of the email address to which the confirmation email was sent |


## PaymentFormUnion
It's an alias for the `PaymentForm` type.
#### PaymentForm
Contains information about an invoice payment form


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "paymentForm" | |
| `invoice` | [Invoice](#invoice) | Full information of the invoice |
| `url` | string | Payment form URL |
| `paymentsProvider` | [PaymentsProviderStripe](#paymentsproviderstripe) | Contains information about the payment provider, if available, to support it natively without the need for opening the URL; may be null |
| `savedOrderInfo` | [OrderInfo](#orderinfo) | Saved server-side order information; may be null |
| `savedCredentials` | [SavedCredentials](#savedcredentials) | Contains information about saved card credentials; may be null |
| `canSaveCredentials` | boolean | True, if the user can choose to save credentials |
| `needPassword` | boolean | True, if the user will be able to save credentials protected by a password they set up |


## PaymentReceiptUnion
It's an alias for the `PaymentReceipt` type.
#### PaymentReceipt
Contains information about a successful payment


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "paymentReceipt" | |
| `date` | number | Point in time (Unix timestamp) when the payment was made |
| `paymentsProviderUserId` | number | User identifier of the payment provider bot |
| `invoice` | [Invoice](#invoice) | Contains information about the invoice |
| `orderInfo` | [OrderInfo](#orderinfo) | Contains order information; may be null |
| `shippingOption` | [ShippingOption](#shippingoption) | Chosen shipping option; may be null |
| `credentialsTitle` | string | Title of the saved credentials |


## PaymentResultUnion
It's an alias for the `PaymentResult` type.
#### PaymentResult
Contains the result of a payment request


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "paymentResult" | |
| `success` | boolean | True, if the payment request was successful; otherwise the verification_url will be not empty |
| `verificationUrl` | string | URL for additional payment credentials verification |


## ProxiesUnion
It's an alias for the `Proxies` type.
#### Proxies
Represents a list of proxy servers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxies" | |
| `proxies` | [Proxy[]](#proxy) | List of proxy servers |


## ProxyUnion
It's an alias for the `Proxy` type.
#### Proxy
Contains information about a proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxy" | |
| `id` | number | Unique identifier of the proxy |
| `server` | string | Proxy server IP address |
| `port` | number | Proxy server port |
| `lastUsedDate` | number | Point in time (Unix timestamp) when the proxy was last used; 0 if never |
| `isEnabled` | boolean | True, if the proxy is enabled now |
| `type` | [ProxyTypeUnion](#proxytypeunion) | Type of the proxy |


## ProxyTypeUnion
Describes the type of the proxy server
- [`ProxyTypeSocks5`](#proxytypesocks5)
- [`ProxyTypeHttp`](#proxytypehttp)
- [`ProxyTypeMtproto`](#proxytypemtproto)
#### ProxyTypeSocks5
A SOCKS5 proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeSocks5" | |
| `username` | string | Username for logging in; may be empty |
| `password` | string | Password for logging in; may be empty |

#### ProxyTypeHttp
A HTTP transparent proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeHttp" | |
| `username` | string | Username for logging in; may be empty |
| `password` | string | Password for logging in; may be empty |
| `httpOnly` | boolean | Pass true, if the proxy supports only HTTP requests and doesn't support transparent TCP connections via HTTP CONNECT method |

#### ProxyTypeMtproto
An MTProto proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeMtproto" | |
| `secret` | string | The proxy's secret in hexadecimal encoding |


## PublicMessageLinkUnion
It's an alias for the `PublicMessageLink` type.
#### PublicMessageLink
Contains a public HTTPS link to a message in a public supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "publicMessageLink" | |
| `link` | string | Message link |
| `html` | string | HTML-code for embedding the message |


## RecoveryEmailAddressUnion
It's an alias for the `RecoveryEmailAddress` type.
#### RecoveryEmailAddress
Contains information about the current recovery email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "recoveryEmailAddress" | |
| `recoveryEmailAddress` | string | Recovery email address |


## ReplyMarkupUnion
Contains a description of a custom keyboard and actions that can be done with it to quickly reply to bots
- [`ReplyMarkupRemoveKeyboard`](#replymarkupremovekeyboard)
- [`ReplyMarkupForceReply`](#replymarkupforcereply)
- [`ReplyMarkupShowKeyboard`](#replymarkupshowkeyboard)
- [`ReplyMarkupInlineKeyboard`](#replymarkupinlinekeyboard)
#### ReplyMarkupRemoveKeyboard
Instructs clients to remove the keyboard once this message has been received. This kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup with message_id == 0 will be sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupRemoveKeyboard" | |
| `isPersonal` | boolean | True, if the keyboard is removed only for the mentioned users or the target user of a reply |

#### ReplyMarkupForceReply
Instructs clients to force a reply to this message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupForceReply" | |
| `isPersonal` | boolean | True, if a forced reply must automatically be shown to the current user. For outgoing messages, specify true to show the forced reply only for the mentioned users and for the target user of a reply |

#### ReplyMarkupShowKeyboard
Contains a custom keyboard layout to quickly reply to bots


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupShowKeyboard" | |
| `rows` | [KeyboardButton[][]](#keyboardbutton) | A list of rows of bot keyboard buttons |
| `resizeKeyboard` | boolean | True, if the client needs to resize the keyboard vertically |
| `oneTime` | boolean | True, if the client needs to hide the keyboard after use |
| `isPersonal` | boolean | True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the keyboard only for the mentioned users and for the target user of a reply |

#### ReplyMarkupInlineKeyboard
Contains an inline keyboard layout


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupInlineKeyboard" | |
| `rows` | [InlineKeyboardButton[][]](#inlinekeyboardbutton) | A list of rows of inline keyboard buttons |


## RichTextUnion
Describes a text object inside an instant-view web page
- [`RichTextPlain`](#richtextplain)
- [`RichTextBold`](#richtextbold)
- [`RichTextItalic`](#richtextitalic)
- [`RichTextUnderline`](#richtextunderline)
- [`RichTextStrikethrough`](#richtextstrikethrough)
- [`RichTextFixed`](#richtextfixed)
- [`RichTextUrl`](#richtexturl)
- [`RichTextEmailAddress`](#richtextemailaddress)
- [`RichTexts`](#richtexts)
#### RichTextPlain
A plain text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextPlain" | |
| `text` | string | Text |

#### RichTextBold
A bold rich text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextBold" | |
| `text` | [RichTextUnion](#richtextunion) | Text |

#### RichTextItalic
An italicized rich text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextItalic" | |
| `text` | [RichTextUnion](#richtextunion) | Text |

#### RichTextUnderline
An underlined rich text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextUnderline" | |
| `text` | [RichTextUnion](#richtextunion) | Text |

#### RichTextStrikethrough
A strike-through rich text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextStrikethrough" | |
| `text` | [RichTextUnion](#richtextunion) | Text |

#### RichTextFixed
A fixed-width rich text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextFixed" | |
| `text` | [RichTextUnion](#richtextunion) | Text |

#### RichTextUrl
A rich text URL link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextUrl" | |
| `text` | [RichTextUnion](#richtextunion) | Text |
| `url` | string | URL |

#### RichTextEmailAddress
A rich text email link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTextEmailAddress" | |
| `text` | [RichTextUnion](#richtextunion) | Text |
| `emailAddress` | string | Email address |

#### RichTexts
A concatenation of rich texts


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "richTexts" | |
| `texts` | [RichTextUnion[]](#richtextunion) | Texts |


## ScopeNotificationSettingsUnion
It's an alias for the `ScopeNotificationSettings` type.
#### ScopeNotificationSettings
Contains information about notification settings for several chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "scopeNotificationSettings" | |
| `muteFor` | number | Time left before notifications will be unmuted, in seconds |
| `sound` | string | The name of an audio file to be used for notification sounds; only applies to iOS applications |
| `showPreview` | boolean | True, if message content should be displayed in notifications |


## SearchMessagesFilterUnion
Represents a filter for message search results
- [`SearchMessagesFilterEmpty`](#searchmessagesfilterempty)
- [`SearchMessagesFilterAnimation`](#searchmessagesfilteranimation)
- [`SearchMessagesFilterAudio`](#searchmessagesfilteraudio)
- [`SearchMessagesFilterDocument`](#searchmessagesfilterdocument)
- [`SearchMessagesFilterPhoto`](#searchmessagesfilterphoto)
- [`SearchMessagesFilterVideo`](#searchmessagesfiltervideo)
- [`SearchMessagesFilterVoiceNote`](#searchmessagesfiltervoicenote)
- [`SearchMessagesFilterPhotoAndVideo`](#searchmessagesfilterphotoandvideo)
- [`SearchMessagesFilterUrl`](#searchmessagesfilterurl)
- [`SearchMessagesFilterChatPhoto`](#searchmessagesfilterchatphoto)
- [`SearchMessagesFilterCall`](#searchmessagesfiltercall)
- [`SearchMessagesFilterMissedCall`](#searchmessagesfiltermissedcall)
- [`SearchMessagesFilterVideoNote`](#searchmessagesfiltervideonote)
- [`SearchMessagesFilterVoiceAndVideoNote`](#searchmessagesfiltervoiceandvideonote)
- [`SearchMessagesFilterMention`](#searchmessagesfiltermention)
- [`SearchMessagesFilterUnreadMention`](#searchmessagesfilterunreadmention)
#### SearchMessagesFilterEmpty
Returns all found messages, no filter is applied


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterEmpty" | |

#### SearchMessagesFilterAnimation
Returns only animation messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterAnimation" | |

#### SearchMessagesFilterAudio
Returns only audio messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterAudio" | |

#### SearchMessagesFilterDocument
Returns only document messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterDocument" | |

#### SearchMessagesFilterPhoto
Returns only photo messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterPhoto" | |

#### SearchMessagesFilterVideo
Returns only video messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVideo" | |

#### SearchMessagesFilterVoiceNote
Returns only voice note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVoiceNote" | |

#### SearchMessagesFilterPhotoAndVideo
Returns only photo and video messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterPhotoAndVideo" | |

#### SearchMessagesFilterUrl
Returns only messages containing URLs


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterUrl" | |

#### SearchMessagesFilterChatPhoto
Returns only messages containing chat photos


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterChatPhoto" | |

#### SearchMessagesFilterCall
Returns only call messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterCall" | |

#### SearchMessagesFilterMissedCall
Returns only incoming call messages with missed/declined discard reasons


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterMissedCall" | |

#### SearchMessagesFilterVideoNote
Returns only video note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVideoNote" | |

#### SearchMessagesFilterVoiceAndVideoNote
Returns only voice and video note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVoiceAndVideoNote" | |

#### SearchMessagesFilterMention
Returns only messages with mentions of the current user, or messages that are replies to their messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterMention" | |

#### SearchMessagesFilterUnreadMention
Returns only messages with unread mentions of the current user or messages that are replies to their messages. When using this filter the results can't be additionally filtered by a query or by the sending user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterUnreadMention" | |


## SecondsUnion
It's an alias for the `Seconds` type.
#### Seconds
Contains a value representing a number of seconds


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "seconds" | |
| `seconds` | number | Number of seconds |


## SecretChatUnion
It's an alias for the `SecretChat` type.
#### SecretChat
Represents a secret chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "secretChat" | |
| `id` | number | Secret chat identifier |
| `userId` | number | Identifier of the chat partner |
| `state` | [SecretChatStateUnion](#secretchatstateunion) | State of the secret chat |
| `isOutbound` | boolean | True, if the chat was created by the current user; otherwise false |
| `ttl` | number | Current message Time To Live setting (self-destruct timer) for the chat, in seconds |
| `keyHash` | string | Hash of the currently used key for comparison with the hash of the chat partner's key. This is a string of 36 bytes, which must be used to make a 12x12 square image with a color depth of 4. The first 16 bytes should be used to make a central 8x8 square, while the remaining 20 bytes should be used to construct a 2-pixel-wide border around that square. Alternatively, the first 32 bytes of the hash can be converted to the hexadecimal format and printed as 32 2-digit hex numbers |
| `layer` | number | Secret chat layer; determines features supported by the other client. Video notes are supported if the layer >= 66 |


## SecretChatStateUnion
Describes the current secret chat state
- [`SecretChatStatePending`](#secretchatstatepending)
- [`SecretChatStateReady`](#secretchatstateready)
- [`SecretChatStateClosed`](#secretchatstateclosed)
#### SecretChatStatePending
The secret chat is not yet created; waiting for the other user to get online


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "secretChatStatePending" | |

#### SecretChatStateReady
The secret chat is ready to use


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "secretChatStateReady" | |

#### SecretChatStateClosed
The secret chat is closed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "secretChatStateClosed" | |


## SessionsUnion
It's an alias for the `Sessions` type.
#### Sessions
Contains a list of sessions


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "sessions" | |
| `sessions` | [Session[]](#session) | List of sessions |


## StickerEmojisUnion
It's an alias for the `StickerEmojis` type.
#### StickerEmojis
Represents a list of all emoji corresponding to a sticker in a sticker set. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "stickerEmojis" | |
| `emojis` | string[] | List of emojis |


## StickerSetUnion
It's an alias for the `StickerSet` type.
#### StickerSet
Represents a sticker set


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "stickerSet" | |
| `id` | number &#124; string | Identifier of the sticker set |
| `title` | string | Title of the sticker set |
| `name` | string | Name of the sticker set |
| `isInstalled` | boolean | True, if the sticker set has been installed by the current user |
| `isArchived` | boolean | True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously |
| `isOfficial` | boolean | True, if the sticker set is official |
| `isMasks` | boolean | True, if the stickers in the set are masks |
| `isViewed` | boolean | True for already viewed trending sticker sets |
| `stickers` | [Sticker[]](#sticker) | List of stickers in this set |
| `emojis` | [StickerEmojis[]](#stickeremojis) | A list of emoji corresponding to the stickers in the same order |


## StickerSetsUnion
It's an alias for the `StickerSets` type.
#### StickerSets
Represents a list of sticker sets


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "stickerSets" | |
| `totalCount` | number | Approximate total number of sticker sets found |
| `sets` | [StickerSetInfo[]](#stickersetinfo) | List of sticker sets |


## StickersUnion
It's an alias for the `Stickers` type.
#### Stickers
Represents a list of stickers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "stickers" | |
| `stickers` | [Sticker[]](#sticker) | List of stickers |


## StorageStatisticsUnion
It's an alias for the `StorageStatistics` type.
#### StorageStatistics
Contains the exact storage usage statistics split by chats and file type


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "storageStatistics" | |
| `size` | number | Total size of files |
| `count` | number | Total number of files |
| `byChat` | [StorageStatisticsByChat[]](#storagestatisticsbychat) | Statistics split by chats |


## StorageStatisticsFastUnion
It's an alias for the `StorageStatisticsFast` type.
#### StorageStatisticsFast
Contains approximate storage usage statistics, excluding files of unknown file type


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "storageStatisticsFast" | |
| `filesSize` | number | Approximate total size of files |
| `fileCount` | number | Approximate number of files |
| `databaseSize` | number | Size of the database |


## SupergroupUnion
It's an alias for the `Supergroup` type.
#### Supergroup
Represents a supergroup or channel with zero or more members (subscribers in the case of channels). From the point of view of the system, a channel is a special kind of a supergroup: only administrators can post and see the list of members, and posts from all administrators use the name and photo of the channel instead of individual names and profile photos. Unlike supergroups, channels can have an unlimited number of subscribers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroup" | |
| `id` | number | Supergroup or channel identifier |
| `username` | string | Username of the supergroup or channel; empty for private supergroups or channels |
| `date` | number | Point in time (Unix timestamp) when the current user joined, or the point in time when the supergroup or channel was created, in case the user is not a member |
| `status` | [ChatMemberStatusUnion](#chatmemberstatusunion) | Status of the current user in the supergroup or channel |
| `memberCount` | number | Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup or channel was found through SearchPublicChats |
| `anyoneCanInvite` | boolean | True, if any member of the supergroup can invite other members. This field has no meaning for channels |
| `signMessages` | boolean | True, if messages sent to the channel should contain information about the sender. This field is only applicable to channels |
| `isChannel` | boolean | True, if the supergroup is a channel |
| `isVerified` | boolean | True, if the supergroup or channel is verified |
| `restrictionReason` | string | If non-empty, contains the reason why access to this supergroup or channel must be restricted. Format of the string is "{type}: {description}". {type} Contains the type of the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp", which describe the platforms on which access should be restricted. (For example, "terms-ios-android". {description} contains a human-readable description of the restriction, which can be shown to the user) |


## SupergroupFullInfoUnion
It's an alias for the `SupergroupFullInfo` type.
#### SupergroupFullInfo
Contains full information about a supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupFullInfo" | |
| `description` | string | Supergroup or channel description |
| `memberCount` | number | Number of members in the supergroup or channel; 0 if unknown |
| `administratorCount` | number | Number of privileged users in the supergroup or channel; 0 if unknown |
| `restrictedCount` | number | Number of restricted users in the supergroup; 0 if unknown |
| `bannedCount` | number | Number of users banned from chat; 0 if unknown |
| `canGetMembers` | boolean | True, if members of the chat can be retrieved |
| `canSetUsername` | boolean | True, if the chat can be made public |
| `canSetStickerSet` | boolean | True, if the supergroup sticker set can be changed |
| `isAllHistoryAvailable` | boolean | True, if new chat members will have access to old messages. In public supergroups and both public and private channels, old messages are always available, so this option affects only private supergroups. The value of this field is only available for chat administrators |
| `stickerSetId` | number &#124; string | Identifier of the supergroup sticker set; 0 if none |
| `inviteLink` | string | Invite link for this chat |
| `pinnedMessageId` | number | Identifier of the pinned message in the chat; 0 if none |
| `upgradedFromBasicGroupId` | number | Identifier of the basic group from which supergroup was upgraded; 0 if none |
| `upgradedFromMaxMessageId` | number | Identifier of the last message in the basic group from which supergroup was upgraded; 0 if none |


## SupergroupMembersFilterUnion
Specifies the kind of chat members to return in getSupergroupMembers
- [`SupergroupMembersFilterRecent`](#supergroupmembersfilterrecent)
- [`SupergroupMembersFilterAdministrators`](#supergroupmembersfilteradministrators)
- [`SupergroupMembersFilterSearch`](#supergroupmembersfiltersearch)
- [`SupergroupMembersFilterRestricted`](#supergroupmembersfilterrestricted)
- [`SupergroupMembersFilterBanned`](#supergroupmembersfilterbanned)
- [`SupergroupMembersFilterBots`](#supergroupmembersfilterbots)
#### SupergroupMembersFilterRecent
Returns recently active users in reverse chronological order


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterRecent" | |

#### SupergroupMembersFilterAdministrators
Returns the creator and administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterAdministrators" | |

#### SupergroupMembersFilterSearch
Used to search for supergroup or channel members via a (string) query


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterSearch" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterRestricted
Returns restricted supergroup members; can be used only by administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterRestricted" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterBanned
Returns users banned from the supergroup or channel; can be used only by administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterBanned" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterBots
Returns bot members of the supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterBots" | |


## TMeUrlTypeUnion
Describes the type of a URL linking to an internal Telegram entity
- [`TMeUrlTypeUser`](#tmeurltypeuser)
- [`TMeUrlTypeSupergroup`](#tmeurltypesupergroup)
- [`TMeUrlTypeChatInvite`](#tmeurltypechatinvite)
- [`TMeUrlTypeStickerSet`](#tmeurltypestickerset)
#### TMeUrlTypeUser
A URL linking to a user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "tMeUrlTypeUser" | |
| `userId` | number | Identifier of the user |

#### TMeUrlTypeSupergroup
A URL linking to a public supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "tMeUrlTypeSupergroup" | |
| `supergroupId` | number | Identifier of the supergroup or channel |

#### TMeUrlTypeChatInvite
A chat invite link


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "tMeUrlTypeChatInvite" | |
| `info` | [ChatInviteLinkInfo](#chatinvitelinkinfo) | Chat invite link info |

#### TMeUrlTypeStickerSet
A URL linking to a sticker set


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "tMeUrlTypeStickerSet" | |
| `stickerSetId` | number &#124; string | Identifier of the sticker set |


## TMeUrlsUnion
It's an alias for the `TMeUrls` type.
#### TMeUrls
Contains a list of t.me URLs


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "tMeUrls" | |
| `urls` | [TMeUrl[]](#tmeurl) | List of URLs |


## TemporaryPasswordStateUnion
It's an alias for the `TemporaryPasswordState` type.
#### TemporaryPasswordState
Returns information about the availability of a temporary password, which can be used for payments


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "temporaryPasswordState" | |
| `hasPassword` | boolean | True, if a temporary password is available |
| `validFor` | number | Time left before the temporary password expires, in seconds |


## TestBytesUnion
It's an alias for the `TestBytes` type.
#### TestBytes
A simple object containing a sequence of bytes; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testBytes" | |
| `value` | string | Bytes |


## TestIntUnion
It's an alias for the `TestInt` type.
#### TestInt
A simple object containing a number; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testInt" | |
| `value` | number | Number |


## TestStringUnion
It's an alias for the `TestString` type.
#### TestString
A simple object containing a string; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testString" | |
| `value` | string | String |


## TestVectorIntUnion
It's an alias for the `TestVectorInt` type.
#### TestVectorInt
A simple object containing a vector of numbers; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testVectorInt" | |
| `value` | number[] | Vector of numbers |


## TestVectorIntObjectUnion
It's an alias for the `TestVectorIntObject` type.
#### TestVectorIntObject
A simple object containing a vector of objects that hold a number; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testVectorIntObject" | |
| `value` | [TestInt[]](#testint) | Vector of objects |


## TestVectorStringUnion
It's an alias for the `TestVectorString` type.
#### TestVectorString
A simple object containing a vector of strings; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testVectorString" | |
| `value` | string[] | Vector of strings |


## TestVectorStringObjectUnion
It's an alias for the `TestVectorStringObject` type.
#### TestVectorStringObject
A simple object containing a vector of objects that hold a string; for testing only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "testVectorStringObject" | |
| `value` | [TestString[]](#teststring) | Vector of objects |


## TextUnion
It's an alias for the `Text` type.
#### Text
Contains some text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "text" | |
| `text` | string | Text |


## TextEntitiesUnion
It's an alias for the `TextEntities` type.
#### TextEntities
Contains a list of text entities


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntities" | |
| `entities` | [TextEntity[]](#textentity) | List of text entities |


## TextEntityTypeUnion
Represents a part of the text which must be formatted differently
- [`TextEntityTypeMention`](#textentitytypemention)
- [`TextEntityTypeHashtag`](#textentitytypehashtag)
- [`TextEntityTypeCashtag`](#textentitytypecashtag)
- [`TextEntityTypeBotCommand`](#textentitytypebotcommand)
- [`TextEntityTypeUrl`](#textentitytypeurl)
- [`TextEntityTypeEmailAddress`](#textentitytypeemailaddress)
- [`TextEntityTypeBold`](#textentitytypebold)
- [`TextEntityTypeItalic`](#textentitytypeitalic)
- [`TextEntityTypeCode`](#textentitytypecode)
- [`TextEntityTypePre`](#textentitytypepre)
- [`TextEntityTypePreCode`](#textentitytypeprecode)
- [`TextEntityTypeTextUrl`](#textentitytypetexturl)
- [`TextEntityTypeMentionName`](#textentitytypementionname)
- [`TextEntityTypePhoneNumber`](#textentitytypephonenumber)
#### TextEntityTypeMention
A mention of a user by their username


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeMention" | |

#### TextEntityTypeHashtag
A hashtag text, beginning with "#"


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeHashtag" | |

#### TextEntityTypeCashtag
A cashtag text, beginning with "$" and consisting of capital english letters (i.e. "$USD")


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeCashtag" | |

#### TextEntityTypeBotCommand
A bot command, beginning with "/". This shouldn't be highlighted if there are no bots in the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeBotCommand" | |

#### TextEntityTypeUrl
An HTTP URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeUrl" | |

#### TextEntityTypeEmailAddress
An email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeEmailAddress" | |

#### TextEntityTypeBold
A bold text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeBold" | |

#### TextEntityTypeItalic
An italic text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeItalic" | |

#### TextEntityTypeCode
Text that must be formatted as if inside a code HTML tag


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeCode" | |

#### TextEntityTypePre
Text that must be formatted as if inside a pre HTML tag


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePre" | |

#### TextEntityTypePreCode
Text that must be formatted as if inside pre, and code HTML tags


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePreCode" | |
| `language` | string | Programming language of the code; as defined by the sender |

#### TextEntityTypeTextUrl
A text description shown instead of a raw URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeTextUrl" | |
| `url` | string | HTTP or tg:// URL to be opened when the link is clicked |

#### TextEntityTypeMentionName
A text shows instead of a raw mention of the user (e.g., when the user has no username)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeMentionName" | |
| `userId` | number | Identifier of the mentioned user |

#### TextEntityTypePhoneNumber
A phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePhoneNumber" | |


## TextParseModeUnion
Describes the way the text should be parsed for TextEntities
- [`TextParseModeMarkdown`](#textparsemodemarkdown)
- [`TextParseModeHtml`](#textparsemodehtml)
#### TextParseModeMarkdown
The text should be parsed in markdown-style


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textParseModeMarkdown" | |

#### TextParseModeHtml
The text should be parsed in HTML-style


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textParseModeHTML" | |


## TopChatCategoryUnion
Represents the categories of chats for which a list of frequently used chats can be retrieved
- [`TopChatCategoryUsers`](#topchatcategoryusers)
- [`TopChatCategoryBots`](#topchatcategorybots)
- [`TopChatCategoryGroups`](#topchatcategorygroups)
- [`TopChatCategoryChannels`](#topchatcategorychannels)
- [`TopChatCategoryInlineBots`](#topchatcategoryinlinebots)
- [`TopChatCategoryCalls`](#topchatcategorycalls)
#### TopChatCategoryUsers
A category containing frequently used private chats with non-bot users


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryUsers" | |

#### TopChatCategoryBots
A category containing frequently used private chats with bot users


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryBots" | |

#### TopChatCategoryGroups
A category containing frequently used basic groups and supergroups


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryGroups" | |

#### TopChatCategoryChannels
A category containing frequently used channels


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryChannels" | |

#### TopChatCategoryInlineBots
A category containing frequently used chats with inline bots sorted by their usage in inline mode


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryInlineBots" | |

#### TopChatCategoryCalls
A category containing frequently used chats used for calls


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryCalls" | |


## UpdateUnion
Contains notifications about data changes
- [`UpdateAuthorizationState`](#updateauthorizationstate)
- [`UpdateNewMessage`](#updatenewmessage)
- [`UpdateMessageSendAcknowledged`](#updatemessagesendacknowledged)
- [`UpdateMessageSendSucceeded`](#updatemessagesendsucceeded)
- [`UpdateMessageSendFailed`](#updatemessagesendfailed)
- [`UpdateMessageContent`](#updatemessagecontent)
- [`UpdateMessageEdited`](#updatemessageedited)
- [`UpdateMessageViews`](#updatemessageviews)
- [`UpdateMessageContentOpened`](#updatemessagecontentopened)
- [`UpdateMessageMentionRead`](#updatemessagementionread)
- [`UpdateNewChat`](#updatenewchat)
- [`UpdateChatTitle`](#updatechattitle)
- [`UpdateChatPhoto`](#updatechatphoto)
- [`UpdateChatLastMessage`](#updatechatlastmessage)
- [`UpdateChatOrder`](#updatechatorder)
- [`UpdateChatIsPinned`](#updatechatispinned)
- [`UpdateChatIsMarkedAsUnread`](#updatechatismarkedasunread)
- [`UpdateChatIsSponsored`](#updatechatissponsored)
- [`UpdateChatDefaultDisableNotification`](#updatechatdefaultdisablenotification)
- [`UpdateChatReadInbox`](#updatechatreadinbox)
- [`UpdateChatReadOutbox`](#updatechatreadoutbox)
- [`UpdateChatUnreadMentionCount`](#updatechatunreadmentioncount)
- [`UpdateChatNotificationSettings`](#updatechatnotificationsettings)
- [`UpdateScopeNotificationSettings`](#updatescopenotificationsettings)
- [`UpdateChatReplyMarkup`](#updatechatreplymarkup)
- [`UpdateChatDraftMessage`](#updatechatdraftmessage)
- [`UpdateDeleteMessages`](#updatedeletemessages)
- [`UpdateUserChatAction`](#updateuserchataction)
- [`UpdateUserStatus`](#updateuserstatus)
- [`UpdateUser`](#updateuser)
- [`UpdateBasicGroup`](#updatebasicgroup)
- [`UpdateSupergroup`](#updatesupergroup)
- [`UpdateSecretChat`](#updatesecretchat)
- [`UpdateUserFullInfo`](#updateuserfullinfo)
- [`UpdateBasicGroupFullInfo`](#updatebasicgroupfullinfo)
- [`UpdateSupergroupFullInfo`](#updatesupergroupfullinfo)
- [`UpdateServiceNotification`](#updateservicenotification)
- [`UpdateFile`](#updatefile)
- [`UpdateFileGenerationStart`](#updatefilegenerationstart)
- [`UpdateFileGenerationStop`](#updatefilegenerationstop)
- [`UpdateCall`](#updatecall)
- [`UpdateUserPrivacySettingRules`](#updateuserprivacysettingrules)
- [`UpdateUnreadMessageCount`](#updateunreadmessagecount)
- [`UpdateUnreadChatCount`](#updateunreadchatcount)
- [`UpdateOption`](#updateoption)
- [`UpdateInstalledStickerSets`](#updateinstalledstickersets)
- [`UpdateTrendingStickerSets`](#updatetrendingstickersets)
- [`UpdateRecentStickers`](#updaterecentstickers)
- [`UpdateFavoriteStickers`](#updatefavoritestickers)
- [`UpdateSavedAnimations`](#updatesavedanimations)
- [`UpdateLanguagePackStrings`](#updatelanguagepackstrings)
- [`UpdateConnectionState`](#updateconnectionstate)
- [`UpdateTermsOfService`](#updatetermsofservice)
- [`UpdateNewInlineQuery`](#updatenewinlinequery)
- [`UpdateNewChosenInlineResult`](#updatenewchoseninlineresult)
- [`UpdateNewCallbackQuery`](#updatenewcallbackquery)
- [`UpdateNewInlineCallbackQuery`](#updatenewinlinecallbackquery)
- [`UpdateNewShippingQuery`](#updatenewshippingquery)
- [`UpdateNewPreCheckoutQuery`](#updatenewprecheckoutquery)
- [`UpdateNewCustomEvent`](#updatenewcustomevent)
- [`UpdateNewCustomQuery`](#updatenewcustomquery)
#### UpdateAuthorizationState
The user authorization state has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateAuthorizationState" | |
| `authorizationState` | [AuthorizationStateUnion](#authorizationstateunion) | New authorization state |

#### UpdateNewMessage
A new message was received; can also be an outgoing message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewMessage" | |
| `message` | [Message](#message) | The new message |
| `disableNotification` | boolean | True, if this message must not generate a notification |
| `containsMention` | boolean | True, if the message contains a mention of the current user |

#### UpdateMessageSendAcknowledged
A request to send a message has reached the Telegram server. This doesn't mean that the message will be sent successfully or even that the send message request will be processed. This update will be sent only if the option "use_quick_ack" is set to true. This update may be sent multiple times for the same message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageSendAcknowledged" | |
| `chatId` | number | The chat identifier of the sent message |
| `messageId` | number | A temporary message identifier |

#### UpdateMessageSendSucceeded
A message has been successfully sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageSendSucceeded" | |
| `message` | [Message](#message) | Information about the sent message. Usually only the message identifier, date, and content are changed, but almost all other fields can also change |
| `oldMessageId` | number | The previous temporary message identifier |

#### UpdateMessageSendFailed
A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case updateDeleteMessages will be received instead of this update


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageSendFailed" | |
| `message` | [Message](#message) | Contains information about the message that failed to send |
| `oldMessageId` | number | The previous temporary message identifier |
| `errorCode` | number | An error code |
| `errorMessage` | string | Error message |

#### UpdateMessageContent
The message content has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageContent" | |
| `chatId` | number | Chat identifier |
| `messageId` | number | Message identifier |
| `newContent` | [MessageContentUnion](#messagecontentunion) | New message content |

#### UpdateMessageEdited
A message was edited. Changes in the message content will come in a separate updateMessageContent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageEdited" | |
| `chatId` | number | Chat identifier |
| `messageId` | number | Message identifier |
| `editDate` | number | Point in time (Unix timestamp) when the message was edited |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupunion) | New message reply markup; may be null |

#### UpdateMessageViews
The view count of the message has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageViews" | |
| `chatId` | number | Chat identifier |
| `messageId` | number | Message identifier |
| `views` | number | New value of the view count |

#### UpdateMessageContentOpened
The message content was opened. Updates voice note messages to "listened", video note messages to "viewed" and starts the TTL timer for self-destructing messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageContentOpened" | |
| `chatId` | number | Chat identifier |
| `messageId` | number | Message identifier |

#### UpdateMessageMentionRead
A message with an unread mention was read


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateMessageMentionRead" | |
| `chatId` | number | Chat identifier |
| `messageId` | number | Message identifier |
| `unreadMentionCount` | number | The new number of unread mention messages left in the chat |

#### UpdateNewChat
A new chat has been loaded/created. This update is guaranteed to come before the chat identifier is returned to the client. The chat field changes will be reported through separate updates


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewChat" | |
| `chat` | [Chat](#chat) | The chat |

#### UpdateChatTitle
The title of a chat was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatTitle" | |
| `chatId` | number | Chat identifier |
| `title` | string | The new chat title |

#### UpdateChatPhoto
A chat photo was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatPhoto" | |
| `chatId` | number | Chat identifier |
| `photo` | [ChatPhoto](#chatphoto) | The new chat photo; may be null |

#### UpdateChatLastMessage
The last message of a chat was changed. If last_message is null then the last message in the chat became unknown. Some new unknown messages might be added to the chat in this case


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatLastMessage" | |
| `chatId` | number | Chat identifier |
| `lastMessage` | [Message](#message) | The new last message in the chat; may be null |
| `order` | number &#124; string | New value of the chat order |

#### UpdateChatOrder
The order of the chat in the chats list has changed. Instead of this update updateChatLastMessage, updateChatIsPinned or updateChatDraftMessage might be sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatOrder" | |
| `chatId` | number | Chat identifier |
| `order` | number &#124; string | New value of the order |

#### UpdateChatIsPinned
A chat was pinned or unpinned


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatIsPinned" | |
| `chatId` | number | Chat identifier |
| `isPinned` | boolean | New value of is_pinned |
| `order` | number &#124; string | New value of the chat order |

#### UpdateChatIsMarkedAsUnread
A chat was marked as unread or was read


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatIsMarkedAsUnread" | |
| `chatId` | number | Chat identifier |
| `isMarkedAsUnread` | boolean | New value of is_marked_as_unread |

#### UpdateChatIsSponsored
A chat's is_sponsored field has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatIsSponsored" | |
| `chatId` | number | Chat identifier |
| `isSponsored` | boolean | New value of is_sponsored |
| `order` | number &#124; string | New value of chat order |

#### UpdateChatDefaultDisableNotification
The value of the default disable_notification parameter, used when a message is sent to the chat, was changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatDefaultDisableNotification" | |
| `chatId` | number | Chat identifier |
| `defaultDisableNotification` | boolean | The new default_disable_notification value |

#### UpdateChatReadInbox
Incoming messages were read or number of unread messages has been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatReadInbox" | |
| `chatId` | number | Chat identifier |
| `lastReadInboxMessageId` | number | Identifier of the last read incoming message |
| `unreadCount` | number | The number of unread messages left in the chat |

#### UpdateChatReadOutbox
Outgoing messages were read


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatReadOutbox" | |
| `chatId` | number | Chat identifier |
| `lastReadOutboxMessageId` | number | Identifier of last read outgoing message |

#### UpdateChatUnreadMentionCount
The chat unread_mention_count has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatUnreadMentionCount" | |
| `chatId` | number | Chat identifier |
| `unreadMentionCount` | number | The number of unread mention messages left in the chat |

#### UpdateChatNotificationSettings
Notification settings for a chat were changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatNotificationSettings" | |
| `chatId` | number | Chat identifier |
| `notificationSettings` | [ChatNotificationSettings](#chatnotificationsettings) | The new notification settings |

#### UpdateScopeNotificationSettings
Notification settings for some type of chats were updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateScopeNotificationSettings" | |
| `scope` | [NotificationSettingsScopeUnion](#notificationsettingsscopeunion) | Types of chats for which notification settings were updated |
| `notificationSettings` | [ScopeNotificationSettings](#scopenotificationsettings) | The new notification settings |

#### UpdateChatReplyMarkup
The default chat reply markup was changed. Can occur because new messages with reply markup were received or because an old reply markup was hidden by the user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatReplyMarkup" | |
| `chatId` | number | Chat identifier |
| `replyMarkupMessageId` | number | Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat |

#### UpdateChatDraftMessage
A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the draft. If the user has changed the content of the draft, this update shouldn't be applied


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateChatDraftMessage" | |
| `chatId` | number | Chat identifier |
| `draftMessage` | [DraftMessage](#draftmessage) | The new draft message; may be null |
| `order` | number &#124; string | New value of the chat order |

#### UpdateDeleteMessages
Some messages were deleted


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateDeleteMessages" | |
| `chatId` | number | Chat identifier |
| `messageIds` | number[] | Identifiers of the deleted messages |
| `isPermanent` | boolean | True, if the messages are permanently deleted by a user (as opposed to just becoming unaccessible) |
| `fromCache` | boolean | True, if the messages are deleted only from the cache and can possibly be retrieved again in the future |

#### UpdateUserChatAction
User activity in the chat has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUserChatAction" | |
| `chatId` | number | Chat identifier |
| `userId` | number | Identifier of a user performing an action |
| `action` | [ChatActionUnion](#chatactionunion) | The action description |

#### UpdateUserStatus
The user went online or offline


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUserStatus" | |
| `userId` | number | User identifier |
| `status` | [UserStatusUnion](#userstatusunion) | New status of the user |

#### UpdateUser
Some data of a user has changed. This update is guaranteed to come before the user identifier is returned to the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUser" | |
| `user` | [User](#user) | New data about the user |

#### UpdateBasicGroup
Some data of a basic group has changed. This update is guaranteed to come before the basic group identifier is returned to the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateBasicGroup" | |
| `basicGroup` | [BasicGroup](#basicgroup) | New data about the group |

#### UpdateSupergroup
Some data of a supergroup or a channel has changed. This update is guaranteed to come before the supergroup identifier is returned to the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateSupergroup" | |
| `supergroup` | [Supergroup](#supergroup) | New data about the supergroup |

#### UpdateSecretChat
Some data of a secret chat has changed. This update is guaranteed to come before the secret chat identifier is returned to the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateSecretChat" | |
| `secretChat` | [SecretChat](#secretchat) | New data about the secret chat |

#### UpdateUserFullInfo
Some data from userFullInfo has been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUserFullInfo" | |
| `userId` | number | User identifier |
| `userFullInfo` | [UserFullInfo](#userfullinfo) | New full information about the user |

#### UpdateBasicGroupFullInfo
Some data from basicGroupFullInfo has been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateBasicGroupFullInfo" | |
| `basicGroupId` | number | Identifier of a basic group |
| `basicGroupFullInfo` | [BasicGroupFullInfo](#basicgroupfullinfo) | New full information about the group |

#### UpdateSupergroupFullInfo
Some data from supergroupFullInfo has been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateSupergroupFullInfo" | |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `supergroupFullInfo` | [SupergroupFullInfo](#supergroupfullinfo) | New full information about the supergroup |

#### UpdateServiceNotification
Service notification from the server. Upon receiving this the client must show a popup with the content of the notification


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateServiceNotification" | |
| `type` | string | Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel" and "Log out" should be shown under notification; if user presses the second, all local data should be destroyed using Destroy method |
| `content` | [MessageContentUnion](#messagecontentunion) | Notification content |

#### UpdateFile
Information about a file was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateFile" | |
| `file` | [File](#file) | New data about the file |

#### UpdateFileGenerationStart
The file generation process needs to be started by the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateFileGenerationStart" | |
| `generationId` | number &#124; string | Unique identifier for the generation process |
| `originalPath` | string | The path to a file from which a new file is generated; may be empty |
| `destinationPath` | string | The path to a file that should be created and where the new file should be generated |
| `conversion` | string | String specifying the conversion applied to the original file. If conversion is "#url#" than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded by the client |

#### UpdateFileGenerationStop
File generation is no longer needed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateFileGenerationStop" | |
| `generationId` | number &#124; string | Unique identifier for the generation process |

#### UpdateCall
New call was created or information about a call was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateCall" | |
| `call` | [Call](#call) | New data about a call |

#### UpdateUserPrivacySettingRules
Some privacy setting rules have been changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUserPrivacySettingRules" | |
| `setting` | [UserPrivacySettingUnion](#userprivacysettingunion) | The privacy setting |
| `rules` | [UserPrivacySettingRules](#userprivacysettingrules) | New privacy rules |

#### UpdateUnreadMessageCount
Number of unread messages has changed. This update is sent only if a message database is used


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUnreadMessageCount" | |
| `unreadCount` | number | Total number of unread messages |
| `unreadUnmutedCount` | number | Total number of unread messages in unmuted chats |

#### UpdateUnreadChatCount
Number of unread chats, i.e. with unread messages or marked as unread, has changed. This update is sent only if a message database is used


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateUnreadChatCount" | |
| `unreadCount` | number | Total number of unread chats |
| `unreadUnmutedCount` | number | Total number of unread unmuted chats |
| `markedAsUnreadCount` | number | Total number of chats marked as unread |
| `markedAsUnreadUnmutedCount` | number | Total number of unmuted chats marked as unread |

#### UpdateOption
An option changed its value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateOption" | |
| `name` | string | The option name |
| `value` | [OptionValueUnion](#optionvalueunion) | The new option value |

#### UpdateInstalledStickerSets
The list of installed sticker sets was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateInstalledStickerSets" | |
| `isMasks` | boolean | True, if the list of installed mask sticker sets was updated |
| `stickerSetIds` | number &#124; string[] | The new list of installed ordinary sticker sets |

#### UpdateTrendingStickerSets
The list of trending sticker sets was updated or some of them were viewed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateTrendingStickerSets" | |
| `stickerSets` | [StickerSets](#stickersets) | The new list of trending sticker sets |

#### UpdateRecentStickers
The list of recently used stickers was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateRecentStickers" | |
| `isAttached` | boolean | True, if the list of stickers attached to photo or video files was updated, otherwise the list of sent stickers is updated |
| `stickerIds` | number[] | The new list of file identifiers of recently used stickers |

#### UpdateFavoriteStickers
The list of favorite stickers was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateFavoriteStickers" | |
| `stickerIds` | number[] | The new list of file identifiers of favorite stickers |

#### UpdateSavedAnimations
The list of saved animations was updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateSavedAnimations" | |
| `animationIds` | number[] | The new list of file identifiers of saved animations |

#### UpdateLanguagePackStrings
Some language pack strings have been updated


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateLanguagePackStrings" | |
| `localizationTarget` | string | Localization target to which the language pack belongs |
| `languagePackId` | string | Identifier of the updated language pack |
| `strings` | [LanguagePackString[]](#languagepackstring) | List of changed language pack strings |

#### UpdateConnectionState
The connection state has changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateConnectionState" | |
| `state` | [ConnectionStateUnion](#connectionstateunion) | The new connection state |

#### UpdateTermsOfService
New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method should be called with the reason "Decline ToS update"


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateTermsOfService" | |
| `termsOfServiceId` | string | Identifier of the terms of service |
| `termsOfService` | [TermsOfService](#termsofservice) | The new terms of service |

#### UpdateNewInlineQuery
A new incoming inline query; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewInlineQuery" | |
| `id` | number &#124; string | Unique query identifier |
| `senderUserId` | number | Identifier of the user who sent the query |
| `userLocation` | [Location](#location) | User location, provided by the client; may be null |
| `query` | string | Text of the query |
| `offset` | string | Offset of the first entry to return |

#### UpdateNewChosenInlineResult
The user has chosen a result of an inline query; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewChosenInlineResult" | |
| `senderUserId` | number | Identifier of the user who sent the query |
| `userLocation` | [Location](#location) | User location, provided by the client; may be null |
| `query` | string | Text of the query |
| `resultId` | string | Identifier of the chosen result |
| `inlineMessageId` | string | Identifier of the sent inline message, if known |

#### UpdateNewCallbackQuery
A new incoming callback query; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewCallbackQuery" | |
| `id` | number &#124; string | Unique query identifier |
| `senderUserId` | number | Identifier of the user who sent the query |
| `chatId` | number | Identifier of the chat, in which the query was sent |
| `messageId` | number | Identifier of the message, from which the query originated |
| `chatInstance` | number &#124; string | Identifier that uniquely corresponds to the chat to which the message was sent |
| `payload` | [CallbackQueryPayloadUnion](#callbackquerypayloadunion) | Query payload |

#### UpdateNewInlineCallbackQuery
A new incoming callback query from a message sent via a bot; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewInlineCallbackQuery" | |
| `id` | number &#124; string | Unique query identifier |
| `senderUserId` | number | Identifier of the user who sent the query |
| `inlineMessageId` | string | Identifier of the inline message, from which the query originated |
| `chatInstance` | number &#124; string | An identifier uniquely corresponding to the chat a message was sent to |
| `payload` | [CallbackQueryPayloadUnion](#callbackquerypayloadunion) | Query payload |

#### UpdateNewShippingQuery
A new incoming shipping query; for bots only. Only for invoices with flexible price


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewShippingQuery" | |
| `id` | number &#124; string | Unique query identifier |
| `senderUserId` | number | Identifier of the user who sent the query |
| `invoicePayload` | string | Invoice payload |
| `shippingAddress` | [Address](#address) | User shipping address |

#### UpdateNewPreCheckoutQuery
A new incoming pre-checkout query; for bots only. Contains full information about a checkout


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewPreCheckoutQuery" | |
| `id` | number &#124; string | Unique query identifier |
| `senderUserId` | number | Identifier of the user who sent the query |
| `currency` | string | Currency for the product price |
| `totalAmount` | number | Total price for the product, in the minimal quantity of the currency |
| `invoicePayload` | string | Invoice payload |
| `shippingOptionId` | string | Identifier of a shipping option chosen by the user; may be empty if not applicable |
| `orderInfo` | [OrderInfo](#orderinfo) | Information about the order; may be null |

#### UpdateNewCustomEvent
A new incoming event; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewCustomEvent" | |
| `event` | string | A JSON-serialized event |

#### UpdateNewCustomQuery
A new incoming query; for bots only


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "updateNewCustomQuery" | |
| `id` | number &#124; string | The query identifier |
| `data` | string | JSON-serialized query data |
| `timeout` | number | Query timeout |


## UserUnion
It's an alias for the `User` type.
#### User
Represents a user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "user" | |
| `id` | number | User identifier |
| `firstName` | string | First name of the user |
| `lastName` | string | Last name of the user |
| `username` | string | Username of the user |
| `phoneNumber` | string | Phone number of the user |
| `status` | [UserStatusUnion](#userstatusunion) | Current online status of the user |
| `profilePhoto` | [ProfilePhoto](#profilephoto) | Profile photo of the user; may be null |
| `outgoingLink` | [LinkStateUnion](#linkstateunion) | Relationship from the current user to the other user |
| `incomingLink` | [LinkStateUnion](#linkstateunion) | Relationship from the other user to the current user |
| `isVerified` | boolean | True, if the user is verified |
| `restrictionReason` | string | If non-empty, it contains the reason why access to this user must be restricted. The format of the string is "{type}: {description}". {type} contains the type of the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp", which describe the platforms on which access should be restricted. (For example, "terms-ios-android". {description} contains a human-readable description of the restriction, which can be shown to the user) |
| `haveAccess` | boolean | If false, the user is inaccessible, and the only information known about the user is inside this class. It can't be passed to any method except GetUser |
| `type` | [UserTypeUnion](#usertypeunion) | Type of the user |
| `languageCode` | string | IETF language tag of the user's language; only available to bots |


## UserFullInfoUnion
It's an alias for the `UserFullInfo` type.
#### UserFullInfo
Contains full information about a user (except the full list of profile photos)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userFullInfo" | |
| `isBlocked` | boolean | True, if the user is blacklisted by the current user |
| `canBeCalled` | boolean | True, if the user can be called |
| `hasPrivateCalls` | boolean | True, if the user can't be called due to their privacy settings |
| `bio` | string | A short user bio |
| `shareText` | string | For bots, the text that is included with the link when users share the bot |
| `groupInCommonCount` | number | Number of group chats where both the other user and the current user are a member; 0 for the current user |
| `botInfo` | [BotInfo](#botinfo) | If the user is a bot, information about the bot; may be null |


## UserPrivacySettingUnion
Describes available user privacy settings
- [`UserPrivacySettingShowStatus`](#userprivacysettingshowstatus)
- [`UserPrivacySettingAllowChatInvites`](#userprivacysettingallowchatinvites)
- [`UserPrivacySettingAllowCalls`](#userprivacysettingallowcalls)
#### UserPrivacySettingShowStatus
A privacy setting for managing whether the user's online status is visible


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingShowStatus" | |

#### UserPrivacySettingAllowChatInvites
A privacy setting for managing whether the user can be invited to chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingAllowChatInvites" | |

#### UserPrivacySettingAllowCalls
A privacy setting for managing whether the user can be called


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingAllowCalls" | |


## UserPrivacySettingRuleUnion
Represents a single rule for managing privacy settings
- [`UserPrivacySettingRuleAllowAll`](#userprivacysettingruleallowall)
- [`UserPrivacySettingRuleAllowContacts`](#userprivacysettingruleallowcontacts)
- [`UserPrivacySettingRuleAllowUsers`](#userprivacysettingruleallowusers)
- [`UserPrivacySettingRuleRestrictAll`](#userprivacysettingrulerestrictall)
- [`UserPrivacySettingRuleRestrictContacts`](#userprivacysettingrulerestrictcontacts)
- [`UserPrivacySettingRuleRestrictUsers`](#userprivacysettingrulerestrictusers)
#### UserPrivacySettingRuleAllowAll
A rule to allow all users to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowAll" | |

#### UserPrivacySettingRuleAllowContacts
A rule to allow all of a user's contacts to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowContacts" | |

#### UserPrivacySettingRuleAllowUsers
A rule to allow certain specified users to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowUsers" | |
| `userIds` | number[] | The user identifiers |

#### UserPrivacySettingRuleRestrictAll
A rule to restrict all users from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictAll" | |

#### UserPrivacySettingRuleRestrictContacts
A rule to restrict all contacts of a user from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictContacts" | |

#### UserPrivacySettingRuleRestrictUsers
A rule to restrict all specified users from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictUsers" | |
| `userIds` | number[] | The user identifiers |


## UserPrivacySettingRulesUnion
It's an alias for the `UserPrivacySettingRules` type.
#### UserPrivacySettingRules
A list of privacy rules. Rules are matched in the specified order. The first matched rule defines the privacy setting for a given user. If no rule matches, the action is not allowed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRules" | |
| `rules` | [UserPrivacySettingRuleUnion[]](#userprivacysettingruleunion) | A list of rules |


## UserProfilePhotosUnion
It's an alias for the `UserProfilePhotos` type.
#### UserProfilePhotos
Contains part of the list of user photos


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userProfilePhotos" | |
| `totalCount` | number | Total number of user profile photos |
| `photos` | [Photo[]](#photo) | A list of photos |


## UserStatusUnion
Describes the last time the user was online
- [`UserStatusEmpty`](#userstatusempty)
- [`UserStatusOnline`](#userstatusonline)
- [`UserStatusOffline`](#userstatusoffline)
- [`UserStatusRecently`](#userstatusrecently)
- [`UserStatusLastWeek`](#userstatuslastweek)
- [`UserStatusLastMonth`](#userstatuslastmonth)
#### UserStatusEmpty
The user status was never changed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusEmpty" | |

#### UserStatusOnline
The user is online


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusOnline" | |
| `expires` | number | Point in time (Unix timestamp) when the user's online status will expire |

#### UserStatusOffline
The user is offline


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusOffline" | |
| `wasOnline` | number | Point in time (Unix timestamp) when the user was last online |

#### UserStatusRecently
The user was online recently


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusRecently" | |

#### UserStatusLastWeek
The user is offline, but was online last week


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusLastWeek" | |

#### UserStatusLastMonth
The user is offline, but was online last month


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userStatusLastMonth" | |


## UserTypeUnion
Represents the type of the user. The following types are possible: regular users, deleted users and bots
- [`UserTypeRegular`](#usertyperegular)
- [`UserTypeDeleted`](#usertypedeleted)
- [`UserTypeBot`](#usertypebot)
- [`UserTypeUnknown`](#usertypeunknown)
#### UserTypeRegular
A regular user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userTypeRegular" | |

#### UserTypeDeleted
A deleted user or deleted bot. No information on the user besides the user_id is available. It is not possible to perform any active actions on this type of user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userTypeDeleted" | |

#### UserTypeBot
A bot (see https://core.telegram.org/bots)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userTypeBot" | |
| `canJoinGroups` | boolean | True, if the bot can be invited to basic group and supergroup chats |
| `canReadAllGroupMessages` | boolean | True, if the bot can read all messages in basic group or supergroup chats and not just those addressed to the bot. In private and channel chats a bot can always read all messages |
| `isInline` | boolean | True, if the bot supports inline queries |
| `inlineQueryPlaceholder` | string | Placeholder for inline queries (displayed on the client input field) |
| `needLocation` | boolean | True, if the location of the user should be sent with every inline query to this bot |

#### UserTypeUnknown
No information on the user besides the user_id is available, yet this user has not been deleted. This object is extremely rare and must be handled like a deleted user. It is not possible to perform any actions on users of this type


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userTypeUnknown" | |


## UsersUnion
It's an alias for the `Users` type.
#### Users
Represents a list of users


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "users" | |
| `totalCount` | number | Approximate total count of users found |
| `userIds` | number[] | A list of user identifiers |


## ValidatedOrderInfoUnion
It's an alias for the `ValidatedOrderInfo` type.
#### ValidatedOrderInfo
Contains a temporary identifier of validated order information, which is stored for one hour. Also contains the available shipping options


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "validatedOrderInfo" | |
| `orderInfoId` | string | Temporary identifier of the order information |
| `shippingOptions` | [ShippingOption[]](#shippingoption) | Available shipping options |


## WallpapersUnion
It's an alias for the `Wallpapers` type.
#### Wallpapers
Contains a list of wallpapers


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "wallpapers" | |
| `wallpapers` | [Wallpaper[]](#wallpaper) | A list of wallpapers |


## WebPageUnion
It's an alias for the `WebPage` type.
#### WebPage
Describes a web page preview


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "webPage" | |
| `url` | string | Original URL of the link |
| `displayUrl` | string | URL to display |
| `type` | string | Type of the web page. Can be: article, photo, audio, video, document, profile, app, or something else |
| `siteName` | string | Short name of the site (e.g., Google Docs, App Store) |
| `title` | string | Title of the content |
| `description` | string | Description of the content |
| `photo` | [Photo](#photo) | Image representing the content; may be null |
| `embedUrl` | string | URL to show in the embedded preview |
| `embedType` | string | MIME type of the embedded preview, (e.g., text/html or video/mp4) |
| `embedWidth` | number | Width of the embedded preview |
| `embedHeight` | number | Height of the embedded preview |
| `duration` | number | Duration of the content, in seconds |
| `author` | string | Author of the content |
| `animation` | [Animation](#animation) | Preview of the content as an animation, if available; may be null |
| `audio` | [Audio](#audio) | Preview of the content as an audio file, if available; may be null |
| `document` | [Document](#document) | Preview of the content as a document, if available (currently only available for small PDF files and ZIP archives); may be null |
| `sticker` | [Sticker](#sticker) | Preview of the content as a sticker for small WEBP files, if available; may be null |
| `video` | [Video](#video) | Preview of the content as a video, if available; may be null |
| `videoNote` | [VideoNote](#videonote) | Preview of the content as a video note, if available; may be null |
| `voiceNote` | [VoiceNote](#voicenote) | Preview of the content as a voice note, if available; may be null |
| `hasInstantView` | boolean | True, if the web page has an instant view |


## WebPageInstantViewUnion
It's an alias for the `WebPageInstantView` type.
#### WebPageInstantView
Describes an instant view page for a web page


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "webPageInstantView" | |
| `pageBlocks` | [PageBlockUnion[]](#pageblockunion) | Content of the web page |
| `isFull` | boolean | True, if the instant view contains the full page. A network request might be needed to get the full web page instant view |
