import {
  ChatActionBarUnion,
  ChatNotificationSettings,
  ChatPermissions,
  ChatPhotoInfo,
  ChatPosition,
  ChatTypeUnion,
  DraftMessage,
  Message
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
   * Describes actions which should be possible to do through a chat action bar; may be
   * null
   */
  public actionBar?: ChatActionBarUnion

  /** Identifier of the pinned message in the chat; 0 if none */
  public pinnedMessageId: number

  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  public replyMarkupMessageId: number

  /** A draft of a message in the chat; may be null */
  public draftMessage?: DraftMessage

  /**
   * Contains application-specific data associated with the chat. (For example, the chat
   * scroll position or local chat notification settings can be stored here.) Persistent
   * if the message database is used
   */
  public clientData: string
}
