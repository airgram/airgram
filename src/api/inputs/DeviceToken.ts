/**
 * Represents a data needed to subscribe for push notifications. To use specific push
 * notification service, you must specify the correct application platform and upload
 * valid server authentication data at https://my.telegram.org
 */
export type DeviceTokenInputUnion = DeviceTokenGoogleCloudMessagingInput
  | DeviceTokenApplePushInput
  | DeviceTokenApplePushVoIpInput
  | DeviceTokenWindowsPushInput
  | DeviceTokenMicrosoftPushInput
  | DeviceTokenMicrosoftPushVoIpInput
  | DeviceTokenWebPushInput
  | DeviceTokenSimplePushInput
  | DeviceTokenUbuntuPushInput
  | DeviceTokenBlackBerryPushInput
  | DeviceTokenTizenPushInput

/** A token for Google Cloud Messaging */
export interface DeviceTokenGoogleCloudMessagingInput {
  _: 'deviceTokenGoogleCloudMessaging'
  /** Device registration token; may be empty to de-register a device */
  token?: string
}

/** A token for Apple Push Notification service */
export interface DeviceTokenApplePushInput {
  _: 'deviceTokenApplePush'
  /** Device token; may be empty to de-register a device */
  deviceToken?: string
  /** True, if App Sandbox is enabled */
  isAppSandbox?: boolean
}

/** A token for Apple Push Notification service VoIP notifications */
export interface DeviceTokenApplePushVoIpInput {
  _: 'deviceTokenApplePushVoIP'
  /** Device token; may be empty to de-register a device */
  deviceToken?: string
  /** True, if App Sandbox is enabled */
  isAppSandbox?: boolean
}

/** A token for Windows Push Notification Services */
export interface DeviceTokenWindowsPushInput {
  _: 'deviceTokenWindowsPush'
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  accessToken?: string
}

/** A token for Microsoft Push Notification Service */
export interface DeviceTokenMicrosoftPushInput {
  _: 'deviceTokenMicrosoftPush'
  /** Push notification channel URI; may be empty to de-register a device */
  channelUri?: string
}

/** A token for Microsoft Push Notification Service VoIP channel */
export interface DeviceTokenMicrosoftPushVoIpInput {
  _: 'deviceTokenMicrosoftPushVoIP'
  /** Push notification channel URI; may be empty to de-register a device */
  channelUri?: string
}

/** A token for web Push API */
export interface DeviceTokenWebPushInput {
  _: 'deviceTokenWebPush'
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint?: string
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  p256DhBase64Url?: string
  /** Base64url-encoded authentication secret */
  authBase64Url?: string
}

/** A token for Simple Push API for Firefox OS */
export interface DeviceTokenSimplePushInput {
  _: 'deviceTokenSimplePush'
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint?: string
}

/** A token for Ubuntu Push Client service */
export interface DeviceTokenUbuntuPushInput {
  _: 'deviceTokenUbuntuPush'
  /** Token; may be empty to de-register a device */
  token?: string
}

/** A token for BlackBerry Push Service */
export interface DeviceTokenBlackBerryPushInput {
  _: 'deviceTokenBlackBerryPush'
  /** Token; may be empty to de-register a device */
  token?: string
}

/** A token for Tizen Push Service */
export interface DeviceTokenTizenPushInput {
  _: 'deviceTokenTizenPush'
  /** Push service registration identifier; may be empty to de-register a device */
  regId?: string
}
