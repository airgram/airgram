/**
 * The user needs to confirm authorization on another logged in device by scanning a
 * QR code with the provided link
 */
export class AuthorizationStateWaitOtherDeviceConfirmationBaseModel {
  public _: 'authorizationStateWaitOtherDeviceConfirmation'

  /** A tg:// URL for the QR code. The link will be updated frequently */
  public link: string
}
