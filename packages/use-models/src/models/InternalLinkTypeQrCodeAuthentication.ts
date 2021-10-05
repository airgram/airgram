/**
 * The link can be used to login the current user on another device, but it must be
 * scanned from QR-code using in-app camera. An alert similar to "This code can be used
 * to allow someone to log in to your Telegram account. To confirm Telegram login, please
 * go to Settings > Devices > Scan QR and scan the code" needs to be shown
 */
export class InternalLinkTypeQrCodeAuthenticationBaseModel {
  public _: 'internalLinkTypeQrCodeAuthentication'
}
