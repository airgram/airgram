import {
  ChatNotificationSettings,
  ChatPhoto,
  ChatTypeUnion,
  DraftMessage,
  Message
} from '../outputs'

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
  public photo?: ChatPhoto
  /** Last message in the chat; may be null */
  public lastMessage?: Message
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  public order: number | string
  /** True, if the chat is pinned */
  public isPinned: boolean
  /** True, if the chat is marked as unread */
  public isMarkedAsUnread: boolean
  /** True, if the chat is sponsored by the user's MTProxy server */
  public isSponsored: boolean
  /** True, if the chat can be reported to Telegram moderators through reportChat */
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
  /** Notification settings for this chat */
  public notificationSettings: ChatNotificationSettings
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  public replyMarkupMessageId: number
  /** A draft of a message in the chat; may be null */
  public draftMessage?: DraftMessage
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if a message
   * database is used
   */
  public clientData: string
}
