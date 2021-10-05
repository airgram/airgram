import {
  Address,
  AuthorizationStateUnion,
  Background,
  BasicGroup,
  BasicGroupFullInfo,
  Call,
  CallbackQueryPayloadUnion,
  Chat,
  ChatActionBarUnion,
  ChatActionUnion,
  ChatFilterInfo,
  ChatInviteLink,
  ChatListUnion,
  ChatMember,
  ChatNearby,
  ChatNotificationSettings,
  ChatPermissions,
  ChatPhotoInfo,
  ChatPosition,
  ChatTheme,
  ChatTypeUnion,
  ConnectionStateUnion,
  DraftMessage,
  File,
  GroupCall,
  GroupCallParticipant,
  LanguagePackString,
  Location,
  Message,
  MessageContentUnion,
  MessageInteractionInfo,
  Notification,
  NotificationGroup,
  NotificationGroupTypeUnion,
  NotificationSettingsScopeUnion,
  OptionValueUnion,
  OrderInfo,
  Poll,
  ReplyMarkupUnion,
  ScopeNotificationSettings,
  SecretChat,
  Sticker,
  StickerSet,
  StickerSets,
  SuggestedActionUnion,
  Supergroup,
  SupergroupFullInfo,
  TermsOfService,
  User,
  UserFullInfo,
  UserPrivacySettingRules,
  UserPrivacySettingUnion,
  UserStatusUnion,
  VoiceChat
} from './index'

/** Contains notifications about data changes */
export type UpdateUnion = UpdateAuthorizationState
  | UpdateNewMessage
  | UpdateMessageSendAcknowledged
  | UpdateMessageSendSucceeded
  | UpdateMessageSendFailed
  | UpdateMessageContent
  | UpdateMessageEdited
  | UpdateMessageIsPinned
  | UpdateMessageInteractionInfo
  | UpdateMessageContentOpened
  | UpdateMessageMentionRead
  | UpdateMessageLiveLocationViewed
  | UpdateNewChat
  | UpdateChatTitle
  | UpdateChatPhoto
  | UpdateChatPermissions
  | UpdateChatLastMessage
  | UpdateChatPosition
  | UpdateChatIsMarkedAsUnread
  | UpdateChatIsBlocked
  | UpdateChatHasScheduledMessages
  | UpdateChatVoiceChat
  | UpdateChatDefaultDisableNotification
  | UpdateChatReadInbox
  | UpdateChatReadOutbox
  | UpdateChatUnreadMentionCount
  | UpdateChatNotificationSettings
  | UpdateScopeNotificationSettings
  | UpdateChatMessageTtlSetting
  | UpdateChatActionBar
  | UpdateChatTheme
  | UpdateChatReplyMarkup
  | UpdateChatDraftMessage
  | UpdateChatFilters
  | UpdateChatOnlineMemberCount
  | UpdateNotification
  | UpdateNotificationGroup
  | UpdateActiveNotifications
  | UpdateHavePendingNotifications
  | UpdateDeleteMessages
  | UpdateUserChatAction
  | UpdateUserStatus
  | UpdateUser
  | UpdateBasicGroup
  | UpdateSupergroup
  | UpdateSecretChat
  | UpdateUserFullInfo
  | UpdateBasicGroupFullInfo
  | UpdateSupergroupFullInfo
  | UpdateServiceNotification
  | UpdateFile
  | UpdateFileGenerationStart
  | UpdateFileGenerationStop
  | UpdateCall
  | UpdateGroupCall
  | UpdateGroupCallParticipant
  | UpdateNewCallSignalingData
  | UpdateUserPrivacySettingRules
  | UpdateUnreadMessageCount
  | UpdateUnreadChatCount
  | UpdateOption
  | UpdateStickerSet
  | UpdateInstalledStickerSets
  | UpdateTrendingStickerSets
  | UpdateRecentStickers
  | UpdateFavoriteStickers
  | UpdateSavedAnimations
  | UpdateSelectedBackground
  | UpdateChatThemes
  | UpdateLanguagePackStrings
  | UpdateConnectionState
  | UpdateTermsOfService
  | UpdateUsersNearby
  | UpdateDiceEmojis
  | UpdateAnimatedEmojiMessageClicked
  | UpdateAnimationSearchParameters
  | UpdateSuggestedActions
  | UpdateNewInlineQuery
  | UpdateNewChosenInlineResult
  | UpdateNewCallbackQuery
  | UpdateNewInlineCallbackQuery
  | UpdateNewShippingQuery
  | UpdateNewPreCheckoutQuery
  | UpdateNewCustomEvent
  | UpdateNewCustomQuery
  | UpdatePoll
  | UpdatePollAnswer
  | UpdateChatMember

