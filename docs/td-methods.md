# TDLib methods

- [`acceptCall`](#acceptcall)
- [`acceptTermsOfService`](#accepttermsofservice)
- [`addChatMember`](#addchatmember)
- [`addChatMembers`](#addchatmembers)
- [`addFavoriteSticker`](#addfavoritesticker)
- [`addLocalMessage`](#addlocalmessage)
- [`addNetworkStatistics`](#addnetworkstatistics)
- [`addProxy`](#addproxy)
- [`addRecentSticker`](#addrecentsticker)
- [`addRecentlyFoundChat`](#addrecentlyfoundchat)
- [`addSavedAnimation`](#addsavedanimation)
- [`addStickerToSet`](#addstickertoset)
- [`answerCallbackQuery`](#answercallbackquery)
- [`answerCustomQuery`](#answercustomquery)
- [`answerInlineQuery`](#answerinlinequery)
- [`answerPreCheckoutQuery`](#answerprecheckoutquery)
- [`answerShippingQuery`](#answershippingquery)
- [`blockUser`](#blockuser)
- [`cancelDownloadFile`](#canceldownloadfile)
- [`cancelUploadFile`](#canceluploadfile)
- [`changeChatReportSpamState`](#changechatreportspamstate)
- [`changeImportedContacts`](#changeimportedcontacts)
- [`changePhoneNumber`](#changephonenumber)
- [`changeStickerSet`](#changestickerset)
- [`checkAuthenticationBotToken`](#checkauthenticationbottoken)
- [`checkAuthenticationCode`](#checkauthenticationcode)
- [`checkAuthenticationPassword`](#checkauthenticationpassword)
- [`checkChangePhoneNumberCode`](#checkchangephonenumbercode)
- [`checkChatInviteLink`](#checkchatinvitelink)
- [`checkChatUsername`](#checkchatusername)
- [`checkDatabaseEncryptionKey`](#checkdatabaseencryptionkey)
- [`checkEmailAddressVerificationCode`](#checkemailaddressverificationcode)
- [`checkPhoneNumberConfirmationCode`](#checkphonenumberconfirmationcode)
- [`checkPhoneNumberVerificationCode`](#checkphonenumberverificationcode)
- [`cleanFileName`](#cleanfilename)
- [`clearAllDraftMessages`](#clearalldraftmessages)
- [`clearImportedContacts`](#clearimportedcontacts)
- [`clearRecentStickers`](#clearrecentstickers)
- [`clearRecentlyFoundChats`](#clearrecentlyfoundchats)
- [`close`](#close)
- [`closeChat`](#closechat)
- [`closeSecretChat`](#closesecretchat)
- [`createBasicGroupChat`](#createbasicgroupchat)
- [`createCall`](#createcall)
- [`createNewBasicGroupChat`](#createnewbasicgroupchat)
- [`createNewSecretChat`](#createnewsecretchat)
- [`createNewStickerSet`](#createnewstickerset)
- [`createNewSupergroupChat`](#createnewsupergroupchat)
- [`createPrivateChat`](#createprivatechat)
- [`createSecretChat`](#createsecretchat)
- [`createSupergroupChat`](#createsupergroupchat)
- [`createTemporaryPassword`](#createtemporarypassword)
- [`deleteAccount`](#deleteaccount)
- [`deleteChatHistory`](#deletechathistory)
- [`deleteChatMessagesFromUser`](#deletechatmessagesfromuser)
- [`deleteChatReplyMarkup`](#deletechatreplymarkup)
- [`deleteFile`](#deletefile)
- [`deleteLanguagePack`](#deletelanguagepack)
- [`deleteMessages`](#deletemessages)
- [`deletePassportElement`](#deletepassportelement)
- [`deleteProfilePhoto`](#deleteprofilephoto)
- [`deleteSavedCredentials`](#deletesavedcredentials)
- [`deleteSavedOrderInfo`](#deletesavedorderinfo)
- [`deleteSupergroup`](#deletesupergroup)
- [`destroy`](#destroy)
- [`disableProxy`](#disableproxy)
- [`discardCall`](#discardcall)
- [`disconnectAllWebsites`](#disconnectallwebsites)
- [`disconnectWebsite`](#disconnectwebsite)
- [`downloadFile`](#downloadfile)
- [`editCustomLanguagePackInfo`](#editcustomlanguagepackinfo)
- [`editInlineMessageCaption`](#editinlinemessagecaption)
- [`editInlineMessageLiveLocation`](#editinlinemessagelivelocation)
- [`editInlineMessageMedia`](#editinlinemessagemedia)
- [`editInlineMessageReplyMarkup`](#editinlinemessagereplymarkup)
- [`editInlineMessageText`](#editinlinemessagetext)
- [`editMessageCaption`](#editmessagecaption)
- [`editMessageLiveLocation`](#editmessagelivelocation)
- [`editMessageMedia`](#editmessagemedia)
- [`editMessageReplyMarkup`](#editmessagereplymarkup)
- [`editMessageText`](#editmessagetext)
- [`editProxy`](#editproxy)
- [`enableProxy`](#enableproxy)
- [`finishFileGeneration`](#finishfilegeneration)
- [`forwardMessages`](#forwardmessages)
- [`generateChatInviteLink`](#generatechatinvitelink)
- [`getAccountTtl`](#getaccountttl)
- [`getActiveLiveLocationMessages`](#getactivelivelocationmessages)
- [`getActiveSessions`](#getactivesessions)
- [`getAllPassportElements`](#getallpassportelements)
- [`getArchivedStickerSets`](#getarchivedstickersets)
- [`getAttachedStickerSets`](#getattachedstickersets)
- [`getAuthorizationState`](#getauthorizationstate)
- [`getBasicGroup`](#getbasicgroup)
- [`getBasicGroupFullInfo`](#getbasicgroupfullinfo)
- [`getBlockedUsers`](#getblockedusers)
- [`getCallbackQueryAnswer`](#getcallbackqueryanswer)
- [`getChat`](#getchat)
- [`getChatAdministrators`](#getchatadministrators)
- [`getChatEventLog`](#getchateventlog)
- [`getChatHistory`](#getchathistory)
- [`getChatMember`](#getchatmember)
- [`getChatMessageByDate`](#getchatmessagebydate)
- [`getChatMessageCount`](#getchatmessagecount)
- [`getChatPinnedMessage`](#getchatpinnedmessage)
- [`getChatReportSpamState`](#getchatreportspamstate)
- [`getChats`](#getchats)
- [`getConnectedWebsites`](#getconnectedwebsites)
- [`getContacts`](#getcontacts)
- [`getCountryCode`](#getcountrycode)
- [`getCreatedPublicChats`](#getcreatedpublicchats)
- [`getDeepLinkInfo`](#getdeeplinkinfo)
- [`getFavoriteStickers`](#getfavoritestickers)
- [`getFile`](#getfile)
- [`getFileExtension`](#getfileextension)
- [`getFileMimeType`](#getfilemimetype)
- [`getGameHighScores`](#getgamehighscores)
- [`getGroupsInCommon`](#getgroupsincommon)
- [`getImportedContactCount`](#getimportedcontactcount)
- [`getInlineGameHighScores`](#getinlinegamehighscores)
- [`getInlineQueryResults`](#getinlinequeryresults)
- [`getInstalledStickerSets`](#getinstalledstickersets)
- [`getInviteText`](#getinvitetext)
- [`getLanguagePackString`](#getlanguagepackstring)
- [`getLanguagePackStrings`](#getlanguagepackstrings)
- [`getLocalizationTargetInfo`](#getlocalizationtargetinfo)
- [`getMapThumbnailFile`](#getmapthumbnailfile)
- [`getMe`](#getme)
- [`getMessage`](#getmessage)
- [`getMessages`](#getmessages)
- [`getNetworkStatistics`](#getnetworkstatistics)
- [`getOption`](#getoption)
- [`getPassportAuthorizationForm`](#getpassportauthorizationform)
- [`getPassportElement`](#getpassportelement)
- [`getPasswordState`](#getpasswordstate)
- [`getPaymentForm`](#getpaymentform)
- [`getPaymentReceipt`](#getpaymentreceipt)
- [`getPreferredCountryLanguage`](#getpreferredcountrylanguage)
- [`getProxies`](#getproxies)
- [`getProxyLink`](#getproxylink)
- [`getPublicMessageLink`](#getpublicmessagelink)
- [`getRecentInlineBots`](#getrecentinlinebots)
- [`getRecentStickers`](#getrecentstickers)
- [`getRecentlyVisitedTMeUrls`](#getrecentlyvisitedtmeurls)
- [`getRecoveryEmailAddress`](#getrecoveryemailaddress)
- [`getRemoteFile`](#getremotefile)
- [`getRepliedMessage`](#getrepliedmessage)
- [`getSavedAnimations`](#getsavedanimations)
- [`getSavedOrderInfo`](#getsavedorderinfo)
- [`getScopeNotificationSettings`](#getscopenotificationsettings)
- [`getSecretChat`](#getsecretchat)
- [`getStickerEmojis`](#getstickeremojis)
- [`getStickerSet`](#getstickerset)
- [`getStickers`](#getstickers)
- [`getStorageStatistics`](#getstoragestatistics)
- [`getStorageStatisticsFast`](#getstoragestatisticsfast)
- [`getSupergroup`](#getsupergroup)
- [`getSupergroupFullInfo`](#getsupergroupfullinfo)
- [`getSupergroupMembers`](#getsupergroupmembers)
- [`getSupportUser`](#getsupportuser)
- [`getTemporaryPasswordState`](#gettemporarypasswordstate)
- [`getTextEntities`](#gettextentities)
- [`getTopChats`](#gettopchats)
- [`getTrendingStickerSets`](#gettrendingstickersets)
- [`getUser`](#getuser)
- [`getUserFullInfo`](#getuserfullinfo)
- [`getUserPrivacySettingRules`](#getuserprivacysettingrules)
- [`getUserProfilePhotos`](#getuserprofilephotos)
- [`getWallpapers`](#getwallpapers)
- [`getWebPageInstantView`](#getwebpageinstantview)
- [`getWebPagePreview`](#getwebpagepreview)
- [`importContacts`](#importcontacts)
- [`joinChat`](#joinchat)
- [`joinChatByInviteLink`](#joinchatbyinvitelink)
- [`leaveChat`](#leavechat)
- [`logOut`](#logout)
- [`openChat`](#openchat)
- [`openMessageContent`](#openmessagecontent)
- [`optimizeStorage`](#optimizestorage)
- [`parseTextEntities`](#parsetextentities)
- [`pinSupergroupMessage`](#pinsupergroupmessage)
- [`pingProxy`](#pingproxy)
- [`processDcUpdate`](#processdcupdate)
- [`readAllChatMentions`](#readallchatmentions)
- [`recoverAuthenticationPassword`](#recoverauthenticationpassword)
- [`recoverPassword`](#recoverpassword)
- [`registerDevice`](#registerdevice)
- [`removeContacts`](#removecontacts)
- [`removeFavoriteSticker`](#removefavoritesticker)
- [`removeProxy`](#removeproxy)
- [`removeRecentHashtag`](#removerecenthashtag)
- [`removeRecentSticker`](#removerecentsticker)
- [`removeRecentlyFoundChat`](#removerecentlyfoundchat)
- [`removeSavedAnimation`](#removesavedanimation)
- [`removeStickerFromSet`](#removestickerfromset)
- [`removeTopChat`](#removetopchat)
- [`reorderInstalledStickerSets`](#reorderinstalledstickersets)
- [`reportChat`](#reportchat)
- [`reportSupergroupSpam`](#reportsupergroupspam)
- [`requestAuthenticationPasswordRecovery`](#requestauthenticationpasswordrecovery)
- [`requestPasswordRecovery`](#requestpasswordrecovery)
- [`resendAuthenticationCode`](#resendauthenticationcode)
- [`resendChangePhoneNumberCode`](#resendchangephonenumbercode)
- [`resendEmailAddressVerificationCode`](#resendemailaddressverificationcode)
- [`resendPhoneNumberConfirmationCode`](#resendphonenumberconfirmationcode)
- [`resendPhoneNumberVerificationCode`](#resendphonenumberverificationcode)
- [`resetAllNotificationSettings`](#resetallnotificationsettings)
- [`resetNetworkStatistics`](#resetnetworkstatistics)
- [`searchCallMessages`](#searchcallmessages)
- [`searchChatMembers`](#searchchatmembers)
- [`searchChatMessages`](#searchchatmessages)
- [`searchChatRecentLocationMessages`](#searchchatrecentlocationmessages)
- [`searchChats`](#searchchats)
- [`searchChatsOnServer`](#searchchatsonserver)
- [`searchContacts`](#searchcontacts)
- [`searchHashtags`](#searchhashtags)
- [`searchInstalledStickerSets`](#searchinstalledstickersets)
- [`searchMessages`](#searchmessages)
- [`searchPublicChat`](#searchpublicchat)
- [`searchPublicChats`](#searchpublicchats)
- [`searchSecretMessages`](#searchsecretmessages)
- [`searchStickerSet`](#searchstickerset)
- [`searchStickerSets`](#searchstickersets)
- [`searchStickers`](#searchstickers)
- [`sendBotStartMessage`](#sendbotstartmessage)
- [`sendCallDebugInformation`](#sendcalldebuginformation)
- [`sendCallRating`](#sendcallrating)
- [`sendChatAction`](#sendchataction)
- [`sendChatScreenshotTakenNotification`](#sendchatscreenshottakennotification)
- [`sendChatSetTtlMessage`](#sendchatsetttlmessage)
- [`sendCustomRequest`](#sendcustomrequest)
- [`sendEmailAddressVerificationCode`](#sendemailaddressverificationcode)
- [`sendInlineQueryResultMessage`](#sendinlinequeryresultmessage)
- [`sendMessage`](#sendmessage)
- [`sendMessageAlbum`](#sendmessagealbum)
- [`sendPassportAuthorizationForm`](#sendpassportauthorizationform)
- [`sendPaymentForm`](#sendpaymentform)
- [`sendPhoneNumberConfirmationCode`](#sendphonenumberconfirmationcode)
- [`sendPhoneNumberVerificationCode`](#sendphonenumberverificationcode)
- [`setAccountTtl`](#setaccountttl)
- [`setAlarm`](#setalarm)
- [`setAuthenticationPhoneNumber`](#setauthenticationphonenumber)
- [`setBio`](#setbio)
- [`setBotUpdatesStatus`](#setbotupdatesstatus)
- [`setChatClientData`](#setchatclientdata)
- [`setChatDraftMessage`](#setchatdraftmessage)
- [`setChatMemberStatus`](#setchatmemberstatus)
- [`setChatNotificationSettings`](#setchatnotificationsettings)
- [`setChatPhoto`](#setchatphoto)
- [`setChatTitle`](#setchattitle)
- [`setCustomLanguagePack`](#setcustomlanguagepack)
- [`setCustomLanguagePackString`](#setcustomlanguagepackstring)
- [`setDatabaseEncryptionKey`](#setdatabaseencryptionkey)
- [`setFileGenerationProgress`](#setfilegenerationprogress)
- [`setGameScore`](#setgamescore)
- [`setInlineGameScore`](#setinlinegamescore)
- [`setName`](#setname)
- [`setNetworkType`](#setnetworktype)
- [`setOption`](#setoption)
- [`setPassportElement`](#setpassportelement)
- [`setPassportElementErrors`](#setpassportelementerrors)
- [`setPassword`](#setpassword)
- [`setPinnedChats`](#setpinnedchats)
- [`setProfilePhoto`](#setprofilephoto)
- [`setRecoveryEmailAddress`](#setrecoveryemailaddress)
- [`setScopeNotificationSettings`](#setscopenotificationsettings)
- [`setStickerPositionInSet`](#setstickerpositioninset)
- [`setSupergroupDescription`](#setsupergroupdescription)
- [`setSupergroupStickerSet`](#setsupergroupstickerset)
- [`setSupergroupUsername`](#setsupergroupusername)
- [`setTdlibParameters`](#settdlibparameters)
- [`setUserPrivacySettingRules`](#setuserprivacysettingrules)
- [`setUsername`](#setusername)
- [`terminateAllOtherSessions`](#terminateallothersessions)
- [`terminateSession`](#terminatesession)
- [`testCallBytes`](#testcallbytes)
- [`testCallEmpty`](#testcallempty)
- [`testCallString`](#testcallstring)
- [`testCallVectorInt`](#testcallvectorint)
- [`testCallVectorIntObject`](#testcallvectorintobject)
- [`testCallVectorString`](#testcallvectorstring)
- [`testCallVectorStringObject`](#testcallvectorstringobject)
- [`testGetDifference`](#testgetdifference)
- [`testNetwork`](#testnetwork)
- [`testSquareInt`](#testsquareint)
- [`testUseError`](#testuseerror)
- [`testUseUpdate`](#testuseupdate)
- [`toggleBasicGroupAdministrators`](#togglebasicgroupadministrators)
- [`toggleChatDefaultDisableNotification`](#togglechatdefaultdisablenotification)
- [`toggleChatIsMarkedAsUnread`](#togglechatismarkedasunread)
- [`toggleChatIsPinned`](#togglechatispinned)
- [`toggleSupergroupInvites`](#togglesupergroupinvites)
- [`toggleSupergroupIsAllHistoryAvailable`](#togglesupergroupisallhistoryavailable)
- [`toggleSupergroupSignMessages`](#togglesupergroupsignmessages)
- [`unblockUser`](#unblockuser)
- [`unpinSupergroupMessage`](#unpinsupergroupmessage)
- [`upgradeBasicGroupChatToSupergroupChat`](#upgradebasicgroupchattosupergroupchat)
- [`uploadFile`](#uploadfile)
- [`uploadStickerFile`](#uploadstickerfile)
- [`validateOrderInfo`](#validateorderinfo)
- [`viewMessages`](#viewmessages)
- [`viewTrendingStickerSets`](#viewtrendingstickersets)
-------------
### `acceptCall`
Accepts an incoming call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `protocol` | [CallProtocolInput](./td-inputs.md#callprotocolinput) | Description of the call protocols supported by the client |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AcceptCallParams {
  callId?: number
  protocol?: CallProtocolInput
}

function acceptCall(airgram: Airgram, params: AcceptCallParams): Promise<OkUnion> {
 return airgram.api.acceptCall(params)
}
```


### `acceptTermsOfService`
Accepts Telegram terms of services


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `termsOfServiceId` | string | Terms of service identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AcceptTermsOfServiceParams {
  termsOfServiceId?: string
}

function acceptTermsOfService(airgram: Airgram, params: AcceptTermsOfServiceParams): Promise<OkUnion> {
 return airgram.api.acceptTermsOfService(params)
}
```


### `addChatMember`
Adds a new member to a chat. Members can't be added to private or secret chats. Members will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | Identifier of the user |
| `forwardLimit` | number | The number of earlier messages from the chat to be forwarded to the new member; up to 300. Ignored for supergroups and channels |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddChatMemberParams {
  chatId?: number
  userId?: number
  forwardLimit?: number
}

function addChatMember(airgram: Airgram, params: AddChatMemberParams): Promise<OkUnion> {
 return airgram.api.addChatMember(params)
}
```


### `addChatMembers`
Adds multiple new members to a chat. Currently this option is only available for supergroups and channels. This option can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Members will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userIds` | number[] | Identifiers of the users to be added to the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddChatMembersParams {
  chatId?: number
  userIds?: number[]
}

function addChatMembers(airgram: Airgram, params: AddChatMembersParams): Promise<OkUnion> {
 return airgram.api.addChatMembers(params)
}
```


### `addFavoriteSticker`
Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to add |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddFavoriteStickerParams {
  sticker?: InputFileInputUnion
}

function addFavoriteSticker(airgram: Airgram, params: AddFavoriteStickerParams): Promise<OkUnion> {
 return airgram.api.addFavoriteSticker(params)
}
```


### `addLocalMessage`
Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `senderUserId` | number | Identifier of the user who will be shown as the sender of the message; may be 0 for channel posts |
| `replyToMessageId` | number | Identifier of the message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | The content of the message to be added |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface AddLocalMessageParams {
  chatId?: number
  senderUserId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  inputMessageContent?: InputMessageContentInputUnion
}

function addLocalMessage(airgram: Airgram, params: AddLocalMessageParams): Promise<MessageUnion> {
 return airgram.api.addLocalMessage(params)
}
```


### `addNetworkStatistics`
Adds the specified data to data usage statistics. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `entry` | [NetworkStatisticsEntryInputUnion](./td-inputs.md#networkstatisticsentryinputunion) | The network statistics entry with the data to be added to statistics |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddNetworkStatisticsParams {
  entry?: NetworkStatisticsEntryInputUnion
}

function addNetworkStatistics(airgram: Airgram, params: AddNetworkStatisticsParams): Promise<OkUnion> {
 return airgram.api.addNetworkStatistics(params)
}
```


### `addProxy`
Adds a proxy server for network requests. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `server` | string | Proxy server IP address |
| `port` | number | Proxy server port |
| `enable` | boolean | True, if the proxy should be enabled |
| `type` | [ProxyTypeInputUnion](./td-inputs.md#proxytypeinputunion) | Proxy type |


**Returns type:** [ProxyUnion](./td-outputs.md#proxyunion)


Typescript example:
```typescript
interface AddProxyParams {
  server?: string
  port?: number
  enable?: boolean
  type?: ProxyTypeInputUnion
}

function addProxy(airgram: Airgram, params: AddProxyParams): Promise<ProxyUnion> {
 return airgram.api.addProxy(params)
}
```


### `addRecentSticker`
Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to add the sticker to the list of stickers recently attached to photo or video files; pass false to add the sticker to the list of recently sent stickers |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to add |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
interface AddRecentStickerParams {
  isAttached?: boolean
  sticker?: InputFileInputUnion
}

function addRecentSticker(airgram: Airgram, params: AddRecentStickerParams): Promise<StickersUnion> {
 return airgram.api.addRecentSticker(params)
}
```


### `addRecentlyFoundChat`
Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already in the list, it will be removed from the list first


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to add |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddRecentlyFoundChatParams {
  chatId?: number
}

function addRecentlyFoundChat(airgram: Airgram, params: AddRecentlyFoundChatParams): Promise<OkUnion> {
 return airgram.api.addRecentlyFoundChat(params)
}
```


### `addSavedAnimation`
Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first. Only non-secret video animations with MIME type "video/mp4" can be added to the list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `animation` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | The animation file to be added. Only animations known to the server (i.e. successfully sent via a message) can be added to the list |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AddSavedAnimationParams {
  animation?: InputFileInputUnion
}

function addSavedAnimation(airgram: Airgram, params: AddSavedAnimationParams): Promise<OkUnion> {
 return airgram.api.addSavedAnimation(params)
}
```


### `addStickerToSet`
Adds a new sticker to a set; for bots only. Returns the sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker set owner |
| `name` | string | Sticker set name |
| `sticker` | [InputStickerInput](./td-inputs.md#inputstickerinput) | Sticker to add to the set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
interface AddStickerToSetParams {
  userId?: number
  name?: string
  sticker?: InputStickerInput
}

function addStickerToSet(airgram: Airgram, params: AddStickerToSetParams): Promise<StickerSetUnion> {
 return airgram.api.addStickerToSet(params)
}
```


### `answerCallbackQuery`
Sets the result of a callback query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callbackQueryId` | number &#124; string | Identifier of the callback query |
| `text` | string | Text of the answer |
| `showAlert` | boolean | If true, an alert should be shown to the user instead of a toast notification |
| `url` | string | URL to be opened |
| `cacheTime` | number | Time during which the result of the query can be cached, in seconds |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AnswerCallbackQueryParams {
  callbackQueryId?: number | string
  text?: string
  showAlert?: boolean
  url?: string
  cacheTime?: number
}

function answerCallbackQuery(airgram: Airgram, params: AnswerCallbackQueryParams): Promise<OkUnion> {
 return airgram.api.answerCallbackQuery(params)
}
```


### `answerCustomQuery`
Answers a custom query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `customQueryId` | number &#124; string | Identifier of a custom query |
| `data` | string | JSON-serialized answer to the query |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AnswerCustomQueryParams {
  customQueryId?: number | string
  data?: string
}

function answerCustomQuery(airgram: Airgram, params: AnswerCustomQueryParams): Promise<OkUnion> {
 return airgram.api.answerCustomQuery(params)
}
```


### `answerInlineQuery`
Sets the result of an inline query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineQueryId` | number &#124; string | Identifier of the inline query |
| `isPersonal` | boolean | True, if the result of the query can be cached for the specified user |
| `results` | [InputInlineQueryResultInputUnion[]](./td-inputs.md#inputinlinequeryresultinputunion) | The results of the query |
| `cacheTime` | number | Allowed time to cache the results of the query, in seconds |
| `nextOffset` | string | Offset for the next inline query; pass an empty string if there are no more results |
| `switchPmText` | string | If non-empty, this text should be shown on the button that opens a private chat with the bot and sends a start message to the bot with the parameter switch_pm_parameter |
| `switchPmParameter` | string | The parameter for the bot start message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AnswerInlineQueryParams {
  inlineQueryId?: number | string
  isPersonal?: boolean
  results?: InputInlineQueryResultInputUnion[]
  cacheTime?: number
  nextOffset?: string
  switchPmText?: string
  switchPmParameter?: string
}

function answerInlineQuery(airgram: Airgram, params: AnswerInlineQueryParams): Promise<OkUnion> {
 return airgram.api.answerInlineQuery(params)
}
```


### `answerPreCheckoutQuery`
Sets the result of a pre-checkout query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `preCheckoutQueryId` | number &#124; string | Identifier of the pre-checkout query |
| `errorMessage` | string | An error message, empty on success |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AnswerPreCheckoutQueryParams {
  preCheckoutQueryId?: number | string
  errorMessage?: string
}

function answerPreCheckoutQuery(airgram: Airgram, params: AnswerPreCheckoutQueryParams): Promise<OkUnion> {
 return airgram.api.answerPreCheckoutQuery(params)
}
```


### `answerShippingQuery`
Sets the result of a shipping query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `shippingQueryId` | number &#124; string | Identifier of the shipping query |
| `shippingOptions` | [ShippingOptionInput[]](./td-inputs.md#shippingoptioninput) | Available shipping options |
| `errorMessage` | string | An error message, empty on success |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface AnswerShippingQueryParams {
  shippingQueryId?: number | string
  shippingOptions?: ShippingOptionInput[]
  errorMessage?: string
}

function answerShippingQuery(airgram: Airgram, params: AnswerShippingQueryParams): Promise<OkUnion> {
 return airgram.api.answerShippingQuery(params)
}
```


### `blockUser`
Adds a user to the blacklist


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface BlockUserParams {
  userId?: number
}

function blockUser(airgram: Airgram, params: BlockUserParams): Promise<OkUnion> {
 return airgram.api.blockUser(params)
}
```


### `cancelDownloadFile`
Stops the downloading of a file. If a file has already been downloaded, does nothing


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of a file to stop downloading |
| `onlyIfPending` | boolean | Pass true to stop downloading only if it hasn't been started, i.e. request hasn't been sent to server |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CancelDownloadFileParams {
  fileId?: number
  onlyIfPending?: boolean
}

function cancelDownloadFile(airgram: Airgram, params: CancelDownloadFileParams): Promise<OkUnion> {
 return airgram.api.cancelDownloadFile(params)
}
```


### `cancelUploadFile`
Stops the uploading of a file. Supported only for files uploaded by using uploadFile. For other files the behavior is undefined


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to stop uploading |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CancelUploadFileParams {
  fileId?: number
}

function cancelUploadFile(airgram: Airgram, params: CancelUploadFileParams): Promise<OkUnion> {
 return airgram.api.cancelUploadFile(params)
}
```


### `changeChatReportSpamState`
Used to let the server know whether a chat is spam or not. Can be used only if ChatReportSpamState.can_report_spam is true. After this request, ChatReportSpamState.can_report_spam becomes false forever


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isSpamChat` | boolean | If true, the chat will be reported as spam; otherwise it will be marked as not spam |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ChangeChatReportSpamStateParams {
  chatId?: number
  isSpamChat?: boolean
}

function changeChatReportSpamState(airgram: Airgram, params: ChangeChatReportSpamStateParams): Promise<OkUnion> {
 return airgram.api.changeChatReportSpamState(params)
}
```


### `changeImportedContacts`
Changes imported contacts using the list of current user contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts. Query result depends on the result of the previous query, so only one query is possible at the same time


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `contacts` | [ContactInput[]](./td-inputs.md#contactinput) | The new list of contacts, contact's vCard are ignored and are not imported |


**Returns type:** [ImportedContactsUnion](./td-outputs.md#importedcontactsunion)


Typescript example:
```typescript
interface ChangeImportedContactsParams {
  contacts?: ContactInput[]
}

function changeImportedContacts(airgram: Airgram, params: ChangeImportedContactsParams): Promise<ImportedContactsUnion> {
 return airgram.api.changeImportedContacts(params)
}
```


### `changePhoneNumber`
Changes the phone number of the user and sends an authentication code to the user's new phone number. On success, returns information about the sent code


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The new phone number of the user in international format |
| `allowFlashCall` | boolean | Pass true if the code can be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
interface ChangePhoneNumberParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function changePhoneNumber(airgram: Airgram, params: ChangePhoneNumberParams): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.changePhoneNumber(params)
}
```


### `changeStickerSet`
Installs/uninstalls or activates/archives a sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setId` | number &#124; string | Identifier of the sticker set |
| `isInstalled` | boolean | The new value of is_installed |
| `isArchived` | boolean | The new value of is_archived. A sticker set can't be installed and archived simultaneously |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ChangeStickerSetParams {
  setId?: number | string
  isInstalled?: boolean
  isArchived?: boolean
}

function changeStickerSet(airgram: Airgram, params: ChangeStickerSetParams): Promise<OkUnion> {
 return airgram.api.changeStickerSet(params)
}
```


### `checkAuthenticationBotToken`
Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to log in


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `token` | string | The bot token |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckAuthenticationBotTokenParams {
  token?: string
}

function checkAuthenticationBotToken(airgram: Airgram, params: CheckAuthenticationBotTokenParams): Promise<OkUnion> {
 return airgram.api.checkAuthenticationBotToken(params)
}
```


### `checkAuthenticationCode`
Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | The verification code received via SMS, Telegram message, phone call, or flash call |
| `firstName` | string | If the user is not yet registered, the first name of the user; 1-255 characters |
| `lastName` | string | If the user is not yet registered; the last name of the user; optional; 0-255 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckAuthenticationCodeParams {
  code?: string
  firstName?: string
  lastName?: string
}

function checkAuthenticationCode(airgram: Airgram, params: CheckAuthenticationCodeParams): Promise<OkUnion> {
 return airgram.api.checkAuthenticationCode(params)
}
```


### `checkAuthenticationPassword`
Checks the authentication password for correctness. Works only when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | The password to check |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckAuthenticationPasswordParams {
  password?: string
}

function checkAuthenticationPassword(airgram: Airgram, params: CheckAuthenticationPasswordParams): Promise<OkUnion> {
 return airgram.api.checkAuthenticationPassword(params)
}
```


### `checkChangePhoneNumberCode`
Checks the authentication code sent to confirm a new phone number of the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code received by SMS, phone call or flash call |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckChangePhoneNumberCodeParams {
  code?: string
}

function checkChangePhoneNumberCode(airgram: Airgram, params: CheckChangePhoneNumberCodeParams): Promise<OkUnion> {
 return airgram.api.checkChangePhoneNumberCode(params)
}
```


### `checkChatInviteLink`
Checks the validity of an invite link for a chat and returns information about the corresponding chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inviteLink` | string | Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/" |


**Returns type:** [ChatInviteLinkInfoUnion](./td-outputs.md#chatinvitelinkinfounion)


Typescript example:
```typescript
interface CheckChatInviteLinkParams {
  inviteLink?: string
}

function checkChatInviteLink(airgram: Airgram, params: CheckChatInviteLinkParams): Promise<ChatInviteLinkInfoUnion> {
 return airgram.api.checkChatInviteLink(params)
}
```


### `checkChatUsername`
Checks whether a username can be set for a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number &#124; string | Chat identifier; should be identifier of a supergroup chat, or a channel chat, or a private chat with self, or zero if chat is being created |
| `username` | string | Username to be checked |


**Returns type:** [CheckChatUsernameResultUnion](./td-outputs.md#checkchatusernameresultunion)


Typescript example:
```typescript
interface CheckChatUsernameParams {
  chatId?: number | string
  username?: string
}

function checkChatUsername(airgram: Airgram, params: CheckChatUsernameParams): Promise<CheckChatUsernameResultUnion> {
 return airgram.api.checkChatUsername(params)
}
```


### `checkDatabaseEncryptionKey`
Checks the database encryption key for correctness. Works only when the current authorization state is authorizationStateWaitEncryptionKey


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `encryptionKey` | string | Encryption key to check or set up |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckDatabaseEncryptionKeyParams {
  encryptionKey?: string
}

function checkDatabaseEncryptionKey(airgram: Airgram, params: CheckDatabaseEncryptionKeyParams): Promise<OkUnion> {
 return airgram.api.checkDatabaseEncryptionKey(params)
}
```


### `checkEmailAddressVerificationCode`
Checks the email address verification code for Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckEmailAddressVerificationCodeParams {
  code?: string
}

function checkEmailAddressVerificationCode(airgram: Airgram, params: CheckEmailAddressVerificationCodeParams): Promise<OkUnion> {
 return airgram.api.checkEmailAddressVerificationCode(params)
}
```


### `checkPhoneNumberConfirmationCode`
Checks phone number confirmation code


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | The phone number confirmation code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckPhoneNumberConfirmationCodeParams {
  code?: string
}

function checkPhoneNumberConfirmationCode(airgram: Airgram, params: CheckPhoneNumberConfirmationCodeParams): Promise<OkUnion> {
 return airgram.api.checkPhoneNumberConfirmationCode(params)
}
```


### `checkPhoneNumberVerificationCode`
Checks the phone number verification code for Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CheckPhoneNumberVerificationCodeParams {
  code?: string
}

function checkPhoneNumberVerificationCode(airgram: Airgram, params: CheckPhoneNumberVerificationCodeParams): Promise<OkUnion> {
 return airgram.api.checkPhoneNumberVerificationCode(params)
}
```


### `cleanFileName`
Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileName` | string | File name or path to the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
interface CleanFileNameParams {
  fileName?: string
}

function cleanFileName(airgram: Airgram, params: CleanFileNameParams): Promise<TextUnion> {
 return airgram.api.cleanFileName(params)
}
```


### `clearAllDraftMessages`
Clears draft messages in all chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `excludeSecretChats` | boolean | If true, local draft messages in secret chats will not be cleared |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ClearAllDraftMessagesParams {
  excludeSecretChats?: boolean
}

function clearAllDraftMessages(airgram: Airgram, params: ClearAllDraftMessagesParams): Promise<OkUnion> {
 return airgram.api.clearAllDraftMessages(params)
}
```


### `clearImportedContacts`
Clears all imported contacts, contacts list remains unchanged




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function clearImportedContacts(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.clearImportedContacts()
}
```


### `clearRecentStickers`
Clears the list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to clear the list of stickers recently attached to photo or video files; pass false to clear the list of recently sent stickers |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ClearRecentStickersParams {
  isAttached?: boolean
}

function clearRecentStickers(airgram: Airgram, params: ClearRecentStickersParams): Promise<OkUnion> {
 return airgram.api.clearRecentStickers(params)
}
```


### `clearRecentlyFoundChats`
Clears the list of recently found chats




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function clearRecentlyFoundChats(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.clearRecentlyFoundChats()
}
```


### `close`
Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes, updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function close(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.close()
}
```


### `closeChat`
This method should be called if the chat is closed by the user. Many useful activities depend on the chat being opened or closed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CloseChatParams {
  chatId?: number
}

function closeChat(airgram: Airgram, params: CloseChatParams): Promise<OkUnion> {
 return airgram.api.closeChat(params)
}
```


### `closeSecretChat`
Closes a secret chat, effectively transfering its state to secretChatStateClosed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface CloseSecretChatParams {
  secretChatId?: number
}

function closeSecretChat(airgram: Airgram, params: CloseSecretChatParams): Promise<OkUnion> {
 return airgram.api.closeSecretChat(params)
}
```


### `createBasicGroupChat`
Returns an existing chat corresponding to a known basic group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateBasicGroupChatParams {
  basicGroupId?: number
  force?: boolean
}

function createBasicGroupChat(airgram: Airgram, params: CreateBasicGroupChatParams): Promise<ChatUnion> {
 return airgram.api.createBasicGroupChat(params)
}
```


### `createCall`
Creates a new call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Identifier of the user to be called |
| `protocol` | [CallProtocolInput](./td-inputs.md#callprotocolinput) | Description of the call protocols supported by the client |


**Returns type:** [CallIdUnion](./td-outputs.md#callidunion)


Typescript example:
```typescript
interface CreateCallParams {
  userId?: number
  protocol?: CallProtocolInput
}

function createCall(airgram: Airgram, params: CreateCallParams): Promise<CallIdUnion> {
 return airgram.api.createCall(params)
}
```


### `createNewBasicGroupChat`
Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userIds` | number[] | Identifiers of users to be added to the basic group |
| `title` | string | Title of the new basic group; 1-255 characters |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateNewBasicGroupChatParams {
  userIds?: number[]
  title?: string
}

function createNewBasicGroupChat(airgram: Airgram, params: CreateNewBasicGroupChatParams): Promise<ChatUnion> {
 return airgram.api.createNewBasicGroupChat(params)
}
```


### `createNewSecretChat`
Creates a new secret chat. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Identifier of the target user |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateNewSecretChatParams {
  userId?: number
}

function createNewSecretChat(airgram: Airgram, params: CreateNewSecretChatParams): Promise<ChatUnion> {
 return airgram.api.createNewSecretChat(params)
}
```


### `createNewStickerSet`
Creates a new sticker set; for bots only. Returns the newly created sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker set owner |
| `title` | string | Sticker set title; 1-64 characters |
| `name` | string | Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters |
| `isMasks` | boolean | True, if stickers are masks |
| `stickers` | [InputStickerInput[]](./td-inputs.md#inputstickerinput) | List of stickers to be added to the set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
interface CreateNewStickerSetParams {
  userId?: number
  title?: string
  name?: string
  isMasks?: boolean
  stickers?: InputStickerInput[]
}

function createNewStickerSet(airgram: Airgram, params: CreateNewStickerSetParams): Promise<StickerSetUnion> {
 return airgram.api.createNewStickerSet(params)
}
```


### `createNewSupergroupChat`
Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `title` | string | Title of the new chat; 1-255 characters |
| `isChannel` | boolean | True, if a channel chat should be created |
| `description` | string | Chat description; 0-255 characters |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateNewSupergroupChatParams {
  title?: string
  isChannel?: boolean
  description?: string
}

function createNewSupergroupChat(airgram: Airgram, params: CreateNewSupergroupChatParams): Promise<ChatUnion> {
 return airgram.api.createNewSupergroupChat(params)
}
```


### `createPrivateChat`
Returns an existing chat corresponding to a given user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreatePrivateChatParams {
  userId?: number
  force?: boolean
}

function createPrivateChat(airgram: Airgram, params: CreatePrivateChatParams): Promise<ChatUnion> {
 return airgram.api.createPrivateChat(params)
}
```


### `createSecretChat`
Returns an existing chat corresponding to a known secret chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateSecretChatParams {
  secretChatId?: number
}

function createSecretChat(airgram: Airgram, params: CreateSecretChatParams): Promise<ChatUnion> {
 return airgram.api.createSecretChat(params)
}
```


### `createSupergroupChat`
Returns an existing chat corresponding to a known supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface CreateSupergroupChatParams {
  supergroupId?: number
  force?: boolean
}

function createSupergroupChat(airgram: Airgram, params: CreateSupergroupChatParams): Promise<ChatUnion> {
 return airgram.api.createSupergroupChat(params)
}
```


### `createTemporaryPassword`
Creates a new temporary password for processing payments


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Persistent user password |
| `validFor` | number | Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 |


**Returns type:** [TemporaryPasswordStateUnion](./td-outputs.md#temporarypasswordstateunion)


Typescript example:
```typescript
interface CreateTemporaryPasswordParams {
  password?: string
  validFor?: number
}

function createTemporaryPassword(airgram: Airgram, params: CreateTemporaryPasswordParams): Promise<TemporaryPasswordStateUnion> {
 return airgram.api.createTemporaryPassword(params)
}
```


### `deleteAccount`
Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account. Can be called before authorization when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `reason` | string | The reason why the account was deleted; optional |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteAccountParams {
  reason?: string
}

function deleteAccount(airgram: Airgram, params: DeleteAccountParams): Promise<OkUnion> {
 return airgram.api.deleteAccount(params)
}
```


### `deleteChatHistory`
Deletes all messages in the chat only for the user. Cannot be used in channels and public supergroups


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `removeFromChatList` | boolean | Pass true if the chat should be removed from the chats list |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteChatHistoryParams {
  chatId?: number
  removeFromChatList?: boolean
}

function deleteChatHistory(airgram: Airgram, params: DeleteChatHistoryParams): Promise<OkUnion> {
 return airgram.api.deleteChatHistory(params)
}
```


### `deleteChatMessagesFromUser`
Deletes all messages sent by the specified user to a chat. Supported only in supergroups; requires can_delete_messages administrator privileges


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteChatMessagesFromUserParams {
  chatId?: number
  userId?: number
}

function deleteChatMessagesFromUser(airgram: Airgram, params: DeleteChatMessagesFromUserParams): Promise<OkUnion> {
 return airgram.api.deleteChatMessagesFromUser(params)
}
```


### `deleteChatReplyMarkup`
Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if the reply markup will be changed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageId` | number | The message identifier of the used keyboard |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteChatReplyMarkupParams {
  chatId?: number
  messageId?: number
}

function deleteChatReplyMarkup(airgram: Airgram, params: DeleteChatReplyMarkupParams): Promise<OkUnion> {
 return airgram.api.deleteChatReplyMarkup(params)
}
```


### `deleteFile`
Deletes a file from the TDLib file cache


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteFileParams {
  fileId?: number
}

function deleteFile(airgram: Airgram, params: DeleteFileParams): Promise<OkUnion> {
 return airgram.api.deleteFile(params)
}
```


### `deleteLanguagePack`
Deletes all information about a language pack in the current localization target. The language pack that is currently in use can't be deleted


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Identifier of the language pack to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteLanguagePackParams {
  languagePackId?: string
}

function deleteLanguagePack(airgram: Airgram, params: DeleteLanguagePackParams): Promise<OkUnion> {
 return airgram.api.deleteLanguagePack(params)
}
```


### `deleteMessages`
Deletes messages


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageIds` | number[] | Identifiers of the messages to be deleted |
| `revoke` | boolean | Pass true to try to delete outgoing messages for all chat members (may fail if messages are too old). Always true for supergroups, channels and secret chats |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteMessagesParams {
  chatId?: number
  messageIds?: number[]
  revoke?: boolean
}

function deleteMessages(airgram: Airgram, params: DeleteMessagesParams): Promise<OkUnion> {
 return airgram.api.deleteMessages(params)
}
```


### `deletePassportElement`
Deletes a Telegram Passport element


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [PassportElementTypeInputUnion](./td-inputs.md#passportelementtypeinputunion) | Element type |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeletePassportElementParams {
  type?: PassportElementTypeInputUnion
}

function deletePassportElement(airgram: Airgram, params: DeletePassportElementParams): Promise<OkUnion> {
 return airgram.api.deletePassportElement(params)
}
```


### `deleteProfilePhoto`
Deletes a profile photo. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `profilePhotoId` | number &#124; string | Identifier of the profile photo to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteProfilePhotoParams {
  profilePhotoId?: number | string
}

function deleteProfilePhoto(airgram: Airgram, params: DeleteProfilePhotoParams): Promise<OkUnion> {
 return airgram.api.deleteProfilePhoto(params)
}
```


### `deleteSavedCredentials`
Deletes saved credentials for all payment provider bots




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function deleteSavedCredentials(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.deleteSavedCredentials()
}
```


### `deleteSavedOrderInfo`
Deletes saved order info




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function deleteSavedOrderInfo(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.deleteSavedOrderInfo()
}
```


### `deleteSupergroup`
Deletes a supergroup or channel along with all messages in the corresponding chat. This will release the supergroup or channel username and remove all members; requires creator privileges in the supergroup or channel. Chats with more than 1000 members can't be deleted using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DeleteSupergroupParams {
  supergroupId?: number
}

function deleteSupergroup(airgram: Airgram, params: DeleteSupergroupParams): Promise<OkUnion> {
 return airgram.api.deleteSupergroup(params)
}
```


### `destroy`
Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed. After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function destroy(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.destroy()
}
```


### `disableProxy`
Disables the currently enabled proxy. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function disableProxy(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.disableProxy()
}
```


### `discardCall`
Discards a call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `isDisconnected` | boolean | True, if the user was disconnected |
| `duration` | number | The call duration, in seconds |
| `connectionId` | number &#124; string | Identifier of the connection used during the call |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DiscardCallParams {
  callId?: number
  isDisconnected?: boolean
  duration?: number
  connectionId?: number | string
}

function discardCall(airgram: Airgram, params: DiscardCallParams): Promise<OkUnion> {
 return airgram.api.discardCall(params)
}
```


### `disconnectAllWebsites`
Disconnects all websites from the current user's Telegram account




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function disconnectAllWebsites(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.disconnectAllWebsites()
}
```


### `disconnectWebsite`
Disconnects website from the current user's Telegram account


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `websiteId` | number &#124; string | Website identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface DisconnectWebsiteParams {
  websiteId?: number | string
}

function disconnectWebsite(airgram: Airgram, params: DisconnectWebsiteParams): Promise<OkUnion> {
 return airgram.api.disconnectWebsite(params)
}
```


### `downloadFile`
Asynchronously downloads a file from the cloud. updateFile will be used to notify about the download progress and successful completion of the download. Returns file state just after the download has been started


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to download |
| `priority` | number | Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile was called will be downloaded first |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface DownloadFileParams {
  fileId?: number
  priority?: number
}

function downloadFile(airgram: Airgram, params: DownloadFileParams): Promise<FileUnion> {
 return airgram.api.downloadFile(params)
}
```


### `editCustomLanguagePackInfo`
Edits information about a custom language pack in the current localization target


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `info` | [LanguagePackInfoInput](./td-inputs.md#languagepackinfoinput) | New information about the custom language pack |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditCustomLanguagePackInfoParams {
  info?: LanguagePackInfoInput
}

function editCustomLanguagePackInfo(airgram: Airgram, params: EditCustomLanguagePackInfoParams): Promise<OkUnion> {
 return airgram.api.editCustomLanguagePackInfo(params)
}
```


### `editInlineMessageCaption`
Edits the caption of an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `caption` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | New message content caption; 0-GetOption("message_caption_length_max") characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditInlineMessageCaptionParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  caption?: FormattedTextInput
}

function editInlineMessageCaption(airgram: Airgram, params: EditInlineMessageCaptionParams): Promise<OkUnion> {
 return airgram.api.editInlineMessageCaption(params)
}
```


### `editInlineMessageLiveLocation`
Edits the content of a live location in an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `location` | [LocationInput](./td-inputs.md#locationinput) | New location content of the message; may be null. Pass null to stop sharing the live location |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditInlineMessageLiveLocationParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  location?: LocationInput
}

function editInlineMessageLiveLocation(airgram: Airgram, params: EditInlineMessageLiveLocationParams): Promise<OkUnion> {
 return airgram.api.editInlineMessageLiveLocation(params)
}
```


### `editInlineMessageMedia`
Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New content of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditInlineMessageMediaParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editInlineMessageMedia(airgram: Airgram, params: EditInlineMessageMediaParams): Promise<OkUnion> {
 return airgram.api.editInlineMessageMedia(params)
}
```


### `editInlineMessageReplyMarkup`
Edits the reply markup of an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditInlineMessageReplyMarkupParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
}

function editInlineMessageReplyMarkup(airgram: Airgram, params: EditInlineMessageReplyMarkupParams): Promise<OkUnion> {
 return airgram.api.editInlineMessageReplyMarkup(params)
}
```


### `editInlineMessageText`
Edits the text of an inline text or game message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New text content of the message. Should be of type InputMessageText |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EditInlineMessageTextParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editInlineMessageText(airgram: Airgram, params: EditInlineMessageTextParams): Promise<OkUnion> {
 return airgram.api.editInlineMessageText(params)
}
```


### `editMessageCaption`
Edits the message content caption. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `caption` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | New message content caption; 0-GetOption("message_caption_length_max") characters |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface EditMessageCaptionParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  caption?: FormattedTextInput
}

function editMessageCaption(airgram: Airgram, params: EditMessageCaptionParams): Promise<MessageUnion> {
 return airgram.api.editMessageCaption(params)
}
```


### `editMessageLiveLocation`
Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `location` | [LocationInput](./td-inputs.md#locationinput) | New location content of the message; may be null. Pass null to stop sharing the live location |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface EditMessageLiveLocationParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  location?: LocationInput
}

function editMessageLiveLocation(airgram: Airgram, params: EditMessageLiveLocationParams): Promise<MessageUnion> {
 return airgram.api.editMessageLiveLocation(params)
}
```


### `editMessageMedia`
Edits the content of a message with an animation, an audio, a document, a photo or a video. The media in the message can't be replaced if the message was set to self-destruct. Media can't be replaced by self-destructing media. Media in an album can be edited only to contain a photo or a video. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New content of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface EditMessageMediaParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editMessageMedia(airgram: Airgram, params: EditMessageMediaParams): Promise<MessageUnion> {
 return airgram.api.editMessageMedia(params)
}
```


### `editMessageReplyMarkup`
Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface EditMessageReplyMarkupParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
}

function editMessageReplyMarkup(airgram: Airgram, params: EditMessageReplyMarkupParams): Promise<MessageUnion> {
 return airgram.api.editMessageReplyMarkup(params)
}
```


### `editMessageText`
Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New text content of the message. Should be of type InputMessageText |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface EditMessageTextParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editMessageText(airgram: Airgram, params: EditMessageTextParams): Promise<MessageUnion> {
 return airgram.api.editMessageText(params)
}
```


### `editProxy`
Edits an existing proxy server for network requests. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |
| `server` | string | Proxy server IP address |
| `port` | number | Proxy server port |
| `enable` | boolean | True, if the proxy should be enabled |
| `type` | [ProxyTypeInputUnion](./td-inputs.md#proxytypeinputunion) | Proxy type |


**Returns type:** [ProxyUnion](./td-outputs.md#proxyunion)


Typescript example:
```typescript
interface EditProxyParams {
  proxyId?: number
  server?: string
  port?: number
  enable?: boolean
  type?: ProxyTypeInputUnion
}

function editProxy(airgram: Airgram, params: EditProxyParams): Promise<ProxyUnion> {
 return airgram.api.editProxy(params)
}
```


### `enableProxy`
Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface EnableProxyParams {
  proxyId?: number
}

function enableProxy(airgram: Airgram, params: EnableProxyParams): Promise<OkUnion> {
 return airgram.api.enableProxy(params)
}
```


### `finishFileGeneration`
Finishes the file generation


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `generationId` | number &#124; string | The identifier of the generation process |
| `error` | [ErrorInput](./td-inputs.md#errorinput) | If set, means that file generation has failed and should be terminated |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface FinishFileGenerationParams {
  generationId?: number | string
  error?: ErrorInput
}

function finishFileGeneration(airgram: Airgram, params: FinishFileGenerationParams): Promise<OkUnion> {
 return airgram.api.finishFileGeneration(params)
}
```


### `forwardMessages`
Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which to forward messages |
| `fromChatId` | number | Identifier of the chat from which to forward messages |
| `messageIds` | number[] | Identifiers of the messages to forward |
| `disableNotification` | boolean | Pass true to disable notification for the message, doesn't work if messages are forwarded to a secret chat |
| `fromBackground` | boolean | Pass true if the message is sent from the background |
| `asAlbum` | boolean | True, if the messages should be grouped into an album after forwarding. For this to work, no more than 10 messages may be forwarded, and all of them must be photo or video messages |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface ForwardMessagesParams {
  chatId?: number
  fromChatId?: number
  messageIds?: number[]
  disableNotification?: boolean
  fromBackground?: boolean
  asAlbum?: boolean
}

function forwardMessages(airgram: Airgram, params: ForwardMessagesParams): Promise<MessagesUnion> {
 return airgram.api.forwardMessages(params)
}
```


### `generateChatInviteLink`
Generates a new invite link for a chat; the previously generated link is revoked. Available for basic groups, supergroups, and channels. In basic groups this can be called only by the group's creator; in supergroups and channels this requires appropriate administrator rights


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatInviteLinkUnion](./td-outputs.md#chatinvitelinkunion)


Typescript example:
```typescript
interface GenerateChatInviteLinkParams {
  chatId?: number
}

function generateChatInviteLink(airgram: Airgram, params: GenerateChatInviteLinkParams): Promise<ChatInviteLinkUnion> {
 return airgram.api.generateChatInviteLink(params)
}
```


### `getAccountTtl`
Returns the period of inactivity after which the account of the current user will automatically be deleted




**Returns type:** [AccountTtlUnion](./td-outputs.md#accountttlunion)


Typescript example:
```typescript
function getAccountTtl(airgram: Airgram): Promise<AccountTtlUnion> {
 return airgram.api.getAccountTtl()
}
```


### `getActiveLiveLocationMessages`
Returns all active live locations that should be updated by the client. The list is persistent across application restarts only if the message database is used




**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
function getActiveLiveLocationMessages(airgram: Airgram): Promise<MessagesUnion> {
 return airgram.api.getActiveLiveLocationMessages()
}
```


### `getActiveSessions`
Returns all active sessions of the current user




**Returns type:** [SessionsUnion](./td-outputs.md#sessionsunion)


Typescript example:
```typescript
function getActiveSessions(airgram: Airgram): Promise<SessionsUnion> {
 return airgram.api.getActiveSessions()
}
```


### `getAllPassportElements`
Returns all available Telegram Passport elements


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementsUnion](./td-outputs.md#passportelementsunion)


Typescript example:
```typescript
interface GetAllPassportElementsParams {
  password?: string
}

function getAllPassportElements(airgram: Airgram, params: GetAllPassportElementsParams): Promise<PassportElementsUnion> {
 return airgram.api.getAllPassportElements(params)
}
```


### `getArchivedStickerSets`
Returns a list of archived sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask stickers sets; pass false to return ordinary sticker sets |
| `offsetStickerSetId` | number &#124; string | Identifier of the sticker set from which to return the result |
| `limit` | number | Maximum number of sticker sets to return |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
interface GetArchivedStickerSetsParams {
  isMasks?: boolean
  offsetStickerSetId?: number | string
  limit?: number
}

function getArchivedStickerSets(airgram: Airgram, params: GetArchivedStickerSetsParams): Promise<StickerSetsUnion> {
 return airgram.api.getArchivedStickerSets(params)
}
```


### `getAttachedStickerSets`
Returns a list of sticker sets attached to a file. Currently only photos and videos can have attached sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | File identifier |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
interface GetAttachedStickerSetsParams {
  fileId?: number
}

function getAttachedStickerSets(airgram: Airgram, params: GetAttachedStickerSetsParams): Promise<StickerSetsUnion> {
 return airgram.api.getAttachedStickerSets(params)
}
```


### `getAuthorizationState`
Returns the current authorization state; this is an offline request. For informational purposes only. Use updateAuthorizationState instead to maintain the current authorization state




**Returns type:** [AuthorizationStateUnion](./td-outputs.md#authorizationstateunion)


Typescript example:
```typescript
function getAuthorizationState(airgram: Airgram): Promise<AuthorizationStateUnion> {
 return airgram.api.getAuthorizationState()
}
```


### `getBasicGroup`
Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |


**Returns type:** [BasicGroupUnion](./td-outputs.md#basicgroupunion)


Typescript example:
```typescript
interface GetBasicGroupParams {
  basicGroupId?: number
}

function getBasicGroup(airgram: Airgram, params: GetBasicGroupParams): Promise<BasicGroupUnion> {
 return airgram.api.getBasicGroup(params)
}
```


### `getBasicGroupFullInfo`
Returns full information about a basic group by its identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |


**Returns type:** [BasicGroupFullInfoUnion](./td-outputs.md#basicgroupfullinfounion)


Typescript example:
```typescript
interface GetBasicGroupFullInfoParams {
  basicGroupId?: number
}

function getBasicGroupFullInfo(airgram: Airgram, params: GetBasicGroupFullInfoParams): Promise<BasicGroupFullInfoUnion> {
 return airgram.api.getBasicGroupFullInfo(params)
}
```


### `getBlockedUsers`
Returns users that were blocked by the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `offset` | number | Number of users to skip in the result; must be non-negative |
| `limit` | number | Maximum number of users to return; up to 100 |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
interface GetBlockedUsersParams {
  offset?: number
  limit?: number
}

function getBlockedUsers(airgram: Airgram, params: GetBlockedUsersParams): Promise<UsersUnion> {
 return airgram.api.getBlockedUsers(params)
}
```


### `getCallbackQueryAnswer`
Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat with the message |
| `messageId` | number | Identifier of the message from which the query originated |
| `payload` | [CallbackQueryPayloadInputUnion](./td-inputs.md#callbackquerypayloadinputunion) | Query payload |


**Returns type:** [CallbackQueryAnswerUnion](./td-outputs.md#callbackqueryanswerunion)


Typescript example:
```typescript
interface GetCallbackQueryAnswerParams {
  chatId?: number
  messageId?: number
  payload?: CallbackQueryPayloadInputUnion
}

function getCallbackQueryAnswer(airgram: Airgram, params: GetCallbackQueryAnswerParams): Promise<CallbackQueryAnswerUnion> {
 return airgram.api.getCallbackQueryAnswer(params)
}
```


### `getChat`
Returns information about a chat by its identifier, this is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface GetChatParams {
  chatId?: number
}

function getChat(airgram: Airgram, params: GetChatParams): Promise<ChatUnion> {
 return airgram.api.getChat(params)
}
```


### `getChatAdministrators`
Returns a list of users who are administrators of the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
interface GetChatAdministratorsParams {
  chatId?: number
}

function getChatAdministrators(airgram: Airgram, params: GetChatAdministratorsParams): Promise<UsersUnion> {
 return airgram.api.getChatAdministrators(params)
}
```


### `getChatEventLog`
Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only in supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i. e., in order of decreasing event_id)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `query` | string | Search query by which to filter events |
| `fromEventId` | number &#124; string | Identifier of an event from which to return results. Use 0 to get results from the latest events |
| `limit` | number | Maximum number of events to return; up to 100 |
| `filters` | [ChatEventLogFiltersInput](./td-inputs.md#chateventlogfiltersinput) | The types of events to return. By default, all types will be returned |
| `userIds` | number[] | User identifiers by which to filter events. By default, events relating to all users will be returned |


**Returns type:** [ChatEventsUnion](./td-outputs.md#chateventsunion)


Typescript example:
```typescript
interface GetChatEventLogParams {
  chatId?: number
  query?: string
  fromEventId?: number | string
  limit?: number
  filters?: ChatEventLogFiltersInput
  userIds?: number[]
}

function getChatEventLog(airgram: Airgram, params: GetChatEventLogParams): Promise<ChatEventsUnion> {
 return airgram.api.getChatEventLog(params)
}
```


### `getChatHistory`
Returns messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id). For optimal performance the number of returned messages is chosen by the library. This is an offline request if only_local is true


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `fromMessageId` | number | Identifier of the message starting from which history must be fetched; use 0 to get results from the last message |
| `offset` | number | Specify 0 to get results from exactly the from_message_id or a negative offset to get the specified message and some newer messages |
| `limit` | number | The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `onlyLocal` | boolean | If true, returns only messages that are available locally without sending network requests |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface GetChatHistoryParams {
  chatId?: number
  fromMessageId?: number
  offset?: number
  limit?: number
  onlyLocal?: boolean
}

function getChatHistory(airgram: Airgram, params: GetChatHistoryParams): Promise<MessagesUnion> {
 return airgram.api.getChatHistory(params)
}
```


### `getChatMember`
Returns information about a single member of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |


**Returns type:** [ChatMemberUnion](./td-outputs.md#chatmemberunion)


Typescript example:
```typescript
interface GetChatMemberParams {
  chatId?: number
  userId?: number
}

function getChatMember(airgram: Airgram, params: GetChatMemberParams): Promise<ChatMemberUnion> {
 return airgram.api.getChatMember(params)
}
```


### `getChatMessageByDate`
Returns the last message sent in a chat no later than the specified date


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `date` | number | Point in time (Unix timestamp) relative to which to search for messages |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface GetChatMessageByDateParams {
  chatId?: number
  date?: number
}

function getChatMessageByDate(airgram: Airgram, params: GetChatMessageByDateParams): Promise<MessageUnion> {
 return airgram.api.getChatMessageByDate(params)
}
```


### `getChatMessageCount`
Returns approximate number of messages of the specified type in the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to count messages |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | Filter for message content; searchMessagesFilterEmpty is unsupported in this function |
| `returnLocal` | boolean | If true, returns count that is available locally without sending network requests, returning -1 if the number of messages is unknown |


**Returns type:** [CountUnion](./td-outputs.md#countunion)


Typescript example:
```typescript
interface GetChatMessageCountParams {
  chatId?: number
  filter?: SearchMessagesFilterInputUnion
  returnLocal?: boolean
}

function getChatMessageCount(airgram: Airgram, params: GetChatMessageCountParams): Promise<CountUnion> {
 return airgram.api.getChatMessageCount(params)
}
```


### `getChatPinnedMessage`
Returns information about a pinned chat message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface GetChatPinnedMessageParams {
  chatId?: number
}

function getChatPinnedMessage(airgram: Airgram, params: GetChatPinnedMessageParams): Promise<MessageUnion> {
 return airgram.api.getChatPinnedMessage(params)
}
```


### `getChatReportSpamState`
Returns information on whether the current chat can be reported as spam


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatReportSpamStateUnion](./td-outputs.md#chatreportspamstateunion)


Typescript example:
```typescript
interface GetChatReportSpamStateParams {
  chatId?: number
}

function getChatReportSpamState(airgram: Airgram, params: GetChatReportSpamStateParams): Promise<ChatReportSpamStateUnion> {
 return airgram.api.getChatReportSpamState(params)
}
```


### `getChats`
Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in decreasing order. (For example, to get a list of chats from the beginning, the offset_order should be equal to 2^63 - 1). For optimal performance the number of returned chats is chosen by the library.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `offsetOrder` | number &#124; string | Chat order to return chats from |
| `offsetChatId` | number | Chat identifier to return chats from |
| `limit` | number | The maximum number of chats to be returned. It is possible that fewer chats than the limit are returned even if the end of the list is not reached |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface GetChatsParams {
  offsetOrder?: number | string
  offsetChatId?: number
  limit?: number
}

function getChats(airgram: Airgram, params: GetChatsParams): Promise<ChatsUnion> {
 return airgram.api.getChats(params)
}
```


### `getConnectedWebsites`
Returns all website where the current user used Telegram to log in




**Returns type:** [ConnectedWebsitesUnion](./td-outputs.md#connectedwebsitesunion)


Typescript example:
```typescript
function getConnectedWebsites(airgram: Airgram): Promise<ConnectedWebsitesUnion> {
 return airgram.api.getConnectedWebsites()
}
```


### `getContacts`
Returns all user contacts




**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
function getContacts(airgram: Airgram): Promise<UsersUnion> {
 return airgram.api.getContacts()
}
```


### `getCountryCode`
Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be called before authorization




**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
function getCountryCode(airgram: Airgram): Promise<TextUnion> {
 return airgram.api.getCountryCode()
}
```


### `getCreatedPublicChats`
Returns a list of public chats created by the user




**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
function getCreatedPublicChats(airgram: Airgram): Promise<ChatsUnion> {
 return airgram.api.getCreatedPublicChats()
}
```


### `getDeepLinkInfo`
Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `link` | string | The link |


**Returns type:** [DeepLinkInfoUnion](./td-outputs.md#deeplinkinfounion)


Typescript example:
```typescript
interface GetDeepLinkInfoParams {
  link?: string
}

function getDeepLinkInfo(airgram: Airgram, params: GetDeepLinkInfoParams): Promise<DeepLinkInfoUnion> {
 return airgram.api.getDeepLinkInfo(params)
}
```


### `getFavoriteStickers`
Returns favorite stickers




**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
function getFavoriteStickers(airgram: Airgram): Promise<StickersUnion> {
 return airgram.api.getFavoriteStickers()
}
```


### `getFile`
Returns information about a file; this is an offline request


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to get |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface GetFileParams {
  fileId?: number
}

function getFile(airgram: Airgram, params: GetFileParams): Promise<FileUnion> {
 return airgram.api.getFile(params)
}
```


### `getFileExtension`
Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `mimeType` | string | The MIME type of the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
interface GetFileExtensionParams {
  mimeType?: string
}

function getFileExtension(airgram: Airgram, params: GetFileExtensionParams): Promise<TextUnion> {
 return airgram.api.getFileExtension(params)
}
```


### `getFileMimeType`
Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileName` | string | The name of the file or path to the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
interface GetFileMimeTypeParams {
  fileName?: string
}

function getFileMimeType(airgram: Airgram, params: GetFileMimeTypeParams): Promise<TextUnion> {
 return airgram.api.getFileMimeType(params)
}
```


### `getGameHighScores`
Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat that contains the message with the game |
| `messageId` | number | Identifier of the message |
| `userId` | number | User identifier |


**Returns type:** [GameHighScoresUnion](./td-outputs.md#gamehighscoresunion)


Typescript example:
```typescript
interface GetGameHighScoresParams {
  chatId?: number
  messageId?: number
  userId?: number
}

function getGameHighScores(airgram: Airgram, params: GetGameHighScoresParams): Promise<GameHighScoresUnion> {
 return airgram.api.getGameHighScores(params)
}
```


### `getGroupsInCommon`
Returns a list of common chats with a given user. Chats are sorted by their type and creation date


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `offsetChatId` | number | Chat identifier starting from which to return chats; use 0 for the first request |
| `limit` | number | Maximum number of chats to be returned; up to 100 |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface GetGroupsInCommonParams {
  userId?: number
  offsetChatId?: number
  limit?: number
}

function getGroupsInCommon(airgram: Airgram, params: GetGroupsInCommonParams): Promise<ChatsUnion> {
 return airgram.api.getGroupsInCommon(params)
}
```


### `getImportedContactCount`
Returns the total number of imported contacts




**Returns type:** [CountUnion](./td-outputs.md#countunion)


Typescript example:
```typescript
function getImportedContactCount(airgram: Airgram): Promise<CountUnion> {
 return airgram.api.getImportedContactCount()
}
```


### `getInlineGameHighScores`
Returns game high scores and some part of the high score table in the range of the specified user; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `userId` | number | User identifier |


**Returns type:** [GameHighScoresUnion](./td-outputs.md#gamehighscoresunion)


Typescript example:
```typescript
interface GetInlineGameHighScoresParams {
  inlineMessageId?: string
  userId?: number
}

function getInlineGameHighScores(airgram: Airgram, params: GetInlineGameHighScoresParams): Promise<GameHighScoresUnion> {
 return airgram.api.getInlineGameHighScores(params)
}
```


### `getInlineQueryResults`
Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | The identifier of the target bot |
| `chatId` | number | Identifier of the chat, where the query was sent |
| `userLocation` | [LocationInput](./td-inputs.md#locationinput) | Location of the user, only if needed |
| `query` | string | Text of the query |
| `offset` | string | Offset of the first entry to return |


**Returns type:** [InlineQueryResultsUnion](./td-outputs.md#inlinequeryresultsunion)


Typescript example:
```typescript
interface GetInlineQueryResultsParams {
  botUserId?: number
  chatId?: number
  userLocation?: LocationInput
  query?: string
  offset?: string
}

function getInlineQueryResults(airgram: Airgram, params: GetInlineQueryResultsParams): Promise<InlineQueryResultsUnion> {
 return airgram.api.getInlineQueryResults(params)
}
```


### `getInstalledStickerSets`
Returns a list of installed sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask sticker sets; pass false to return ordinary sticker sets |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
interface GetInstalledStickerSetsParams {
  isMasks?: boolean
}

function getInstalledStickerSets(airgram: Airgram, params: GetInstalledStickerSetsParams): Promise<StickerSetsUnion> {
 return airgram.api.getInstalledStickerSets(params)
}
```


### `getInviteText`
Returns the default text for invitation messages to be used as a placeholder when the current user invites friends to Telegram




**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
function getInviteText(airgram: Airgram): Promise<TextUnion> {
 return airgram.api.getInviteText()
}
```


### `getLanguagePackString`
Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackDatabasePath` | string | Path to the language pack database in which strings are stored |
| `localizationTarget` | string | Localization target to which the language pack belongs |
| `languagePackId` | string | Language pack identifier |
| `key` | string | Language pack key of the string to be returned |


**Returns type:** [LanguagePackStringValueUnion](./td-outputs.md#languagepackstringvalueunion)


Typescript example:
```typescript
interface GetLanguagePackStringParams {
  languagePackDatabasePath?: string
  localizationTarget?: string
  languagePackId?: string
  key?: string
}

function getLanguagePackString(airgram: Airgram, params: GetLanguagePackStringParams): Promise<LanguagePackStringValueUnion> {
 return airgram.api.getLanguagePackString(params)
}
```


### `getLanguagePackStrings`
Returns strings from a language pack in the current localization target by their keys


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Language pack identifier of the strings to be returned |
| `keys` | string[] | Language pack keys of the strings to be returned; leave empty to request all available strings |


**Returns type:** [LanguagePackStringsUnion](./td-outputs.md#languagepackstringsunion)


Typescript example:
```typescript
interface GetLanguagePackStringsParams {
  languagePackId?: string
  keys?: string[]
}

function getLanguagePackStrings(airgram: Airgram, params: GetLanguagePackStringsParams): Promise<LanguagePackStringsUnion> {
 return airgram.api.getLanguagePackStrings(params)
}
```


### `getLocalizationTargetInfo`
Returns information about the current localization target. This is an offline request if only_local is true


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `onlyLocal` | boolean | If true, returns only locally available information without sending network requests |


**Returns type:** [LocalizationTargetInfoUnion](./td-outputs.md#localizationtargetinfounion)


Typescript example:
```typescript
interface GetLocalizationTargetInfoParams {
  onlyLocal?: boolean
}

function getLocalizationTargetInfo(airgram: Airgram, params: GetLocalizationTargetInfoParams): Promise<LocalizationTargetInfoUnion> {
 return airgram.api.getLocalizationTargetInfo(params)
}
```


### `getMapThumbnailFile`
Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `location` | [LocationInput](./td-inputs.md#locationinput) | Location of the map center |
| `zoom` | number | Map zoom level; 13-20 |
| `width` | number | Map width in pixels before applying scale; 16-1024 |
| `height` | number | Map height in pixels before applying scale; 16-1024 |
| `scale` | number | Map scale; 1-3 |
| `chatId` | number | Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface GetMapThumbnailFileParams {
  location?: LocationInput
  zoom?: number
  width?: number
  height?: number
  scale?: number
  chatId?: number
}

function getMapThumbnailFile(airgram: Airgram, params: GetMapThumbnailFileParams): Promise<FileUnion> {
 return airgram.api.getMapThumbnailFile(params)
}
```


### `getMe`
Returns the current user




**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
function getMe(airgram: Airgram): Promise<UserUnion> {
 return airgram.api.getMe()
}
```


### `getMessage`
Returns information about a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |
| `messageId` | number | Identifier of the message to get |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface GetMessageParams {
  chatId?: number
  messageId?: number
}

function getMessage(airgram: Airgram, params: GetMessageParams): Promise<MessageUnion> {
 return airgram.api.getMessage(params)
}
```


### `getMessages`
Returns information about messages. If a message is not found, returns null on the corresponding position of the result


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the messages belong to |
| `messageIds` | number[] | Identifiers of the messages to get |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface GetMessagesParams {
  chatId?: number
  messageIds?: number[]
}

function getMessages(airgram: Airgram, params: GetMessagesParams): Promise<MessagesUnion> {
 return airgram.api.getMessages(params)
}
```


### `getNetworkStatistics`
Returns network data usage statistics. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `onlyCurrent` | boolean | If true, returns only data for the current library launch |


**Returns type:** [NetworkStatisticsUnion](./td-outputs.md#networkstatisticsunion)


Typescript example:
```typescript
interface GetNetworkStatisticsParams {
  onlyCurrent?: boolean
}

function getNetworkStatistics(airgram: Airgram, params: GetNetworkStatisticsParams): Promise<NetworkStatisticsUnion> {
 return airgram.api.getNetworkStatistics(params)
}
```


### `getOption`
Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | The name of the option |


**Returns type:** [OptionValueUnion](./td-outputs.md#optionvalueunion)


Typescript example:
```typescript
interface GetOptionParams {
  name?: string
}

function getOption(airgram: Airgram, params: GetOptionParams): Promise<OptionValueUnion> {
 return airgram.api.getOption(params)
}
```


### `getPassportAuthorizationForm`
Returns a Telegram Passport authorization form for sharing data with a service


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | User identifier of the service's bot |
| `scope` | string | Telegram Passport element types requested by the service |
| `publicKey` | string | Service's public_key |
| `nonce` | string | Authorization form nonce provided by the service |
| `password` | string | Password of the current user |


**Returns type:** [PassportAuthorizationFormUnion](./td-outputs.md#passportauthorizationformunion)


Typescript example:
```typescript
interface GetPassportAuthorizationFormParams {
  botUserId?: number
  scope?: string
  publicKey?: string
  nonce?: string
  password?: string
}

function getPassportAuthorizationForm(airgram: Airgram, params: GetPassportAuthorizationFormParams): Promise<PassportAuthorizationFormUnion> {
 return airgram.api.getPassportAuthorizationForm(params)
}
```


### `getPassportElement`
Returns one of the available Telegram Passport elements


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [PassportElementTypeInputUnion](./td-inputs.md#passportelementtypeinputunion) | Telegram Passport element type |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementUnion](./td-outputs.md#passportelementunion)


Typescript example:
```typescript
interface GetPassportElementParams {
  type?: PassportElementTypeInputUnion
  password?: string
}

function getPassportElement(airgram: Airgram, params: GetPassportElementParams): Promise<PassportElementUnion> {
 return airgram.api.getPassportElement(params)
}
```


### `getPasswordState`
Returns the current state of 2-step verification




**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
function getPasswordState(airgram: Airgram): Promise<PasswordStateUnion> {
 return airgram.api.getPasswordState()
}
```


### `getPaymentForm`
Returns an invoice payment form. This method should be called when the user presses inlineKeyboardButtonBuy


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |


**Returns type:** [PaymentFormUnion](./td-outputs.md#paymentformunion)


Typescript example:
```typescript
interface GetPaymentFormParams {
  chatId?: number
  messageId?: number
}

function getPaymentForm(airgram: Airgram, params: GetPaymentFormParams): Promise<PaymentFormUnion> {
 return airgram.api.getPaymentForm(params)
}
```


### `getPaymentReceipt`
Returns information about a successful payment


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the PaymentSuccessful message |
| `messageId` | number | Message identifier |


**Returns type:** [PaymentReceiptUnion](./td-outputs.md#paymentreceiptunion)


Typescript example:
```typescript
interface GetPaymentReceiptParams {
  chatId?: number
  messageId?: number
}

function getPaymentReceipt(airgram: Airgram, params: GetPaymentReceiptParams): Promise<PaymentReceiptUnion> {
 return airgram.api.getPaymentReceipt(params)
}
```


### `getPreferredCountryLanguage`
Returns an IETF language tag of the language preferred in the country, which should be used to fill native fields in Telegram Passport personal details. Returns a 404 error if unknown


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `countryCode` | string | A two-letter ISO 3166-1 alpha-2 country code |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
interface GetPreferredCountryLanguageParams {
  countryCode?: string
}

function getPreferredCountryLanguage(airgram: Airgram, params: GetPreferredCountryLanguageParams): Promise<TextUnion> {
 return airgram.api.getPreferredCountryLanguage(params)
}
```


### `getProxies`
Returns list of proxies that are currently set up. Can be called before authorization




**Returns type:** [ProxiesUnion](./td-outputs.md#proxiesunion)


Typescript example:
```typescript
function getProxies(airgram: Airgram): Promise<ProxiesUnion> {
 return airgram.api.getProxies()
}
```


### `getProxyLink`
Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
interface GetProxyLinkParams {
  proxyId?: number
}

function getProxyLink(airgram: Airgram, params: GetProxyLinkParams): Promise<TextUnion> {
 return airgram.api.getProxyLink(params)
}
```


### `getPublicMessageLink`
Returns a public HTTPS link to a message. Available only for messages in public supergroups and channels


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which the message belongs |
| `messageId` | number | Identifier of the message |
| `forAlbum` | boolean | Pass true if a link for a whole media album should be returned |


**Returns type:** [PublicMessageLinkUnion](./td-outputs.md#publicmessagelinkunion)


Typescript example:
```typescript
interface GetPublicMessageLinkParams {
  chatId?: number
  messageId?: number
  forAlbum?: boolean
}

function getPublicMessageLink(airgram: Airgram, params: GetPublicMessageLinkParams): Promise<PublicMessageLinkUnion> {
 return airgram.api.getPublicMessageLink(params)
}
```


### `getRecentInlineBots`
Returns up to 20 recently used inline bots in the order of their last usage




**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
function getRecentInlineBots(airgram: Airgram): Promise<UsersUnion> {
 return airgram.api.getRecentInlineBots()
}
```


### `getRecentStickers`
Returns a list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to return stickers and masks that were recently attached to photos or video files; pass false to return recently sent stickers |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
interface GetRecentStickersParams {
  isAttached?: boolean
}

function getRecentStickers(airgram: Airgram, params: GetRecentStickersParams): Promise<StickersUnion> {
 return airgram.api.getRecentStickers(params)
}
```


### `getRecentlyVisitedTMeUrls`
Returns t.me URLs recently visited by a newly registered user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `referrer` | string | Google Play referrer to identify the user |


**Returns type:** [TMeUrlsUnion](./td-outputs.md#tmeurlsunion)


Typescript example:
```typescript
interface GetRecentlyVisitedTMeUrlsParams {
  referrer?: string
}

function getRecentlyVisitedTMeUrls(airgram: Airgram, params: GetRecentlyVisitedTMeUrlsParams): Promise<TMeUrlsUnion> {
 return airgram.api.getRecentlyVisitedTMeUrls(params)
}
```


### `getRecoveryEmailAddress`
Returns a recovery email address that was previously set up. This method can be used to verify a password provided by the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | The password for the current user |


**Returns type:** [RecoveryEmailAddressUnion](./td-outputs.md#recoveryemailaddressunion)


Typescript example:
```typescript
interface GetRecoveryEmailAddressParams {
  password?: string
}

function getRecoveryEmailAddress(airgram: Airgram, params: GetRecoveryEmailAddressParams): Promise<RecoveryEmailAddressUnion> {
 return airgram.api.getRecoveryEmailAddress(params)
}
```


### `getRemoteFile`
Returns information about a file by its remote ID; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `remoteFileId` | string | Remote identifier of the file to get |
| `fileType` | [FileTypeInputUnion](./td-inputs.md#filetypeinputunion) | File type, if known |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface GetRemoteFileParams {
  remoteFileId?: string
  fileType?: FileTypeInputUnion
}

function getRemoteFile(airgram: Airgram, params: GetRemoteFileParams): Promise<FileUnion> {
 return airgram.api.getRemoteFile(params)
}
```


### `getRepliedMessage`
Returns information about a message that is replied by given message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |
| `messageId` | number | Identifier of the message reply to which get |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface GetRepliedMessageParams {
  chatId?: number
  messageId?: number
}

function getRepliedMessage(airgram: Airgram, params: GetRepliedMessageParams): Promise<MessageUnion> {
 return airgram.api.getRepliedMessage(params)
}
```


### `getSavedAnimations`
Returns saved animations




**Returns type:** [AnimationsUnion](./td-outputs.md#animationsunion)


Typescript example:
```typescript
function getSavedAnimations(airgram: Airgram): Promise<AnimationsUnion> {
 return airgram.api.getSavedAnimations()
}
```


### `getSavedOrderInfo`
Returns saved order info, if any




**Returns type:** [OrderInfoUnion](./td-outputs.md#orderinfounion)


Typescript example:
```typescript
function getSavedOrderInfo(airgram: Airgram): Promise<OrderInfoUnion> {
 return airgram.api.getSavedOrderInfo()
}
```


### `getScopeNotificationSettings`
Returns the notification settings for chats of a given type


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `scope` | [NotificationSettingsScopeInputUnion](./td-inputs.md#notificationsettingsscopeinputunion) | Types of chats for which to return the notification settings information |


**Returns type:** [ScopeNotificationSettingsUnion](./td-outputs.md#scopenotificationsettingsunion)


Typescript example:
```typescript
interface GetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion
}

function getScopeNotificationSettings(airgram: Airgram, params: GetScopeNotificationSettingsParams): Promise<ScopeNotificationSettingsUnion> {
 return airgram.api.getScopeNotificationSettings(params)
}
```


### `getSecretChat`
Returns information about a secret chat by its identifier. This is an offline request


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [SecretChatUnion](./td-outputs.md#secretchatunion)


Typescript example:
```typescript
interface GetSecretChatParams {
  secretChatId?: number
}

function getSecretChat(airgram: Airgram, params: GetSecretChatParams): Promise<SecretChatUnion> {
 return airgram.api.getSecretChat(params)
}
```


### `getStickerEmojis`
Returns emoji corresponding to a sticker


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file identifier |


**Returns type:** [StickerEmojisUnion](./td-outputs.md#stickeremojisunion)


Typescript example:
```typescript
interface GetStickerEmojisParams {
  sticker?: InputFileInputUnion
}

function getStickerEmojis(airgram: Airgram, params: GetStickerEmojisParams): Promise<StickerEmojisUnion> {
 return airgram.api.getStickerEmojis(params)
}
```


### `getStickerSet`
Returns information about a sticker set by its identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setId` | number &#124; string | Identifier of the sticker set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
interface GetStickerSetParams {
  setId?: number | string
}

function getStickerSet(airgram: Airgram, params: GetStickerSetParams): Promise<StickerSetUnion> {
 return airgram.api.getStickerSet(params)
}
```


### `getStickers`
Returns stickers from the installed sticker sets that correspond to a given emoji. If the emoji is not empty, favorite and recently used stickers may also be returned


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emoji` | string | String representation of emoji. If empty, returns all known installed stickers |
| `limit` | number | Maximum number of stickers to be returned |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
interface GetStickersParams {
  emoji?: string
  limit?: number
}

function getStickers(airgram: Airgram, params: GetStickersParams): Promise<StickersUnion> {
 return airgram.api.getStickers(params)
}
```


### `getStorageStatistics`
Returns storage usage statistics


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatLimit` | number | Maximum number of chats with the largest storage usage for which separate statistics should be returned. All other chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and is always set to 0 |


**Returns type:** [StorageStatisticsUnion](./td-outputs.md#storagestatisticsunion)


Typescript example:
```typescript
interface GetStorageStatisticsParams {
  chatLimit?: number
}

function getStorageStatistics(airgram: Airgram, params: GetStorageStatisticsParams): Promise<StorageStatisticsUnion> {
 return airgram.api.getStorageStatistics(params)
}
```


### `getStorageStatisticsFast`
Quickly returns approximate storage usage statistics




**Returns type:** [StorageStatisticsFastUnion](./td-outputs.md#storagestatisticsfastunion)


Typescript example:
```typescript
function getStorageStatisticsFast(airgram: Airgram): Promise<StorageStatisticsFastUnion> {
 return airgram.api.getStorageStatisticsFast()
}
```


### `getSupergroup`
Returns information about a supergroup or channel by its identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |


**Returns type:** [SupergroupUnion](./td-outputs.md#supergroupunion)


Typescript example:
```typescript
interface GetSupergroupParams {
  supergroupId?: number
}

function getSupergroup(airgram: Airgram, params: GetSupergroupParams): Promise<SupergroupUnion> {
 return airgram.api.getSupergroup(params)
}
```


### `getSupergroupFullInfo`
Returns full information about a supergroup or channel by its identifier, cached for up to 1 minute


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |


**Returns type:** [SupergroupFullInfoUnion](./td-outputs.md#supergroupfullinfounion)


Typescript example:
```typescript
interface GetSupergroupFullInfoParams {
  supergroupId?: number
}

function getSupergroupFullInfo(airgram: Airgram, params: GetSupergroupFullInfoParams): Promise<SupergroupFullInfoUnion> {
 return airgram.api.getSupergroupFullInfo(params)
}
```


### `getSupergroupMembers`
Returns information about members or banned users in a supergroup or channel. Can be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `filter` | [SupergroupMembersFilterInputUnion](./td-inputs.md#supergroupmembersfilterinputunion) | The type of users to return. By default, supergroupMembersRecent |
| `offset` | number | Number of users to skip |
| `limit` | number | The maximum number of users be returned; up to 200 |


**Returns type:** [ChatMembersUnion](./td-outputs.md#chatmembersunion)


Typescript example:
```typescript
interface GetSupergroupMembersParams {
  supergroupId?: number
  filter?: SupergroupMembersFilterInputUnion
  offset?: number
  limit?: number
}

function getSupergroupMembers(airgram: Airgram, params: GetSupergroupMembersParams): Promise<ChatMembersUnion> {
 return airgram.api.getSupergroupMembers(params)
}
```


### `getSupportUser`
Returns a user that can be contacted to get support




**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
function getSupportUser(airgram: Airgram): Promise<UserUnion> {
 return airgram.api.getSupportUser()
}
```


### `getTemporaryPasswordState`
Returns information about the current temporary password




**Returns type:** [TemporaryPasswordStateUnion](./td-outputs.md#temporarypasswordstateunion)


Typescript example:
```typescript
function getTemporaryPasswordState(airgram: Airgram): Promise<TemporaryPasswordStateUnion> {
 return airgram.api.getTemporaryPasswordState()
}
```


### `getTextEntities`
Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email addresses) contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | string | The text in which to look for entites |


**Returns type:** [TextEntitiesUnion](./td-outputs.md#textentitiesunion)


Typescript example:
```typescript
interface GetTextEntitiesParams {
  text?: string
}

function getTextEntities(airgram: Airgram, params: GetTextEntitiesParams): Promise<TextEntitiesUnion> {
 return airgram.api.getTextEntities(params)
}
```


### `getTopChats`
Returns a list of frequently used chats. Supported only if the chat info database is enabled


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `category` | [TopChatCategoryInputUnion](./td-inputs.md#topchatcategoryinputunion) | Category of chats to be returned |
| `limit` | number | Maximum number of chats to be returned; up to 30 |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface GetTopChatsParams {
  category?: TopChatCategoryInputUnion
  limit?: number
}

function getTopChats(airgram: Airgram, params: GetTopChatsParams): Promise<ChatsUnion> {
 return airgram.api.getTopChats(params)
}
```


### `getTrendingStickerSets`
Returns a list of trending sticker sets




**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
function getTrendingStickerSets(airgram: Airgram): Promise<StickerSetsUnion> {
 return airgram.api.getTrendingStickerSets()
}
```


### `getUser`
Returns information about a user by their identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
interface GetUserParams {
  userId?: number
}

function getUser(airgram: Airgram, params: GetUserParams): Promise<UserUnion> {
 return airgram.api.getUser(params)
}
```


### `getUserFullInfo`
Returns full information about a user by their identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [UserFullInfoUnion](./td-outputs.md#userfullinfounion)


Typescript example:
```typescript
interface GetUserFullInfoParams {
  userId?: number
}

function getUserFullInfo(airgram: Airgram, params: GetUserFullInfoParams): Promise<UserFullInfoUnion> {
 return airgram.api.getUserFullInfo(params)
}
```


### `getUserPrivacySettingRules`
Returns the current privacy settings


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setting` | [UserPrivacySettingInputUnion](./td-inputs.md#userprivacysettinginputunion) | The privacy setting |


**Returns type:** [UserPrivacySettingRulesUnion](./td-outputs.md#userprivacysettingrulesunion)


Typescript example:
```typescript
interface GetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion
}

function getUserPrivacySettingRules(airgram: Airgram, params: GetUserPrivacySettingRulesParams): Promise<UserPrivacySettingRulesUnion> {
 return airgram.api.getUserPrivacySettingRules(params)
}
```


### `getUserProfilePhotos`
Returns the profile photos of a user. The result of this query may be outdated: some photos might have been deleted already


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `offset` | number | The number of photos to skip; must be non-negative |
| `limit` | number | Maximum number of photos to be returned; up to 100 |


**Returns type:** [UserProfilePhotosUnion](./td-outputs.md#userprofilephotosunion)


Typescript example:
```typescript
interface GetUserProfilePhotosParams {
  userId?: number
  offset?: number
  limit?: number
}

function getUserProfilePhotos(airgram: Airgram, params: GetUserProfilePhotosParams): Promise<UserProfilePhotosUnion> {
 return airgram.api.getUserProfilePhotos(params)
}
```


### `getWallpapers`
Returns background wallpapers




**Returns type:** [WallpapersUnion](./td-outputs.md#wallpapersunion)


Typescript example:
```typescript
function getWallpapers(airgram: Airgram): Promise<WallpapersUnion> {
 return airgram.api.getWallpapers()
}
```


### `getWebPageInstantView`
Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view page


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `url` | string | The web page URL |
| `forceFull` | boolean | If true, the full instant view for the web page will be returned |


**Returns type:** [WebPageInstantViewUnion](./td-outputs.md#webpageinstantviewunion)


Typescript example:
```typescript
interface GetWebPageInstantViewParams {
  url?: string
  forceFull?: boolean
}

function getWebPageInstantView(airgram: Airgram, params: GetWebPageInstantViewParams): Promise<WebPageInstantViewUnion> {
 return airgram.api.getWebPageInstantView(params)
}
```


### `getWebPagePreview`
Returns a web page preview by the text of the message. Do not call this function too often. Returns a 404 error if the web page has no preview


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | Message text with formatting |


**Returns type:** [WebPageUnion](./td-outputs.md#webpageunion)


Typescript example:
```typescript
interface GetWebPagePreviewParams {
  text?: FormattedTextInput
}

function getWebPagePreview(airgram: Airgram, params: GetWebPagePreviewParams): Promise<WebPageUnion> {
 return airgram.api.getWebPagePreview(params)
}
```


### `importContacts`
Adds new contacts or edits existing contacts; contacts' user identifiers are ignored


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `contacts` | [ContactInput[]](./td-inputs.md#contactinput) | The list of contacts to import or edit, contact's vCard are ignored and are not imported |


**Returns type:** [ImportedContactsUnion](./td-outputs.md#importedcontactsunion)


Typescript example:
```typescript
interface ImportContactsParams {
  contacts?: ContactInput[]
}

function importContacts(airgram: Airgram, params: ImportContactsParams): Promise<ImportedContactsUnion> {
 return airgram.api.importContacts(params)
}
```


### `joinChat`
Adds current user as a new member to a chat. Private and secret chats can't be joined using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface JoinChatParams {
  chatId?: number
}

function joinChat(airgram: Airgram, params: JoinChatParams): Promise<OkUnion> {
 return airgram.api.joinChat(params)
}
```


### `joinChatByInviteLink`
Uses an invite link to add the current user to the chat if possible. The new member will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inviteLink` | string | Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/" |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface JoinChatByInviteLinkParams {
  inviteLink?: string
}

function joinChatByInviteLink(airgram: Airgram, params: JoinChatByInviteLinkParams): Promise<ChatUnion> {
 return airgram.api.joinChatByInviteLink(params)
}
```


### `leaveChat`
Removes current user from chat members. Private and secret chats can't be left using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface LeaveChatParams {
  chatId?: number
}

function leaveChat(airgram: Airgram, params: LeaveChatParams): Promise<OkUnion> {
 return airgram.api.leaveChat(params)
}
```


### `logOut`
Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function logOut(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.logOut()
}
```


### `openChat`
This method should be called if the chat is opened by the user. Many useful activities depend on the chat being opened or closed (e.g., in supergroups and channels all updates are received only for opened chats)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface OpenChatParams {
  chatId?: number
}

function openChat(airgram: Airgram, params: OpenChatParams): Promise<OkUnion> {
 return airgram.api.openChat(params)
}
```


### `openMessageContent`
This method should be called if the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message). An updateMessageContentOpened update will be generated if something has changed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the message |
| `messageId` | number | Identifier of the message with the opened content |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface OpenMessageContentParams {
  chatId?: number
  messageId?: number
}

function openMessageContent(airgram: Airgram, params: OpenMessageContentParams): Promise<OkUnion> {
 return airgram.api.openMessageContent(params)
}
```


### `optimizeStorage`
Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `size` | number | Limit on the total size of files after deletion. Pass -1 to use the default limit |
| `ttl` | number | Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass -1 to use the default limit |
| `count` | number | Limit on the total count of files after deletion. Pass -1 to use the default limit |
| `immunityDelay` | number | The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default value |
| `fileTypes` | [FileTypeInputUnion[]](./td-inputs.md#filetypeinputunion) | If not empty, only files with the given type(s) are considered. By default, all types except thumbnails, profile photos, stickers and wallpapers are deleted |
| `chatIds` | number[] | If not empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to any chat (e.g., profile photos) |
| `excludeChatIds` | number[] | If not empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to any chat (e.g., profile photos) |
| `chatLimit` | number | Same as in getStorageStatistics. Affects only returned statistics |


**Returns type:** [StorageStatisticsUnion](./td-outputs.md#storagestatisticsunion)


Typescript example:
```typescript
interface OptimizeStorageParams {
  size?: number
  ttl?: number
  count?: number
  immunityDelay?: number
  fileTypes?: FileTypeInputUnion[]
  chatIds?: number[]
  excludeChatIds?: number[]
  chatLimit?: number
}

function optimizeStorage(airgram: Airgram, params: OptimizeStorageParams): Promise<StorageStatisticsUnion> {
 return airgram.api.optimizeStorage(params)
}
```


### `parseTextEntities`
Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | string | The text which should be parsed |
| `parseMode` | [TextParseModeInputUnion](./td-inputs.md#textparsemodeinputunion) | Text parse mode |


**Returns type:** [FormattedTextUnion](./td-outputs.md#formattedtextunion)


Typescript example:
```typescript
interface ParseTextEntitiesParams {
  text?: string
  parseMode?: TextParseModeInputUnion
}

function parseTextEntities(airgram: Airgram, params: ParseTextEntitiesParams): Promise<FormattedTextUnion> {
 return airgram.api.parseTextEntities(params)
}
```


### `pinSupergroupMessage`
Pins a message in a supergroup or channel; requires appropriate administrator rights in the supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `messageId` | number | Identifier of the new pinned message |
| `disableNotification` | boolean | True, if there should be no notification about the pinned message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface PinSupergroupMessageParams {
  supergroupId?: number
  messageId?: number
  disableNotification?: boolean
}

function pinSupergroupMessage(airgram: Airgram, params: PinSupergroupMessageParams): Promise<OkUnion> {
 return airgram.api.pinSupergroupMessage(params)
}
```


### `pingProxy`
Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier. Use 0 to ping a Telegram server without a proxy |


**Returns type:** [SecondsUnion](./td-outputs.md#secondsunion)


Typescript example:
```typescript
interface PingProxyParams {
  proxyId?: number
}

function pingProxy(airgram: Airgram, params: PingProxyParams): Promise<SecondsUnion> {
 return airgram.api.pingProxy(params)
}
```


### `processDcUpdate`
Handles a DC_UPDATE push service notification. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `dc` | string | Value of the "dc" parameter of the notification |
| `addr` | string | Value of the "addr" parameter of the notification |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ProcessDcUpdateParams {
  dc?: string
  addr?: string
}

function processDcUpdate(airgram: Airgram, params: ProcessDcUpdateParams): Promise<OkUnion> {
 return airgram.api.processDcUpdate(params)
}
```


### `readAllChatMentions`
Marks all mentions in a chat as read


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ReadAllChatMentionsParams {
  chatId?: number
}

function readAllChatMentions(airgram: Airgram, params: ReadAllChatMentionsParams): Promise<OkUnion> {
 return airgram.api.readAllChatMentions(params)
}
```


### `recoverAuthenticationPassword`
Recovers the password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `recoveryCode` | string | Recovery code to check |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RecoverAuthenticationPasswordParams {
  recoveryCode?: string
}

function recoverAuthenticationPassword(airgram: Airgram, params: RecoverAuthenticationPasswordParams): Promise<OkUnion> {
 return airgram.api.recoverAuthenticationPassword(params)
}
```


### `recoverPassword`
Recovers the password using a recovery code sent to an email address that was previously set up


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `recoveryCode` | string | Recovery code to check |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
interface RecoverPasswordParams {
  recoveryCode?: string
}

function recoverPassword(airgram: Airgram, params: RecoverPasswordParams): Promise<PasswordStateUnion> {
 return airgram.api.recoverPassword(params)
}
```


### `registerDevice`
Registers the currently used device for receiving push notifications


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `deviceToken` | [DeviceTokenInputUnion](./td-inputs.md#devicetokeninputunion) | Device token |
| `otherUserIds` | number[] | List of at most 100 user identifiers of other users currently using the client |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RegisterDeviceParams {
  deviceToken?: DeviceTokenInputUnion
  otherUserIds?: number[]
}

function registerDevice(airgram: Airgram, params: RegisterDeviceParams): Promise<OkUnion> {
 return airgram.api.registerDevice(params)
}
```


### `removeContacts`
Removes users from the contacts list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userIds` | number[] | Identifiers of users to be deleted |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveContactsParams {
  userIds?: number[]
}

function removeContacts(airgram: Airgram, params: RemoveContactsParams): Promise<OkUnion> {
 return airgram.api.removeContacts(params)
}
```


### `removeFavoriteSticker`
Removes a sticker from the list of favorite stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to delete from the list |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveFavoriteStickerParams {
  sticker?: InputFileInputUnion
}

function removeFavoriteSticker(airgram: Airgram, params: RemoveFavoriteStickerParams): Promise<OkUnion> {
 return airgram.api.removeFavoriteSticker(params)
}
```


### `removeProxy`
Removes a proxy server. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveProxyParams {
  proxyId?: number
}

function removeProxy(airgram: Airgram, params: RemoveProxyParams): Promise<OkUnion> {
 return airgram.api.removeProxy(params)
}
```


### `removeRecentHashtag`
Removes a hashtag from the list of recently used hashtags


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `hashtag` | string | Hashtag to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveRecentHashtagParams {
  hashtag?: string
}

function removeRecentHashtag(airgram: Airgram, params: RemoveRecentHashtagParams): Promise<OkUnion> {
 return airgram.api.removeRecentHashtag(params)
}
```


### `removeRecentSticker`
Removes a sticker from the list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to remove the sticker from the list of stickers recently attached to photo or video files; pass false to remove the sticker from the list of recently sent stickers |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveRecentStickerParams {
  isAttached?: boolean
  sticker?: InputFileInputUnion
}

function removeRecentSticker(airgram: Airgram, params: RemoveRecentStickerParams): Promise<OkUnion> {
 return airgram.api.removeRecentSticker(params)
}
```


### `removeRecentlyFoundChat`
Removes a chat from the list of recently found chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to be removed |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveRecentlyFoundChatParams {
  chatId?: number
}

function removeRecentlyFoundChat(airgram: Airgram, params: RemoveRecentlyFoundChatParams): Promise<OkUnion> {
 return airgram.api.removeRecentlyFoundChat(params)
}
```


### `removeSavedAnimation`
Removes an animation from the list of saved animations


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `animation` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Animation file to be removed |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveSavedAnimationParams {
  animation?: InputFileInputUnion
}

function removeSavedAnimation(airgram: Airgram, params: RemoveSavedAnimationParams): Promise<OkUnion> {
 return airgram.api.removeSavedAnimation(params)
}
```


### `removeStickerFromSet`
Removes a sticker from the set to which it belongs; for bots only. The sticker set must have been created by the bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveStickerFromSetParams {
  sticker?: InputFileInputUnion
}

function removeStickerFromSet(airgram: Airgram, params: RemoveStickerFromSetParams): Promise<OkUnion> {
 return airgram.api.removeStickerFromSet(params)
}
```


### `removeTopChat`
Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `category` | [TopChatCategoryInputUnion](./td-inputs.md#topchatcategoryinputunion) | Category of frequently used chats |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface RemoveTopChatParams {
  category?: TopChatCategoryInputUnion
  chatId?: number
}

function removeTopChat(airgram: Airgram, params: RemoveTopChatParams): Promise<OkUnion> {
 return airgram.api.removeTopChat(params)
}
```


### `reorderInstalledStickerSets`
Changes the order of installed sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to change the order of mask sticker sets; pass false to change the order of ordinary sticker sets |
| `stickerSetIds` | number &#124; string[] | Identifiers of installed sticker sets in the new correct order |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ReorderInstalledStickerSetsParams {
  isMasks?: boolean
  stickerSetIds?: number | string[]
}

function reorderInstalledStickerSets(airgram: Airgram, params: ReorderInstalledStickerSetsParams): Promise<OkUnion> {
 return airgram.api.reorderInstalledStickerSets(params)
}
```


### `reportChat`
Reports a chat to the Telegram moderators. Supported only for supergroups, channels, or private chats with bots, since other chats can't be checked by moderators


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `reason` | [ChatReportReasonInputUnion](./td-inputs.md#chatreportreasoninputunion) | The reason for reporting the chat |
| `messageIds` | number[] | Identifiers of reported messages, if any |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ReportChatParams {
  chatId?: number
  reason?: ChatReportReasonInputUnion
  messageIds?: number[]
}

function reportChat(airgram: Airgram, params: ReportChatParams): Promise<OkUnion> {
 return airgram.api.reportChat(params)
}
```


### `reportSupergroupSpam`
Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup identifier |
| `userId` | number | User identifier |
| `messageIds` | number[] | Identifiers of messages sent in the supergroup by the user. This list must be non-empty |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ReportSupergroupSpamParams {
  supergroupId?: number
  userId?: number
  messageIds?: number[]
}

function reportSupergroupSpam(airgram: Airgram, params: ReportSupergroupSpamParams): Promise<OkUnion> {
 return airgram.api.reportSupergroupSpam(params)
}
```


### `requestAuthenticationPasswordRecovery`
Requests to send a password recovery code to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function requestAuthenticationPasswordRecovery(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.requestAuthenticationPasswordRecovery()
}
```


### `requestPasswordRecovery`
Requests to send a password recovery code to an email address that was previously set up




**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
function requestPasswordRecovery(airgram: Airgram): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return airgram.api.requestPasswordRecovery()
}
```


### `resendAuthenticationCode`
Re-sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode and the next_code_type of the result is not null




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function resendAuthenticationCode(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.resendAuthenticationCode()
}
```


### `resendChangePhoneNumberCode`
Re-sends the authentication code sent to confirm a new phone number for the user. Works only if the previously received authenticationCodeInfo next_code_type was not null




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
function resendChangePhoneNumberCode(airgram: Airgram): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.resendChangePhoneNumberCode()
}
```


### `resendEmailAddressVerificationCode`
Re-sends the code to verify an email address to be added to a user's Telegram Passport




**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
function resendEmailAddressVerificationCode(airgram: Airgram): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return airgram.api.resendEmailAddressVerificationCode()
}
```


### `resendPhoneNumberConfirmationCode`
Resends phone number confirmation code




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
function resendPhoneNumberConfirmationCode(airgram: Airgram): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.resendPhoneNumberConfirmationCode()
}
```


### `resendPhoneNumberVerificationCode`
Re-sends the code to verify a phone number to be added to a user's Telegram Passport




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
function resendPhoneNumberVerificationCode(airgram: Airgram): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.resendPhoneNumberVerificationCode()
}
```


### `resetAllNotificationSettings`
Resets all notification settings to their default values. By default, all chats are unmuted, the sound is set to "default" and message previews are shown




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function resetAllNotificationSettings(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.resetAllNotificationSettings()
}
```


### `resetNetworkStatistics`
Resets all network data usage statistics to zero. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function resetNetworkStatistics(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.resetNetworkStatistics()
}
```


### `searchCallMessages`
Searches for call messages. Returns the results in reverse chronological order (i. e., in order of decreasing message_id). For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fromMessageId` | number | Identifier of the message from which to search; use 0 to get results from the last message |
| `limit` | number | The maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `onlyMissed` | boolean | If true, returns only messages with missed calls |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface SearchCallMessagesParams {
  fromMessageId?: number
  limit?: number
  onlyMissed?: boolean
}

function searchCallMessages(airgram: Airgram, params: SearchCallMessagesParams): Promise<MessagesUnion> {
 return airgram.api.searchCallMessages(params)
}
```


### `searchChatMembers`
Searches for a specified query in the first name, last name and username of the members of a specified chat. Requires administrator rights in channels


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `query` | string | Query to search for |
| `limit` | number | The maximum number of users to be returned |
| `filter` | [ChatMembersFilterInputUnion](./td-inputs.md#chatmembersfilterinputunion) | The type of users to return. By default, chatMembersFilterMembers |


**Returns type:** [ChatMembersUnion](./td-outputs.md#chatmembersunion)


Typescript example:
```typescript
interface SearchChatMembersParams {
  chatId?: number
  query?: string
  limit?: number
  filter?: ChatMembersFilterInputUnion
}

function searchChatMembers(airgram: Airgram, params: SearchChatMembersParams): Promise<ChatMembersUnion> {
 return airgram.api.searchChatMembers(params)
}
```


### `searchChatMessages`
Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query (searchSecretMessages should be used instead), or without an enabled message database. For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to search messages |
| `query` | string | Query to search for |
| `senderUserId` | number | If not 0, only messages sent by the specified user will be returned. Not supported in secret chats |
| `fromMessageId` | number | Identifier of the message starting from which history must be fetched; use 0 to get results from the last message |
| `offset` | number | Specify 0 to get results from exactly the from_message_id or a negative offset to get the specified message and some newer messages |
| `limit` | number | The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | Filter for message content in the search results |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface SearchChatMessagesParams {
  chatId?: number
  query?: string
  senderUserId?: number
  fromMessageId?: number
  offset?: number
  limit?: number
  filter?: SearchMessagesFilterInputUnion
}

function searchChatMessages(airgram: Airgram, params: SearchChatMessagesParams): Promise<MessagesUnion> {
 return airgram.api.searchChatMessages(params)
}
```


### `searchChatRecentLocationMessages`
Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location message per user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `limit` | number | Maximum number of messages to be returned |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface SearchChatRecentLocationMessagesParams {
  chatId?: number
  limit?: number
}

function searchChatRecentLocationMessages(airgram: Airgram, params: SearchChatRecentLocationMessagesParams): Promise<MessagesUnion> {
 return airgram.api.searchChatRecentLocationMessages(params)
}
```


### `searchChats`
Searches for the specified query in the title and username of already known chats, this is an offline request. Returns chats in the order seen in the chat list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for. If the query is empty, returns up to 20 recently found chats |
| `limit` | number | Maximum number of chats to be returned |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface SearchChatsParams {
  query?: string
  limit?: number
}

function searchChats(airgram: Airgram, params: SearchChatsParams): Promise<ChatsUnion> {
 return airgram.api.searchChats(params)
}
```


### `searchChatsOnServer`
Searches for the specified query in the title and username of already known chats via request to the server. Returns chats in the order seen in the chat list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |
| `limit` | number | Maximum number of chats to be returned |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface SearchChatsOnServerParams {
  query?: string
  limit?: number
}

function searchChatsOnServer(airgram: Airgram, params: SearchChatsOnServerParams): Promise<ChatsUnion> {
 return airgram.api.searchChatsOnServer(params)
}
```


### `searchContacts`
Searches for the specified query in the first names, last names and usernames of the known user contacts


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for; can be empty to return all contacts |
| `limit` | number | Maximum number of users to be returned |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
interface SearchContactsParams {
  query?: string
  limit?: number
}

function searchContacts(airgram: Airgram, params: SearchContactsParams): Promise<UsersUnion> {
 return airgram.api.searchContacts(params)
}
```


### `searchHashtags`
Searches for recently used hashtags by their prefix


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `prefix` | string | Hashtag prefix to search for |
| `limit` | number | Maximum number of hashtags to be returned |


**Returns type:** [HashtagsUnion](./td-outputs.md#hashtagsunion)


Typescript example:
```typescript
interface SearchHashtagsParams {
  prefix?: string
  limit?: number
}

function searchHashtags(airgram: Airgram, params: SearchHashtagsParams): Promise<HashtagsUnion> {
 return airgram.api.searchHashtags(params)
}
```


### `searchInstalledStickerSets`
Searches for installed sticker sets by looking for specified query in their title and name


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask sticker sets; pass false to return ordinary sticker sets |
| `query` | string | Query to search for |
| `limit` | number | Maximum number of sticker sets to return |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
interface SearchInstalledStickerSetsParams {
  isMasks?: boolean
  query?: string
  limit?: number
}

function searchInstalledStickerSets(airgram: Airgram, params: SearchInstalledStickerSetsParams): Promise<StickerSetsUnion> {
 return airgram.api.searchInstalledStickerSets(params)
}
```


### `searchMessages`
Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |
| `offsetDate` | number | The date of the message starting from which the results should be fetched. Use 0 or any date in the future to get results from the last message |
| `offsetChatId` | number | The chat identifier of the last found message, or 0 for the first request |
| `offsetMessageId` | number | The message identifier of the last found message, or 0 for the first request |
| `limit` | number | The maximum number of messages to be returned, up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface SearchMessagesParams {
  query?: string
  offsetDate?: number
  offsetChatId?: number
  offsetMessageId?: number
  limit?: number
}

function searchMessages(airgram: Airgram, params: SearchMessagesParams): Promise<MessagesUnion> {
 return airgram.api.searchMessages(params)
}
```


### `searchPublicChat`
Searches a public chat by its username. Currently only private chats, supergroups and channels can be public. Returns the chat if found; otherwise an error is returned


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `username` | string | Username to be resolved |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface SearchPublicChatParams {
  username?: string
}

function searchPublicChat(airgram: Airgram, params: SearchPublicChatParams): Promise<ChatUnion> {
 return airgram.api.searchPublicChat(params)
}
```


### `searchPublicChats`
Searches public chats by looking for specified query in their username and title. Currently only private chats, supergroups and channels can be public. Returns a meaningful number of results. Returns nothing if the length of the searched username prefix is less than 5. Excludes private chats with contacts and chats from the chat list from the results


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
interface SearchPublicChatsParams {
  query?: string
}

function searchPublicChats(airgram: Airgram, params: SearchPublicChatsParams): Promise<ChatsUnion> {
 return airgram.api.searchPublicChats(params)
}
```


### `searchSecretMessages`
Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to search. Specify 0 to search in all secret chats |
| `query` | string | Query to search for. If empty, searchChatMessages should be used instead |
| `fromSearchId` | number &#124; string | The identifier from the result of a previous request, use 0 to get results from the last message |
| `limit` | number | Maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | A filter for the content of messages in the search results |


**Returns type:** [FoundMessagesUnion](./td-outputs.md#foundmessagesunion)


Typescript example:
```typescript
interface SearchSecretMessagesParams {
  chatId?: number
  query?: string
  fromSearchId?: number | string
  limit?: number
  filter?: SearchMessagesFilterInputUnion
}

function searchSecretMessages(airgram: Airgram, params: SearchSecretMessagesParams): Promise<FoundMessagesUnion> {
 return airgram.api.searchSecretMessages(params)
}
```


### `searchStickerSet`
Searches for a sticker set by its name


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | Name of the sticker set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
interface SearchStickerSetParams {
  name?: string
}

function searchStickerSet(airgram: Airgram, params: SearchStickerSetParams): Promise<StickerSetUnion> {
 return airgram.api.searchStickerSet(params)
}
```


### `searchStickerSets`
Searches for ordinary sticker sets by looking for specified query in their title and name. Excludes installed sticker sets from the results


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
interface SearchStickerSetsParams {
  query?: string
}

function searchStickerSets(airgram: Airgram, params: SearchStickerSetsParams): Promise<StickerSetsUnion> {
 return airgram.api.searchStickerSets(params)
}
```


### `searchStickers`
Searches for stickers from public sticker sets that correspond to a given emoji


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emoji` | string | String representation of emoji; must be non-empty |
| `limit` | number | Maximum number of stickers to be returned |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
interface SearchStickersParams {
  emoji?: string
  limit?: number
}

function searchStickers(airgram: Airgram, params: SearchStickersParams): Promise<StickersUnion> {
 return airgram.api.searchStickers(params)
}
```


### `sendBotStartMessage`
Invites a bot to a chat (if it is not yet a member) and sends it the /start command. Bots can't be invited to a private chat other than the chat with the bot. Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | Identifier of the bot |
| `chatId` | number | Identifier of the target chat |
| `parameter` | string | A hidden parameter sent to the bot for deep linking purposes (https://api.telegram.org/bots#deep-linking) |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface SendBotStartMessageParams {
  botUserId?: number
  chatId?: number
  parameter?: string
}

function sendBotStartMessage(airgram: Airgram, params: SendBotStartMessageParams): Promise<MessageUnion> {
 return airgram.api.sendBotStartMessage(params)
}
```


### `sendCallDebugInformation`
Sends debug information for a call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `debugInformation` | string | Debug information in application-specific format |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SendCallDebugInformationParams {
  callId?: number
  debugInformation?: string
}

function sendCallDebugInformation(airgram: Airgram, params: SendCallDebugInformationParams): Promise<OkUnion> {
 return airgram.api.sendCallDebugInformation(params)
}
```


### `sendCallRating`
Sends a call rating


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `rating` | number | Call rating; 1-5 |
| `comment` | string | An optional user comment if the rating is less than 5 |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SendCallRatingParams {
  callId?: number
  rating?: number
  comment?: string
}

function sendCallRating(airgram: Airgram, params: SendCallRatingParams): Promise<OkUnion> {
 return airgram.api.sendCallRating(params)
}
```


### `sendChatAction`
Sends a notification about user activity in a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `action` | [ChatActionInputUnion](./td-inputs.md#chatactioninputunion) | The action description |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SendChatActionParams {
  chatId?: number
  action?: ChatActionInputUnion
}

function sendChatAction(airgram: Airgram, params: SendChatActionParams): Promise<OkUnion> {
 return airgram.api.sendChatAction(params)
}
```


### `sendChatScreenshotTakenNotification`
Sends a notification about a screenshot taken in a chat. Supported only in private and secret chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SendChatScreenshotTakenNotificationParams {
  chatId?: number
}

function sendChatScreenshotTakenNotification(airgram: Airgram, params: SendChatScreenshotTakenNotificationParams): Promise<OkUnion> {
 return airgram.api.sendChatScreenshotTakenNotification(params)
}
```


### `sendChatSetTtlMessage`
Changes the current TTL setting (sets a new self-destruct timer) in a secret chat and sends the corresponding message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `ttl` | number | New TTL value, in seconds |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface SendChatSetTtlMessageParams {
  chatId?: number
  ttl?: number
}

function sendChatSetTtlMessage(airgram: Airgram, params: SendChatSetTtlMessageParams): Promise<MessageUnion> {
 return airgram.api.sendChatSetTtlMessage(params)
}
```


### `sendCustomRequest`
Sends a custom request; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `method` | string | The method name |
| `parameters` | string | JSON-serialized method parameters |


**Returns type:** [CustomRequestResultUnion](./td-outputs.md#customrequestresultunion)


Typescript example:
```typescript
interface SendCustomRequestParams {
  method?: string
  parameters?: string
}

function sendCustomRequest(airgram: Airgram, params: SendCustomRequestParams): Promise<CustomRequestResultUnion> {
 return airgram.api.sendCustomRequest(params)
}
```


### `sendEmailAddressVerificationCode`
Sends a code to verify an email address to be added to a user's Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emailAddress` | string | Email address |


**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
interface SendEmailAddressVerificationCodeParams {
  emailAddress?: string
}

function sendEmailAddressVerificationCode(airgram: Airgram, params: SendEmailAddressVerificationCodeParams): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return airgram.api.sendEmailAddressVerificationCode(params)
}
```


### `sendInlineQueryResultMessage`
Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of a message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the message is sent from background |
| `queryId` | number &#124; string | Identifier of the inline query |
| `resultId` | string | Identifier of the inline result |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface SendInlineQueryResultMessageParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  queryId?: number | string
  resultId?: string
}

function sendInlineQueryResultMessage(airgram: Airgram, params: SendInlineQueryResultMessageParams): Promise<MessageUnion> {
 return airgram.api.sendInlineQueryResultMessage(params)
}
```


### `sendMessage`
Sends a message. Returns the sent message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of the message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the message is sent from the background |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | Markup for replying to the message; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | The content of the message to be sent |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface SendMessageParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function sendMessage(airgram: Airgram, params: SendMessageParams): Promise<MessageUnion> {
 return airgram.api.sendMessage(params)
}
```


### `sendMessageAlbum`
Sends messages grouped together into an album. Currently only photo and video messages can be grouped into an album. Returns sent messages


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of a message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the messages. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the messages are sent from the background |
| `inputMessageContents` | [InputMessageContentInputUnion[]](./td-inputs.md#inputmessagecontentinputunion) | Contents of messages to be sent |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
interface SendMessageAlbumParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  inputMessageContents?: InputMessageContentInputUnion[]
}

function sendMessageAlbum(airgram: Airgram, params: SendMessageAlbumParams): Promise<MessagesUnion> {
 return airgram.api.sendMessageAlbum(params)
}
```


### `sendPassportAuthorizationForm`
Sends a Telegram Passport authorization form, effectively sharing data with the service


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `autorizationFormId` | number | Authorization form identifier |
| `types` | [PassportElementTypeInputUnion[]](./td-inputs.md#passportelementtypeinputunion) | Types of Telegram Passport elements chosen by user to complete the authorization form |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SendPassportAuthorizationFormParams {
  autorizationFormId?: number
  types?: PassportElementTypeInputUnion[]
}

function sendPassportAuthorizationForm(airgram: Airgram, params: SendPassportAuthorizationFormParams): Promise<OkUnion> {
 return airgram.api.sendPassportAuthorizationForm(params)
}
```


### `sendPaymentForm`
Sends a filled-out payment form to the bot for final verification


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |
| `orderInfoId` | string | Identifier returned by ValidateOrderInfo, or an empty string |
| `shippingOptionId` | string | Identifier of a chosen shipping option, if applicable |
| `credentials` | [InputCredentialsInputUnion](./td-inputs.md#inputcredentialsinputunion) | The credentials chosen by user for payment |


**Returns type:** [PaymentResultUnion](./td-outputs.md#paymentresultunion)


Typescript example:
```typescript
interface SendPaymentFormParams {
  chatId?: number
  messageId?: number
  orderInfoId?: string
  shippingOptionId?: string
  credentials?: InputCredentialsInputUnion
}

function sendPaymentForm(airgram: Airgram, params: SendPaymentFormParams): Promise<PaymentResultUnion> {
 return airgram.api.sendPaymentForm(params)
}
```


### `sendPhoneNumberConfirmationCode`
Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********" or "tg://confirmphone?phone=*******&hash=**********" link


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `hash` | string | Value of the "hash" parameter from the link |
| `phoneNumber` | string | Value of the "phone" parameter from the link |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
interface SendPhoneNumberConfirmationCodeParams {
  hash?: string
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function sendPhoneNumberConfirmationCode(airgram: Airgram, params: SendPhoneNumberConfirmationCodeParams): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.sendPhoneNumberConfirmationCode(params)
}
```


### `sendPhoneNumberVerificationCode`
Sends a code to verify a phone number to be added to a user's Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The phone number of the user, in international format |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
interface SendPhoneNumberVerificationCodeParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function sendPhoneNumberVerificationCode(airgram: Airgram, params: SendPhoneNumberVerificationCodeParams): Promise<AuthenticationCodeInfoUnion> {
 return airgram.api.sendPhoneNumberVerificationCode(params)
}
```


### `setAccountTtl`
Changes the period of inactivity after which the account of the current user will automatically be deleted


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `ttl` | [AccountTtlInput](./td-inputs.md#accountttlinput) | New account TTL |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetAccountTtlParams {
  ttl?: AccountTtlInput
}

function setAccountTtl(airgram: Airgram, params: SetAccountTtlParams): Promise<OkUnion> {
 return airgram.api.setAccountTtl(params)
}
```


### `setAlarm`
Succeeds after a specified amount of time has passed. Can be called before authorization. Can be called before initialization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `seconds` | number | Number of seconds before the function returns |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetAlarmParams {
  seconds?: number
}

function setAlarm(airgram: Airgram, params: SetAlarmParams): Promise<OkUnion> {
 return airgram.api.setAlarm(params)
}
```


### `setAuthenticationPhoneNumber`
Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The phone number of the user, in international format |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetAuthenticationPhoneNumberParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function setAuthenticationPhoneNumber(airgram: Airgram, params: SetAuthenticationPhoneNumberParams): Promise<OkUnion> {
 return airgram.api.setAuthenticationPhoneNumber(params)
}
```


### `setBio`
Changes the bio of the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `bio` | string | The new value of the user bio; 0-70 characters without line feeds |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetBioParams {
  bio?: string
}

function setBio(airgram: Airgram, params: SetBioParams): Promise<OkUnion> {
 return airgram.api.setBio(params)
}
```


### `setBotUpdatesStatus`
Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `pendingUpdateCount` | number | The number of pending updates |
| `errorMessage` | string | The last error message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetBotUpdatesStatusParams {
  pendingUpdateCount?: number
  errorMessage?: string
}

function setBotUpdatesStatus(airgram: Airgram, params: SetBotUpdatesStatusParams): Promise<OkUnion> {
 return airgram.api.setBotUpdatesStatus(params)
}
```


### `setChatClientData`
Changes client data associated with a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `clientData` | string | New value of client_data |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatClientDataParams {
  chatId?: number
  clientData?: string
}

function setChatClientData(airgram: Airgram, params: SetChatClientDataParams): Promise<OkUnion> {
 return airgram.api.setChatClientData(params)
}
```


### `setChatDraftMessage`
Changes the draft message in a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `draftMessage` | [DraftMessageInput](./td-inputs.md#draftmessageinput) | New draft message; may be null |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatDraftMessageParams {
  chatId?: number
  draftMessage?: DraftMessageInput
}

function setChatDraftMessage(airgram: Airgram, params: SetChatDraftMessageParams): Promise<OkUnion> {
 return airgram.api.setChatDraftMessage(params)
}
```


### `setChatMemberStatus`
Changes the status of a chat member, needs appropriate privileges. This function is currently not suitable for adding new members to the chat; instead, use addChatMember. The chat member status will not be changed until it has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |
| `status` | [ChatMemberStatusInputUnion](./td-inputs.md#chatmemberstatusinputunion) | The new status of the member in the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatMemberStatusParams {
  chatId?: number
  userId?: number
  status?: ChatMemberStatusInputUnion
}

function setChatMemberStatus(airgram: Airgram, params: SetChatMemberStatusParams): Promise<OkUnion> {
 return airgram.api.setChatMemberStatus(params)
}
```


### `setChatNotificationSettings`
Changes the notification settings of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `notificationSettings` | [ChatNotificationSettingsInput](./td-inputs.md#chatnotificationsettingsinput) | New notification settings for the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatNotificationSettingsParams {
  chatId?: number
  notificationSettings?: ChatNotificationSettingsInput
}

function setChatNotificationSettings(airgram: Airgram, params: SetChatNotificationSettingsParams): Promise<OkUnion> {
 return airgram.api.setChatNotificationSettings(params)
}
```


### `setChatPhoto`
Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires administrator rights in basic groups and the appropriate administrator rights in supergroups and channels. The photo will not be changed before request to the server has been completed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `photo` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | New chat photo. You can use a zero InputFileId to delete the chat photo. Files that are accessible only by HTTP URL are not acceptable |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatPhotoParams {
  chatId?: number
  photo?: InputFileInputUnion
}

function setChatPhoto(airgram: Airgram, params: SetChatPhotoParams): Promise<OkUnion> {
 return airgram.api.setChatPhoto(params)
}
```


### `setChatTitle`
Changes the chat title. Supported only for basic groups, supergroups and channels. Requires administrator rights in basic groups and the appropriate administrator rights in supergroups and channels. The title will not be changed until the request to the server has been completed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `title` | string | New title of the chat; 1-255 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetChatTitleParams {
  chatId?: number
  title?: string
}

function setChatTitle(airgram: Airgram, params: SetChatTitleParams): Promise<OkUnion> {
 return airgram.api.setChatTitle(params)
}
```


### `setCustomLanguagePack`
Adds or changes a custom language pack to the current localization target


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `info` | [LanguagePackInfoInput](./td-inputs.md#languagepackinfoinput) | Information about the language pack. Language pack ID must start with 'X', consist only of English letters, digits and hyphens, and must not exceed 64 characters |
| `strings` | [LanguagePackStringInput[]](./td-inputs.md#languagepackstringinput) | Strings of the new language pack |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetCustomLanguagePackParams {
  info?: LanguagePackInfoInput
  strings?: LanguagePackStringInput[]
}

function setCustomLanguagePack(airgram: Airgram, params: SetCustomLanguagePackParams): Promise<OkUnion> {
 return airgram.api.setCustomLanguagePack(params)
}
```


### `setCustomLanguagePackString`
Adds, edits or deletes a string in a custom language pack


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Identifier of a previously added custom language pack in the current localization target |
| `newString` | [LanguagePackStringInput](./td-inputs.md#languagepackstringinput) | New language pack string |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetCustomLanguagePackStringParams {
  languagePackId?: string
  newString?: LanguagePackStringInput
}

function setCustomLanguagePackString(airgram: Airgram, params: SetCustomLanguagePackStringParams): Promise<OkUnion> {
 return airgram.api.setCustomLanguagePackString(params)
}
```


### `setDatabaseEncryptionKey`
Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `newEncryptionKey` | string | New encryption key |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetDatabaseEncryptionKeyParams {
  newEncryptionKey?: string
}

function setDatabaseEncryptionKey(airgram: Airgram, params: SetDatabaseEncryptionKeyParams): Promise<OkUnion> {
 return airgram.api.setDatabaseEncryptionKey(params)
}
```


### `setFileGenerationProgress`
The next part of a file was generated


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `generationId` | number &#124; string | The identifier of the generation process |
| `expectedSize` | number | Expected size of the generated file, in bytes; 0 if unknown |
| `localPrefixSize` | number | The number of bytes already generated |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetFileGenerationProgressParams {
  generationId?: number | string
  expectedSize?: number
  localPrefixSize?: number
}

function setFileGenerationProgress(airgram: Airgram, params: SetFileGenerationProgressParams): Promise<OkUnion> {
 return airgram.api.setFileGenerationProgress(params)
}
```


### `setGameScore`
Updates the game score of the specified user in the game; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat to which the message with the game |
| `messageId` | number | Identifier of the message |
| `editMessage` | boolean | True, if the message should be edited |
| `userId` | number | User identifier |
| `score` | number | The new score |
| `force` | boolean | Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
interface SetGameScoreParams {
  chatId?: number
  messageId?: number
  editMessage?: boolean
  userId?: number
  score?: number
  force?: boolean
}

function setGameScore(airgram: Airgram, params: SetGameScoreParams): Promise<MessageUnion> {
 return airgram.api.setGameScore(params)
}
```


### `setInlineGameScore`
Updates the game score of the specified user in a game; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `editMessage` | boolean | True, if the message should be edited |
| `userId` | number | User identifier |
| `score` | number | The new score |
| `force` | boolean | Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetInlineGameScoreParams {
  inlineMessageId?: string
  editMessage?: boolean
  userId?: number
  score?: number
  force?: boolean
}

function setInlineGameScore(airgram: Airgram, params: SetInlineGameScoreParams): Promise<OkUnion> {
 return airgram.api.setInlineGameScore(params)
}
```


### `setName`
Changes the first and last name of the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `firstName` | string | The new value of the first name for the user; 1-255 characters |
| `lastName` | string | The new value of the optional last name for the user; 0-255 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetNameParams {
  firstName?: string
  lastName?: string
}

function setName(airgram: Airgram, params: SetNameParams): Promise<OkUnion> {
 return airgram.api.setName(params)
}
```


### `setNetworkType`
Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks, so it should be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [NetworkTypeInputUnion](./td-inputs.md#networktypeinputunion) | The new network type. By default, networkTypeOther |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetNetworkTypeParams {
  type?: NetworkTypeInputUnion
}

function setNetworkType(airgram: Airgram, params: SetNetworkTypeParams): Promise<OkUnion> {
 return airgram.api.setNetworkType(params)
}
```


### `setOption`
Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | The name of the option |
| `value` | [OptionValueInputUnion](./td-inputs.md#optionvalueinputunion) | The new value of the option |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetOptionParams {
  name?: string
  value?: OptionValueInputUnion
}

function setOption(airgram: Airgram, params: SetOptionParams): Promise<OkUnion> {
 return airgram.api.setOption(params)
}
```


### `setPassportElement`
Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `element` | [InputPassportElementInputUnion](./td-inputs.md#inputpassportelementinputunion) | Input Telegram Passport element |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementUnion](./td-outputs.md#passportelementunion)


Typescript example:
```typescript
interface SetPassportElementParams {
  element?: InputPassportElementInputUnion
  password?: string
}

function setPassportElement(airgram: Airgram, params: SetPassportElementParams): Promise<PassportElementUnion> {
 return airgram.api.setPassportElement(params)
}
```


### `setPassportElementErrors`
Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `errors` | [InputPassportElementErrorInput[]](./td-inputs.md#inputpassportelementerrorinput) | The errors |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetPassportElementErrorsParams {
  userId?: number
  errors?: InputPassportElementErrorInput[]
}

function setPassportElementErrors(airgram: Airgram, params: SetPassportElementErrorsParams): Promise<OkUnion> {
 return airgram.api.setPassportElementErrors(params)
}
```


### `setPassword`
Changes the password for the user. If a new recovery email address is specified, then the error EMAIL_UNCONFIRMED is returned and the password change will not be applied until the new recovery email address has been confirmed. The application should periodically call getPasswordState to check whether the new email address has been confirmed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `oldPassword` | string | Previous password of the user |
| `newPassword` | string | New password of the user; may be empty to remove the password |
| `newHint` | string | New password hint; may be empty |
| `setRecoveryEmailAddress` | boolean | Pass true if the recovery email address should be changed |
| `newRecoveryEmailAddress` | string | New recovery email address; may be empty |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
interface SetPasswordParams {
  oldPassword?: string
  newPassword?: string
  newHint?: string
  setRecoveryEmailAddress?: boolean
  newRecoveryEmailAddress?: string
}

function setPassword(airgram: Airgram, params: SetPasswordParams): Promise<PasswordStateUnion> {
 return airgram.api.setPassword(params)
}
```


### `setPinnedChats`
Changes the order of pinned chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatIds` | number[] | The new list of pinned chats |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetPinnedChatsParams {
  chatIds?: number[]
}

function setPinnedChats(airgram: Airgram, params: SetPinnedChatsParams): Promise<OkUnion> {
 return airgram.api.setPinnedChats(params)
}
```


### `setProfilePhoto`
Uploads a new profile photo for the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `photo` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Profile photo to set. inputFileId and inputFileRemote may still be unsupported |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetProfilePhotoParams {
  photo?: InputFileInputUnion
}

function setProfilePhoto(airgram: Airgram, params: SetProfilePhotoParams): Promise<OkUnion> {
 return airgram.api.setProfilePhoto(params)
}
```


### `setRecoveryEmailAddress`
Changes the recovery email address of the user. If a new recovery email address is specified, then the error EMAIL_UNCONFIRMED is returned and the email address will not be changed until the new email has been confirmed. The application should periodically call getPasswordState to check whether the email address has been confirmed. If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Password of the current user |
| `newRecoveryEmailAddress` | string | New recovery email address |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
interface SetRecoveryEmailAddressParams {
  password?: string
  newRecoveryEmailAddress?: string
}

function setRecoveryEmailAddress(airgram: Airgram, params: SetRecoveryEmailAddressParams): Promise<PasswordStateUnion> {
 return airgram.api.setRecoveryEmailAddress(params)
}
```


### `setScopeNotificationSettings`
Changes notification settings for chats of a given type


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `scope` | [NotificationSettingsScopeInputUnion](./td-inputs.md#notificationsettingsscopeinputunion) | Types of chats for which to change the notification settings |
| `notificationSettings` | [ScopeNotificationSettingsInput](./td-inputs.md#scopenotificationsettingsinput) | The new notification settings for the given scope |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion
  notificationSettings?: ScopeNotificationSettingsInput
}

function setScopeNotificationSettings(airgram: Airgram, params: SetScopeNotificationSettingsParams): Promise<OkUnion> {
 return airgram.api.setScopeNotificationSettings(params)
}
```


### `setStickerPositionInSet`
Changes the position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker |
| `position` | number | New position of the sticker in the set, zero-based |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetStickerPositionInSetParams {
  sticker?: InputFileInputUnion
  position?: number
}

function setStickerPositionInSet(airgram: Airgram, params: SetStickerPositionInSetParams): Promise<OkUnion> {
 return airgram.api.setStickerPositionInSet(params)
}
```


### `setSupergroupDescription`
Changes information about a supergroup or channel; requires appropriate administrator rights


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `description` | string | New supergroup or channel description; 0-255 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetSupergroupDescriptionParams {
  supergroupId?: number
  description?: string
}

function setSupergroupDescription(airgram: Airgram, params: SetSupergroupDescriptionParams): Promise<OkUnion> {
 return airgram.api.setSupergroupDescription(params)
}
```


### `setSupergroupStickerSet`
Changes the sticker set of a supergroup; requires appropriate rights in the supergroup


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup |
| `stickerSetId` | number &#124; string | New value of the supergroup sticker set identifier. Use 0 to remove the supergroup sticker set |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetSupergroupStickerSetParams {
  supergroupId?: number
  stickerSetId?: number | string
}

function setSupergroupStickerSet(airgram: Airgram, params: SetSupergroupStickerSetParams): Promise<OkUnion> {
 return airgram.api.setSupergroupStickerSet(params)
}
```


### `setSupergroupUsername`
Changes the username of a supergroup or channel, requires creator privileges in the supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `username` | string | New value of the username. Use an empty string to remove the username |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetSupergroupUsernameParams {
  supergroupId?: number
  username?: string
}

function setSupergroupUsername(airgram: Airgram, params: SetSupergroupUsernameParams): Promise<OkUnion> {
 return airgram.api.setSupergroupUsername(params)
}
```


### `setTdlibParameters`
Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `parameters` | [TdlibParametersInput](./td-inputs.md#tdlibparametersinput) | Parameters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetTdlibParametersParams {
  parameters?: TdlibParametersInput
}

function setTdlibParameters(airgram: Airgram, params: SetTdlibParametersParams): Promise<OkUnion> {
 return airgram.api.setTdlibParameters(params)
}
```


### `setUserPrivacySettingRules`
Changes user privacy settings


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setting` | [UserPrivacySettingInputUnion](./td-inputs.md#userprivacysettinginputunion) | The privacy setting |
| `rules` | [UserPrivacySettingRulesInput](./td-inputs.md#userprivacysettingrulesinput) | The new privacy rules |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion
  rules?: UserPrivacySettingRulesInput
}

function setUserPrivacySettingRules(airgram: Airgram, params: SetUserPrivacySettingRulesParams): Promise<OkUnion> {
 return airgram.api.setUserPrivacySettingRules(params)
}
```


### `setUsername`
Changes the username of the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `username` | string | The new value of the username. Use an empty string to remove the username |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface SetUsernameParams {
  username?: string
}

function setUsername(airgram: Airgram, params: SetUsernameParams): Promise<OkUnion> {
 return airgram.api.setUsername(params)
}
```


### `terminateAllOtherSessions`
Terminates all other sessions of the current user




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function terminateAllOtherSessions(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.terminateAllOtherSessions()
}
```


### `terminateSession`
Terminates a session of the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sessionId` | number &#124; string | Session identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface TerminateSessionParams {
  sessionId?: number | string
}

function terminateSession(airgram: Airgram, params: TerminateSessionParams): Promise<OkUnion> {
 return airgram.api.terminateSession(params)
}
```


### `testCallBytes`
Returns the received bytes; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string | Bytes to return |


**Returns type:** [TestBytesUnion](./td-outputs.md#testbytesunion)


Typescript example:
```typescript
interface TestCallBytesParams {
  x?: string
}

function testCallBytes(airgram: Airgram, params: TestCallBytesParams): Promise<TestBytesUnion> {
 return airgram.api.testCallBytes(params)
}
```


### `testCallEmpty`
Does nothing; for testing only




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function testCallEmpty(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.testCallEmpty()
}
```


### `testCallString`
Returns the received string; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string | String to return |


**Returns type:** [TestStringUnion](./td-outputs.md#teststringunion)


Typescript example:
```typescript
interface TestCallStringParams {
  x?: string
}

function testCallString(airgram: Airgram, params: TestCallStringParams): Promise<TestStringUnion> {
 return airgram.api.testCallString(params)
}
```


### `testCallVectorInt`
Returns the received vector of numbers; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | number[] | Vector of numbers to return |


**Returns type:** [TestVectorIntUnion](./td-outputs.md#testvectorintunion)


Typescript example:
```typescript
interface TestCallVectorIntParams {
  x?: number[]
}

function testCallVectorInt(airgram: Airgram, params: TestCallVectorIntParams): Promise<TestVectorIntUnion> {
 return airgram.api.testCallVectorInt(params)
}
```


### `testCallVectorIntObject`
Returns the received vector of objects containing a number; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | [TestIntInput[]](./td-inputs.md#testintinput) | Vector of objects to return |


**Returns type:** [TestVectorIntObjectUnion](./td-outputs.md#testvectorintobjectunion)


Typescript example:
```typescript
interface TestCallVectorIntObjectParams {
  x?: TestIntInput[]
}

function testCallVectorIntObject(airgram: Airgram, params: TestCallVectorIntObjectParams): Promise<TestVectorIntObjectUnion> {
 return airgram.api.testCallVectorIntObject(params)
}
```


### `testCallVectorString`
For testing only request. Returns the received vector of strings; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string[] | Vector of strings to return |


**Returns type:** [TestVectorStringUnion](./td-outputs.md#testvectorstringunion)


Typescript example:
```typescript
interface TestCallVectorStringParams {
  x?: string[]
}

function testCallVectorString(airgram: Airgram, params: TestCallVectorStringParams): Promise<TestVectorStringUnion> {
 return airgram.api.testCallVectorString(params)
}
```


### `testCallVectorStringObject`
Returns the received vector of objects containing a string; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | [TestStringInput[]](./td-inputs.md#teststringinput) | Vector of objects to return |


**Returns type:** [TestVectorStringObjectUnion](./td-outputs.md#testvectorstringobjectunion)


Typescript example:
```typescript
interface TestCallVectorStringObjectParams {
  x?: TestStringInput[]
}

function testCallVectorStringObject(airgram: Airgram, params: TestCallVectorStringObjectParams): Promise<TestVectorStringObjectUnion> {
 return airgram.api.testCallVectorStringObject(params)
}
```


### `testGetDifference`
Forces an updates.getDifference call to the Telegram servers; for testing only




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function testGetDifference(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.testGetDifference()
}
```


### `testNetwork`
Sends a simple network request to the Telegram servers; for testing only




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
function testNetwork(airgram: Airgram): Promise<OkUnion> {
 return airgram.api.testNetwork()
}
```


### `testSquareInt`
Returns the squared received number; for testing only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | number | Number to square |


**Returns type:** [TestIntUnion](./td-outputs.md#testintunion)


Typescript example:
```typescript
interface TestSquareIntParams {
  x?: number
}

function testSquareInt(airgram: Airgram, params: TestSquareIntParams): Promise<TestIntUnion> {
 return airgram.api.testSquareInt(params)
}
```


### `testUseError`
Does nothing and ensures that the Error object is used; for testing only




**Returns type:** [ErrorUnion](./td-outputs.md#errorunion)


Typescript example:
```typescript
function testUseError(airgram: Airgram): Promise<ErrorUnion> {
 return airgram.api.testUseError()
}
```


### `testUseUpdate`
Does nothing and ensures that the Update object is used; for testing only




**Returns type:** [UpdateUnion](./td-outputs.md#updateunion)


Typescript example:
```typescript
function testUseUpdate(airgram: Airgram): Promise<UpdateUnion> {
 return airgram.api.testUseUpdate()
}
```


### `toggleBasicGroupAdministrators`
Toggles the "All members are admins" setting in basic groups; requires creator privileges in the group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Identifier of the basic group |
| `everyoneIsAdministrator` | boolean | New value of everyone_is_administrator |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleBasicGroupAdministratorsParams {
  basicGroupId?: number
  everyoneIsAdministrator?: boolean
}

function toggleBasicGroupAdministrators(airgram: Airgram, params: ToggleBasicGroupAdministratorsParams): Promise<OkUnion> {
 return airgram.api.toggleBasicGroupAdministrators(params)
}
```


### `toggleChatDefaultDisableNotification`
Changes the value of the default disable_notification parameter, used when a message is sent to a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `defaultDisableNotification` | boolean | New value of default_disable_notification |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleChatDefaultDisableNotificationParams {
  chatId?: number
  defaultDisableNotification?: boolean
}

function toggleChatDefaultDisableNotification(airgram: Airgram, params: ToggleChatDefaultDisableNotificationParams): Promise<OkUnion> {
 return airgram.api.toggleChatDefaultDisableNotification(params)
}
```


### `toggleChatIsMarkedAsUnread`
Changes the marked as unread state of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isMarkedAsUnread` | boolean | New value of is_marked_as_unread |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleChatIsMarkedAsUnreadParams {
  chatId?: number
  isMarkedAsUnread?: boolean
}

function toggleChatIsMarkedAsUnread(airgram: Airgram, params: ToggleChatIsMarkedAsUnreadParams): Promise<OkUnion> {
 return airgram.api.toggleChatIsMarkedAsUnread(params)
}
```


### `toggleChatIsPinned`
Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max") non-secret chats and the same number of secret chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isPinned` | boolean | New value of is_pinned |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleChatIsPinnedParams {
  chatId?: number
  isPinned?: boolean
}

function toggleChatIsPinned(airgram: Airgram, params: ToggleChatIsPinnedParams): Promise<OkUnion> {
 return airgram.api.toggleChatIsPinned(params)
}
```


### `toggleSupergroupInvites`
Toggles whether all members of a supergroup can add new members; requires appropriate administrator rights in the supergroup.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup |
| `anyoneCanInvite` | boolean | New value of anyone_can_invite |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleSupergroupInvitesParams {
  supergroupId?: number
  anyoneCanInvite?: boolean
}

function toggleSupergroupInvites(airgram: Airgram, params: ToggleSupergroupInvitesParams): Promise<OkUnion> {
 return airgram.api.toggleSupergroupInvites(params)
}
```


### `toggleSupergroupIsAllHistoryAvailable`
Toggles whether the message history of a supergroup is available to new members; requires appropriate administrator rights in the supergroup.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | The identifier of the supergroup |
| `isAllHistoryAvailable` | boolean | The new value of is_all_history_available |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleSupergroupIsAllHistoryAvailableParams {
  supergroupId?: number
  isAllHistoryAvailable?: boolean
}

function toggleSupergroupIsAllHistoryAvailable(airgram: Airgram, params: ToggleSupergroupIsAllHistoryAvailableParams): Promise<OkUnion> {
 return airgram.api.toggleSupergroupIsAllHistoryAvailable(params)
}
```


### `toggleSupergroupSignMessages`
Toggles sender signatures messages sent in a channel; requires appropriate administrator rights in the channel.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the channel |
| `signMessages` | boolean | New value of sign_messages |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ToggleSupergroupSignMessagesParams {
  supergroupId?: number
  signMessages?: boolean
}

function toggleSupergroupSignMessages(airgram: Airgram, params: ToggleSupergroupSignMessagesParams): Promise<OkUnion> {
 return airgram.api.toggleSupergroupSignMessages(params)
}
```


### `unblockUser`
Removes a user from the blacklist


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface UnblockUserParams {
  userId?: number
}

function unblockUser(airgram: Airgram, params: UnblockUserParams): Promise<OkUnion> {
 return airgram.api.unblockUser(params)
}
```


### `unpinSupergroupMessage`
Removes the pinned message from a supergroup or channel; requires appropriate administrator rights in the supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface UnpinSupergroupMessageParams {
  supergroupId?: number
}

function unpinSupergroupMessage(airgram: Airgram, params: UnpinSupergroupMessageParams): Promise<OkUnion> {
 return airgram.api.unpinSupergroupMessage(params)
}
```


### `upgradeBasicGroupChatToSupergroupChat`
Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and messageChatUpgradeFrom. Deactivates the original basic group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to upgrade |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
interface UpgradeBasicGroupChatToSupergroupChatParams {
  chatId?: number
}

function upgradeBasicGroupChatToSupergroupChat(airgram: Airgram, params: UpgradeBasicGroupChatToSupergroupChatParams): Promise<ChatUnion> {
 return airgram.api.upgradeBasicGroupChatToSupergroupChat(params)
}
```


### `uploadFile`
Asynchronously uploads a file to the cloud without sending it in a message. updateFile will be used to notify about upload progress and successful completion of the upload. The file will not have a persistent remote identifier until it will be sent in a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `file` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | File to upload |
| `fileType` | [FileTypeInputUnion](./td-inputs.md#filetypeinputunion) | File type |
| `priority` | number | Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two files are equal, then the first one for which uploadFile was called will be uploaded first |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface UploadFileParams {
  file?: InputFileInputUnion
  fileType?: FileTypeInputUnion
  priority?: number
}

function uploadFile(airgram: Airgram, params: UploadFileParams): Promise<FileUnion> {
 return airgram.api.uploadFile(params)
}
```


### `uploadStickerFile`
Uploads a PNG image with a sticker; for bots only; returns the uploaded file


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker file owner |
| `pngSticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
interface UploadStickerFileParams {
  userId?: number
  pngSticker?: InputFileInputUnion
}

function uploadStickerFile(airgram: Airgram, params: UploadStickerFileParams): Promise<FileUnion> {
 return airgram.api.uploadStickerFile(params)
}
```


### `validateOrderInfo`
Validates the order information provided by a user and returns the available shipping options for a flexible invoice


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |
| `orderInfo` | [OrderInfoInput](./td-inputs.md#orderinfoinput) | The order information, provided by the user |
| `allowSave` | boolean | True, if the order information can be saved |


**Returns type:** [ValidatedOrderInfoUnion](./td-outputs.md#validatedorderinfounion)


Typescript example:
```typescript
interface ValidateOrderInfoParams {
  chatId?: number
  messageId?: number
  orderInfo?: OrderInfoInput
  allowSave?: boolean
}

function validateOrderInfo(airgram: Airgram, params: ValidateOrderInfoParams): Promise<ValidatedOrderInfoUnion> {
 return airgram.api.validateOrderInfo(params)
}
```


### `viewMessages`
This method should be called if messages are being viewed by the user. Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageIds` | number[] | The identifiers of the messages being viewed |
| `forceRead` | boolean | True, if messages in closed chats should be marked as read |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ViewMessagesParams {
  chatId?: number
  messageIds?: number[]
  forceRead?: boolean
}

function viewMessages(airgram: Airgram, params: ViewMessagesParams): Promise<OkUnion> {
 return airgram.api.viewMessages(params)
}
```


### `viewTrendingStickerSets`
Informs the server that some trending sticker sets have been viewed by the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `stickerSetIds` | number &#124; string[] | Identifiers of viewed trending sticker sets |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
interface ViewTrendingStickerSetsParams {
  stickerSetIds?: number | string[]
}

function viewTrendingStickerSets(airgram: Airgram, params: ViewTrendingStickerSetsParams): Promise<OkUnion> {
 return airgram.api.viewTrendingStickerSets(params)
}
```
