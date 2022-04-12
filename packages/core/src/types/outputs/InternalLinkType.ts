import { FormattedText, ProxyTypeUnion } from './index'

/**
 * Describes an internal https://t.me or tg: link, which must be processed by the app
 * in a special way
 */
export type InternalLinkTypeUnion = InternalLinkTypeActiveSessions
  | InternalLinkTypeAuthenticationCode
  | InternalLinkTypeBackground
  | InternalLinkTypeBotStart
  | InternalLinkTypeBotStartInGroup
  | InternalLinkTypeChangePhoneNumber
  | InternalLinkTypeChatInvite
  | InternalLinkTypeFilterSettings
  | InternalLinkTypeGame
  | InternalLinkTypeLanguagePack
  | InternalLinkTypeLanguageSettings
  | InternalLinkTypeMessage
  | InternalLinkTypeMessageDraft
  | InternalLinkTypePassportDataRequest
  | InternalLinkTypePhoneNumberConfirmation
  | InternalLinkTypePrivacyAndSecuritySettings
  | InternalLinkTypeProxy
  | InternalLinkTypePublicChat
  | InternalLinkTypeQrCodeAuthentication
  | InternalLinkTypeSettings
  | InternalLinkTypeStickerSet
  | InternalLinkTypeTheme
  | InternalLinkTypeThemeSettings
  | InternalLinkTypeUnknownDeepLink
  | InternalLinkTypeUnsupportedProxy
  | InternalLinkTypeUserPhoneNumber
  | InternalLinkTypeVideoChat

/**
 * The link is a link to the active sessions section of the app. Use getActiveSessions
 * to handle the link
 */
export interface InternalLinkTypeActiveSessions {
  _: 'internalLinkTypeActiveSessions'
}

/**
 * The link contains an authentication code. Call checkAuthenticationCode with the code
 * if the current authorization state is authorizationStateWaitCode
 */
export interface InternalLinkTypeAuthenticationCode {
  _: 'internalLinkTypeAuthenticationCode'
  /** The authentication code */
  code: string
}

/**
 * The link is a link to a background. Call searchBackground with the given background
 * name to process the link
 */
export interface InternalLinkTypeBackground {
  _: 'internalLinkTypeBackground'
  /** Name of the background */
  backgroundName: string
}

/**
 * The link is a link to a chat with a Telegram bot. Call searchPublicChat with the
 * given bot username, check that the user is a bot, show START button in the chat with
 * the bot, and then call sendBotStartMessage with the given start parameter after the
 * button is pressed
 */
export interface InternalLinkTypeBotStart {
  _: 'internalLinkTypeBotStart'
  /** Username of the bot */
  botUsername: string
  /** The parameter to be passed to sendBotStartMessage */
  startParameter: string
}

/**
 * The link is a link to a Telegram bot, which is supposed to be added to a group chat.
 * Call searchPublicChat with the given bot username, check that the user is a bot and
 * can be added to groups, ask the current user to select a group to add the bot to,
 * and then call sendBotStartMessage with the given start parameter and the chosen group
 * chat. Bots can be added to a public group only by administrators of the group
 */
export interface InternalLinkTypeBotStartInGroup {
  _: 'internalLinkTypeBotStartInGroup'
  /** Username of the bot */
  botUsername: string
  /** The parameter to be passed to sendBotStartMessage */
  startParameter: string
}

/** The link is a link to the change phone number section of the app */
export interface InternalLinkTypeChangePhoneNumber {
  _: 'internalLinkTypeChangePhoneNumber'
}

/**
 * The link is a chat invite link. Call checkChatInviteLink with the given invite link
 * to process the link
 */
export interface InternalLinkTypeChatInvite {
  _: 'internalLinkTypeChatInvite'
  /** Internal representation of the invite link */
  inviteLink: string
}

/** The link is a link to the filter settings section of the app */
export interface InternalLinkTypeFilterSettings {
  _: 'internalLinkTypeFilterSettings'
}

/**
 * The link is a link to a game. Call searchPublicChat with the given bot username,
 * check that the user is a bot, ask the current user to select a chat to send the game,
 * and then call sendMessage with inputMessageGame
 */
export interface InternalLinkTypeGame {
  _: 'internalLinkTypeGame'
  /** Username of the bot that owns the game */
  botUsername: string
  /** Short name of the game */
  gameShortName: string
}

/**
 * The link is a link to a language pack. Call getLanguagePackInfo with the given language
 * pack identifier to process the link
 */
export interface InternalLinkTypeLanguagePack {
  _: 'internalLinkTypeLanguagePack'
  /** Language pack identifier */
  languagePackId: string
}

/** The link is a link to the language settings section of the app */
export interface InternalLinkTypeLanguageSettings {
  _: 'internalLinkTypeLanguageSettings'
}

/**
 * The link is a link to a Telegram message. Call getMessageLinkInfo with the given
 * URL to process the link
 */
export interface InternalLinkTypeMessage {
  _: 'internalLinkTypeMessage'
  /** URL to be passed to getMessageLinkInfo */
  url: string
}

