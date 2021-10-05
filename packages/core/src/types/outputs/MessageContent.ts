import {
  Animation,
  Audio,
  CallDiscardReasonUnion,
  ChatPhoto,
  Contact,
  DiceStickersUnion,
  Document,
  EncryptedCredentials,
  EncryptedPassportElement,
  FormattedText,
  Game,
  Location,
  MessageSenderUnion,
  OrderInfo,
  PassportElementTypeUnion,
  Photo,
  Poll,
  Sticker,
  Venue,
  Video,
  VideoNote,
  VoiceNote,
  WebPage
} from './index'

/** Contains the content of a message */
export type MessageContentUnion = MessageText
  | MessageAnimation
  | MessageAudio
  | MessageDocument
  | MessagePhoto
  | MessageExpiredPhoto
  | MessageSticker
  | MessageVideo
  | MessageExpiredVideo
  | MessageVideoNote
  | MessageVoiceNote
  | MessageLocation
  | MessageVenue
  | MessageContact
  | MessageDice
  | MessageGame
  | MessagePoll
  | MessageInvoice
  | MessageCall
  | MessageVoiceChatScheduled
  | MessageVoiceChatStarted
  | MessageVoiceChatEnded
  | MessageInviteVoiceChatParticipants
  | MessageBasicGroupChatCreate
  | MessageSupergroupChatCreate
  | MessageChatChangeTitle
  | MessageChatChangePhoto
  | MessageChatDeletePhoto
  | MessageChatAddMembers
  | MessageChatJoinByLink
  | MessageChatDeleteMember
  | MessageChatUpgradeTo
  | MessageChatUpgradeFrom
  | MessagePinMessage
  | MessageScreenshotTaken
  | MessageChatSetTheme
  | MessageChatSetTtl
  | MessageCustomServiceAction
  | MessageGameScore
  | MessagePaymentSuccessful
  | MessagePaymentSuccessfulBot
  | MessageContactRegistered
  | MessageWebsiteConnected
  | MessagePassportDataSent
  | MessagePassportDataReceived
  | MessageProximityAlertTriggered
  | MessageUnsupported

/** A text message */
export interface MessageText {
  _: 'messageText'
  /** Text of the message */
  text: FormattedText
  /** A preview of the web page that's mentioned in the text; may be null */
  webPage?: WebPage
}

/** An animation message (GIF-style). */
export interface MessageAnimation {
  _: 'messageAnimation'
  /** The animation description */
  animation: Animation
  /** Animation caption */
  caption: FormattedText
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  isSecret: boolean
}

/** An audio message */
export interface MessageAudio {
  _: 'messageAudio'
  /** The audio description */
  audio: Audio
  /** Audio caption */
  caption: FormattedText
}

/** A document message (general file) */
export interface MessageDocument {
  _: 'messageDocument'
  /** The document description */
  document: Document
  /** Document caption */
  caption: FormattedText
}

/** A photo message */
export interface MessagePhoto {
  _: 'messagePhoto'
  /** The photo description */
  photo: Photo
  /** Photo caption */
  caption: FormattedText
  /** True, if the photo must be blurred and must be shown only while tapped */
  isSecret: boolean
}

/** An expired photo message (self-destructed after TTL has elapsed) */
export interface MessageExpiredPhoto {
  _: 'messageExpiredPhoto'
}

/** A sticker message */
export interface MessageSticker {
  _: 'messageSticker'
  /** The sticker description */
  sticker: Sticker
}

/** A video message */
export interface MessageVideo {
  _: 'messageVideo'
  /** The video description */
  video: Video
  /** Video caption */
  caption: FormattedText
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  isSecret: boolean
}

/** An expired video message (self-destructed after TTL has elapsed) */
export interface MessageExpiredVideo {
  _: 'messageExpiredVideo'
}

/** A video note message */
export interface MessageVideoNote {
  _: 'messageVideoNote'
  /** The video note description */
  videoNote: VideoNote
  /** True, if at least one of the recipients has viewed the video note */
  isViewed: boolean
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  isSecret: boolean
}

/** A voice note message */
export interface MessageVoiceNote {
  _: 'messageVoiceNote'
  /** The voice note description */
  voiceNote: VoiceNote
  /** Voice note caption */
  caption: FormattedText
  /** True, if at least one of the recipients has listened to the voice note */
  isListened: boolean
}

