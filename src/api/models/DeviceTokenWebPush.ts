/** A token for web Push API */
export class DeviceTokenWebPushBaseModel {
  public _: 'deviceTokenWebPush'
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  public endpoint: string
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  public p256DhBase64Url: string
  /** Base64url-encoded authentication secret */
  public authBase64Url: string
}
