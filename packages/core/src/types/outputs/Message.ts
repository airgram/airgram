import {
  MessageContentUnion,
  MessageForwardInfo,
  MessageInteractionInfo,
  MessageSchedulingStateUnion,
  MessageSenderUnion,
  MessageSendingStateUnion,
  ReplyMarkupUnion,
  UnreadReaction
} from './index'

export type MessageUnion = Message

/** Describes a message */
export interface Message {
  _: 'message'
  /** Message identifier; unique for the chat to which the message belongs */
  id: number
  /** Identifier of the sender of the message */
  senderId: MessageSenderUnion
  /** Chat identifier */
  chatId: number
  /** The sending state of the message; may be null */
  sendingState?: MessageSendingStateUnion
  /** The scheduling state of the message; may be null */
  schedulingState?: MessageSchedulingStateUnion
  /** True, if the message is outgoing */
  isOutgoing: boolean
  /** True, if the message is pinned */
  isPinned: boolean
  /**
   * True, if the message can be edited. For live location and poll messages this fields
   * shows whether editMessageLiveLocation or stopPoll can be used with this message by
   * the application
   */
  canBeEdited: boolean
  /** True, if the message can be forwarded */
  canBeForwarded: boolean
  /** True, if content of the message can be saved locally or copied */
  canBeSaved: boolean
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  canBeDeletedOnlyForSelf: boolean
  /** True, if the message can be deleted for all users */
  canBeDeletedForAllUsers: boolean
  /** True, if the list of added reactions is available through getMessageAddedReactions */
  canGetAddedReactions: boolean
  /** True, if the message statistics are available through getMessageStatistics */
  canGetStatistics: boolean
  /** True, if information about the message thread is available through getMessageThread */
  canGetMessageThread: boolean
  /** True, if chat members already viewed the message can be received through getMessageViewers */
  canGetViewers: boolean
  /**
   * True, if media timestamp links can be generated for media timestamp entities in the
   * message text, caption or web page description through getMessageLink
   */
  canGetMediaTimestampLinks: boolean
  /**
   * True, if media timestamp entities refers to a media in this message as opposed to
   * a media in the replied message
   */
  hasTimestampedMedia: boolean
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  isChannelPost: boolean
  /** True, if the message contains an unread mention for the current user */
  containsUnreadMention: boolean
  /** Point in time (Unix timestamp) when the message was sent */
  date: number
  /** Point in time (Unix timestamp) when the message was last edited */
  editDate: number
  /** Information about the initial message sender; may be null */
  forwardInfo?: MessageForwardInfo
  /** Information about interactions with the message; may be null */
  interactionInfo?: MessageInteractionInfo
  /** Information about unread reactions added to the message */
  unreadReactions: UnreadReaction[]
  /**
   * If non-zero, the identifier of the chat to which the replied message belongs; Currently,
   * only messages in the Replies chat can have different reply_in_chat_id and chat_id
   */
  replyInChatId: number
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  replyToMessageId: number
  /**
   * If non-zero, the identifier of the message thread the message belongs to; unique
   * within the chat to which the message belongs
   */
  messageThreadId: number
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  ttl: number
  /**
   * Time left before the message expires, in seconds. If the TTL timer isn't started
   * yet, equals to the value of the ttl field
   */
  ttlExpiresIn: number
  /** If non-zero, the user identifier of the bot through which this message was sent */
  viaBotUserId: number
  /** For channel posts and anonymous group messages, optional author signature */
  authorSignature: string
  /**
   * Unique identifier of an album this message belongs to. Only audios, documents, photos
   * and videos can be grouped together in albums
   */
  mediaAlbumId: string
  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * message must be restricted
   */
  restrictionReason: string
  /** Content of the message */
  content: MessageContentUnion
  /** Reply markup for the message; may be null */
  replyMarkup?: ReplyMarkupUnion
}