/** The user authorization state has changed */
export interface UpdateAuthorizationState {
  _: 'updateAuthorizationState'
  /** New authorization state */
  authorizationState: AuthorizationStateUnion
}

/** A new message was received; can also be an outgoing message */
export interface UpdateNewMessage {
  _: 'updateNewMessage'
  /** The new message */
  message: Message
}

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export interface UpdateMessageSendAcknowledged {
  _: 'updateMessageSendAcknowledged'
  /** The chat identifier of the sent message */
  chatId: number
  /** A temporary message identifier */
  messageId: number
}

/** A message has been successfully sent */
export interface UpdateMessageSendSucceeded {
  _: 'updateMessageSendSucceeded'
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  message: Message
  /** The previous temporary message identifier */
  oldMessageId: number
}

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export interface UpdateMessageSendFailed {
  _: 'updateMessageSendFailed'
  /** Contains information about the message which failed to send */
  message: Message
  /** The previous temporary message identifier */
  oldMessageId: number
  /** An error code */
  errorCode: number
  /** Error message */
  errorMessage: string
}

/** The message content has changed */
export interface UpdateMessageContent {
  _: 'updateMessageContent'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
  /** New message content */
  newContent: MessageContentUnion
}

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export interface UpdateMessageEdited {
  _: 'updateMessageEdited'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
  /** Point in time (Unix timestamp) when the message was edited */
  editDate: number
  /** New message reply markup; may be null */
  replyMarkup?: ReplyMarkupUnion
}

/** The message pinned state was changed */
export interface UpdateMessageIsPinned {
  _: 'updateMessageIsPinned'
  /** Chat identifier */
  chatId: number
  /** The message identifier */
  messageId: number
  /** True, if the message is pinned */
  isPinned: boolean
}

/** The information about interactions with a message has changed */
export interface UpdateMessageInteractionInfo {
  _: 'updateMessageInteractionInfo'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
  /** New information about interactions with the message; may be null */
  interactionInfo?: MessageInteractionInfo
}

/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export interface UpdateMessageContentOpened {
  _: 'updateMessageContentOpened'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
}

/** A message with an unread mention was read */
export interface UpdateMessageMentionRead {
  _: 'updateMessageMentionRead'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
  /** The new number of unread mention messages left in the chat */
  unreadMentionCount: number
}

/**
 * A message with a live location was viewed. When the update is received, the application
 * is supposed to update the live location
 */
export interface UpdateMessageLiveLocationViewed {
  _: 'updateMessageLiveLocationViewed'
  /** Identifier of the chat with the live location message */
  chatId: number
  /** Identifier of the message with live location */
  messageId: number
}

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the application. The chat field changes will be reported
 * through separate updates
 */
export interface UpdateNewChat {
  _: 'updateNewChat'
  /** The chat */
  chat: Chat
}

/** The title of a chat was changed */
export interface UpdateChatTitle {
  _: 'updateChatTitle'
  /** Chat identifier */
  chatId: number
  /** The new chat title */
  title: string
}

/** A chat photo was changed */
export interface UpdateChatPhoto {
  _: 'updateChatPhoto'
  /** Chat identifier */
  chatId: number
  /** The new chat photo; may be null */
  photo?: ChatPhotoInfo
}

/** Chat permissions was changed */
export interface UpdateChatPermissions {
  _: 'updateChatPermissions'
  /** Chat identifier */
  chatId: number
  /** The new chat permissions */
  permissions: ChatPermissions
}

