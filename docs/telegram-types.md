# Telegram types

- [`AccountAuthorizationsUnion`](#accountauthorizationsunion)
- [`AccountDaysTtlUnion`](#accountdaysttlunion)
- [`AccountPasswordUnion`](#accountpasswordunion)
- [`AccountPasswordSettingsUnion`](#accountpasswordsettingsunion)
- [`AccountPasswordSettingsUnion`](#accountpasswordsettingsunion)
- [`AccountPrivacyRulesUnion`](#accountprivacyrulesunion)
- [`AccountTmpPasswordUnion`](#accounttmppasswordunion)
- [`AuthAuthorizationUnion`](#authauthorizationunion)
- [`AuthCheckedPhoneUnion`](#authcheckedphoneunion)
- [`AuthCodeTypeUnion`](#authcodetypeunion)
- [`AuthExportedAuthorizationUnion`](#authexportedauthorizationunion)
- [`AuthPasswordRecoveryUnion`](#authpasswordrecoveryunion)
- [`AuthSentCodeUnion`](#authsentcodeunion)
- [`AuthSentCodeTypeUnion`](#authsentcodetypeunion)
- [`AuthorizationUnion`](#authorizationunion)
- [`BotCommandUnion`](#botcommandunion)
- [`BotInfoUnion`](#botinfounion)
- [`BotInlineMessageUnion`](#botinlinemessageunion)
- [`BotInlineResultUnion`](#botinlineresultunion)
- [`CdnConfigUnion`](#cdnconfigunion)
- [`CdnFileHashUnion`](#cdnfilehashunion)
- [`CdnPublicKeyUnion`](#cdnpublickeyunion)
- [`ChannelAdminLogEventUnion`](#channeladminlogeventunion)
- [`ChannelAdminLogEventActionUnion`](#channeladminlogeventactionunion)
- [`ChannelAdminLogEventsFilterUnion`](#channeladminlogeventsfilterunion)
- [`ChannelAdminRightsUnion`](#channeladminrightsunion)
- [`ChannelBannedRightsUnion`](#channelbannedrightsunion)
- [`ChannelMessagesFilterUnion`](#channelmessagesfilterunion)
- [`ChannelParticipantUnion`](#channelparticipantunion)
- [`ChannelParticipantsFilterUnion`](#channelparticipantsfilterunion)
- [`ChannelsAdminLogResultsUnion`](#channelsadminlogresultsunion)
- [`ChannelsChannelParticipantUnion`](#channelschannelparticipantunion)
- [`ChannelsChannelParticipantsUnion`](#channelschannelparticipantsunion)
- [`ChatUnion`](#chatunion)
- [`ChatFullUnion`](#chatfullunion)
- [`ChatInviteUnion`](#chatinviteunion)
- [`ChatParticipantUnion`](#chatparticipantunion)
- [`ChatParticipantsUnion`](#chatparticipantsunion)
- [`ChatPhotoUnion`](#chatphotounion)
- [`ConfigUnion`](#configunion)
- [`ContactUnion`](#contactunion)
- [`ContactBlockedUnion`](#contactblockedunion)
- [`ContactLinkUnion`](#contactlinkunion)
- [`ContactStatusUnion`](#contactstatusunion)
- [`ContactsBlockedUnion`](#contactsblockedunion)
- [`ContactsContactsUnion`](#contactscontactsunion)
- [`ContactsFoundUnion`](#contactsfoundunion)
- [`ContactsImportedContactsUnion`](#contactsimportedcontactsunion)
- [`ContactsLinkUnion`](#contactslinkunion)
- [`ContactsResolvedPeerUnion`](#contactsresolvedpeerunion)
- [`ContactsTopPeersUnion`](#contactstoppeersunion)
- [`DataJsonUnion`](#datajsonunion)
- [`DcOptionUnion`](#dcoptionunion)
- [`DialogUnion`](#dialogunion)
- [`DisabledFeatureUnion`](#disabledfeatureunion)
- [`DocumentUnion`](#documentunion)
- [`DocumentAttributeUnion`](#documentattributeunion)
- [`DraftMessageUnion`](#draftmessageunion)
- [`EncryptedChatUnion`](#encryptedchatunion)
- [`EncryptedFileUnion`](#encryptedfileunion)
- [`EncryptedMessageUnion`](#encryptedmessageunion)
- [`ErrorUnion`](#errorunion)
- [`ExportedChatInviteUnion`](#exportedchatinviteunion)
- [`ExportedMessageLinkUnion`](#exportedmessagelinkunion)
- [`FileLocationUnion`](#filelocationunion)
- [`FoundGifUnion`](#foundgifunion)
- [`GameUnion`](#gameunion)
- [`GeoPointUnion`](#geopointunion)
- [`HelpAppUpdateUnion`](#helpappupdateunion)
- [`HelpInviteTextUnion`](#helpinvitetextunion)
- [`HelpSupportUnion`](#helpsupportunion)
- [`HelpTermsOfServiceUnion`](#helptermsofserviceunion)
- [`HighScoreUnion`](#highscoreunion)
- [`ImportedContactUnion`](#importedcontactunion)
- [`InlineBotSwitchPmUnion`](#inlinebotswitchpmunion)
- [`InputAppEventUnion`](#inputappeventunion)
- [`InputBotInlineMessageUnion`](#inputbotinlinemessageunion)
- [`InputBotInlineMessageIdUnion`](#inputbotinlinemessageidunion)
- [`InputBotInlineResultUnion`](#inputbotinlineresultunion)
- [`InputChannelUnion`](#inputchannelunion)
- [`InputChatPhotoUnion`](#inputchatphotounion)
- [`InputContactUnion`](#inputcontactunion)
- [`InputDocumentUnion`](#inputdocumentunion)
- [`InputEncryptedChatUnion`](#inputencryptedchatunion)
- [`InputEncryptedFileUnion`](#inputencryptedfileunion)
- [`InputFileUnion`](#inputfileunion)
- [`InputFileLocationUnion`](#inputfilelocationunion)
- [`InputGameUnion`](#inputgameunion)
- [`InputGeoPointUnion`](#inputgeopointunion)
- [`InputMediaUnion`](#inputmediaunion)
- [`InputNotifyPeerUnion`](#inputnotifypeerunion)
- [`InputPaymentCredentialsUnion`](#inputpaymentcredentialsunion)
- [`InputPeerUnion`](#inputpeerunion)
- [`InputPeerNotifyEventsUnion`](#inputpeernotifyeventsunion)
- [`InputPeerNotifySettingsUnion`](#inputpeernotifysettingsunion)
- [`InputPhoneCallUnion`](#inputphonecallunion)
- [`InputPhotoUnion`](#inputphotounion)
- [`InputPrivacyKeyUnion`](#inputprivacykeyunion)
- [`InputPrivacyRuleUnion`](#inputprivacyruleunion)
- [`InputStickerSetUnion`](#inputstickersetunion)
- [`InputStickerSetItemUnion`](#inputstickersetitemunion)
- [`InputStickeredMediaUnion`](#inputstickeredmediaunion)
- [`InputUserUnion`](#inputuserunion)
- [`InputWebDocumentUnion`](#inputwebdocumentunion)
- [`InputWebFileLocationUnion`](#inputwebfilelocationunion)
- [`InvoiceUnion`](#invoiceunion)
- [`KeyboardButtonUnion`](#keyboardbuttonunion)
- [`KeyboardButtonRowUnion`](#keyboardbuttonrowunion)
- [`LabeledPriceUnion`](#labeledpriceunion)
- [`LangPackDifferenceUnion`](#langpackdifferenceunion)
- [`LangPackLanguageUnion`](#langpacklanguageunion)
- [`LangPackStringUnion`](#langpackstringunion)
- [`MaskCoordsUnion`](#maskcoordsunion)
- [`MessageUnion`](#messageunion)
- [`MessageActionUnion`](#messageactionunion)
- [`MessageEntityUnion`](#messageentityunion)
- [`MessageFwdHeaderUnion`](#messagefwdheaderunion)
- [`MessageMediaUnion`](#messagemediaunion)
- [`MessageRangeUnion`](#messagerangeunion)
- [`MessagesAffectedHistoryUnion`](#messagesaffectedhistoryunion)
- [`MessagesAffectedMessagesUnion`](#messagesaffectedmessagesunion)
- [`MessagesAllStickersUnion`](#messagesallstickersunion)
- [`MessagesArchivedStickersUnion`](#messagesarchivedstickersunion)
- [`MessagesBotCallbackAnswerUnion`](#messagesbotcallbackanswerunion)
- [`MessagesBotResultsUnion`](#messagesbotresultsunion)
- [`MessagesChatFullUnion`](#messageschatfullunion)
- [`MessagesChatsUnion`](#messageschatsunion)
- [`MessagesDhConfigUnion`](#messagesdhconfigunion)
- [`MessagesDialogsUnion`](#messagesdialogsunion)
- [`MessagesFavedStickersUnion`](#messagesfavedstickersunion)
- [`MessagesFeaturedStickersUnion`](#messagesfeaturedstickersunion)
- [`MessagesFilterUnion`](#messagesfilterunion)
- [`MessagesFoundGifsUnion`](#messagesfoundgifsunion)
- [`MessagesHighScoresUnion`](#messageshighscoresunion)
- [`MessagesMessageEditDataUnion`](#messagesmessageeditdataunion)
- [`MessagesMessagesUnion`](#messagesmessagesunion)
- [`MessagesPeerDialogsUnion`](#messagespeerdialogsunion)
- [`MessagesRecentStickersUnion`](#messagesrecentstickersunion)
- [`MessagesSavedGifsUnion`](#messagessavedgifsunion)
- [`MessagesSentEncryptedMessageUnion`](#messagessentencryptedmessageunion)
- [`MessagesStickerSetUnion`](#messagesstickersetunion)
- [`MessagesStickerSetInstallResultUnion`](#messagesstickersetinstallresultunion)
- [`MessagesStickersUnion`](#messagesstickersunion)
- [`NearestDcUnion`](#nearestdcunion)
- [`NotifyPeerUnion`](#notifypeerunion)
- [`PageUnion`](#pageunion)
- [`PageBlockUnion`](#pageblockunion)
- [`PaymentChargeUnion`](#paymentchargeunion)
- [`PaymentRequestedInfoUnion`](#paymentrequestedinfounion)
- [`PaymentSavedCredentialsUnion`](#paymentsavedcredentialsunion)
- [`PaymentsPaymentFormUnion`](#paymentspaymentformunion)
- [`PaymentsPaymentReceiptUnion`](#paymentspaymentreceiptunion)
- [`PaymentsPaymentResultUnion`](#paymentspaymentresultunion)
- [`PaymentsSavedInfoUnion`](#paymentssavedinfounion)
- [`PaymentsValidatedRequestedInfoUnion`](#paymentsvalidatedrequestedinfounion)
- [`PeerUnion`](#peerunion)
- [`PeerNotifyEventsUnion`](#peernotifyeventsunion)
- [`PeerNotifySettingsUnion`](#peernotifysettingsunion)
- [`PeerSettingsUnion`](#peersettingsunion)
- [`PhoneCallUnion`](#phonecallunion)
- [`PhoneCallDiscardReasonUnion`](#phonecalldiscardreasonunion)
- [`PhoneCallProtocolUnion`](#phonecallprotocolunion)
- [`PhoneConnectionUnion`](#phoneconnectionunion)
- [`PhonePhoneCallUnion`](#phonephonecallunion)
- [`PhotoUnion`](#photounion)
- [`PhotoSizeUnion`](#photosizeunion)
- [`PhotosPhotoUnion`](#photosphotounion)
- [`PhotosPhotosUnion`](#photosphotosunion)
- [`PopularContactUnion`](#popularcontactunion)
- [`PostAddressUnion`](#postaddressunion)
- [`PrivacyKeyUnion`](#privacykeyunion)
- [`PrivacyRuleUnion`](#privacyruleunion)
- [`ReceivedNotifyMessageUnion`](#receivednotifymessageunion)
- [`ReplyMarkupUnion`](#replymarkupunion)
- [`ReportReasonUnion`](#reportreasonunion)
- [`RichTextUnion`](#richtextunion)
- [`SendMessageActionUnion`](#sendmessageactionunion)
- [`ShippingOptionUnion`](#shippingoptionunion)
- [`StickerPackUnion`](#stickerpackunion)
- [`StickerSetUnion`](#stickersetunion)
- [`StickerSetCoveredUnion`](#stickersetcoveredunion)
- [`StorageFileTypeUnion`](#storagefiletypeunion)
- [`TopPeerUnion`](#toppeerunion)
- [`TopPeerCategoryUnion`](#toppeercategoryunion)
- [`TopPeerCategoryPeersUnion`](#toppeercategorypeersunion)
- [`TrueUnion`](#trueunion)
- [`UpdateUnion`](#updateunion)
- [`UpdatesUnion`](#updatesunion)
- [`UpdatesChannelDifferenceUnion`](#updateschanneldifferenceunion)
- [`UpdatesDifferenceUnion`](#updatesdifferenceunion)
- [`UpdatesStateUnion`](#updatesstateunion)
- [`UploadCdnFileUnion`](#uploadcdnfileunion)
- [`UploadFileUnion`](#uploadfileunion)
- [`UploadWebFileUnion`](#uploadwebfileunion)
- [`UserUnion`](#userunion)
- [`UserFullUnion`](#userfullunion)
- [`UserProfilePhotoUnion`](#userprofilephotounion)
- [`UserStatusUnion`](#userstatusunion)
- [`WallPaperUnion`](#wallpaperunion)
- [`WebDocumentUnion`](#webdocumentunion)
- [`WebPageUnion`](#webpageunion)

-------------

## AccountAuthorizationsUnion

It's an alias for the `AccountAuthorizations` type.

### AccountAuthorizations

**Predicate:** "account.authorizations"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.authorizations" |
| `authorizations` | [AuthorizationUnion[]](#authorizationunion) |  |  |

TypeScript interface:

```typescript
interface AccountAuthorizations {
  _: 'account.authorizations'
  authorizations: AuthorizationUnion[]
}
```


## AccountDaysTtlUnion

It's an alias for the `AccountDaysTtl` type.

### AccountDaysTtl

**Predicate:** "accountDaysTTL"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "accountDaysTTL" |
| `days` | number |  |  |

TypeScript interface:

```typescript
interface AccountDaysTtl {
  _: 'accountDaysTTL'
  days: number
}
```


## AccountPasswordUnion

Represents one of the following types:
- [`AccountNoPassword`](#accountnopassword)
- [`AccountPassword`](#accountpassword)

### AccountNoPassword

**Predicate:** "account.noPassword"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.noPassword" |
| `new_salt` | number[] |  |  |
| `email_unconfirmed_pattern` | string |  |  |

TypeScript interface:

```typescript
interface AccountNoPassword {
  _: 'account.noPassword'
  new_salt: number[]
  email_unconfirmed_pattern: string
}
```

### AccountPassword

**Predicate:** "account.password"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.password" |
| `current_salt` | number[] |  |  |
| `new_salt` | number[] |  |  |
| `hint` | string |  |  |
| `has_recovery` | boolean |  |  |
| `email_unconfirmed_pattern` | string |  |  |

TypeScript interface:

```typescript
interface AccountPassword {
  _: 'account.password'
  current_salt: number[]
  new_salt: number[]
  hint: string
  has_recovery: boolean
  email_unconfirmed_pattern: string
}
```


## AccountPasswordSettingsUnion

It's an alias for the `AccountPasswordSettings` type.

### AccountPasswordSettings

**Predicate:** "account.passwordSettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.passwordSettings" |
| `email` | string |  |  |

TypeScript interface:

```typescript
interface AccountPasswordSettings {
  _: 'account.passwordSettings'
  email: string
}
```


## AccountPasswordSettingsUnion

It's an alias for the `AccountPasswordInputSettings` type.

### AccountPasswordInputSettings

**Predicate:** "account.passwordInputSettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.passwordInputSettings" |
| `flags` | number |  |  |
| `new_salt` | number[] |  | Optional |
| `new_password_hash` | number[] |  | Optional |
| `hint` | string |  | Optional |
| `email` | string | 2 | Optional |

TypeScript interface:

```typescript
interface AccountPasswordInputSettings {
  _: 'account.passwordInputSettings'
  flags: number
  new_salt?: number[]
  new_password_hash?: number[]
  hint?: string
  email?: string
}
```


## AccountPrivacyRulesUnion

It's an alias for the `AccountPrivacyRules` type.

### AccountPrivacyRules

**Predicate:** "account.privacyRules"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.privacyRules" |
| `rules` | [PrivacyRuleUnion[]](#privacyruleunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface AccountPrivacyRules {
  _: 'account.privacyRules'
  rules: PrivacyRuleUnion[]
  users: UserUnion[]
}
```


## AccountTmpPasswordUnion

It's an alias for the `AccountTmpPassword` type.

### AccountTmpPassword

**Predicate:** "account.tmpPassword"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "account.tmpPassword" |
| `tmp_password` | number[] |  |  |
| `valid_until` | number |  |  |

TypeScript interface:

```typescript
interface AccountTmpPassword {
  _: 'account.tmpPassword'
  tmp_password: number[]
  valid_until: number
}
```


## AuthAuthorizationUnion

It's an alias for the `AuthAuthorization` type.

### AuthAuthorization

**Predicate:** "auth.authorization"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.authorization" |
| `flags` | number |  |  |
| `tmp_sessions` | number |  | Optional |
| `user` | [UserUnion](#userunion) |  |  |

TypeScript interface:

```typescript
interface AuthAuthorization {
  _: 'auth.authorization'
  flags: number
  tmp_sessions?: number
  user: UserUnion
}
```


## AuthCheckedPhoneUnion

It's an alias for the `AuthCheckedPhone` type.

### AuthCheckedPhone

**Predicate:** "auth.checkedPhone"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.checkedPhone" |
| `phone_registered` | boolean |  |  |

TypeScript interface:

```typescript
interface AuthCheckedPhone {
  _: 'auth.checkedPhone'
  phone_registered: boolean
}
```


## AuthCodeTypeUnion

Represents one of the following types:
- [`AuthCodeTypeCall`](#authcodetypecall)
- [`AuthCodeTypeFlashCall`](#authcodetypeflashcall)
- [`AuthCodeTypeSms`](#authcodetypesms)

### AuthCodeTypeCall

**Predicate:** "auth.codeTypeCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.codeTypeCall" |

TypeScript interface:

```typescript
interface AuthCodeTypeCall {
  _: 'auth.codeTypeCall'
}
```

### AuthCodeTypeFlashCall

**Predicate:** "auth.codeTypeFlashCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.codeTypeFlashCall" |

TypeScript interface:

```typescript
interface AuthCodeTypeFlashCall {
  _: 'auth.codeTypeFlashCall'
}
```

### AuthCodeTypeSms

**Predicate:** "auth.codeTypeSms"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.codeTypeSms" |

TypeScript interface:

```typescript
interface AuthCodeTypeSms {
  _: 'auth.codeTypeSms'
}
```


## AuthExportedAuthorizationUnion

It's an alias for the `AuthExportedAuthorization` type.

### AuthExportedAuthorization

**Predicate:** "auth.exportedAuthorization"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.exportedAuthorization" |
| `id` | number |  |  |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface AuthExportedAuthorization {
  _: 'auth.exportedAuthorization'
  id: number
  bytes: number[]
}
```


## AuthPasswordRecoveryUnion

It's an alias for the `AuthPasswordRecovery` type.

### AuthPasswordRecovery

**Predicate:** "auth.passwordRecovery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.passwordRecovery" |
| `email_pattern` | string |  |  |

TypeScript interface:

```typescript
interface AuthPasswordRecovery {
  _: 'auth.passwordRecovery'
  email_pattern: string
}
```


## AuthSentCodeUnion

It's an alias for the `AuthSentCode` type.

### AuthSentCode

**Predicate:** "auth.sentCode"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.sentCode" |
| `flags` | number |  |  |
| `phone_registered` | true |  | Optional |
| `type` | [AuthSentCodeTypeUnion](#authsentcodetypeunion) |  |  |
| `phone_code_hash` | string |  |  |
| `next_type` | [AuthCodeTypeUnion](#authcodetypeunion) | 2 | Optional |
| `timeout` | number | 4 | Optional |

TypeScript interface:

```typescript
interface AuthSentCode {
  _: 'auth.sentCode'
  flags: number
  phone_registered?: true
  type: AuthSentCodeTypeUnion
  phone_code_hash: string
  next_type?: AuthCodeTypeUnion
  timeout?: number
}
```


## AuthSentCodeTypeUnion

Represents one of the following types:
- [`AuthSentCodeTypeApp`](#authsentcodetypeapp)
- [`AuthSentCodeTypeCall`](#authsentcodetypecall)
- [`AuthSentCodeTypeFlashCall`](#authsentcodetypeflashcall)
- [`AuthSentCodeTypeSms`](#authsentcodetypesms)

### AuthSentCodeTypeApp

**Predicate:** "auth.sentCodeTypeApp"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.sentCodeTypeApp" |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface AuthSentCodeTypeApp {
  _: 'auth.sentCodeTypeApp'
  length: number
}
```

### AuthSentCodeTypeCall

**Predicate:** "auth.sentCodeTypeCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.sentCodeTypeCall" |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface AuthSentCodeTypeCall {
  _: 'auth.sentCodeTypeCall'
  length: number
}
```

### AuthSentCodeTypeFlashCall

**Predicate:** "auth.sentCodeTypeFlashCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.sentCodeTypeFlashCall" |
| `pattern` | string |  |  |

TypeScript interface:

```typescript
interface AuthSentCodeTypeFlashCall {
  _: 'auth.sentCodeTypeFlashCall'
  pattern: string
}
```

### AuthSentCodeTypeSms

**Predicate:** "auth.sentCodeTypeSms"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "auth.sentCodeTypeSms" |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface AuthSentCodeTypeSms {
  _: 'auth.sentCodeTypeSms'
  length: number
}
```


## AuthorizationUnion

It's an alias for the `Authorization` type.

### Authorization

**Predicate:** "authorization"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "authorization" |
| `hash` | number |  |  |
| `flags` | number |  |  |
| `device_model` | string |  |  |
| `platform` | string |  |  |
| `system_version` | string |  |  |
| `api_id` | number |  |  |
| `app_name` | string |  |  |
| `app_version` | string |  |  |
| `date_created` | number |  |  |
| `date_active` | number |  |  |
| `ip` | string |  |  |
| `country` | string |  |  |
| `region` | string |  |  |

TypeScript interface:

```typescript
interface Authorization {
  _: 'authorization'
  hash: number
  flags: number
  device_model: string
  platform: string
  system_version: string
  api_id: number
  app_name: string
  app_version: string
  date_created: number
  date_active: number
  ip: string
  country: string
  region: string
}
```


## BotCommandUnion

It's an alias for the `BotCommand` type.

### BotCommand

**Predicate:** "botCommand"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botCommand" |
| `command` | string |  |  |
| `description` | string |  |  |

TypeScript interface:

```typescript
interface BotCommand {
  _: 'botCommand'
  command: string
  description: string
}
```


## BotInfoUnion

It's an alias for the `BotInfo` type.

### BotInfo

**Predicate:** "botInfo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInfo" |
| `user_id` | number |  |  |
| `description` | string |  |  |
| `commands` | [BotCommandUnion[]](#botcommandunion) |  |  |

TypeScript interface:

```typescript
interface BotInfo {
  _: 'botInfo'
  user_id: number
  description: string
  commands: BotCommandUnion[]
}
```


## BotInlineMessageUnion

Represents one of the following types:
- [`BotInlineMessageMediaAuto`](#botinlinemessagemediaauto)
- [`BotInlineMessageMediaContact`](#botinlinemessagemediacontact)
- [`BotInlineMessageMediaGeo`](#botinlinemessagemediageo)
- [`BotInlineMessageMediaVenue`](#botinlinemessagemediavenue)
- [`BotInlineMessageText`](#botinlinemessagetext)

### BotInlineMessageMediaAuto

**Predicate:** "botInlineMessageMediaAuto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMessageMediaAuto" |
| `flags` | number |  |  |
| `caption` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface BotInlineMessageMediaAuto {
  _: 'botInlineMessageMediaAuto'
  flags: number
  caption: string
  reply_markup?: ReplyMarkupUnion
}
```

### BotInlineMessageMediaContact

**Predicate:** "botInlineMessageMediaContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMessageMediaContact" |
| `flags` | number |  |  |
| `phone_number` | string |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface BotInlineMessageMediaContact {
  _: 'botInlineMessageMediaContact'
  flags: number
  phone_number: string
  first_name: string
  last_name: string
  reply_markup?: ReplyMarkupUnion
}
```

### BotInlineMessageMediaGeo

**Predicate:** "botInlineMessageMediaGeo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMessageMediaGeo" |
| `flags` | number |  |  |
| `geo` | [GeoPointUnion](#geopointunion) |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface BotInlineMessageMediaGeo {
  _: 'botInlineMessageMediaGeo'
  flags: number
  geo: GeoPointUnion
  reply_markup?: ReplyMarkupUnion
}
```

### BotInlineMessageMediaVenue

**Predicate:** "botInlineMessageMediaVenue"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMessageMediaVenue" |
| `flags` | number |  |  |
| `geo` | [GeoPointUnion](#geopointunion) |  |  |
| `title` | string |  |  |
| `address` | string |  |  |
| `provider` | string |  |  |
| `venue_id` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface BotInlineMessageMediaVenue {
  _: 'botInlineMessageMediaVenue'
  flags: number
  geo: GeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
  reply_markup?: ReplyMarkupUnion
}
```

### BotInlineMessageText

**Predicate:** "botInlineMessageText"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMessageText" |
| `flags` | number |  |  |
| `no_webpage` | true |  | Optional |
| `message` | string |  |  |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 2 | Optional |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface BotInlineMessageText {
  _: 'botInlineMessageText'
  flags: number
  no_webpage?: true
  message: string
  entities?: MessageEntityUnion[]
  reply_markup?: ReplyMarkupUnion
}
```


## BotInlineResultUnion

Represents one of the following types:
- [`BotInlineMediaResult`](#botinlinemediaresult)
- [`BotInlineResult`](#botinlineresult)

### BotInlineMediaResult

**Predicate:** "botInlineMediaResult"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineMediaResult" |
| `flags` | number |  |  |
| `id` | string |  |  |
| `type` | string |  |  |
| `photo` | [PhotoUnion](#photounion) |  | Optional |
| `document` | [DocumentUnion](#documentunion) | 2 | Optional |
| `title` | string | 4 | Optional |
| `description` | string | 8 | Optional |
| `send_message` | [BotInlineMessageUnion](#botinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface BotInlineMediaResult {
  _: 'botInlineMediaResult'
  flags: number
  id: string
  type: string
  photo?: PhotoUnion
  document?: DocumentUnion
  title?: string
  description?: string
  send_message: BotInlineMessageUnion
}
```

### BotInlineResult

**Predicate:** "botInlineResult"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "botInlineResult" |
| `flags` | number |  |  |
| `id` | string |  |  |
| `type` | string |  |  |
| `title` | string | 2 | Optional |
| `description` | string | 4 | Optional |
| `url` | string | 8 | Optional |
| `thumb_url` | string | 16 | Optional |
| `content_url` | string | 32 | Optional |
| `content_type` | string | 32 | Optional |
| `w` | number | 64 | Optional |
| `h` | number | 64 | Optional |
| `duration` | number | 128 | Optional |
| `send_message` | [BotInlineMessageUnion](#botinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface BotInlineResult {
  _: 'botInlineResult'
  flags: number
  id: string
  type: string
  title?: string
  description?: string
  url?: string
  thumb_url?: string
  content_url?: string
  content_type?: string
  w?: number
  h?: number
  duration?: number
  send_message: BotInlineMessageUnion
}
```


## CdnConfigUnion

It's an alias for the `CdnConfig` type.

### CdnConfig

**Predicate:** "cdnConfig"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "cdnConfig" |
| `public_keys` | [CdnPublicKeyUnion[]](#cdnpublickeyunion) |  |  |

TypeScript interface:

```typescript
interface CdnConfig {
  _: 'cdnConfig'
  public_keys: CdnPublicKeyUnion[]
}
```


## CdnFileHashUnion

It's an alias for the `CdnFileHash` type.

### CdnFileHash

**Predicate:** "cdnFileHash"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "cdnFileHash" |
| `offset` | number |  |  |
| `limit` | number |  |  |
| `hash` | number[] |  |  |

TypeScript interface:

```typescript
interface CdnFileHash {
  _: 'cdnFileHash'
  offset: number
  limit: number
  hash: number[]
}
```


## CdnPublicKeyUnion

It's an alias for the `CdnPublicKey` type.

### CdnPublicKey

**Predicate:** "cdnPublicKey"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "cdnPublicKey" |
| `dc_id` | number |  |  |
| `public_key` | string |  |  |

TypeScript interface:

```typescript
interface CdnPublicKey {
  _: 'cdnPublicKey'
  dc_id: number
  public_key: string
}
```


## ChannelAdminLogEventUnion

It's an alias for the `ChannelAdminLogEvent` type.

### ChannelAdminLogEvent

**Predicate:** "channelAdminLogEvent"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEvent" |
| `id` | number |  |  |
| `date` | number |  |  |
| `user_id` | number |  |  |
| `action` | [ChannelAdminLogEventActionUnion](#channeladminlogeventactionunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEvent {
  _: 'channelAdminLogEvent'
  id: number
  date: number
  user_id: number
  action: ChannelAdminLogEventActionUnion
}
```


## ChannelAdminLogEventActionUnion

Represents one of the following types:
- [`ChannelAdminLogEventActionChangeAbout`](#channeladminlogeventactionchangeabout)
- [`ChannelAdminLogEventActionChangePhoto`](#channeladminlogeventactionchangephoto)
- [`ChannelAdminLogEventActionChangeStickerSet`](#channeladminlogeventactionchangestickerset)
- [`ChannelAdminLogEventActionChangeTitle`](#channeladminlogeventactionchangetitle)
- [`ChannelAdminLogEventActionChangeUsername`](#channeladminlogeventactionchangeusername)
- [`ChannelAdminLogEventActionDeleteMessage`](#channeladminlogeventactiondeletemessage)
- [`ChannelAdminLogEventActionEditMessage`](#channeladminlogeventactioneditmessage)
- [`ChannelAdminLogEventActionParticipantInvite`](#channeladminlogeventactionparticipantinvite)
- [`ChannelAdminLogEventActionParticipantJoin`](#channeladminlogeventactionparticipantjoin)
- [`ChannelAdminLogEventActionParticipantLeave`](#channeladminlogeventactionparticipantleave)
- [`ChannelAdminLogEventActionParticipantToggleAdmin`](#channeladminlogeventactionparticipanttoggleadmin)
- [`ChannelAdminLogEventActionParticipantToggleBan`](#channeladminlogeventactionparticipanttoggleban)
- [`ChannelAdminLogEventActionToggleInvites`](#channeladminlogeventactiontoggleinvites)
- [`ChannelAdminLogEventActionToggleSignatures`](#channeladminlogeventactiontogglesignatures)
- [`ChannelAdminLogEventActionUpdatePinned`](#channeladminlogeventactionupdatepinned)

### ChannelAdminLogEventActionChangeAbout

**Predicate:** "channelAdminLogEventActionChangeAbout"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionChangeAbout" |
| `prev_value` | string |  |  |
| `new_value` | string |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionChangeAbout {
  _: 'channelAdminLogEventActionChangeAbout'
  prev_value: string
  new_value: string
}
```

### ChannelAdminLogEventActionChangePhoto

**Predicate:** "channelAdminLogEventActionChangePhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionChangePhoto" |
| `prev_photo` | [ChatPhotoUnion](#chatphotounion) |  |  |
| `new_photo` | [ChatPhotoUnion](#chatphotounion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionChangePhoto {
  _: 'channelAdminLogEventActionChangePhoto'
  prev_photo: ChatPhotoUnion
  new_photo: ChatPhotoUnion
}
```

### ChannelAdminLogEventActionChangeStickerSet

**Predicate:** "channelAdminLogEventActionChangeStickerSet"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionChangeStickerSet" |
| `prev_stickerset` | [InputStickerSetUnion](#inputstickersetunion) |  |  |
| `new_stickerset` | [InputStickerSetUnion](#inputstickersetunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionChangeStickerSet {
  _: 'channelAdminLogEventActionChangeStickerSet'
  prev_stickerset: InputStickerSetUnion
  new_stickerset: InputStickerSetUnion
}
```

### ChannelAdminLogEventActionChangeTitle

**Predicate:** "channelAdminLogEventActionChangeTitle"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionChangeTitle" |
| `prev_value` | string |  |  |
| `new_value` | string |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionChangeTitle {
  _: 'channelAdminLogEventActionChangeTitle'
  prev_value: string
  new_value: string
}
```

### ChannelAdminLogEventActionChangeUsername

**Predicate:** "channelAdminLogEventActionChangeUsername"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionChangeUsername" |
| `prev_value` | string |  |  |
| `new_value` | string |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionChangeUsername {
  _: 'channelAdminLogEventActionChangeUsername'
  prev_value: string
  new_value: string
}
```

### ChannelAdminLogEventActionDeleteMessage

**Predicate:** "channelAdminLogEventActionDeleteMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionDeleteMessage" |
| `message` | [MessageUnion](#messageunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionDeleteMessage {
  _: 'channelAdminLogEventActionDeleteMessage'
  message: MessageUnion
}
```

### ChannelAdminLogEventActionEditMessage

**Predicate:** "channelAdminLogEventActionEditMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionEditMessage" |
| `prev_message` | [MessageUnion](#messageunion) |  |  |
| `new_message` | [MessageUnion](#messageunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionEditMessage {
  _: 'channelAdminLogEventActionEditMessage'
  prev_message: MessageUnion
  new_message: MessageUnion
}
```

### ChannelAdminLogEventActionParticipantInvite

**Predicate:** "channelAdminLogEventActionParticipantInvite"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionParticipantInvite" |
| `participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionParticipantInvite {
  _: 'channelAdminLogEventActionParticipantInvite'
  participant: ChannelParticipantUnion
}
```

### ChannelAdminLogEventActionParticipantJoin

**Predicate:** "channelAdminLogEventActionParticipantJoin"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionParticipantJoin" |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionParticipantJoin {
  _: 'channelAdminLogEventActionParticipantJoin'
}
```

### ChannelAdminLogEventActionParticipantLeave

**Predicate:** "channelAdminLogEventActionParticipantLeave"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionParticipantLeave" |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionParticipantLeave {
  _: 'channelAdminLogEventActionParticipantLeave'
}
```

### ChannelAdminLogEventActionParticipantToggleAdmin

**Predicate:** "channelAdminLogEventActionParticipantToggleAdmin"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionParticipantToggleAdmin" |
| `prev_participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |
| `new_participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionParticipantToggleAdmin {
  _: 'channelAdminLogEventActionParticipantToggleAdmin'
  prev_participant: ChannelParticipantUnion
  new_participant: ChannelParticipantUnion
}
```

### ChannelAdminLogEventActionParticipantToggleBan

**Predicate:** "channelAdminLogEventActionParticipantToggleBan"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionParticipantToggleBan" |
| `prev_participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |
| `new_participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionParticipantToggleBan {
  _: 'channelAdminLogEventActionParticipantToggleBan'
  prev_participant: ChannelParticipantUnion
  new_participant: ChannelParticipantUnion
}
```

### ChannelAdminLogEventActionToggleInvites

**Predicate:** "channelAdminLogEventActionToggleInvites"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionToggleInvites" |
| `new_value` | boolean |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionToggleInvites {
  _: 'channelAdminLogEventActionToggleInvites'
  new_value: boolean
}
```

### ChannelAdminLogEventActionToggleSignatures

**Predicate:** "channelAdminLogEventActionToggleSignatures"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionToggleSignatures" |
| `new_value` | boolean |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionToggleSignatures {
  _: 'channelAdminLogEventActionToggleSignatures'
  new_value: boolean
}
```

### ChannelAdminLogEventActionUpdatePinned

**Predicate:** "channelAdminLogEventActionUpdatePinned"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventActionUpdatePinned" |
| `message` | [MessageUnion](#messageunion) |  |  |

TypeScript interface:

```typescript
interface ChannelAdminLogEventActionUpdatePinned {
  _: 'channelAdminLogEventActionUpdatePinned'
  message: MessageUnion
}
```


## ChannelAdminLogEventsFilterUnion

It's an alias for the `ChannelAdminLogEventsFilter` type.

### ChannelAdminLogEventsFilter

**Predicate:** "channelAdminLogEventsFilter"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminLogEventsFilter" |
| `flags` | number |  |  |
| `join` | true |  | Optional |
| `leave` | true | 2 | Optional |
| `invite` | true | 4 | Optional |
| `ban` | true | 8 | Optional |
| `unban` | true | 16 | Optional |
| `kick` | true | 32 | Optional |
| `unkick` | true | 64 | Optional |
| `promote` | true | 128 | Optional |
| `demote` | true | 256 | Optional |
| `info` | true | 512 | Optional |
| `settings` | true | 1024 | Optional |
| `pinned` | true | 2048 | Optional |
| `edit` | true | 4096 | Optional |
| `delete` | true | 8192 | Optional |

TypeScript interface:

```typescript
interface ChannelAdminLogEventsFilter {
  _: 'channelAdminLogEventsFilter'
  flags: number
  join?: true
  leave?: true
  invite?: true
  ban?: true
  unban?: true
  kick?: true
  unkick?: true
  promote?: true
  demote?: true
  info?: true
  settings?: true
  pinned?: true
  edit?: true
  delete?: true
}
```


## ChannelAdminRightsUnion

It's an alias for the `ChannelAdminRights` type.

### ChannelAdminRights

**Predicate:** "channelAdminRights"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelAdminRights" |
| `flags` | number |  |  |
| `change_info` | true |  | Optional |
| `post_messages` | true | 2 | Optional |
| `edit_messages` | true | 4 | Optional |
| `delete_messages` | true | 8 | Optional |
| `ban_users` | true | 16 | Optional |
| `invite_users` | true | 32 | Optional |
| `invite_link` | true | 64 | Optional |
| `pin_messages` | true | 128 | Optional |
| `add_admins` | true | 512 | Optional |

TypeScript interface:

```typescript
interface ChannelAdminRights {
  _: 'channelAdminRights'
  flags: number
  change_info?: true
  post_messages?: true
  edit_messages?: true
  delete_messages?: true
  ban_users?: true
  invite_users?: true
  invite_link?: true
  pin_messages?: true
  add_admins?: true
}
```


## ChannelBannedRightsUnion

It's an alias for the `ChannelBannedRights` type.

### ChannelBannedRights

**Predicate:** "channelBannedRights"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelBannedRights" |
| `flags` | number |  |  |
| `view_messages` | true |  | Optional |
| `send_messages` | true | 2 | Optional |
| `send_media` | true | 4 | Optional |
| `send_stickers` | true | 8 | Optional |
| `send_gifs` | true | 16 | Optional |
| `send_games` | true | 32 | Optional |
| `send_inline` | true | 64 | Optional |
| `embed_links` | true | 128 | Optional |
| `until_date` | number |  |  |

TypeScript interface:

```typescript
interface ChannelBannedRights {
  _: 'channelBannedRights'
  flags: number
  view_messages?: true
  send_messages?: true
  send_media?: true
  send_stickers?: true
  send_gifs?: true
  send_games?: true
  send_inline?: true
  embed_links?: true
  until_date: number
}
```


## ChannelMessagesFilterUnion

Represents one of the following types:
- [`ChannelMessagesFilter`](#channelmessagesfilter)
- [`ChannelMessagesFilterEmpty`](#channelmessagesfilterempty)

### ChannelMessagesFilter

**Predicate:** "channelMessagesFilter"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelMessagesFilter" |
| `flags` | number |  |  |
| `exclude_new_messages` | true | 2 | Optional |
| `ranges` | [MessageRangeUnion[]](#messagerangeunion) |  |  |

TypeScript interface:

```typescript
interface ChannelMessagesFilter {
  _: 'channelMessagesFilter'
  flags: number
  exclude_new_messages?: true
  ranges: MessageRangeUnion[]
}
```

### ChannelMessagesFilterEmpty

**Predicate:** "channelMessagesFilterEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelMessagesFilterEmpty" |

TypeScript interface:

```typescript
interface ChannelMessagesFilterEmpty {
  _: 'channelMessagesFilterEmpty'
}
```


## ChannelParticipantUnion

Represents one of the following types:
- [`ChannelParticipant`](#channelparticipant)
- [`ChannelParticipantAdmin`](#channelparticipantadmin)
- [`ChannelParticipantBanned`](#channelparticipantbanned)
- [`ChannelParticipantCreator`](#channelparticipantcreator)
- [`ChannelParticipantSelf`](#channelparticipantself)

### ChannelParticipant

**Predicate:** "channelParticipant"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipant" |
| `user_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface ChannelParticipant {
  _: 'channelParticipant'
  user_id: number
  date: number
}
```

### ChannelParticipantAdmin

**Predicate:** "channelParticipantAdmin"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantAdmin" |
| `flags` | number |  |  |
| `can_edit` | true |  | Optional |
| `user_id` | number |  |  |
| `inviter_id` | number |  |  |
| `promoted_by` | number |  |  |
| `date` | number |  |  |
| `admin_rights` | [ChannelAdminRightsUnion](#channeladminrightsunion) |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantAdmin {
  _: 'channelParticipantAdmin'
  flags: number
  can_edit?: true
  user_id: number
  inviter_id: number
  promoted_by: number
  date: number
  admin_rights: ChannelAdminRightsUnion
}
```

### ChannelParticipantBanned

**Predicate:** "channelParticipantBanned"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantBanned" |
| `flags` | number |  |  |
| `left` | true |  | Optional |
| `user_id` | number |  |  |
| `kicked_by` | number |  |  |
| `date` | number |  |  |
| `banned_rights` | [ChannelBannedRightsUnion](#channelbannedrightsunion) |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantBanned {
  _: 'channelParticipantBanned'
  flags: number
  left?: true
  user_id: number
  kicked_by: number
  date: number
  banned_rights: ChannelBannedRightsUnion
}
```

### ChannelParticipantCreator

**Predicate:** "channelParticipantCreator"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantCreator" |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantCreator {
  _: 'channelParticipantCreator'
  user_id: number
}
```

### ChannelParticipantSelf

**Predicate:** "channelParticipantSelf"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantSelf" |
| `user_id` | number |  |  |
| `inviter_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantSelf {
  _: 'channelParticipantSelf'
  user_id: number
  inviter_id: number
  date: number
}
```


## ChannelParticipantsFilterUnion

Represents one of the following types:
- [`ChannelParticipantsAdmins`](#channelparticipantsadmins)
- [`ChannelParticipantsBanned`](#channelparticipantsbanned)
- [`ChannelParticipantsBots`](#channelparticipantsbots)
- [`ChannelParticipantsKicked`](#channelparticipantskicked)
- [`ChannelParticipantsRecent`](#channelparticipantsrecent)
- [`ChannelParticipantsSearch`](#channelparticipantssearch)

### ChannelParticipantsAdmins

**Predicate:** "channelParticipantsAdmins"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsAdmins" |

TypeScript interface:

```typescript
interface ChannelParticipantsAdmins {
  _: 'channelParticipantsAdmins'
}
```

### ChannelParticipantsBanned

**Predicate:** "channelParticipantsBanned"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsBanned" |
| `q` | string |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantsBanned {
  _: 'channelParticipantsBanned'
  q: string
}
```

### ChannelParticipantsBots

**Predicate:** "channelParticipantsBots"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsBots" |

TypeScript interface:

```typescript
interface ChannelParticipantsBots {
  _: 'channelParticipantsBots'
}
```

### ChannelParticipantsKicked

**Predicate:** "channelParticipantsKicked"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsKicked" |
| `q` | string |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantsKicked {
  _: 'channelParticipantsKicked'
  q: string
}
```

### ChannelParticipantsRecent

**Predicate:** "channelParticipantsRecent"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsRecent" |

TypeScript interface:

```typescript
interface ChannelParticipantsRecent {
  _: 'channelParticipantsRecent'
}
```

### ChannelParticipantsSearch

**Predicate:** "channelParticipantsSearch"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelParticipantsSearch" |
| `q` | string |  |  |

TypeScript interface:

```typescript
interface ChannelParticipantsSearch {
  _: 'channelParticipantsSearch'
  q: string
}
```


## ChannelsAdminLogResultsUnion

It's an alias for the `ChannelsAdminLogResults` type.

### ChannelsAdminLogResults

**Predicate:** "channels.adminLogResults"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channels.adminLogResults" |
| `events` | [ChannelAdminLogEventUnion[]](#channeladminlogeventunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ChannelsAdminLogResults {
  _: 'channels.adminLogResults'
  events: ChannelAdminLogEventUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## ChannelsChannelParticipantUnion

It's an alias for the `ChannelsChannelParticipant` type.

### ChannelsChannelParticipant

**Predicate:** "channels.channelParticipant"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channels.channelParticipant" |
| `participant` | [ChannelParticipantUnion](#channelparticipantunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ChannelsChannelParticipant {
  _: 'channels.channelParticipant'
  participant: ChannelParticipantUnion
  users: UserUnion[]
}
```


## ChannelsChannelParticipantsUnion

It's an alias for the `ChannelsChannelParticipants` type.

### ChannelsChannelParticipants

**Predicate:** "channels.channelParticipants"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channels.channelParticipants" |
| `count` | number |  |  |
| `participants` | [ChannelParticipantUnion[]](#channelparticipantunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ChannelsChannelParticipants {
  _: 'channels.channelParticipants'
  count: number
  participants: ChannelParticipantUnion[]
  users: UserUnion[]
}
```


## ChatUnion

Represents one of the following types:
- [`Channel`](#channel)
- [`ChannelForbidden`](#channelforbidden)
- [`Chat`](#chat)
- [`ChatEmpty`](#chatempty)
- [`ChatForbidden`](#chatforbidden)

### Channel

**Predicate:** "channel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channel" |
| `flags` | number |  |  |
| `creator` | true |  | Optional |
| `left` | true | 4 | Optional |
| `editor` | true | 8 | Optional |
| `broadcast` | true | 32 | Optional |
| `verified` | true | 128 | Optional |
| `megagroup` | true | 256 | Optional |
| `restricted` | true | 512 | Optional |
| `democracy` | true | 1024 | Optional |
| `signatures` | true | 2048 | Optional |
| `min` | true | 4096 | Optional |
| `id` | number |  |  |
| `access_hash` | number | 8192 | Optional |
| `title` | string |  |  |
| `username` | string | 64 | Optional |
| `photo` | [ChatPhotoUnion](#chatphotounion) |  |  |
| `date` | number |  |  |
| `version` | number |  |  |
| `restriction_reason` | string | 512 | Optional |
| `admin_rights` | [ChannelAdminRightsUnion](#channeladminrightsunion) | 16384 | Optional |
| `banned_rights` | [ChannelBannedRightsUnion](#channelbannedrightsunion) | 32768 | Optional |

TypeScript interface:

```typescript
interface Channel {
  _: 'channel'
  flags: number
  creator?: true
  left?: true
  editor?: true
  broadcast?: true
  verified?: true
  megagroup?: true
  restricted?: true
  democracy?: true
  signatures?: true
  min?: true
  id: number
  access_hash?: number
  title: string
  username?: string
  photo: ChatPhotoUnion
  date: number
  version: number
  restriction_reason?: string
  admin_rights?: ChannelAdminRightsUnion
  banned_rights?: ChannelBannedRightsUnion
}
```

### ChannelForbidden

**Predicate:** "channelForbidden"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelForbidden" |
| `flags` | number |  |  |
| `broadcast` | true | 32 | Optional |
| `megagroup` | true | 256 | Optional |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `title` | string |  |  |
| `until_date` | number | 65536 | Optional |

TypeScript interface:

```typescript
interface ChannelForbidden {
  _: 'channelForbidden'
  flags: number
  broadcast?: true
  megagroup?: true
  id: number
  access_hash: number
  title: string
  until_date?: number
}
```

### Chat

**Predicate:** "chat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chat" |
| `flags` | number |  |  |
| `creator` | true |  | Optional |
| `kicked` | true | 2 | Optional |
| `left` | true | 4 | Optional |
| `admins_enabled` | true | 8 | Optional |
| `admin` | true | 16 | Optional |
| `deactivated` | true | 32 | Optional |
| `id` | number |  |  |
| `title` | string |  |  |
| `photo` | [ChatPhotoUnion](#chatphotounion) |  |  |
| `participants_count` | number |  |  |
| `date` | number |  |  |
| `version` | number |  |  |
| `migrated_to` | [InputChannelUnion](#inputchannelunion) | 64 | Optional |

TypeScript interface:

```typescript
interface Chat {
  _: 'chat'
  flags: number
  creator?: true
  kicked?: true
  left?: true
  admins_enabled?: true
  admin?: true
  deactivated?: true
  id: number
  title: string
  photo: ChatPhotoUnion
  participants_count: number
  date: number
  version: number
  migrated_to?: InputChannelUnion
}
```

### ChatEmpty

**Predicate:** "chatEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface ChatEmpty {
  _: 'chatEmpty'
  id: number
}
```

### ChatForbidden

**Predicate:** "chatForbidden"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatForbidden" |
| `id` | number |  |  |
| `title` | string |  |  |

TypeScript interface:

```typescript
interface ChatForbidden {
  _: 'chatForbidden'
  id: number
  title: string
}
```


## ChatFullUnion

Represents one of the following types:
- [`ChannelFull`](#channelfull)
- [`ChatFull`](#chatfull)

### ChannelFull

**Predicate:** "channelFull"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "channelFull" |
| `flags` | number |  |  |
| `can_view_participants` | true | 8 | Optional |
| `can_set_username` | true | 64 | Optional |
| `can_set_stickers` | true | 128 | Optional |
| `id` | number |  |  |
| `about` | string |  |  |
| `participants_count` | number |  | Optional |
| `admins_count` | number | 2 | Optional |
| `kicked_count` | number | 4 | Optional |
| `banned_count` | number | 4 | Optional |
| `read_inbox_max_id` | number |  |  |
| `read_outbox_max_id` | number |  |  |
| `unread_count` | number |  |  |
| `chat_photo` | [PhotoUnion](#photounion) |  |  |
| `notify_settings` | [PeerNotifySettingsUnion](#peernotifysettingsunion) |  |  |
| `exported_invite` | [ExportedChatInviteUnion](#exportedchatinviteunion) |  |  |
| `bot_info` | [BotInfoUnion[]](#botinfounion) |  |  |
| `migrated_from_chat_id` | number | 16 | Optional |
| `migrated_from_max_id` | number | 16 | Optional |
| `pinned_msg_id` | number | 32 | Optional |
| `stickerset` | [StickerSetUnion](#stickersetunion) | 256 | Optional |

TypeScript interface:

```typescript
interface ChannelFull {
  _: 'channelFull'
  flags: number
  can_view_participants?: true
  can_set_username?: true
  can_set_stickers?: true
  id: number
  about: string
  participants_count?: number
  admins_count?: number
  kicked_count?: number
  banned_count?: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  chat_photo: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  exported_invite: ExportedChatInviteUnion
  bot_info: BotInfoUnion[]
  migrated_from_chat_id?: number
  migrated_from_max_id?: number
  pinned_msg_id?: number
  stickerset?: StickerSetUnion
}
```

### ChatFull

**Predicate:** "chatFull"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatFull" |
| `id` | number |  |  |
| `participants` | [ChatParticipantsUnion](#chatparticipantsunion) |  |  |
| `chat_photo` | [PhotoUnion](#photounion) |  |  |
| `notify_settings` | [PeerNotifySettingsUnion](#peernotifysettingsunion) |  |  |
| `exported_invite` | [ExportedChatInviteUnion](#exportedchatinviteunion) |  |  |
| `bot_info` | [BotInfoUnion[]](#botinfounion) |  |  |

TypeScript interface:

```typescript
interface ChatFull {
  _: 'chatFull'
  id: number
  participants: ChatParticipantsUnion
  chat_photo: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  exported_invite: ExportedChatInviteUnion
  bot_info: BotInfoUnion[]
}
```


## ChatInviteUnion

Represents one of the following types:
- [`ChatInvite`](#chatinvite)
- [`ChatInviteAlready`](#chatinvitealready)

### ChatInvite

**Predicate:** "chatInvite"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatInvite" |
| `flags` | number |  |  |
| `channel` | true |  | Optional |
| `broadcast` | true | 2 | Optional |
| `public` | true | 4 | Optional |
| `megagroup` | true | 8 | Optional |
| `title` | string |  |  |
| `photo` | [ChatPhotoUnion](#chatphotounion) |  |  |
| `participants_count` | number |  |  |
| `participants` | [UserUnion[]](#userunion) | 16 | Optional |

TypeScript interface:

```typescript
interface ChatInvite {
  _: 'chatInvite'
  flags: number
  channel?: true
  broadcast?: true
  public?: true
  megagroup?: true
  title: string
  photo: ChatPhotoUnion
  participants_count: number
  participants?: UserUnion[]
}
```

### ChatInviteAlready

**Predicate:** "chatInviteAlready"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatInviteAlready" |
| `chat` | [ChatUnion](#chatunion) |  |  |

TypeScript interface:

```typescript
interface ChatInviteAlready {
  _: 'chatInviteAlready'
  chat: ChatUnion
}
```


## ChatParticipantUnion

Represents one of the following types:
- [`ChatParticipant`](#chatparticipant)
- [`ChatParticipantAdmin`](#chatparticipantadmin)
- [`ChatParticipantCreator`](#chatparticipantcreator)

### ChatParticipant

**Predicate:** "chatParticipant"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatParticipant" |
| `user_id` | number |  |  |
| `inviter_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface ChatParticipant {
  _: 'chatParticipant'
  user_id: number
  inviter_id: number
  date: number
}
```

### ChatParticipantAdmin

**Predicate:** "chatParticipantAdmin"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatParticipantAdmin" |
| `user_id` | number |  |  |
| `inviter_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface ChatParticipantAdmin {
  _: 'chatParticipantAdmin'
  user_id: number
  inviter_id: number
  date: number
}
```

### ChatParticipantCreator

**Predicate:** "chatParticipantCreator"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatParticipantCreator" |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface ChatParticipantCreator {
  _: 'chatParticipantCreator'
  user_id: number
}
```


## ChatParticipantsUnion

Represents one of the following types:
- [`ChatParticipants`](#chatparticipants)
- [`ChatParticipantsForbidden`](#chatparticipantsforbidden)

### ChatParticipants

**Predicate:** "chatParticipants"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatParticipants" |
| `chat_id` | number |  |  |
| `participants` | [ChatParticipantUnion[]](#chatparticipantunion) |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface ChatParticipants {
  _: 'chatParticipants'
  chat_id: number
  participants: ChatParticipantUnion[]
  version: number
}
```

### ChatParticipantsForbidden

**Predicate:** "chatParticipantsForbidden"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatParticipantsForbidden" |
| `flags` | number |  |  |
| `chat_id` | number |  |  |
| `self_participant` | [ChatParticipantUnion](#chatparticipantunion) |  | Optional |

TypeScript interface:

```typescript
interface ChatParticipantsForbidden {
  _: 'chatParticipantsForbidden'
  flags: number
  chat_id: number
  self_participant?: ChatParticipantUnion
}
```


## ChatPhotoUnion

Represents one of the following types:
- [`ChatPhoto`](#chatphoto)
- [`ChatPhotoEmpty`](#chatphotoempty)

### ChatPhoto

**Predicate:** "chatPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatPhoto" |
| `photo_small` | [FileLocationUnion](#filelocationunion) |  |  |
| `photo_big` | [FileLocationUnion](#filelocationunion) |  |  |

TypeScript interface:

```typescript
interface ChatPhoto {
  _: 'chatPhoto'
  photo_small: FileLocationUnion
  photo_big: FileLocationUnion
}
```

### ChatPhotoEmpty

**Predicate:** "chatPhotoEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatPhotoEmpty" |

TypeScript interface:

```typescript
interface ChatPhotoEmpty {
  _: 'chatPhotoEmpty'
}
```


## ConfigUnion

It's an alias for the `Config` type.

### Config

**Predicate:** "config"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "config" |
| `flags` | number |  |  |
| `phonecalls_enabled` | true | 2 | Optional |
| `date` | number |  |  |
| `expires` | number |  |  |
| `test_mode` | boolean |  |  |
| `this_dc` | number |  |  |
| `dc_options` | [DcOptionUnion[]](#dcoptionunion) |  |  |
| `chat_size_max` | number |  |  |
| `megagroup_size_max` | number |  |  |
| `forwarded_count_max` | number |  |  |
| `online_update_period_ms` | number |  |  |
| `offline_blur_timeout_ms` | number |  |  |
| `offline_idle_timeout_ms` | number |  |  |
| `online_cloud_timeout_ms` | number |  |  |
| `notify_cloud_delay_ms` | number |  |  |
| `notify_default_delay_ms` | number |  |  |
| `chat_big_size` | number |  |  |
| `push_chat_period_ms` | number |  |  |
| `push_chat_limit` | number |  |  |
| `saved_gifs_limit` | number |  |  |
| `edit_time_limit` | number |  |  |
| `rating_e_decay` | number |  |  |
| `stickers_recent_limit` | number |  |  |
| `stickers_faved_limit` | number |  |  |
| `tmp_sessions` | number |  | Optional |
| `pinned_dialogs_count_max` | number |  |  |
| `call_receive_timeout_ms` | number |  |  |
| `call_ring_timeout_ms` | number |  |  |
| `call_connect_timeout_ms` | number |  |  |
| `call_packet_timeout_ms` | number |  |  |
| `me_url_prefix` | string |  |  |
| `suggested_lang_code` | string | 4 | Optional |
| `lang_pack_version` | number | 4 | Optional |
| `disabled_features` | [DisabledFeatureUnion[]](#disabledfeatureunion) |  |  |

TypeScript interface:

```typescript
interface Config {
  _: 'config'
  flags: number
  phonecalls_enabled?: true
  date: number
  expires: number
  test_mode: boolean
  this_dc: number
  dc_options: DcOptionUnion[]
  chat_size_max: number
  megagroup_size_max: number
  forwarded_count_max: number
  online_update_period_ms: number
  offline_blur_timeout_ms: number
  offline_idle_timeout_ms: number
  online_cloud_timeout_ms: number
  notify_cloud_delay_ms: number
  notify_default_delay_ms: number
  chat_big_size: number
  push_chat_period_ms: number
  push_chat_limit: number
  saved_gifs_limit: number
  edit_time_limit: number
  rating_e_decay: number
  stickers_recent_limit: number
  stickers_faved_limit: number
  tmp_sessions?: number
  pinned_dialogs_count_max: number
  call_receive_timeout_ms: number
  call_ring_timeout_ms: number
  call_connect_timeout_ms: number
  call_packet_timeout_ms: number
  me_url_prefix: string
  suggested_lang_code?: string
  lang_pack_version?: number
  disabled_features: DisabledFeatureUnion[]
}
```


## ContactUnion

It's an alias for the `Contact` type.

### Contact

**Predicate:** "contact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contact" |
| `user_id` | number |  |  |
| `mutual` | boolean |  |  |

TypeScript interface:

```typescript
interface Contact {
  _: 'contact'
  user_id: number
  mutual: boolean
}
```


## ContactBlockedUnion

It's an alias for the `ContactBlocked` type.

### ContactBlocked

**Predicate:** "contactBlocked"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactBlocked" |
| `user_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface ContactBlocked {
  _: 'contactBlocked'
  user_id: number
  date: number
}
```


## ContactLinkUnion

Represents one of the following types:
- [`ContactLinkContact`](#contactlinkcontact)
- [`ContactLinkHasPhone`](#contactlinkhasphone)
- [`ContactLinkNone`](#contactlinknone)
- [`ContactLinkUnknown`](#contactlinkunknown)

### ContactLinkContact

**Predicate:** "contactLinkContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactLinkContact" |

TypeScript interface:

```typescript
interface ContactLinkContact {
  _: 'contactLinkContact'
}
```

### ContactLinkHasPhone

**Predicate:** "contactLinkHasPhone"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactLinkHasPhone" |

TypeScript interface:

```typescript
interface ContactLinkHasPhone {
  _: 'contactLinkHasPhone'
}
```

### ContactLinkNone

**Predicate:** "contactLinkNone"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactLinkNone" |

TypeScript interface:

```typescript
interface ContactLinkNone {
  _: 'contactLinkNone'
}
```

### ContactLinkUnknown

**Predicate:** "contactLinkUnknown"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactLinkUnknown" |

TypeScript interface:

```typescript
interface ContactLinkUnknown {
  _: 'contactLinkUnknown'
}
```


## ContactStatusUnion

It's an alias for the `ContactStatus` type.

### ContactStatus

**Predicate:** "contactStatus"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contactStatus" |
| `user_id` | number |  |  |
| `status` | [UserStatusUnion](#userstatusunion) |  |  |

TypeScript interface:

```typescript
interface ContactStatus {
  _: 'contactStatus'
  user_id: number
  status: UserStatusUnion
}
```


## ContactsBlockedUnion

Represents one of the following types:
- [`ContactsBlocked`](#contactsblocked)
- [`ContactsBlockedSlice`](#contactsblockedslice)

### ContactsBlocked

**Predicate:** "contacts.blocked"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.blocked" |
| `blocked` | [ContactBlockedUnion[]](#contactblockedunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsBlocked {
  _: 'contacts.blocked'
  blocked: ContactBlockedUnion[]
  users: UserUnion[]
}
```

### ContactsBlockedSlice

**Predicate:** "contacts.blockedSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.blockedSlice" |
| `count` | number |  |  |
| `blocked` | [ContactBlockedUnion[]](#contactblockedunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsBlockedSlice {
  _: 'contacts.blockedSlice'
  count: number
  blocked: ContactBlockedUnion[]
  users: UserUnion[]
}
```


## ContactsContactsUnion

Represents one of the following types:
- [`ContactsContacts`](#contactscontacts)
- [`ContactsContactsNotModified`](#contactscontactsnotmodified)

### ContactsContacts

**Predicate:** "contacts.contacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.contacts" |
| `contacts` | [ContactUnion[]](#contactunion) |  |  |
| `saved_count` | number |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsContacts {
  _: 'contacts.contacts'
  contacts: ContactUnion[]
  saved_count: number
  users: UserUnion[]
}
```

### ContactsContactsNotModified

**Predicate:** "contacts.contactsNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.contactsNotModified" |

TypeScript interface:

```typescript
interface ContactsContactsNotModified {
  _: 'contacts.contactsNotModified'
}
```


## ContactsFoundUnion

It's an alias for the `ContactsFound` type.

### ContactsFound

**Predicate:** "contacts.found"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.found" |
| `results` | [PeerUnion[]](#peerunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsFound {
  _: 'contacts.found'
  results: PeerUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## ContactsImportedContactsUnion

It's an alias for the `ContactsImportedContacts` type.

### ContactsImportedContacts

**Predicate:** "contacts.importedContacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.importedContacts" |
| `imported` | [ImportedContactUnion[]](#importedcontactunion) |  |  |
| `popular_invites` | [PopularContactUnion[]](#popularcontactunion) |  |  |
| `retry_contacts` | number[] |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsImportedContacts {
  _: 'contacts.importedContacts'
  imported: ImportedContactUnion[]
  popular_invites: PopularContactUnion[]
  retry_contacts: number[]
  users: UserUnion[]
}
```


## ContactsLinkUnion

It's an alias for the `ContactsLink` type.

### ContactsLink

**Predicate:** "contacts.link"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.link" |
| `my_link` | [ContactLinkUnion](#contactlinkunion) |  |  |
| `foreign_link` | [ContactLinkUnion](#contactlinkunion) |  |  |
| `user` | [UserUnion](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsLink {
  _: 'contacts.link'
  my_link: ContactLinkUnion
  foreign_link: ContactLinkUnion
  user: UserUnion
}
```


## ContactsResolvedPeerUnion

It's an alias for the `ContactsResolvedPeer` type.

### ContactsResolvedPeer

**Predicate:** "contacts.resolvedPeer"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.resolvedPeer" |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsResolvedPeer {
  _: 'contacts.resolvedPeer'
  peer: PeerUnion
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## ContactsTopPeersUnion

Represents one of the following types:
- [`ContactsTopPeers`](#contactstoppeers)
- [`ContactsTopPeersNotModified`](#contactstoppeersnotmodified)

### ContactsTopPeers

**Predicate:** "contacts.topPeers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.topPeers" |
| `categories` | [TopPeerCategoryPeersUnion[]](#toppeercategorypeersunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface ContactsTopPeers {
  _: 'contacts.topPeers'
  categories: TopPeerCategoryPeersUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```

### ContactsTopPeersNotModified

**Predicate:** "contacts.topPeersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "contacts.topPeersNotModified" |

TypeScript interface:

```typescript
interface ContactsTopPeersNotModified {
  _: 'contacts.topPeersNotModified'
}
```


## DataJsonUnion

It's an alias for the `DataJson` type.

### DataJson

**Predicate:** "dataJSON"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "dataJSON" |
| `data` | string |  |  |

TypeScript interface:

```typescript
interface DataJson {
  _: 'dataJSON'
  data: string
}
```


## DcOptionUnion

It's an alias for the `DcOption` type.

### DcOption

**Predicate:** "dcOption"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "dcOption" |
| `flags` | number |  |  |
| `ipv6` | true |  | Optional |
| `media_only` | true | 2 | Optional |
| `tcpo_only` | true | 4 | Optional |
| `cdn` | true | 8 | Optional |
| `static` | true | 16 | Optional |
| `id` | number |  |  |
| `ip_address` | string |  |  |
| `port` | number |  |  |

TypeScript interface:

```typescript
interface DcOption {
  _: 'dcOption'
  flags: number
  ipv6?: true
  media_only?: true
  tcpo_only?: true
  cdn?: true
  static?: true
  id: number
  ip_address: string
  port: number
}
```


## DialogUnion

It's an alias for the `Dialog` type.

### Dialog

**Predicate:** "dialog"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "dialog" |
| `flags` | number |  |  |
| `pinned` | true | 4 | Optional |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `top_message` | number |  |  |
| `read_inbox_max_id` | number |  |  |
| `read_outbox_max_id` | number |  |  |
| `unread_count` | number |  |  |
| `unread_mentions_count` | number |  |  |
| `notify_settings` | [PeerNotifySettingsUnion](#peernotifysettingsunion) |  |  |
| `pts` | number |  | Optional |
| `draft` | [DraftMessageUnion](#draftmessageunion) | 2 | Optional |

TypeScript interface:

```typescript
interface Dialog {
  _: 'dialog'
  flags: number
  pinned?: true
  peer: PeerUnion
  top_message: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  unread_mentions_count: number
  notify_settings: PeerNotifySettingsUnion
  pts?: number
  draft?: DraftMessageUnion
}
```


## DisabledFeatureUnion

It's an alias for the `DisabledFeature` type.

### DisabledFeature

**Predicate:** "disabledFeature"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "disabledFeature" |
| `feature` | string |  |  |
| `description` | string |  |  |

TypeScript interface:

```typescript
interface DisabledFeature {
  _: 'disabledFeature'
  feature: string
  description: string
}
```


## DocumentUnion

Represents one of the following types:
- [`Document`](#document)
- [`DocumentEmpty`](#documentempty)

### Document

**Predicate:** "document"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "document" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `mime_type` | string |  |  |
| `size` | number |  |  |
| `thumb` | [PhotoSizeUnion](#photosizeunion) |  |  |
| `dc_id` | number |  |  |
| `version` | number |  |  |
| `attributes` | [DocumentAttributeUnion[]](#documentattributeunion) |  |  |

TypeScript interface:

```typescript
interface Document {
  _: 'document'
  id: number
  access_hash: number
  date: number
  mime_type: string
  size: number
  thumb: PhotoSizeUnion
  dc_id: number
  version: number
  attributes: DocumentAttributeUnion[]
}
```

### DocumentEmpty

**Predicate:** "documentEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface DocumentEmpty {
  _: 'documentEmpty'
  id: number
}
```


## DocumentAttributeUnion

Represents one of the following types:
- [`DocumentAttributeAnimated`](#documentattributeanimated)
- [`DocumentAttributeAudio`](#documentattributeaudio)
- [`DocumentAttributeFilename`](#documentattributefilename)
- [`DocumentAttributeHasStickers`](#documentattributehasstickers)
- [`DocumentAttributeImageSize`](#documentattributeimagesize)
- [`DocumentAttributeSticker`](#documentattributesticker)
- [`DocumentAttributeVideo`](#documentattributevideo)

### DocumentAttributeAnimated

**Predicate:** "documentAttributeAnimated"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeAnimated" |

TypeScript interface:

```typescript
interface DocumentAttributeAnimated {
  _: 'documentAttributeAnimated'
}
```

### DocumentAttributeAudio

**Predicate:** "documentAttributeAudio"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeAudio" |
| `flags` | number |  |  |
| `voice` | true | 1024 | Optional |
| `duration` | number |  |  |
| `title` | string |  | Optional |
| `performer` | string | 2 | Optional |
| `waveform` | number[] | 4 | Optional |

TypeScript interface:

```typescript
interface DocumentAttributeAudio {
  _: 'documentAttributeAudio'
  flags: number
  voice?: true
  duration: number
  title?: string
  performer?: string
  waveform?: number[]
}
```

### DocumentAttributeFilename

**Predicate:** "documentAttributeFilename"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeFilename" |
| `file_name` | string |  |  |

TypeScript interface:

```typescript
interface DocumentAttributeFilename {
  _: 'documentAttributeFilename'
  file_name: string
}
```

### DocumentAttributeHasStickers

**Predicate:** "documentAttributeHasStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeHasStickers" |

TypeScript interface:

```typescript
interface DocumentAttributeHasStickers {
  _: 'documentAttributeHasStickers'
}
```

### DocumentAttributeImageSize

**Predicate:** "documentAttributeImageSize"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeImageSize" |
| `w` | number |  |  |
| `h` | number |  |  |

TypeScript interface:

```typescript
interface DocumentAttributeImageSize {
  _: 'documentAttributeImageSize'
  w: number
  h: number
}
```

### DocumentAttributeSticker

**Predicate:** "documentAttributeSticker"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeSticker" |
| `flags` | number |  |  |
| `mask` | true | 2 | Optional |
| `alt` | string |  |  |
| `stickerset` | [InputStickerSetUnion](#inputstickersetunion) |  |  |
| `mask_coords` | [MaskCoordsUnion](#maskcoordsunion) |  | Optional |

TypeScript interface:

```typescript
interface DocumentAttributeSticker {
  _: 'documentAttributeSticker'
  flags: number
  mask?: true
  alt: string
  stickerset: InputStickerSetUnion
  mask_coords?: MaskCoordsUnion
}
```

### DocumentAttributeVideo

**Predicate:** "documentAttributeVideo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "documentAttributeVideo" |
| `flags` | number |  |  |
| `round_message` | true |  | Optional |
| `duration` | number |  |  |
| `w` | number |  |  |
| `h` | number |  |  |

TypeScript interface:

```typescript
interface DocumentAttributeVideo {
  _: 'documentAttributeVideo'
  flags: number
  round_message?: true
  duration: number
  w: number
  h: number
}
```


## DraftMessageUnion

Represents one of the following types:
- [`DraftMessage`](#draftmessage)
- [`DraftMessageEmpty`](#draftmessageempty)

### DraftMessage

**Predicate:** "draftMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "draftMessage" |
| `flags` | number |  |  |
| `no_webpage` | true | 2 | Optional |
| `reply_to_msg_id` | number |  | Optional |
| `message` | string |  |  |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 8 | Optional |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface DraftMessage {
  _: 'draftMessage'
  flags: number
  no_webpage?: true
  reply_to_msg_id?: number
  message: string
  entities?: MessageEntityUnion[]
  date: number
}
```

### DraftMessageEmpty

**Predicate:** "draftMessageEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "draftMessageEmpty" |

TypeScript interface:

```typescript
interface DraftMessageEmpty {
  _: 'draftMessageEmpty'
}
```


## EncryptedChatUnion

Represents one of the following types:
- [`EncryptedChat`](#encryptedchat)
- [`EncryptedChatDiscarded`](#encryptedchatdiscarded)
- [`EncryptedChatEmpty`](#encryptedchatempty)
- [`EncryptedChatRequested`](#encryptedchatrequested)
- [`EncryptedChatWaiting`](#encryptedchatwaiting)

### EncryptedChat

**Predicate:** "encryptedChat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedChat" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `g_a_or_b` | number[] |  |  |
| `key_fingerprint` | number |  |  |

TypeScript interface:

```typescript
interface EncryptedChat {
  _: 'encryptedChat'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a_or_b: number[]
  key_fingerprint: number
}
```

### EncryptedChatDiscarded

**Predicate:** "encryptedChatDiscarded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedChatDiscarded" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface EncryptedChatDiscarded {
  _: 'encryptedChatDiscarded'
  id: number
}
```

### EncryptedChatEmpty

**Predicate:** "encryptedChatEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedChatEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface EncryptedChatEmpty {
  _: 'encryptedChatEmpty'
  id: number
}
```

### EncryptedChatRequested

**Predicate:** "encryptedChatRequested"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedChatRequested" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `g_a` | number[] |  |  |

TypeScript interface:

```typescript
interface EncryptedChatRequested {
  _: 'encryptedChatRequested'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a: number[]
}
```

### EncryptedChatWaiting

**Predicate:** "encryptedChatWaiting"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedChatWaiting" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |

TypeScript interface:

```typescript
interface EncryptedChatWaiting {
  _: 'encryptedChatWaiting'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
}
```


## EncryptedFileUnion

Represents one of the following types:
- [`EncryptedFile`](#encryptedfile)
- [`EncryptedFileEmpty`](#encryptedfileempty)

### EncryptedFile

**Predicate:** "encryptedFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedFile" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `size` | number |  |  |
| `dc_id` | number |  |  |
| `key_fingerprint` | number |  |  |

TypeScript interface:

```typescript
interface EncryptedFile {
  _: 'encryptedFile'
  id: number
  access_hash: number
  size: number
  dc_id: number
  key_fingerprint: number
}
```

### EncryptedFileEmpty

**Predicate:** "encryptedFileEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedFileEmpty" |

TypeScript interface:

```typescript
interface EncryptedFileEmpty {
  _: 'encryptedFileEmpty'
}
```


## EncryptedMessageUnion

Represents one of the following types:
- [`EncryptedMessage`](#encryptedmessage)
- [`EncryptedMessageService`](#encryptedmessageservice)

### EncryptedMessage

**Predicate:** "encryptedMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedMessage" |
| `random_id` | number |  |  |
| `chat_id` | number |  |  |
| `date` | number |  |  |
| `bytes` | number[] |  |  |
| `file` | [EncryptedFileUnion](#encryptedfileunion) |  |  |

TypeScript interface:

```typescript
interface EncryptedMessage {
  _: 'encryptedMessage'
  random_id: number
  chat_id: number
  date: number
  bytes: number[]
  file: EncryptedFileUnion
}
```

### EncryptedMessageService

**Predicate:** "encryptedMessageService"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "encryptedMessageService" |
| `random_id` | number |  |  |
| `chat_id` | number |  |  |
| `date` | number |  |  |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface EncryptedMessageService {
  _: 'encryptedMessageService'
  random_id: number
  chat_id: number
  date: number
  bytes: number[]
}
```


## ErrorUnion

It's an alias for the `Error` type.

### Error

**Predicate:** "error"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "error" |
| `code` | number |  |  |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface Error {
  _: 'error'
  code: number
  text: string
}
```


## ExportedChatInviteUnion

Represents one of the following types:
- [`ChatInviteEmpty`](#chatinviteempty)
- [`ChatInviteExported`](#chatinviteexported)

### ChatInviteEmpty

**Predicate:** "chatInviteEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatInviteEmpty" |

TypeScript interface:

```typescript
interface ChatInviteEmpty {
  _: 'chatInviteEmpty'
}
```

### ChatInviteExported

**Predicate:** "chatInviteExported"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "chatInviteExported" |
| `link` | string |  |  |

TypeScript interface:

```typescript
interface ChatInviteExported {
  _: 'chatInviteExported'
  link: string
}
```


## ExportedMessageLinkUnion

It's an alias for the `ExportedMessageLink` type.

### ExportedMessageLink

**Predicate:** "exportedMessageLink"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "exportedMessageLink" |
| `link` | string |  |  |

TypeScript interface:

```typescript
interface ExportedMessageLink {
  _: 'exportedMessageLink'
  link: string
}
```


## FileLocationUnion

Represents one of the following types:
- [`FileLocation`](#filelocation)
- [`FileLocationUnavailable`](#filelocationunavailable)

### FileLocation

**Predicate:** "fileLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "fileLocation" |
| `dc_id` | number |  |  |
| `volume_id` | number |  |  |
| `local_id` | number |  |  |
| `secret` | number |  |  |

TypeScript interface:

```typescript
interface FileLocation {
  _: 'fileLocation'
  dc_id: number
  volume_id: number
  local_id: number
  secret: number
}
```

### FileLocationUnavailable

**Predicate:** "fileLocationUnavailable"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "fileLocationUnavailable" |
| `volume_id` | number |  |  |
| `local_id` | number |  |  |
| `secret` | number |  |  |

TypeScript interface:

```typescript
interface FileLocationUnavailable {
  _: 'fileLocationUnavailable'
  volume_id: number
  local_id: number
  secret: number
}
```


## FoundGifUnion

Represents one of the following types:
- [`FoundGif`](#foundgif)
- [`FoundGifCached`](#foundgifcached)

### FoundGif

**Predicate:** "foundGif"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "foundGif" |
| `url` | string |  |  |
| `thumb_url` | string |  |  |
| `content_url` | string |  |  |
| `content_type` | string |  |  |
| `w` | number |  |  |
| `h` | number |  |  |

TypeScript interface:

```typescript
interface FoundGif {
  _: 'foundGif'
  url: string
  thumb_url: string
  content_url: string
  content_type: string
  w: number
  h: number
}
```

### FoundGifCached

**Predicate:** "foundGifCached"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "foundGifCached" |
| `url` | string |  |  |
| `photo` | [PhotoUnion](#photounion) |  |  |
| `document` | [DocumentUnion](#documentunion) |  |  |

TypeScript interface:

```typescript
interface FoundGifCached {
  _: 'foundGifCached'
  url: string
  photo: PhotoUnion
  document: DocumentUnion
}
```


## GameUnion

It's an alias for the `Game` type.

### Game

**Predicate:** "game"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "game" |
| `flags` | number |  |  |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `short_name` | string |  |  |
| `title` | string |  |  |
| `description` | string |  |  |
| `photo` | [PhotoUnion](#photounion) |  |  |
| `document` | [DocumentUnion](#documentunion) |  | Optional |

TypeScript interface:

```typescript
interface Game {
  _: 'game'
  flags: number
  id: number
  access_hash: number
  short_name: string
  title: string
  description: string
  photo: PhotoUnion
  document?: DocumentUnion
}
```


## GeoPointUnion

Represents one of the following types:
- [`GeoPoint`](#geopoint)
- [`GeoPointEmpty`](#geopointempty)

### GeoPoint

**Predicate:** "geoPoint"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "geoPoint" |
| `long` | number |  |  |
| `lat` | number |  |  |

TypeScript interface:

```typescript
interface GeoPoint {
  _: 'geoPoint'
  long: number
  lat: number
}
```

### GeoPointEmpty

**Predicate:** "geoPointEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "geoPointEmpty" |

TypeScript interface:

```typescript
interface GeoPointEmpty {
  _: 'geoPointEmpty'
}
```


## HelpAppUpdateUnion

Represents one of the following types:
- [`HelpAppUpdate`](#helpappupdate)
- [`HelpNoAppUpdate`](#helpnoappupdate)

### HelpAppUpdate

**Predicate:** "help.appUpdate"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "help.appUpdate" |
| `id` | number |  |  |
| `critical` | boolean |  |  |
| `url` | string |  |  |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface HelpAppUpdate {
  _: 'help.appUpdate'
  id: number
  critical: boolean
  url: string
  text: string
}
```

### HelpNoAppUpdate

**Predicate:** "help.noAppUpdate"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "help.noAppUpdate" |

TypeScript interface:

```typescript
interface HelpNoAppUpdate {
  _: 'help.noAppUpdate'
}
```


## HelpInviteTextUnion

It's an alias for the `HelpInviteText` type.

### HelpInviteText

**Predicate:** "help.inviteText"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "help.inviteText" |
| `message` | string |  |  |

TypeScript interface:

```typescript
interface HelpInviteText {
  _: 'help.inviteText'
  message: string
}
```


## HelpSupportUnion

It's an alias for the `HelpSupport` type.

### HelpSupport

**Predicate:** "help.support"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "help.support" |
| `phone_number` | string |  |  |
| `user` | [UserUnion](#userunion) |  |  |

TypeScript interface:

```typescript
interface HelpSupport {
  _: 'help.support'
  phone_number: string
  user: UserUnion
}
```


## HelpTermsOfServiceUnion

It's an alias for the `HelpTermsOfService` type.

### HelpTermsOfService

**Predicate:** "help.termsOfService"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "help.termsOfService" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface HelpTermsOfService {
  _: 'help.termsOfService'
  text: string
}
```


## HighScoreUnion

It's an alias for the `HighScore` type.

### HighScore

**Predicate:** "highScore"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "highScore" |
| `pos` | number |  |  |
| `user_id` | number |  |  |
| `score` | number |  |  |

TypeScript interface:

```typescript
interface HighScore {
  _: 'highScore'
  pos: number
  user_id: number
  score: number
}
```


## ImportedContactUnion

It's an alias for the `ImportedContact` type.

### ImportedContact

**Predicate:** "importedContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "importedContact" |
| `user_id` | number |  |  |
| `client_id` | number |  |  |

TypeScript interface:

```typescript
interface ImportedContact {
  _: 'importedContact'
  user_id: number
  client_id: number
}
```


## InlineBotSwitchPmUnion

It's an alias for the `InlineBotSwitchPm` type.

### InlineBotSwitchPm

**Predicate:** "inlineBotSwitchPM"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inlineBotSwitchPM" |
| `text` | string |  |  |
| `start_param` | string |  |  |

TypeScript interface:

```typescript
interface InlineBotSwitchPm {
  _: 'inlineBotSwitchPM'
  text: string
  start_param: string
}
```


## InputAppEventUnion

It's an alias for the `InputAppEvent` type.

### InputAppEvent

**Predicate:** "inputAppEvent"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputAppEvent" |
| `time` | number |  |  |
| `type` | string |  |  |
| `peer` | number |  |  |
| `data` | string |  |  |

TypeScript interface:

```typescript
interface InputAppEvent {
  _: 'inputAppEvent'
  time: number
  type: string
  peer: number
  data: string
}
```


## InputBotInlineMessageUnion

Represents one of the following types:
- [`InputBotInlineMessageGame`](#inputbotinlinemessagegame)
- [`InputBotInlineMessageMediaAuto`](#inputbotinlinemessagemediaauto)
- [`InputBotInlineMessageMediaContact`](#inputbotinlinemessagemediacontact)
- [`InputBotInlineMessageMediaGeo`](#inputbotinlinemessagemediageo)
- [`InputBotInlineMessageMediaVenue`](#inputbotinlinemessagemediavenue)
- [`InputBotInlineMessageText`](#inputbotinlinemessagetext)

### InputBotInlineMessageGame

**Predicate:** "inputBotInlineMessageGame"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageGame" |
| `flags` | number |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageGame {
  _: 'inputBotInlineMessageGame'
  flags: number
  reply_markup?: ReplyMarkupUnion
}
```

### InputBotInlineMessageMediaAuto

**Predicate:** "inputBotInlineMessageMediaAuto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageMediaAuto" |
| `flags` | number |  |  |
| `caption` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageMediaAuto {
  _: 'inputBotInlineMessageMediaAuto'
  flags: number
  caption: string
  reply_markup?: ReplyMarkupUnion
}
```

### InputBotInlineMessageMediaContact

**Predicate:** "inputBotInlineMessageMediaContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageMediaContact" |
| `flags` | number |  |  |
| `phone_number` | string |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageMediaContact {
  _: 'inputBotInlineMessageMediaContact'
  flags: number
  phone_number: string
  first_name: string
  last_name: string
  reply_markup?: ReplyMarkupUnion
}
```

### InputBotInlineMessageMediaGeo

**Predicate:** "inputBotInlineMessageMediaGeo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageMediaGeo" |
| `flags` | number |  |  |
| `geo_point` | [InputGeoPointUnion](#inputgeopointunion) |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageMediaGeo {
  _: 'inputBotInlineMessageMediaGeo'
  flags: number
  geo_point: InputGeoPointUnion
  reply_markup?: ReplyMarkupUnion
}
```

### InputBotInlineMessageMediaVenue

**Predicate:** "inputBotInlineMessageMediaVenue"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageMediaVenue" |
| `flags` | number |  |  |
| `geo_point` | [InputGeoPointUnion](#inputgeopointunion) |  |  |
| `title` | string |  |  |
| `address` | string |  |  |
| `provider` | string |  |  |
| `venue_id` | string |  |  |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageMediaVenue {
  _: 'inputBotInlineMessageMediaVenue'
  flags: number
  geo_point: InputGeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
  reply_markup?: ReplyMarkupUnion
}
```

### InputBotInlineMessageText

**Predicate:** "inputBotInlineMessageText"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageText" |
| `flags` | number |  |  |
| `no_webpage` | true |  | Optional |
| `message` | string |  |  |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 2 | Optional |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 4 | Optional |

TypeScript interface:

```typescript
interface InputBotInlineMessageText {
  _: 'inputBotInlineMessageText'
  flags: number
  no_webpage?: true
  message: string
  entities?: MessageEntityUnion[]
  reply_markup?: ReplyMarkupUnion
}
```


## InputBotInlineMessageIdUnion

It's an alias for the `InputBotInlineMessageId` type.

### InputBotInlineMessageId

**Predicate:** "inputBotInlineMessageID"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineMessageID" |
| `dc_id` | number |  |  |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputBotInlineMessageId {
  _: 'inputBotInlineMessageID'
  dc_id: number
  id: number
  access_hash: number
}
```


## InputBotInlineResultUnion

Represents one of the following types:
- [`InputBotInlineResult`](#inputbotinlineresult)
- [`InputBotInlineResultDocument`](#inputbotinlineresultdocument)
- [`InputBotInlineResultGame`](#inputbotinlineresultgame)
- [`InputBotInlineResultPhoto`](#inputbotinlineresultphoto)

### InputBotInlineResult

**Predicate:** "inputBotInlineResult"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineResult" |
| `flags` | number |  |  |
| `id` | string |  |  |
| `type` | string |  |  |
| `title` | string | 2 | Optional |
| `description` | string | 4 | Optional |
| `url` | string | 8 | Optional |
| `thumb_url` | string | 16 | Optional |
| `content_url` | string | 32 | Optional |
| `content_type` | string | 32 | Optional |
| `w` | number | 64 | Optional |
| `h` | number | 64 | Optional |
| `duration` | number | 128 | Optional |
| `send_message` | [InputBotInlineMessageUnion](#inputbotinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface InputBotInlineResult {
  _: 'inputBotInlineResult'
  flags: number
  id: string
  type: string
  title?: string
  description?: string
  url?: string
  thumb_url?: string
  content_url?: string
  content_type?: string
  w?: number
  h?: number
  duration?: number
  send_message: InputBotInlineMessageUnion
}
```

### InputBotInlineResultDocument

**Predicate:** "inputBotInlineResultDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineResultDocument" |
| `flags` | number |  |  |
| `id` | string |  |  |
| `type` | string |  |  |
| `title` | string | 2 | Optional |
| `description` | string | 4 | Optional |
| `document` | [InputDocumentUnion](#inputdocumentunion) |  |  |
| `send_message` | [InputBotInlineMessageUnion](#inputbotinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface InputBotInlineResultDocument {
  _: 'inputBotInlineResultDocument'
  flags: number
  id: string
  type: string
  title?: string
  description?: string
  document: InputDocumentUnion
  send_message: InputBotInlineMessageUnion
}
```

### InputBotInlineResultGame

**Predicate:** "inputBotInlineResultGame"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineResultGame" |
| `id` | string |  |  |
| `short_name` | string |  |  |
| `send_message` | [InputBotInlineMessageUnion](#inputbotinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface InputBotInlineResultGame {
  _: 'inputBotInlineResultGame'
  id: string
  short_name: string
  send_message: InputBotInlineMessageUnion
}
```

### InputBotInlineResultPhoto

**Predicate:** "inputBotInlineResultPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputBotInlineResultPhoto" |
| `id` | string |  |  |
| `type` | string |  |  |
| `photo` | [InputPhotoUnion](#inputphotounion) |  |  |
| `send_message` | [InputBotInlineMessageUnion](#inputbotinlinemessageunion) |  |  |

TypeScript interface:

```typescript
interface InputBotInlineResultPhoto {
  _: 'inputBotInlineResultPhoto'
  id: string
  type: string
  photo: InputPhotoUnion
  send_message: InputBotInlineMessageUnion
}
```


## InputChannelUnion

Represents one of the following types:
- [`InputChannel`](#inputchannel)
- [`InputChannelEmpty`](#inputchannelempty)

### InputChannel

**Predicate:** "inputChannel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputChannel" |
| `channel_id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputChannel {
  _: 'inputChannel'
  channel_id: number
  access_hash: number
}
```

### InputChannelEmpty

**Predicate:** "inputChannelEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputChannelEmpty" |

TypeScript interface:

```typescript
interface InputChannelEmpty {
  _: 'inputChannelEmpty'
}
```


## InputChatPhotoUnion

Represents one of the following types:
- [`InputChatPhoto`](#inputchatphoto)
- [`InputChatPhotoEmpty`](#inputchatphotoempty)
- [`InputChatUploadedPhoto`](#inputchatuploadedphoto)

### InputChatPhoto

**Predicate:** "inputChatPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputChatPhoto" |
| `id` | [InputPhotoUnion](#inputphotounion) |  |  |

TypeScript interface:

```typescript
interface InputChatPhoto {
  _: 'inputChatPhoto'
  id: InputPhotoUnion
}
```

### InputChatPhotoEmpty

**Predicate:** "inputChatPhotoEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputChatPhotoEmpty" |

TypeScript interface:

```typescript
interface InputChatPhotoEmpty {
  _: 'inputChatPhotoEmpty'
}
```

### InputChatUploadedPhoto

**Predicate:** "inputChatUploadedPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputChatUploadedPhoto" |
| `file` | [InputFileUnion](#inputfileunion) |  |  |

TypeScript interface:

```typescript
interface InputChatUploadedPhoto {
  _: 'inputChatUploadedPhoto'
  file: InputFileUnion
}
```


## InputContactUnion

It's an alias for the `InputPhoneContact` type.

### InputPhoneContact

**Predicate:** "inputPhoneContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPhoneContact" |
| `client_id` | number |  |  |
| `phone` | string |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |

TypeScript interface:

```typescript
interface InputPhoneContact {
  _: 'inputPhoneContact'
  client_id: number
  phone: string
  first_name: string
  last_name: string
}
```


## InputDocumentUnion

Represents one of the following types:
- [`InputDocument`](#inputdocument)
- [`InputDocumentEmpty`](#inputdocumentempty)

### InputDocument

**Predicate:** "inputDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputDocument" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputDocument {
  _: 'inputDocument'
  id: number
  access_hash: number
}
```

### InputDocumentEmpty

**Predicate:** "inputDocumentEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputDocumentEmpty" |

TypeScript interface:

```typescript
interface InputDocumentEmpty {
  _: 'inputDocumentEmpty'
}
```


## InputEncryptedChatUnion

It's an alias for the `InputEncryptedChat` type.

### InputEncryptedChat

**Predicate:** "inputEncryptedChat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedChat" |
| `chat_id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputEncryptedChat {
  _: 'inputEncryptedChat'
  chat_id: number
  access_hash: number
}
```


## InputEncryptedFileUnion

Represents one of the following types:
- [`InputEncryptedFile`](#inputencryptedfile)
- [`InputEncryptedFileBigUploaded`](#inputencryptedfilebiguploaded)
- [`InputEncryptedFileEmpty`](#inputencryptedfileempty)
- [`InputEncryptedFileUploaded`](#inputencryptedfileuploaded)

### InputEncryptedFile

**Predicate:** "inputEncryptedFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedFile" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputEncryptedFile {
  _: 'inputEncryptedFile'
  id: number
  access_hash: number
}
```

### InputEncryptedFileBigUploaded

**Predicate:** "inputEncryptedFileBigUploaded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedFileBigUploaded" |
| `id` | number |  |  |
| `parts` | number |  |  |
| `key_fingerprint` | number |  |  |

TypeScript interface:

```typescript
interface InputEncryptedFileBigUploaded {
  _: 'inputEncryptedFileBigUploaded'
  id: number
  parts: number
  key_fingerprint: number
}
```

### InputEncryptedFileEmpty

**Predicate:** "inputEncryptedFileEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedFileEmpty" |

TypeScript interface:

```typescript
interface InputEncryptedFileEmpty {
  _: 'inputEncryptedFileEmpty'
}
```

### InputEncryptedFileUploaded

**Predicate:** "inputEncryptedFileUploaded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedFileUploaded" |
| `id` | number |  |  |
| `parts` | number |  |  |
| `md5_checksum` | string |  |  |
| `key_fingerprint` | number |  |  |

TypeScript interface:

```typescript
interface InputEncryptedFileUploaded {
  _: 'inputEncryptedFileUploaded'
  id: number
  parts: number
  md5_checksum: string
  key_fingerprint: number
}
```


## InputFileUnion

Represents one of the following types:
- [`InputFile`](#inputfile)
- [`InputFileBig`](#inputfilebig)

### InputFile

**Predicate:** "inputFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputFile" |
| `id` | number |  |  |
| `parts` | number |  |  |
| `name` | string |  |  |
| `md5_checksum` | string |  |  |

TypeScript interface:

```typescript
interface InputFile {
  _: 'inputFile'
  id: number
  parts: number
  name: string
  md5_checksum: string
}
```

### InputFileBig

**Predicate:** "inputFileBig"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputFileBig" |
| `id` | number |  |  |
| `parts` | number |  |  |
| `name` | string |  |  |

TypeScript interface:

```typescript
interface InputFileBig {
  _: 'inputFileBig'
  id: number
  parts: number
  name: string
}
```


## InputFileLocationUnion

Represents one of the following types:
- [`InputDocumentFileLocation`](#inputdocumentfilelocation)
- [`InputEncryptedFileLocation`](#inputencryptedfilelocation)
- [`InputFileLocation`](#inputfilelocation)

### InputDocumentFileLocation

**Predicate:** "inputDocumentFileLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputDocumentFileLocation" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface InputDocumentFileLocation {
  _: 'inputDocumentFileLocation'
  id: number
  access_hash: number
  version: number
}
```

### InputEncryptedFileLocation

**Predicate:** "inputEncryptedFileLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputEncryptedFileLocation" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputEncryptedFileLocation {
  _: 'inputEncryptedFileLocation'
  id: number
  access_hash: number
}
```

### InputFileLocation

**Predicate:** "inputFileLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputFileLocation" |
| `volume_id` | number |  |  |
| `local_id` | number |  |  |
| `secret` | number |  |  |

TypeScript interface:

```typescript
interface InputFileLocation {
  _: 'inputFileLocation'
  volume_id: number
  local_id: number
  secret: number
}
```


## InputGameUnion

Represents one of the following types:
- [`InputGameId`](#inputgameid)
- [`InputGameShortName`](#inputgameshortname)

### InputGameId

**Predicate:** "inputGameID"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputGameID" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputGameId {
  _: 'inputGameID'
  id: number
  access_hash: number
}
```

### InputGameShortName

**Predicate:** "inputGameShortName"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputGameShortName" |
| `bot_id` | [InputUserUnion](#inputuserunion) |  |  |
| `short_name` | string |  |  |

TypeScript interface:

```typescript
interface InputGameShortName {
  _: 'inputGameShortName'
  bot_id: InputUserUnion
  short_name: string
}
```


## InputGeoPointUnion

Represents one of the following types:
- [`InputGeoPoint`](#inputgeopoint)
- [`InputGeoPointEmpty`](#inputgeopointempty)

### InputGeoPoint

**Predicate:** "inputGeoPoint"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputGeoPoint" |
| `lat` | number |  |  |
| `long` | number |  |  |

TypeScript interface:

```typescript
interface InputGeoPoint {
  _: 'inputGeoPoint'
  lat: number
  long: number
}
```

### InputGeoPointEmpty

**Predicate:** "inputGeoPointEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputGeoPointEmpty" |

TypeScript interface:

```typescript
interface InputGeoPointEmpty {
  _: 'inputGeoPointEmpty'
}
```


## InputMediaUnion

Represents one of the following types:
- [`InputMediaContact`](#inputmediacontact)
- [`InputMediaDocument`](#inputmediadocument)
- [`InputMediaDocumentExternal`](#inputmediadocumentexternal)
- [`InputMediaEmpty`](#inputmediaempty)
- [`InputMediaGame`](#inputmediagame)
- [`InputMediaGeoPoint`](#inputmediageopoint)
- [`InputMediaGifExternal`](#inputmediagifexternal)
- [`InputMediaInvoice`](#inputmediainvoice)
- [`InputMediaPhoto`](#inputmediaphoto)
- [`InputMediaPhotoExternal`](#inputmediaphotoexternal)
- [`InputMediaUploadedDocument`](#inputmediauploadeddocument)
- [`InputMediaUploadedPhoto`](#inputmediauploadedphoto)
- [`InputMediaVenue`](#inputmediavenue)

### InputMediaContact

**Predicate:** "inputMediaContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaContact" |
| `phone_number` | string |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |

TypeScript interface:

```typescript
interface InputMediaContact {
  _: 'inputMediaContact'
  phone_number: string
  first_name: string
  last_name: string
}
```

### InputMediaDocument

**Predicate:** "inputMediaDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaDocument" |
| `flags` | number |  |  |
| `id` | [InputDocumentUnion](#inputdocumentunion) |  |  |
| `caption` | string |  |  |
| `ttl_seconds` | number |  | Optional |

TypeScript interface:

```typescript
interface InputMediaDocument {
  _: 'inputMediaDocument'
  flags: number
  id: InputDocumentUnion
  caption: string
  ttl_seconds?: number
}
```

### InputMediaDocumentExternal

**Predicate:** "inputMediaDocumentExternal"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaDocumentExternal" |
| `flags` | number |  |  |
| `url` | string |  |  |
| `caption` | string |  |  |
| `ttl_seconds` | number |  | Optional |

TypeScript interface:

```typescript
interface InputMediaDocumentExternal {
  _: 'inputMediaDocumentExternal'
  flags: number
  url: string
  caption: string
  ttl_seconds?: number
}
```

### InputMediaEmpty

**Predicate:** "inputMediaEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaEmpty" |

TypeScript interface:

```typescript
interface InputMediaEmpty {
  _: 'inputMediaEmpty'
}
```

### InputMediaGame

**Predicate:** "inputMediaGame"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaGame" |
| `id` | [InputGameUnion](#inputgameunion) |  |  |

TypeScript interface:

```typescript
interface InputMediaGame {
  _: 'inputMediaGame'
  id: InputGameUnion
}
```

### InputMediaGeoPoint

**Predicate:** "inputMediaGeoPoint"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaGeoPoint" |
| `geo_point` | [InputGeoPointUnion](#inputgeopointunion) |  |  |

TypeScript interface:

```typescript
interface InputMediaGeoPoint {
  _: 'inputMediaGeoPoint'
  geo_point: InputGeoPointUnion
}
```

### InputMediaGifExternal

**Predicate:** "inputMediaGifExternal"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaGifExternal" |
| `url` | string |  |  |
| `q` | string |  |  |

TypeScript interface:

```typescript
interface InputMediaGifExternal {
  _: 'inputMediaGifExternal'
  url: string
  q: string
}
```

### InputMediaInvoice

**Predicate:** "inputMediaInvoice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaInvoice" |
| `flags` | number |  |  |
| `title` | string |  |  |
| `description` | string |  |  |
| `photo` | [InputWebDocumentUnion](#inputwebdocumentunion) |  | Optional |
| `invoice` | [InvoiceUnion](#invoiceunion) |  |  |
| `payload` | number[] |  |  |
| `provider` | string |  |  |
| `start_param` | string |  |  |

TypeScript interface:

```typescript
interface InputMediaInvoice {
  _: 'inputMediaInvoice'
  flags: number
  title: string
  description: string
  photo?: InputWebDocumentUnion
  invoice: InvoiceUnion
  payload: number[]
  provider: string
  start_param: string
}
```

### InputMediaPhoto

**Predicate:** "inputMediaPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaPhoto" |
| `flags` | number |  |  |
| `id` | [InputPhotoUnion](#inputphotounion) |  |  |
| `caption` | string |  |  |
| `ttl_seconds` | number |  | Optional |

TypeScript interface:

```typescript
interface InputMediaPhoto {
  _: 'inputMediaPhoto'
  flags: number
  id: InputPhotoUnion
  caption: string
  ttl_seconds?: number
}
```

### InputMediaPhotoExternal

**Predicate:** "inputMediaPhotoExternal"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaPhotoExternal" |
| `flags` | number |  |  |
| `url` | string |  |  |
| `caption` | string |  |  |
| `ttl_seconds` | number |  | Optional |

TypeScript interface:

```typescript
interface InputMediaPhotoExternal {
  _: 'inputMediaPhotoExternal'
  flags: number
  url: string
  caption: string
  ttl_seconds?: number
}
```

### InputMediaUploadedDocument

**Predicate:** "inputMediaUploadedDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaUploadedDocument" |
| `flags` | number |  |  |
| `file` | [InputFileUnion](#inputfileunion) |  |  |
| `thumb` | [InputFileUnion](#inputfileunion) | 4 | Optional |
| `mime_type` | string |  |  |
| `attributes` | [DocumentAttributeUnion[]](#documentattributeunion) |  |  |
| `caption` | string |  |  |
| `stickers` | [InputDocumentUnion[]](#inputdocumentunion) |  | Optional |
| `ttl_seconds` | number | 2 | Optional |

TypeScript interface:

```typescript
interface InputMediaUploadedDocument {
  _: 'inputMediaUploadedDocument'
  flags: number
  file: InputFileUnion
  thumb?: InputFileUnion
  mime_type: string
  attributes: DocumentAttributeUnion[]
  caption: string
  stickers?: InputDocumentUnion[]
  ttl_seconds?: number
}
```

### InputMediaUploadedPhoto

**Predicate:** "inputMediaUploadedPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaUploadedPhoto" |
| `flags` | number |  |  |
| `file` | [InputFileUnion](#inputfileunion) |  |  |
| `caption` | string |  |  |
| `stickers` | [InputDocumentUnion[]](#inputdocumentunion) |  | Optional |
| `ttl_seconds` | number | 2 | Optional |

TypeScript interface:

```typescript
interface InputMediaUploadedPhoto {
  _: 'inputMediaUploadedPhoto'
  flags: number
  file: InputFileUnion
  caption: string
  stickers?: InputDocumentUnion[]
  ttl_seconds?: number
}
```

### InputMediaVenue

**Predicate:** "inputMediaVenue"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMediaVenue" |
| `geo_point` | [InputGeoPointUnion](#inputgeopointunion) |  |  |
| `title` | string |  |  |
| `address` | string |  |  |
| `provider` | string |  |  |
| `venue_id` | string |  |  |

TypeScript interface:

```typescript
interface InputMediaVenue {
  _: 'inputMediaVenue'
  geo_point: InputGeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
}
```


## InputNotifyPeerUnion

Represents one of the following types:
- [`InputNotifyAll`](#inputnotifyall)
- [`InputNotifyChats`](#inputnotifychats)
- [`InputNotifyPeer`](#inputnotifypeer)
- [`InputNotifyUsers`](#inputnotifyusers)

### InputNotifyAll

**Predicate:** "inputNotifyAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputNotifyAll" |

TypeScript interface:

```typescript
interface InputNotifyAll {
  _: 'inputNotifyAll'
}
```

### InputNotifyChats

**Predicate:** "inputNotifyChats"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputNotifyChats" |

TypeScript interface:

```typescript
interface InputNotifyChats {
  _: 'inputNotifyChats'
}
```

### InputNotifyPeer

**Predicate:** "inputNotifyPeer"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputNotifyPeer" |
| `peer` | [InputPeerUnion](#inputpeerunion) |  |  |

TypeScript interface:

```typescript
interface InputNotifyPeer {
  _: 'inputNotifyPeer'
  peer: InputPeerUnion
}
```

### InputNotifyUsers

**Predicate:** "inputNotifyUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputNotifyUsers" |

TypeScript interface:

```typescript
interface InputNotifyUsers {
  _: 'inputNotifyUsers'
}
```


## InputPaymentCredentialsUnion

Represents one of the following types:
- [`InputPaymentCredentials`](#inputpaymentcredentials)
- [`InputPaymentCredentialsSaved`](#inputpaymentcredentialssaved)

### InputPaymentCredentials

**Predicate:** "inputPaymentCredentials"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPaymentCredentials" |
| `flags` | number |  |  |
| `save` | true |  | Optional |
| `data` | [DataJsonUnion](#datajsonunion) |  |  |

TypeScript interface:

```typescript
interface InputPaymentCredentials {
  _: 'inputPaymentCredentials'
  flags: number
  save?: true
  data: DataJsonUnion
}
```

### InputPaymentCredentialsSaved

**Predicate:** "inputPaymentCredentialsSaved"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPaymentCredentialsSaved" |
| `id` | string |  |  |
| `tmp_password` | number[] |  |  |

TypeScript interface:

```typescript
interface InputPaymentCredentialsSaved {
  _: 'inputPaymentCredentialsSaved'
  id: string
  tmp_password: number[]
}
```


## InputPeerUnion

Represents one of the following types:
- [`InputPeerChannel`](#inputpeerchannel)
- [`InputPeerChat`](#inputpeerchat)
- [`InputPeerEmpty`](#inputpeerempty)
- [`InputPeerSelf`](#inputpeerself)
- [`InputPeerUser`](#inputpeeruser)

### InputPeerChannel

**Predicate:** "inputPeerChannel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerChannel" |
| `channel_id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputPeerChannel {
  _: 'inputPeerChannel'
  channel_id: number
  access_hash: number
}
```

### InputPeerChat

**Predicate:** "inputPeerChat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerChat" |
| `chat_id` | number |  |  |

TypeScript interface:

```typescript
interface InputPeerChat {
  _: 'inputPeerChat'
  chat_id: number
}
```

### InputPeerEmpty

**Predicate:** "inputPeerEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerEmpty" |

TypeScript interface:

```typescript
interface InputPeerEmpty {
  _: 'inputPeerEmpty'
}
```

### InputPeerSelf

**Predicate:** "inputPeerSelf"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerSelf" |

TypeScript interface:

```typescript
interface InputPeerSelf {
  _: 'inputPeerSelf'
}
```

### InputPeerUser

**Predicate:** "inputPeerUser"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerUser" |
| `user_id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputPeerUser {
  _: 'inputPeerUser'
  user_id: number
  access_hash: number
}
```


## InputPeerNotifyEventsUnion

Represents one of the following types:
- [`InputPeerNotifyEventsAll`](#inputpeernotifyeventsall)
- [`InputPeerNotifyEventsEmpty`](#inputpeernotifyeventsempty)

### InputPeerNotifyEventsAll

**Predicate:** "inputPeerNotifyEventsAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerNotifyEventsAll" |

TypeScript interface:

```typescript
interface InputPeerNotifyEventsAll {
  _: 'inputPeerNotifyEventsAll'
}
```

### InputPeerNotifyEventsEmpty

**Predicate:** "inputPeerNotifyEventsEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerNotifyEventsEmpty" |

TypeScript interface:

```typescript
interface InputPeerNotifyEventsEmpty {
  _: 'inputPeerNotifyEventsEmpty'
}
```


## InputPeerNotifySettingsUnion

It's an alias for the `InputPeerNotifySettings` type.

### InputPeerNotifySettings

**Predicate:** "inputPeerNotifySettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPeerNotifySettings" |
| `flags` | number |  |  |
| `show_previews` | true |  | Optional |
| `silent` | true | 2 | Optional |
| `mute_until` | number |  |  |
| `sound` | string |  |  |

TypeScript interface:

```typescript
interface InputPeerNotifySettings {
  _: 'inputPeerNotifySettings'
  flags: number
  show_previews?: true
  silent?: true
  mute_until: number
  sound: string
}
```


## InputPhoneCallUnion

It's an alias for the `InputPhoneCall` type.

### InputPhoneCall

**Predicate:** "inputPhoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPhoneCall" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputPhoneCall {
  _: 'inputPhoneCall'
  id: number
  access_hash: number
}
```


## InputPhotoUnion

Represents one of the following types:
- [`InputPhoto`](#inputphoto)
- [`InputPhotoEmpty`](#inputphotoempty)

### InputPhoto

**Predicate:** "inputPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPhoto" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputPhoto {
  _: 'inputPhoto'
  id: number
  access_hash: number
}
```

### InputPhotoEmpty

**Predicate:** "inputPhotoEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPhotoEmpty" |

TypeScript interface:

```typescript
interface InputPhotoEmpty {
  _: 'inputPhotoEmpty'
}
```


## InputPrivacyKeyUnion

Represents one of the following types:
- [`InputPrivacyKeyChatInvite`](#inputprivacykeychatinvite)
- [`InputPrivacyKeyPhoneCall`](#inputprivacykeyphonecall)
- [`InputPrivacyKeyStatusTimestamp`](#inputprivacykeystatustimestamp)

### InputPrivacyKeyChatInvite

**Predicate:** "inputPrivacyKeyChatInvite"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyKeyChatInvite" |

TypeScript interface:

```typescript
interface InputPrivacyKeyChatInvite {
  _: 'inputPrivacyKeyChatInvite'
}
```

### InputPrivacyKeyPhoneCall

**Predicate:** "inputPrivacyKeyPhoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyKeyPhoneCall" |

TypeScript interface:

```typescript
interface InputPrivacyKeyPhoneCall {
  _: 'inputPrivacyKeyPhoneCall'
}
```

### InputPrivacyKeyStatusTimestamp

**Predicate:** "inputPrivacyKeyStatusTimestamp"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyKeyStatusTimestamp" |

TypeScript interface:

```typescript
interface InputPrivacyKeyStatusTimestamp {
  _: 'inputPrivacyKeyStatusTimestamp'
}
```


## InputPrivacyRuleUnion

Represents one of the following types:
- [`InputPrivacyValueAllowAll`](#inputprivacyvalueallowall)
- [`InputPrivacyValueAllowContacts`](#inputprivacyvalueallowcontacts)
- [`InputPrivacyValueAllowUsers`](#inputprivacyvalueallowusers)
- [`InputPrivacyValueDisallowAll`](#inputprivacyvaluedisallowall)
- [`InputPrivacyValueDisallowContacts`](#inputprivacyvaluedisallowcontacts)
- [`InputPrivacyValueDisallowUsers`](#inputprivacyvaluedisallowusers)

### InputPrivacyValueAllowAll

**Predicate:** "inputPrivacyValueAllowAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueAllowAll" |

TypeScript interface:

```typescript
interface InputPrivacyValueAllowAll {
  _: 'inputPrivacyValueAllowAll'
}
```

### InputPrivacyValueAllowContacts

**Predicate:** "inputPrivacyValueAllowContacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueAllowContacts" |

TypeScript interface:

```typescript
interface InputPrivacyValueAllowContacts {
  _: 'inputPrivacyValueAllowContacts'
}
```

### InputPrivacyValueAllowUsers

**Predicate:** "inputPrivacyValueAllowUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueAllowUsers" |
| `users` | [InputUserUnion[]](#inputuserunion) |  |  |

TypeScript interface:

```typescript
interface InputPrivacyValueAllowUsers {
  _: 'inputPrivacyValueAllowUsers'
  users: InputUserUnion[]
}
```

### InputPrivacyValueDisallowAll

**Predicate:** "inputPrivacyValueDisallowAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueDisallowAll" |

TypeScript interface:

```typescript
interface InputPrivacyValueDisallowAll {
  _: 'inputPrivacyValueDisallowAll'
}
```

### InputPrivacyValueDisallowContacts

**Predicate:** "inputPrivacyValueDisallowContacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueDisallowContacts" |

TypeScript interface:

```typescript
interface InputPrivacyValueDisallowContacts {
  _: 'inputPrivacyValueDisallowContacts'
}
```

### InputPrivacyValueDisallowUsers

**Predicate:** "inputPrivacyValueDisallowUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputPrivacyValueDisallowUsers" |
| `users` | [InputUserUnion[]](#inputuserunion) |  |  |

TypeScript interface:

```typescript
interface InputPrivacyValueDisallowUsers {
  _: 'inputPrivacyValueDisallowUsers'
  users: InputUserUnion[]
}
```


## InputStickerSetUnion

Represents one of the following types:
- [`InputStickerSetEmpty`](#inputstickersetempty)
- [`InputStickerSetId`](#inputstickersetid)
- [`InputStickerSetShortName`](#inputstickersetshortname)

### InputStickerSetEmpty

**Predicate:** "inputStickerSetEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickerSetEmpty" |

TypeScript interface:

```typescript
interface InputStickerSetEmpty {
  _: 'inputStickerSetEmpty'
}
```

### InputStickerSetId

**Predicate:** "inputStickerSetID"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickerSetID" |
| `id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputStickerSetId {
  _: 'inputStickerSetID'
  id: number
  access_hash: number
}
```

### InputStickerSetShortName

**Predicate:** "inputStickerSetShortName"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickerSetShortName" |
| `short_name` | string |  |  |

TypeScript interface:

```typescript
interface InputStickerSetShortName {
  _: 'inputStickerSetShortName'
  short_name: string
}
```


## InputStickerSetItemUnion

It's an alias for the `InputStickerSetItem` type.

### InputStickerSetItem

**Predicate:** "inputStickerSetItem"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickerSetItem" |
| `flags` | number |  |  |
| `document` | [InputDocumentUnion](#inputdocumentunion) |  |  |
| `emoji` | string |  |  |
| `mask_coords` | [MaskCoordsUnion](#maskcoordsunion) |  | Optional |

TypeScript interface:

```typescript
interface InputStickerSetItem {
  _: 'inputStickerSetItem'
  flags: number
  document: InputDocumentUnion
  emoji: string
  mask_coords?: MaskCoordsUnion
}
```


## InputStickeredMediaUnion

Represents one of the following types:
- [`InputStickeredMediaDocument`](#inputstickeredmediadocument)
- [`InputStickeredMediaPhoto`](#inputstickeredmediaphoto)

### InputStickeredMediaDocument

**Predicate:** "inputStickeredMediaDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickeredMediaDocument" |
| `id` | [InputDocumentUnion](#inputdocumentunion) |  |  |

TypeScript interface:

```typescript
interface InputStickeredMediaDocument {
  _: 'inputStickeredMediaDocument'
  id: InputDocumentUnion
}
```

### InputStickeredMediaPhoto

**Predicate:** "inputStickeredMediaPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputStickeredMediaPhoto" |
| `id` | [InputPhotoUnion](#inputphotounion) |  |  |

TypeScript interface:

```typescript
interface InputStickeredMediaPhoto {
  _: 'inputStickeredMediaPhoto'
  id: InputPhotoUnion
}
```


## InputUserUnion

Represents one of the following types:
- [`InputUser`](#inputuser)
- [`InputUserEmpty`](#inputuserempty)
- [`InputUserSelf`](#inputuserself)

### InputUser

**Predicate:** "inputUser"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputUser" |
| `user_id` | number |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputUser {
  _: 'inputUser'
  user_id: number
  access_hash: number
}
```

### InputUserEmpty

**Predicate:** "inputUserEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputUserEmpty" |

TypeScript interface:

```typescript
interface InputUserEmpty {
  _: 'inputUserEmpty'
}
```

### InputUserSelf

**Predicate:** "inputUserSelf"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputUserSelf" |

TypeScript interface:

```typescript
interface InputUserSelf {
  _: 'inputUserSelf'
}
```


## InputWebDocumentUnion

It's an alias for the `InputWebDocument` type.

### InputWebDocument

**Predicate:** "inputWebDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputWebDocument" |
| `url` | string |  |  |
| `size` | number |  |  |
| `mime_type` | string |  |  |
| `attributes` | [DocumentAttributeUnion[]](#documentattributeunion) |  |  |

TypeScript interface:

```typescript
interface InputWebDocument {
  _: 'inputWebDocument'
  url: string
  size: number
  mime_type: string
  attributes: DocumentAttributeUnion[]
}
```


## InputWebFileLocationUnion

It's an alias for the `InputWebFileLocation` type.

### InputWebFileLocation

**Predicate:** "inputWebFileLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputWebFileLocation" |
| `url` | string |  |  |
| `access_hash` | number |  |  |

TypeScript interface:

```typescript
interface InputWebFileLocation {
  _: 'inputWebFileLocation'
  url: string
  access_hash: number
}
```


## InvoiceUnion

It's an alias for the `Invoice` type.

### Invoice

**Predicate:** "invoice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "invoice" |
| `flags` | number |  |  |
| `test` | true |  | Optional |
| `name_requested` | true | 2 | Optional |
| `phone_requested` | true | 4 | Optional |
| `email_requested` | true | 8 | Optional |
| `shipping_address_requested` | true | 16 | Optional |
| `flexible` | true | 32 | Optional |
| `currency` | string |  |  |
| `prices` | [LabeledPriceUnion[]](#labeledpriceunion) |  |  |

TypeScript interface:

```typescript
interface Invoice {
  _: 'invoice'
  flags: number
  test?: true
  name_requested?: true
  phone_requested?: true
  email_requested?: true
  shipping_address_requested?: true
  flexible?: true
  currency: string
  prices: LabeledPriceUnion[]
}
```


## KeyboardButtonUnion

Represents one of the following types:
- [`KeyboardButton`](#keyboardbutton)
- [`KeyboardButtonBuy`](#keyboardbuttonbuy)
- [`KeyboardButtonCallback`](#keyboardbuttoncallback)
- [`KeyboardButtonGame`](#keyboardbuttongame)
- [`KeyboardButtonRequestGeoLocation`](#keyboardbuttonrequestgeolocation)
- [`KeyboardButtonRequestPhone`](#keyboardbuttonrequestphone)
- [`KeyboardButtonSwitchInline`](#keyboardbuttonswitchinline)
- [`KeyboardButtonUrl`](#keyboardbuttonurl)

### KeyboardButton

**Predicate:** "keyboardButton"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButton" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButton {
  _: 'keyboardButton'
  text: string
}
```

### KeyboardButtonBuy

**Predicate:** "keyboardButtonBuy"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonBuy" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonBuy {
  _: 'keyboardButtonBuy'
  text: string
}
```

### KeyboardButtonCallback

**Predicate:** "keyboardButtonCallback"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonCallback" |
| `text` | string |  |  |
| `data` | number[] |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonCallback {
  _: 'keyboardButtonCallback'
  text: string
  data: number[]
}
```

### KeyboardButtonGame

**Predicate:** "keyboardButtonGame"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonGame" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonGame {
  _: 'keyboardButtonGame'
  text: string
}
```

### KeyboardButtonRequestGeoLocation

**Predicate:** "keyboardButtonRequestGeoLocation"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonRequestGeoLocation" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonRequestGeoLocation {
  _: 'keyboardButtonRequestGeoLocation'
  text: string
}
```

### KeyboardButtonRequestPhone

**Predicate:** "keyboardButtonRequestPhone"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonRequestPhone" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonRequestPhone {
  _: 'keyboardButtonRequestPhone'
  text: string
}
```

### KeyboardButtonSwitchInline

**Predicate:** "keyboardButtonSwitchInline"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonSwitchInline" |
| `flags` | number |  |  |
| `same_peer` | true |  | Optional |
| `text` | string |  |  |
| `query` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonSwitchInline {
  _: 'keyboardButtonSwitchInline'
  flags: number
  same_peer?: true
  text: string
  query: string
}
```

### KeyboardButtonUrl

**Predicate:** "keyboardButtonUrl"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonUrl" |
| `text` | string |  |  |
| `url` | string |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonUrl {
  _: 'keyboardButtonUrl'
  text: string
  url: string
}
```


## KeyboardButtonRowUnion

It's an alias for the `KeyboardButtonRow` type.

### KeyboardButtonRow

**Predicate:** "keyboardButtonRow"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "keyboardButtonRow" |
| `buttons` | [KeyboardButtonUnion[]](#keyboardbuttonunion) |  |  |

TypeScript interface:

```typescript
interface KeyboardButtonRow {
  _: 'keyboardButtonRow'
  buttons: KeyboardButtonUnion[]
}
```


## LabeledPriceUnion

It's an alias for the `LabeledPrice` type.

### LabeledPrice

**Predicate:** "labeledPrice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "labeledPrice" |
| `label` | string |  |  |
| `amount` | number |  |  |

TypeScript interface:

```typescript
interface LabeledPrice {
  _: 'labeledPrice'
  label: string
  amount: number
}
```


## LangPackDifferenceUnion

It's an alias for the `LangPackDifference` type.

### LangPackDifference

**Predicate:** "langPackDifference"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "langPackDifference" |
| `lang_code` | string |  |  |
| `from_version` | number |  |  |
| `version` | number |  |  |
| `strings` | [LangPackStringUnion[]](#langpackstringunion) |  |  |

TypeScript interface:

```typescript
interface LangPackDifference {
  _: 'langPackDifference'
  lang_code: string
  from_version: number
  version: number
  strings: LangPackStringUnion[]
}
```


## LangPackLanguageUnion

It's an alias for the `LangPackLanguage` type.

### LangPackLanguage

**Predicate:** "langPackLanguage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "langPackLanguage" |
| `name` | string |  |  |
| `native_name` | string |  |  |
| `lang_code` | string |  |  |

TypeScript interface:

```typescript
interface LangPackLanguage {
  _: 'langPackLanguage'
  name: string
  native_name: string
  lang_code: string
}
```


## LangPackStringUnion

Represents one of the following types:
- [`LangPackString`](#langpackstring)
- [`LangPackStringDeleted`](#langpackstringdeleted)
- [`LangPackStringPluralized`](#langpackstringpluralized)

### LangPackString

**Predicate:** "langPackString"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "langPackString" |
| `key` | string |  |  |
| `value` | string |  |  |

TypeScript interface:

```typescript
interface LangPackString {
  _: 'langPackString'
  key: string
  value: string
}
```

### LangPackStringDeleted

**Predicate:** "langPackStringDeleted"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "langPackStringDeleted" |
| `key` | string |  |  |

TypeScript interface:

```typescript
interface LangPackStringDeleted {
  _: 'langPackStringDeleted'
  key: string
}
```

### LangPackStringPluralized

**Predicate:** "langPackStringPluralized"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "langPackStringPluralized" |
| `flags` | number |  |  |
| `key` | string |  |  |
| `zero_value` | string |  | Optional |
| `one_value` | string | 2 | Optional |
| `two_value` | string | 4 | Optional |
| `few_value` | string | 8 | Optional |
| `many_value` | string | 16 | Optional |
| `other_value` | string |  |  |

TypeScript interface:

```typescript
interface LangPackStringPluralized {
  _: 'langPackStringPluralized'
  flags: number
  key: string
  zero_value?: string
  one_value?: string
  two_value?: string
  few_value?: string
  many_value?: string
  other_value: string
}
```


## MaskCoordsUnion

It's an alias for the `MaskCoords` type.

### MaskCoords

**Predicate:** "maskCoords"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "maskCoords" |
| `n` | number |  |  |
| `x` | number |  |  |
| `y` | number |  |  |
| `zoom` | number |  |  |

TypeScript interface:

```typescript
interface MaskCoords {
  _: 'maskCoords'
  n: number
  x: number
  y: number
  zoom: number
}
```


## MessageUnion

Represents one of the following types:
- [`Message`](#message)
- [`MessageEmpty`](#messageempty)
- [`MessageService`](#messageservice)

### Message

**Predicate:** "message"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "message" |
| `flags` | number |  |  |
| `out` | true | 2 | Optional |
| `mentioned` | true | 16 | Optional |
| `media_unread` | true | 32 | Optional |
| `silent` | true | 8192 | Optional |
| `post` | true | 16384 | Optional |
| `id` | number |  |  |
| `from_id` | number | 256 | Optional |
| `to_id` | [PeerUnion](#peerunion) |  |  |
| `fwd_from` | [MessageFwdHeaderUnion](#messagefwdheaderunion) | 4 | Optional |
| `via_bot_id` | number | 2048 | Optional |
| `reply_to_msg_id` | number | 8 | Optional |
| `date` | number |  |  |
| `message` | string |  |  |
| `media` | [MessageMediaUnion](#messagemediaunion) | 512 | Optional |
| `reply_markup` | [ReplyMarkupUnion](#replymarkupunion) | 64 | Optional |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 128 | Optional |
| `views` | number | 1024 | Optional |
| `edit_date` | number | 32768 | Optional |
| `post_author` | string | 65536 | Optional |

TypeScript interface:

```typescript
interface Message {
  _: 'message'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  post?: true
  id: number
  from_id?: number
  to_id: PeerUnion
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  date: number
  message: string
  media?: MessageMediaUnion
  reply_markup?: ReplyMarkupUnion
  entities?: MessageEntityUnion[]
  views?: number
  edit_date?: number
  post_author?: string
}
```

### MessageEmpty

**Predicate:** "messageEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface MessageEmpty {
  _: 'messageEmpty'
  id: number
}
```

### MessageService

**Predicate:** "messageService"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageService" |
| `flags` | number |  |  |
| `out` | true | 2 | Optional |
| `mentioned` | true | 16 | Optional |
| `media_unread` | true | 32 | Optional |
| `silent` | true | 8192 | Optional |
| `post` | true | 16384 | Optional |
| `id` | number |  |  |
| `from_id` | number | 256 | Optional |
| `to_id` | [PeerUnion](#peerunion) |  |  |
| `reply_to_msg_id` | number | 8 | Optional |
| `date` | number |  |  |
| `action` | [MessageActionUnion](#messageactionunion) |  |  |

TypeScript interface:

```typescript
interface MessageService {
  _: 'messageService'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  post?: true
  id: number
  from_id?: number
  to_id: PeerUnion
  reply_to_msg_id?: number
  date: number
  action: MessageActionUnion
}
```


## MessageActionUnion

Represents one of the following types:
- [`MessageActionChannelCreate`](#messageactionchannelcreate)
- [`MessageActionChannelMigrateFrom`](#messageactionchannelmigratefrom)
- [`MessageActionChatAddUser`](#messageactionchatadduser)
- [`MessageActionChatCreate`](#messageactionchatcreate)
- [`MessageActionChatDeletePhoto`](#messageactionchatdeletephoto)
- [`MessageActionChatDeleteUser`](#messageactionchatdeleteuser)
- [`MessageActionChatEditPhoto`](#messageactionchateditphoto)
- [`MessageActionChatEditTitle`](#messageactionchatedittitle)
- [`MessageActionChatJoinedByLink`](#messageactionchatjoinedbylink)
- [`MessageActionChatMigrateTo`](#messageactionchatmigrateto)
- [`MessageActionEmpty`](#messageactionempty)
- [`MessageActionGameScore`](#messageactiongamescore)
- [`MessageActionHistoryClear`](#messageactionhistoryclear)
- [`MessageActionPaymentSent`](#messageactionpaymentsent)
- [`MessageActionPaymentSentMe`](#messageactionpaymentsentme)
- [`MessageActionPhoneCall`](#messageactionphonecall)
- [`MessageActionPinMessage`](#messageactionpinmessage)
- [`MessageActionScreenshotTaken`](#messageactionscreenshottaken)

### MessageActionChannelCreate

**Predicate:** "messageActionChannelCreate"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChannelCreate" |
| `title` | string |  |  |

TypeScript interface:

```typescript
interface MessageActionChannelCreate {
  _: 'messageActionChannelCreate'
  title: string
}
```

### MessageActionChannelMigrateFrom

**Predicate:** "messageActionChannelMigrateFrom"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChannelMigrateFrom" |
| `title` | string |  |  |
| `chat_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionChannelMigrateFrom {
  _: 'messageActionChannelMigrateFrom'
  title: string
  chat_id: number
}
```

### MessageActionChatAddUser

**Predicate:** "messageActionChatAddUser"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatAddUser" |
| `users` | number[] |  |  |

TypeScript interface:

```typescript
interface MessageActionChatAddUser {
  _: 'messageActionChatAddUser'
  users: number[]
}
```

### MessageActionChatCreate

**Predicate:** "messageActionChatCreate"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatCreate" |
| `title` | string |  |  |
| `users` | number[] |  |  |

TypeScript interface:

```typescript
interface MessageActionChatCreate {
  _: 'messageActionChatCreate'
  title: string
  users: number[]
}
```

### MessageActionChatDeletePhoto

**Predicate:** "messageActionChatDeletePhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatDeletePhoto" |

TypeScript interface:

```typescript
interface MessageActionChatDeletePhoto {
  _: 'messageActionChatDeletePhoto'
}
```

### MessageActionChatDeleteUser

**Predicate:** "messageActionChatDeleteUser"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatDeleteUser" |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionChatDeleteUser {
  _: 'messageActionChatDeleteUser'
  user_id: number
}
```

### MessageActionChatEditPhoto

**Predicate:** "messageActionChatEditPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatEditPhoto" |
| `photo` | [PhotoUnion](#photounion) |  |  |

TypeScript interface:

```typescript
interface MessageActionChatEditPhoto {
  _: 'messageActionChatEditPhoto'
  photo: PhotoUnion
}
```

### MessageActionChatEditTitle

**Predicate:** "messageActionChatEditTitle"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatEditTitle" |
| `title` | string |  |  |

TypeScript interface:

```typescript
interface MessageActionChatEditTitle {
  _: 'messageActionChatEditTitle'
  title: string
}
```

### MessageActionChatJoinedByLink

**Predicate:** "messageActionChatJoinedByLink"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatJoinedByLink" |
| `inviter_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionChatJoinedByLink {
  _: 'messageActionChatJoinedByLink'
  inviter_id: number
}
```

### MessageActionChatMigrateTo

**Predicate:** "messageActionChatMigrateTo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionChatMigrateTo" |
| `channel_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionChatMigrateTo {
  _: 'messageActionChatMigrateTo'
  channel_id: number
}
```

### MessageActionEmpty

**Predicate:** "messageActionEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionEmpty" |

TypeScript interface:

```typescript
interface MessageActionEmpty {
  _: 'messageActionEmpty'
}
```

### MessageActionGameScore

**Predicate:** "messageActionGameScore"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionGameScore" |
| `game_id` | number |  |  |
| `score` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionGameScore {
  _: 'messageActionGameScore'
  game_id: number
  score: number
}
```

### MessageActionHistoryClear

**Predicate:** "messageActionHistoryClear"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionHistoryClear" |

TypeScript interface:

```typescript
interface MessageActionHistoryClear {
  _: 'messageActionHistoryClear'
}
```

### MessageActionPaymentSent

**Predicate:** "messageActionPaymentSent"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionPaymentSent" |
| `currency` | string |  |  |
| `total_amount` | number |  |  |

TypeScript interface:

```typescript
interface MessageActionPaymentSent {
  _: 'messageActionPaymentSent'
  currency: string
  total_amount: number
}
```

### MessageActionPaymentSentMe

**Predicate:** "messageActionPaymentSentMe"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionPaymentSentMe" |
| `flags` | number |  |  |
| `currency` | string |  |  |
| `total_amount` | number |  |  |
| `payload` | number[] |  |  |
| `info` | [PaymentRequestedInfoUnion](#paymentrequestedinfounion) |  | Optional |
| `shipping_option_id` | string | 2 | Optional |
| `charge` | [PaymentChargeUnion](#paymentchargeunion) |  |  |

TypeScript interface:

```typescript
interface MessageActionPaymentSentMe {
  _: 'messageActionPaymentSentMe'
  flags: number
  currency: string
  total_amount: number
  payload: number[]
  info?: PaymentRequestedInfoUnion
  shipping_option_id?: string
  charge: PaymentChargeUnion
}
```

### MessageActionPhoneCall

**Predicate:** "messageActionPhoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionPhoneCall" |
| `flags` | number |  |  |
| `call_id` | number |  |  |
| `reason` | [PhoneCallDiscardReasonUnion](#phonecalldiscardreasonunion) |  | Optional |
| `duration` | number | 2 | Optional |

TypeScript interface:

```typescript
interface MessageActionPhoneCall {
  _: 'messageActionPhoneCall'
  flags: number
  call_id: number
  reason?: PhoneCallDiscardReasonUnion
  duration?: number
}
```

### MessageActionPinMessage

**Predicate:** "messageActionPinMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionPinMessage" |

TypeScript interface:

```typescript
interface MessageActionPinMessage {
  _: 'messageActionPinMessage'
}
```

### MessageActionScreenshotTaken

**Predicate:** "messageActionScreenshotTaken"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageActionScreenshotTaken" |

TypeScript interface:

```typescript
interface MessageActionScreenshotTaken {
  _: 'messageActionScreenshotTaken'
}
```


## MessageEntityUnion

Represents one of the following types:
- [`InputMessageEntityMentionName`](#inputmessageentitymentionname)
- [`MessageEntityBold`](#messageentitybold)
- [`MessageEntityBotCommand`](#messageentitybotcommand)
- [`MessageEntityCode`](#messageentitycode)
- [`MessageEntityEmail`](#messageentityemail)
- [`MessageEntityHashtag`](#messageentityhashtag)
- [`MessageEntityItalic`](#messageentityitalic)
- [`MessageEntityMention`](#messageentitymention)
- [`MessageEntityMentionName`](#messageentitymentionname)
- [`MessageEntityPre`](#messageentitypre)
- [`MessageEntityTextUrl`](#messageentitytexturl)
- [`MessageEntityUnknown`](#messageentityunknown)
- [`MessageEntityUrl`](#messageentityurl)

### InputMessageEntityMentionName

**Predicate:** "inputMessageEntityMentionName"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessageEntityMentionName" |
| `offset` | number |  |  |
| `length` | number |  |  |
| `user_id` | [InputUserUnion](#inputuserunion) |  |  |

TypeScript interface:

```typescript
interface InputMessageEntityMentionName {
  _: 'inputMessageEntityMentionName'
  offset: number
  length: number
  user_id: InputUserUnion
}
```

### MessageEntityBold

**Predicate:** "messageEntityBold"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityBold" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityBold {
  _: 'messageEntityBold'
  offset: number
  length: number
}
```

### MessageEntityBotCommand

**Predicate:** "messageEntityBotCommand"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityBotCommand" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityBotCommand {
  _: 'messageEntityBotCommand'
  offset: number
  length: number
}
```

### MessageEntityCode

**Predicate:** "messageEntityCode"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityCode" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityCode {
  _: 'messageEntityCode'
  offset: number
  length: number
}
```

### MessageEntityEmail

**Predicate:** "messageEntityEmail"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityEmail" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityEmail {
  _: 'messageEntityEmail'
  offset: number
  length: number
}
```

### MessageEntityHashtag

**Predicate:** "messageEntityHashtag"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityHashtag" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityHashtag {
  _: 'messageEntityHashtag'
  offset: number
  length: number
}
```

### MessageEntityItalic

**Predicate:** "messageEntityItalic"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityItalic" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityItalic {
  _: 'messageEntityItalic'
  offset: number
  length: number
}
```

### MessageEntityMention

**Predicate:** "messageEntityMention"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityMention" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityMention {
  _: 'messageEntityMention'
  offset: number
  length: number
}
```

### MessageEntityMentionName

**Predicate:** "messageEntityMentionName"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityMentionName" |
| `offset` | number |  |  |
| `length` | number |  |  |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityMentionName {
  _: 'messageEntityMentionName'
  offset: number
  length: number
  user_id: number
}
```

### MessageEntityPre

**Predicate:** "messageEntityPre"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityPre" |
| `offset` | number |  |  |
| `length` | number |  |  |
| `language` | string |  |  |

TypeScript interface:

```typescript
interface MessageEntityPre {
  _: 'messageEntityPre'
  offset: number
  length: number
  language: string
}
```

### MessageEntityTextUrl

**Predicate:** "messageEntityTextUrl"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityTextUrl" |
| `offset` | number |  |  |
| `length` | number |  |  |
| `url` | string |  |  |

TypeScript interface:

```typescript
interface MessageEntityTextUrl {
  _: 'messageEntityTextUrl'
  offset: number
  length: number
  url: string
}
```

### MessageEntityUnknown

**Predicate:** "messageEntityUnknown"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityUnknown" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityUnknown {
  _: 'messageEntityUnknown'
  offset: number
  length: number
}
```

### MessageEntityUrl

**Predicate:** "messageEntityUrl"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageEntityUrl" |
| `offset` | number |  |  |
| `length` | number |  |  |

TypeScript interface:

```typescript
interface MessageEntityUrl {
  _: 'messageEntityUrl'
  offset: number
  length: number
}
```


## MessageFwdHeaderUnion

It's an alias for the `MessageFwdHeader` type.

### MessageFwdHeader

**Predicate:** "messageFwdHeader"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageFwdHeader" |
| `flags` | number |  |  |
| `from_id` | number |  | Optional |
| `date` | number |  |  |
| `channel_id` | number | 2 | Optional |
| `channel_post` | number | 4 | Optional |
| `post_author` | string | 8 | Optional |

TypeScript interface:

```typescript
interface MessageFwdHeader {
  _: 'messageFwdHeader'
  flags: number
  from_id?: number
  date: number
  channel_id?: number
  channel_post?: number
  post_author?: string
}
```


## MessageMediaUnion

Represents one of the following types:
- [`MessageMediaContact`](#messagemediacontact)
- [`MessageMediaDocument`](#messagemediadocument)
- [`MessageMediaEmpty`](#messagemediaempty)
- [`MessageMediaGame`](#messagemediagame)
- [`MessageMediaGeo`](#messagemediageo)
- [`MessageMediaInvoice`](#messagemediainvoice)
- [`MessageMediaPhoto`](#messagemediaphoto)
- [`MessageMediaUnsupported`](#messagemediaunsupported)
- [`MessageMediaVenue`](#messagemediavenue)
- [`MessageMediaWebPage`](#messagemediawebpage)

### MessageMediaContact

**Predicate:** "messageMediaContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaContact" |
| `phone_number` | string |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageMediaContact {
  _: 'messageMediaContact'
  phone_number: string
  first_name: string
  last_name: string
  user_id: number
}
```

### MessageMediaDocument

**Predicate:** "messageMediaDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaDocument" |
| `flags` | number |  |  |
| `document` | [DocumentUnion](#documentunion) |  | Optional |
| `caption` | string | 2 | Optional |
| `ttl_seconds` | number | 4 | Optional |

TypeScript interface:

```typescript
interface MessageMediaDocument {
  _: 'messageMediaDocument'
  flags: number
  document?: DocumentUnion
  caption?: string
  ttl_seconds?: number
}
```

### MessageMediaEmpty

**Predicate:** "messageMediaEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaEmpty" |

TypeScript interface:

```typescript
interface MessageMediaEmpty {
  _: 'messageMediaEmpty'
}
```

### MessageMediaGame

**Predicate:** "messageMediaGame"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaGame" |
| `game` | [GameUnion](#gameunion) |  |  |

TypeScript interface:

```typescript
interface MessageMediaGame {
  _: 'messageMediaGame'
  game: GameUnion
}
```

### MessageMediaGeo

**Predicate:** "messageMediaGeo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaGeo" |
| `geo` | [GeoPointUnion](#geopointunion) |  |  |

TypeScript interface:

```typescript
interface MessageMediaGeo {
  _: 'messageMediaGeo'
  geo: GeoPointUnion
}
```

### MessageMediaInvoice

**Predicate:** "messageMediaInvoice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaInvoice" |
| `flags` | number |  |  |
| `shipping_address_requested` | true | 2 | Optional |
| `test` | true | 8 | Optional |
| `title` | string |  |  |
| `description` | string |  |  |
| `photo` | [WebDocumentUnion](#webdocumentunion) |  | Optional |
| `receipt_msg_id` | number | 4 | Optional |
| `currency` | string |  |  |
| `total_amount` | number |  |  |
| `start_param` | string |  |  |

TypeScript interface:

```typescript
interface MessageMediaInvoice {
  _: 'messageMediaInvoice'
  flags: number
  shipping_address_requested?: true
  test?: true
  title: string
  description: string
  photo?: WebDocumentUnion
  receipt_msg_id?: number
  currency: string
  total_amount: number
  start_param: string
}
```

### MessageMediaPhoto

**Predicate:** "messageMediaPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaPhoto" |
| `flags` | number |  |  |
| `photo` | [PhotoUnion](#photounion) |  | Optional |
| `caption` | string | 2 | Optional |
| `ttl_seconds` | number | 4 | Optional |

TypeScript interface:

```typescript
interface MessageMediaPhoto {
  _: 'messageMediaPhoto'
  flags: number
  photo?: PhotoUnion
  caption?: string
  ttl_seconds?: number
}
```

### MessageMediaUnsupported

**Predicate:** "messageMediaUnsupported"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaUnsupported" |

TypeScript interface:

```typescript
interface MessageMediaUnsupported {
  _: 'messageMediaUnsupported'
}
```

### MessageMediaVenue

**Predicate:** "messageMediaVenue"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaVenue" |
| `geo` | [GeoPointUnion](#geopointunion) |  |  |
| `title` | string |  |  |
| `address` | string |  |  |
| `provider` | string |  |  |
| `venue_id` | string |  |  |

TypeScript interface:

```typescript
interface MessageMediaVenue {
  _: 'messageMediaVenue'
  geo: GeoPointUnion
  title: string
  address: string
  provider: string
  venue_id: string
}
```

### MessageMediaWebPage

**Predicate:** "messageMediaWebPage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageMediaWebPage" |
| `webpage` | [WebPageUnion](#webpageunion) |  |  |

TypeScript interface:

```typescript
interface MessageMediaWebPage {
  _: 'messageMediaWebPage'
  webpage: WebPageUnion
}
```


## MessageRangeUnion

It's an alias for the `MessageRange` type.

### MessageRange

**Predicate:** "messageRange"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messageRange" |
| `min_id` | number |  |  |
| `max_id` | number |  |  |

TypeScript interface:

```typescript
interface MessageRange {
  _: 'messageRange'
  min_id: number
  max_id: number
}
```


## MessagesAffectedHistoryUnion

It's an alias for the `MessagesAffectedHistory` type.

### MessagesAffectedHistory

**Predicate:** "messages.affectedHistory"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.affectedHistory" |
| `pts` | number |  |  |
| `pts_count` | number |  |  |
| `offset` | number |  |  |

TypeScript interface:

```typescript
interface MessagesAffectedHistory {
  _: 'messages.affectedHistory'
  pts: number
  pts_count: number
  offset: number
}
```


## MessagesAffectedMessagesUnion

It's an alias for the `MessagesAffectedMessages` type.

### MessagesAffectedMessages

**Predicate:** "messages.affectedMessages"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.affectedMessages" |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface MessagesAffectedMessages {
  _: 'messages.affectedMessages'
  pts: number
  pts_count: number
}
```


## MessagesAllStickersUnion

Represents one of the following types:
- [`MessagesAllStickers`](#messagesallstickers)
- [`MessagesAllStickersNotModified`](#messagesallstickersnotmodified)

### MessagesAllStickers

**Predicate:** "messages.allStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.allStickers" |
| `hash` | number |  |  |
| `sets` | [StickerSetUnion[]](#stickersetunion) |  |  |

TypeScript interface:

```typescript
interface MessagesAllStickers {
  _: 'messages.allStickers'
  hash: number
  sets: StickerSetUnion[]
}
```

### MessagesAllStickersNotModified

**Predicate:** "messages.allStickersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.allStickersNotModified" |

TypeScript interface:

```typescript
interface MessagesAllStickersNotModified {
  _: 'messages.allStickersNotModified'
}
```


## MessagesArchivedStickersUnion

It's an alias for the `MessagesArchivedStickers` type.

### MessagesArchivedStickers

**Predicate:** "messages.archivedStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.archivedStickers" |
| `count` | number |  |  |
| `sets` | [StickerSetCoveredUnion[]](#stickersetcoveredunion) |  |  |

TypeScript interface:

```typescript
interface MessagesArchivedStickers {
  _: 'messages.archivedStickers'
  count: number
  sets: StickerSetCoveredUnion[]
}
```


## MessagesBotCallbackAnswerUnion

It's an alias for the `MessagesBotCallbackAnswer` type.

### MessagesBotCallbackAnswer

**Predicate:** "messages.botCallbackAnswer"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.botCallbackAnswer" |
| `flags` | number |  |  |
| `alert` | true | 2 | Optional |
| `has_url` | true | 8 | Optional |
| `message` | string |  | Optional |
| `url` | string | 4 | Optional |
| `cache_time` | number |  |  |

TypeScript interface:

```typescript
interface MessagesBotCallbackAnswer {
  _: 'messages.botCallbackAnswer'
  flags: number
  alert?: true
  has_url?: true
  message?: string
  url?: string
  cache_time: number
}
```


## MessagesBotResultsUnion

It's an alias for the `MessagesBotResults` type.

### MessagesBotResults

**Predicate:** "messages.botResults"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.botResults" |
| `flags` | number |  |  |
| `gallery` | true |  | Optional |
| `query_id` | number |  |  |
| `next_offset` | string | 2 | Optional |
| `switch_pm` | [InlineBotSwitchPmUnion](#inlinebotswitchpmunion) | 4 | Optional |
| `results` | [BotInlineResultUnion[]](#botinlineresultunion) |  |  |
| `cache_time` | number |  |  |

TypeScript interface:

```typescript
interface MessagesBotResults {
  _: 'messages.botResults'
  flags: number
  gallery?: true
  query_id: number
  next_offset?: string
  switch_pm?: InlineBotSwitchPmUnion
  results: BotInlineResultUnion[]
  cache_time: number
}
```


## MessagesChatFullUnion

It's an alias for the `MessagesChatFull` type.

### MessagesChatFull

**Predicate:** "messages.chatFull"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.chatFull" |
| `full_chat` | [ChatFullUnion](#chatfullunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesChatFull {
  _: 'messages.chatFull'
  full_chat: ChatFullUnion
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## MessagesChatsUnion

Represents one of the following types:
- [`MessagesChats`](#messageschats)
- [`MessagesChatsSlice`](#messageschatsslice)

### MessagesChats

**Predicate:** "messages.chats"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.chats" |
| `chats` | [ChatUnion[]](#chatunion) |  |  |

TypeScript interface:

```typescript
interface MessagesChats {
  _: 'messages.chats'
  chats: ChatUnion[]
}
```

### MessagesChatsSlice

**Predicate:** "messages.chatsSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.chatsSlice" |
| `count` | number |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |

TypeScript interface:

```typescript
interface MessagesChatsSlice {
  _: 'messages.chatsSlice'
  count: number
  chats: ChatUnion[]
}
```


## MessagesDhConfigUnion

Represents one of the following types:
- [`MessagesDhConfig`](#messagesdhconfig)
- [`MessagesDhConfigNotModified`](#messagesdhconfignotmodified)

### MessagesDhConfig

**Predicate:** "messages.dhConfig"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.dhConfig" |
| `g` | number |  |  |
| `p` | number[] |  |  |
| `version` | number |  |  |
| `random` | number[] |  |  |

TypeScript interface:

```typescript
interface MessagesDhConfig {
  _: 'messages.dhConfig'
  g: number
  p: number[]
  version: number
  random: number[]
}
```

### MessagesDhConfigNotModified

**Predicate:** "messages.dhConfigNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.dhConfigNotModified" |
| `random` | number[] |  |  |

TypeScript interface:

```typescript
interface MessagesDhConfigNotModified {
  _: 'messages.dhConfigNotModified'
  random: number[]
}
```


## MessagesDialogsUnion

Represents one of the following types:
- [`MessagesDialogs`](#messagesdialogs)
- [`MessagesDialogsSlice`](#messagesdialogsslice)

### MessagesDialogs

**Predicate:** "messages.dialogs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.dialogs" |
| `dialogs` | [DialogUnion[]](#dialogunion) |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesDialogs {
  _: 'messages.dialogs'
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```

### MessagesDialogsSlice

**Predicate:** "messages.dialogsSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.dialogsSlice" |
| `count` | number |  |  |
| `dialogs` | [DialogUnion[]](#dialogunion) |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesDialogsSlice {
  _: 'messages.dialogsSlice'
  count: number
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## MessagesFavedStickersUnion

Represents one of the following types:
- [`MessagesFavedStickers`](#messagesfavedstickers)
- [`MessagesFavedStickersNotModified`](#messagesfavedstickersnotmodified)

### MessagesFavedStickers

**Predicate:** "messages.favedStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.favedStickers" |
| `hash` | number |  |  |
| `packs` | [StickerPackUnion[]](#stickerpackunion) |  |  |
| `stickers` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface MessagesFavedStickers {
  _: 'messages.favedStickers'
  hash: number
  packs: StickerPackUnion[]
  stickers: DocumentUnion[]
}
```

### MessagesFavedStickersNotModified

**Predicate:** "messages.favedStickersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.favedStickersNotModified" |

TypeScript interface:

```typescript
interface MessagesFavedStickersNotModified {
  _: 'messages.favedStickersNotModified'
}
```


## MessagesFeaturedStickersUnion

Represents one of the following types:
- [`MessagesFeaturedStickers`](#messagesfeaturedstickers)
- [`MessagesFeaturedStickersNotModified`](#messagesfeaturedstickersnotmodified)

### MessagesFeaturedStickers

**Predicate:** "messages.featuredStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.featuredStickers" |
| `hash` | number |  |  |
| `sets` | [StickerSetCoveredUnion[]](#stickersetcoveredunion) |  |  |
| `unread` | number[] |  |  |

TypeScript interface:

```typescript
interface MessagesFeaturedStickers {
  _: 'messages.featuredStickers'
  hash: number
  sets: StickerSetCoveredUnion[]
  unread: number[]
}
```

### MessagesFeaturedStickersNotModified

**Predicate:** "messages.featuredStickersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.featuredStickersNotModified" |

TypeScript interface:

```typescript
interface MessagesFeaturedStickersNotModified {
  _: 'messages.featuredStickersNotModified'
}
```


## MessagesFilterUnion

Represents one of the following types:
- [`InputMessagesFilterChatPhotos`](#inputmessagesfilterchatphotos)
- [`InputMessagesFilterDocument`](#inputmessagesfilterdocument)
- [`InputMessagesFilterEmpty`](#inputmessagesfilterempty)
- [`InputMessagesFilterGif`](#inputmessagesfiltergif)
- [`InputMessagesFilterMusic`](#inputmessagesfiltermusic)
- [`InputMessagesFilterMyMentions`](#inputmessagesfiltermymentions)
- [`InputMessagesFilterMyMentionsUnread`](#inputmessagesfiltermymentionsunread)
- [`InputMessagesFilterPhoneCalls`](#inputmessagesfilterphonecalls)
- [`InputMessagesFilterPhotoVideo`](#inputmessagesfilterphotovideo)
- [`InputMessagesFilterPhotoVideoDocuments`](#inputmessagesfilterphotovideodocuments)
- [`InputMessagesFilterPhotos`](#inputmessagesfilterphotos)
- [`InputMessagesFilterRoundVideo`](#inputmessagesfilterroundvideo)
- [`InputMessagesFilterRoundVoice`](#inputmessagesfilterroundvoice)
- [`InputMessagesFilterUrl`](#inputmessagesfilterurl)
- [`InputMessagesFilterVideo`](#inputmessagesfiltervideo)
- [`InputMessagesFilterVoice`](#inputmessagesfiltervoice)

### InputMessagesFilterChatPhotos

**Predicate:** "inputMessagesFilterChatPhotos"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterChatPhotos" |

TypeScript interface:

```typescript
interface InputMessagesFilterChatPhotos {
  _: 'inputMessagesFilterChatPhotos'
}
```

### InputMessagesFilterDocument

**Predicate:** "inputMessagesFilterDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterDocument" |

TypeScript interface:

```typescript
interface InputMessagesFilterDocument {
  _: 'inputMessagesFilterDocument'
}
```

### InputMessagesFilterEmpty

**Predicate:** "inputMessagesFilterEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterEmpty" |

TypeScript interface:

```typescript
interface InputMessagesFilterEmpty {
  _: 'inputMessagesFilterEmpty'
}
```

### InputMessagesFilterGif

**Predicate:** "inputMessagesFilterGif"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterGif" |

TypeScript interface:

```typescript
interface InputMessagesFilterGif {
  _: 'inputMessagesFilterGif'
}
```

### InputMessagesFilterMusic

**Predicate:** "inputMessagesFilterMusic"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterMusic" |

TypeScript interface:

```typescript
interface InputMessagesFilterMusic {
  _: 'inputMessagesFilterMusic'
}
```

### InputMessagesFilterMyMentions

**Predicate:** "inputMessagesFilterMyMentions"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterMyMentions" |

TypeScript interface:

```typescript
interface InputMessagesFilterMyMentions {
  _: 'inputMessagesFilterMyMentions'
}
```

### InputMessagesFilterMyMentionsUnread

**Predicate:** "inputMessagesFilterMyMentionsUnread"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterMyMentionsUnread" |

TypeScript interface:

```typescript
interface InputMessagesFilterMyMentionsUnread {
  _: 'inputMessagesFilterMyMentionsUnread'
}
```

### InputMessagesFilterPhoneCalls

**Predicate:** "inputMessagesFilterPhoneCalls"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterPhoneCalls" |
| `flags` | number |  |  |
| `missed` | true |  | Optional |

TypeScript interface:

```typescript
interface InputMessagesFilterPhoneCalls {
  _: 'inputMessagesFilterPhoneCalls'
  flags: number
  missed?: true
}
```

### InputMessagesFilterPhotoVideo

**Predicate:** "inputMessagesFilterPhotoVideo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterPhotoVideo" |

TypeScript interface:

```typescript
interface InputMessagesFilterPhotoVideo {
  _: 'inputMessagesFilterPhotoVideo'
}
```

### InputMessagesFilterPhotoVideoDocuments

**Predicate:** "inputMessagesFilterPhotoVideoDocuments"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterPhotoVideoDocuments" |

TypeScript interface:

```typescript
interface InputMessagesFilterPhotoVideoDocuments {
  _: 'inputMessagesFilterPhotoVideoDocuments'
}
```

### InputMessagesFilterPhotos

**Predicate:** "inputMessagesFilterPhotos"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterPhotos" |

TypeScript interface:

```typescript
interface InputMessagesFilterPhotos {
  _: 'inputMessagesFilterPhotos'
}
```

### InputMessagesFilterRoundVideo

**Predicate:** "inputMessagesFilterRoundVideo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterRoundVideo" |

TypeScript interface:

```typescript
interface InputMessagesFilterRoundVideo {
  _: 'inputMessagesFilterRoundVideo'
}
```

### InputMessagesFilterRoundVoice

**Predicate:** "inputMessagesFilterRoundVoice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterRoundVoice" |

TypeScript interface:

```typescript
interface InputMessagesFilterRoundVoice {
  _: 'inputMessagesFilterRoundVoice'
}
```

### InputMessagesFilterUrl

**Predicate:** "inputMessagesFilterUrl"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterUrl" |

TypeScript interface:

```typescript
interface InputMessagesFilterUrl {
  _: 'inputMessagesFilterUrl'
}
```

### InputMessagesFilterVideo

**Predicate:** "inputMessagesFilterVideo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterVideo" |

TypeScript interface:

```typescript
interface InputMessagesFilterVideo {
  _: 'inputMessagesFilterVideo'
}
```

### InputMessagesFilterVoice

**Predicate:** "inputMessagesFilterVoice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputMessagesFilterVoice" |

TypeScript interface:

```typescript
interface InputMessagesFilterVoice {
  _: 'inputMessagesFilterVoice'
}
```


## MessagesFoundGifsUnion

It's an alias for the `MessagesFoundGifs` type.

### MessagesFoundGifs

**Predicate:** "messages.foundGifs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.foundGifs" |
| `next_offset` | number |  |  |
| `results` | [FoundGifUnion[]](#foundgifunion) |  |  |

TypeScript interface:

```typescript
interface MessagesFoundGifs {
  _: 'messages.foundGifs'
  next_offset: number
  results: FoundGifUnion[]
}
```


## MessagesHighScoresUnion

It's an alias for the `MessagesHighScores` type.

### MessagesHighScores

**Predicate:** "messages.highScores"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.highScores" |
| `scores` | [HighScoreUnion[]](#highscoreunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesHighScores {
  _: 'messages.highScores'
  scores: HighScoreUnion[]
  users: UserUnion[]
}
```


## MessagesMessageEditDataUnion

It's an alias for the `MessagesMessageEditData` type.

### MessagesMessageEditData

**Predicate:** "messages.messageEditData"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.messageEditData" |
| `flags` | number |  |  |
| `caption` | true |  | Optional |

TypeScript interface:

```typescript
interface MessagesMessageEditData {
  _: 'messages.messageEditData'
  flags: number
  caption?: true
}
```


## MessagesMessagesUnion

Represents one of the following types:
- [`MessagesChannelMessages`](#messageschannelmessages)
- [`MessagesMessages`](#messagesmessages)
- [`MessagesMessagesSlice`](#messagesmessagesslice)

### MessagesChannelMessages

**Predicate:** "messages.channelMessages"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.channelMessages" |
| `flags` | number |  |  |
| `pts` | number |  |  |
| `count` | number |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesChannelMessages {
  _: 'messages.channelMessages'
  flags: number
  pts: number
  count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```

### MessagesMessages

**Predicate:** "messages.messages"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.messages" |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesMessages {
  _: 'messages.messages'
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```

### MessagesMessagesSlice

**Predicate:** "messages.messagesSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.messagesSlice" |
| `count` | number |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface MessagesMessagesSlice {
  _: 'messages.messagesSlice'
  count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## MessagesPeerDialogsUnion

It's an alias for the `MessagesPeerDialogs` type.

### MessagesPeerDialogs

**Predicate:** "messages.peerDialogs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.peerDialogs" |
| `dialogs` | [DialogUnion[]](#dialogunion) |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |
| `state` | [UpdatesStateUnion](#updatesstateunion) |  |  |

TypeScript interface:

```typescript
interface MessagesPeerDialogs {
  _: 'messages.peerDialogs'
  dialogs: DialogUnion[]
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  state: UpdatesStateUnion
}
```


## MessagesRecentStickersUnion

Represents one of the following types:
- [`MessagesRecentStickers`](#messagesrecentstickers)
- [`MessagesRecentStickersNotModified`](#messagesrecentstickersnotmodified)

### MessagesRecentStickers

**Predicate:** "messages.recentStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.recentStickers" |
| `hash` | number |  |  |
| `stickers` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface MessagesRecentStickers {
  _: 'messages.recentStickers'
  hash: number
  stickers: DocumentUnion[]
}
```

### MessagesRecentStickersNotModified

**Predicate:** "messages.recentStickersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.recentStickersNotModified" |

TypeScript interface:

```typescript
interface MessagesRecentStickersNotModified {
  _: 'messages.recentStickersNotModified'
}
```


## MessagesSavedGifsUnion

Represents one of the following types:
- [`MessagesSavedGifs`](#messagessavedgifs)
- [`MessagesSavedGifsNotModified`](#messagessavedgifsnotmodified)

### MessagesSavedGifs

**Predicate:** "messages.savedGifs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.savedGifs" |
| `hash` | number |  |  |
| `gifs` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface MessagesSavedGifs {
  _: 'messages.savedGifs'
  hash: number
  gifs: DocumentUnion[]
}
```

### MessagesSavedGifsNotModified

**Predicate:** "messages.savedGifsNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.savedGifsNotModified" |

TypeScript interface:

```typescript
interface MessagesSavedGifsNotModified {
  _: 'messages.savedGifsNotModified'
}
```


## MessagesSentEncryptedMessageUnion

Represents one of the following types:
- [`MessagesSentEncryptedFile`](#messagessentencryptedfile)
- [`MessagesSentEncryptedMessage`](#messagessentencryptedmessage)

### MessagesSentEncryptedFile

**Predicate:** "messages.sentEncryptedFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.sentEncryptedFile" |
| `date` | number |  |  |
| `file` | [EncryptedFileUnion](#encryptedfileunion) |  |  |

TypeScript interface:

```typescript
interface MessagesSentEncryptedFile {
  _: 'messages.sentEncryptedFile'
  date: number
  file: EncryptedFileUnion
}
```

### MessagesSentEncryptedMessage

**Predicate:** "messages.sentEncryptedMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.sentEncryptedMessage" |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface MessagesSentEncryptedMessage {
  _: 'messages.sentEncryptedMessage'
  date: number
}
```


## MessagesStickerSetUnion

It's an alias for the `MessagesStickerSet` type.

### MessagesStickerSet

**Predicate:** "messages.stickerSet"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.stickerSet" |
| `set` | [StickerSetUnion](#stickersetunion) |  |  |
| `packs` | [StickerPackUnion[]](#stickerpackunion) |  |  |
| `documents` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface MessagesStickerSet {
  _: 'messages.stickerSet'
  set: StickerSetUnion
  packs: StickerPackUnion[]
  documents: DocumentUnion[]
}
```


## MessagesStickerSetInstallResultUnion

Represents one of the following types:
- [`MessagesStickerSetInstallResultArchive`](#messagesstickersetinstallresultarchive)
- [`MessagesStickerSetInstallResultSuccess`](#messagesstickersetinstallresultsuccess)

### MessagesStickerSetInstallResultArchive

**Predicate:** "messages.stickerSetInstallResultArchive"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.stickerSetInstallResultArchive" |
| `sets` | [StickerSetCoveredUnion[]](#stickersetcoveredunion) |  |  |

TypeScript interface:

```typescript
interface MessagesStickerSetInstallResultArchive {
  _: 'messages.stickerSetInstallResultArchive'
  sets: StickerSetCoveredUnion[]
}
```

### MessagesStickerSetInstallResultSuccess

**Predicate:** "messages.stickerSetInstallResultSuccess"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.stickerSetInstallResultSuccess" |

TypeScript interface:

```typescript
interface MessagesStickerSetInstallResultSuccess {
  _: 'messages.stickerSetInstallResultSuccess'
}
```


## MessagesStickersUnion

Represents one of the following types:
- [`MessagesStickers`](#messagesstickers)
- [`MessagesStickersNotModified`](#messagesstickersnotmodified)

### MessagesStickers

**Predicate:** "messages.stickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.stickers" |
| `hash` | string |  |  |
| `stickers` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface MessagesStickers {
  _: 'messages.stickers'
  hash: string
  stickers: DocumentUnion[]
}
```

### MessagesStickersNotModified

**Predicate:** "messages.stickersNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "messages.stickersNotModified" |

TypeScript interface:

```typescript
interface MessagesStickersNotModified {
  _: 'messages.stickersNotModified'
}
```


## NearestDcUnion

It's an alias for the `NearestDc` type.

### NearestDc

**Predicate:** "nearestDc"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "nearestDc" |
| `country` | string |  |  |
| `this_dc` | number |  |  |
| `nearest_dc` | number |  |  |

TypeScript interface:

```typescript
interface NearestDc {
  _: 'nearestDc'
  country: string
  this_dc: number
  nearest_dc: number
}
```


## NotifyPeerUnion

Represents one of the following types:
- [`NotifyAll`](#notifyall)
- [`NotifyChats`](#notifychats)
- [`NotifyPeer`](#notifypeer)
- [`NotifyUsers`](#notifyusers)

### NotifyAll

**Predicate:** "notifyAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "notifyAll" |

TypeScript interface:

```typescript
interface NotifyAll {
  _: 'notifyAll'
}
```

### NotifyChats

**Predicate:** "notifyChats"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "notifyChats" |

TypeScript interface:

```typescript
interface NotifyChats {
  _: 'notifyChats'
}
```

### NotifyPeer

**Predicate:** "notifyPeer"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "notifyPeer" |
| `peer` | [PeerUnion](#peerunion) |  |  |

TypeScript interface:

```typescript
interface NotifyPeer {
  _: 'notifyPeer'
  peer: PeerUnion
}
```

### NotifyUsers

**Predicate:** "notifyUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "notifyUsers" |

TypeScript interface:

```typescript
interface NotifyUsers {
  _: 'notifyUsers'
}
```


## PageUnion

Represents one of the following types:
- [`PageFull`](#pagefull)
- [`PagePart`](#pagepart)

### PageFull

**Predicate:** "pageFull"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageFull" |
| `blocks` | [PageBlockUnion[]](#pageblockunion) |  |  |
| `photos` | [PhotoUnion[]](#photounion) |  |  |
| `documents` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface PageFull {
  _: 'pageFull'
  blocks: PageBlockUnion[]
  photos: PhotoUnion[]
  documents: DocumentUnion[]
}
```

### PagePart

**Predicate:** "pagePart"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pagePart" |
| `blocks` | [PageBlockUnion[]](#pageblockunion) |  |  |
| `photos` | [PhotoUnion[]](#photounion) |  |  |
| `documents` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface PagePart {
  _: 'pagePart'
  blocks: PageBlockUnion[]
  photos: PhotoUnion[]
  documents: DocumentUnion[]
}
```


## PageBlockUnion

Represents one of the following types:
- [`PageBlockAnchor`](#pageblockanchor)
- [`PageBlockAudio`](#pageblockaudio)
- [`PageBlockAuthorDate`](#pageblockauthordate)
- [`PageBlockBlockquote`](#pageblockblockquote)
- [`PageBlockChannel`](#pageblockchannel)
- [`PageBlockCollage`](#pageblockcollage)
- [`PageBlockCover`](#pageblockcover)
- [`PageBlockDivider`](#pageblockdivider)
- [`PageBlockEmbed`](#pageblockembed)
- [`PageBlockEmbedPost`](#pageblockembedpost)
- [`PageBlockFooter`](#pageblockfooter)
- [`PageBlockHeader`](#pageblockheader)
- [`PageBlockList`](#pageblocklist)
- [`PageBlockParagraph`](#pageblockparagraph)
- [`PageBlockPhoto`](#pageblockphoto)
- [`PageBlockPreformatted`](#pageblockpreformatted)
- [`PageBlockPullquote`](#pageblockpullquote)
- [`PageBlockSlideshow`](#pageblockslideshow)
- [`PageBlockSubheader`](#pageblocksubheader)
- [`PageBlockSubtitle`](#pageblocksubtitle)
- [`PageBlockTitle`](#pageblocktitle)
- [`PageBlockUnsupported`](#pageblockunsupported)
- [`PageBlockVideo`](#pageblockvideo)

### PageBlockAnchor

**Predicate:** "pageBlockAnchor"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockAnchor" |
| `name` | string |  |  |

TypeScript interface:

```typescript
interface PageBlockAnchor {
  _: 'pageBlockAnchor'
  name: string
}
```

### PageBlockAudio

**Predicate:** "pageBlockAudio"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockAudio" |
| `audio_id` | number |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockAudio {
  _: 'pageBlockAudio'
  audio_id: number
  caption: RichTextUnion
}
```

### PageBlockAuthorDate

**Predicate:** "pageBlockAuthorDate"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockAuthorDate" |
| `author` | [RichTextUnion](#richtextunion) |  |  |
| `published_date` | number |  |  |

TypeScript interface:

```typescript
interface PageBlockAuthorDate {
  _: 'pageBlockAuthorDate'
  author: RichTextUnion
  published_date: number
}
```

### PageBlockBlockquote

**Predicate:** "pageBlockBlockquote"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockBlockquote" |
| `text` | [RichTextUnion](#richtextunion) |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockBlockquote {
  _: 'pageBlockBlockquote'
  text: RichTextUnion
  caption: RichTextUnion
}
```

### PageBlockChannel

**Predicate:** "pageBlockChannel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockChannel" |
| `channel` | [ChatUnion](#chatunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockChannel {
  _: 'pageBlockChannel'
  channel: ChatUnion
}
```

### PageBlockCollage

**Predicate:** "pageBlockCollage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockCollage" |
| `items` | [PageBlockUnion[]](#pageblockunion) |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockCollage {
  _: 'pageBlockCollage'
  items: PageBlockUnion[]
  caption: RichTextUnion
}
```

### PageBlockCover

**Predicate:** "pageBlockCover"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockCover" |
| `cover` | [PageBlockUnion](#pageblockunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockCover {
  _: 'pageBlockCover'
  cover: PageBlockUnion
}
```

### PageBlockDivider

**Predicate:** "pageBlockDivider"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockDivider" |

TypeScript interface:

```typescript
interface PageBlockDivider {
  _: 'pageBlockDivider'
}
```

### PageBlockEmbed

**Predicate:** "pageBlockEmbed"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockEmbed" |
| `flags` | number |  |  |
| `full_width` | true |  | Optional |
| `allow_scrolling` | true | 8 | Optional |
| `url` | string | 2 | Optional |
| `html` | string | 4 | Optional |
| `poster_photo_id` | number | 16 | Optional |
| `w` | number |  |  |
| `h` | number |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockEmbed {
  _: 'pageBlockEmbed'
  flags: number
  full_width?: true
  allow_scrolling?: true
  url?: string
  html?: string
  poster_photo_id?: number
  w: number
  h: number
  caption: RichTextUnion
}
```

### PageBlockEmbedPost

**Predicate:** "pageBlockEmbedPost"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockEmbedPost" |
| `url` | string |  |  |
| `webpage_id` | number |  |  |
| `author_photo_id` | number |  |  |
| `author` | string |  |  |
| `date` | number |  |  |
| `blocks` | [PageBlockUnion[]](#pageblockunion) |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockEmbedPost {
  _: 'pageBlockEmbedPost'
  url: string
  webpage_id: number
  author_photo_id: number
  author: string
  date: number
  blocks: PageBlockUnion[]
  caption: RichTextUnion
}
```

### PageBlockFooter

**Predicate:** "pageBlockFooter"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockFooter" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockFooter {
  _: 'pageBlockFooter'
  text: RichTextUnion
}
```

### PageBlockHeader

**Predicate:** "pageBlockHeader"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockHeader" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockHeader {
  _: 'pageBlockHeader'
  text: RichTextUnion
}
```

### PageBlockList

**Predicate:** "pageBlockList"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockList" |
| `ordered` | boolean |  |  |
| `items` | [RichTextUnion[]](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockList {
  _: 'pageBlockList'
  ordered: boolean
  items: RichTextUnion[]
}
```

### PageBlockParagraph

**Predicate:** "pageBlockParagraph"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockParagraph" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockParagraph {
  _: 'pageBlockParagraph'
  text: RichTextUnion
}
```

### PageBlockPhoto

**Predicate:** "pageBlockPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockPhoto" |
| `photo_id` | number |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockPhoto {
  _: 'pageBlockPhoto'
  photo_id: number
  caption: RichTextUnion
}
```

### PageBlockPreformatted

**Predicate:** "pageBlockPreformatted"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockPreformatted" |
| `text` | [RichTextUnion](#richtextunion) |  |  |
| `language` | string |  |  |

TypeScript interface:

```typescript
interface PageBlockPreformatted {
  _: 'pageBlockPreformatted'
  text: RichTextUnion
  language: string
}
```

### PageBlockPullquote

**Predicate:** "pageBlockPullquote"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockPullquote" |
| `text` | [RichTextUnion](#richtextunion) |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockPullquote {
  _: 'pageBlockPullquote'
  text: RichTextUnion
  caption: RichTextUnion
}
```

### PageBlockSlideshow

**Predicate:** "pageBlockSlideshow"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockSlideshow" |
| `items` | [PageBlockUnion[]](#pageblockunion) |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockSlideshow {
  _: 'pageBlockSlideshow'
  items: PageBlockUnion[]
  caption: RichTextUnion
}
```

### PageBlockSubheader

**Predicate:** "pageBlockSubheader"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockSubheader" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockSubheader {
  _: 'pageBlockSubheader'
  text: RichTextUnion
}
```

### PageBlockSubtitle

**Predicate:** "pageBlockSubtitle"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockSubtitle" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockSubtitle {
  _: 'pageBlockSubtitle'
  text: RichTextUnion
}
```

### PageBlockTitle

**Predicate:** "pageBlockTitle"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockTitle" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockTitle {
  _: 'pageBlockTitle'
  text: RichTextUnion
}
```

### PageBlockUnsupported

**Predicate:** "pageBlockUnsupported"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockUnsupported" |

TypeScript interface:

```typescript
interface PageBlockUnsupported {
  _: 'pageBlockUnsupported'
}
```

### PageBlockVideo

**Predicate:** "pageBlockVideo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "pageBlockVideo" |
| `flags` | number |  |  |
| `autoplay` | true |  | Optional |
| `loop` | true | 2 | Optional |
| `video_id` | number |  |  |
| `caption` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface PageBlockVideo {
  _: 'pageBlockVideo'
  flags: number
  autoplay?: true
  loop?: true
  video_id: number
  caption: RichTextUnion
}
```


## PaymentChargeUnion

It's an alias for the `PaymentCharge` type.

### PaymentCharge

**Predicate:** "paymentCharge"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "paymentCharge" |
| `id` | string |  |  |
| `provider_charge_id` | string |  |  |

TypeScript interface:

```typescript
interface PaymentCharge {
  _: 'paymentCharge'
  id: string
  provider_charge_id: string
}
```


## PaymentRequestedInfoUnion

It's an alias for the `PaymentRequestedInfo` type.

### PaymentRequestedInfo

**Predicate:** "paymentRequestedInfo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "paymentRequestedInfo" |
| `flags` | number |  |  |
| `name` | string |  | Optional |
| `phone` | string | 2 | Optional |
| `email` | string | 4 | Optional |
| `shipping_address` | [PostAddressUnion](#postaddressunion) | 8 | Optional |

TypeScript interface:

```typescript
interface PaymentRequestedInfo {
  _: 'paymentRequestedInfo'
  flags: number
  name?: string
  phone?: string
  email?: string
  shipping_address?: PostAddressUnion
}
```


## PaymentSavedCredentialsUnion

It's an alias for the `PaymentSavedCredentialsCard` type.

### PaymentSavedCredentialsCard

**Predicate:** "paymentSavedCredentialsCard"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "paymentSavedCredentialsCard" |
| `id` | string |  |  |
| `title` | string |  |  |

TypeScript interface:

```typescript
interface PaymentSavedCredentialsCard {
  _: 'paymentSavedCredentialsCard'
  id: string
  title: string
}
```


## PaymentsPaymentFormUnion

It's an alias for the `PaymentsPaymentForm` type.

### PaymentsPaymentForm

**Predicate:** "payments.paymentForm"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.paymentForm" |
| `flags` | number |  |  |
| `can_save_credentials` | true | 4 | Optional |
| `password_missing` | true | 8 | Optional |
| `bot_id` | number |  |  |
| `invoice` | [InvoiceUnion](#invoiceunion) |  |  |
| `provider_id` | number |  |  |
| `url` | string |  |  |
| `native_provider` | string | 16 | Optional |
| `native_params` | [DataJsonUnion](#datajsonunion) | 16 | Optional |
| `saved_info` | [PaymentRequestedInfoUnion](#paymentrequestedinfounion) |  | Optional |
| `saved_credentials` | [PaymentSavedCredentialsUnion](#paymentsavedcredentialsunion) | 2 | Optional |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PaymentsPaymentForm {
  _: 'payments.paymentForm'
  flags: number
  can_save_credentials?: true
  password_missing?: true
  bot_id: number
  invoice: InvoiceUnion
  provider_id: number
  url: string
  native_provider?: string
  native_params?: DataJsonUnion
  saved_info?: PaymentRequestedInfoUnion
  saved_credentials?: PaymentSavedCredentialsUnion
  users: UserUnion[]
}
```


## PaymentsPaymentReceiptUnion

It's an alias for the `PaymentsPaymentReceipt` type.

### PaymentsPaymentReceipt

**Predicate:** "payments.paymentReceipt"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.paymentReceipt" |
| `flags` | number |  |  |
| `date` | number |  |  |
| `bot_id` | number |  |  |
| `invoice` | [InvoiceUnion](#invoiceunion) |  |  |
| `provider_id` | number |  |  |
| `info` | [PaymentRequestedInfoUnion](#paymentrequestedinfounion) |  | Optional |
| `shipping` | [ShippingOptionUnion](#shippingoptionunion) | 2 | Optional |
| `currency` | string |  |  |
| `total_amount` | number |  |  |
| `credentials_title` | string |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PaymentsPaymentReceipt {
  _: 'payments.paymentReceipt'
  flags: number
  date: number
  bot_id: number
  invoice: InvoiceUnion
  provider_id: number
  info?: PaymentRequestedInfoUnion
  shipping?: ShippingOptionUnion
  currency: string
  total_amount: number
  credentials_title: string
  users: UserUnion[]
}
```


## PaymentsPaymentResultUnion

Represents one of the following types:
- [`PaymentsPaymentResult`](#paymentspaymentresult)
- [`PaymentsPaymentVerficationNeeded`](#paymentspaymentverficationneeded)

### PaymentsPaymentResult

**Predicate:** "payments.paymentResult"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.paymentResult" |
| `updates` | [UpdatesUnion](#updatesunion) |  |  |

TypeScript interface:

```typescript
interface PaymentsPaymentResult {
  _: 'payments.paymentResult'
  updates: UpdatesUnion
}
```

### PaymentsPaymentVerficationNeeded

**Predicate:** "payments.paymentVerficationNeeded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.paymentVerficationNeeded" |
| `url` | string |  |  |

TypeScript interface:

```typescript
interface PaymentsPaymentVerficationNeeded {
  _: 'payments.paymentVerficationNeeded'
  url: string
}
```


## PaymentsSavedInfoUnion

It's an alias for the `PaymentsSavedInfo` type.

### PaymentsSavedInfo

**Predicate:** "payments.savedInfo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.savedInfo" |
| `flags` | number |  |  |
| `has_saved_credentials` | true | 2 | Optional |
| `saved_info` | [PaymentRequestedInfoUnion](#paymentrequestedinfounion) |  | Optional |

TypeScript interface:

```typescript
interface PaymentsSavedInfo {
  _: 'payments.savedInfo'
  flags: number
  has_saved_credentials?: true
  saved_info?: PaymentRequestedInfoUnion
}
```


## PaymentsValidatedRequestedInfoUnion

It's an alias for the `PaymentsValidatedRequestedInfo` type.

### PaymentsValidatedRequestedInfo

**Predicate:** "payments.validatedRequestedInfo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "payments.validatedRequestedInfo" |
| `flags` | number |  |  |
| `id` | string |  | Optional |
| `shipping_options` | [ShippingOptionUnion[]](#shippingoptionunion) | 2 | Optional |

TypeScript interface:

```typescript
interface PaymentsValidatedRequestedInfo {
  _: 'payments.validatedRequestedInfo'
  flags: number
  id?: string
  shipping_options?: ShippingOptionUnion[]
}
```


## PeerUnion

Represents one of the following types:
- [`PeerChannel`](#peerchannel)
- [`PeerChat`](#peerchat)
- [`PeerUser`](#peeruser)

### PeerChannel

**Predicate:** "peerChannel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerChannel" |
| `channel_id` | number |  |  |

TypeScript interface:

```typescript
interface PeerChannel {
  _: 'peerChannel'
  channel_id: number
}
```

### PeerChat

**Predicate:** "peerChat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerChat" |
| `chat_id` | number |  |  |

TypeScript interface:

```typescript
interface PeerChat {
  _: 'peerChat'
  chat_id: number
}
```

### PeerUser

**Predicate:** "peerUser"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerUser" |
| `user_id` | number |  |  |

TypeScript interface:

```typescript
interface PeerUser {
  _: 'peerUser'
  user_id: number
}
```


## PeerNotifyEventsUnion

Represents one of the following types:
- [`PeerNotifyEventsAll`](#peernotifyeventsall)
- [`PeerNotifyEventsEmpty`](#peernotifyeventsempty)

### PeerNotifyEventsAll

**Predicate:** "peerNotifyEventsAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerNotifyEventsAll" |

TypeScript interface:

```typescript
interface PeerNotifyEventsAll {
  _: 'peerNotifyEventsAll'
}
```

### PeerNotifyEventsEmpty

**Predicate:** "peerNotifyEventsEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerNotifyEventsEmpty" |

TypeScript interface:

```typescript
interface PeerNotifyEventsEmpty {
  _: 'peerNotifyEventsEmpty'
}
```


## PeerNotifySettingsUnion

Represents one of the following types:
- [`PeerNotifySettings`](#peernotifysettings)
- [`PeerNotifySettingsEmpty`](#peernotifysettingsempty)

### PeerNotifySettings

**Predicate:** "peerNotifySettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerNotifySettings" |
| `flags` | number |  |  |
| `show_previews` | true |  | Optional |
| `silent` | true | 2 | Optional |
| `mute_until` | number |  |  |
| `sound` | string |  |  |

TypeScript interface:

```typescript
interface PeerNotifySettings {
  _: 'peerNotifySettings'
  flags: number
  show_previews?: true
  silent?: true
  mute_until: number
  sound: string
}
```

### PeerNotifySettingsEmpty

**Predicate:** "peerNotifySettingsEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerNotifySettingsEmpty" |

TypeScript interface:

```typescript
interface PeerNotifySettingsEmpty {
  _: 'peerNotifySettingsEmpty'
}
```


## PeerSettingsUnion

It's an alias for the `PeerSettings` type.

### PeerSettings

**Predicate:** "peerSettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "peerSettings" |
| `flags` | number |  |  |
| `report_spam` | true |  | Optional |

TypeScript interface:

```typescript
interface PeerSettings {
  _: 'peerSettings'
  flags: number
  report_spam?: true
}
```


## PhoneCallUnion

Represents one of the following types:
- [`PhoneCall`](#phonecall)
- [`PhoneCallAccepted`](#phonecallaccepted)
- [`PhoneCallDiscarded`](#phonecalldiscarded)
- [`PhoneCallEmpty`](#phonecallempty)
- [`PhoneCallRequested`](#phonecallrequested)
- [`PhoneCallWaiting`](#phonecallwaiting)

### PhoneCall

**Predicate:** "phoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCall" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `g_a_or_b` | number[] |  |  |
| `key_fingerprint` | number |  |  |
| `protocol` | [PhoneCallProtocolUnion](#phonecallprotocolunion) |  |  |
| `connection` | [PhoneConnectionUnion](#phoneconnectionunion) |  |  |
| `alternative_connections` | [PhoneConnectionUnion[]](#phoneconnectionunion) |  |  |
| `start_date` | number |  |  |

TypeScript interface:

```typescript
interface PhoneCall {
  _: 'phoneCall'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a_or_b: number[]
  key_fingerprint: number
  protocol: PhoneCallProtocolUnion
  connection: PhoneConnectionUnion
  alternative_connections: PhoneConnectionUnion[]
  start_date: number
}
```

### PhoneCallAccepted

**Predicate:** "phoneCallAccepted"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallAccepted" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `g_b` | number[] |  |  |
| `protocol` | [PhoneCallProtocolUnion](#phonecallprotocolunion) |  |  |

TypeScript interface:

```typescript
interface PhoneCallAccepted {
  _: 'phoneCallAccepted'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_b: number[]
  protocol: PhoneCallProtocolUnion
}
```

### PhoneCallDiscarded

**Predicate:** "phoneCallDiscarded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallDiscarded" |
| `flags` | number |  |  |
| `need_rating` | true | 4 | Optional |
| `need_debug` | true | 8 | Optional |
| `id` | number |  |  |
| `reason` | [PhoneCallDiscardReasonUnion](#phonecalldiscardreasonunion) |  | Optional |
| `duration` | number | 2 | Optional |

TypeScript interface:

```typescript
interface PhoneCallDiscarded {
  _: 'phoneCallDiscarded'
  flags: number
  need_rating?: true
  need_debug?: true
  id: number
  reason?: PhoneCallDiscardReasonUnion
  duration?: number
}
```

### PhoneCallEmpty

**Predicate:** "phoneCallEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface PhoneCallEmpty {
  _: 'phoneCallEmpty'
  id: number
}
```

### PhoneCallRequested

**Predicate:** "phoneCallRequested"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallRequested" |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `g_a_hash` | number[] |  |  |
| `protocol` | [PhoneCallProtocolUnion](#phonecallprotocolunion) |  |  |

TypeScript interface:

```typescript
interface PhoneCallRequested {
  _: 'phoneCallRequested'
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  g_a_hash: number[]
  protocol: PhoneCallProtocolUnion
}
```

### PhoneCallWaiting

**Predicate:** "phoneCallWaiting"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallWaiting" |
| `flags` | number |  |  |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `admin_id` | number |  |  |
| `participant_id` | number |  |  |
| `protocol` | [PhoneCallProtocolUnion](#phonecallprotocolunion) |  |  |
| `receive_date` | number |  | Optional |

TypeScript interface:

```typescript
interface PhoneCallWaiting {
  _: 'phoneCallWaiting'
  flags: number
  id: number
  access_hash: number
  date: number
  admin_id: number
  participant_id: number
  protocol: PhoneCallProtocolUnion
  receive_date?: number
}
```


## PhoneCallDiscardReasonUnion

Represents one of the following types:
- [`PhoneCallDiscardReasonBusy`](#phonecalldiscardreasonbusy)
- [`PhoneCallDiscardReasonDisconnect`](#phonecalldiscardreasondisconnect)
- [`PhoneCallDiscardReasonHangup`](#phonecalldiscardreasonhangup)
- [`PhoneCallDiscardReasonMissed`](#phonecalldiscardreasonmissed)

### PhoneCallDiscardReasonBusy

**Predicate:** "phoneCallDiscardReasonBusy"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallDiscardReasonBusy" |

TypeScript interface:

```typescript
interface PhoneCallDiscardReasonBusy {
  _: 'phoneCallDiscardReasonBusy'
}
```

### PhoneCallDiscardReasonDisconnect

**Predicate:** "phoneCallDiscardReasonDisconnect"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallDiscardReasonDisconnect" |

TypeScript interface:

```typescript
interface PhoneCallDiscardReasonDisconnect {
  _: 'phoneCallDiscardReasonDisconnect'
}
```

### PhoneCallDiscardReasonHangup

**Predicate:** "phoneCallDiscardReasonHangup"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallDiscardReasonHangup" |

TypeScript interface:

```typescript
interface PhoneCallDiscardReasonHangup {
  _: 'phoneCallDiscardReasonHangup'
}
```

### PhoneCallDiscardReasonMissed

**Predicate:** "phoneCallDiscardReasonMissed"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallDiscardReasonMissed" |

TypeScript interface:

```typescript
interface PhoneCallDiscardReasonMissed {
  _: 'phoneCallDiscardReasonMissed'
}
```


## PhoneCallProtocolUnion

It's an alias for the `PhoneCallProtocol` type.

### PhoneCallProtocol

**Predicate:** "phoneCallProtocol"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneCallProtocol" |
| `flags` | number |  |  |
| `udp_p2p` | true |  | Optional |
| `udp_reflector` | true | 2 | Optional |
| `min_layer` | number |  |  |
| `max_layer` | number |  |  |

TypeScript interface:

```typescript
interface PhoneCallProtocol {
  _: 'phoneCallProtocol'
  flags: number
  udp_p2p?: true
  udp_reflector?: true
  min_layer: number
  max_layer: number
}
```


## PhoneConnectionUnion

It's an alias for the `PhoneConnection` type.

### PhoneConnection

**Predicate:** "phoneConnection"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phoneConnection" |
| `id` | number |  |  |
| `ip` | string |  |  |
| `ipv6` | string |  |  |
| `port` | number |  |  |
| `peer_tag` | number[] |  |  |

TypeScript interface:

```typescript
interface PhoneConnection {
  _: 'phoneConnection'
  id: number
  ip: string
  ipv6: string
  port: number
  peer_tag: number[]
}
```


## PhonePhoneCallUnion

It's an alias for the `PhonePhoneCall` type.

### PhonePhoneCall

**Predicate:** "phone.phoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "phone.phoneCall" |
| `phone_call` | [PhoneCallUnion](#phonecallunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PhonePhoneCall {
  _: 'phone.phoneCall'
  phone_call: PhoneCallUnion
  users: UserUnion[]
}
```


## PhotoUnion

Represents one of the following types:
- [`Photo`](#photo)
- [`PhotoEmpty`](#photoempty)

### Photo

**Predicate:** "photo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photo" |
| `flags` | number |  |  |
| `has_stickers` | true |  | Optional |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `date` | number |  |  |
| `sizes` | [PhotoSizeUnion[]](#photosizeunion) |  |  |

TypeScript interface:

```typescript
interface Photo {
  _: 'photo'
  flags: number
  has_stickers?: true
  id: number
  access_hash: number
  date: number
  sizes: PhotoSizeUnion[]
}
```

### PhotoEmpty

**Predicate:** "photoEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photoEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface PhotoEmpty {
  _: 'photoEmpty'
  id: number
}
```


## PhotoSizeUnion

Represents one of the following types:
- [`PhotoCachedSize`](#photocachedsize)
- [`PhotoSize`](#photosize)
- [`PhotoSizeEmpty`](#photosizeempty)

### PhotoCachedSize

**Predicate:** "photoCachedSize"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photoCachedSize" |
| `type` | string |  |  |
| `location` | [FileLocationUnion](#filelocationunion) |  |  |
| `w` | number |  |  |
| `h` | number |  |  |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface PhotoCachedSize {
  _: 'photoCachedSize'
  type: string
  location: FileLocationUnion
  w: number
  h: number
  bytes: number[]
}
```

### PhotoSize

**Predicate:** "photoSize"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photoSize" |
| `type` | string |  |  |
| `location` | [FileLocationUnion](#filelocationunion) |  |  |
| `w` | number |  |  |
| `h` | number |  |  |
| `size` | number |  |  |

TypeScript interface:

```typescript
interface PhotoSize {
  _: 'photoSize'
  type: string
  location: FileLocationUnion
  w: number
  h: number
  size: number
}
```

### PhotoSizeEmpty

**Predicate:** "photoSizeEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photoSizeEmpty" |
| `type` | string |  |  |

TypeScript interface:

```typescript
interface PhotoSizeEmpty {
  _: 'photoSizeEmpty'
  type: string
}
```


## PhotosPhotoUnion

It's an alias for the `PhotosPhoto` type.

### PhotosPhoto

**Predicate:** "photos.photo"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photos.photo" |
| `photo` | [PhotoUnion](#photounion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PhotosPhoto {
  _: 'photos.photo'
  photo: PhotoUnion
  users: UserUnion[]
}
```


## PhotosPhotosUnion

Represents one of the following types:
- [`PhotosPhotos`](#photosphotos)
- [`PhotosPhotosSlice`](#photosphotosslice)

### PhotosPhotos

**Predicate:** "photos.photos"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photos.photos" |
| `photos` | [PhotoUnion[]](#photounion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PhotosPhotos {
  _: 'photos.photos'
  photos: PhotoUnion[]
  users: UserUnion[]
}
```

### PhotosPhotosSlice

**Predicate:** "photos.photosSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "photos.photosSlice" |
| `count` | number |  |  |
| `photos` | [PhotoUnion[]](#photounion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface PhotosPhotosSlice {
  _: 'photos.photosSlice'
  count: number
  photos: PhotoUnion[]
  users: UserUnion[]
}
```


## PopularContactUnion

It's an alias for the `PopularContact` type.

### PopularContact

**Predicate:** "popularContact"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "popularContact" |
| `client_id` | number |  |  |
| `importers` | number |  |  |

TypeScript interface:

```typescript
interface PopularContact {
  _: 'popularContact'
  client_id: number
  importers: number
}
```


## PostAddressUnion

It's an alias for the `PostAddress` type.

### PostAddress

**Predicate:** "postAddress"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "postAddress" |
| `street_line1` | string |  |  |
| `street_line2` | string |  |  |
| `city` | string |  |  |
| `state` | string |  |  |
| `country_iso2` | string |  |  |
| `post_code` | string |  |  |

TypeScript interface:

```typescript
interface PostAddress {
  _: 'postAddress'
  street_line1: string
  street_line2: string
  city: string
  state: string
  country_iso2: string
  post_code: string
}
```


## PrivacyKeyUnion

Represents one of the following types:
- [`PrivacyKeyChatInvite`](#privacykeychatinvite)
- [`PrivacyKeyPhoneCall`](#privacykeyphonecall)
- [`PrivacyKeyStatusTimestamp`](#privacykeystatustimestamp)

### PrivacyKeyChatInvite

**Predicate:** "privacyKeyChatInvite"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyKeyChatInvite" |

TypeScript interface:

```typescript
interface PrivacyKeyChatInvite {
  _: 'privacyKeyChatInvite'
}
```

### PrivacyKeyPhoneCall

**Predicate:** "privacyKeyPhoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyKeyPhoneCall" |

TypeScript interface:

```typescript
interface PrivacyKeyPhoneCall {
  _: 'privacyKeyPhoneCall'
}
```

### PrivacyKeyStatusTimestamp

**Predicate:** "privacyKeyStatusTimestamp"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyKeyStatusTimestamp" |

TypeScript interface:

```typescript
interface PrivacyKeyStatusTimestamp {
  _: 'privacyKeyStatusTimestamp'
}
```


## PrivacyRuleUnion

Represents one of the following types:
- [`PrivacyValueAllowAll`](#privacyvalueallowall)
- [`PrivacyValueAllowContacts`](#privacyvalueallowcontacts)
- [`PrivacyValueAllowUsers`](#privacyvalueallowusers)
- [`PrivacyValueDisallowAll`](#privacyvaluedisallowall)
- [`PrivacyValueDisallowContacts`](#privacyvaluedisallowcontacts)
- [`PrivacyValueDisallowUsers`](#privacyvaluedisallowusers)

### PrivacyValueAllowAll

**Predicate:** "privacyValueAllowAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueAllowAll" |

TypeScript interface:

```typescript
interface PrivacyValueAllowAll {
  _: 'privacyValueAllowAll'
}
```

### PrivacyValueAllowContacts

**Predicate:** "privacyValueAllowContacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueAllowContacts" |

TypeScript interface:

```typescript
interface PrivacyValueAllowContacts {
  _: 'privacyValueAllowContacts'
}
```

### PrivacyValueAllowUsers

**Predicate:** "privacyValueAllowUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueAllowUsers" |
| `users` | number[] |  |  |

TypeScript interface:

```typescript
interface PrivacyValueAllowUsers {
  _: 'privacyValueAllowUsers'
  users: number[]
}
```

### PrivacyValueDisallowAll

**Predicate:** "privacyValueDisallowAll"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueDisallowAll" |

TypeScript interface:

```typescript
interface PrivacyValueDisallowAll {
  _: 'privacyValueDisallowAll'
}
```

### PrivacyValueDisallowContacts

**Predicate:** "privacyValueDisallowContacts"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueDisallowContacts" |

TypeScript interface:

```typescript
interface PrivacyValueDisallowContacts {
  _: 'privacyValueDisallowContacts'
}
```

### PrivacyValueDisallowUsers

**Predicate:** "privacyValueDisallowUsers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "privacyValueDisallowUsers" |
| `users` | number[] |  |  |

TypeScript interface:

```typescript
interface PrivacyValueDisallowUsers {
  _: 'privacyValueDisallowUsers'
  users: number[]
}
```


## ReceivedNotifyMessageUnion

It's an alias for the `ReceivedNotifyMessage` type.

### ReceivedNotifyMessage

**Predicate:** "receivedNotifyMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "receivedNotifyMessage" |
| `id` | number |  |  |
| `flags` | number |  |  |

TypeScript interface:

```typescript
interface ReceivedNotifyMessage {
  _: 'receivedNotifyMessage'
  id: number
  flags: number
}
```


## ReplyMarkupUnion

Represents one of the following types:
- [`ReplyInlineMarkup`](#replyinlinemarkup)
- [`ReplyKeyboardForceReply`](#replykeyboardforcereply)
- [`ReplyKeyboardHide`](#replykeyboardhide)
- [`ReplyKeyboardMarkup`](#replykeyboardmarkup)

### ReplyInlineMarkup

**Predicate:** "replyInlineMarkup"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "replyInlineMarkup" |
| `rows` | [KeyboardButtonRowUnion[]](#keyboardbuttonrowunion) |  |  |

TypeScript interface:

```typescript
interface ReplyInlineMarkup {
  _: 'replyInlineMarkup'
  rows: KeyboardButtonRowUnion[]
}
```

### ReplyKeyboardForceReply

**Predicate:** "replyKeyboardForceReply"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "replyKeyboardForceReply" |
| `flags` | number |  |  |
| `single_use` | true | 2 | Optional |
| `selective` | true | 4 | Optional |

TypeScript interface:

```typescript
interface ReplyKeyboardForceReply {
  _: 'replyKeyboardForceReply'
  flags: number
  single_use?: true
  selective?: true
}
```

### ReplyKeyboardHide

**Predicate:** "replyKeyboardHide"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "replyKeyboardHide" |
| `flags` | number |  |  |
| `selective` | true | 4 | Optional |

TypeScript interface:

```typescript
interface ReplyKeyboardHide {
  _: 'replyKeyboardHide'
  flags: number
  selective?: true
}
```

### ReplyKeyboardMarkup

**Predicate:** "replyKeyboardMarkup"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "replyKeyboardMarkup" |
| `flags` | number |  |  |
| `resize` | true |  | Optional |
| `single_use` | true | 2 | Optional |
| `selective` | true | 4 | Optional |
| `rows` | [KeyboardButtonRowUnion[]](#keyboardbuttonrowunion) |  |  |

TypeScript interface:

```typescript
interface ReplyKeyboardMarkup {
  _: 'replyKeyboardMarkup'
  flags: number
  resize?: true
  single_use?: true
  selective?: true
  rows: KeyboardButtonRowUnion[]
}
```


## ReportReasonUnion

Represents one of the following types:
- [`InputReportReasonOther`](#inputreportreasonother)
- [`InputReportReasonPornography`](#inputreportreasonpornography)
- [`InputReportReasonSpam`](#inputreportreasonspam)
- [`InputReportReasonViolence`](#inputreportreasonviolence)

### InputReportReasonOther

**Predicate:** "inputReportReasonOther"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputReportReasonOther" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface InputReportReasonOther {
  _: 'inputReportReasonOther'
  text: string
}
```

### InputReportReasonPornography

**Predicate:** "inputReportReasonPornography"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputReportReasonPornography" |

TypeScript interface:

```typescript
interface InputReportReasonPornography {
  _: 'inputReportReasonPornography'
}
```

### InputReportReasonSpam

**Predicate:** "inputReportReasonSpam"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputReportReasonSpam" |

TypeScript interface:

```typescript
interface InputReportReasonSpam {
  _: 'inputReportReasonSpam'
}
```

### InputReportReasonViolence

**Predicate:** "inputReportReasonViolence"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "inputReportReasonViolence" |

TypeScript interface:

```typescript
interface InputReportReasonViolence {
  _: 'inputReportReasonViolence'
}
```


## RichTextUnion

Represents one of the following types:
- [`TextBold`](#textbold)
- [`TextConcat`](#textconcat)
- [`TextEmail`](#textemail)
- [`TextEmpty`](#textempty)
- [`TextFixed`](#textfixed)
- [`TextItalic`](#textitalic)
- [`TextPlain`](#textplain)
- [`TextStrike`](#textstrike)
- [`TextUnderline`](#textunderline)
- [`TextUrl`](#texturl)

### TextBold

**Predicate:** "textBold"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textBold" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextBold {
  _: 'textBold'
  text: RichTextUnion
}
```

### TextConcat

**Predicate:** "textConcat"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textConcat" |
| `texts` | [RichTextUnion[]](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextConcat {
  _: 'textConcat'
  texts: RichTextUnion[]
}
```

### TextEmail

**Predicate:** "textEmail"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textEmail" |
| `text` | [RichTextUnion](#richtextunion) |  |  |
| `email` | string |  |  |

TypeScript interface:

```typescript
interface TextEmail {
  _: 'textEmail'
  text: RichTextUnion
  email: string
}
```

### TextEmpty

**Predicate:** "textEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textEmpty" |

TypeScript interface:

```typescript
interface TextEmpty {
  _: 'textEmpty'
}
```

### TextFixed

**Predicate:** "textFixed"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textFixed" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextFixed {
  _: 'textFixed'
  text: RichTextUnion
}
```

### TextItalic

**Predicate:** "textItalic"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textItalic" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextItalic {
  _: 'textItalic'
  text: RichTextUnion
}
```

### TextPlain

**Predicate:** "textPlain"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textPlain" |
| `text` | string |  |  |

TypeScript interface:

```typescript
interface TextPlain {
  _: 'textPlain'
  text: string
}
```

### TextStrike

**Predicate:** "textStrike"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textStrike" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextStrike {
  _: 'textStrike'
  text: RichTextUnion
}
```

### TextUnderline

**Predicate:** "textUnderline"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textUnderline" |
| `text` | [RichTextUnion](#richtextunion) |  |  |

TypeScript interface:

```typescript
interface TextUnderline {
  _: 'textUnderline'
  text: RichTextUnion
}
```

### TextUrl

**Predicate:** "textUrl"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "textUrl" |
| `text` | [RichTextUnion](#richtextunion) |  |  |
| `url` | string |  |  |
| `webpage_id` | number |  |  |

TypeScript interface:

```typescript
interface TextUrl {
  _: 'textUrl'
  text: RichTextUnion
  url: string
  webpage_id: number
}
```


## SendMessageActionUnion

Represents one of the following types:
- [`SendMessageCancelAction`](#sendmessagecancelaction)
- [`SendMessageChooseContactAction`](#sendmessagechoosecontactaction)
- [`SendMessageGamePlayAction`](#sendmessagegameplayaction)
- [`SendMessageGeoLocationAction`](#sendmessagegeolocationaction)
- [`SendMessageRecordAudioAction`](#sendmessagerecordaudioaction)
- [`SendMessageRecordRoundAction`](#sendmessagerecordroundaction)
- [`SendMessageRecordVideoAction`](#sendmessagerecordvideoaction)
- [`SendMessageTypingAction`](#sendmessagetypingaction)
- [`SendMessageUploadAudioAction`](#sendmessageuploadaudioaction)
- [`SendMessageUploadDocumentAction`](#sendmessageuploaddocumentaction)
- [`SendMessageUploadPhotoAction`](#sendmessageuploadphotoaction)
- [`SendMessageUploadRoundAction`](#sendmessageuploadroundaction)
- [`SendMessageUploadVideoAction`](#sendmessageuploadvideoaction)

### SendMessageCancelAction

**Predicate:** "sendMessageCancelAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageCancelAction" |

TypeScript interface:

```typescript
interface SendMessageCancelAction {
  _: 'sendMessageCancelAction'
}
```

### SendMessageChooseContactAction

**Predicate:** "sendMessageChooseContactAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageChooseContactAction" |

TypeScript interface:

```typescript
interface SendMessageChooseContactAction {
  _: 'sendMessageChooseContactAction'
}
```

### SendMessageGamePlayAction

**Predicate:** "sendMessageGamePlayAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageGamePlayAction" |

TypeScript interface:

```typescript
interface SendMessageGamePlayAction {
  _: 'sendMessageGamePlayAction'
}
```

### SendMessageGeoLocationAction

**Predicate:** "sendMessageGeoLocationAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageGeoLocationAction" |

TypeScript interface:

```typescript
interface SendMessageGeoLocationAction {
  _: 'sendMessageGeoLocationAction'
}
```

### SendMessageRecordAudioAction

**Predicate:** "sendMessageRecordAudioAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageRecordAudioAction" |

TypeScript interface:

```typescript
interface SendMessageRecordAudioAction {
  _: 'sendMessageRecordAudioAction'
}
```

### SendMessageRecordRoundAction

**Predicate:** "sendMessageRecordRoundAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageRecordRoundAction" |

TypeScript interface:

```typescript
interface SendMessageRecordRoundAction {
  _: 'sendMessageRecordRoundAction'
}
```

### SendMessageRecordVideoAction

**Predicate:** "sendMessageRecordVideoAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageRecordVideoAction" |

TypeScript interface:

```typescript
interface SendMessageRecordVideoAction {
  _: 'sendMessageRecordVideoAction'
}
```

### SendMessageTypingAction

**Predicate:** "sendMessageTypingAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageTypingAction" |

TypeScript interface:

```typescript
interface SendMessageTypingAction {
  _: 'sendMessageTypingAction'
}
```

### SendMessageUploadAudioAction

**Predicate:** "sendMessageUploadAudioAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageUploadAudioAction" |
| `progress` | number |  |  |

TypeScript interface:

```typescript
interface SendMessageUploadAudioAction {
  _: 'sendMessageUploadAudioAction'
  progress: number
}
```

### SendMessageUploadDocumentAction

**Predicate:** "sendMessageUploadDocumentAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageUploadDocumentAction" |
| `progress` | number |  |  |

TypeScript interface:

```typescript
interface SendMessageUploadDocumentAction {
  _: 'sendMessageUploadDocumentAction'
  progress: number
}
```

### SendMessageUploadPhotoAction

**Predicate:** "sendMessageUploadPhotoAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageUploadPhotoAction" |
| `progress` | number |  |  |

TypeScript interface:

```typescript
interface SendMessageUploadPhotoAction {
  _: 'sendMessageUploadPhotoAction'
  progress: number
}
```

### SendMessageUploadRoundAction

**Predicate:** "sendMessageUploadRoundAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageUploadRoundAction" |
| `progress` | number |  |  |

TypeScript interface:

```typescript
interface SendMessageUploadRoundAction {
  _: 'sendMessageUploadRoundAction'
  progress: number
}
```

### SendMessageUploadVideoAction

**Predicate:** "sendMessageUploadVideoAction"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "sendMessageUploadVideoAction" |
| `progress` | number |  |  |

TypeScript interface:

```typescript
interface SendMessageUploadVideoAction {
  _: 'sendMessageUploadVideoAction'
  progress: number
}
```


## ShippingOptionUnion

It's an alias for the `ShippingOption` type.

### ShippingOption

**Predicate:** "shippingOption"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "shippingOption" |
| `id` | string |  |  |
| `title` | string |  |  |
| `prices` | [LabeledPriceUnion[]](#labeledpriceunion) |  |  |

TypeScript interface:

```typescript
interface ShippingOption {
  _: 'shippingOption'
  id: string
  title: string
  prices: LabeledPriceUnion[]
}
```


## StickerPackUnion

It's an alias for the `StickerPack` type.

### StickerPack

**Predicate:** "stickerPack"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "stickerPack" |
| `emoticon` | string |  |  |
| `documents` | number[] |  |  |

TypeScript interface:

```typescript
interface StickerPack {
  _: 'stickerPack'
  emoticon: string
  documents: number[]
}
```


## StickerSetUnion

It's an alias for the `StickerSet` type.

### StickerSet

**Predicate:** "stickerSet"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "stickerSet" |
| `flags` | number |  |  |
| `installed` | true |  | Optional |
| `archived` | true | 2 | Optional |
| `official` | true | 4 | Optional |
| `masks` | true | 8 | Optional |
| `id` | number |  |  |
| `access_hash` | number |  |  |
| `title` | string |  |  |
| `short_name` | string |  |  |
| `count` | number |  |  |
| `hash` | number |  |  |

TypeScript interface:

```typescript
interface StickerSet {
  _: 'stickerSet'
  flags: number
  installed?: true
  archived?: true
  official?: true
  masks?: true
  id: number
  access_hash: number
  title: string
  short_name: string
  count: number
  hash: number
}
```


## StickerSetCoveredUnion

Represents one of the following types:
- [`StickerSetCovered`](#stickersetcovered)
- [`StickerSetMultiCovered`](#stickersetmulticovered)

### StickerSetCovered

**Predicate:** "stickerSetCovered"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "stickerSetCovered" |
| `set` | [StickerSetUnion](#stickersetunion) |  |  |
| `cover` | [DocumentUnion](#documentunion) |  |  |

TypeScript interface:

```typescript
interface StickerSetCovered {
  _: 'stickerSetCovered'
  set: StickerSetUnion
  cover: DocumentUnion
}
```

### StickerSetMultiCovered

**Predicate:** "stickerSetMultiCovered"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "stickerSetMultiCovered" |
| `set` | [StickerSetUnion](#stickersetunion) |  |  |
| `covers` | [DocumentUnion[]](#documentunion) |  |  |

TypeScript interface:

```typescript
interface StickerSetMultiCovered {
  _: 'stickerSetMultiCovered'
  set: StickerSetUnion
  covers: DocumentUnion[]
}
```


## StorageFileTypeUnion

Represents one of the following types:
- [`StorageFileGif`](#storagefilegif)
- [`StorageFileJpeg`](#storagefilejpeg)
- [`StorageFileMov`](#storagefilemov)
- [`StorageFileMp3`](#storagefilemp3)
- [`StorageFileMp4`](#storagefilemp4)
- [`StorageFilePartial`](#storagefilepartial)
- [`StorageFilePdf`](#storagefilepdf)
- [`StorageFilePng`](#storagefilepng)
- [`StorageFileUnknown`](#storagefileunknown)
- [`StorageFileWebp`](#storagefilewebp)

### StorageFileGif

**Predicate:** "storage.fileGif"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileGif" |

TypeScript interface:

```typescript
interface StorageFileGif {
  _: 'storage.fileGif'
}
```

### StorageFileJpeg

**Predicate:** "storage.fileJpeg"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileJpeg" |

TypeScript interface:

```typescript
interface StorageFileJpeg {
  _: 'storage.fileJpeg'
}
```

### StorageFileMov

**Predicate:** "storage.fileMov"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileMov" |

TypeScript interface:

```typescript
interface StorageFileMov {
  _: 'storage.fileMov'
}
```

### StorageFileMp3

**Predicate:** "storage.fileMp3"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileMp3" |

TypeScript interface:

```typescript
interface StorageFileMp3 {
  _: 'storage.fileMp3'
}
```

### StorageFileMp4

**Predicate:** "storage.fileMp4"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileMp4" |

TypeScript interface:

```typescript
interface StorageFileMp4 {
  _: 'storage.fileMp4'
}
```

### StorageFilePartial

**Predicate:** "storage.filePartial"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.filePartial" |

TypeScript interface:

```typescript
interface StorageFilePartial {
  _: 'storage.filePartial'
}
```

### StorageFilePdf

**Predicate:** "storage.filePdf"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.filePdf" |

TypeScript interface:

```typescript
interface StorageFilePdf {
  _: 'storage.filePdf'
}
```

### StorageFilePng

**Predicate:** "storage.filePng"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.filePng" |

TypeScript interface:

```typescript
interface StorageFilePng {
  _: 'storage.filePng'
}
```

### StorageFileUnknown

**Predicate:** "storage.fileUnknown"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileUnknown" |

TypeScript interface:

```typescript
interface StorageFileUnknown {
  _: 'storage.fileUnknown'
}
```

### StorageFileWebp

**Predicate:** "storage.fileWebp"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "storage.fileWebp" |

TypeScript interface:

```typescript
interface StorageFileWebp {
  _: 'storage.fileWebp'
}
```


## TopPeerUnion

It's an alias for the `TopPeer` type.

### TopPeer

**Predicate:** "topPeer"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeer" |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `rating` | number |  |  |

TypeScript interface:

```typescript
interface TopPeer {
  _: 'topPeer'
  peer: PeerUnion
  rating: number
}
```


## TopPeerCategoryUnion

Represents one of the following types:
- [`TopPeerCategoryBotsInline`](#toppeercategorybotsinline)
- [`TopPeerCategoryBotsPm`](#toppeercategorybotspm)
- [`TopPeerCategoryChannels`](#toppeercategorychannels)
- [`TopPeerCategoryCorrespondents`](#toppeercategorycorrespondents)
- [`TopPeerCategoryGroups`](#toppeercategorygroups)
- [`TopPeerCategoryPhoneCalls`](#toppeercategoryphonecalls)

### TopPeerCategoryBotsInline

**Predicate:** "topPeerCategoryBotsInline"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryBotsInline" |

TypeScript interface:

```typescript
interface TopPeerCategoryBotsInline {
  _: 'topPeerCategoryBotsInline'
}
```

### TopPeerCategoryBotsPm

**Predicate:** "topPeerCategoryBotsPM"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryBotsPM" |

TypeScript interface:

```typescript
interface TopPeerCategoryBotsPm {
  _: 'topPeerCategoryBotsPM'
}
```

### TopPeerCategoryChannels

**Predicate:** "topPeerCategoryChannels"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryChannels" |

TypeScript interface:

```typescript
interface TopPeerCategoryChannels {
  _: 'topPeerCategoryChannels'
}
```

### TopPeerCategoryCorrespondents

**Predicate:** "topPeerCategoryCorrespondents"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryCorrespondents" |

TypeScript interface:

```typescript
interface TopPeerCategoryCorrespondents {
  _: 'topPeerCategoryCorrespondents'
}
```

### TopPeerCategoryGroups

**Predicate:** "topPeerCategoryGroups"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryGroups" |

TypeScript interface:

```typescript
interface TopPeerCategoryGroups {
  _: 'topPeerCategoryGroups'
}
```

### TopPeerCategoryPhoneCalls

**Predicate:** "topPeerCategoryPhoneCalls"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryPhoneCalls" |

TypeScript interface:

```typescript
interface TopPeerCategoryPhoneCalls {
  _: 'topPeerCategoryPhoneCalls'
}
```


## TopPeerCategoryPeersUnion

It's an alias for the `TopPeerCategoryPeers` type.

### TopPeerCategoryPeers

**Predicate:** "topPeerCategoryPeers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "topPeerCategoryPeers" |
| `category` | [TopPeerCategoryUnion](#toppeercategoryunion) |  |  |
| `count` | number |  |  |
| `peers` | [TopPeerUnion[]](#toppeerunion) |  |  |

TypeScript interface:

```typescript
interface TopPeerCategoryPeers {
  _: 'topPeerCategoryPeers'
  category: TopPeerCategoryUnion
  count: number
  peers: TopPeerUnion[]
}
```


## TrueUnion

It's an alias for the `True` type.

### True

**Predicate:** "true"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "true" |

TypeScript interface:

```typescript
interface True {
  _: 'true'
}
```


## UpdateUnion

Represents one of the following types:
- [`UpdateBotCallbackQuery`](#updatebotcallbackquery)
- [`UpdateBotInlineQuery`](#updatebotinlinequery)
- [`UpdateBotInlineSend`](#updatebotinlinesend)
- [`UpdateBotPrecheckoutQuery`](#updatebotprecheckoutquery)
- [`UpdateBotShippingQuery`](#updatebotshippingquery)
- [`UpdateBotWebhookJson`](#updatebotwebhookjson)
- [`UpdateBotWebhookJsonQuery`](#updatebotwebhookjsonquery)
- [`UpdateChannel`](#updatechannel)
- [`UpdateChannelMessageViews`](#updatechannelmessageviews)
- [`UpdateChannelPinnedMessage`](#updatechannelpinnedmessage)
- [`UpdateChannelReadMessagesContents`](#updatechannelreadmessagescontents)
- [`UpdateChannelTooLong`](#updatechanneltoolong)
- [`UpdateChannelWebPage`](#updatechannelwebpage)
- [`UpdateChatAdmins`](#updatechatadmins)
- [`UpdateChatParticipantAdd`](#updatechatparticipantadd)
- [`UpdateChatParticipantAdmin`](#updatechatparticipantadmin)
- [`UpdateChatParticipantDelete`](#updatechatparticipantdelete)
- [`UpdateChatParticipants`](#updatechatparticipants)
- [`UpdateChatUserTyping`](#updatechatusertyping)
- [`UpdateConfig`](#updateconfig)
- [`UpdateContactLink`](#updatecontactlink)
- [`UpdateContactRegistered`](#updatecontactregistered)
- [`UpdateContactsReset`](#updatecontactsreset)
- [`UpdateDcOptions`](#updatedcoptions)
- [`UpdateDeleteChannelMessages`](#updatedeletechannelmessages)
- [`UpdateDeleteMessages`](#updatedeletemessages)
- [`UpdateDialogPinned`](#updatedialogpinned)
- [`UpdateDraftMessage`](#updatedraftmessage)
- [`UpdateEditChannelMessage`](#updateeditchannelmessage)
- [`UpdateEditMessage`](#updateeditmessage)
- [`UpdateEncryptedChatTyping`](#updateencryptedchattyping)
- [`UpdateEncryptedMessagesRead`](#updateencryptedmessagesread)
- [`UpdateEncryption`](#updateencryption)
- [`UpdateFavedStickers`](#updatefavedstickers)
- [`UpdateInlineBotCallbackQuery`](#updateinlinebotcallbackquery)
- [`UpdateLangPack`](#updatelangpack)
- [`UpdateLangPackTooLong`](#updatelangpacktoolong)
- [`UpdateMessageId`](#updatemessageid)
- [`UpdateNewChannelMessage`](#updatenewchannelmessage)
- [`UpdateNewEncryptedMessage`](#updatenewencryptedmessage)
- [`UpdateNewMessage`](#updatenewmessage)
- [`UpdateNewStickerSet`](#updatenewstickerset)
- [`UpdateNotifySettings`](#updatenotifysettings)
- [`UpdatePhoneCall`](#updatephonecall)
- [`UpdatePinnedDialogs`](#updatepinneddialogs)
- [`UpdatePrivacy`](#updateprivacy)
- [`UpdatePtsChanged`](#updateptschanged)
- [`UpdateReadChannelInbox`](#updatereadchannelinbox)
- [`UpdateReadChannelOutbox`](#updatereadchanneloutbox)
- [`UpdateReadFeaturedStickers`](#updatereadfeaturedstickers)
- [`UpdateReadHistoryInbox`](#updatereadhistoryinbox)
- [`UpdateReadHistoryOutbox`](#updatereadhistoryoutbox)
- [`UpdateReadMessagesContents`](#updatereadmessagescontents)
- [`UpdateRecentStickers`](#updaterecentstickers)
- [`UpdateSavedGifs`](#updatesavedgifs)
- [`UpdateServiceNotification`](#updateservicenotification)
- [`UpdateStickerSets`](#updatestickersets)
- [`UpdateStickerSetsOrder`](#updatestickersetsorder)
- [`UpdateUserBlocked`](#updateuserblocked)
- [`UpdateUserName`](#updateusername)
- [`UpdateUserPhone`](#updateuserphone)
- [`UpdateUserPhoto`](#updateuserphoto)
- [`UpdateUserStatus`](#updateuserstatus)
- [`UpdateUserTyping`](#updateusertyping)
- [`UpdateWebPage`](#updatewebpage)

### UpdateBotCallbackQuery

**Predicate:** "updateBotCallbackQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotCallbackQuery" |
| `flags` | number |  |  |
| `query_id` | number |  |  |
| `user_id` | number |  |  |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `msg_id` | number |  |  |
| `chat_instance` | number |  |  |
| `data` | number[] |  | Optional |
| `game_short_name` | string | 2 | Optional |

TypeScript interface:

```typescript
interface UpdateBotCallbackQuery {
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
```

### UpdateBotInlineQuery

**Predicate:** "updateBotInlineQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotInlineQuery" |
| `flags` | number |  |  |
| `query_id` | number |  |  |
| `user_id` | number |  |  |
| `query` | string |  |  |
| `geo` | [GeoPointUnion](#geopointunion) |  | Optional |
| `offset` | string |  |  |

TypeScript interface:

```typescript
interface UpdateBotInlineQuery {
  _: 'updateBotInlineQuery'
  flags: number
  query_id: number
  user_id: number
  query: string
  geo?: GeoPointUnion
  offset: string
}
```

### UpdateBotInlineSend

**Predicate:** "updateBotInlineSend"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotInlineSend" |
| `flags` | number |  |  |
| `user_id` | number |  |  |
| `query` | string |  |  |
| `geo` | [GeoPointUnion](#geopointunion) |  | Optional |
| `id` | string |  |  |
| `msg_id` | [InputBotInlineMessageIdUnion](#inputbotinlinemessageidunion) | 2 | Optional |

TypeScript interface:

```typescript
interface UpdateBotInlineSend {
  _: 'updateBotInlineSend'
  flags: number
  user_id: number
  query: string
  geo?: GeoPointUnion
  id: string
  msg_id?: InputBotInlineMessageIdUnion
}
```

### UpdateBotPrecheckoutQuery

**Predicate:** "updateBotPrecheckoutQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotPrecheckoutQuery" |
| `flags` | number |  |  |
| `query_id` | number |  |  |
| `user_id` | number |  |  |
| `payload` | number[] |  |  |
| `info` | [PaymentRequestedInfoUnion](#paymentrequestedinfounion) |  | Optional |
| `shipping_option_id` | string | 2 | Optional |
| `currency` | string |  |  |
| `total_amount` | number |  |  |

TypeScript interface:

```typescript
interface UpdateBotPrecheckoutQuery {
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
```

### UpdateBotShippingQuery

**Predicate:** "updateBotShippingQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotShippingQuery" |
| `query_id` | number |  |  |
| `user_id` | number |  |  |
| `payload` | number[] |  |  |
| `shipping_address` | [PostAddressUnion](#postaddressunion) |  |  |

TypeScript interface:

```typescript
interface UpdateBotShippingQuery {
  _: 'updateBotShippingQuery'
  query_id: number
  user_id: number
  payload: number[]
  shipping_address: PostAddressUnion
}
```

### UpdateBotWebhookJson

**Predicate:** "updateBotWebhookJSON"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotWebhookJSON" |
| `data` | [DataJsonUnion](#datajsonunion) |  |  |

TypeScript interface:

```typescript
interface UpdateBotWebhookJson {
  _: 'updateBotWebhookJSON'
  data: DataJsonUnion
}
```

### UpdateBotWebhookJsonQuery

**Predicate:** "updateBotWebhookJSONQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateBotWebhookJSONQuery" |
| `query_id` | number |  |  |
| `data` | [DataJsonUnion](#datajsonunion) |  |  |
| `timeout` | number |  |  |

TypeScript interface:

```typescript
interface UpdateBotWebhookJsonQuery {
  _: 'updateBotWebhookJSONQuery'
  query_id: number
  data: DataJsonUnion
  timeout: number
}
```

### UpdateChannel

**Predicate:** "updateChannel"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannel" |
| `channel_id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChannel {
  _: 'updateChannel'
  channel_id: number
}
```

### UpdateChannelMessageViews

**Predicate:** "updateChannelMessageViews"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannelMessageViews" |
| `channel_id` | number |  |  |
| `id` | number |  |  |
| `views` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChannelMessageViews {
  _: 'updateChannelMessageViews'
  channel_id: number
  id: number
  views: number
}
```

### UpdateChannelPinnedMessage

**Predicate:** "updateChannelPinnedMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannelPinnedMessage" |
| `channel_id` | number |  |  |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChannelPinnedMessage {
  _: 'updateChannelPinnedMessage'
  channel_id: number
  id: number
}
```

### UpdateChannelReadMessagesContents

**Predicate:** "updateChannelReadMessagesContents"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannelReadMessagesContents" |
| `channel_id` | number |  |  |
| `messages` | number[] |  |  |

TypeScript interface:

```typescript
interface UpdateChannelReadMessagesContents {
  _: 'updateChannelReadMessagesContents'
  channel_id: number
  messages: number[]
}
```

### UpdateChannelTooLong

**Predicate:** "updateChannelTooLong"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannelTooLong" |
| `flags` | number |  |  |
| `channel_id` | number |  |  |
| `pts` | number |  | Optional |

TypeScript interface:

```typescript
interface UpdateChannelTooLong {
  _: 'updateChannelTooLong'
  flags: number
  channel_id: number
  pts?: number
}
```

### UpdateChannelWebPage

**Predicate:** "updateChannelWebPage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChannelWebPage" |
| `channel_id` | number |  |  |
| `webpage` | [WebPageUnion](#webpageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChannelWebPage {
  _: 'updateChannelWebPage'
  channel_id: number
  webpage: WebPageUnion
  pts: number
  pts_count: number
}
```

### UpdateChatAdmins

**Predicate:** "updateChatAdmins"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatAdmins" |
| `chat_id` | number |  |  |
| `enabled` | boolean |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChatAdmins {
  _: 'updateChatAdmins'
  chat_id: number
  enabled: boolean
  version: number
}
```

### UpdateChatParticipantAdd

**Predicate:** "updateChatParticipantAdd"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatParticipantAdd" |
| `chat_id` | number |  |  |
| `user_id` | number |  |  |
| `inviter_id` | number |  |  |
| `date` | number |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChatParticipantAdd {
  _: 'updateChatParticipantAdd'
  chat_id: number
  user_id: number
  inviter_id: number
  date: number
  version: number
}
```

### UpdateChatParticipantAdmin

**Predicate:** "updateChatParticipantAdmin"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatParticipantAdmin" |
| `chat_id` | number |  |  |
| `user_id` | number |  |  |
| `is_admin` | boolean |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChatParticipantAdmin {
  _: 'updateChatParticipantAdmin'
  chat_id: number
  user_id: number
  is_admin: boolean
  version: number
}
```

### UpdateChatParticipantDelete

**Predicate:** "updateChatParticipantDelete"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatParticipantDelete" |
| `chat_id` | number |  |  |
| `user_id` | number |  |  |
| `version` | number |  |  |

TypeScript interface:

```typescript
interface UpdateChatParticipantDelete {
  _: 'updateChatParticipantDelete'
  chat_id: number
  user_id: number
  version: number
}
```

### UpdateChatParticipants

**Predicate:** "updateChatParticipants"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatParticipants" |
| `participants` | [ChatParticipantsUnion](#chatparticipantsunion) |  |  |

TypeScript interface:

```typescript
interface UpdateChatParticipants {
  _: 'updateChatParticipants'
  participants: ChatParticipantsUnion
}
```

### UpdateChatUserTyping

**Predicate:** "updateChatUserTyping"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateChatUserTyping" |
| `chat_id` | number |  |  |
| `user_id` | number |  |  |
| `action` | [SendMessageActionUnion](#sendmessageactionunion) |  |  |

TypeScript interface:

```typescript
interface UpdateChatUserTyping {
  _: 'updateChatUserTyping'
  chat_id: number
  user_id: number
  action: SendMessageActionUnion
}
```

### UpdateConfig

**Predicate:** "updateConfig"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateConfig" |

TypeScript interface:

```typescript
interface UpdateConfig {
  _: 'updateConfig'
}
```

### UpdateContactLink

**Predicate:** "updateContactLink"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateContactLink" |
| `user_id` | number |  |  |
| `my_link` | [ContactLinkUnion](#contactlinkunion) |  |  |
| `foreign_link` | [ContactLinkUnion](#contactlinkunion) |  |  |

TypeScript interface:

```typescript
interface UpdateContactLink {
  _: 'updateContactLink'
  user_id: number
  my_link: ContactLinkUnion
  foreign_link: ContactLinkUnion
}
```

### UpdateContactRegistered

**Predicate:** "updateContactRegistered"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateContactRegistered" |
| `user_id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface UpdateContactRegistered {
  _: 'updateContactRegistered'
  user_id: number
  date: number
}
```

### UpdateContactsReset

**Predicate:** "updateContactsReset"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateContactsReset" |

TypeScript interface:

```typescript
interface UpdateContactsReset {
  _: 'updateContactsReset'
}
```

### UpdateDcOptions

**Predicate:** "updateDcOptions"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateDcOptions" |
| `dc_options` | [DcOptionUnion[]](#dcoptionunion) |  |  |

TypeScript interface:

```typescript
interface UpdateDcOptions {
  _: 'updateDcOptions'
  dc_options: DcOptionUnion[]
}
```

### UpdateDeleteChannelMessages

**Predicate:** "updateDeleteChannelMessages"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateDeleteChannelMessages" |
| `channel_id` | number |  |  |
| `messages` | number[] |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateDeleteChannelMessages {
  _: 'updateDeleteChannelMessages'
  channel_id: number
  messages: number[]
  pts: number
  pts_count: number
}
```

### UpdateDeleteMessages

**Predicate:** "updateDeleteMessages"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateDeleteMessages" |
| `messages` | number[] |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateDeleteMessages {
  _: 'updateDeleteMessages'
  messages: number[]
  pts: number
  pts_count: number
}
```

### UpdateDialogPinned

**Predicate:** "updateDialogPinned"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateDialogPinned" |
| `flags` | number |  |  |
| `pinned` | true |  | Optional |
| `peer` | [PeerUnion](#peerunion) |  |  |

TypeScript interface:

```typescript
interface UpdateDialogPinned {
  _: 'updateDialogPinned'
  flags: number
  pinned?: true
  peer: PeerUnion
}
```

### UpdateDraftMessage

**Predicate:** "updateDraftMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateDraftMessage" |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `draft` | [DraftMessageUnion](#draftmessageunion) |  |  |

TypeScript interface:

```typescript
interface UpdateDraftMessage {
  _: 'updateDraftMessage'
  peer: PeerUnion
  draft: DraftMessageUnion
}
```

### UpdateEditChannelMessage

**Predicate:** "updateEditChannelMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateEditChannelMessage" |
| `message` | [MessageUnion](#messageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateEditChannelMessage {
  _: 'updateEditChannelMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}
```

### UpdateEditMessage

**Predicate:** "updateEditMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateEditMessage" |
| `message` | [MessageUnion](#messageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateEditMessage {
  _: 'updateEditMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}
```

### UpdateEncryptedChatTyping

**Predicate:** "updateEncryptedChatTyping"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateEncryptedChatTyping" |
| `chat_id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateEncryptedChatTyping {
  _: 'updateEncryptedChatTyping'
  chat_id: number
}
```

### UpdateEncryptedMessagesRead

**Predicate:** "updateEncryptedMessagesRead"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateEncryptedMessagesRead" |
| `chat_id` | number |  |  |
| `max_date` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface UpdateEncryptedMessagesRead {
  _: 'updateEncryptedMessagesRead'
  chat_id: number
  max_date: number
  date: number
}
```

### UpdateEncryption

**Predicate:** "updateEncryption"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateEncryption" |
| `chat` | [EncryptedChatUnion](#encryptedchatunion) |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface UpdateEncryption {
  _: 'updateEncryption'
  chat: EncryptedChatUnion
  date: number
}
```

### UpdateFavedStickers

**Predicate:** "updateFavedStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateFavedStickers" |

TypeScript interface:

```typescript
interface UpdateFavedStickers {
  _: 'updateFavedStickers'
}
```

### UpdateInlineBotCallbackQuery

**Predicate:** "updateInlineBotCallbackQuery"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateInlineBotCallbackQuery" |
| `flags` | number |  |  |
| `query_id` | number |  |  |
| `user_id` | number |  |  |
| `msg_id` | [InputBotInlineMessageIdUnion](#inputbotinlinemessageidunion) |  |  |
| `chat_instance` | number |  |  |
| `data` | number[] |  | Optional |
| `game_short_name` | string | 2 | Optional |

TypeScript interface:

```typescript
interface UpdateInlineBotCallbackQuery {
  _: 'updateInlineBotCallbackQuery'
  flags: number
  query_id: number
  user_id: number
  msg_id: InputBotInlineMessageIdUnion
  chat_instance: number
  data?: number[]
  game_short_name?: string
}
```

### UpdateLangPack

**Predicate:** "updateLangPack"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateLangPack" |
| `difference` | [LangPackDifferenceUnion](#langpackdifferenceunion) |  |  |

TypeScript interface:

```typescript
interface UpdateLangPack {
  _: 'updateLangPack'
  difference: LangPackDifferenceUnion
}
```

### UpdateLangPackTooLong

**Predicate:** "updateLangPackTooLong"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateLangPackTooLong" |

TypeScript interface:

```typescript
interface UpdateLangPackTooLong {
  _: 'updateLangPackTooLong'
}
```

### UpdateMessageId

**Predicate:** "updateMessageID"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateMessageID" |
| `id` | number |  |  |
| `random_id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateMessageId {
  _: 'updateMessageID'
  id: number
  random_id: number
}
```

### UpdateNewChannelMessage

**Predicate:** "updateNewChannelMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateNewChannelMessage" |
| `message` | [MessageUnion](#messageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateNewChannelMessage {
  _: 'updateNewChannelMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}
```

### UpdateNewEncryptedMessage

**Predicate:** "updateNewEncryptedMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateNewEncryptedMessage" |
| `message` | [EncryptedMessageUnion](#encryptedmessageunion) |  |  |
| `qts` | number |  |  |

TypeScript interface:

```typescript
interface UpdateNewEncryptedMessage {
  _: 'updateNewEncryptedMessage'
  message: EncryptedMessageUnion
  qts: number
}
```

### UpdateNewMessage

**Predicate:** "updateNewMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateNewMessage" |
| `message` | [MessageUnion](#messageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateNewMessage {
  _: 'updateNewMessage'
  message: MessageUnion
  pts: number
  pts_count: number
}
```

### UpdateNewStickerSet

**Predicate:** "updateNewStickerSet"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateNewStickerSet" |
| `stickerset` | [MessagesStickerSetUnion](#messagesstickersetunion) |  |  |

TypeScript interface:

```typescript
interface UpdateNewStickerSet {
  _: 'updateNewStickerSet'
  stickerset: MessagesStickerSetUnion
}
```

### UpdateNotifySettings

**Predicate:** "updateNotifySettings"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateNotifySettings" |
| `peer` | [NotifyPeerUnion](#notifypeerunion) |  |  |
| `notify_settings` | [PeerNotifySettingsUnion](#peernotifysettingsunion) |  |  |

TypeScript interface:

```typescript
interface UpdateNotifySettings {
  _: 'updateNotifySettings'
  peer: NotifyPeerUnion
  notify_settings: PeerNotifySettingsUnion
}
```

### UpdatePhoneCall

**Predicate:** "updatePhoneCall"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatePhoneCall" |
| `phone_call` | [PhoneCallUnion](#phonecallunion) |  |  |

TypeScript interface:

```typescript
interface UpdatePhoneCall {
  _: 'updatePhoneCall'
  phone_call: PhoneCallUnion
}
```

### UpdatePinnedDialogs

**Predicate:** "updatePinnedDialogs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatePinnedDialogs" |
| `flags` | number |  |  |
| `order` | [PeerUnion[]](#peerunion) |  | Optional |

TypeScript interface:

```typescript
interface UpdatePinnedDialogs {
  _: 'updatePinnedDialogs'
  flags: number
  order?: PeerUnion[]
}
```

### UpdatePrivacy

**Predicate:** "updatePrivacy"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatePrivacy" |
| `key` | [PrivacyKeyUnion](#privacykeyunion) |  |  |
| `rules` | [PrivacyRuleUnion[]](#privacyruleunion) |  |  |

TypeScript interface:

```typescript
interface UpdatePrivacy {
  _: 'updatePrivacy'
  key: PrivacyKeyUnion
  rules: PrivacyRuleUnion[]
}
```

### UpdatePtsChanged

**Predicate:** "updatePtsChanged"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatePtsChanged" |

TypeScript interface:

```typescript
interface UpdatePtsChanged {
  _: 'updatePtsChanged'
}
```

### UpdateReadChannelInbox

**Predicate:** "updateReadChannelInbox"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadChannelInbox" |
| `channel_id` | number |  |  |
| `max_id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateReadChannelInbox {
  _: 'updateReadChannelInbox'
  channel_id: number
  max_id: number
}
```

### UpdateReadChannelOutbox

**Predicate:** "updateReadChannelOutbox"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadChannelOutbox" |
| `channel_id` | number |  |  |
| `max_id` | number |  |  |

TypeScript interface:

```typescript
interface UpdateReadChannelOutbox {
  _: 'updateReadChannelOutbox'
  channel_id: number
  max_id: number
}
```

### UpdateReadFeaturedStickers

**Predicate:** "updateReadFeaturedStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadFeaturedStickers" |

TypeScript interface:

```typescript
interface UpdateReadFeaturedStickers {
  _: 'updateReadFeaturedStickers'
}
```

### UpdateReadHistoryInbox

**Predicate:** "updateReadHistoryInbox"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadHistoryInbox" |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `max_id` | number |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateReadHistoryInbox {
  _: 'updateReadHistoryInbox'
  peer: PeerUnion
  max_id: number
  pts: number
  pts_count: number
}
```

### UpdateReadHistoryOutbox

**Predicate:** "updateReadHistoryOutbox"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadHistoryOutbox" |
| `peer` | [PeerUnion](#peerunion) |  |  |
| `max_id` | number |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateReadHistoryOutbox {
  _: 'updateReadHistoryOutbox'
  peer: PeerUnion
  max_id: number
  pts: number
  pts_count: number
}
```

### UpdateReadMessagesContents

**Predicate:** "updateReadMessagesContents"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateReadMessagesContents" |
| `messages` | number[] |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateReadMessagesContents {
  _: 'updateReadMessagesContents'
  messages: number[]
  pts: number
  pts_count: number
}
```

### UpdateRecentStickers

**Predicate:** "updateRecentStickers"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateRecentStickers" |

TypeScript interface:

```typescript
interface UpdateRecentStickers {
  _: 'updateRecentStickers'
}
```

### UpdateSavedGifs

**Predicate:** "updateSavedGifs"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateSavedGifs" |

TypeScript interface:

```typescript
interface UpdateSavedGifs {
  _: 'updateSavedGifs'
}
```

### UpdateServiceNotification

**Predicate:** "updateServiceNotification"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateServiceNotification" |
| `flags` | number |  |  |
| `popup` | true |  | Optional |
| `inbox_date` | number | 2 | Optional |
| `type` | string |  |  |
| `message` | string |  |  |
| `media` | [MessageMediaUnion](#messagemediaunion) |  |  |
| `entities` | [MessageEntityUnion[]](#messageentityunion) |  |  |

TypeScript interface:

```typescript
interface UpdateServiceNotification {
  _: 'updateServiceNotification'
  flags: number
  popup?: true
  inbox_date?: number
  type: string
  message: string
  media: MessageMediaUnion
  entities: MessageEntityUnion[]
}
```

### UpdateStickerSets

**Predicate:** "updateStickerSets"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateStickerSets" |

TypeScript interface:

```typescript
interface UpdateStickerSets {
  _: 'updateStickerSets'
}
```

### UpdateStickerSetsOrder

**Predicate:** "updateStickerSetsOrder"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateStickerSetsOrder" |
| `flags` | number |  |  |
| `masks` | true |  | Optional |
| `order` | number[] |  |  |

TypeScript interface:

```typescript
interface UpdateStickerSetsOrder {
  _: 'updateStickerSetsOrder'
  flags: number
  masks?: true
  order: number[]
}
```

### UpdateUserBlocked

**Predicate:** "updateUserBlocked"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserBlocked" |
| `user_id` | number |  |  |
| `blocked` | boolean |  |  |

TypeScript interface:

```typescript
interface UpdateUserBlocked {
  _: 'updateUserBlocked'
  user_id: number
  blocked: boolean
}
```

### UpdateUserName

**Predicate:** "updateUserName"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserName" |
| `user_id` | number |  |  |
| `first_name` | string |  |  |
| `last_name` | string |  |  |
| `username` | string |  |  |

TypeScript interface:

```typescript
interface UpdateUserName {
  _: 'updateUserName'
  user_id: number
  first_name: string
  last_name: string
  username: string
}
```

### UpdateUserPhone

**Predicate:** "updateUserPhone"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserPhone" |
| `user_id` | number |  |  |
| `phone` | string |  |  |

TypeScript interface:

```typescript
interface UpdateUserPhone {
  _: 'updateUserPhone'
  user_id: number
  phone: string
}
```

### UpdateUserPhoto

**Predicate:** "updateUserPhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserPhoto" |
| `user_id` | number |  |  |
| `date` | number |  |  |
| `photo` | [UserProfilePhotoUnion](#userprofilephotounion) |  |  |
| `previous` | boolean |  |  |

TypeScript interface:

```typescript
interface UpdateUserPhoto {
  _: 'updateUserPhoto'
  user_id: number
  date: number
  photo: UserProfilePhotoUnion
  previous: boolean
}
```

### UpdateUserStatus

**Predicate:** "updateUserStatus"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserStatus" |
| `user_id` | number |  |  |
| `status` | [UserStatusUnion](#userstatusunion) |  |  |

TypeScript interface:

```typescript
interface UpdateUserStatus {
  _: 'updateUserStatus'
  user_id: number
  status: UserStatusUnion
}
```

### UpdateUserTyping

**Predicate:** "updateUserTyping"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateUserTyping" |
| `user_id` | number |  |  |
| `action` | [SendMessageActionUnion](#sendmessageactionunion) |  |  |

TypeScript interface:

```typescript
interface UpdateUserTyping {
  _: 'updateUserTyping'
  user_id: number
  action: SendMessageActionUnion
}
```

### UpdateWebPage

**Predicate:** "updateWebPage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateWebPage" |
| `webpage` | [WebPageUnion](#webpageunion) |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdateWebPage {
  _: 'updateWebPage'
  webpage: WebPageUnion
  pts: number
  pts_count: number
}
```


## UpdatesUnion

Represents one of the following types:
- [`UpdateShort`](#updateshort)
- [`UpdateShortChatMessage`](#updateshortchatmessage)
- [`UpdateShortMessage`](#updateshortmessage)
- [`UpdateShortSentMessage`](#updateshortsentmessage)
- [`Updates`](#updates)
- [`UpdatesCombined`](#updatescombined)
- [`UpdatesTooLong`](#updatestoolong)

### UpdateShort

**Predicate:** "updateShort"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateShort" |
| `update` | [UpdateUnion](#updateunion) |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface UpdateShort {
  _: 'updateShort'
  update: UpdateUnion
  date: number
}
```

### UpdateShortChatMessage

**Predicate:** "updateShortChatMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateShortChatMessage" |
| `flags` | number |  |  |
| `out` | true | 2 | Optional |
| `mentioned` | true | 16 | Optional |
| `media_unread` | true | 32 | Optional |
| `silent` | true | 8192 | Optional |
| `id` | number |  |  |
| `from_id` | number |  |  |
| `chat_id` | number |  |  |
| `message` | string |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |
| `date` | number |  |  |
| `fwd_from` | [MessageFwdHeaderUnion](#messagefwdheaderunion) | 4 | Optional |
| `via_bot_id` | number | 2048 | Optional |
| `reply_to_msg_id` | number | 8 | Optional |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 128 | Optional |

TypeScript interface:

```typescript
interface UpdateShortChatMessage {
  _: 'updateShortChatMessage'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  id: number
  from_id: number
  chat_id: number
  message: string
  pts: number
  pts_count: number
  date: number
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  entities?: MessageEntityUnion[]
}
```

### UpdateShortMessage

**Predicate:** "updateShortMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateShortMessage" |
| `flags` | number |  |  |
| `out` | true | 2 | Optional |
| `mentioned` | true | 16 | Optional |
| `media_unread` | true | 32 | Optional |
| `silent` | true | 8192 | Optional |
| `id` | number |  |  |
| `user_id` | number |  |  |
| `message` | string |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |
| `date` | number |  |  |
| `fwd_from` | [MessageFwdHeaderUnion](#messagefwdheaderunion) | 4 | Optional |
| `via_bot_id` | number | 2048 | Optional |
| `reply_to_msg_id` | number | 8 | Optional |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 128 | Optional |

TypeScript interface:

```typescript
interface UpdateShortMessage {
  _: 'updateShortMessage'
  flags: number
  out?: true
  mentioned?: true
  media_unread?: true
  silent?: true
  id: number
  user_id: number
  message: string
  pts: number
  pts_count: number
  date: number
  fwd_from?: MessageFwdHeaderUnion
  via_bot_id?: number
  reply_to_msg_id?: number
  entities?: MessageEntityUnion[]
}
```

### UpdateShortSentMessage

**Predicate:** "updateShortSentMessage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updateShortSentMessage" |
| `flags` | number |  |  |
| `out` | true | 2 | Optional |
| `id` | number |  |  |
| `pts` | number |  |  |
| `pts_count` | number |  |  |
| `date` | number |  |  |
| `media` | [MessageMediaUnion](#messagemediaunion) | 512 | Optional |
| `entities` | [MessageEntityUnion[]](#messageentityunion) | 128 | Optional |

TypeScript interface:

```typescript
interface UpdateShortSentMessage {
  _: 'updateShortSentMessage'
  flags: number
  out?: true
  id: number
  pts: number
  pts_count: number
  date: number
  media?: MessageMediaUnion
  entities?: MessageEntityUnion[]
}
```

### Updates

**Predicate:** "updates"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates" |
| `updates` | [UpdateUnion[]](#updateunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `date` | number |  |  |
| `seq` | number |  |  |

TypeScript interface:

```typescript
interface Updates {
  _: 'updates'
  updates: UpdateUnion[]
  users: UserUnion[]
  chats: ChatUnion[]
  date: number
  seq: number
}
```

### UpdatesCombined

**Predicate:** "updatesCombined"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatesCombined" |
| `updates` | [UpdateUnion[]](#updateunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `date` | number |  |  |
| `seq_start` | number |  |  |
| `seq` | number |  |  |

TypeScript interface:

```typescript
interface UpdatesCombined {
  _: 'updatesCombined'
  updates: UpdateUnion[]
  users: UserUnion[]
  chats: ChatUnion[]
  date: number
  seq_start: number
  seq: number
}
```

### UpdatesTooLong

**Predicate:** "updatesTooLong"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updatesTooLong" |

TypeScript interface:

```typescript
interface UpdatesTooLong {
  _: 'updatesTooLong'
}
```


## UpdatesChannelDifferenceUnion

Represents one of the following types:
- [`UpdatesChannelDifference`](#updateschanneldifference)
- [`UpdatesChannelDifferenceEmpty`](#updateschanneldifferenceempty)
- [`UpdatesChannelDifferenceTooLong`](#updateschanneldifferencetoolong)

### UpdatesChannelDifference

**Predicate:** "updates.channelDifference"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.channelDifference" |
| `flags` | number |  |  |
| `final` | true |  | Optional |
| `pts` | number |  |  |
| `timeout` | number | 2 | Optional |
| `new_messages` | [MessageUnion[]](#messageunion) |  |  |
| `other_updates` | [UpdateUnion[]](#updateunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface UpdatesChannelDifference {
  _: 'updates.channelDifference'
  flags: number
  final?: true
  pts: number
  timeout?: number
  new_messages: MessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```

### UpdatesChannelDifferenceEmpty

**Predicate:** "updates.channelDifferenceEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.channelDifferenceEmpty" |
| `flags` | number |  |  |
| `final` | true |  | Optional |
| `pts` | number |  |  |
| `timeout` | number | 2 | Optional |

TypeScript interface:

```typescript
interface UpdatesChannelDifferenceEmpty {
  _: 'updates.channelDifferenceEmpty'
  flags: number
  final?: true
  pts: number
  timeout?: number
}
```

### UpdatesChannelDifferenceTooLong

**Predicate:** "updates.channelDifferenceTooLong"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.channelDifferenceTooLong" |
| `flags` | number |  |  |
| `final` | true |  | Optional |
| `pts` | number |  |  |
| `timeout` | number | 2 | Optional |
| `top_message` | number |  |  |
| `read_inbox_max_id` | number |  |  |
| `read_outbox_max_id` | number |  |  |
| `unread_count` | number |  |  |
| `unread_mentions_count` | number |  |  |
| `messages` | [MessageUnion[]](#messageunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |

TypeScript interface:

```typescript
interface UpdatesChannelDifferenceTooLong {
  _: 'updates.channelDifferenceTooLong'
  flags: number
  final?: true
  pts: number
  timeout?: number
  top_message: number
  read_inbox_max_id: number
  read_outbox_max_id: number
  unread_count: number
  unread_mentions_count: number
  messages: MessageUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
}
```


## UpdatesDifferenceUnion

Represents one of the following types:
- [`UpdatesDifference`](#updatesdifference)
- [`UpdatesDifferenceEmpty`](#updatesdifferenceempty)
- [`UpdatesDifferenceSlice`](#updatesdifferenceslice)
- [`UpdatesDifferenceTooLong`](#updatesdifferencetoolong)

### UpdatesDifference

**Predicate:** "updates.difference"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.difference" |
| `new_messages` | [MessageUnion[]](#messageunion) |  |  |
| `new_encrypted_messages` | [EncryptedMessageUnion[]](#encryptedmessageunion) |  |  |
| `other_updates` | [UpdateUnion[]](#updateunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |
| `state` | [UpdatesStateUnion](#updatesstateunion) |  |  |

TypeScript interface:

```typescript
interface UpdatesDifference {
  _: 'updates.difference'
  new_messages: MessageUnion[]
  new_encrypted_messages: EncryptedMessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  state: UpdatesStateUnion
}
```

### UpdatesDifferenceEmpty

**Predicate:** "updates.differenceEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.differenceEmpty" |
| `date` | number |  |  |
| `seq` | number |  |  |

TypeScript interface:

```typescript
interface UpdatesDifferenceEmpty {
  _: 'updates.differenceEmpty'
  date: number
  seq: number
}
```

### UpdatesDifferenceSlice

**Predicate:** "updates.differenceSlice"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.differenceSlice" |
| `new_messages` | [MessageUnion[]](#messageunion) |  |  |
| `new_encrypted_messages` | [EncryptedMessageUnion[]](#encryptedmessageunion) |  |  |
| `other_updates` | [UpdateUnion[]](#updateunion) |  |  |
| `chats` | [ChatUnion[]](#chatunion) |  |  |
| `users` | [UserUnion[]](#userunion) |  |  |
| `intermediate_state` | [UpdatesStateUnion](#updatesstateunion) |  |  |

TypeScript interface:

```typescript
interface UpdatesDifferenceSlice {
  _: 'updates.differenceSlice'
  new_messages: MessageUnion[]
  new_encrypted_messages: EncryptedMessageUnion[]
  other_updates: UpdateUnion[]
  chats: ChatUnion[]
  users: UserUnion[]
  intermediate_state: UpdatesStateUnion
}
```

### UpdatesDifferenceTooLong

**Predicate:** "updates.differenceTooLong"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.differenceTooLong" |
| `pts` | number |  |  |

TypeScript interface:

```typescript
interface UpdatesDifferenceTooLong {
  _: 'updates.differenceTooLong'
  pts: number
}
```


## UpdatesStateUnion

It's an alias for the `UpdatesState` type.

### UpdatesState

**Predicate:** "updates.state"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "updates.state" |
| `pts` | number |  |  |
| `qts` | number |  |  |
| `date` | number |  |  |
| `seq` | number |  |  |
| `unread_count` | number |  |  |

TypeScript interface:

```typescript
interface UpdatesState {
  _: 'updates.state'
  pts: number
  qts: number
  date: number
  seq: number
  unread_count: number
}
```


## UploadCdnFileUnion

Represents one of the following types:
- [`UploadCdnFile`](#uploadcdnfile)
- [`UploadCdnFileReuploadNeeded`](#uploadcdnfilereuploadneeded)

### UploadCdnFile

**Predicate:** "upload.cdnFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "upload.cdnFile" |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface UploadCdnFile {
  _: 'upload.cdnFile'
  bytes: number[]
}
```

### UploadCdnFileReuploadNeeded

**Predicate:** "upload.cdnFileReuploadNeeded"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "upload.cdnFileReuploadNeeded" |
| `request_token` | number[] |  |  |

TypeScript interface:

```typescript
interface UploadCdnFileReuploadNeeded {
  _: 'upload.cdnFileReuploadNeeded'
  request_token: number[]
}
```


## UploadFileUnion

Represents one of the following types:
- [`UploadFile`](#uploadfile)
- [`UploadFileCdnRedirect`](#uploadfilecdnredirect)

### UploadFile

**Predicate:** "upload.file"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "upload.file" |
| `type` | [StorageFileTypeUnion](#storagefiletypeunion) |  |  |
| `mtime` | number |  |  |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface UploadFile {
  _: 'upload.file'
  type: StorageFileTypeUnion
  mtime: number
  bytes: number[]
}
```

### UploadFileCdnRedirect

**Predicate:** "upload.fileCdnRedirect"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "upload.fileCdnRedirect" |
| `dc_id` | number |  |  |
| `file_token` | number[] |  |  |
| `encryption_key` | number[] |  |  |
| `encryption_iv` | number[] |  |  |
| `cdn_file_hashes` | [CdnFileHashUnion[]](#cdnfilehashunion) |  |  |

TypeScript interface:

```typescript
interface UploadFileCdnRedirect {
  _: 'upload.fileCdnRedirect'
  dc_id: number
  file_token: number[]
  encryption_key: number[]
  encryption_iv: number[]
  cdn_file_hashes: CdnFileHashUnion[]
}
```


## UploadWebFileUnion

It's an alias for the `UploadWebFile` type.

### UploadWebFile

**Predicate:** "upload.webFile"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "upload.webFile" |
| `size` | number |  |  |
| `mime_type` | string |  |  |
| `file_type` | [StorageFileTypeUnion](#storagefiletypeunion) |  |  |
| `mtime` | number |  |  |
| `bytes` | number[] |  |  |

TypeScript interface:

```typescript
interface UploadWebFile {
  _: 'upload.webFile'
  size: number
  mime_type: string
  file_type: StorageFileTypeUnion
  mtime: number
  bytes: number[]
}
```


## UserUnion

Represents one of the following types:
- [`User`](#user)
- [`UserEmpty`](#userempty)

### User

**Predicate:** "user"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "user" |
| `flags` | number |  |  |
| `self` | true | 1024 | Optional |
| `contact` | true | 2048 | Optional |
| `mutual_contact` | true | 4096 | Optional |
| `deleted` | true | 8192 | Optional |
| `bot` | true | 16384 | Optional |
| `bot_chat_history` | true | 32768 | Optional |
| `bot_nochats` | true | 65536 | Optional |
| `verified` | true | 131072 | Optional |
| `restricted` | true | 262144 | Optional |
| `min` | true | 1048576 | Optional |
| `bot_inline_geo` | true | 2097152 | Optional |
| `id` | number |  |  |
| `access_hash` | number |  | Optional |
| `first_name` | string | 2 | Optional |
| `last_name` | string | 4 | Optional |
| `username` | string | 8 | Optional |
| `phone` | string | 16 | Optional |
| `photo` | [UserProfilePhotoUnion](#userprofilephotounion) | 32 | Optional |
| `status` | [UserStatusUnion](#userstatusunion) | 64 | Optional |
| `bot_info_version` | number | 16384 | Optional |
| `restriction_reason` | string | 262144 | Optional |
| `bot_inline_placeholder` | string | 524288 | Optional |
| `lang_code` | string | 4194304 | Optional |

TypeScript interface:

```typescript
interface User {
  _: 'user'
  flags: number
  self?: true
  contact?: true
  mutual_contact?: true
  deleted?: true
  bot?: true
  bot_chat_history?: true
  bot_nochats?: true
  verified?: true
  restricted?: true
  min?: true
  bot_inline_geo?: true
  id: number
  access_hash?: number
  first_name?: string
  last_name?: string
  username?: string
  phone?: string
  photo?: UserProfilePhotoUnion
  status?: UserStatusUnion
  bot_info_version?: number
  restriction_reason?: string
  bot_inline_placeholder?: string
  lang_code?: string
}
```

### UserEmpty

**Predicate:** "userEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface UserEmpty {
  _: 'userEmpty'
  id: number
}
```


## UserFullUnion

It's an alias for the `UserFull` type.

### UserFull

**Predicate:** "userFull"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userFull" |
| `flags` | number |  |  |
| `blocked` | true |  | Optional |
| `phone_calls_available` | true | 16 | Optional |
| `phone_calls_private` | true | 32 | Optional |
| `user` | [UserUnion](#userunion) |  |  |
| `about` | string | 2 | Optional |
| `link` | [ContactsLinkUnion](#contactslinkunion) |  |  |
| `profile_photo` | [PhotoUnion](#photounion) | 4 | Optional |
| `notify_settings` | [PeerNotifySettingsUnion](#peernotifysettingsunion) |  |  |
| `bot_info` | [BotInfoUnion](#botinfounion) | 8 | Optional |
| `common_chats_count` | number |  |  |

TypeScript interface:

```typescript
interface UserFull {
  _: 'userFull'
  flags: number
  blocked?: true
  phone_calls_available?: true
  phone_calls_private?: true
  user: UserUnion
  about?: string
  link: ContactsLinkUnion
  profile_photo?: PhotoUnion
  notify_settings: PeerNotifySettingsUnion
  bot_info?: BotInfoUnion
  common_chats_count: number
}
```


## UserProfilePhotoUnion

Represents one of the following types:
- [`UserProfilePhoto`](#userprofilephoto)
- [`UserProfilePhotoEmpty`](#userprofilephotoempty)

### UserProfilePhoto

**Predicate:** "userProfilePhoto"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userProfilePhoto" |
| `photo_id` | number |  |  |
| `photo_small` | [FileLocationUnion](#filelocationunion) |  |  |
| `photo_big` | [FileLocationUnion](#filelocationunion) |  |  |

TypeScript interface:

```typescript
interface UserProfilePhoto {
  _: 'userProfilePhoto'
  photo_id: number
  photo_small: FileLocationUnion
  photo_big: FileLocationUnion
}
```

### UserProfilePhotoEmpty

**Predicate:** "userProfilePhotoEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userProfilePhotoEmpty" |

TypeScript interface:

```typescript
interface UserProfilePhotoEmpty {
  _: 'userProfilePhotoEmpty'
}
```


## UserStatusUnion

Represents one of the following types:
- [`UserStatusEmpty`](#userstatusempty)
- [`UserStatusLastMonth`](#userstatuslastmonth)
- [`UserStatusLastWeek`](#userstatuslastweek)
- [`UserStatusOffline`](#userstatusoffline)
- [`UserStatusOnline`](#userstatusonline)
- [`UserStatusRecently`](#userstatusrecently)

### UserStatusEmpty

**Predicate:** "userStatusEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusEmpty" |

TypeScript interface:

```typescript
interface UserStatusEmpty {
  _: 'userStatusEmpty'
}
```

### UserStatusLastMonth

**Predicate:** "userStatusLastMonth"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusLastMonth" |

TypeScript interface:

```typescript
interface UserStatusLastMonth {
  _: 'userStatusLastMonth'
}
```

### UserStatusLastWeek

**Predicate:** "userStatusLastWeek"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusLastWeek" |

TypeScript interface:

```typescript
interface UserStatusLastWeek {
  _: 'userStatusLastWeek'
}
```

### UserStatusOffline

**Predicate:** "userStatusOffline"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusOffline" |
| `was_online` | number |  |  |

TypeScript interface:

```typescript
interface UserStatusOffline {
  _: 'userStatusOffline'
  was_online: number
}
```

### UserStatusOnline

**Predicate:** "userStatusOnline"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusOnline" |
| `expires` | number |  |  |

TypeScript interface:

```typescript
interface UserStatusOnline {
  _: 'userStatusOnline'
  expires: number
}
```

### UserStatusRecently

**Predicate:** "userStatusRecently"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "userStatusRecently" |

TypeScript interface:

```typescript
interface UserStatusRecently {
  _: 'userStatusRecently'
}
```


## WallPaperUnion

Represents one of the following types:
- [`WallPaper`](#wallpaper)
- [`WallPaperSolid`](#wallpapersolid)

### WallPaper

**Predicate:** "wallPaper"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "wallPaper" |
| `id` | number |  |  |
| `title` | string |  |  |
| `sizes` | [PhotoSizeUnion[]](#photosizeunion) |  |  |
| `color` | number |  |  |

TypeScript interface:

```typescript
interface WallPaper {
  _: 'wallPaper'
  id: number
  title: string
  sizes: PhotoSizeUnion[]
  color: number
}
```

### WallPaperSolid

**Predicate:** "wallPaperSolid"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "wallPaperSolid" |
| `id` | number |  |  |
| `title` | string |  |  |
| `bg_color` | number |  |  |
| `color` | number |  |  |

TypeScript interface:

```typescript
interface WallPaperSolid {
  _: 'wallPaperSolid'
  id: number
  title: string
  bg_color: number
  color: number
}
```


## WebDocumentUnion

It's an alias for the `WebDocument` type.

### WebDocument

**Predicate:** "webDocument"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "webDocument" |
| `url` | string |  |  |
| `access_hash` | number |  |  |
| `size` | number |  |  |
| `mime_type` | string |  |  |
| `attributes` | [DocumentAttributeUnion[]](#documentattributeunion) |  |  |
| `dc_id` | number |  |  |

TypeScript interface:

```typescript
interface WebDocument {
  _: 'webDocument'
  url: string
  access_hash: number
  size: number
  mime_type: string
  attributes: DocumentAttributeUnion[]
  dc_id: number
}
```


## WebPageUnion

Represents one of the following types:
- [`WebPage`](#webpage)
- [`WebPageEmpty`](#webpageempty)
- [`WebPageNotModified`](#webpagenotmodified)
- [`WebPagePending`](#webpagepending)

### WebPage

**Predicate:** "webPage"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "webPage" |
| `flags` | number |  |  |
| `id` | number |  |  |
| `url` | string |  |  |
| `display_url` | string |  |  |
| `hash` | number |  |  |
| `type` | string |  | Optional |
| `site_name` | string | 2 | Optional |
| `title` | string | 4 | Optional |
| `description` | string | 8 | Optional |
| `photo` | [PhotoUnion](#photounion) | 16 | Optional |
| `embed_url` | string | 32 | Optional |
| `embed_type` | string | 32 | Optional |
| `embed_width` | number | 64 | Optional |
| `embed_height` | number | 64 | Optional |
| `duration` | number | 128 | Optional |
| `author` | string | 256 | Optional |
| `document` | [DocumentUnion](#documentunion) | 512 | Optional |
| `cached_page` | [PageUnion](#pageunion) | 1024 | Optional |

TypeScript interface:

```typescript
interface WebPage {
  _: 'webPage'
  flags: number
  id: number
  url: string
  display_url: string
  hash: number
  type?: string
  site_name?: string
  title?: string
  description?: string
  photo?: PhotoUnion
  embed_url?: string
  embed_type?: string
  embed_width?: number
  embed_height?: number
  duration?: number
  author?: string
  document?: DocumentUnion
  cached_page?: PageUnion
}
```

### WebPageEmpty

**Predicate:** "webPageEmpty"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "webPageEmpty" |
| `id` | number |  |  |

TypeScript interface:

```typescript
interface WebPageEmpty {
  _: 'webPageEmpty'
  id: number
}
```

### WebPageNotModified

**Predicate:** "webPageNotModified"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "webPageNotModified" |

TypeScript interface:

```typescript
interface WebPageNotModified {
  _: 'webPageNotModified'
}
```

### WebPagePending

**Predicate:** "webPagePending"

**Properties:**

| Name | Type | Flag | Note |
| --- | --- | --- | --- |
| `_` | string |  | Value: "webPagePending" |
| `id` | number |  |  |
| `date` | number |  |  |

TypeScript interface:

```typescript
interface WebPagePending {
  _: 'webPagePending'
  id: number
  date: number
}
```


