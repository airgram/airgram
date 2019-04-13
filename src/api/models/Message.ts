import {
  MessageContentUnion,
  MessageForwardInfoUnion,
  MessageSendingStateUnion,
  ReplyMarkupUnion
} from '../outputs'

/** Describes a message */
export class MessageBaseModel {
  public _: 'message'
  /** Message identifier, unique for the chat to which the message belongs */
  public id: number
  /**
   * Identifier of the user who sent the message; 0 if unknown. It is unknown for channel
   * posts
   */
  public senderUserId: number
  /** Chat identifier */
  public chatId: number
  /** Information about the sending state of the message; may be null */
  public sendingState?: MessageSendingStateUnion
  /** True, if the message is outgoing */
  public isOutgoing: boolean
  /** True, if the message can be edited */
  public canBeEdited: boolean
  /** True, if the message can be forwarded */
  public canBeForwarded: boolean
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  public canBeDeletedOnlyForSelf: boolean
  /** True, if the message can be deleted for all users */
  public canBeDeletedForAllUsers: boolean
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  public isChannelPost: boolean
  /** True, if the message contains an unread mention for the current user */
  public containsUnreadMention: boolean
  /** Point in time (Unix timestamp) when the message was sent */
  public date: number
  /** Point in time (Unix timestamp) when the message was last edited */
  public editDate: number
  /** Information about the initial message sender; may be null */
  public forwardInfo?: MessageForwardInfoUnion
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  public replyToMessageId: number
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  public ttl: number
  /** Time left before the message expires, in seconds */
  public ttlExpiresIn: number
  /** If non-zero, the user identifier of the bot through which this message was sent */
  public viaBotUserId: number
  /** For channel posts, optional author signature */
  public authorSignature: string
  /** Number of times this message was viewed */
  public views: number
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  public mediaAlbumId: number | string
  /** Content of the message */
  public content: MessageContentUnion
  /** Reply markup for the message; may be null */
  public replyMarkup?: ReplyMarkupUnion
}