/**
 * The last message of a chat was changed. If last_message is null, then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export interface UpdateChatLastMessage {
  _: 'updateChatLastMessage'
  /** Chat identifier */
  chatId: number
  /** The new last message in the chat; may be null */
  lastMessage?: Message
  /** The new chat positions in the chat lists */
  positions: ChatPosition[]
}

/**
 * The position of a chat in a chat list has changed. Instead of this update updateChatLastMessage
 * or updateChatDraftMessage might be sent
 */
export interface UpdateChatPosition {
  _: 'updateChatPosition'
  /** Chat identifier */
  chatId: number
  /**
   * New chat position. If new order is 0, then the chat needs to be removed from the
   * list
   */
  position: ChatPosition
}

/** A chat was marked as unread or was read */
export interface UpdateChatIsMarkedAsUnread {
  _: 'updateChatIsMarkedAsUnread'
  /** Chat identifier */
  chatId: number
  /** New value of is_marked_as_unread */
  isMarkedAsUnread: boolean
}

/** A chat was blocked or unblocked */
export interface UpdateChatIsBlocked {
  _: 'updateChatIsBlocked'
  /** Chat identifier */
  chatId: number
  /** New value of is_blocked */
  isBlocked: boolean
}

/** A chat's has_scheduled_messages field has changed */
export interface UpdateChatHasScheduledMessages {
  _: 'updateChatHasScheduledMessages'
  /** Chat identifier */
  chatId: number
  /** New value of has_scheduled_messages */
  hasScheduledMessages: boolean
}

/** A chat voice chat state has changed */
export interface UpdateChatVoiceChat {
  _: 'updateChatVoiceChat'
  /** Chat identifier */
  chatId: number
  /** New value of voice_chat */
  voiceChat: VoiceChat
}

/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export interface UpdateChatDefaultDisableNotification {
  _: 'updateChatDefaultDisableNotification'
  /** Chat identifier */
  chatId: number
  /** The new default_disable_notification value */
  defaultDisableNotification: boolean
}

/** Incoming messages were read or number of unread messages has been changed */
export interface UpdateChatReadInbox {
  _: 'updateChatReadInbox'
  /** Chat identifier */
  chatId: number
  /** Identifier of the last read incoming message */
  lastReadInboxMessageId: number
  /** The number of unread messages left in the chat */
  unreadCount: number
}

/** Outgoing messages were read */
export interface UpdateChatReadOutbox {
  _: 'updateChatReadOutbox'
  /** Chat identifier */
  chatId: number
  /** Identifier of last read outgoing message */
  lastReadOutboxMessageId: number
}

/** The chat unread_mention_count has changed */
export interface UpdateChatUnreadMentionCount {
  _: 'updateChatUnreadMentionCount'
  /** Chat identifier */
  chatId: number
  /** The number of unread mention messages left in the chat */
  unreadMentionCount: number
}

/** Notification settings for a chat were changed */
export interface UpdateChatNotificationSettings {
  _: 'updateChatNotificationSettings'
  /** Chat identifier */
  chatId: number
  /** The new notification settings */
  notificationSettings: ChatNotificationSettings
}

/** Notification settings for some type of chats were updated */
export interface UpdateScopeNotificationSettings {
  _: 'updateScopeNotificationSettings'
  /** Types of chats for which notification settings were updated */
  scope: NotificationSettingsScopeUnion
  /** The new notification settings */
  notificationSettings: ScopeNotificationSettings
}

/** The message Time To Live setting for a chat was changed */
export interface UpdateChatMessageTtlSetting {
  _: 'updateChatMessageTtlSetting'
  /** Chat identifier */
  chatId: number
  /** New value of message_ttl_setting */
  messageTtlSetting: number
}

/** The chat action bar was changed */
export interface UpdateChatActionBar {
  _: 'updateChatActionBar'
  /** Chat identifier */
  chatId: number
  /** The new value of the action bar; may be null */
  actionBar?: ChatActionBarUnion
}

/** The chat theme was changed */
export interface UpdateChatTheme {
  _: 'updateChatTheme'
  /** Chat identifier */
  chatId: number
  /** The new name of the chat theme; may be empty if theme was reset to default */
  themeName: string
}

