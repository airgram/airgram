import {
  ChatActionBarUnion,
  ChatJoinRequestsInfo,
  ChatNotificationSettings,
  ChatPermissions,
  ChatPhotoInfo,
  ChatPosition,
  ChatTypeUnion,
  DraftMessage,
  Message,
  MessageSenderUnion,
  VideoChat
} from '@airgram/core'

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export class ChatBaseModel {
  public _: 'chat'

  /** Chat unique identifier */
  public id: number

  /** Type of the chat */
  public type: ChatTypeUnion

  /** Chat title */
  public title: string

  /** Chat photo; may be null */
  public photo?: ChatPhotoInfo

  /** Actions that non-administrator chat members are allowed to take in the chat */
  public permissions: ChatPermissions

  /** Last message in the chat; may be null */
  public lastMessage?: Message

  /** Positions of the chat in chat lists */
  public positions: ChatPosition[]

  /**
   * Identifier of a user or chat that is selected to send messages in the chat; may be
   * null if the user can't change message sender
   */
  public messageSenderId?: MessageSenderUnion

  /** True, if chat content can't be saved locally, forwarded, or copied */
  public hasProtectedContent: boolean

  /** True, if the chat is marked as unread */
  public isMarkedAsUnread: boolean

  /**
   * True, if the chat is blocked by the current user and private messages from the chat
   * can't be received
   */
  public isBlocked: boolean

  /** True, if the chat has scheduled messages */
  public hasScheduledMessages: boolean

  /**
   * True, if the chat messages can be deleted only for the current user while other users
   * will continue to see the messages
   */
  public canBeDeletedOnlyForSelf: boolean

  /** True, if the chat messages can be deleted for all users */
  public canBeDeletedForAllUsers: boolean

  /** True, if the chat can be reported to Telegram moderators through reportChat or reportChatPhoto */
  public canBeReported: boolean

  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  public defaultDisableNotification: boolean

  /** Number of unread messages in the chat */
  public unreadCount: number

  /** Identifier of the last read incoming message */
  public lastReadInboxMessageId: number

  /** Identifier of the last read outgoing message */
  public lastReadOutboxMessageId: number

  /** Number of unread messages with a mention/reply in the chat */
  public unreadMentionCount: number

  /** Number of messages with unread reactions in the chat */
  public unreadReactionCount: number

  /** Notification settings for the chat */
  public notificationSettings: ChatNotificationSettings

  /** List of reactions, available in the chat */
  public availableReactions: string[]

  /**
   * Current message Time To Live setting (self-destruct timer) for the chat; 0 if not
   * defined. TTL is counted from the time message or its content is viewed in secret
   * chats and from the send date in other chats
   */
  public messageTtl: number

  /** If non-empty, name of a theme, set for the chat */
  public themeName: string

  /**
   * Information about actions which must be possible to do through the chat action bar;
   * may be null
   */
  public actionBar?: ChatActionBarUnion

  /** Information about video chat of the chat */
  public videoChat: VideoChat

  /** Information about pending join requests; may be null */
  public pendingJoinRequests?: ChatJoinRequestsInfo

  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  public replyMarkupMessageId: number

  /** A draft of a message in the chat; may be null */
  public draftMessage?: DraftMessage

  /**
   * Application-specific data associated with the chat. (For example, the chat scroll
   * position or local chat notification settings can be stored here.) Persistent if the
   * message database is used
   */
  public clientData: string
}