/** A message with a location */
export interface MessageLocation {
  _: 'messageLocation'
  /** The location description */
  location: Location
  /**
   * Time relative to the message send date, for which the location can be updated, in
   * seconds
   */
  livePeriod: number
  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  expiresIn: number
  /**
   * For live locations, a direction in which the location moves, in degrees; 1-360. If
   * 0 the direction is unknown
   */
  heading: number
  /**
   * For live locations, a maximum distance to another chat member for proximity alerts,
   * in meters (0-100000). 0 if the notification is disabled. Available only for the message
   * sender
   */
  proximityAlertRadius: number
}

/** A message with information about a venue */
export interface MessageVenue {
  _: 'messageVenue'
  /** The venue description */
  venue: Venue
}

/** A message with a user contact */
export interface MessageContact {
  _: 'messageContact'
  /** The contact description */
  contact: Contact
}

/** A dice message. The dice value is randomly generated by the server */
export interface MessageDice {
  _: 'messageDice'
  /**
   * The animated stickers with the initial dice animation; may be null if unknown. updateMessageContent
   * will be sent when the sticker became known
   */
  initialState?: DiceStickersUnion
  /**
   * The animated stickers with the final dice animation; may be null if unknown. updateMessageContent
   * will be sent when the sticker became known
   */
  finalState?: DiceStickersUnion
  /** Emoji on which the dice throw animation is based */
  emoji: string
  /** The dice value. If the value is 0, the dice don't have final state yet */
  value: number
  /**
   * Number of frame after which a success animation like a shower of confetti needs to
   * be shown on updateMessageSendSucceeded
   */
  successAnimationFrameNumber: number
}

/** A message with a game */
export interface MessageGame {
  _: 'messageGame'
  /** The game description */
  game: Game
}

/** A message with a poll */
export interface MessagePoll {
  _: 'messagePoll'
  /** The poll description */
  poll: Poll
}

/** A message with an invoice from a bot */
export interface MessageInvoice {
  _: 'messageInvoice'
  /** Product title */
  title: string
  /** Product description */
  description: string
  /** Product photo; may be null */
  photo?: Photo
  /** Currency for the product price */
  currency: string
  /** Product total price in the smallest units of the currency */
  totalAmount: number
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  startParameter: string
  /** True, if the invoice is a test invoice */
  isTest: boolean
  /** True, if the shipping address must be specified */
  needShippingAddress: boolean
  /** The identifier of the message with the receipt, after the product has been purchased */
  receiptMessageId: number
}

/** A message with information about an ended call */
export interface MessageCall {
  _: 'messageCall'
  /** True, if the call was a video call */
  isVideo: boolean
  /** Reason why the call was discarded */
  discardReason: CallDiscardReasonUnion
  /** Call duration, in seconds */
  duration: number
}

/** A new voice chat was scheduled */
export interface MessageVoiceChatScheduled {
  _: 'messageVoiceChatScheduled'
  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  groupCallId: number
  /**
   * Point in time (Unix timestamp) when the group call is supposed to be started by an
   * administrator
   */
  startDate: number
}

/** A newly created voice chat */
export interface MessageVoiceChatStarted {
  _: 'messageVoiceChatStarted'
  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  groupCallId: number
}

/** A message with information about an ended voice chat */
export interface MessageVoiceChatEnded {
  _: 'messageVoiceChatEnded'
  /** Call duration, in seconds */
  duration: number
}

/** A message with information about an invite to a voice chat */
export interface MessageInviteVoiceChatParticipants {
  _: 'messageInviteVoiceChatParticipants'
  /** Identifier of the voice chat. The voice chat can be received through the method getGroupCall */
  groupCallId: number
  /** Invited user identifiers */
  userIds: number[]
}

/** A newly created basic group */
export interface MessageBasicGroupChatCreate {
  _: 'messageBasicGroupChatCreate'
  /** Title of the basic group */
  title: string
  /** User identifiers of members in the basic group */
  memberUserIds: number[]
}

/** A newly created supergroup or channel */
export interface MessageSupergroupChatCreate {
  _: 'messageSupergroupChatCreate'
  /** Title of the supergroup or channel */
  title: string
}

/** An updated chat title */
export interface MessageChatChangeTitle {
  _: 'messageChatChangeTitle'
  /** New chat title */
  title: string
}

/** An updated chat photo */
export interface MessageChatChangePhoto {
  _: 'messageChatChangePhoto'
  /** New chat photo */
  photo: ChatPhoto
}