/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export interface UpdateChatReplyMarkup {
  _: 'updateChatReplyMarkup'
  /** Chat identifier */
  chatId: number
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  replyMarkupMessageId: number
}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update mustn't be applied
 */
export interface UpdateChatDraftMessage {
  _: 'updateChatDraftMessage'
  /** Chat identifier */
  chatId: number
  /** The new draft message; may be null */
  draftMessage?: DraftMessage
  /** The new chat positions in the chat lists */
  positions: ChatPosition[]
}

/** The list of chat filters or a chat filter has changed */
export interface UpdateChatFilters {
  _: 'updateChatFilters'
  /** The new list of chat filters */
  chatFilters: ChatFilterInfo[]
}

/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export interface UpdateChatOnlineMemberCount {
  _: 'updateChatOnlineMemberCount'
  /** Identifier of the chat */
  chatId: number
  /** New number of online members in the chat, or 0 if unknown */
  onlineMemberCount: number
}

/** A notification was changed */
export interface UpdateNotification {
  _: 'updateNotification'
  /** Unique notification group identifier */
  notificationGroupId: number
  /** Changed notification */
  notification: Notification
}

/** A list of active notifications in a notification group has changed */
export interface UpdateNotificationGroup {
  _: 'updateNotificationGroup'
  /** Unique notification group identifier */
  notificationGroupId: number
  /** New type of the notification group */
  type: NotificationGroupTypeUnion
  /** Identifier of a chat to which all notifications in the group belong */
  chatId: number
  /** Chat identifier, which notification settings must be applied to the added notifications */
  notificationSettingsChatId: number
  /** True, if the notifications must be shown without sound */
  isSilent: boolean
  /**
   * Total number of unread notifications in the group, can be bigger than number of active
   * notifications
   */
  totalCount: number
  /** List of added group notifications, sorted by notification ID */
  addedNotifications: Notification[]
  /** Identifiers of removed group notifications, sorted by notification ID */
  removedNotificationIds: number[]
}

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if the message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export interface UpdateActiveNotifications {
  _: 'updateActiveNotifications'
  /** Lists of active notification groups */
  groups: NotificationGroup[]
}

/**
 * Describes whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export interface UpdateHavePendingNotifications {
  _: 'updateHavePendingNotifications'
  /** True, if there are some delayed notification updates, which will be sent soon */
  haveDelayedNotifications: boolean
  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  haveUnreceivedNotifications: boolean
}

/** Some messages were deleted */
export interface UpdateDeleteMessages {
  _: 'updateDeleteMessages'
  /** Chat identifier */
  chatId: number
  /** Identifiers of the deleted messages */
  messageIds: number[]
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * inaccessible)
   */
  isPermanent: boolean
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  fromCache: boolean
}

/** User activity in the chat has changed */
export interface UpdateUserChatAction {
  _: 'updateUserChatAction'
  /** Chat identifier */
  chatId: number
  /** If not 0, a message thread identifier in which the action was performed */
  messageThreadId: number
  /** Identifier of a user performing an action */
  userId: number
  /** The action description */
  action: ChatActionUnion
}

/** The user went online or offline */
export interface UpdateUserStatus {
  _: 'updateUserStatus'
  /** User identifier */
  userId: number
  /** New status of the user */
  status: UserStatusUnion
}

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the application
 */
export interface UpdateUser {
  _: 'updateUser'
  /** New data about the user */
  user: User
}

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the application
 */
export interface UpdateBasicGroup {
  _: 'updateBasicGroup'
  /** New data about the group */
  basicGroup: BasicGroup
}

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the application
 */
export interface UpdateSupergroup {
  _: 'updateSupergroup'
  /** New data about the supergroup */
  supergroup: Supergroup
}

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the application
 */
export interface UpdateSecretChat {
  _: 'updateSecretChat'
  /** New data about the secret chat */
  secretChat: SecretChat
}

