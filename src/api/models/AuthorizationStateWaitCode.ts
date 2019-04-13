import { AuthenticationCodeInfo, TermsOfService } from '../outputs'

/** TDLib needs the user's authentication code to finalize authorization */
export class AuthorizationStateWaitCodeBaseModel {
  public _: 'authorizationStateWaitCode'
  /** True, if the user is already registered */
  public isRegistered: boolean
  /**
   * Telegram terms of service, which should be accepted before user can continue registration;
   * may be null
   */
  public termsOfService?: TermsOfService
  /** Information about the authorization code that was sent */
  public codeInfo: AuthenticationCodeInfo
}
