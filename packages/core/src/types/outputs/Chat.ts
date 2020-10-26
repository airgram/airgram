import {
  ChatActionBarUnion,
  ChatNotificationSettings,
  ChatPermissions,
  ChatPhotoInfo,
  ChatPosition,
  ChatTypeUnion,
  DraftMessage,
  Message
} from './index'

export type ChatUnion = Chat

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export interface Chat {
  _: 'chat'
  /** Chat unique identifier */
  id: number
  /** Type of the chat */
  type: ChatTypeUnion
  /** Chat title */
  title: string
  /** Chat photo; may be null */
  photo?: ChatPhotoInfo
  /** Actions that non-administrator chat members are allowed to take in the chat */
  permissions: ChatPermissions
  /** Last message in the chat; may be null */
  lastMessage?: Message
  /** Positions of the chat in chat lists */
  positions: ChatPosition[]
  /** True, if the chat is marked as unread */
  isMarkedAsUnread: boolean
  /**
   * True, if the chat is blocked by the current user and private messages from the chat
   * can't be received
   */
  isBlocked: boolean
  /** True, if the chat has scheduled messages */
  hasScheduledMessages: boolean
  /**
   * True, if the chat messages can be deleted only for the current user while other users
   * will continue to see the messages
   */
  canBeDeletedOnlyForSelf: boolean
  /** True, if the chat messages can be deleted for all users */
  canBeDeletedForAllUsers: boolean
  /** True, if the chat can be reported to Telegram moderators through reportChat */
  canBeReported: boolean
  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  defaultDisableNotification: boolean
  /** Number of unread messages in the chat */
  unreadCount: number
  /** Identifier of the last read incoming message */
  lastReadInboxMessageId: number
  /** Identifier of the last read outgoing message */
  lastReadOutboxMessageId: number
  /** Number of unread messages with a mention/reply in the chat */
  unreadMentionCount: number
  /** Notification settings for this chat */
  notificationSettings: ChatNotificationSettings
  /**
   * Describes actions which should be possible to do through a chat action bar; may be
   * null
   */
  actionBar?: ChatActionBarUnion
  /** Identifier of the pinned message in the chat; 0 if none */
  pinnedMessageId: number
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  replyMarkupMessageId: number
  /** A draft of a message in the chat; may be null */
  draftMessage?: DraftMessage
  /**
   * Contains application-specific data associated with the chat. (For example, the chat
   * scroll position or local chat notification settings can be stored here.) Persistent
   * if the message database is used
   */
  clientData: string
}
