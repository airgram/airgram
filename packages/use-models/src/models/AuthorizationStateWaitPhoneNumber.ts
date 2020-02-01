/**
 * TDLib needs the user's phone number to authorize. Call `setAuthenticationPhoneNumber`
 * to provide the phone number, or use `requestQrCodeAuthentication`, or `checkAuthenticationBotToken`
 * for other authentication options
 */
export class AuthorizationStateWaitPhoneNumberBaseModel {
  public _: 'authorizationStateWaitPhoneNumber'
}
