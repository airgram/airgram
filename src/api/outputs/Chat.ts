import {
  ChatNotificationSettings,
  ChatPhoto,
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
  photo?: ChatPhoto
  /** Last message in the chat; may be null */
  lastMessage?: Message
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  order: number | string
  /** True, if the chat is pinned */
  isPinned: boolean
  /** True, if the chat is marked as unread */
  isMarkedAsUnread: boolean
  /** True, if the chat is sponsored by the user's MTProxy server */
  isSponsored: boolean
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
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  replyMarkupMessageId: number
  /** A draft of a message in the chat; may be null */
  draftMessage?: DraftMessage
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if a message
   * database is used
   */
  clientData: string
}