/** Some data from userFullInfo has been changed */
export interface UpdateUserFullInfo {
  _: 'updateUserFullInfo'
  /** User identifier */
  userId: number
  /** New full information about the user */
  userFullInfo: UserFullInfo
}

/** Some data from basicGroupFullInfo has been changed */
export interface UpdateBasicGroupFullInfo {
  _: 'updateBasicGroupFullInfo'
  /** Identifier of a basic group */
  basicGroupId: number
  /** New full information about the group */
  basicGroupFullInfo: BasicGroupFullInfo
}

/** Some data from supergroupFullInfo has been changed */
export interface UpdateSupergroupFullInfo {
  _: 'updateSupergroupFullInfo'
  /** Identifier of the supergroup or channel */
  supergroupId: number
  /** New full information about the supergroup */
  supergroupFullInfo: SupergroupFullInfo
}

/**
 * Service notification from the server. Upon receiving this the application must show
 * a popup with the content of the notification
 */
export interface UpdateServiceNotification {
  _: 'updateServiceNotification'
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" must be shown under notification; if user presses the second, all local
   * data must be destroyed using Destroy method
   */
  type: string
  /** Notification content */
  content: MessageContentUnion
}

/** Information about a file was updated */
export interface UpdateFile {
  _: 'updateFile'
  /** New data about the file */
  file: File
}

/** The file generation process needs to be started by the application */
export interface UpdateFileGenerationStart {
  _: 'updateFileGenerationStart'
  /** Unique identifier for the generation process */
  generationId: string
  /** The path to a file from which a new file is generated; may be empty */
  originalPath: string
  /** The path to a file that must be created and where the new file is generated */
  destinationPath: string
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which must be downloaded
   * by the application
   */
  conversion: string
}

/** File generation is no longer needed */
export interface UpdateFileGenerationStop {
  _: 'updateFileGenerationStop'
  /** Unique identifier for the generation process */
  generationId: string
}

/** New call was created or information about a call was updated */
export interface UpdateCall {
  _: 'updateCall'
  /** New data about a call */
  call: Call
}

/** Information about a group call was updated */
export interface UpdateGroupCall {
  _: 'updateGroupCall'
  /** New data about a group call */
  groupCall: GroupCall
}

/**
 * Information about a group call participant was changed. The updates are sent only
 * after the group call is received through getGroupCall and only if the call is joined
 * or being joined
 */
export interface UpdateGroupCallParticipant {
  _: 'updateGroupCallParticipant'
  /** Identifier of group call */
  groupCallId: number
  /** New data about a participant */
  participant: GroupCallParticipant
}

/** New call signaling data arrived */
export interface UpdateNewCallSignalingData {
  _: 'updateNewCallSignalingData'
  /** The call identifier */
  callId: number
  /** The data */
  data: string
}

/** Some privacy setting rules have been changed */
export interface UpdateUserPrivacySettingRules {
  _: 'updateUserPrivacySettingRules'
  /** The privacy setting */
  setting: UserPrivacySettingUnion
  /** New privacy rules */
  rules: UserPrivacySettingRules
}

/**
 * Number of unread messages in a chat list has changed. This update is sent only if
 * the message database is used
 */
export interface UpdateUnreadMessageCount {
  _: 'updateUnreadMessageCount'
  /** The chat list with changed number of unread messages */
  chatList: ChatListUnion
  /** Total number of unread messages */
  unreadCount: number
  /** Total number of unread messages in unmuted chats */
  unreadUnmutedCount: number
}

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if the message database is used
 */
export interface UpdateUnreadChatCount {
  _: 'updateUnreadChatCount'
  /** The chat list with changed number of unread messages */
  chatList: ChatListUnion
  /** Approximate total number of chats in the chat list */
  totalCount: number
  /** Total number of unread chats */
  unreadCount: number
  /** Total number of unread unmuted chats */
  unreadUnmutedCount: number
  /** Total number of chats marked as unread */
  markedAsUnreadCount: number
  /** Total number of unmuted chats marked as unread */
  markedAsUnreadUnmutedCount: number
}

/** An option changed its value */
export interface UpdateOption {
  _: 'updateOption'
  /** The option name */
  name: string
  /** The new option value */
  value: OptionValueUnion
}

