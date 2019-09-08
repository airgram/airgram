import { AuthenticationCodeInfo } from '@airgram/core'

/** TDLib needs the user's authentication code to authorize */
export class AuthorizationStateWaitCodeBaseModel {
  public _: 'authorizationStateWaitCode'

  /** Information about the authorization code that was sent */
  public codeInfo: AuthenticationCodeInfo
}
