# TDLib input types

- [`CallbackQueryPayloadInputUnion`](#callbackquerypayloadinputunion)
- [`ChatActionInputUnion`](#chatactioninputunion)
- [`ChatMemberStatusInputUnion`](#chatmemberstatusinputunion)
- [`ChatMembersFilterInputUnion`](#chatmembersfilterinputunion)
- [`ChatReportReasonInputUnion`](#chatreportreasoninputunion)
- [`DeviceTokenInputUnion`](#devicetokeninputunion)
- [`FileTypeInputUnion`](#filetypeinputunion)
- [`InlineKeyboardButtonTypeInputUnion`](#inlinekeyboardbuttontypeinputunion)
- [`InputCredentialsInputUnion`](#inputcredentialsinputunion)
- [`InputFileInputUnion`](#inputfileinputunion)
- [`InputInlineQueryResultInputUnion`](#inputinlinequeryresultinputunion)
- [`InputMessageContentInputUnion`](#inputmessagecontentinputunion)
- [`InputPassportElementInputUnion`](#inputpassportelementinputunion)
- [`InputPassportElementErrorSourceInputUnion`](#inputpassportelementerrorsourceinputunion)
- [`KeyboardButtonTypeInputUnion`](#keyboardbuttontypeinputunion)
- [`LanguagePackStringValueInputUnion`](#languagepackstringvalueinputunion)
- [`MaskPointInputUnion`](#maskpointinputunion)
- [`NetworkStatisticsEntryInputUnion`](#networkstatisticsentryinputunion)
- [`NetworkTypeInputUnion`](#networktypeinputunion)
- [`NotificationSettingsScopeInputUnion`](#notificationsettingsscopeinputunion)
- [`OptionValueInputUnion`](#optionvalueinputunion)
- [`PassportElementTypeInputUnion`](#passportelementtypeinputunion)
- [`ProxyTypeInputUnion`](#proxytypeinputunion)
- [`ReplyMarkupInputUnion`](#replymarkupinputunion)
- [`SearchMessagesFilterInputUnion`](#searchmessagesfilterinputunion)
- [`SupergroupMembersFilterInputUnion`](#supergroupmembersfilterinputunion)
- [`TextEntityTypeInputUnion`](#textentitytypeinputunion)
- [`TextParseModeInputUnion`](#textparsemodeinputunion)
- [`TopChatCategoryInputUnion`](#topchatcategoryinputunion)
- [`UserPrivacySettingInputUnion`](#userprivacysettinginputunion)
- [`UserPrivacySettingRuleInputUnion`](#userprivacysettingruleinputunion)
-------------
## CallbackQueryPayloadInputUnion
Represents a payload of a callback query
- [`CallbackQueryPayloadDataInput`](#callbackquerypayloaddatainput)
- [`CallbackQueryPayloadGameInput`](#callbackquerypayloadgameinput)
#### CallbackQueryPayloadDataInput
The payload from a general callback button


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callbackQueryPayloadData" | |
| `data` | string | Data that was attached to the callback button |

#### CallbackQueryPayloadGameInput
The payload from a game callback button


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "callbackQueryPayloadGame" | |
| `gameShortName` | string | A short name of the game that was attached to the callback button |


## ChatActionInputUnion
Describes the different types of activity in a chat
- [`ChatActionTypingInput`](#chatactiontypinginput)
- [`ChatActionRecordingVideoInput`](#chatactionrecordingvideoinput)
- [`ChatActionUploadingVideoInput`](#chatactionuploadingvideoinput)
- [`ChatActionRecordingVoiceNoteInput`](#chatactionrecordingvoicenoteinput)
- [`ChatActionUploadingVoiceNoteInput`](#chatactionuploadingvoicenoteinput)
- [`ChatActionUploadingPhotoInput`](#chatactionuploadingphotoinput)
- [`ChatActionUploadingDocumentInput`](#chatactionuploadingdocumentinput)
- [`ChatActionChoosingLocationInput`](#chatactionchoosinglocationinput)
- [`ChatActionChoosingContactInput`](#chatactionchoosingcontactinput)
- [`ChatActionStartPlayingGameInput`](#chatactionstartplayinggameinput)
- [`ChatActionRecordingVideoNoteInput`](#chatactionrecordingvideonoteinput)
- [`ChatActionUploadingVideoNoteInput`](#chatactionuploadingvideonoteinput)
- [`ChatActionCancelInput`](#chatactioncancelinput)
#### ChatActionTypingInput
The user is typing a message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionTyping" | |

#### ChatActionRecordingVideoInput
The user is recording a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVideo" | |

#### ChatActionUploadingVideoInput
The user is uploading a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVideo" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionRecordingVoiceNoteInput
The user is recording a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVoiceNote" | |

#### ChatActionUploadingVoiceNoteInput
The user is uploading a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVoiceNote" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionUploadingPhotoInput
The user is uploading a photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingPhoto" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionUploadingDocumentInput
The user is uploading a document


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingDocument" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionChoosingLocationInput
The user is picking a location or venue to send


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionChoosingLocation" | |

#### ChatActionChoosingContactInput
The user is picking a contact to send


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionChoosingContact" | |

#### ChatActionStartPlayingGameInput
The user has started to play a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionStartPlayingGame" | |

#### ChatActionRecordingVideoNoteInput
The user is recording a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionRecordingVideoNote" | |

#### ChatActionUploadingVideoNoteInput
The user is uploading a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionUploadingVideoNote" | |
| `progress` | number | Upload progress, as a percentage |

#### ChatActionCancelInput
The user has cancelled the previous action


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatActionCancel" | |


## ChatMemberStatusInputUnion
Provides information about the status of a member in a chat
- [`ChatMemberStatusCreatorInput`](#chatmemberstatuscreatorinput)
- [`ChatMemberStatusAdministratorInput`](#chatmemberstatusadministratorinput)
- [`ChatMemberStatusMemberInput`](#chatmemberstatusmemberinput)
- [`ChatMemberStatusRestrictedInput`](#chatmemberstatusrestrictedinput)
- [`ChatMemberStatusLeftInput`](#chatmemberstatusleftinput)
- [`ChatMemberStatusBannedInput`](#chatmemberstatusbannedinput)
#### ChatMemberStatusCreatorInput
The user is the creator of a chat and has all the administrator privileges


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusCreator" | |
| `isMember` | boolean | True, if the user is a member of the chat |

#### ChatMemberStatusAdministratorInput
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

#### ChatMemberStatusMemberInput
The user is a member of a chat, without any additional privileges or restrictions


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusMember" | |

#### ChatMemberStatusRestrictedInput
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

#### ChatMemberStatusLeftInput
The user is not a chat member


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusLeft" | |

#### ChatMemberStatusBannedInput
The user was banned (and hence is not a member of the chat). Implies the user can't return to the chat or view messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMemberStatusBanned" | |
| `bannedUntilDate` | number | Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever |


## ChatMembersFilterInputUnion
Specifies the kind of chat members to return in searchChatMembers
- [`ChatMembersFilterAdministratorsInput`](#chatmembersfilteradministratorsinput)
- [`ChatMembersFilterMembersInput`](#chatmembersfiltermembersinput)
- [`ChatMembersFilterRestrictedInput`](#chatmembersfilterrestrictedinput)
- [`ChatMembersFilterBannedInput`](#chatmembersfilterbannedinput)
- [`ChatMembersFilterBotsInput`](#chatmembersfilterbotsinput)
#### ChatMembersFilterAdministratorsInput
Returns the creator and administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterAdministrators" | |

#### ChatMembersFilterMembersInput
Returns all chat members, including restricted chat members


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterMembers" | |

#### ChatMembersFilterRestrictedInput
Returns users under certain restrictions in the chat; can be used only by administrators in a supergroup


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterRestricted" | |

#### ChatMembersFilterBannedInput
Returns users banned from the chat; can be used only by administrators in a supergroup or in a channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterBanned" | |

#### ChatMembersFilterBotsInput
Returns bot members of the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatMembersFilterBots" | |


## ChatReportReasonInputUnion
Describes the reason why a chat is reported
- [`ChatReportReasonSpamInput`](#chatreportreasonspaminput)
- [`ChatReportReasonViolenceInput`](#chatreportreasonviolenceinput)
- [`ChatReportReasonPornographyInput`](#chatreportreasonpornographyinput)
- [`ChatReportReasonCopyrightInput`](#chatreportreasoncopyrightinput)
- [`ChatReportReasonCustomInput`](#chatreportreasoncustominput)
#### ChatReportReasonSpamInput
The chat contains spam messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonSpam" | |

#### ChatReportReasonViolenceInput
The chat promotes violence


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonViolence" | |

#### ChatReportReasonPornographyInput
The chat contains pornographic messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonPornography" | |

#### ChatReportReasonCopyrightInput
The chat contains copyrighted content


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonCopyright" | |

#### ChatReportReasonCustomInput
A custom reason provided by the user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "chatReportReasonCustom" | |
| `text` | string | Report text |


## DeviceTokenInputUnion
Represents a data needed to subscribe for push notifications. To use specific push notification service, you must specify the correct application platform and upload valid server authentication data at https://my.telegram.org
- [`DeviceTokenGoogleCloudMessagingInput`](#devicetokengooglecloudmessaginginput)
- [`DeviceTokenApplePushInput`](#devicetokenapplepushinput)
- [`DeviceTokenApplePushVoIpInput`](#devicetokenapplepushvoipinput)
- [`DeviceTokenWindowsPushInput`](#devicetokenwindowspushinput)
- [`DeviceTokenMicrosoftPushInput`](#devicetokenmicrosoftpushinput)
- [`DeviceTokenMicrosoftPushVoIpInput`](#devicetokenmicrosoftpushvoipinput)
- [`DeviceTokenWebPushInput`](#devicetokenwebpushinput)
- [`DeviceTokenSimplePushInput`](#devicetokensimplepushinput)
- [`DeviceTokenUbuntuPushInput`](#devicetokenubuntupushinput)
- [`DeviceTokenBlackBerryPushInput`](#devicetokenblackberrypushinput)
- [`DeviceTokenTizenPushInput`](#devicetokentizenpushinput)
#### DeviceTokenGoogleCloudMessagingInput
A token for Google Cloud Messaging


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenGoogleCloudMessaging" | |
| `token` | string | Device registration token; may be empty to de-register a device |

#### DeviceTokenApplePushInput
A token for Apple Push Notification service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenApplePush" | |
| `deviceToken` | string | Device token; may be empty to de-register a device |
| `isAppSandbox` | boolean | True, if App Sandbox is enabled |

#### DeviceTokenApplePushVoIpInput
A token for Apple Push Notification service VoIP notifications


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenApplePushVoIP" | |
| `deviceToken` | string | Device token; may be empty to de-register a device |
| `isAppSandbox` | boolean | True, if App Sandbox is enabled |

#### DeviceTokenWindowsPushInput
A token for Windows Push Notification Services


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenWindowsPush" | |
| `accessToken` | string | The access token that will be used to send notifications; may be empty to de-register a device |

#### DeviceTokenMicrosoftPushInput
A token for Microsoft Push Notification Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenMicrosoftPush" | |
| `channelUri` | string | Push notification channel URI; may be empty to de-register a device |

#### DeviceTokenMicrosoftPushVoIpInput
A token for Microsoft Push Notification Service VoIP channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenMicrosoftPushVoIP" | |
| `channelUri` | string | Push notification channel URI; may be empty to de-register a device |

#### DeviceTokenWebPushInput
A token for web Push API


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenWebPush" | |
| `endpoint` | string | Absolute URL exposed by the push service where the application server can send push messages; may be empty to de-register a device |
| `p256DhBase64Url` | string | Base64url-encoded P-256 elliptic curve Diffie-Hellman public key |
| `authBase64Url` | string | Base64url-encoded authentication secret |

#### DeviceTokenSimplePushInput
A token for Simple Push API for Firefox OS


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenSimplePush" | |
| `endpoint` | string | Absolute URL exposed by the push service where the application server can send push messages; may be empty to de-register a device |

#### DeviceTokenUbuntuPushInput
A token for Ubuntu Push Client service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenUbuntuPush" | |
| `token` | string | Token; may be empty to de-register a device |

#### DeviceTokenBlackBerryPushInput
A token for BlackBerry Push Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenBlackBerryPush" | |
| `token` | string | Token; may be empty to de-register a device |

#### DeviceTokenTizenPushInput
A token for Tizen Push Service


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "deviceTokenTizenPush" | |
| `regId` | string | Push service registration identifier; may be empty to de-register a device |


## FileTypeInputUnion
Represents the type of a file
- [`FileTypeNoneInput`](#filetypenoneinput)
- [`FileTypeAnimationInput`](#filetypeanimationinput)
- [`FileTypeAudioInput`](#filetypeaudioinput)
- [`FileTypeDocumentInput`](#filetypedocumentinput)
- [`FileTypePhotoInput`](#filetypephotoinput)
- [`FileTypeProfilePhotoInput`](#filetypeprofilephotoinput)
- [`FileTypeSecretInput`](#filetypesecretinput)
- [`FileTypeSecretThumbnailInput`](#filetypesecretthumbnailinput)
- [`FileTypeSecureInput`](#filetypesecureinput)
- [`FileTypeStickerInput`](#filetypestickerinput)
- [`FileTypeThumbnailInput`](#filetypethumbnailinput)
- [`FileTypeUnknownInput`](#filetypeunknowninput)
- [`FileTypeVideoInput`](#filetypevideoinput)
- [`FileTypeVideoNoteInput`](#filetypevideonoteinput)
- [`FileTypeVoiceNoteInput`](#filetypevoicenoteinput)
- [`FileTypeWallpaperInput`](#filetypewallpaperinput)
#### FileTypeNoneInput
The data is not a file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeNone" | |

#### FileTypeAnimationInput
The file is an animation


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeAnimation" | |

#### FileTypeAudioInput
The file is an audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeAudio" | |

#### FileTypeDocumentInput
The file is a document


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeDocument" | |

#### FileTypePhotoInput
The file is a photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypePhoto" | |

#### FileTypeProfilePhotoInput
The file is a profile photo


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeProfilePhoto" | |

#### FileTypeSecretInput
The file was sent to a secret chat (the file type is not known to the server)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecret" | |

#### FileTypeSecretThumbnailInput
The file is a thumbnail of a file from a secret chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecretThumbnail" | |

#### FileTypeSecureInput
The file is a file from Secure storage used for storing Telegram Passport files


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSecure" | |

#### FileTypeStickerInput
The file is a sticker


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeSticker" | |

#### FileTypeThumbnailInput
The file is a thumbnail of another file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeThumbnail" | |

#### FileTypeUnknownInput
The file type is not yet known


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeUnknown" | |

#### FileTypeVideoInput
The file is a video


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVideo" | |

#### FileTypeVideoNoteInput
The file is a video note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVideoNote" | |

#### FileTypeVoiceNoteInput
The file is a voice note


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeVoiceNote" | |

#### FileTypeWallpaperInput
The file is a wallpaper


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "fileTypeWallpaper" | |


## InlineKeyboardButtonTypeInputUnion
Describes the type of an inline keyboard button
- [`InlineKeyboardButtonTypeUrlInput`](#inlinekeyboardbuttontypeurlinput)
- [`InlineKeyboardButtonTypeCallbackInput`](#inlinekeyboardbuttontypecallbackinput)
- [`InlineKeyboardButtonTypeCallbackGameInput`](#inlinekeyboardbuttontypecallbackgameinput)
- [`InlineKeyboardButtonTypeSwitchInlineInput`](#inlinekeyboardbuttontypeswitchinlineinput)
- [`InlineKeyboardButtonTypeBuyInput`](#inlinekeyboardbuttontypebuyinput)
#### InlineKeyboardButtonTypeUrlInput
A button that opens a specified URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeUrl" | |
| `url` | string | HTTP or tg:// URL to open |

#### InlineKeyboardButtonTypeCallbackInput
A button that sends a special callback query to a bot


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeCallback" | |
| `data` | string | Data to be sent to the bot via a callback query |

#### InlineKeyboardButtonTypeCallbackGameInput
A button with a game that sends a special callback query to a bot. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageGame


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeCallbackGame" | |

#### InlineKeyboardButtonTypeSwitchInlineInput
A button that forces an inline query to the bot to be inserted in the input field


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeSwitchInline" | |
| `query` | string | Inline query to be sent to the bot |
| `inCurrentChat` | boolean | True, if the inline query should be sent from the current chat |

#### InlineKeyboardButtonTypeBuyInput
A button to buy something. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageInvoice


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inlineKeyboardButtonTypeBuy" | |


## InputCredentialsInputUnion
Contains information about the payment method chosen by the user
- [`InputCredentialsSavedInput`](#inputcredentialssavedinput)
- [`InputCredentialsNewInput`](#inputcredentialsnewinput)
- [`InputCredentialsAndroidPayInput`](#inputcredentialsandroidpayinput)
- [`InputCredentialsApplePayInput`](#inputcredentialsapplepayinput)
#### InputCredentialsSavedInput
Applies if a user chooses some previously saved payment credentials. To use their previously saved credentials, the user must have a valid temporary password


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsSaved" | |
| `savedCredentialsId` | string | Identifier of the saved credentials |

#### InputCredentialsNewInput
Applies if a user enters new credentials on a payment provider website


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsNew" | |
| `data` | string | Contains JSON-encoded data with a credential identifier from the payment provider |
| `allowSave` | boolean | True, if the credential identifier can be saved on the server side |

#### InputCredentialsAndroidPayInput
Applies if a user enters new credentials using Android Pay


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsAndroidPay" | |
| `data` | string | JSON-encoded data with the credential identifier |

#### InputCredentialsApplePayInput
Applies if a user enters new credentials using Apple Pay


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputCredentialsApplePay" | |
| `data` | string | JSON-encoded data with the credential identifier |


## InputFileInputUnion
Points to a file
- [`InputFileIdInput`](#inputfileidinput)
- [`InputFileRemoteInput`](#inputfileremoteinput)
- [`InputFileLocalInput`](#inputfilelocalinput)
- [`InputFileGeneratedInput`](#inputfilegeneratedinput)
#### InputFileIdInput
A file defined by its unique ID


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileId" | |
| `id` | number | Unique file identifier |

#### InputFileRemoteInput
A file defined by its remote ID


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileRemote" | |
| `id` | string | Remote file identifier |

#### InputFileLocalInput
A file defined by a local path


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileLocal" | |
| `path` | string | Local path to the file |

#### InputFileGeneratedInput
A file generated by the client


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputFileGenerated" | |
| `originalPath` | string | Local path to a file from which the file is generated; may be empty if there is no such file |
| `conversion` | string | String specifying the conversion applied to the original file; should be persistent across application restarts |
| `expectedSize` | number | Expected size of the generated file; 0 if unknown |


## InputInlineQueryResultInputUnion
Represents a single result of an inline query; for bots only
- [`InputInlineQueryResultAnimatedGifInput`](#inputinlinequeryresultanimatedgifinput)
- [`InputInlineQueryResultAnimatedMpeg4Input`](#inputinlinequeryresultanimatedmpeg4input)
- [`InputInlineQueryResultArticleInput`](#inputinlinequeryresultarticleinput)
- [`InputInlineQueryResultAudioInput`](#inputinlinequeryresultaudioinput)
- [`InputInlineQueryResultContactInput`](#inputinlinequeryresultcontactinput)
- [`InputInlineQueryResultDocumentInput`](#inputinlinequeryresultdocumentinput)
- [`InputInlineQueryResultGameInput`](#inputinlinequeryresultgameinput)
- [`InputInlineQueryResultLocationInput`](#inputinlinequeryresultlocationinput)
- [`InputInlineQueryResultPhotoInput`](#inputinlinequeryresultphotoinput)
- [`InputInlineQueryResultStickerInput`](#inputinlinequeryresultstickerinput)
- [`InputInlineQueryResultVenueInput`](#inputinlinequeryresultvenueinput)
- [`InputInlineQueryResultVideoInput`](#inputinlinequeryresultvideoinput)
- [`InputInlineQueryResultVoiceNoteInput`](#inputinlinequeryresultvoicenoteinput)
#### InputInlineQueryResultAnimatedGifInput
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultAnimatedMpeg4Input
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultArticleInput
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultAudioInput
Represents a link to an MP3 audio file


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultAudio" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the audio file |
| `performer` | string | Performer of the audio file |
| `audioUrl` | string | The URL of the audio file |
| `audioDuration` | number | Audio file duration, in seconds |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultContactInput
Represents a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultContact" | |
| `id` | string | Unique identifier of the query result |
| `contact` | [Contact](#contactinput) | User contact |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultDocumentInput
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultGameInput
Represents a game


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultGame" | |
| `id` | string | Unique identifier of the query result |
| `gameShortName` | string | Short name of the game |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | Message reply markup. Must be of type replyMarkupInlineKeyboard or null |

#### InputInlineQueryResultLocationInput
Represents a point on the map


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultLocation" | |
| `id` | string | Unique identifier of the query result |
| `location` | [Location](#locationinput) | Location result |
| `livePeriod` | number | Amount of time relative to the message sent time until the location can be updated, in seconds |
| `title` | string | Title of the result |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultPhotoInput
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultStickerInput
Represents a link to a WEBP sticker


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultSticker" | |
| `id` | string | Unique identifier of the query result |
| `thumbnailUrl` | string | URL of the sticker thumbnail, if it exists |
| `stickerUrl` | string | The URL of the WEBP sticker (sticker file size must not exceed 5MB) |
| `stickerWidth` | number | Width of the sticker |
| `stickerHeight` | number | Height of the sticker |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVenueInput
Represents information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultVenue" | |
| `id` | string | Unique identifier of the query result |
| `venue` | [Venue](#venueinput) | Venue result |
| `thumbnailUrl` | string | URL of the result thumbnail, if it exists |
| `thumbnailWidth` | number | Thumbnail width, if known |
| `thumbnailHeight` | number | Thumbnail height, if known |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVideoInput
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
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact |

#### InputInlineQueryResultVoiceNoteInput
Represents a link to an opus-encoded audio file within an OGG container, single channel audio


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputInlineQueryResultVoiceNote" | |
| `id` | string | Unique identifier of the query result |
| `title` | string | Title of the voice note |
| `voiceNoteUrl` | string | The URL of the voice note file |
| `voiceNoteDuration` | number | Duration of the voice note, in seconds |
| `replyMarkup` | [ReplyMarkupUnion](#replymarkupinputunion) | The message reply markup. Must be of type replyMarkupInlineKeyboard or null |
| `inputMessageContent` | [InputMessageContentUnion](#inputmessagecontentinputunion) | The content of the message to be sent. Must be one of the following types: InputMessageText, InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact |


## InputMessageContentInputUnion
The content of a message to send
- [`InputMessageTextInput`](#inputmessagetextinput)
- [`InputMessageAnimationInput`](#inputmessageanimationinput)
- [`InputMessageAudioInput`](#inputmessageaudioinput)
- [`InputMessageDocumentInput`](#inputmessagedocumentinput)
- [`InputMessagePhotoInput`](#inputmessagephotoinput)
- [`InputMessageStickerInput`](#inputmessagestickerinput)
- [`InputMessageVideoInput`](#inputmessagevideoinput)
- [`InputMessageVideoNoteInput`](#inputmessagevideonoteinput)
- [`InputMessageVoiceNoteInput`](#inputmessagevoicenoteinput)
- [`InputMessageLocationInput`](#inputmessagelocationinput)
- [`InputMessageVenueInput`](#inputmessagevenueinput)
- [`InputMessageContactInput`](#inputmessagecontactinput)
- [`InputMessageGameInput`](#inputmessagegameinput)
- [`InputMessageInvoiceInput`](#inputmessageinvoiceinput)
- [`InputMessageForwardedInput`](#inputmessageforwardedinput)
#### InputMessageTextInput
A text message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageText" | |
| `text` | [FormattedText](#formattedtextinput) | Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified manually |
| `disableWebPagePreview` | boolean | True, if rich web page previews for URLs in the message text should be disabled |
| `clearDraft` | boolean | True, if a chat message draft should be deleted |

#### InputMessageAnimationInput
An animation message (GIF-style).


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageAnimation" | |
| `animation` | [InputFileUnion](#inputfileinputunion) | Animation file to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Animation thumbnail, if available |
| `duration` | number | Duration of the animation, in seconds |
| `width` | number | Width of the animation; may be replaced by the server |
| `height` | number | Height of the animation; may be replaced by the server |
| `caption` | [FormattedText](#formattedtextinput) | Animation caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageAudioInput
An audio message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageAudio" | |
| `audio` | [InputFileUnion](#inputfileinputunion) | Audio file to be sent |
| `albumCoverThumbnail` | [InputThumbnail](#inputthumbnailinput) | Thumbnail of the cover for the album, if available |
| `duration` | number | Duration of the audio, in seconds; may be replaced by the server |
| `title` | string | Title of the audio; 0-64 characters; may be replaced by the server |
| `performer` | string | Performer of the audio; 0-64 characters, may be replaced by the server |
| `caption` | [FormattedText](#formattedtextinput) | Audio caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageDocumentInput
A document message (general file)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageDocument" | |
| `document` | [InputFileUnion](#inputfileinputunion) | Document to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Document thumbnail, if available |
| `caption` | [FormattedText](#formattedtextinput) | Document caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessagePhotoInput
A photo message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessagePhoto" | |
| `photo` | [InputFileUnion](#inputfileinputunion) | Photo to send |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Photo thumbnail to be sent, this is sent to the other party in secret chats only |
| `addedStickerFileIds` | number[] | File identifiers of the stickers added to the photo, if applicable |
| `width` | number | Photo width |
| `height` | number | Photo height |
| `caption` | [FormattedText](#formattedtextinput) | Photo caption; 0-GetOption("message_caption_length_max") characters |
| `ttl` | number | Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats |

#### InputMessageStickerInput
A sticker message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageSticker" | |
| `sticker` | [InputFileUnion](#inputfileinputunion) | Sticker to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Sticker thumbnail, if available |
| `width` | number | Sticker width |
| `height` | number | Sticker height |

#### InputMessageVideoInput
A video message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVideo" | |
| `video` | [InputFileUnion](#inputfileinputunion) | Video to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Video thumbnail, if available |
| `addedStickerFileIds` | number[] | File identifiers of the stickers added to the video, if applicable |
| `duration` | number | Duration of the video, in seconds |
| `width` | number | Video width |
| `height` | number | Video height |
| `supportsStreaming` | boolean | True, if the video should be tried to be streamed |
| `caption` | [FormattedText](#formattedtextinput) | Video caption; 0-GetOption("message_caption_length_max") characters |
| `ttl` | number | Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only in private chats |

#### InputMessageVideoNoteInput
A video note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVideoNote" | |
| `videoNote` | [InputFileUnion](#inputfileinputunion) | Video note to be sent |
| `thumbnail` | [InputThumbnail](#inputthumbnailinput) | Video thumbnail, if available |
| `duration` | number | Duration of the video, in seconds |
| `length` | number | Video width and height; must be positive and not greater than 640 |

#### InputMessageVoiceNoteInput
A voice note message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVoiceNote" | |
| `voiceNote` | [InputFileUnion](#inputfileinputunion) | Voice note to be sent |
| `duration` | number | Duration of the voice note, in seconds |
| `waveform` | string | Waveform representation of the voice note, in 5-bit format |
| `caption` | [FormattedText](#formattedtextinput) | Voice note caption; 0-GetOption("message_caption_length_max") characters |

#### InputMessageLocationInput
A message with a location


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageLocation" | |
| `location` | [Location](#locationinput) | Location to be sent |
| `livePeriod` | number | Period for which the location can be updated, in seconds; should bebetween 60 and 86400 for a live location and 0 otherwise |

#### InputMessageVenueInput
A message with information about a venue


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageVenue" | |
| `venue` | [Venue](#venueinput) | Venue to send |

#### InputMessageContactInput
A message containing a user contact


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageContact" | |
| `contact` | [Contact](#contactinput) | Contact to send |

#### InputMessageGameInput
A message with a game; not supported for channels or secret chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageGame" | |
| `botUserId` | number | User identifier of the bot that owns the game |
| `gameShortName` | string | Short name of the game |

#### InputMessageInvoiceInput
A message with an invoice; can be used only by bots and only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageInvoice" | |
| `invoice` | [Invoice](#invoiceinput) | Invoice |
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

#### InputMessageForwardedInput
A forwarded message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputMessageForwarded" | |
| `fromChatId` | number | Identifier for the chat this forwarded message came from |
| `messageId` | number | Identifier of the message to forward |
| `inGameShare` | boolean | True, if a game message should be shared within a launched game; applies only to game messages |


## InputPassportElementInputUnion
Contains information about a Telegram Passport element to be saved
- [`InputPassportElementPersonalDetailsInput`](#inputpassportelementpersonaldetailsinput)
- [`InputPassportElementPassportInput`](#inputpassportelementpassportinput)
- [`InputPassportElementDriverLicenseInput`](#inputpassportelementdriverlicenseinput)
- [`InputPassportElementIdentityCardInput`](#inputpassportelementidentitycardinput)
- [`InputPassportElementInternalPassportInput`](#inputpassportelementinternalpassportinput)
- [`InputPassportElementAddressInput`](#inputpassportelementaddressinput)
- [`InputPassportElementUtilityBillInput`](#inputpassportelementutilitybillinput)
- [`InputPassportElementBankStatementInput`](#inputpassportelementbankstatementinput)
- [`InputPassportElementRentalAgreementInput`](#inputpassportelementrentalagreementinput)
- [`InputPassportElementPassportRegistrationInput`](#inputpassportelementpassportregistrationinput)
- [`InputPassportElementTemporaryRegistrationInput`](#inputpassportelementtemporaryregistrationinput)
- [`InputPassportElementPhoneNumberInput`](#inputpassportelementphonenumberinput)
- [`InputPassportElementEmailAddressInput`](#inputpassportelementemailaddressinput)
#### InputPassportElementPersonalDetailsInput
A Telegram Passport element to be saved containing the user's personal details


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPersonalDetails" | |
| `personalDetails` | [PersonalDetails](#personaldetailsinput) | Personal details of the user |

#### InputPassportElementPassportInput
A Telegram Passport element to be saved containing the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPassport" | |
| `passport` | [InputIdentityDocument](#inputidentitydocumentinput) | The passport to be saved |

#### InputPassportElementDriverLicenseInput
A Telegram Passport element to be saved containing the user's driver license


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementDriverLicense" | |
| `driverLicense` | [InputIdentityDocument](#inputidentitydocumentinput) | The driver license to be saved |

#### InputPassportElementIdentityCardInput
A Telegram Passport element to be saved containing the user's identity card


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementIdentityCard" | |
| `identityCard` | [InputIdentityDocument](#inputidentitydocumentinput) | The identity card to be saved |

#### InputPassportElementInternalPassportInput
A Telegram Passport element to be saved containing the user's internal passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementInternalPassport" | |
| `internalPassport` | [InputIdentityDocument](#inputidentitydocumentinput) | The internal passport to be saved |

#### InputPassportElementAddressInput
A Telegram Passport element to be saved containing the user's address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementAddress" | |
| `address` | [Address](#addressinput) | The address to be saved |

#### InputPassportElementUtilityBillInput
A Telegram Passport element to be saved containing the user's utility bill


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementUtilityBill" | |
| `utilityBill` | [InputPersonalDocument](#inputpersonaldocumentinput) | The utility bill to be saved |

#### InputPassportElementBankStatementInput
A Telegram Passport element to be saved containing the user's bank statement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementBankStatement" | |
| `bankStatement` | [InputPersonalDocument](#inputpersonaldocumentinput) | The bank statement to be saved |

#### InputPassportElementRentalAgreementInput
A Telegram Passport element to be saved containing the user's rental agreement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementRentalAgreement" | |
| `rentalAgreement` | [InputPersonalDocument](#inputpersonaldocumentinput) | The rental agreement to be saved |

#### InputPassportElementPassportRegistrationInput
A Telegram Passport element to be saved containing the user's passport registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPassportRegistration" | |
| `passportRegistration` | [InputPersonalDocument](#inputpersonaldocumentinput) | The passport registration page to be saved |

#### InputPassportElementTemporaryRegistrationInput
A Telegram Passport element to be saved containing the user's temporary registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementTemporaryRegistration" | |
| `temporaryRegistration` | [InputPersonalDocument](#inputpersonaldocumentinput) | The temporary registration document to be saved |

#### InputPassportElementPhoneNumberInput
A Telegram Passport element to be saved containing the user's phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementPhoneNumber" | |
| `phoneNumber` | string | The phone number to be saved |

#### InputPassportElementEmailAddressInput
A Telegram Passport element to be saved containing the user's email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementEmailAddress" | |
| `emailAddress` | string | The email address to be saved |


## InputPassportElementErrorSourceInputUnion
Contains the description of an error in a Telegram Passport element; for bots only
- [`InputPassportElementErrorSourceUnspecifiedInput`](#inputpassportelementerrorsourceunspecifiedinput)
- [`InputPassportElementErrorSourceDataFieldInput`](#inputpassportelementerrorsourcedatafieldinput)
- [`InputPassportElementErrorSourceFrontSideInput`](#inputpassportelementerrorsourcefrontsideinput)
- [`InputPassportElementErrorSourceReverseSideInput`](#inputpassportelementerrorsourcereversesideinput)
- [`InputPassportElementErrorSourceSelfieInput`](#inputpassportelementerrorsourceselfieinput)
- [`InputPassportElementErrorSourceTranslationFileInput`](#inputpassportelementerrorsourcetranslationfileinput)
- [`InputPassportElementErrorSourceTranslationFilesInput`](#inputpassportelementerrorsourcetranslationfilesinput)
- [`InputPassportElementErrorSourceFileInput`](#inputpassportelementerrorsourcefileinput)
- [`InputPassportElementErrorSourceFilesInput`](#inputpassportelementerrorsourcefilesinput)
#### InputPassportElementErrorSourceUnspecifiedInput
The element contains an error in an unspecified place. The error will be considered resolved when new data is added


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceUnspecified" | |
| `elementHash` | string | Current hash of the entire element |

#### InputPassportElementErrorSourceDataFieldInput
A data field contains an error. The error is considered resolved when the field's value changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceDataField" | |
| `fieldName` | string | Field name |
| `dataHash` | string | Current data hash |

#### InputPassportElementErrorSourceFrontSideInput
The front side of the document contains an error. The error is considered resolved when the file with the front side of the document changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFrontSide" | |
| `fileHash` | string | Current hash of the file containing the front side |

#### InputPassportElementErrorSourceReverseSideInput
The reverse side of the document contains an error. The error is considered resolved when the file with the reverse side of the document changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceReverseSide" | |
| `fileHash` | string | Current hash of the file containing the reverse side |

#### InputPassportElementErrorSourceSelfieInput
The selfie contains an error. The error is considered resolved when the file with the selfie changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceSelfie" | |
| `fileHash` | string | Current hash of the file containing the selfie |

#### InputPassportElementErrorSourceTranslationFileInput
One of the files containing the translation of the document contains an error. The error is considered resolved when the file with the translation changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceTranslationFile" | |
| `fileHash` | string | Current hash of the file containing the translation |

#### InputPassportElementErrorSourceTranslationFilesInput
The translation of the document contains an error. The error is considered resolved when the list of files changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceTranslationFiles" | |
| `fileHashes` | string[] | Current hashes of all files with the translation |

#### InputPassportElementErrorSourceFileInput
The file contains an error. The error is considered resolved when the file changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFile" | |
| `fileHash` | string | Current hash of the file which has the error |

#### InputPassportElementErrorSourceFilesInput
The list of attached files contains an error. The error is considered resolved when the file list changes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "inputPassportElementErrorSourceFiles" | |
| `fileHashes` | string[] | Current hashes of all attached files |


## KeyboardButtonTypeInputUnion
Describes a keyboard button type
- [`KeyboardButtonTypeTextInput`](#keyboardbuttontypetextinput)
- [`KeyboardButtonTypeRequestPhoneNumberInput`](#keyboardbuttontyperequestphonenumberinput)
- [`KeyboardButtonTypeRequestLocationInput`](#keyboardbuttontyperequestlocationinput)
#### KeyboardButtonTypeTextInput
A simple button, with text that should be sent when the button is pressed


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeText" | |

#### KeyboardButtonTypeRequestPhoneNumberInput
A button that sends the user's phone number when pressed; available only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeRequestPhoneNumber" | |

#### KeyboardButtonTypeRequestLocationInput
A button that sends the user's location when pressed; available only in private chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "keyboardButtonTypeRequestLocation" | |


## LanguagePackStringValueInputUnion
Represents the value of a string in a language pack
- [`LanguagePackStringValueOrdinaryInput`](#languagepackstringvalueordinaryinput)
- [`LanguagePackStringValuePluralizedInput`](#languagepackstringvaluepluralizedinput)
- [`LanguagePackStringValueDeletedInput`](#languagepackstringvaluedeletedinput)
#### LanguagePackStringValueOrdinaryInput
An ordinary language pack string


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStringValueOrdinary" | |
| `value` | string | String value |

#### LanguagePackStringValuePluralizedInput
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

#### LanguagePackStringValueDeletedInput
A deleted language pack string, the value should be taken from the built-in english language pack


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "languagePackStringValueDeleted" | |


## MaskPointInputUnion
Part of the face, relative to which a mask should be placed
- [`MaskPointForeheadInput`](#maskpointforeheadinput)
- [`MaskPointEyesInput`](#maskpointeyesinput)
- [`MaskPointMouthInput`](#maskpointmouthinput)
- [`MaskPointChinInput`](#maskpointchininput)
#### MaskPointForeheadInput
A mask should be placed relatively to the forehead


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointForehead" | |

#### MaskPointEyesInput
A mask should be placed relatively to the eyes


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointEyes" | |

#### MaskPointMouthInput
A mask should be placed relatively to the mouth


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointMouth" | |

#### MaskPointChinInput
A mask should be placed relatively to the chin


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "maskPointChin" | |


## NetworkStatisticsEntryInputUnion
Contains statistics about network usage
- [`NetworkStatisticsEntryFileInput`](#networkstatisticsentryfileinput)
- [`NetworkStatisticsEntryCallInput`](#networkstatisticsentrycallinput)
#### NetworkStatisticsEntryFileInput
Contains information about the total amount of data that was used to send and receive files


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkStatisticsEntryFile" | |
| `fileType` | [FileTypeUnion](#filetypeinputunion) | Type of the file the data is part of |
| `networkType` | [NetworkTypeUnion](#networktypeinputunion) | Type of the network the data was sent through. Call setNetworkType to maintain the actual network type |
| `sentBytes` | number | Total number of bytes sent |
| `receivedBytes` | number | Total number of bytes received |

#### NetworkStatisticsEntryCallInput
Contains information about the total amount of data that was used for calls


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkStatisticsEntryCall" | |
| `networkType` | [NetworkTypeUnion](#networktypeinputunion) | Type of the network the data was sent through. Call setNetworkType to maintain the actual network type |
| `sentBytes` | number | Total number of bytes sent |
| `receivedBytes` | number | Total number of bytes received |
| `duration` | number | Total call duration, in seconds |


## NetworkTypeInputUnion
Represents the type of a network
- [`NetworkTypeNoneInput`](#networktypenoneinput)
- [`NetworkTypeMobileInput`](#networktypemobileinput)
- [`NetworkTypeMobileRoamingInput`](#networktypemobileroaminginput)
- [`NetworkTypeWiFiInput`](#networktypewifiinput)
- [`NetworkTypeOtherInput`](#networktypeotherinput)
#### NetworkTypeNoneInput
The network is not available


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeNone" | |

#### NetworkTypeMobileInput
A mobile network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeMobile" | |

#### NetworkTypeMobileRoamingInput
A mobile roaming network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeMobileRoaming" | |

#### NetworkTypeWiFiInput
A Wi-Fi network


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeWiFi" | |

#### NetworkTypeOtherInput
A different network type (e.g., Ethernet network)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "networkTypeOther" | |


## NotificationSettingsScopeInputUnion
Describes the types of chats to which notification settings are applied
- [`NotificationSettingsScopePrivateChatsInput`](#notificationsettingsscopeprivatechatsinput)
- [`NotificationSettingsScopeGroupChatsInput`](#notificationsettingsscopegroupchatsinput)
#### NotificationSettingsScopePrivateChatsInput
Notification settings applied to all private and secret chats when the corresponding chat setting has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "notificationSettingsScopePrivateChats" | |

#### NotificationSettingsScopeGroupChatsInput
Notification settings applied to all basic groups, supergroups and channels when the corresponding chat setting has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "notificationSettingsScopeGroupChats" | |


## OptionValueInputUnion
Represents the value of an option
- [`OptionValueBooleanInput`](#optionvaluebooleaninput)
- [`OptionValueEmptyInput`](#optionvalueemptyinput)
- [`OptionValueIntegerInput`](#optionvalueintegerinput)
- [`OptionValueStringInput`](#optionvaluestringinput)
#### OptionValueBooleanInput
Boolean option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueBoolean" | |
| `value` | boolean | The value of the option |

#### OptionValueEmptyInput
An unknown option or an option which has a default value


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueEmpty" | |

#### OptionValueIntegerInput
An integer option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueInteger" | |
| `value` | number | The value of the option |

#### OptionValueStringInput
A string option


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "optionValueString" | |
| `value` | string | The value of the option |


## PassportElementTypeInputUnion
Contains the type of a Telegram Passport element
- [`PassportElementTypePersonalDetailsInput`](#passportelementtypepersonaldetailsinput)
- [`PassportElementTypePassportInput`](#passportelementtypepassportinput)
- [`PassportElementTypeDriverLicenseInput`](#passportelementtypedriverlicenseinput)
- [`PassportElementTypeIdentityCardInput`](#passportelementtypeidentitycardinput)
- [`PassportElementTypeInternalPassportInput`](#passportelementtypeinternalpassportinput)
- [`PassportElementTypeAddressInput`](#passportelementtypeaddressinput)
- [`PassportElementTypeUtilityBillInput`](#passportelementtypeutilitybillinput)
- [`PassportElementTypeBankStatementInput`](#passportelementtypebankstatementinput)
- [`PassportElementTypeRentalAgreementInput`](#passportelementtyperentalagreementinput)
- [`PassportElementTypePassportRegistrationInput`](#passportelementtypepassportregistrationinput)
- [`PassportElementTypeTemporaryRegistrationInput`](#passportelementtypetemporaryregistrationinput)
- [`PassportElementTypePhoneNumberInput`](#passportelementtypephonenumberinput)
- [`PassportElementTypeEmailAddressInput`](#passportelementtypeemailaddressinput)
#### PassportElementTypePersonalDetailsInput
A Telegram Passport element containing the user's personal details


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePersonalDetails" | |

#### PassportElementTypePassportInput
A Telegram Passport element containing the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePassport" | |

#### PassportElementTypeDriverLicenseInput
A Telegram Passport element containing the user's driver license


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeDriverLicense" | |

#### PassportElementTypeIdentityCardInput
A Telegram Passport element containing the user's identity card


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeIdentityCard" | |

#### PassportElementTypeInternalPassportInput
A Telegram Passport element containing the user's internal passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeInternalPassport" | |

#### PassportElementTypeAddressInput
A Telegram Passport element containing the user's address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeAddress" | |

#### PassportElementTypeUtilityBillInput
A Telegram Passport element containing the user's utility bill


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeUtilityBill" | |

#### PassportElementTypeBankStatementInput
A Telegram Passport element containing the user's bank statement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeBankStatement" | |

#### PassportElementTypeRentalAgreementInput
A Telegram Passport element containing the user's rental agreement


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeRentalAgreement" | |

#### PassportElementTypePassportRegistrationInput
A Telegram Passport element containing the registration page of the user's passport


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePassportRegistration" | |

#### PassportElementTypeTemporaryRegistrationInput
A Telegram Passport element containing the user's temporary registration


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeTemporaryRegistration" | |

#### PassportElementTypePhoneNumberInput
A Telegram Passport element containing the user's phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypePhoneNumber" | |

#### PassportElementTypeEmailAddressInput
A Telegram Passport element containing the user's email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "passportElementTypeEmailAddress" | |


## ProxyTypeInputUnion
Describes the type of the proxy server
- [`ProxyTypeSocks5Input`](#proxytypesocks5input)
- [`ProxyTypeHttpInput`](#proxytypehttpinput)
- [`ProxyTypeMtprotoInput`](#proxytypemtprotoinput)
#### ProxyTypeSocks5Input
A SOCKS5 proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeSocks5" | |
| `username` | string | Username for logging in; may be empty |
| `password` | string | Password for logging in; may be empty |

#### ProxyTypeHttpInput
A HTTP transparent proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeHttp" | |
| `username` | string | Username for logging in; may be empty |
| `password` | string | Password for logging in; may be empty |
| `httpOnly` | boolean | Pass true, if the proxy supports only HTTP requests and doesn't support transparent TCP connections via HTTP CONNECT method |

#### ProxyTypeMtprotoInput
An MTProto proxy server


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "proxyTypeMtproto" | |
| `secret` | string | The proxy's secret in hexadecimal encoding |


## ReplyMarkupInputUnion
Contains a description of a custom keyboard and actions that can be done with it to quickly reply to bots
- [`ReplyMarkupRemoveKeyboardInput`](#replymarkupremovekeyboardinput)
- [`ReplyMarkupForceReplyInput`](#replymarkupforcereplyinput)
- [`ReplyMarkupShowKeyboardInput`](#replymarkupshowkeyboardinput)
- [`ReplyMarkupInlineKeyboardInput`](#replymarkupinlinekeyboardinput)
#### ReplyMarkupRemoveKeyboardInput
Instructs clients to remove the keyboard once this message has been received. This kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup with message_id == 0 will be sent


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupRemoveKeyboard" | |
| `isPersonal` | boolean | True, if the keyboard is removed only for the mentioned users or the target user of a reply |

#### ReplyMarkupForceReplyInput
Instructs clients to force a reply to this message


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupForceReply" | |
| `isPersonal` | boolean | True, if a forced reply must automatically be shown to the current user. For outgoing messages, specify true to show the forced reply only for the mentioned users and for the target user of a reply |

#### ReplyMarkupShowKeyboardInput
Contains a custom keyboard layout to quickly reply to bots


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupShowKeyboard" | |
| `rows` | [KeyboardButton[][]](#keyboardbuttoninput) | A list of rows of bot keyboard buttons |
| `resizeKeyboard` | boolean | True, if the client needs to resize the keyboard vertically |
| `oneTime` | boolean | True, if the client needs to hide the keyboard after use |
| `isPersonal` | boolean | True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the keyboard only for the mentioned users and for the target user of a reply |

#### ReplyMarkupInlineKeyboardInput
Contains an inline keyboard layout


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "replyMarkupInlineKeyboard" | |
| `rows` | [InlineKeyboardButton[][]](#inlinekeyboardbuttoninput) | A list of rows of inline keyboard buttons |


## SearchMessagesFilterInputUnion
Represents a filter for message search results
- [`SearchMessagesFilterEmptyInput`](#searchmessagesfilteremptyinput)
- [`SearchMessagesFilterAnimationInput`](#searchmessagesfilteranimationinput)
- [`SearchMessagesFilterAudioInput`](#searchmessagesfilteraudioinput)
- [`SearchMessagesFilterDocumentInput`](#searchmessagesfilterdocumentinput)
- [`SearchMessagesFilterPhotoInput`](#searchmessagesfilterphotoinput)
- [`SearchMessagesFilterVideoInput`](#searchmessagesfiltervideoinput)
- [`SearchMessagesFilterVoiceNoteInput`](#searchmessagesfiltervoicenoteinput)
- [`SearchMessagesFilterPhotoAndVideoInput`](#searchmessagesfilterphotoandvideoinput)
- [`SearchMessagesFilterUrlInput`](#searchmessagesfilterurlinput)
- [`SearchMessagesFilterChatPhotoInput`](#searchmessagesfilterchatphotoinput)
- [`SearchMessagesFilterCallInput`](#searchmessagesfiltercallinput)
- [`SearchMessagesFilterMissedCallInput`](#searchmessagesfiltermissedcallinput)
- [`SearchMessagesFilterVideoNoteInput`](#searchmessagesfiltervideonoteinput)
- [`SearchMessagesFilterVoiceAndVideoNoteInput`](#searchmessagesfiltervoiceandvideonoteinput)
- [`SearchMessagesFilterMentionInput`](#searchmessagesfiltermentioninput)
- [`SearchMessagesFilterUnreadMentionInput`](#searchmessagesfilterunreadmentioninput)
#### SearchMessagesFilterEmptyInput
Returns all found messages, no filter is applied


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterEmpty" | |

#### SearchMessagesFilterAnimationInput
Returns only animation messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterAnimation" | |

#### SearchMessagesFilterAudioInput
Returns only audio messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterAudio" | |

#### SearchMessagesFilterDocumentInput
Returns only document messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterDocument" | |

#### SearchMessagesFilterPhotoInput
Returns only photo messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterPhoto" | |

#### SearchMessagesFilterVideoInput
Returns only video messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVideo" | |

#### SearchMessagesFilterVoiceNoteInput
Returns only voice note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVoiceNote" | |

#### SearchMessagesFilterPhotoAndVideoInput
Returns only photo and video messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterPhotoAndVideo" | |

#### SearchMessagesFilterUrlInput
Returns only messages containing URLs


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterUrl" | |

#### SearchMessagesFilterChatPhotoInput
Returns only messages containing chat photos


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterChatPhoto" | |

#### SearchMessagesFilterCallInput
Returns only call messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterCall" | |

#### SearchMessagesFilterMissedCallInput
Returns only incoming call messages with missed/declined discard reasons


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterMissedCall" | |

#### SearchMessagesFilterVideoNoteInput
Returns only video note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVideoNote" | |

#### SearchMessagesFilterVoiceAndVideoNoteInput
Returns only voice and video note messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterVoiceAndVideoNote" | |

#### SearchMessagesFilterMentionInput
Returns only messages with mentions of the current user, or messages that are replies to their messages


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterMention" | |

#### SearchMessagesFilterUnreadMentionInput
Returns only messages with unread mentions of the current user or messages that are replies to their messages. When using this filter the results can't be additionally filtered by a query or by the sending user


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "searchMessagesFilterUnreadMention" | |


## SupergroupMembersFilterInputUnion
Specifies the kind of chat members to return in getSupergroupMembers
- [`SupergroupMembersFilterRecentInput`](#supergroupmembersfilterrecentinput)
- [`SupergroupMembersFilterAdministratorsInput`](#supergroupmembersfilteradministratorsinput)
- [`SupergroupMembersFilterSearchInput`](#supergroupmembersfiltersearchinput)
- [`SupergroupMembersFilterRestrictedInput`](#supergroupmembersfilterrestrictedinput)
- [`SupergroupMembersFilterBannedInput`](#supergroupmembersfilterbannedinput)
- [`SupergroupMembersFilterBotsInput`](#supergroupmembersfilterbotsinput)
#### SupergroupMembersFilterRecentInput
Returns recently active users in reverse chronological order


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterRecent" | |

#### SupergroupMembersFilterAdministratorsInput
Returns the creator and administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterAdministrators" | |

#### SupergroupMembersFilterSearchInput
Used to search for supergroup or channel members via a (string) query


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterSearch" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterRestrictedInput
Returns restricted supergroup members; can be used only by administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterRestricted" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterBannedInput
Returns users banned from the supergroup or channel; can be used only by administrators


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterBanned" | |
| `query` | string | Query to search for |

#### SupergroupMembersFilterBotsInput
Returns bot members of the supergroup or channel


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "supergroupMembersFilterBots" | |


## TextEntityTypeInputUnion
Represents a part of the text which must be formatted differently
- [`TextEntityTypeMentionInput`](#textentitytypementioninput)
- [`TextEntityTypeHashtagInput`](#textentitytypehashtaginput)
- [`TextEntityTypeCashtagInput`](#textentitytypecashtaginput)
- [`TextEntityTypeBotCommandInput`](#textentitytypebotcommandinput)
- [`TextEntityTypeUrlInput`](#textentitytypeurlinput)
- [`TextEntityTypeEmailAddressInput`](#textentitytypeemailaddressinput)
- [`TextEntityTypeBoldInput`](#textentitytypeboldinput)
- [`TextEntityTypeItalicInput`](#textentitytypeitalicinput)
- [`TextEntityTypeCodeInput`](#textentitytypecodeinput)
- [`TextEntityTypePreInput`](#textentitytypepreinput)
- [`TextEntityTypePreCodeInput`](#textentitytypeprecodeinput)
- [`TextEntityTypeTextUrlInput`](#textentitytypetexturlinput)
- [`TextEntityTypeMentionNameInput`](#textentitytypementionnameinput)
- [`TextEntityTypePhoneNumberInput`](#textentitytypephonenumberinput)
#### TextEntityTypeMentionInput
A mention of a user by their username


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeMention" | |

#### TextEntityTypeHashtagInput
A hashtag text, beginning with "#"


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeHashtag" | |

#### TextEntityTypeCashtagInput
A cashtag text, beginning with "$" and consisting of capital english letters (i.e. "$USD")


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeCashtag" | |

#### TextEntityTypeBotCommandInput
A bot command, beginning with "/". This shouldn't be highlighted if there are no bots in the chat


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeBotCommand" | |

#### TextEntityTypeUrlInput
An HTTP URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeUrl" | |

#### TextEntityTypeEmailAddressInput
An email address


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeEmailAddress" | |

#### TextEntityTypeBoldInput
A bold text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeBold" | |

#### TextEntityTypeItalicInput
An italic text


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeItalic" | |

#### TextEntityTypeCodeInput
Text that must be formatted as if inside a code HTML tag


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeCode" | |

#### TextEntityTypePreInput
Text that must be formatted as if inside a pre HTML tag


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePre" | |

#### TextEntityTypePreCodeInput
Text that must be formatted as if inside pre, and code HTML tags


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePreCode" | |
| `language` | string | Programming language of the code; as defined by the sender |

#### TextEntityTypeTextUrlInput
A text description shown instead of a raw URL


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeTextUrl" | |
| `url` | string | HTTP or tg:// URL to be opened when the link is clicked |

#### TextEntityTypeMentionNameInput
A text shows instead of a raw mention of the user (e.g., when the user has no username)


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypeMentionName" | |
| `userId` | number | Identifier of the mentioned user |

#### TextEntityTypePhoneNumberInput
A phone number


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textEntityTypePhoneNumber" | |


## TextParseModeInputUnion
Describes the way the text should be parsed for TextEntities
- [`TextParseModeMarkdownInput`](#textparsemodemarkdowninput)
- [`TextParseModeHtmlInput`](#textparsemodehtmlinput)
#### TextParseModeMarkdownInput
The text should be parsed in markdown-style


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textParseModeMarkdown" | |

#### TextParseModeHtmlInput
The text should be parsed in HTML-style


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "textParseModeHTML" | |


## TopChatCategoryInputUnion
Represents the categories of chats for which a list of frequently used chats can be retrieved
- [`TopChatCategoryUsersInput`](#topchatcategoryusersinput)
- [`TopChatCategoryBotsInput`](#topchatcategorybotsinput)
- [`TopChatCategoryGroupsInput`](#topchatcategorygroupsinput)
- [`TopChatCategoryChannelsInput`](#topchatcategorychannelsinput)
- [`TopChatCategoryInlineBotsInput`](#topchatcategoryinlinebotsinput)
- [`TopChatCategoryCallsInput`](#topchatcategorycallsinput)
#### TopChatCategoryUsersInput
A category containing frequently used private chats with non-bot users


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryUsers" | |

#### TopChatCategoryBotsInput
A category containing frequently used private chats with bot users


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryBots" | |

#### TopChatCategoryGroupsInput
A category containing frequently used basic groups and supergroups


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryGroups" | |

#### TopChatCategoryChannelsInput
A category containing frequently used channels


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryChannels" | |

#### TopChatCategoryInlineBotsInput
A category containing frequently used chats with inline bots sorted by their usage in inline mode


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryInlineBots" | |

#### TopChatCategoryCallsInput
A category containing frequently used chats used for calls


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "topChatCategoryCalls" | |


## UserPrivacySettingInputUnion
Describes available user privacy settings
- [`UserPrivacySettingShowStatusInput`](#userprivacysettingshowstatusinput)
- [`UserPrivacySettingAllowChatInvitesInput`](#userprivacysettingallowchatinvitesinput)
- [`UserPrivacySettingAllowCallsInput`](#userprivacysettingallowcallsinput)
#### UserPrivacySettingShowStatusInput
A privacy setting for managing whether the user's online status is visible


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingShowStatus" | |

#### UserPrivacySettingAllowChatInvitesInput
A privacy setting for managing whether the user can be invited to chats


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingAllowChatInvites" | |

#### UserPrivacySettingAllowCallsInput
A privacy setting for managing whether the user can be called


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingAllowCalls" | |


## UserPrivacySettingRuleInputUnion
Represents a single rule for managing privacy settings
- [`UserPrivacySettingRuleAllowAllInput`](#userprivacysettingruleallowallinput)
- [`UserPrivacySettingRuleAllowContactsInput`](#userprivacysettingruleallowcontactsinput)
- [`UserPrivacySettingRuleAllowUsersInput`](#userprivacysettingruleallowusersinput)
- [`UserPrivacySettingRuleRestrictAllInput`](#userprivacysettingrulerestrictallinput)
- [`UserPrivacySettingRuleRestrictContactsInput`](#userprivacysettingrulerestrictcontactsinput)
- [`UserPrivacySettingRuleRestrictUsersInput`](#userprivacysettingrulerestrictusersinput)
#### UserPrivacySettingRuleAllowAllInput
A rule to allow all users to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowAll" | |

#### UserPrivacySettingRuleAllowContactsInput
A rule to allow all of a user's contacts to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowContacts" | |

#### UserPrivacySettingRuleAllowUsersInput
A rule to allow certain specified users to do something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleAllowUsers" | |
| `userIds` | number[] | The user identifiers |

#### UserPrivacySettingRuleRestrictAllInput
A rule to restrict all users from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictAll" | |

#### UserPrivacySettingRuleRestrictContactsInput
A rule to restrict all contacts of a user from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictContacts" | |

#### UserPrivacySettingRuleRestrictUsersInput
A rule to restrict all specified users from doing something


| Parameter | Type | Description |
| ---- | ---- | ---- |
| `_` | "userPrivacySettingRuleRestrictUsers" | |
| `userIds` | number[] | The user identifiers |