/** A sticker set has changed */
export interface UpdateStickerSet {
  _: 'updateStickerSet'
  /** The sticker set */
  stickerSet: StickerSet
}

/** The list of installed sticker sets was updated */
export interface UpdateInstalledStickerSets {
  _: 'updateInstalledStickerSets'
  /** True, if the list of installed mask sticker sets was updated */
  isMasks: boolean
  /** The new list of installed ordinary sticker sets */
  stickerSetIds: string[]
}

/** The list of trending sticker sets was updated or some of them were viewed */
export interface UpdateTrendingStickerSets {
  _: 'updateTrendingStickerSets'
  /**
   * The prefix of the list of trending sticker sets with the newest trending sticker
   * sets
   */
  stickerSets: StickerSets
}

/** The list of recently used stickers was updated */
export interface UpdateRecentStickers {
  _: 'updateRecentStickers'
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  isAttached: boolean
  /** The new list of file identifiers of recently used stickers */
  stickerIds: number[]
}

/** The list of favorite stickers was updated */
export interface UpdateFavoriteStickers {
  _: 'updateFavoriteStickers'
  /** The new list of file identifiers of favorite stickers */
  stickerIds: number[]
}

/** The list of saved animations was updated */
export interface UpdateSavedAnimations {
  _: 'updateSavedAnimations'
  /** The new list of file identifiers of saved animations */
  animationIds: number[]
}

/** The selected background has changed */
export interface UpdateSelectedBackground {
  _: 'updateSelectedBackground'
  /** True, if background for dark theme has changed */
  forDarkTheme: boolean
  /** The new selected background; may be null */
  background?: Background
}

/** The list of available chat themes has changed */
export interface UpdateChatThemes {
  _: 'updateChatThemes'
  /** The new list of chat themes */
  chatThemes: ChatTheme[]
}

/** Some language pack strings have been updated */
export interface UpdateLanguagePackStrings {
  _: 'updateLanguagePackStrings'
  /** Localization target to which the language pack belongs */
  localizationTarget: string
  /** Identifier of the updated language pack */
  languagePackId: string
  /** List of changed language pack strings */
  strings: LanguagePackString[]
}

/**
 * The connection state has changed. This update must be used only to show a human-readable
 * description of the connection state
 */
export interface UpdateConnectionState {
  _: 'updateConnectionState'
  /** The new connection state */
  state: ConnectionStateUnion
}

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method must be called with the reason "Decline ToS update"
 */
export interface UpdateTermsOfService {
  _: 'updateTermsOfService'
  /** Identifier of the terms of service */
  termsOfServiceId: string
  /** The new terms of service */
  termsOfService: TermsOfService
}

/**
 * The list of users nearby has changed. The update is guaranteed to be sent only 60
 * seconds after a successful searchChatsNearby request
 */
export interface UpdateUsersNearby {
  _: 'updateUsersNearby'
  /** The new list of users nearby */
  usersNearby: ChatNearby[]
}

/** The list of supported dice emojis has changed */
export interface UpdateDiceEmojis {
  _: 'updateDiceEmojis'
  /** The new list of supported dice emojis */
  emojis: string[]
}

/**
 * Some animated emoji message was clicked and a big animated sticker must be played
 * if the message is visible on the screen. chatActionWatchingAnimations with the text
 * of the message needs to be sent if the sticker is played
 */
export interface UpdateAnimatedEmojiMessageClicked {
  _: 'updateAnimatedEmojiMessageClicked'
  /** Chat identifier */
  chatId: number
  /** Message identifier */
  messageId: number
  /** The animated sticker to be played */
  sticker: Sticker
}

/**
 * The parameters of animation search through GetOption("animation_search_bot_username")
 * bot has changed
 */
export interface UpdateAnimationSearchParameters {
  _: 'updateAnimationSearchParameters'
  /** Name of the animation search provider */
  provider: string
  /** The new list of emojis suggested for searching */
  emojis: string[]
}