/**
 * The link contains a message draft text. A share screen needs to be shown to the user,
 * then the chosen chat must be opened and the text is added to the input field
 */
export interface InternalLinkTypeMessageDraft {
  _: 'internalLinkTypeMessageDraft'
  /** Message draft text */
  text: FormattedText
  /**
   * True, if the first line of the text contains a link. If true, the input field needs
   * to be focused and the text after the link must be selected
   */
  containsLink: boolean
}

/**
 * The link contains a request of Telegram passport data. Call getPassportAuthorizationForm
 * with the given parameters to process the link if the link was received from outside
 * of the app, otherwise ignore it
 */
export interface InternalLinkTypePassportDataRequest {
  _: 'internalLinkTypePassportDataRequest'
  /** User identifier of the service's bot */
  botUserId: number
  /** Telegram Passport element types requested by the service */
  scope: string
  /** Service's public key */
  publicKey: string
  /** Unique request identifier provided by the service */
  nonce: string
  /**
   * An HTTP URL to open once the request is finished or canceled with the parameter tg_passport=success
   * or tg_passport=cancel respectively. If empty, then the link tgbot{bot_user_id}://passport/success
   * or tgbot{bot_user_id}://passport/cancel needs to be opened instead
   */
  callbackUrl: string
}

/**
 * The link can be used to confirm ownership of a phone number to prevent account deletion.
 * Call sendPhoneNumberConfirmationCode with the given hash and phone number to process
 * the link
 */
export interface InternalLinkTypePhoneNumberConfirmation {
  _: 'internalLinkTypePhoneNumberConfirmation'
  /** Hash value from the link */
  hash: string
  /** Phone number value from the link */
  phoneNumber: string
}

/** The link is a link to the privacy and security settings section of the app */
export interface InternalLinkTypePrivacyAndSecuritySettings {
  _: 'internalLinkTypePrivacyAndSecuritySettings'
}

/**
 * The link is a link to a proxy. Call addProxy with the given parameters to process
 * the link and add the proxy
 */
export interface InternalLinkTypeProxy {
  _: 'internalLinkTypeProxy'
  /** Proxy server IP address */
  server: string
  /** Proxy server port */
  port: number
  /** Type of the proxy */
  type: ProxyTypeUnion
}

/**
 * The link is a link to a chat by its username. Call searchPublicChat with the given
 * chat username to process the link
 */
export interface InternalLinkTypePublicChat {
  _: 'internalLinkTypePublicChat'
  /** Username of the chat */
  chatUsername: string
}

/**
 * The link can be used to login the current user on another device, but it must be
 * scanned from QR-code using in-app camera. An alert similar to "This code can be used
 * to allow someone to log in to your Telegram account. To confirm Telegram login, please
 * go to Settings > Devices > Scan QR and scan the code" needs to be shown
 */
export interface InternalLinkTypeQrCodeAuthentication {
  _: 'internalLinkTypeQrCodeAuthentication'
}

/** The link is a link to app settings */
export interface InternalLinkTypeSettings {
  _: 'internalLinkTypeSettings'
}

/**
 * The link is a link to a sticker set. Call searchStickerSet with the given sticker
 * set name to process the link and show the sticker set
 */
export interface InternalLinkTypeStickerSet {
  _: 'internalLinkTypeStickerSet'
  /** Name of the sticker set */
  stickerSetName: string
}

/** The link is a link to a theme. TDLib has no theme support yet */
export interface InternalLinkTypeTheme {
  _: 'internalLinkTypeTheme'
  /** Name of the theme */
  themeName: string
}

/** The link is a link to the theme settings section of the app */
export interface InternalLinkTypeThemeSettings {
  _: 'internalLinkTypeThemeSettings'
}

/** The link is an unknown tg: link. Call getDeepLinkInfo to process the link */
export interface InternalLinkTypeUnknownDeepLink {
  _: 'internalLinkTypeUnknownDeepLink'
  /** Link to be passed to getDeepLinkInfo */
  link: string
}

/** The link is a link to an unsupported proxy. An alert can be shown to the user */
export interface InternalLinkTypeUnsupportedProxy {
  _: 'internalLinkTypeUnsupportedProxy'
}

/**
 * The link is a link to a user by its phone number. Call searchUserByPhoneNumber with
 * the given phone number to process the link
 */
export interface InternalLinkTypeUserPhoneNumber {
  _: 'internalLinkTypeUserPhoneNumber'
  /** Phone number of the user */
  phoneNumber: string
}

/**
 * The link is a link to a video chat. Call searchPublicChat with the given chat username,
 * and then joinGroupCall with the given invite hash to process the link
 */
export interface InternalLinkTypeVideoChat {
  _: 'internalLinkTypeVideoChat'
  /** Username of the chat with the video chat */
  chatUsername: string
  /**
   * If non-empty, invite hash to be used to join the video chat without being muted by
   * administrators
   */
  inviteHash: string
  /**
   * True, if the video chat is expected to be a live stream in a channel or a broadcast
   * group
   */
  isLiveStream: boolean
}
