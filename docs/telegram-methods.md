# Telegram methods





<details>
  <summary>Account</summary>

- [`changePhone`](#accountchangephone)
- [`checkUsername`](#accountcheckusername)
- [`confirmPhone`](#accountconfirmphone)
- [`deleteAccount`](#accountdeleteaccount)
- [`getAccountTTL`](#accountgetaccountttl)
- [`getAuthorizations`](#accountgetauthorizations)
- [`getNotifySettings`](#accountgetnotifysettings)
- [`getPassword`](#accountgetpassword)
- [`getPasswordSettings`](#accountgetpasswordsettings)
- [`getPrivacy`](#accountgetprivacy)
- [`getTmpPassword`](#accountgettmppassword)
- [`getWallPapers`](#accountgetwallpapers)
- [`registerDevice`](#accountregisterdevice)
- [`reportPeer`](#accountreportpeer)
- [`resetAuthorization`](#accountresetauthorization)
- [`resetNotifySettings`](#accountresetnotifysettings)
- [`sendChangePhoneCode`](#accountsendchangephonecode)
- [`sendConfirmPhoneCode`](#accountsendconfirmphonecode)
- [`setAccountTTL`](#accountsetaccountttl)
- [`setPrivacy`](#accountsetprivacy)
- [`unregisterDevice`](#accountunregisterdevice)
- [`updateDeviceLocked`](#accountupdatedevicelocked)
- [`updateNotifySettings`](#accountupdatenotifysettings)
- [`updatePasswordSettings`](#accountupdatepasswordsettings)
- [`updateProfile`](#accountupdateprofile)
- [`updateStatus`](#accountupdatestatus)
- [`updateUsername`](#accountupdateusername)
</details>
<details>
  <summary>Auth</summary>

- [`bindTempAuthKey`](#authbindtempauthkey)
- [`cancelCode`](#authcancelcode)
- [`checkPassword`](#authcheckpassword)
- [`checkPhone`](#authcheckphone)
- [`dropTempAuthKeys`](#authdroptempauthkeys)
- [`exportAuthorization`](#authexportauthorization)
- [`importAuthorization`](#authimportauthorization)
- [`importBotAuthorization`](#authimportbotauthorization)
- [`logOut`](#authlogout)
- [`recoverPassword`](#authrecoverpassword)
- [`requestPasswordRecovery`](#authrequestpasswordrecovery)
- [`resendCode`](#authresendcode)
- [`resetAuthorizations`](#authresetauthorizations)
- [`sendCode`](#authsendcode)
- [`sendInvites`](#authsendinvites)
- [`signIn`](#authsignin)
- [`signUp`](#authsignup)
</details>
<details>
  <summary>Bots</summary>

- [`answerWebhookJSONQuery`](#botsanswerwebhookjsonquery)
- [`sendCustomRequest`](#botssendcustomrequest)
</details>
<details>
  <summary>Channels</summary>

- [`checkUsername`](#channelscheckusername)
- [`createChannel`](#channelscreatechannel)
- [`deleteChannel`](#channelsdeletechannel)
- [`deleteMessages`](#channelsdeletemessages)
- [`deleteUserHistory`](#channelsdeleteuserhistory)
- [`editAbout`](#channelseditabout)
- [`editAdmin`](#channelseditadmin)
- [`editBanned`](#channelseditbanned)
- [`editPhoto`](#channelseditphoto)
- [`editTitle`](#channelsedittitle)
- [`exportInvite`](#channelsexportinvite)
- [`exportMessageLink`](#channelsexportmessagelink)
- [`getAdminLog`](#channelsgetadminlog)
- [`getAdminedPublicChannels`](#channelsgetadminedpublicchannels)
- [`getChannels`](#channelsgetchannels)
- [`getFullChannel`](#channelsgetfullchannel)
- [`getMessages`](#channelsgetmessages)
- [`getParticipant`](#channelsgetparticipant)
- [`getParticipants`](#channelsgetparticipants)
- [`inviteToChannel`](#channelsinvitetochannel)
- [`joinChannel`](#channelsjoinchannel)
- [`leaveChannel`](#channelsleavechannel)
- [`readHistory`](#channelsreadhistory)
- [`readMessageContents`](#channelsreadmessagecontents)
- [`reportSpam`](#channelsreportspam)
- [`setStickers`](#channelssetstickers)
- [`toggleInvites`](#channelstoggleinvites)
- [`toggleSignatures`](#channelstogglesignatures)
- [`updatePinnedMessage`](#channelsupdatepinnedmessage)
- [`updateUsername`](#channelsupdateusername)
</details>
<details>
  <summary>Contacts</summary>

- [`block`](#contactsblock)
- [`deleteContact`](#contactsdeletecontact)
- [`deleteContacts`](#contactsdeletecontacts)
- [`exportCard`](#contactsexportcard)
- [`getBlocked`](#contactsgetblocked)
- [`getContacts`](#contactsgetcontacts)
- [`getStatuses`](#contactsgetstatuses)
- [`getTopPeers`](#contactsgettoppeers)
- [`importCard`](#contactsimportcard)
- [`importContacts`](#contactsimportcontacts)
- [`resetSaved`](#contactsresetsaved)
- [`resetTopPeerRating`](#contactsresettoppeerrating)
- [`resolveUsername`](#contactsresolveusername)
- [`search`](#contactssearch)
- [`unblock`](#contactsunblock)
</details>
<details>
  <summary>Help</summary>

- [`getAppChangelog`](#helpgetappchangelog)
- [`getAppUpdate`](#helpgetappupdate)
- [`getCdnConfig`](#helpgetcdnconfig)
- [`getConfig`](#helpgetconfig)
- [`getInviteText`](#helpgetinvitetext)
- [`getNearestDc`](#helpgetnearestdc)
- [`getSupport`](#helpgetsupport)
- [`getTermsOfService`](#helpgettermsofservice)
- [`saveAppLog`](#helpsaveapplog)
- [`setBotUpdatesStatus`](#helpsetbotupdatesstatus)
</details>
<details>
  <summary>Langpack</summary>

- [`getDifference`](#langpackgetdifference)
- [`getLangPack`](#langpackgetlangpack)
- [`getLanguages`](#langpackgetlanguages)
- [`getStrings`](#langpackgetstrings)
</details>
<details>
  <summary>Messages</summary>

- [`acceptEncryption`](#messagesacceptencryption)
- [`addChatUser`](#messagesaddchatuser)
- [`checkChatInvite`](#messagescheckchatinvite)
- [`clearRecentStickers`](#messagesclearrecentstickers)
- [`createChat`](#messagescreatechat)
- [`deleteChatUser`](#messagesdeletechatuser)
- [`deleteHistory`](#messagesdeletehistory)
- [`deleteMessages`](#messagesdeletemessages)
- [`discardEncryption`](#messagesdiscardencryption)
- [`editChatAdmin`](#messageseditchatadmin)
- [`editChatPhoto`](#messageseditchatphoto)
- [`editChatTitle`](#messageseditchattitle)
- [`editInlineBotMessage`](#messageseditinlinebotmessage)
- [`editMessage`](#messageseditmessage)
- [`exportChatInvite`](#messagesexportchatinvite)
- [`faveSticker`](#messagesfavesticker)
- [`forwardMessage`](#messagesforwardmessage)
- [`forwardMessages`](#messagesforwardmessages)
- [`getAllChats`](#messagesgetallchats)
- [`getAllDrafts`](#messagesgetalldrafts)
- [`getAllStickers`](#messagesgetallstickers)
- [`getArchivedStickers`](#messagesgetarchivedstickers)
- [`getAttachedStickers`](#messagesgetattachedstickers)
- [`getBotCallbackAnswer`](#messagesgetbotcallbackanswer)
- [`getChats`](#messagesgetchats)
- [`getCommonChats`](#messagesgetcommonchats)
- [`getDhConfig`](#messagesgetdhconfig)
- [`getDialogs`](#messagesgetdialogs)
- [`getDocumentByHash`](#messagesgetdocumentbyhash)
- [`getFavedStickers`](#messagesgetfavedstickers)
- [`getFeaturedStickers`](#messagesgetfeaturedstickers)
- [`getFullChat`](#messagesgetfullchat)
- [`getGameHighScores`](#messagesgetgamehighscores)
- [`getHistory`](#messagesgethistory)
- [`getInlineBotResults`](#messagesgetinlinebotresults)
- [`getInlineGameHighScores`](#messagesgetinlinegamehighscores)
- [`getMaskStickers`](#messagesgetmaskstickers)
- [`getMessageEditData`](#messagesgetmessageeditdata)
- [`getMessages`](#messagesgetmessages)
- [`getMessagesViews`](#messagesgetmessagesviews)
- [`getPeerDialogs`](#messagesgetpeerdialogs)
- [`getPeerSettings`](#messagesgetpeersettings)
- [`getPinnedDialogs`](#messagesgetpinneddialogs)
- [`getRecentStickers`](#messagesgetrecentstickers)
- [`getSavedGifs`](#messagesgetsavedgifs)
- [`getStickerSet`](#messagesgetstickerset)
- [`getUnreadMentions`](#messagesgetunreadmentions)
- [`getWebPage`](#messagesgetwebpage)
- [`getWebPagePreview`](#messagesgetwebpagepreview)
- [`hideReportSpam`](#messageshidereportspam)
- [`importChatInvite`](#messagesimportchatinvite)
- [`installStickerSet`](#messagesinstallstickerset)
- [`migrateChat`](#messagesmigratechat)
- [`readEncryptedHistory`](#messagesreadencryptedhistory)
- [`readFeaturedStickers`](#messagesreadfeaturedstickers)
- [`readHistory`](#messagesreadhistory)
- [`readMessageContents`](#messagesreadmessagecontents)
- [`receivedMessages`](#messagesreceivedmessages)
- [`receivedQueue`](#messagesreceivedqueue)
- [`reorderPinnedDialogs`](#messagesreorderpinneddialogs)
- [`reorderStickerSets`](#messagesreorderstickersets)
- [`reportEncryptedSpam`](#messagesreportencryptedspam)
- [`reportSpam`](#messagesreportspam)
- [`requestEncryption`](#messagesrequestencryption)
- [`saveDraft`](#messagessavedraft)
- [`saveGif`](#messagessavegif)
- [`saveRecentSticker`](#messagessaverecentsticker)
- [`search`](#messagessearch)
- [`searchGifs`](#messagessearchgifs)
- [`searchGlobal`](#messagessearchglobal)
- [`sendEncrypted`](#messagessendencrypted)
- [`sendEncryptedFile`](#messagessendencryptedfile)
- [`sendEncryptedService`](#messagessendencryptedservice)
- [`sendInlineBotResult`](#messagessendinlinebotresult)
- [`sendMedia`](#messagessendmedia)
- [`sendMessage`](#messagessendmessage)
- [`sendScreenshotNotification`](#messagessendscreenshotnotification)
- [`setBotCallbackAnswer`](#messagessetbotcallbackanswer)
- [`setBotPrecheckoutResults`](#messagessetbotprecheckoutresults)
- [`setBotShippingResults`](#messagessetbotshippingresults)
- [`setEncryptedTyping`](#messagessetencryptedtyping)
- [`setGameScore`](#messagessetgamescore)
- [`setInlineBotResults`](#messagessetinlinebotresults)
- [`setInlineGameScore`](#messagessetinlinegamescore)
- [`setTyping`](#messagessettyping)
- [`startBot`](#messagesstartbot)
- [`toggleChatAdmins`](#messagestogglechatadmins)
- [`toggleDialogPin`](#messagestoggledialogpin)
- [`uninstallStickerSet`](#messagesuninstallstickerset)
- [`uploadMedia`](#messagesuploadmedia)
</details>
<details>
  <summary>Payments</summary>

- [`clearSavedInfo`](#paymentsclearsavedinfo)
- [`getPaymentForm`](#paymentsgetpaymentform)
- [`getPaymentReceipt`](#paymentsgetpaymentreceipt)
- [`getSavedInfo`](#paymentsgetsavedinfo)
- [`sendPaymentForm`](#paymentssendpaymentform)
- [`validateRequestedInfo`](#paymentsvalidaterequestedinfo)
</details>
<details>
  <summary>Phone</summary>

- [`acceptCall`](#phoneacceptcall)
- [`confirmCall`](#phoneconfirmcall)
- [`discardCall`](#phonediscardcall)
- [`getCallConfig`](#phonegetcallconfig)
- [`receivedCall`](#phonereceivedcall)
- [`requestCall`](#phonerequestcall)
- [`saveCallDebug`](#phonesavecalldebug)
- [`setCallRating`](#phonesetcallrating)
</details>
<details>
  <summary>Photos</summary>

- [`deletePhotos`](#photosdeletephotos)
- [`getUserPhotos`](#photosgetuserphotos)
- [`updateProfilePhoto`](#photosupdateprofilephoto)
- [`uploadProfilePhoto`](#photosuploadprofilephoto)
</details>
<details>
  <summary>Stickers</summary>

- [`addStickerToSet`](#stickersaddstickertoset)
- [`changeStickerPosition`](#stickerschangestickerposition)
- [`createStickerSet`](#stickerscreatestickerset)
- [`removeStickerFromSet`](#stickersremovestickerfromset)
</details>
<details>
  <summary>Updates</summary>

- [`getChannelDifference`](#updatesgetchanneldifference)
- [`getDifference`](#updatesgetdifference)
- [`getState`](#updatesgetstate)
</details>
<details>
  <summary>Upload</summary>

- [`getCdnFile`](#uploadgetcdnfile)
- [`getCdnFileHashes`](#uploadgetcdnfilehashes)
- [`getFile`](#uploadgetfile)
- [`getWebFile`](#uploadgetwebfile)
- [`reuploadCdnFile`](#uploadreuploadcdnfile)
- [`saveBigFilePart`](#uploadsavebigfilepart)
- [`saveFilePart`](#uploadsavefilepart)
</details>
<details>
  <summary>Users</summary>

- [`getFullUser`](#usersgetfulluser)
- [`getUsers`](#usersgetusers)
</details>

-------------

## Account





### account.changePhone

**Signature:** account.changePhone(params: `ChangePhoneParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserUnion`](/docs/telegram-types.md#userunion)

**`ChangePhoneParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_code` | string |  |
| `phone_code_hash` | string |  |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface ChangePhoneParams {
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}
```


**Example:**

```typescript
// @var ChangePhoneParams params
airgram.client.account.changePhone(params).then((result: UserUnion) => {
  console.log(result)
})
```

### account.checkUsername

**Signature:** account.checkUsername(params: `CheckUsernameParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`CheckUsernameParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `username` | string |  |

TypeScript interface:

```typescript
interface CheckUsernameParams {
  username: string
}
```


**Example:**

```typescript
// @var CheckUsernameParams params
airgram.client.account.checkUsername(params).then((result: boolean) => {
  console.log(result)
})
```

### account.confirmPhone

**Signature:** account.confirmPhone(params: `ConfirmPhoneParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ConfirmPhoneParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_code` | string |  |
| `phone_code_hash` | string |  |

TypeScript interface:

```typescript
interface ConfirmPhoneParams {
  phone_code: string,
  phone_code_hash: string
}
```


**Example:**

```typescript
// @var ConfirmPhoneParams params
airgram.client.account.confirmPhone(params).then((result: boolean) => {
  console.log(result)
})
```

### account.deleteAccount

**Signature:** account.deleteAccount(params: `DeleteAccountParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`DeleteAccountParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `reason` | string |  |

TypeScript interface:

```typescript
interface DeleteAccountParams {
  reason: string
}
```


**Example:**

```typescript
// @var DeleteAccountParams params
airgram.client.account.deleteAccount(params).then((result: boolean) => {
  console.log(result)
})
```

### account.getAccountTTL

**Signature:** account.getAccountTTL(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountDaysTtlUnion`](/docs/telegram-types.md#accountdaysttlunion)


**Example:**

```typescript
airgram.client.account.getAccountTTL().then((result: AccountDaysTtlUnion) => {
  console.log(result)
})
```

### account.getAuthorizations

**Signature:** account.getAuthorizations(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountAuthorizationsUnion`](/docs/telegram-types.md#accountauthorizationsunion)


**Example:**

```typescript
airgram.client.account.getAuthorizations().then((result: AccountAuthorizationsUnion) => {
  console.log(result)
})
```

### account.getNotifySettings

**Signature:** account.getNotifySettings(params: `GetNotifySettingsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PeerNotifySettingsUnion`](/docs/telegram-types.md#peernotifysettingsunion)

**`GetNotifySettingsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputNotifyPeerUnion](/docs/telegram-types.md#inputnotifypeerunion) |  |

TypeScript interface:

```typescript
interface GetNotifySettingsParams {
  peer: InputNotifyPeerUnion
}
```


**Example:**

```typescript
// @var GetNotifySettingsParams params
airgram.client.account.getNotifySettings(params).then((result: PeerNotifySettingsUnion) => {
  console.log(result)
})
```

### account.getPassword

**Signature:** account.getPassword(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountPasswordUnion`](/docs/telegram-types.md#accountpasswordunion)


**Example:**

```typescript
airgram.client.account.getPassword().then((result: AccountPasswordUnion) => {
  console.log(result)
})
```

### account.getPasswordSettings

**Signature:** account.getPasswordSettings(params: `GetPasswordSettingsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountPasswordSettingsUnion`](/docs/telegram-types.md#accountpasswordsettingsunion)

**`GetPasswordSettingsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `current_password_hash` | number[] |  |

TypeScript interface:

```typescript
interface GetPasswordSettingsParams {
  current_password_hash: number[]
}
```


**Example:**

```typescript
// @var GetPasswordSettingsParams params
airgram.client.account.getPasswordSettings(params).then((result: AccountPasswordSettingsUnion) => {
  console.log(result)
})
```

### account.getPrivacy

**Signature:** account.getPrivacy(params: `GetPrivacyParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountPrivacyRulesUnion`](/docs/telegram-types.md#accountprivacyrulesunion)

**`GetPrivacyParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `key` | [InputPrivacyKeyUnion](/docs/telegram-types.md#inputprivacykeyunion) |  |

TypeScript interface:

```typescript
interface GetPrivacyParams {
  key: InputPrivacyKeyUnion
}
```


**Example:**

```typescript
// @var GetPrivacyParams params
airgram.client.account.getPrivacy(params).then((result: AccountPrivacyRulesUnion) => {
  console.log(result)
})
```

### account.getTmpPassword

**Signature:** account.getTmpPassword(params: `GetTmpPasswordParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountTmpPasswordUnion`](/docs/telegram-types.md#accounttmppasswordunion)

**`GetTmpPasswordParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `password_hash` | number[] |  |
| `period` | number |  |

TypeScript interface:

```typescript
interface GetTmpPasswordParams {
  password_hash: number[],
  period: number
}
```


**Example:**

```typescript
// @var GetTmpPasswordParams params
airgram.client.account.getTmpPassword(params).then((result: AccountTmpPasswordUnion) => {
  console.log(result)
})
```

### account.getWallPapers

**Signature:** account.getWallPapers(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`WallPaperUnion`](/docs/telegram-types.md#wallpaperunion)[]


**Example:**

```typescript
airgram.client.account.getWallPapers().then((result: WallPaperUnion[]) => {
  console.log(result)
})
```

### account.registerDevice

**Signature:** account.registerDevice(params: `RegisterDeviceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`RegisterDeviceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `token` | string |  |
| `token_type` | number |  |

TypeScript interface:

```typescript
interface RegisterDeviceParams {
  token: string,
  token_type: number
}
```


**Example:**

```typescript
// @var RegisterDeviceParams params
airgram.client.account.registerDevice(params).then((result: boolean) => {
  console.log(result)
})
```

### account.reportPeer

**Signature:** account.reportPeer(params: `ReportPeerParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReportPeerParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `reason` | [ReportReasonUnion](/docs/telegram-types.md#reportreasonunion) |  |

TypeScript interface:

```typescript
interface ReportPeerParams {
  peer: InputPeerUnion,
  reason: ReportReasonUnion
}
```


**Example:**

```typescript
// @var ReportPeerParams params
airgram.client.account.reportPeer(params).then((result: boolean) => {
  console.log(result)
})
```

### account.resetAuthorization

**Signature:** account.resetAuthorization(params: `ResetAuthorizationParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ResetAuthorizationParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface ResetAuthorizationParams {
  hash: number
}
```


**Example:**

```typescript
// @var ResetAuthorizationParams params
airgram.client.account.resetAuthorization(params).then((result: boolean) => {
  console.log(result)
})
```

### account.resetNotifySettings

**Signature:** account.resetNotifySettings(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`


**Example:**

```typescript
airgram.client.account.resetNotifySettings().then((result: boolean) => {
  console.log(result)
})
```

### account.sendChangePhoneCode

**Signature:** account.sendChangePhoneCode(params: `SendChangePhoneCodeParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthSentCodeUnion`](/docs/telegram-types.md#authsentcodeunion)

**`SendChangePhoneCodeParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `phone_number` | string |  |
| `allow_flashcall` | true | Optional |
| `current_number` | boolean | Optional |

TypeScript interface:

```typescript
interface SendChangePhoneCodeParams {
  flags: number,
  phone_number: string,
  allow_flashcall?: true,
  current_number?: boolean
}
```


**Example:**

```typescript
// @var SendChangePhoneCodeParams params
airgram.client.account.sendChangePhoneCode(params).then((result: AuthSentCodeUnion) => {
  console.log(result)
})
```

### account.sendConfirmPhoneCode

**Signature:** account.sendConfirmPhoneCode(params: `SendConfirmPhoneCodeParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthSentCodeUnion`](/docs/telegram-types.md#authsentcodeunion)

**`SendConfirmPhoneCodeParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `hash` | string |  |
| `allow_flashcall` | true | Optional |
| `current_number` | boolean | Optional |

TypeScript interface:

```typescript
interface SendConfirmPhoneCodeParams {
  flags: number,
  hash: string,
  allow_flashcall?: true,
  current_number?: boolean
}
```


**Example:**

```typescript
// @var SendConfirmPhoneCodeParams params
airgram.client.account.sendConfirmPhoneCode(params).then((result: AuthSentCodeUnion) => {
  console.log(result)
})
```

### account.setAccountTTL

**Signature:** account.setAccountTTL(params: `SetAccountTtlParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetAccountTtlParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `ttl` | [AccountDaysTtlUnion](/docs/telegram-types.md#accountdaysttlunion) |  |

TypeScript interface:

```typescript
interface SetAccountTtlParams {
  ttl: AccountDaysTtlUnion
}
```


**Example:**

```typescript
// @var SetAccountTtlParams params
airgram.client.account.setAccountTTL(params).then((result: boolean) => {
  console.log(result)
})
```

### account.setPrivacy

**Signature:** account.setPrivacy(params: `SetPrivacyParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AccountPrivacyRulesUnion`](/docs/telegram-types.md#accountprivacyrulesunion)

**`SetPrivacyParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `key` | [InputPrivacyKeyUnion](/docs/telegram-types.md#inputprivacykeyunion) |  |
| `rules` | [InputPrivacyRuleUnion](/docs/telegram-types.md#inputprivacyruleunion)[] |  |

TypeScript interface:

```typescript
interface SetPrivacyParams {
  key: InputPrivacyKeyUnion,
  rules: InputPrivacyRuleUnion[]
}
```


**Example:**

```typescript
// @var SetPrivacyParams params
airgram.client.account.setPrivacy(params).then((result: AccountPrivacyRulesUnion) => {
  console.log(result)
})
```

### account.unregisterDevice

**Signature:** account.unregisterDevice(params: `UnregisterDeviceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UnregisterDeviceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `token` | string |  |
| `token_type` | number |  |

TypeScript interface:

```typescript
interface UnregisterDeviceParams {
  token: string,
  token_type: number
}
```


**Example:**

```typescript
// @var UnregisterDeviceParams params
airgram.client.account.unregisterDevice(params).then((result: boolean) => {
  console.log(result)
})
```

### account.updateDeviceLocked

**Signature:** account.updateDeviceLocked(params: `UpdateDeviceLockedParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UpdateDeviceLockedParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `period` | number |  |

TypeScript interface:

```typescript
interface UpdateDeviceLockedParams {
  period: number
}
```


**Example:**

```typescript
// @var UpdateDeviceLockedParams params
airgram.client.account.updateDeviceLocked(params).then((result: boolean) => {
  console.log(result)
})
```

### account.updateNotifySettings

**Signature:** account.updateNotifySettings(params: `UpdateNotifySettingsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UpdateNotifySettingsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputNotifyPeerUnion](/docs/telegram-types.md#inputnotifypeerunion) |  |
| `settings` | [InputPeerNotifySettingsUnion](/docs/telegram-types.md#inputpeernotifysettingsunion) |  |

TypeScript interface:

```typescript
interface UpdateNotifySettingsParams {
  peer: InputNotifyPeerUnion,
  settings: InputPeerNotifySettingsUnion
}
```


**Example:**

```typescript
// @var UpdateNotifySettingsParams params
airgram.client.account.updateNotifySettings(params).then((result: boolean) => {
  console.log(result)
})
```

### account.updatePasswordSettings

**Signature:** account.updatePasswordSettings(params: `UpdatePasswordSettingsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UpdatePasswordSettingsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `current_password_hash` | number[] |  |
| `new_settings` | [AccountPasswordSettingsUnion](/docs/telegram-types.md#accountpasswordsettingsunion) |  |

TypeScript interface:

```typescript
interface UpdatePasswordSettingsParams {
  current_password_hash: number[],
  new_settings: AccountPasswordSettingsUnion
}
```


**Example:**

```typescript
// @var UpdatePasswordSettingsParams params
airgram.client.account.updatePasswordSettings(params).then((result: boolean) => {
  console.log(result)
})
```

### account.updateProfile

**Signature:** account.updateProfile(params: `UpdateProfileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserUnion`](/docs/telegram-types.md#userunion)

**`UpdateProfileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `about` | string | Optional |
| `first_name` | string | Optional |
| `last_name` | string | Optional |

TypeScript interface:

```typescript
interface UpdateProfileParams {
  flags: number,
  about?: string,
  first_name?: string,
  last_name?: string
}
```


**Example:**

```typescript
// @var UpdateProfileParams params
airgram.client.account.updateProfile(params).then((result: UserUnion) => {
  console.log(result)
})
```

### account.updateStatus

**Signature:** account.updateStatus(params: `UpdateStatusParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UpdateStatusParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `offline` | boolean |  |

TypeScript interface:

```typescript
interface UpdateStatusParams {
  offline: boolean
}
```


**Example:**

```typescript
// @var UpdateStatusParams params
airgram.client.account.updateStatus(params).then((result: boolean) => {
  console.log(result)
})
```

### account.updateUsername

**Signature:** account.updateUsername(params: `UpdateUsernameParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserUnion`](/docs/telegram-types.md#userunion)

**`UpdateUsernameParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `username` | string |  |

TypeScript interface:

```typescript
interface UpdateUsernameParams {
  username: string
}
```


**Example:**

```typescript
// @var UpdateUsernameParams params
airgram.client.account.updateUsername(params).then((result: UserUnion) => {
  console.log(result)
})
```


## Auth





### auth.bindTempAuthKey

**Signature:** auth.bindTempAuthKey(params: `BindTempAuthKeyParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`BindTempAuthKeyParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `encrypted_message` | number[] |  |
| `expires_at` | number |  |
| `nonce` | number |  |
| `perm_auth_key_id` | number |  |

TypeScript interface:

```typescript
interface BindTempAuthKeyParams {
  encrypted_message: number[],
  expires_at: number,
  nonce: number,
  perm_auth_key_id: number
}
```


**Example:**

```typescript
// @var BindTempAuthKeyParams params
airgram.client.auth.bindTempAuthKey(params).then((result: boolean) => {
  console.log(result)
})
```

### auth.cancelCode

**Signature:** auth.cancelCode(params: `CancelCodeParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`CancelCodeParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_code_hash` | string |  |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface CancelCodeParams {
  phone_code_hash: string,
  phone_number: string
}
```


**Example:**

```typescript
// @var CancelCodeParams params
airgram.client.auth.cancelCode(params).then((result: boolean) => {
  console.log(result)
})
```

### auth.checkPassword

**Signature:** auth.checkPassword(params: `CheckPasswordParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`CheckPasswordParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `password_hash` | number[] |  |

TypeScript interface:

```typescript
interface CheckPasswordParams {
  password_hash: number[]
}
```


**Example:**

```typescript
// @var CheckPasswordParams params
airgram.client.auth.checkPassword(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```

### auth.checkPhone

**Signature:** auth.checkPhone(params: `CheckPhoneParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthCheckedPhoneUnion`](/docs/telegram-types.md#authcheckedphoneunion)

**`CheckPhoneParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface CheckPhoneParams {
  phone_number: string
}
```


**Example:**

```typescript
// @var CheckPhoneParams params
airgram.client.auth.checkPhone(params).then((result: AuthCheckedPhoneUnion) => {
  console.log(result)
})
```

### auth.dropTempAuthKeys

**Signature:** auth.dropTempAuthKeys(params: `DropTempAuthKeysParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`DropTempAuthKeysParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `except_auth_keys` | number[] |  |

TypeScript interface:

```typescript
interface DropTempAuthKeysParams {
  except_auth_keys: number[]
}
```


**Example:**

```typescript
// @var DropTempAuthKeysParams params
airgram.client.auth.dropTempAuthKeys(params).then((result: boolean) => {
  console.log(result)
})
```

### auth.exportAuthorization

**Signature:** auth.exportAuthorization(params: `ExportAuthorizationParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthExportedAuthorizationUnion`](/docs/telegram-types.md#authexportedauthorizationunion)

**`ExportAuthorizationParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `dc_id` | number |  |

TypeScript interface:

```typescript
interface ExportAuthorizationParams {
  dc_id: number
}
```


**Example:**

```typescript
// @var ExportAuthorizationParams params
airgram.client.auth.exportAuthorization(params).then((result: AuthExportedAuthorizationUnion) => {
  console.log(result)
})
```

### auth.importAuthorization

**Signature:** auth.importAuthorization(params: `ImportAuthorizationParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`ImportAuthorizationParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `bytes` | number[] |  |
| `id` | number |  |

TypeScript interface:

```typescript
interface ImportAuthorizationParams {
  bytes: number[],
  id: number
}
```


**Example:**

```typescript
// @var ImportAuthorizationParams params
airgram.client.auth.importAuthorization(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```

### auth.importBotAuthorization

**Signature:** auth.importBotAuthorization(params: `ImportBotAuthorizationParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`ImportBotAuthorizationParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `api_hash` | string |  |
| `api_id` | number |  |
| `bot_auth_token` | string |  |
| `flags` | number |  |

TypeScript interface:

```typescript
interface ImportBotAuthorizationParams {
  api_hash: string,
  api_id: number,
  bot_auth_token: string,
  flags: number
}
```


**Example:**

```typescript
// @var ImportBotAuthorizationParams params
airgram.client.auth.importBotAuthorization(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```

### auth.logOut

**Signature:** auth.logOut(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`


**Example:**

```typescript
airgram.client.auth.logOut().then((result: boolean) => {
  console.log(result)
})
```

### auth.recoverPassword

**Signature:** auth.recoverPassword(params: `RecoverPasswordParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`RecoverPasswordParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `code` | string |  |

TypeScript interface:

```typescript
interface RecoverPasswordParams {
  code: string
}
```


**Example:**

```typescript
// @var RecoverPasswordParams params
airgram.client.auth.recoverPassword(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```

### auth.requestPasswordRecovery

**Signature:** auth.requestPasswordRecovery(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthPasswordRecoveryUnion`](/docs/telegram-types.md#authpasswordrecoveryunion)


**Example:**

```typescript
airgram.client.auth.requestPasswordRecovery().then((result: AuthPasswordRecoveryUnion) => {
  console.log(result)
})
```

### auth.resendCode

**Signature:** auth.resendCode(params: `ResendCodeParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthSentCodeUnion`](/docs/telegram-types.md#authsentcodeunion)

**`ResendCodeParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_code_hash` | string |  |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface ResendCodeParams {
  phone_code_hash: string,
  phone_number: string
}
```


**Example:**

```typescript
// @var ResendCodeParams params
airgram.client.auth.resendCode(params).then((result: AuthSentCodeUnion) => {
  console.log(result)
})
```

### auth.resetAuthorizations

**Signature:** auth.resetAuthorizations(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`


**Example:**

```typescript
airgram.client.auth.resetAuthorizations().then((result: boolean) => {
  console.log(result)
})
```

### auth.sendCode

**Signature:** auth.sendCode(params: `SendCodeParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthSentCodeUnion`](/docs/telegram-types.md#authsentcodeunion)

**`SendCodeParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `api_hash` | string |  |
| `api_id` | number |  |
| `flags` | number |  |
| `phone_number` | string |  |
| `allow_flashcall` | true | Optional |
| `current_number` | boolean | Optional |

TypeScript interface:

```typescript
interface SendCodeParams {
  api_hash: string,
  api_id: number,
  flags: number,
  phone_number: string,
  allow_flashcall?: true,
  current_number?: boolean
}
```


**Example:**

```typescript
// @var SendCodeParams params
airgram.client.auth.sendCode(params).then((result: AuthSentCodeUnion) => {
  console.log(result)
})
```

### auth.sendInvites

**Signature:** auth.sendInvites(params: `SendInvitesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SendInvitesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `message` | string |  |
| `phone_numbers` | string[] |  |

TypeScript interface:

```typescript
interface SendInvitesParams {
  message: string,
  phone_numbers: string[]
}
```


**Example:**

```typescript
// @var SendInvitesParams params
airgram.client.auth.sendInvites(params).then((result: boolean) => {
  console.log(result)
})
```

### auth.signIn

**Signature:** auth.signIn(params: `SignInParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`SignInParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `phone_code` | string |  |
| `phone_code_hash` | string |  |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface SignInParams {
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}
```


**Example:**

```typescript
// @var SignInParams params
airgram.client.auth.signIn(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```

### auth.signUp

**Signature:** auth.signUp(params: `SignUpParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`AuthAuthorizationUnion`](/docs/telegram-types.md#authauthorizationunion)

**`SignUpParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `first_name` | string |  |
| `last_name` | string |  |
| `phone_code` | string |  |
| `phone_code_hash` | string |  |
| `phone_number` | string |  |

TypeScript interface:

```typescript
interface SignUpParams {
  first_name: string,
  last_name: string,
  phone_code: string,
  phone_code_hash: string,
  phone_number: string
}
```


**Example:**

```typescript
// @var SignUpParams params
airgram.client.auth.signUp(params).then((result: AuthAuthorizationUnion) => {
  console.log(result)
})
```


## Bots





### bots.answerWebhookJSONQuery

**Signature:** bots.answerWebhookJSONQuery(params: `AnswerWebhookJsonQueryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`AnswerWebhookJsonQueryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `data` | [DataJsonUnion](/docs/telegram-types.md#datajsonunion) |  |
| `query_id` | number |  |

TypeScript interface:

```typescript
interface AnswerWebhookJsonQueryParams {
  data: DataJsonUnion,
  query_id: number
}
```


**Example:**

```typescript
// @var AnswerWebhookJsonQueryParams params
airgram.client.bots.answerWebhookJSONQuery(params).then((result: boolean) => {
  console.log(result)
})
```

### bots.sendCustomRequest

**Signature:** bots.sendCustomRequest(params: `SendCustomRequestParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`DataJsonUnion`](/docs/telegram-types.md#datajsonunion)

**`SendCustomRequestParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `custom_method` | string |  |
| `params` | [DataJsonUnion](/docs/telegram-types.md#datajsonunion) |  |

TypeScript interface:

```typescript
interface SendCustomRequestParams {
  custom_method: string,
  params: DataJsonUnion
}
```


**Example:**

```typescript
// @var SendCustomRequestParams params
airgram.client.bots.sendCustomRequest(params).then((result: DataJsonUnion) => {
  console.log(result)
})
```


## Channels





### channels.checkUsername

**Signature:** channels.checkUsername(params: `CheckUsernameParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`CheckUsernameParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `username` | string |  |

TypeScript interface:

```typescript
interface CheckUsernameParams {
  channel: InputChannelUnion,
  username: string
}
```


**Example:**

```typescript
// @var CheckUsernameParams params
airgram.client.channels.checkUsername(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.createChannel

**Signature:** channels.createChannel(params: `CreateChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`CreateChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `about` | string |  |
| `flags` | number |  |
| `title` | string |  |
| `broadcast` | true | Optional |
| `megagroup` | true | Optional |

TypeScript interface:

```typescript
interface CreateChannelParams {
  about: string,
  flags: number,
  title: string,
  broadcast?: true,
  megagroup?: true
}
```


**Example:**

```typescript
// @var CreateChannelParams params
airgram.client.channels.createChannel(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.deleteChannel

**Signature:** channels.deleteChannel(params: `DeleteChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`DeleteChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface DeleteChannelParams {
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var DeleteChannelParams params
airgram.client.channels.deleteChannel(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.deleteMessages

**Signature:** channels.deleteMessages(params: `DeleteMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedMessagesUnion`](/docs/telegram-types.md#messagesaffectedmessagesunion)

**`DeleteMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface DeleteMessagesParams {
  channel: InputChannelUnion,
  id: number[]
}
```


**Example:**

```typescript
// @var DeleteMessagesParams params
airgram.client.channels.deleteMessages(params).then((result: MessagesAffectedMessagesUnion) => {
  console.log(result)
})
```

### channels.deleteUserHistory

**Signature:** channels.deleteUserHistory(params: `DeleteUserHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedHistoryUnion`](/docs/telegram-types.md#messagesaffectedhistoryunion)

**`DeleteUserHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface DeleteUserHistoryParams {
  channel: InputChannelUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var DeleteUserHistoryParams params
airgram.client.channels.deleteUserHistory(params).then((result: MessagesAffectedHistoryUnion) => {
  console.log(result)
})
```

### channels.editAbout

**Signature:** channels.editAbout(params: `EditAboutParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`EditAboutParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `about` | string |  |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface EditAboutParams {
  about: string,
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var EditAboutParams params
airgram.client.channels.editAbout(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.editAdmin

**Signature:** channels.editAdmin(params: `EditAdminParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditAdminParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `admin_rights` | [ChannelAdminRightsUnion](/docs/telegram-types.md#channeladminrightsunion) |  |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface EditAdminParams {
  admin_rights: ChannelAdminRightsUnion,
  channel: InputChannelUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var EditAdminParams params
airgram.client.channels.editAdmin(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.editBanned

**Signature:** channels.editBanned(params: `EditBannedParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditBannedParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `banned_rights` | [ChannelBannedRightsUnion](/docs/telegram-types.md#channelbannedrightsunion) |  |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface EditBannedParams {
  banned_rights: ChannelBannedRightsUnion,
  channel: InputChannelUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var EditBannedParams params
airgram.client.channels.editBanned(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.editPhoto

**Signature:** channels.editPhoto(params: `EditPhotoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditPhotoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `photo` | [InputChatPhotoUnion](/docs/telegram-types.md#inputchatphotounion) |  |

TypeScript interface:

```typescript
interface EditPhotoParams {
  channel: InputChannelUnion,
  photo: InputChatPhotoUnion
}
```


**Example:**

```typescript
// @var EditPhotoParams params
airgram.client.channels.editPhoto(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.editTitle

**Signature:** channels.editTitle(params: `EditTitleParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditTitleParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `title` | string |  |

TypeScript interface:

```typescript
interface EditTitleParams {
  channel: InputChannelUnion,
  title: string
}
```


**Example:**

```typescript
// @var EditTitleParams params
airgram.client.channels.editTitle(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.exportInvite

**Signature:** channels.exportInvite(params: `ExportInviteParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ExportedChatInviteUnion`](/docs/telegram-types.md#exportedchatinviteunion)

**`ExportInviteParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface ExportInviteParams {
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var ExportInviteParams params
airgram.client.channels.exportInvite(params).then((result: ExportedChatInviteUnion) => {
  console.log(result)
})
```

### channels.exportMessageLink

**Signature:** channels.exportMessageLink(params: `ExportMessageLinkParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ExportedMessageLinkUnion`](/docs/telegram-types.md#exportedmessagelinkunion)

**`ExportMessageLinkParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `id` | number |  |

TypeScript interface:

```typescript
interface ExportMessageLinkParams {
  channel: InputChannelUnion,
  id: number
}
```


**Example:**

```typescript
// @var ExportMessageLinkParams params
airgram.client.channels.exportMessageLink(params).then((result: ExportedMessageLinkUnion) => {
  console.log(result)
})
```

### channels.getAdminLog

**Signature:** channels.getAdminLog(params: `GetAdminLogParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ChannelsAdminLogResultsUnion`](/docs/telegram-types.md#channelsadminlogresultsunion)

**`GetAdminLogParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `flags` | number |  |
| `limit` | number |  |
| `max_id` | number |  |
| `min_id` | number |  |
| `q` | string |  |
| `admins` | [InputUserUnion](/docs/telegram-types.md#inputuserunion)[] | Optional |
| `events_filter` | [ChannelAdminLogEventsFilterUnion](/docs/telegram-types.md#channeladminlogeventsfilterunion) | Optional |

TypeScript interface:

```typescript
interface GetAdminLogParams {
  channel: InputChannelUnion,
  flags: number,
  limit: number,
  max_id: number,
  min_id: number,
  q: string,
  admins?: InputUserUnion[],
  events_filter?: ChannelAdminLogEventsFilterUnion
}
```


**Example:**

```typescript
// @var GetAdminLogParams params
airgram.client.channels.getAdminLog(params).then((result: ChannelsAdminLogResultsUnion) => {
  console.log(result)
})
```

### channels.getAdminedPublicChannels

**Signature:** channels.getAdminedPublicChannels(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatsUnion`](/docs/telegram-types.md#messageschatsunion)


**Example:**

```typescript
airgram.client.channels.getAdminedPublicChannels().then((result: MessagesChatsUnion) => {
  console.log(result)
})
```

### channels.getChannels

**Signature:** channels.getChannels(params: `GetChannelsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatsUnion`](/docs/telegram-types.md#messageschatsunion)

**`GetChannelsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion)[] |  |

TypeScript interface:

```typescript
interface GetChannelsParams {
  id: InputChannelUnion[]
}
```


**Example:**

```typescript
// @var GetChannelsParams params
airgram.client.channels.getChannels(params).then((result: MessagesChatsUnion) => {
  console.log(result)
})
```

### channels.getFullChannel

**Signature:** channels.getFullChannel(params: `GetFullChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatFullUnion`](/docs/telegram-types.md#messageschatfullunion)

**`GetFullChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface GetFullChannelParams {
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var GetFullChannelParams params
airgram.client.channels.getFullChannel(params).then((result: MessagesChatFullUnion) => {
  console.log(result)
})
```

### channels.getMessages

**Signature:** channels.getMessages(params: `GetMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`GetMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface GetMessagesParams {
  channel: InputChannelUnion,
  id: number[]
}
```


**Example:**

```typescript
// @var GetMessagesParams params
airgram.client.channels.getMessages(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### channels.getParticipant

**Signature:** channels.getParticipant(params: `GetParticipantParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ChannelsChannelParticipantUnion`](/docs/telegram-types.md#channelschannelparticipantunion)

**`GetParticipantParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetParticipantParams {
  channel: InputChannelUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetParticipantParams params
airgram.client.channels.getParticipant(params).then((result: ChannelsChannelParticipantUnion) => {
  console.log(result)
})
```

### channels.getParticipants

**Signature:** channels.getParticipants(params: `GetParticipantsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ChannelsChannelParticipantsUnion`](/docs/telegram-types.md#channelschannelparticipantsunion)

**`GetParticipantsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `filter` | [ChannelParticipantsFilterUnion](/docs/telegram-types.md#channelparticipantsfilterunion) |  |
| `limit` | number |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetParticipantsParams {
  channel: InputChannelUnion,
  filter: ChannelParticipantsFilterUnion,
  limit: number,
  offset: number
}
```


**Example:**

```typescript
// @var GetParticipantsParams params
airgram.client.channels.getParticipants(params).then((result: ChannelsChannelParticipantsUnion) => {
  console.log(result)
})
```

### channels.inviteToChannel

**Signature:** channels.inviteToChannel(params: `InviteToChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`InviteToChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `users` | [InputUserUnion](/docs/telegram-types.md#inputuserunion)[] |  |

TypeScript interface:

```typescript
interface InviteToChannelParams {
  channel: InputChannelUnion,
  users: InputUserUnion[]
}
```


**Example:**

```typescript
// @var InviteToChannelParams params
airgram.client.channels.inviteToChannel(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.joinChannel

**Signature:** channels.joinChannel(params: `JoinChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`JoinChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface JoinChannelParams {
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var JoinChannelParams params
airgram.client.channels.joinChannel(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.leaveChannel

**Signature:** channels.leaveChannel(params: `LeaveChannelParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`LeaveChannelParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |

TypeScript interface:

```typescript
interface LeaveChannelParams {
  channel: InputChannelUnion
}
```


**Example:**

```typescript
// @var LeaveChannelParams params
airgram.client.channels.leaveChannel(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.readHistory

**Signature:** channels.readHistory(params: `ReadHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReadHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `max_id` | number |  |

TypeScript interface:

```typescript
interface ReadHistoryParams {
  channel: InputChannelUnion,
  max_id: number
}
```


**Example:**

```typescript
// @var ReadHistoryParams params
airgram.client.channels.readHistory(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.readMessageContents

**Signature:** channels.readMessageContents(params: `ReadMessageContentsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReadMessageContentsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface ReadMessageContentsParams {
  channel: InputChannelUnion,
  id: number[]
}
```


**Example:**

```typescript
// @var ReadMessageContentsParams params
airgram.client.channels.readMessageContents(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.reportSpam

**Signature:** channels.reportSpam(params: `ReportSpamParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReportSpamParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `id` | number[] |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface ReportSpamParams {
  channel: InputChannelUnion,
  id: number[],
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var ReportSpamParams params
airgram.client.channels.reportSpam(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.setStickers

**Signature:** channels.setStickers(params: `SetStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `stickerset` | [InputStickerSetUnion](/docs/telegram-types.md#inputstickersetunion) |  |

TypeScript interface:

```typescript
interface SetStickersParams {
  channel: InputChannelUnion,
  stickerset: InputStickerSetUnion
}
```


**Example:**

```typescript
// @var SetStickersParams params
airgram.client.channels.setStickers(params).then((result: boolean) => {
  console.log(result)
})
```

### channels.toggleInvites

**Signature:** channels.toggleInvites(params: `ToggleInvitesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ToggleInvitesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `enabled` | boolean |  |

TypeScript interface:

```typescript
interface ToggleInvitesParams {
  channel: InputChannelUnion,
  enabled: boolean
}
```


**Example:**

```typescript
// @var ToggleInvitesParams params
airgram.client.channels.toggleInvites(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.toggleSignatures

**Signature:** channels.toggleSignatures(params: `ToggleSignaturesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ToggleSignaturesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `enabled` | boolean |  |

TypeScript interface:

```typescript
interface ToggleSignaturesParams {
  channel: InputChannelUnion,
  enabled: boolean
}
```


**Example:**

```typescript
// @var ToggleSignaturesParams params
airgram.client.channels.toggleSignatures(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.updatePinnedMessage

**Signature:** channels.updatePinnedMessage(params: `UpdatePinnedMessageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`UpdatePinnedMessageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `flags` | number |  |
| `id` | number |  |
| `silent` | true | Optional |

TypeScript interface:

```typescript
interface UpdatePinnedMessageParams {
  channel: InputChannelUnion,
  flags: number,
  id: number,
  silent?: true
}
```


**Example:**

```typescript
// @var UpdatePinnedMessageParams params
airgram.client.channels.updatePinnedMessage(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### channels.updateUsername

**Signature:** channels.updateUsername(params: `UpdateUsernameParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UpdateUsernameParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `username` | string |  |

TypeScript interface:

```typescript
interface UpdateUsernameParams {
  channel: InputChannelUnion,
  username: string
}
```


**Example:**

```typescript
// @var UpdateUsernameParams params
airgram.client.channels.updateUsername(params).then((result: boolean) => {
  console.log(result)
})
```


## Contacts





### contacts.block

**Signature:** contacts.block(params: `BlockParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`BlockParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface BlockParams {
  id: InputUserUnion
}
```


**Example:**

```typescript
// @var BlockParams params
airgram.client.contacts.block(params).then((result: boolean) => {
  console.log(result)
})
```

### contacts.deleteContact

**Signature:** contacts.deleteContact(params: `DeleteContactParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsLinkUnion`](/docs/telegram-types.md#contactslinkunion)

**`DeleteContactParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface DeleteContactParams {
  id: InputUserUnion
}
```


**Example:**

```typescript
// @var DeleteContactParams params
airgram.client.contacts.deleteContact(params).then((result: ContactsLinkUnion) => {
  console.log(result)
})
```

### contacts.deleteContacts

**Signature:** contacts.deleteContacts(params: `DeleteContactsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`DeleteContactsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion)[] |  |

TypeScript interface:

```typescript
interface DeleteContactsParams {
  id: InputUserUnion[]
}
```


**Example:**

```typescript
// @var DeleteContactsParams params
airgram.client.contacts.deleteContacts(params).then((result: boolean) => {
  console.log(result)
})
```

### contacts.exportCard

**Signature:** contacts.exportCard(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `number`[]


**Example:**

```typescript
airgram.client.contacts.exportCard().then((result: number[]) => {
  console.log(result)
})
```

### contacts.getBlocked

**Signature:** contacts.getBlocked(params: `GetBlockedParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsBlockedUnion`](/docs/telegram-types.md#contactsblockedunion)

**`GetBlockedParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetBlockedParams {
  limit: number,
  offset: number
}
```


**Example:**

```typescript
// @var GetBlockedParams params
airgram.client.contacts.getBlocked(params).then((result: ContactsBlockedUnion) => {
  console.log(result)
})
```

### contacts.getContacts

**Signature:** contacts.getContacts(params: `GetContactsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsContactsUnion`](/docs/telegram-types.md#contactscontactsunion)

**`GetContactsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetContactsParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetContactsParams params
airgram.client.contacts.getContacts(params).then((result: ContactsContactsUnion) => {
  console.log(result)
})
```

### contacts.getStatuses

**Signature:** contacts.getStatuses(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactStatusUnion`](/docs/telegram-types.md#contactstatusunion)[]


**Example:**

```typescript
airgram.client.contacts.getStatuses().then((result: ContactStatusUnion[]) => {
  console.log(result)
})
```

### contacts.getTopPeers

**Signature:** contacts.getTopPeers(params: `GetTopPeersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsTopPeersUnion`](/docs/telegram-types.md#contactstoppeersunion)

**`GetTopPeersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `hash` | number |  |
| `limit` | number |  |
| `offset` | number |  |
| `bots_inline` | true | Optional |
| `bots_pm` | true | Optional |
| `channels` | true | Optional |
| `correspondents` | true | Optional |
| `groups` | true | Optional |
| `phone_calls` | true | Optional |

TypeScript interface:

```typescript
interface GetTopPeersParams {
  flags: number,
  hash: number,
  limit: number,
  offset: number,
  bots_inline?: true,
  bots_pm?: true,
  channels?: true,
  correspondents?: true,
  groups?: true,
  phone_calls?: true
}
```


**Example:**

```typescript
// @var GetTopPeersParams params
airgram.client.contacts.getTopPeers(params).then((result: ContactsTopPeersUnion) => {
  console.log(result)
})
```

### contacts.importCard

**Signature:** contacts.importCard(params: `ImportCardParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserUnion`](/docs/telegram-types.md#userunion)

**`ImportCardParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `export_card` | number[] |  |

TypeScript interface:

```typescript
interface ImportCardParams {
  export_card: number[]
}
```


**Example:**

```typescript
// @var ImportCardParams params
airgram.client.contacts.importCard(params).then((result: UserUnion) => {
  console.log(result)
})
```

### contacts.importContacts

**Signature:** contacts.importContacts(params: `ImportContactsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsImportedContactsUnion`](/docs/telegram-types.md#contactsimportedcontactsunion)

**`ImportContactsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `contacts` | [InputContactUnion](/docs/telegram-types.md#inputcontactunion)[] |  |

TypeScript interface:

```typescript
interface ImportContactsParams {
  contacts: InputContactUnion[]
}
```


**Example:**

```typescript
// @var ImportContactsParams params
airgram.client.contacts.importContacts(params).then((result: ContactsImportedContactsUnion) => {
  console.log(result)
})
```

### contacts.resetSaved

**Signature:** contacts.resetSaved(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`


**Example:**

```typescript
airgram.client.contacts.resetSaved().then((result: boolean) => {
  console.log(result)
})
```

### contacts.resetTopPeerRating

**Signature:** contacts.resetTopPeerRating(params: `ResetTopPeerRatingParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ResetTopPeerRatingParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `category` | [TopPeerCategoryUnion](/docs/telegram-types.md#toppeercategoryunion) |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface ResetTopPeerRatingParams {
  category: TopPeerCategoryUnion,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var ResetTopPeerRatingParams params
airgram.client.contacts.resetTopPeerRating(params).then((result: boolean) => {
  console.log(result)
})
```

### contacts.resolveUsername

**Signature:** contacts.resolveUsername(params: `ResolveUsernameParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsResolvedPeerUnion`](/docs/telegram-types.md#contactsresolvedpeerunion)

**`ResolveUsernameParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `username` | string |  |

TypeScript interface:

```typescript
interface ResolveUsernameParams {
  username: string
}
```


**Example:**

```typescript
// @var ResolveUsernameParams params
airgram.client.contacts.resolveUsername(params).then((result: ContactsResolvedPeerUnion) => {
  console.log(result)
})
```

### contacts.search

**Signature:** contacts.search(params: `SearchParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ContactsFoundUnion`](/docs/telegram-types.md#contactsfoundunion)

**`SearchParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `q` | string |  |

TypeScript interface:

```typescript
interface SearchParams {
  limit: number,
  q: string
}
```


**Example:**

```typescript
// @var SearchParams params
airgram.client.contacts.search(params).then((result: ContactsFoundUnion) => {
  console.log(result)
})
```

### contacts.unblock

**Signature:** contacts.unblock(params: `UnblockParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UnblockParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface UnblockParams {
  id: InputUserUnion
}
```


**Example:**

```typescript
// @var UnblockParams params
airgram.client.contacts.unblock(params).then((result: boolean) => {
  console.log(result)
})
```


## Help





### help.getAppChangelog

**Signature:** help.getAppChangelog(params: `GetAppChangelogParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`GetAppChangelogParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `prev_app_version` | string |  |

TypeScript interface:

```typescript
interface GetAppChangelogParams {
  prev_app_version: string
}
```


**Example:**

```typescript
// @var GetAppChangelogParams params
airgram.client.help.getAppChangelog(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### help.getAppUpdate

**Signature:** help.getAppUpdate(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`HelpAppUpdateUnion`](/docs/telegram-types.md#helpappupdateunion)


**Example:**

```typescript
airgram.client.help.getAppUpdate().then((result: HelpAppUpdateUnion) => {
  console.log(result)
})
```

### help.getCdnConfig

**Signature:** help.getCdnConfig(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`CdnConfigUnion`](/docs/telegram-types.md#cdnconfigunion)


**Example:**

```typescript
airgram.client.help.getCdnConfig().then((result: CdnConfigUnion) => {
  console.log(result)
})
```

### help.getConfig

**Signature:** help.getConfig(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ConfigUnion`](/docs/telegram-types.md#configunion)


**Example:**

```typescript
airgram.client.help.getConfig().then((result: ConfigUnion) => {
  console.log(result)
})
```

### help.getInviteText

**Signature:** help.getInviteText(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`HelpInviteTextUnion`](/docs/telegram-types.md#helpinvitetextunion)


**Example:**

```typescript
airgram.client.help.getInviteText().then((result: HelpInviteTextUnion) => {
  console.log(result)
})
```

### help.getNearestDc

**Signature:** help.getNearestDc(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`NearestDcUnion`](/docs/telegram-types.md#nearestdcunion)


**Example:**

```typescript
airgram.client.help.getNearestDc().then((result: NearestDcUnion) => {
  console.log(result)
})
```

### help.getSupport

**Signature:** help.getSupport(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`HelpSupportUnion`](/docs/telegram-types.md#helpsupportunion)


**Example:**

```typescript
airgram.client.help.getSupport().then((result: HelpSupportUnion) => {
  console.log(result)
})
```

### help.getTermsOfService

**Signature:** help.getTermsOfService(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`HelpTermsOfServiceUnion`](/docs/telegram-types.md#helptermsofserviceunion)


**Example:**

```typescript
airgram.client.help.getTermsOfService().then((result: HelpTermsOfServiceUnion) => {
  console.log(result)
})
```

### help.saveAppLog

**Signature:** help.saveAppLog(params: `SaveAppLogParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveAppLogParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `events` | [InputAppEventUnion](/docs/telegram-types.md#inputappeventunion)[] |  |

TypeScript interface:

```typescript
interface SaveAppLogParams {
  events: InputAppEventUnion[]
}
```


**Example:**

```typescript
// @var SaveAppLogParams params
airgram.client.help.saveAppLog(params).then((result: boolean) => {
  console.log(result)
})
```

### help.setBotUpdatesStatus

**Signature:** help.setBotUpdatesStatus(params: `SetBotUpdatesStatusParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetBotUpdatesStatusParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `message` | string |  |
| `pending_updates_count` | number |  |

TypeScript interface:

```typescript
interface SetBotUpdatesStatusParams {
  message: string,
  pending_updates_count: number
}
```


**Example:**

```typescript
// @var SetBotUpdatesStatusParams params
airgram.client.help.setBotUpdatesStatus(params).then((result: boolean) => {
  console.log(result)
})
```


## Langpack





### langpack.getDifference

**Signature:** langpack.getDifference(params: `GetDifferenceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`LangPackDifferenceUnion`](/docs/telegram-types.md#langpackdifferenceunion)

**`GetDifferenceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `from_version` | number |  |

TypeScript interface:

```typescript
interface GetDifferenceParams {
  from_version: number
}
```


**Example:**

```typescript
// @var GetDifferenceParams params
airgram.client.langpack.getDifference(params).then((result: LangPackDifferenceUnion) => {
  console.log(result)
})
```

### langpack.getLangPack

**Signature:** langpack.getLangPack(params: `GetLangPackParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`LangPackDifferenceUnion`](/docs/telegram-types.md#langpackdifferenceunion)

**`GetLangPackParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `lang_code` | string |  |

TypeScript interface:

```typescript
interface GetLangPackParams {
  lang_code: string
}
```


**Example:**

```typescript
// @var GetLangPackParams params
airgram.client.langpack.getLangPack(params).then((result: LangPackDifferenceUnion) => {
  console.log(result)
})
```

### langpack.getLanguages

**Signature:** langpack.getLanguages(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`LangPackLanguageUnion`](/docs/telegram-types.md#langpacklanguageunion)[]


**Example:**

```typescript
airgram.client.langpack.getLanguages().then((result: LangPackLanguageUnion[]) => {
  console.log(result)
})
```

### langpack.getStrings

**Signature:** langpack.getStrings(params: `GetStringsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`LangPackStringUnion`](/docs/telegram-types.md#langpackstringunion)[]

**`GetStringsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `keys` | string[] |  |
| `lang_code` | string |  |

TypeScript interface:

```typescript
interface GetStringsParams {
  keys: string[],
  lang_code: string
}
```


**Example:**

```typescript
// @var GetStringsParams params
airgram.client.langpack.getStrings(params).then((result: LangPackStringUnion[]) => {
  console.log(result)
})
```


## Messages





### messages.acceptEncryption

**Signature:** messages.acceptEncryption(params: `AcceptEncryptionParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`EncryptedChatUnion`](/docs/telegram-types.md#encryptedchatunion)

**`AcceptEncryptionParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `g_b` | number[] |  |
| `key_fingerprint` | number |  |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |

TypeScript interface:

```typescript
interface AcceptEncryptionParams {
  g_b: number[],
  key_fingerprint: number,
  peer: InputEncryptedChatUnion
}
```


**Example:**

```typescript
// @var AcceptEncryptionParams params
airgram.client.messages.acceptEncryption(params).then((result: EncryptedChatUnion) => {
  console.log(result)
})
```

### messages.addChatUser

**Signature:** messages.addChatUser(params: `AddChatUserParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`AddChatUserParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `fwd_limit` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface AddChatUserParams {
  chat_id: number,
  fwd_limit: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var AddChatUserParams params
airgram.client.messages.addChatUser(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.checkChatInvite

**Signature:** messages.checkChatInvite(params: `CheckChatInviteParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ChatInviteUnion`](/docs/telegram-types.md#chatinviteunion)

**`CheckChatInviteParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | string |  |

TypeScript interface:

```typescript
interface CheckChatInviteParams {
  hash: string
}
```


**Example:**

```typescript
// @var CheckChatInviteParams params
airgram.client.messages.checkChatInvite(params).then((result: ChatInviteUnion) => {
  console.log(result)
})
```

### messages.clearRecentStickers

**Signature:** messages.clearRecentStickers(params: `ClearRecentStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ClearRecentStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `attached` | true | Optional |

TypeScript interface:

```typescript
interface ClearRecentStickersParams {
  flags: number,
  attached?: true
}
```


**Example:**

```typescript
// @var ClearRecentStickersParams params
airgram.client.messages.clearRecentStickers(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.createChat

**Signature:** messages.createChat(params: `CreateChatParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`CreateChatParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `title` | string |  |
| `users` | [InputUserUnion](/docs/telegram-types.md#inputuserunion)[] |  |

TypeScript interface:

```typescript
interface CreateChatParams {
  title: string,
  users: InputUserUnion[]
}
```


**Example:**

```typescript
// @var CreateChatParams params
airgram.client.messages.createChat(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.deleteChatUser

**Signature:** messages.deleteChatUser(params: `DeleteChatUserParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`DeleteChatUserParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface DeleteChatUserParams {
  chat_id: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var DeleteChatUserParams params
airgram.client.messages.deleteChatUser(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.deleteHistory

**Signature:** messages.deleteHistory(params: `DeleteHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedHistoryUnion`](/docs/telegram-types.md#messagesaffectedhistoryunion)

**`DeleteHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `max_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `just_clear` | true | Optional |

TypeScript interface:

```typescript
interface DeleteHistoryParams {
  flags: number,
  max_id: number,
  peer: InputPeerUnion,
  just_clear?: true
}
```


**Example:**

```typescript
// @var DeleteHistoryParams params
airgram.client.messages.deleteHistory(params).then((result: MessagesAffectedHistoryUnion) => {
  console.log(result)
})
```

### messages.deleteMessages

**Signature:** messages.deleteMessages(params: `DeleteMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedMessagesUnion`](/docs/telegram-types.md#messagesaffectedmessagesunion)

**`DeleteMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | number[] |  |
| `revoke` | true | Optional |

TypeScript interface:

```typescript
interface DeleteMessagesParams {
  flags: number,
  id: number[],
  revoke?: true
}
```


**Example:**

```typescript
// @var DeleteMessagesParams params
airgram.client.messages.deleteMessages(params).then((result: MessagesAffectedMessagesUnion) => {
  console.log(result)
})
```

### messages.discardEncryption

**Signature:** messages.discardEncryption(params: `DiscardEncryptionParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`DiscardEncryptionParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |

TypeScript interface:

```typescript
interface DiscardEncryptionParams {
  chat_id: number
}
```


**Example:**

```typescript
// @var DiscardEncryptionParams params
airgram.client.messages.discardEncryption(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.editChatAdmin

**Signature:** messages.editChatAdmin(params: `EditChatAdminParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`EditChatAdminParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `is_admin` | boolean |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface EditChatAdminParams {
  chat_id: number,
  is_admin: boolean,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var EditChatAdminParams params
airgram.client.messages.editChatAdmin(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.editChatPhoto

**Signature:** messages.editChatPhoto(params: `EditChatPhotoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditChatPhotoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `photo` | [InputChatPhotoUnion](/docs/telegram-types.md#inputchatphotounion) |  |

TypeScript interface:

```typescript
interface EditChatPhotoParams {
  chat_id: number,
  photo: InputChatPhotoUnion
}
```


**Example:**

```typescript
// @var EditChatPhotoParams params
airgram.client.messages.editChatPhoto(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.editChatTitle

**Signature:** messages.editChatTitle(params: `EditChatTitleParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditChatTitleParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `title` | string |  |

TypeScript interface:

```typescript
interface EditChatTitleParams {
  chat_id: number,
  title: string
}
```


**Example:**

```typescript
// @var EditChatTitleParams params
airgram.client.messages.editChatTitle(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.editInlineBotMessage

**Signature:** messages.editInlineBotMessage(params: `EditInlineBotMessageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`EditInlineBotMessageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | [InputBotInlineMessageIdUnion](/docs/telegram-types.md#inputbotinlinemessageidunion) |  |
| `entities` | [MessageEntityUnion](/docs/telegram-types.md#messageentityunion)[] | Optional |
| `message` | string | Optional |
| `no_webpage` | true | Optional |
| `reply_markup` | [ReplyMarkupUnion](/docs/telegram-types.md#replymarkupunion) | Optional |

TypeScript interface:

```typescript
interface EditInlineBotMessageParams {
  flags: number,
  id: InputBotInlineMessageIdUnion,
  entities?: MessageEntityUnion[],
  message?: string,
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion
}
```


**Example:**

```typescript
// @var EditInlineBotMessageParams params
airgram.client.messages.editInlineBotMessage(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.editMessage

**Signature:** messages.editMessage(params: `EditMessageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`EditMessageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `entities` | [MessageEntityUnion](/docs/telegram-types.md#messageentityunion)[] | Optional |
| `message` | string | Optional |
| `no_webpage` | true | Optional |
| `reply_markup` | [ReplyMarkupUnion](/docs/telegram-types.md#replymarkupunion) | Optional |

TypeScript interface:

```typescript
interface EditMessageParams {
  flags: number,
  id: number,
  peer: InputPeerUnion,
  entities?: MessageEntityUnion[],
  message?: string,
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion
}
```


**Example:**

```typescript
// @var EditMessageParams params
airgram.client.messages.editMessage(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.exportChatInvite

**Signature:** messages.exportChatInvite(params: `ExportChatInviteParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ExportedChatInviteUnion`](/docs/telegram-types.md#exportedchatinviteunion)

**`ExportChatInviteParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |

TypeScript interface:

```typescript
interface ExportChatInviteParams {
  chat_id: number
}
```


**Example:**

```typescript
// @var ExportChatInviteParams params
airgram.client.messages.exportChatInvite(params).then((result: ExportedChatInviteUnion) => {
  console.log(result)
})
```

### messages.faveSticker

**Signature:** messages.faveSticker(params: `FaveStickerParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`FaveStickerParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputDocumentUnion](/docs/telegram-types.md#inputdocumentunion) |  |
| `unfave` | boolean |  |

TypeScript interface:

```typescript
interface FaveStickerParams {
  id: InputDocumentUnion,
  unfave: boolean
}
```


**Example:**

```typescript
// @var FaveStickerParams params
airgram.client.messages.faveSticker(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.forwardMessage

**Signature:** messages.forwardMessage(params: `ForwardMessageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ForwardMessageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `random_id` | number |  |

TypeScript interface:

```typescript
interface ForwardMessageParams {
  id: number,
  peer: InputPeerUnion,
  random_id: number
}
```


**Example:**

```typescript
// @var ForwardMessageParams params
airgram.client.messages.forwardMessage(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.forwardMessages

**Signature:** messages.forwardMessages(params: `ForwardMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ForwardMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `from_peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `id` | number[] |  |
| `random_id` | number[] |  |
| `to_peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `background` | true | Optional |
| `silent` | true | Optional |
| `with_my_score` | true | Optional |

TypeScript interface:

```typescript
interface ForwardMessagesParams {
  flags: number,
  from_peer: InputPeerUnion,
  id: number[],
  random_id: number[],
  to_peer: InputPeerUnion,
  background?: true,
  silent?: true,
  with_my_score?: true
}
```


**Example:**

```typescript
// @var ForwardMessagesParams params
airgram.client.messages.forwardMessages(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.getAllChats

**Signature:** messages.getAllChats(params: `GetAllChatsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatsUnion`](/docs/telegram-types.md#messageschatsunion)

**`GetAllChatsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `except_ids` | number[] |  |

TypeScript interface:

```typescript
interface GetAllChatsParams {
  except_ids: number[]
}
```


**Example:**

```typescript
// @var GetAllChatsParams params
airgram.client.messages.getAllChats(params).then((result: MessagesChatsUnion) => {
  console.log(result)
})
```

### messages.getAllDrafts

**Signature:** messages.getAllDrafts(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)


**Example:**

```typescript
airgram.client.messages.getAllDrafts().then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.getAllStickers

**Signature:** messages.getAllStickers(params: `GetAllStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAllStickersUnion`](/docs/telegram-types.md#messagesallstickersunion)

**`GetAllStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetAllStickersParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetAllStickersParams params
airgram.client.messages.getAllStickers(params).then((result: MessagesAllStickersUnion) => {
  console.log(result)
})
```

### messages.getArchivedStickers

**Signature:** messages.getArchivedStickers(params: `GetArchivedStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesArchivedStickersUnion`](/docs/telegram-types.md#messagesarchivedstickersunion)

**`GetArchivedStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `limit` | number |  |
| `offset_id` | number |  |
| `masks` | true | Optional |

TypeScript interface:

```typescript
interface GetArchivedStickersParams {
  flags: number,
  limit: number,
  offset_id: number,
  masks?: true
}
```


**Example:**

```typescript
// @var GetArchivedStickersParams params
airgram.client.messages.getArchivedStickers(params).then((result: MessagesArchivedStickersUnion) => {
  console.log(result)
})
```

### messages.getAttachedStickers

**Signature:** messages.getAttachedStickers(params: `GetAttachedStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`StickerSetCoveredUnion`](/docs/telegram-types.md#stickersetcoveredunion)[]

**`GetAttachedStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `media` | [InputStickeredMediaUnion](/docs/telegram-types.md#inputstickeredmediaunion) |  |

TypeScript interface:

```typescript
interface GetAttachedStickersParams {
  media: InputStickeredMediaUnion
}
```


**Example:**

```typescript
// @var GetAttachedStickersParams params
airgram.client.messages.getAttachedStickers(params).then((result: StickerSetCoveredUnion[]) => {
  console.log(result)
})
```

### messages.getBotCallbackAnswer

**Signature:** messages.getBotCallbackAnswer(params: `GetBotCallbackAnswerParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesBotCallbackAnswerUnion`](/docs/telegram-types.md#messagesbotcallbackanswerunion)

**`GetBotCallbackAnswerParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `msg_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `data` | number[] | Optional |
| `game` | true | Optional |

TypeScript interface:

```typescript
interface GetBotCallbackAnswerParams {
  flags: number,
  msg_id: number,
  peer: InputPeerUnion,
  data?: number[],
  game?: true
}
```


**Example:**

```typescript
// @var GetBotCallbackAnswerParams params
airgram.client.messages.getBotCallbackAnswer(params).then((result: MessagesBotCallbackAnswerUnion) => {
  console.log(result)
})
```

### messages.getChats

**Signature:** messages.getChats(params: `GetChatsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatsUnion`](/docs/telegram-types.md#messageschatsunion)

**`GetChatsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface GetChatsParams {
  id: number[]
}
```


**Example:**

```typescript
// @var GetChatsParams params
airgram.client.messages.getChats(params).then((result: MessagesChatsUnion) => {
  console.log(result)
})
```

### messages.getCommonChats

**Signature:** messages.getCommonChats(params: `GetCommonChatsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatsUnion`](/docs/telegram-types.md#messageschatsunion)

**`GetCommonChatsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `max_id` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetCommonChatsParams {
  limit: number,
  max_id: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetCommonChatsParams params
airgram.client.messages.getCommonChats(params).then((result: MessagesChatsUnion) => {
  console.log(result)
})
```

### messages.getDhConfig

**Signature:** messages.getDhConfig(params: `GetDhConfigParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesDhConfigUnion`](/docs/telegram-types.md#messagesdhconfigunion)

**`GetDhConfigParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `random_length` | number |  |
| `version` | number |  |

TypeScript interface:

```typescript
interface GetDhConfigParams {
  random_length: number,
  version: number
}
```


**Example:**

```typescript
// @var GetDhConfigParams params
airgram.client.messages.getDhConfig(params).then((result: MessagesDhConfigUnion) => {
  console.log(result)
})
```

### messages.getDialogs

**Signature:** messages.getDialogs(params: `GetDialogsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesDialogsUnion`](/docs/telegram-types.md#messagesdialogsunion)

**`GetDialogsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `limit` | number |  |
| `offset_date` | number |  |
| `offset_id` | number |  |
| `offset_peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `exclude_pinned` | true | Optional |

TypeScript interface:

```typescript
interface GetDialogsParams {
  flags: number,
  limit: number,
  offset_date: number,
  offset_id: number,
  offset_peer: InputPeerUnion,
  exclude_pinned?: true
}
```


**Example:**

```typescript
// @var GetDialogsParams params
airgram.client.messages.getDialogs(params).then((result: MessagesDialogsUnion) => {
  console.log(result)
})
```

### messages.getDocumentByHash

**Signature:** messages.getDocumentByHash(params: `GetDocumentByHashParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`DocumentUnion`](/docs/telegram-types.md#documentunion)

**`GetDocumentByHashParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `mime_type` | string |  |
| `sha256` | number[] |  |
| `size` | number |  |

TypeScript interface:

```typescript
interface GetDocumentByHashParams {
  mime_type: string,
  sha256: number[],
  size: number
}
```


**Example:**

```typescript
// @var GetDocumentByHashParams params
airgram.client.messages.getDocumentByHash(params).then((result: DocumentUnion) => {
  console.log(result)
})
```

### messages.getFavedStickers

**Signature:** messages.getFavedStickers(params: `GetFavedStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesFavedStickersUnion`](/docs/telegram-types.md#messagesfavedstickersunion)

**`GetFavedStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetFavedStickersParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetFavedStickersParams params
airgram.client.messages.getFavedStickers(params).then((result: MessagesFavedStickersUnion) => {
  console.log(result)
})
```

### messages.getFeaturedStickers

**Signature:** messages.getFeaturedStickers(params: `GetFeaturedStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesFeaturedStickersUnion`](/docs/telegram-types.md#messagesfeaturedstickersunion)

**`GetFeaturedStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetFeaturedStickersParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetFeaturedStickersParams params
airgram.client.messages.getFeaturedStickers(params).then((result: MessagesFeaturedStickersUnion) => {
  console.log(result)
})
```

### messages.getFullChat

**Signature:** messages.getFullChat(params: `GetFullChatParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesChatFullUnion`](/docs/telegram-types.md#messageschatfullunion)

**`GetFullChatParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |

TypeScript interface:

```typescript
interface GetFullChatParams {
  chat_id: number
}
```


**Example:**

```typescript
// @var GetFullChatParams params
airgram.client.messages.getFullChat(params).then((result: MessagesChatFullUnion) => {
  console.log(result)
})
```

### messages.getGameHighScores

**Signature:** messages.getGameHighScores(params: `GetGameHighScoresParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesHighScoresUnion`](/docs/telegram-types.md#messageshighscoresunion)

**`GetGameHighScoresParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetGameHighScoresParams {
  id: number,
  peer: InputPeerUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetGameHighScoresParams params
airgram.client.messages.getGameHighScores(params).then((result: MessagesHighScoresUnion) => {
  console.log(result)
})
```

### messages.getHistory

**Signature:** messages.getHistory(params: `GetHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`GetHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `add_offset` | number |  |
| `limit` | number |  |
| `max_id` | number |  |
| `min_id` | number |  |
| `offset_date` | number |  |
| `offset_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface GetHistoryParams {
  add_offset: number,
  limit: number,
  max_id: number,
  min_id: number,
  offset_date: number,
  offset_id: number,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var GetHistoryParams params
airgram.client.messages.getHistory(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### messages.getInlineBotResults

**Signature:** messages.getInlineBotResults(params: `GetInlineBotResultsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesBotResultsUnion`](/docs/telegram-types.md#messagesbotresultsunion)

**`GetInlineBotResultsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `bot` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |
| `flags` | number |  |
| `offset` | string |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `query` | string |  |
| `geo_point` | [InputGeoPointUnion](/docs/telegram-types.md#inputgeopointunion) | Optional |

TypeScript interface:

```typescript
interface GetInlineBotResultsParams {
  bot: InputUserUnion,
  flags: number,
  offset: string,
  peer: InputPeerUnion,
  query: string,
  geo_point?: InputGeoPointUnion
}
```


**Example:**

```typescript
// @var GetInlineBotResultsParams params
airgram.client.messages.getInlineBotResults(params).then((result: MessagesBotResultsUnion) => {
  console.log(result)
})
```

### messages.getInlineGameHighScores

**Signature:** messages.getInlineGameHighScores(params: `GetInlineGameHighScoresParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesHighScoresUnion`](/docs/telegram-types.md#messageshighscoresunion)

**`GetInlineGameHighScoresParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputBotInlineMessageIdUnion](/docs/telegram-types.md#inputbotinlinemessageidunion) |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetInlineGameHighScoresParams {
  id: InputBotInlineMessageIdUnion,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetInlineGameHighScoresParams params
airgram.client.messages.getInlineGameHighScores(params).then((result: MessagesHighScoresUnion) => {
  console.log(result)
})
```

### messages.getMaskStickers

**Signature:** messages.getMaskStickers(params: `GetMaskStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAllStickersUnion`](/docs/telegram-types.md#messagesallstickersunion)

**`GetMaskStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetMaskStickersParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetMaskStickersParams params
airgram.client.messages.getMaskStickers(params).then((result: MessagesAllStickersUnion) => {
  console.log(result)
})
```

### messages.getMessageEditData

**Signature:** messages.getMessageEditData(params: `GetMessageEditDataParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessageEditDataUnion`](/docs/telegram-types.md#messagesmessageeditdataunion)

**`GetMessageEditDataParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface GetMessageEditDataParams {
  id: number,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var GetMessageEditDataParams params
airgram.client.messages.getMessageEditData(params).then((result: MessagesMessageEditDataUnion) => {
  console.log(result)
})
```

### messages.getMessages

**Signature:** messages.getMessages(params: `GetMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`GetMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface GetMessagesParams {
  id: number[]
}
```


**Example:**

```typescript
// @var GetMessagesParams params
airgram.client.messages.getMessages(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### messages.getMessagesViews

**Signature:** messages.getMessagesViews(params: `GetMessagesViewsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `number`[]

**`GetMessagesViewsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number[] |  |
| `increment` | boolean |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface GetMessagesViewsParams {
  id: number[],
  increment: boolean,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var GetMessagesViewsParams params
airgram.client.messages.getMessagesViews(params).then((result: number[]) => {
  console.log(result)
})
```

### messages.getPeerDialogs

**Signature:** messages.getPeerDialogs(params: `GetPeerDialogsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesPeerDialogsUnion`](/docs/telegram-types.md#messagespeerdialogsunion)

**`GetPeerDialogsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peers` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion)[] |  |

TypeScript interface:

```typescript
interface GetPeerDialogsParams {
  peers: InputPeerUnion[]
}
```


**Example:**

```typescript
// @var GetPeerDialogsParams params
airgram.client.messages.getPeerDialogs(params).then((result: MessagesPeerDialogsUnion) => {
  console.log(result)
})
```

### messages.getPeerSettings

**Signature:** messages.getPeerSettings(params: `GetPeerSettingsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PeerSettingsUnion`](/docs/telegram-types.md#peersettingsunion)

**`GetPeerSettingsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface GetPeerSettingsParams {
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var GetPeerSettingsParams params
airgram.client.messages.getPeerSettings(params).then((result: PeerSettingsUnion) => {
  console.log(result)
})
```

### messages.getPinnedDialogs

**Signature:** messages.getPinnedDialogs(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesPeerDialogsUnion`](/docs/telegram-types.md#messagespeerdialogsunion)


**Example:**

```typescript
airgram.client.messages.getPinnedDialogs().then((result: MessagesPeerDialogsUnion) => {
  console.log(result)
})
```

### messages.getRecentStickers

**Signature:** messages.getRecentStickers(params: `GetRecentStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesRecentStickersUnion`](/docs/telegram-types.md#messagesrecentstickersunion)

**`GetRecentStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `hash` | number |  |
| `attached` | true | Optional |

TypeScript interface:

```typescript
interface GetRecentStickersParams {
  flags: number,
  hash: number,
  attached?: true
}
```


**Example:**

```typescript
// @var GetRecentStickersParams params
airgram.client.messages.getRecentStickers(params).then((result: MessagesRecentStickersUnion) => {
  console.log(result)
})
```

### messages.getSavedGifs

**Signature:** messages.getSavedGifs(params: `GetSavedGifsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesSavedGifsUnion`](/docs/telegram-types.md#messagessavedgifsunion)

**`GetSavedGifsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |

TypeScript interface:

```typescript
interface GetSavedGifsParams {
  hash: number
}
```


**Example:**

```typescript
// @var GetSavedGifsParams params
airgram.client.messages.getSavedGifs(params).then((result: MessagesSavedGifsUnion) => {
  console.log(result)
})
```

### messages.getStickerSet

**Signature:** messages.getStickerSet(params: `GetStickerSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetUnion`](/docs/telegram-types.md#messagesstickersetunion)

**`GetStickerSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `stickerset` | [InputStickerSetUnion](/docs/telegram-types.md#inputstickersetunion) |  |

TypeScript interface:

```typescript
interface GetStickerSetParams {
  stickerset: InputStickerSetUnion
}
```


**Example:**

```typescript
// @var GetStickerSetParams params
airgram.client.messages.getStickerSet(params).then((result: MessagesStickerSetUnion) => {
  console.log(result)
})
```

### messages.getUnreadMentions

**Signature:** messages.getUnreadMentions(params: `GetUnreadMentionsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`GetUnreadMentionsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `add_offset` | number |  |
| `limit` | number |  |
| `max_id` | number |  |
| `min_id` | number |  |
| `offset_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface GetUnreadMentionsParams {
  add_offset: number,
  limit: number,
  max_id: number,
  min_id: number,
  offset_id: number,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var GetUnreadMentionsParams params
airgram.client.messages.getUnreadMentions(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### messages.getWebPage

**Signature:** messages.getWebPage(params: `GetWebPageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`WebPageUnion`](/docs/telegram-types.md#webpageunion)

**`GetWebPageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | number |  |
| `url` | string |  |

TypeScript interface:

```typescript
interface GetWebPageParams {
  hash: number,
  url: string
}
```


**Example:**

```typescript
// @var GetWebPageParams params
airgram.client.messages.getWebPage(params).then((result: WebPageUnion) => {
  console.log(result)
})
```

### messages.getWebPagePreview

**Signature:** messages.getWebPagePreview(params: `GetWebPagePreviewParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessageMediaUnion`](/docs/telegram-types.md#messagemediaunion)

**`GetWebPagePreviewParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `message` | string |  |

TypeScript interface:

```typescript
interface GetWebPagePreviewParams {
  message: string
}
```


**Example:**

```typescript
// @var GetWebPagePreviewParams params
airgram.client.messages.getWebPagePreview(params).then((result: MessageMediaUnion) => {
  console.log(result)
})
```

### messages.hideReportSpam

**Signature:** messages.hideReportSpam(params: `HideReportSpamParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`HideReportSpamParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface HideReportSpamParams {
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var HideReportSpamParams params
airgram.client.messages.hideReportSpam(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.importChatInvite

**Signature:** messages.importChatInvite(params: `ImportChatInviteParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ImportChatInviteParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `hash` | string |  |

TypeScript interface:

```typescript
interface ImportChatInviteParams {
  hash: string
}
```


**Example:**

```typescript
// @var ImportChatInviteParams params
airgram.client.messages.importChatInvite(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.installStickerSet

**Signature:** messages.installStickerSet(params: `InstallStickerSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetInstallResultUnion`](/docs/telegram-types.md#messagesstickersetinstallresultunion)

**`InstallStickerSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `archived` | boolean |  |
| `stickerset` | [InputStickerSetUnion](/docs/telegram-types.md#inputstickersetunion) |  |

TypeScript interface:

```typescript
interface InstallStickerSetParams {
  archived: boolean,
  stickerset: InputStickerSetUnion
}
```


**Example:**

```typescript
// @var InstallStickerSetParams params
airgram.client.messages.installStickerSet(params).then((result: MessagesStickerSetInstallResultUnion) => {
  console.log(result)
})
```

### messages.migrateChat

**Signature:** messages.migrateChat(params: `MigrateChatParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`MigrateChatParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |

TypeScript interface:

```typescript
interface MigrateChatParams {
  chat_id: number
}
```


**Example:**

```typescript
// @var MigrateChatParams params
airgram.client.messages.migrateChat(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.readEncryptedHistory

**Signature:** messages.readEncryptedHistory(params: `ReadEncryptedHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReadEncryptedHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `max_date` | number |  |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |

TypeScript interface:

```typescript
interface ReadEncryptedHistoryParams {
  max_date: number,
  peer: InputEncryptedChatUnion
}
```


**Example:**

```typescript
// @var ReadEncryptedHistoryParams params
airgram.client.messages.readEncryptedHistory(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.readFeaturedStickers

**Signature:** messages.readFeaturedStickers(params: `ReadFeaturedStickersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReadFeaturedStickersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface ReadFeaturedStickersParams {
  id: number[]
}
```


**Example:**

```typescript
// @var ReadFeaturedStickersParams params
airgram.client.messages.readFeaturedStickers(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.readHistory

**Signature:** messages.readHistory(params: `ReadHistoryParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedMessagesUnion`](/docs/telegram-types.md#messagesaffectedmessagesunion)

**`ReadHistoryParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `max_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface ReadHistoryParams {
  max_id: number,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var ReadHistoryParams params
airgram.client.messages.readHistory(params).then((result: MessagesAffectedMessagesUnion) => {
  console.log(result)
})
```

### messages.readMessageContents

**Signature:** messages.readMessageContents(params: `ReadMessageContentsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesAffectedMessagesUnion`](/docs/telegram-types.md#messagesaffectedmessagesunion)

**`ReadMessageContentsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | number[] |  |

TypeScript interface:

```typescript
interface ReadMessageContentsParams {
  id: number[]
}
```


**Example:**

```typescript
// @var ReadMessageContentsParams params
airgram.client.messages.readMessageContents(params).then((result: MessagesAffectedMessagesUnion) => {
  console.log(result)
})
```

### messages.receivedMessages

**Signature:** messages.receivedMessages(params: `ReceivedMessagesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`ReceivedNotifyMessageUnion`](/docs/telegram-types.md#receivednotifymessageunion)[]

**`ReceivedMessagesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `max_id` | number |  |

TypeScript interface:

```typescript
interface ReceivedMessagesParams {
  max_id: number
}
```


**Example:**

```typescript
// @var ReceivedMessagesParams params
airgram.client.messages.receivedMessages(params).then((result: ReceivedNotifyMessageUnion[]) => {
  console.log(result)
})
```

### messages.receivedQueue

**Signature:** messages.receivedQueue(params: `ReceivedQueueParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `number`[]

**`ReceivedQueueParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `max_qts` | number |  |

TypeScript interface:

```typescript
interface ReceivedQueueParams {
  max_qts: number
}
```


**Example:**

```typescript
// @var ReceivedQueueParams params
airgram.client.messages.receivedQueue(params).then((result: number[]) => {
  console.log(result)
})
```

### messages.reorderPinnedDialogs

**Signature:** messages.reorderPinnedDialogs(params: `ReorderPinnedDialogsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReorderPinnedDialogsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `order` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion)[] |  |
| `force` | true | Optional |

TypeScript interface:

```typescript
interface ReorderPinnedDialogsParams {
  flags: number,
  order: InputPeerUnion[],
  force?: true
}
```


**Example:**

```typescript
// @var ReorderPinnedDialogsParams params
airgram.client.messages.reorderPinnedDialogs(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.reorderStickerSets

**Signature:** messages.reorderStickerSets(params: `ReorderStickerSetsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReorderStickerSetsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `order` | number[] |  |
| `masks` | true | Optional |

TypeScript interface:

```typescript
interface ReorderStickerSetsParams {
  flags: number,
  order: number[],
  masks?: true
}
```


**Example:**

```typescript
// @var ReorderStickerSetsParams params
airgram.client.messages.reorderStickerSets(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.reportEncryptedSpam

**Signature:** messages.reportEncryptedSpam(params: `ReportEncryptedSpamParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReportEncryptedSpamParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |

TypeScript interface:

```typescript
interface ReportEncryptedSpamParams {
  peer: InputEncryptedChatUnion
}
```


**Example:**

```typescript
// @var ReportEncryptedSpamParams params
airgram.client.messages.reportEncryptedSpam(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.reportSpam

**Signature:** messages.reportSpam(params: `ReportSpamParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReportSpamParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface ReportSpamParams {
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var ReportSpamParams params
airgram.client.messages.reportSpam(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.requestEncryption

**Signature:** messages.requestEncryption(params: `RequestEncryptionParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`EncryptedChatUnion`](/docs/telegram-types.md#encryptedchatunion)

**`RequestEncryptionParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `g_a` | number[] |  |
| `random_id` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface RequestEncryptionParams {
  g_a: number[],
  random_id: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var RequestEncryptionParams params
airgram.client.messages.requestEncryption(params).then((result: EncryptedChatUnion) => {
  console.log(result)
})
```

### messages.saveDraft

**Signature:** messages.saveDraft(params: `SaveDraftParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveDraftParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `message` | string |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `entities` | [MessageEntityUnion](/docs/telegram-types.md#messageentityunion)[] | Optional |
| `no_webpage` | true | Optional |
| `reply_to_msg_id` | number | Optional |

TypeScript interface:

```typescript
interface SaveDraftParams {
  flags: number,
  message: string,
  peer: InputPeerUnion,
  entities?: MessageEntityUnion[],
  no_webpage?: true,
  reply_to_msg_id?: number
}
```


**Example:**

```typescript
// @var SaveDraftParams params
airgram.client.messages.saveDraft(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.saveGif

**Signature:** messages.saveGif(params: `SaveGifParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveGifParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputDocumentUnion](/docs/telegram-types.md#inputdocumentunion) |  |
| `unsave` | boolean |  |

TypeScript interface:

```typescript
interface SaveGifParams {
  id: InputDocumentUnion,
  unsave: boolean
}
```


**Example:**

```typescript
// @var SaveGifParams params
airgram.client.messages.saveGif(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.saveRecentSticker

**Signature:** messages.saveRecentSticker(params: `SaveRecentStickerParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveRecentStickerParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | [InputDocumentUnion](/docs/telegram-types.md#inputdocumentunion) |  |
| `unsave` | boolean |  |
| `attached` | true | Optional |

TypeScript interface:

```typescript
interface SaveRecentStickerParams {
  flags: number,
  id: InputDocumentUnion,
  unsave: boolean,
  attached?: true
}
```


**Example:**

```typescript
// @var SaveRecentStickerParams params
airgram.client.messages.saveRecentSticker(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.search

**Signature:** messages.search(params: `SearchParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`SearchParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `add_offset` | number |  |
| `filter` | [MessagesFilterUnion](/docs/telegram-types.md#messagesfilterunion) |  |
| `flags` | number |  |
| `limit` | number |  |
| `max_date` | number |  |
| `max_id` | number |  |
| `min_date` | number |  |
| `min_id` | number |  |
| `offset_id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `q` | string |  |
| `from_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) | Optional |

TypeScript interface:

```typescript
interface SearchParams {
  add_offset: number,
  filter: MessagesFilterUnion,
  flags: number,
  limit: number,
  max_date: number,
  max_id: number,
  min_date: number,
  min_id: number,
  offset_id: number,
  peer: InputPeerUnion,
  q: string,
  from_id?: InputUserUnion
}
```


**Example:**

```typescript
// @var SearchParams params
airgram.client.messages.search(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### messages.searchGifs

**Signature:** messages.searchGifs(params: `SearchGifsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesFoundGifsUnion`](/docs/telegram-types.md#messagesfoundgifsunion)

**`SearchGifsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `offset` | number |  |
| `q` | string |  |

TypeScript interface:

```typescript
interface SearchGifsParams {
  offset: number,
  q: string
}
```


**Example:**

```typescript
// @var SearchGifsParams params
airgram.client.messages.searchGifs(params).then((result: MessagesFoundGifsUnion) => {
  console.log(result)
})
```

### messages.searchGlobal

**Signature:** messages.searchGlobal(params: `SearchGlobalParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesMessagesUnion`](/docs/telegram-types.md#messagesmessagesunion)

**`SearchGlobalParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `offset_date` | number |  |
| `offset_id` | number |  |
| `offset_peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `q` | string |  |

TypeScript interface:

```typescript
interface SearchGlobalParams {
  limit: number,
  offset_date: number,
  offset_id: number,
  offset_peer: InputPeerUnion,
  q: string
}
```


**Example:**

```typescript
// @var SearchGlobalParams params
airgram.client.messages.searchGlobal(params).then((result: MessagesMessagesUnion) => {
  console.log(result)
})
```

### messages.sendEncrypted

**Signature:** messages.sendEncrypted(params: `SendEncryptedParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesSentEncryptedMessageUnion`](/docs/telegram-types.md#messagessentencryptedmessageunion)

**`SendEncryptedParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `data` | number[] |  |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |
| `random_id` | number |  |

TypeScript interface:

```typescript
interface SendEncryptedParams {
  data: number[],
  peer: InputEncryptedChatUnion,
  random_id: number
}
```


**Example:**

```typescript
// @var SendEncryptedParams params
airgram.client.messages.sendEncrypted(params).then((result: MessagesSentEncryptedMessageUnion) => {
  console.log(result)
})
```

### messages.sendEncryptedFile

**Signature:** messages.sendEncryptedFile(params: `SendEncryptedFileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesSentEncryptedMessageUnion`](/docs/telegram-types.md#messagessentencryptedmessageunion)

**`SendEncryptedFileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `data` | number[] |  |
| `file` | [InputEncryptedFileUnion](/docs/telegram-types.md#inputencryptedfileunion) |  |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |
| `random_id` | number |  |

TypeScript interface:

```typescript
interface SendEncryptedFileParams {
  data: number[],
  file: InputEncryptedFileUnion,
  peer: InputEncryptedChatUnion,
  random_id: number
}
```


**Example:**

```typescript
// @var SendEncryptedFileParams params
airgram.client.messages.sendEncryptedFile(params).then((result: MessagesSentEncryptedMessageUnion) => {
  console.log(result)
})
```

### messages.sendEncryptedService

**Signature:** messages.sendEncryptedService(params: `SendEncryptedServiceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesSentEncryptedMessageUnion`](/docs/telegram-types.md#messagessentencryptedmessageunion)

**`SendEncryptedServiceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `data` | number[] |  |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |
| `random_id` | number |  |

TypeScript interface:

```typescript
interface SendEncryptedServiceParams {
  data: number[],
  peer: InputEncryptedChatUnion,
  random_id: number
}
```


**Example:**

```typescript
// @var SendEncryptedServiceParams params
airgram.client.messages.sendEncryptedService(params).then((result: MessagesSentEncryptedMessageUnion) => {
  console.log(result)
})
```

### messages.sendInlineBotResult

**Signature:** messages.sendInlineBotResult(params: `SendInlineBotResultParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SendInlineBotResultParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | string |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `query_id` | number |  |
| `random_id` | number |  |
| `background` | true | Optional |
| `clear_draft` | true | Optional |
| `reply_to_msg_id` | number | Optional |
| `silent` | true | Optional |

TypeScript interface:

```typescript
interface SendInlineBotResultParams {
  flags: number,
  id: string,
  peer: InputPeerUnion,
  query_id: number,
  random_id: number,
  background?: true,
  clear_draft?: true,
  reply_to_msg_id?: number,
  silent?: true
}
```


**Example:**

```typescript
// @var SendInlineBotResultParams params
airgram.client.messages.sendInlineBotResult(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.sendMedia

**Signature:** messages.sendMedia(params: `SendMediaParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SendMediaParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `media` | [InputMediaUnion](/docs/telegram-types.md#inputmediaunion) |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `random_id` | number |  |
| `background` | true | Optional |
| `clear_draft` | true | Optional |
| `reply_markup` | [ReplyMarkupUnion](/docs/telegram-types.md#replymarkupunion) | Optional |
| `reply_to_msg_id` | number | Optional |
| `silent` | true | Optional |

TypeScript interface:

```typescript
interface SendMediaParams {
  flags: number,
  media: InputMediaUnion,
  peer: InputPeerUnion,
  random_id: number,
  background?: true,
  clear_draft?: true,
  reply_markup?: ReplyMarkupUnion,
  reply_to_msg_id?: number,
  silent?: true
}
```


**Example:**

```typescript
// @var SendMediaParams params
airgram.client.messages.sendMedia(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.sendMessage

**Signature:** messages.sendMessage(params: `SendMessageParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SendMessageParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `message` | string |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `random_id` | number |  |
| `background` | true | Optional |
| `clear_draft` | true | Optional |
| `entities` | [MessageEntityUnion](/docs/telegram-types.md#messageentityunion)[] | Optional |
| `no_webpage` | true | Optional |
| `reply_markup` | [ReplyMarkupUnion](/docs/telegram-types.md#replymarkupunion) | Optional |
| `reply_to_msg_id` | number | Optional |
| `silent` | true | Optional |

TypeScript interface:

```typescript
interface SendMessageParams {
  flags: number,
  message: string,
  peer: InputPeerUnion,
  random_id: number,
  background?: true,
  clear_draft?: true,
  entities?: MessageEntityUnion[],
  no_webpage?: true,
  reply_markup?: ReplyMarkupUnion,
  reply_to_msg_id?: number,
  silent?: true
}
```


**Example:**

```typescript
// @var SendMessageParams params
airgram.client.messages.sendMessage(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.sendScreenshotNotification

**Signature:** messages.sendScreenshotNotification(params: `SendScreenshotNotificationParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SendScreenshotNotificationParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `random_id` | number |  |
| `reply_to_msg_id` | number |  |

TypeScript interface:

```typescript
interface SendScreenshotNotificationParams {
  peer: InputPeerUnion,
  random_id: number,
  reply_to_msg_id: number
}
```


**Example:**

```typescript
// @var SendScreenshotNotificationParams params
airgram.client.messages.sendScreenshotNotification(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.setBotCallbackAnswer

**Signature:** messages.setBotCallbackAnswer(params: `SetBotCallbackAnswerParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetBotCallbackAnswerParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `cache_time` | number |  |
| `flags` | number |  |
| `query_id` | number |  |
| `alert` | true | Optional |
| `message` | string | Optional |
| `url` | string | Optional |

TypeScript interface:

```typescript
interface SetBotCallbackAnswerParams {
  cache_time: number,
  flags: number,
  query_id: number,
  alert?: true,
  message?: string,
  url?: string
}
```


**Example:**

```typescript
// @var SetBotCallbackAnswerParams params
airgram.client.messages.setBotCallbackAnswer(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setBotPrecheckoutResults

**Signature:** messages.setBotPrecheckoutResults(params: `SetBotPrecheckoutResultsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetBotPrecheckoutResultsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `query_id` | number |  |
| `error` | string | Optional |
| `success` | true | Optional |

TypeScript interface:

```typescript
interface SetBotPrecheckoutResultsParams {
  flags: number,
  query_id: number,
  error?: string,
  success?: true
}
```


**Example:**

```typescript
// @var SetBotPrecheckoutResultsParams params
airgram.client.messages.setBotPrecheckoutResults(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setBotShippingResults

**Signature:** messages.setBotShippingResults(params: `SetBotShippingResultsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetBotShippingResultsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `query_id` | number |  |
| `error` | string | Optional |
| `shipping_options` | [ShippingOptionUnion](/docs/telegram-types.md#shippingoptionunion)[] | Optional |

TypeScript interface:

```typescript
interface SetBotShippingResultsParams {
  flags: number,
  query_id: number,
  error?: string,
  shipping_options?: ShippingOptionUnion[]
}
```


**Example:**

```typescript
// @var SetBotShippingResultsParams params
airgram.client.messages.setBotShippingResults(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setEncryptedTyping

**Signature:** messages.setEncryptedTyping(params: `SetEncryptedTypingParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetEncryptedTypingParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputEncryptedChatUnion](/docs/telegram-types.md#inputencryptedchatunion) |  |
| `typing` | boolean |  |

TypeScript interface:

```typescript
interface SetEncryptedTypingParams {
  peer: InputEncryptedChatUnion,
  typing: boolean
}
```


**Example:**

```typescript
// @var SetEncryptedTypingParams params
airgram.client.messages.setEncryptedTyping(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setGameScore

**Signature:** messages.setGameScore(params: `SetGameScoreParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SetGameScoreParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `score` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |
| `edit_message` | true | Optional |
| `force` | true | Optional |

TypeScript interface:

```typescript
interface SetGameScoreParams {
  flags: number,
  id: number,
  peer: InputPeerUnion,
  score: number,
  user_id: InputUserUnion,
  edit_message?: true,
  force?: true
}
```


**Example:**

```typescript
// @var SetGameScoreParams params
airgram.client.messages.setGameScore(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.setInlineBotResults

**Signature:** messages.setInlineBotResults(params: `SetInlineBotResultsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetInlineBotResultsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `cache_time` | number |  |
| `flags` | number |  |
| `query_id` | number |  |
| `results` | [InputBotInlineResultUnion](/docs/telegram-types.md#inputbotinlineresultunion)[] |  |
| `gallery` | true | Optional |
| `next_offset` | string | Optional |
| `private` | true | Optional |
| `switch_pm` | [InlineBotSwitchPmUnion](/docs/telegram-types.md#inlinebotswitchpmunion) | Optional |

TypeScript interface:

```typescript
interface SetInlineBotResultsParams {
  cache_time: number,
  flags: number,
  query_id: number,
  results: InputBotInlineResultUnion[],
  gallery?: true,
  next_offset?: string,
  private?: true,
  switch_pm?: InlineBotSwitchPmUnion
}
```


**Example:**

```typescript
// @var SetInlineBotResultsParams params
airgram.client.messages.setInlineBotResults(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setInlineGameScore

**Signature:** messages.setInlineGameScore(params: `SetInlineGameScoreParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetInlineGameScoreParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `id` | [InputBotInlineMessageIdUnion](/docs/telegram-types.md#inputbotinlinemessageidunion) |  |
| `score` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |
| `edit_message` | true | Optional |
| `force` | true | Optional |

TypeScript interface:

```typescript
interface SetInlineGameScoreParams {
  flags: number,
  id: InputBotInlineMessageIdUnion,
  score: number,
  user_id: InputUserUnion,
  edit_message?: true,
  force?: true
}
```


**Example:**

```typescript
// @var SetInlineGameScoreParams params
airgram.client.messages.setInlineGameScore(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.setTyping

**Signature:** messages.setTyping(params: `SetTypingParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SetTypingParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `action` | [SendMessageActionUnion](/docs/telegram-types.md#sendmessageactionunion) |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface SetTypingParams {
  action: SendMessageActionUnion,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var SetTypingParams params
airgram.client.messages.setTyping(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.startBot

**Signature:** messages.startBot(params: `StartBotParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`StartBotParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `bot` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `random_id` | number |  |
| `start_param` | string |  |

TypeScript interface:

```typescript
interface StartBotParams {
  bot: InputUserUnion,
  peer: InputPeerUnion,
  random_id: number,
  start_param: string
}
```


**Example:**

```typescript
// @var StartBotParams params
airgram.client.messages.startBot(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.toggleChatAdmins

**Signature:** messages.toggleChatAdmins(params: `ToggleChatAdminsParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`ToggleChatAdminsParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `chat_id` | number |  |
| `enabled` | boolean |  |

TypeScript interface:

```typescript
interface ToggleChatAdminsParams {
  chat_id: number,
  enabled: boolean
}
```


**Example:**

```typescript
// @var ToggleChatAdminsParams params
airgram.client.messages.toggleChatAdmins(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### messages.toggleDialogPin

**Signature:** messages.toggleDialogPin(params: `ToggleDialogPinParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ToggleDialogPinParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |
| `pinned` | true | Optional |

TypeScript interface:

```typescript
interface ToggleDialogPinParams {
  flags: number,
  peer: InputPeerUnion,
  pinned?: true
}
```


**Example:**

```typescript
// @var ToggleDialogPinParams params
airgram.client.messages.toggleDialogPin(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.uninstallStickerSet

**Signature:** messages.uninstallStickerSet(params: `UninstallStickerSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`UninstallStickerSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `stickerset` | [InputStickerSetUnion](/docs/telegram-types.md#inputstickersetunion) |  |

TypeScript interface:

```typescript
interface UninstallStickerSetParams {
  stickerset: InputStickerSetUnion
}
```


**Example:**

```typescript
// @var UninstallStickerSetParams params
airgram.client.messages.uninstallStickerSet(params).then((result: boolean) => {
  console.log(result)
})
```

### messages.uploadMedia

**Signature:** messages.uploadMedia(params: `UploadMediaParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessageMediaUnion`](/docs/telegram-types.md#messagemediaunion)

**`UploadMediaParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `media` | [InputMediaUnion](/docs/telegram-types.md#inputmediaunion) |  |
| `peer` | [InputPeerUnion](/docs/telegram-types.md#inputpeerunion) |  |

TypeScript interface:

```typescript
interface UploadMediaParams {
  media: InputMediaUnion,
  peer: InputPeerUnion
}
```


**Example:**

```typescript
// @var UploadMediaParams params
airgram.client.messages.uploadMedia(params).then((result: MessageMediaUnion) => {
  console.log(result)
})
```


## Payments





### payments.clearSavedInfo

**Signature:** payments.clearSavedInfo(params: `ClearSavedInfoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ClearSavedInfoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `credentials` | true | Optional |
| `info` | true | Optional |

TypeScript interface:

```typescript
interface ClearSavedInfoParams {
  flags: number,
  credentials?: true,
  info?: true
}
```


**Example:**

```typescript
// @var ClearSavedInfoParams params
airgram.client.payments.clearSavedInfo(params).then((result: boolean) => {
  console.log(result)
})
```

### payments.getPaymentForm

**Signature:** payments.getPaymentForm(params: `GetPaymentFormParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PaymentsPaymentFormUnion`](/docs/telegram-types.md#paymentspaymentformunion)

**`GetPaymentFormParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `msg_id` | number |  |

TypeScript interface:

```typescript
interface GetPaymentFormParams {
  msg_id: number
}
```


**Example:**

```typescript
// @var GetPaymentFormParams params
airgram.client.payments.getPaymentForm(params).then((result: PaymentsPaymentFormUnion) => {
  console.log(result)
})
```

### payments.getPaymentReceipt

**Signature:** payments.getPaymentReceipt(params: `GetPaymentReceiptParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PaymentsPaymentReceiptUnion`](/docs/telegram-types.md#paymentspaymentreceiptunion)

**`GetPaymentReceiptParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `msg_id` | number |  |

TypeScript interface:

```typescript
interface GetPaymentReceiptParams {
  msg_id: number
}
```


**Example:**

```typescript
// @var GetPaymentReceiptParams params
airgram.client.payments.getPaymentReceipt(params).then((result: PaymentsPaymentReceiptUnion) => {
  console.log(result)
})
```

### payments.getSavedInfo

**Signature:** payments.getSavedInfo(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PaymentsSavedInfoUnion`](/docs/telegram-types.md#paymentssavedinfounion)


**Example:**

```typescript
airgram.client.payments.getSavedInfo().then((result: PaymentsSavedInfoUnion) => {
  console.log(result)
})
```

### payments.sendPaymentForm

**Signature:** payments.sendPaymentForm(params: `SendPaymentFormParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PaymentsPaymentResultUnion`](/docs/telegram-types.md#paymentspaymentresultunion)

**`SendPaymentFormParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `credentials` | [InputPaymentCredentialsUnion](/docs/telegram-types.md#inputpaymentcredentialsunion) |  |
| `flags` | number |  |
| `msg_id` | number |  |
| `requested_info_id` | string | Optional |
| `shipping_option_id` | string | Optional |

TypeScript interface:

```typescript
interface SendPaymentFormParams {
  credentials: InputPaymentCredentialsUnion,
  flags: number,
  msg_id: number,
  requested_info_id?: string,
  shipping_option_id?: string
}
```


**Example:**

```typescript
// @var SendPaymentFormParams params
airgram.client.payments.sendPaymentForm(params).then((result: PaymentsPaymentResultUnion) => {
  console.log(result)
})
```

### payments.validateRequestedInfo

**Signature:** payments.validateRequestedInfo(params: `ValidateRequestedInfoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PaymentsValidatedRequestedInfoUnion`](/docs/telegram-types.md#paymentsvalidatedrequestedinfounion)

**`ValidateRequestedInfoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `info` | [PaymentRequestedInfoUnion](/docs/telegram-types.md#paymentrequestedinfounion) |  |
| `msg_id` | number |  |
| `save` | true | Optional |

TypeScript interface:

```typescript
interface ValidateRequestedInfoParams {
  flags: number,
  info: PaymentRequestedInfoUnion,
  msg_id: number,
  save?: true
}
```


**Example:**

```typescript
// @var ValidateRequestedInfoParams params
airgram.client.payments.validateRequestedInfo(params).then((result: PaymentsValidatedRequestedInfoUnion) => {
  console.log(result)
})
```


## Phone





### phone.acceptCall

**Signature:** phone.acceptCall(params: `AcceptCallParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PhonePhoneCallUnion`](/docs/telegram-types.md#phonephonecallunion)

**`AcceptCallParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `g_b` | number[] |  |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |
| `protocol` | [PhoneCallProtocolUnion](/docs/telegram-types.md#phonecallprotocolunion) |  |

TypeScript interface:

```typescript
interface AcceptCallParams {
  g_b: number[],
  peer: InputPhoneCallUnion,
  protocol: PhoneCallProtocolUnion
}
```


**Example:**

```typescript
// @var AcceptCallParams params
airgram.client.phone.acceptCall(params).then((result: PhonePhoneCallUnion) => {
  console.log(result)
})
```

### phone.confirmCall

**Signature:** phone.confirmCall(params: `ConfirmCallParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PhonePhoneCallUnion`](/docs/telegram-types.md#phonephonecallunion)

**`ConfirmCallParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `g_a` | number[] |  |
| `key_fingerprint` | number |  |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |
| `protocol` | [PhoneCallProtocolUnion](/docs/telegram-types.md#phonecallprotocolunion) |  |

TypeScript interface:

```typescript
interface ConfirmCallParams {
  g_a: number[],
  key_fingerprint: number,
  peer: InputPhoneCallUnion,
  protocol: PhoneCallProtocolUnion
}
```


**Example:**

```typescript
// @var ConfirmCallParams params
airgram.client.phone.confirmCall(params).then((result: PhonePhoneCallUnion) => {
  console.log(result)
})
```

### phone.discardCall

**Signature:** phone.discardCall(params: `DiscardCallParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`DiscardCallParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `connection_id` | number |  |
| `duration` | number |  |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |
| `reason` | [PhoneCallDiscardReasonUnion](/docs/telegram-types.md#phonecalldiscardreasonunion) |  |

TypeScript interface:

```typescript
interface DiscardCallParams {
  connection_id: number,
  duration: number,
  peer: InputPhoneCallUnion,
  reason: PhoneCallDiscardReasonUnion
}
```


**Example:**

```typescript
// @var DiscardCallParams params
airgram.client.phone.discardCall(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```

### phone.getCallConfig

**Signature:** phone.getCallConfig(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`DataJsonUnion`](/docs/telegram-types.md#datajsonunion)


**Example:**

```typescript
airgram.client.phone.getCallConfig().then((result: DataJsonUnion) => {
  console.log(result)
})
```

### phone.receivedCall

**Signature:** phone.receivedCall(params: `ReceivedCallParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`ReceivedCallParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |

TypeScript interface:

```typescript
interface ReceivedCallParams {
  peer: InputPhoneCallUnion
}
```


**Example:**

```typescript
// @var ReceivedCallParams params
airgram.client.phone.receivedCall(params).then((result: boolean) => {
  console.log(result)
})
```

### phone.requestCall

**Signature:** phone.requestCall(params: `RequestCallParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PhonePhoneCallUnion`](/docs/telegram-types.md#phonephonecallunion)

**`RequestCallParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `g_a_hash` | number[] |  |
| `protocol` | [PhoneCallProtocolUnion](/docs/telegram-types.md#phonecallprotocolunion) |  |
| `random_id` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface RequestCallParams {
  g_a_hash: number[],
  protocol: PhoneCallProtocolUnion,
  random_id: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var RequestCallParams params
airgram.client.phone.requestCall(params).then((result: PhonePhoneCallUnion) => {
  console.log(result)
})
```

### phone.saveCallDebug

**Signature:** phone.saveCallDebug(params: `SaveCallDebugParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveCallDebugParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `debug` | [DataJsonUnion](/docs/telegram-types.md#datajsonunion) |  |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |

TypeScript interface:

```typescript
interface SaveCallDebugParams {
  debug: DataJsonUnion,
  peer: InputPhoneCallUnion
}
```


**Example:**

```typescript
// @var SaveCallDebugParams params
airgram.client.phone.saveCallDebug(params).then((result: boolean) => {
  console.log(result)
})
```

### phone.setCallRating

**Signature:** phone.setCallRating(params: `SetCallRatingParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesUnion`](/docs/telegram-types.md#updatesunion)

**`SetCallRatingParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `comment` | string |  |
| `peer` | [InputPhoneCallUnion](/docs/telegram-types.md#inputphonecallunion) |  |
| `rating` | number |  |

TypeScript interface:

```typescript
interface SetCallRatingParams {
  comment: string,
  peer: InputPhoneCallUnion,
  rating: number
}
```


**Example:**

```typescript
// @var SetCallRatingParams params
airgram.client.phone.setCallRating(params).then((result: UpdatesUnion) => {
  console.log(result)
})
```


## Photos





### photos.deletePhotos

**Signature:** photos.deletePhotos(params: `DeletePhotosParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `number`[]

**`DeletePhotosParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputPhotoUnion](/docs/telegram-types.md#inputphotounion)[] |  |

TypeScript interface:

```typescript
interface DeletePhotosParams {
  id: InputPhotoUnion[]
}
```


**Example:**

```typescript
// @var DeletePhotosParams params
airgram.client.photos.deletePhotos(params).then((result: number[]) => {
  console.log(result)
})
```

### photos.getUserPhotos

**Signature:** photos.getUserPhotos(params: `GetUserPhotosParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PhotosPhotosUnion`](/docs/telegram-types.md#photosphotosunion)

**`GetUserPhotosParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `max_id` | number |  |
| `offset` | number |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetUserPhotosParams {
  limit: number,
  max_id: number,
  offset: number,
  user_id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetUserPhotosParams params
airgram.client.photos.getUserPhotos(params).then((result: PhotosPhotosUnion) => {
  console.log(result)
})
```

### photos.updateProfilePhoto

**Signature:** photos.updateProfilePhoto(params: `UpdateProfilePhotoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserProfilePhotoUnion`](/docs/telegram-types.md#userprofilephotounion)

**`UpdateProfilePhotoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputPhotoUnion](/docs/telegram-types.md#inputphotounion) |  |

TypeScript interface:

```typescript
interface UpdateProfilePhotoParams {
  id: InputPhotoUnion
}
```


**Example:**

```typescript
// @var UpdateProfilePhotoParams params
airgram.client.photos.updateProfilePhoto(params).then((result: UserProfilePhotoUnion) => {
  console.log(result)
})
```

### photos.uploadProfilePhoto

**Signature:** photos.uploadProfilePhoto(params: `UploadProfilePhotoParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`PhotosPhotoUnion`](/docs/telegram-types.md#photosphotounion)

**`UploadProfilePhotoParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `file` | [InputFileUnion](/docs/telegram-types.md#inputfileunion) |  |

TypeScript interface:

```typescript
interface UploadProfilePhotoParams {
  file: InputFileUnion
}
```


**Example:**

```typescript
// @var UploadProfilePhotoParams params
airgram.client.photos.uploadProfilePhoto(params).then((result: PhotosPhotoUnion) => {
  console.log(result)
})
```


## Stickers





### stickers.addStickerToSet

**Signature:** stickers.addStickerToSet(params: `AddStickerToSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetUnion`](/docs/telegram-types.md#messagesstickersetunion)

**`AddStickerToSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `sticker` | [InputStickerSetItemUnion](/docs/telegram-types.md#inputstickersetitemunion) |  |
| `stickerset` | [InputStickerSetUnion](/docs/telegram-types.md#inputstickersetunion) |  |

TypeScript interface:

```typescript
interface AddStickerToSetParams {
  sticker: InputStickerSetItemUnion,
  stickerset: InputStickerSetUnion
}
```


**Example:**

```typescript
// @var AddStickerToSetParams params
airgram.client.stickers.addStickerToSet(params).then((result: MessagesStickerSetUnion) => {
  console.log(result)
})
```

### stickers.changeStickerPosition

**Signature:** stickers.changeStickerPosition(params: `ChangeStickerPositionParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetUnion`](/docs/telegram-types.md#messagesstickersetunion)

**`ChangeStickerPositionParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `position` | number |  |
| `sticker` | [InputDocumentUnion](/docs/telegram-types.md#inputdocumentunion) |  |

TypeScript interface:

```typescript
interface ChangeStickerPositionParams {
  position: number,
  sticker: InputDocumentUnion
}
```


**Example:**

```typescript
// @var ChangeStickerPositionParams params
airgram.client.stickers.changeStickerPosition(params).then((result: MessagesStickerSetUnion) => {
  console.log(result)
})
```

### stickers.createStickerSet

**Signature:** stickers.createStickerSet(params: `CreateStickerSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetUnion`](/docs/telegram-types.md#messagesstickersetunion)

**`CreateStickerSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `flags` | number |  |
| `short_name` | string |  |
| `stickers` | [InputStickerSetItemUnion](/docs/telegram-types.md#inputstickersetitemunion)[] |  |
| `title` | string |  |
| `user_id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |
| `masks` | true | Optional |

TypeScript interface:

```typescript
interface CreateStickerSetParams {
  flags: number,
  short_name: string,
  stickers: InputStickerSetItemUnion[],
  title: string,
  user_id: InputUserUnion,
  masks?: true
}
```


**Example:**

```typescript
// @var CreateStickerSetParams params
airgram.client.stickers.createStickerSet(params).then((result: MessagesStickerSetUnion) => {
  console.log(result)
})
```

### stickers.removeStickerFromSet

**Signature:** stickers.removeStickerFromSet(params: `RemoveStickerFromSetParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`MessagesStickerSetUnion`](/docs/telegram-types.md#messagesstickersetunion)

**`RemoveStickerFromSetParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `sticker` | [InputDocumentUnion](/docs/telegram-types.md#inputdocumentunion) |  |

TypeScript interface:

```typescript
interface RemoveStickerFromSetParams {
  sticker: InputDocumentUnion
}
```


**Example:**

```typescript
// @var RemoveStickerFromSetParams params
airgram.client.stickers.removeStickerFromSet(params).then((result: MessagesStickerSetUnion) => {
  console.log(result)
})
```


## Updates





### updates.getChannelDifference

**Signature:** updates.getChannelDifference(params: `GetChannelDifferenceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesChannelDifferenceUnion`](/docs/telegram-types.md#updateschanneldifferenceunion)

**`GetChannelDifferenceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `channel` | [InputChannelUnion](/docs/telegram-types.md#inputchannelunion) |  |
| `filter` | [ChannelMessagesFilterUnion](/docs/telegram-types.md#channelmessagesfilterunion) |  |
| `flags` | number |  |
| `limit` | number |  |
| `pts` | number |  |
| `force` | true | Optional |

TypeScript interface:

```typescript
interface GetChannelDifferenceParams {
  channel: InputChannelUnion,
  filter: ChannelMessagesFilterUnion,
  flags: number,
  limit: number,
  pts: number,
  force?: true
}
```


**Example:**

```typescript
// @var GetChannelDifferenceParams params
airgram.client.updates.getChannelDifference(params).then((result: UpdatesChannelDifferenceUnion) => {
  console.log(result)
})
```

### updates.getDifference

**Signature:** updates.getDifference(params: `GetDifferenceParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesDifferenceUnion`](/docs/telegram-types.md#updatesdifferenceunion)

**`GetDifferenceParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `date` | number |  |
| `flags` | number |  |
| `pts` | number |  |
| `qts` | number |  |
| `pts_total_limit` | number | Optional |

TypeScript interface:

```typescript
interface GetDifferenceParams {
  date: number,
  flags: number,
  pts: number,
  qts: number,
  pts_total_limit?: number
}
```


**Example:**

```typescript
// @var GetDifferenceParams params
airgram.client.updates.getDifference(params).then((result: UpdatesDifferenceUnion) => {
  console.log(result)
})
```

### updates.getState

**Signature:** updates.getState(options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UpdatesStateUnion`](/docs/telegram-types.md#updatesstateunion)


**Example:**

```typescript
airgram.client.updates.getState().then((result: UpdatesStateUnion) => {
  console.log(result)
})
```


## Upload





### upload.getCdnFile

**Signature:** upload.getCdnFile(params: `GetCdnFileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UploadCdnFileUnion`](/docs/telegram-types.md#uploadcdnfileunion)

**`GetCdnFileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `file_token` | number[] |  |
| `limit` | number |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetCdnFileParams {
  file_token: number[],
  limit: number,
  offset: number
}
```


**Example:**

```typescript
// @var GetCdnFileParams params
airgram.client.upload.getCdnFile(params).then((result: UploadCdnFileUnion) => {
  console.log(result)
})
```

### upload.getCdnFileHashes

**Signature:** upload.getCdnFileHashes(params: `GetCdnFileHashesParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`CdnFileHashUnion`](/docs/telegram-types.md#cdnfilehashunion)[]

**`GetCdnFileHashesParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `file_token` | number[] |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetCdnFileHashesParams {
  file_token: number[],
  offset: number
}
```


**Example:**

```typescript
// @var GetCdnFileHashesParams params
airgram.client.upload.getCdnFileHashes(params).then((result: CdnFileHashUnion[]) => {
  console.log(result)
})
```

### upload.getFile

**Signature:** upload.getFile(params: `GetFileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UploadFileUnion`](/docs/telegram-types.md#uploadfileunion)

**`GetFileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `location` | [InputFileLocationUnion](/docs/telegram-types.md#inputfilelocationunion) |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetFileParams {
  limit: number,
  location: InputFileLocationUnion,
  offset: number
}
```


**Example:**

```typescript
// @var GetFileParams params
airgram.client.upload.getFile(params).then((result: UploadFileUnion) => {
  console.log(result)
})
```

### upload.getWebFile

**Signature:** upload.getWebFile(params: `GetWebFileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UploadWebFileUnion`](/docs/telegram-types.md#uploadwebfileunion)

**`GetWebFileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `limit` | number |  |
| `location` | [InputWebFileLocationUnion](/docs/telegram-types.md#inputwebfilelocationunion) |  |
| `offset` | number |  |

TypeScript interface:

```typescript
interface GetWebFileParams {
  limit: number,
  location: InputWebFileLocationUnion,
  offset: number
}
```


**Example:**

```typescript
// @var GetWebFileParams params
airgram.client.upload.getWebFile(params).then((result: UploadWebFileUnion) => {
  console.log(result)
})
```

### upload.reuploadCdnFile

**Signature:** upload.reuploadCdnFile(params: `ReuploadCdnFileParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`CdnFileHashUnion`](/docs/telegram-types.md#cdnfilehashunion)[]

**`ReuploadCdnFileParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `file_token` | number[] |  |
| `request_token` | number[] |  |

TypeScript interface:

```typescript
interface ReuploadCdnFileParams {
  file_token: number[],
  request_token: number[]
}
```


**Example:**

```typescript
// @var ReuploadCdnFileParams params
airgram.client.upload.reuploadCdnFile(params).then((result: CdnFileHashUnion[]) => {
  console.log(result)
})
```

### upload.saveBigFilePart

**Signature:** upload.saveBigFilePart(params: `SaveBigFilePartParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveBigFilePartParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `bytes` | number[] |  |
| `file_id` | number |  |
| `file_part` | number |  |
| `file_total_parts` | number |  |

TypeScript interface:

```typescript
interface SaveBigFilePartParams {
  bytes: number[],
  file_id: number,
  file_part: number,
  file_total_parts: number
}
```


**Example:**

```typescript
// @var SaveBigFilePartParams params
airgram.client.upload.saveBigFilePart(params).then((result: boolean) => {
  console.log(result)
})
```

### upload.saveFilePart

**Signature:** upload.saveFilePart(params: `SaveFilePartParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): `boolean`

**`SaveFilePartParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `bytes` | number[] |  |
| `file_id` | number |  |
| `file_part` | number |  |

TypeScript interface:

```typescript
interface SaveFilePartParams {
  bytes: number[],
  file_id: number,
  file_part: number
}
```


**Example:**

```typescript
// @var SaveFilePartParams params
airgram.client.upload.saveFilePart(params).then((result: boolean) => {
  console.log(result)
})
```


## Users





### users.getFullUser

**Signature:** users.getFullUser(params: `GetFullUserParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserFullUnion`](/docs/telegram-types.md#userfullunion)

**`GetFullUserParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion) |  |

TypeScript interface:

```typescript
interface GetFullUserParams {
  id: InputUserUnion
}
```


**Example:**

```typescript
// @var GetFullUserParams params
airgram.client.users.getFullUser(params).then((result: UserFullUnion) => {
  console.log(result)
})
```

### users.getUsers

**Signature:** users.getUsers(params: `GetUsersParams`, options?: [`RequestOptions`](/docs/airgram-types.md#request-options)): [`UserUnion`](/docs/telegram-types.md#userunion)[]

**`GetUsersParams`:**

| Name | Type | Note |
| --- | --- | --- |
| `id` | [InputUserUnion](/docs/telegram-types.md#inputuserunion)[] |  |

TypeScript interface:

```typescript
interface GetUsersParams {
  id: InputUserUnion[]
}
```


**Example:**

```typescript
// @var GetUsersParams params
airgram.client.users.getUsers(params).then((result: UserUnion[]) => {
  console.log(result)
})
```


