import {
  MessageContentUnion,
  MessageForwardInfoUnion,
  MessageSendingStateUnion,
  ReplyMarkupUnion
} from './index'

export type MessageUnion = Message

/** Describes a message */
export interface Message {
  _: 'message'
  /** Message identifier, unique for the chat to which the message belongs */
  id: number
  /**
   * Identifier of the user who sent the message; 0 if unknown. It is unknown for channel
   * posts
   */
  senderUserId: number
  /** Chat identifier */
  chatId: number
  /** Information about the sending state of the message; may be null */
  sendingState?: MessageSendingStateUnion
  /** True, if the message is outgoing */
  isOutgoing: boolean
  /** True, if the message can be edited */
  canBeEdited: boolean
  /** True, if the message can be forwarded */
  canBeForwarded: boolean
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  canBeDeletedOnlyForSelf: boolean
  /** True, if the message can be deleted for all users */
  canBeDeletedForAllUsers: boolean
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
  forwardInfo?: MessageForwardInfoUnion
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  replyToMessageId: number
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  ttl: number
  /** Time left before the message expires, in seconds */
  ttlExpiresIn: number
  /** If non-zero, the user identifier of the bot through which this message was sent */
  viaBotUserId: number
  /** For channel posts, optional author signature */
  authorSignature: string
  /** Number of times this message was viewed */
  views: number
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  mediaAlbumId: number | string
  /** Content of the message */
  content: MessageContentUnion
  /** Reply markup for the message; may be null */
  replyMarkup?: ReplyMarkupUnion
}