/** The list of suggested to the user actions has changed */
export interface UpdateSuggestedActions {
  _: 'updateSuggestedActions'
  /** Added suggested actions */
  addedActions: SuggestedActionUnion[]
  /** Removed suggested actions */
  removedActions: SuggestedActionUnion[]
}

/** A new incoming inline query; for bots only */
export interface UpdateNewInlineQuery {
  _: 'updateNewInlineQuery'
  /** Unique query identifier */
  id: string
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** User location; may be null */
  userLocation?: Location
  /**
   * Contains information about the type of the chat, from which the query originated;
   * may be null if unknown
   */
  chatType?: ChatTypeUnion
  /** Text of the query */
  query: string
  /** Offset of the first entry to return */
  offset: string
}

/** The user has chosen a result of an inline query; for bots only */
export interface UpdateNewChosenInlineResult {
  _: 'updateNewChosenInlineResult'
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** User location; may be null */
  userLocation?: Location
  /** Text of the query */
  query: string
  /** Identifier of the chosen result */
  resultId: string
  /** Identifier of the sent inline message, if known */
  inlineMessageId: string
}

/** A new incoming callback query; for bots only */
export interface UpdateNewCallbackQuery {
  _: 'updateNewCallbackQuery'
  /** Unique query identifier */
  id: string
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** Identifier of the chat where the query was sent */
  chatId: number
  /** Identifier of the message, from which the query originated */
  messageId: number
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  chatInstance: string
  /** Query payload */
  payload: CallbackQueryPayloadUnion
}

/** A new incoming callback query from a message sent via a bot; for bots only */
export interface UpdateNewInlineCallbackQuery {
  _: 'updateNewInlineCallbackQuery'
  /** Unique query identifier */
  id: string
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** Identifier of the inline message, from which the query originated */
  inlineMessageId: string
  /** An identifier uniquely corresponding to the chat a message was sent to */
  chatInstance: string
  /** Query payload */
  payload: CallbackQueryPayloadUnion
}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export interface UpdateNewShippingQuery {
  _: 'updateNewShippingQuery'
  /** Unique query identifier */
  id: string
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** Invoice payload */
  invoicePayload: string
  /** User shipping address */
  shippingAddress: Address
}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export interface UpdateNewPreCheckoutQuery {
  _: 'updateNewPreCheckoutQuery'
  /** Unique query identifier */
  id: string
  /** Identifier of the user who sent the query */
  senderUserId: number
  /** Currency for the product price */
  currency: string
  /** Total price for the product, in the smallest units of the currency */
  totalAmount: number
  /** Invoice payload */
  invoicePayload: string
  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  shippingOptionId: string
  /** Information about the order; may be null */
  orderInfo?: OrderInfo
}

/** A new incoming event; for bots only */
export interface UpdateNewCustomEvent {
  _: 'updateNewCustomEvent'
  /** A JSON-serialized event */
  event: string
}

/** A new incoming query; for bots only */
export interface UpdateNewCustomQuery {
  _: 'updateNewCustomQuery'
  /** The query identifier */
  id: string
  /** JSON-serialized query data */
  data: string
  /** Query timeout */
  timeout: number
}

/** A poll was updated; for bots only */
export interface UpdatePoll {
  _: 'updatePoll'
  /** New data about the poll */
  poll: Poll
}

/** A user changed the answer to a poll; for bots only */
export interface UpdatePollAnswer {
  _: 'updatePollAnswer'
  /** Unique poll identifier */
  pollId: string
  /** The user, who changed the answer to the poll */
  userId: number
  /** 0-based identifiers of answer options, chosen by the user */
  optionIds: number[]
}

/** User rights changed in a chat; for bots only */
export interface UpdateChatMember {
  _: 'updateChatMember'
  /** Chat identifier */
  chatId: number
  /** Identifier of the user, changing the rights */
  actorUserId: number
  /** Point in time (Unix timestamp) when the user rights was changed */
  date: number
  /** If user has joined the chat using an invite link, the invite link; may be null */
  inviteLink?: ChatInviteLink
  /** Previous chat member */
  oldChatMember: ChatMember
  /** New chat member */
  newChatMember: ChatMember
}