/** A deleted chat photo */
export interface MessageChatDeletePhoto {
  _: 'messageChatDeletePhoto'
}

/** New chat members were added */
export interface MessageChatAddMembers {
  _: 'messageChatAddMembers'
  /** User identifiers of the new members */
  memberUserIds: number[]
}

/** A new member joined the chat by invite link */
export interface MessageChatJoinByLink {
  _: 'messageChatJoinByLink'
}

/** A chat member was deleted */
export interface MessageChatDeleteMember {
  _: 'messageChatDeleteMember'
  /** User identifier of the deleted chat member */
  userId: number
}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export interface MessageChatUpgradeTo {
  _: 'messageChatUpgradeTo'
  /** Identifier of the supergroup to which the basic group was upgraded */
  supergroupId: number
}

/** A supergroup has been created from a basic group */
export interface MessageChatUpgradeFrom {
  _: 'messageChatUpgradeFrom'
  /** Title of the newly created supergroup */
  title: string
  /** The identifier of the original basic group */
  basicGroupId: number
}

/** A message has been pinned */
export interface MessagePinMessage {
  _: 'messagePinMessage'
  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  messageId: number
}

/** A screenshot of a message in the chat has been taken */
export interface MessageScreenshotTaken {
  _: 'messageScreenshotTaken'
}

/** A theme in the chat has been changed */
export interface MessageChatSetTheme {
  _: 'messageChatSetTheme'
  /**
   * If non-empty, name of a new theme, set for the chat. Otherwise chat theme was reset
   * to the default one
   */
  themeName: string
}

/** The TTL (Time To Live) setting for messages in the chat has been changed */
export interface MessageChatSetTtl {
  _: 'messageChatSetTtl'
  /** New message TTL setting */
  ttl: number
}

/** A non-standard action has happened in the chat */
export interface MessageCustomServiceAction {
  _: 'messageCustomServiceAction'
  /** Message text to be shown in the chat */
  text: string
}

/** A new high score was achieved in a game */
export interface MessageGameScore {
  _: 'messageGameScore'
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  gameMessageId: number
  /**
   * Identifier of the game; may be different from the games presented in the message
   * with the game
   */
  gameId: string
  /** New score */
  score: number
}

/** A payment has been completed */
export interface MessagePaymentSuccessful {
  _: 'messagePaymentSuccessful'
  /** Identifier of the chat, containing the corresponding invoice message; 0 if unknown */
  invoiceChatId: number
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  invoiceMessageId: number
  /** Currency for the price of the product */
  currency: string
  /** Total price for the product, in the smallest units of the currency */
  totalAmount: number
}

/** A payment has been completed; for bots only */
export interface MessagePaymentSuccessfulBot {
  _: 'messagePaymentSuccessfulBot'
  /** Currency for price of the product */
  currency: string
  /** Total price for the product, in the smallest units of the currency */
  totalAmount: number
  /** Invoice payload */
  invoicePayload: string
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  shippingOptionId: string
  /** Information about the order; may be null */
  orderInfo?: OrderInfo
  /** Telegram payment identifier */
  telegramPaymentChargeId: string
  /** Provider payment identifier */
  providerPaymentChargeId: string
}

/** A contact has registered with Telegram */
export interface MessageContactRegistered {
  _: 'messageContactRegistered'
}

/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export interface MessageWebsiteConnected {
  _: 'messageWebsiteConnected'
  /** Domain name of the connected website */
  domainName: string
}

/** Telegram Passport data has been sent */
export interface MessagePassportDataSent {
  _: 'messagePassportDataSent'
  /** List of Telegram Passport element types sent */
  types: PassportElementTypeUnion[]
}

/** Telegram Passport data has been received; for bots only */
export interface MessagePassportDataReceived {
  _: 'messagePassportDataReceived'
  /** List of received Telegram Passport elements */
  elements: EncryptedPassportElement[]
  /** Encrypted data credentials */
  credentials: EncryptedCredentials
}

/** A user in the chat came within proximity alert range */
export interface MessageProximityAlertTriggered {
  _: 'messageProximityAlertTriggered'
  /** The user or chat, which triggered the proximity alert */
  traveler: MessageSenderUnion
  /** The user or chat, which subscribed for the proximity alert */
  watcher: MessageSenderUnion
  /** The distance between the users */
  distance: number
}

/** Message content that is not supported in the current TDLib version */
export interface MessageUnsupported {
  _: 'messageUnsupported'
}
