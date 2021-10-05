/**
 * The link contains an authentication code. Call checkAuthenticationCode with the code
 * if the current authorization state is authorizationStateWaitCode
 */
export class InternalLinkTypeAuthenticationCodeBaseModel {
  public _: 'internalLinkTypeAuthenticationCode'

  /** The authentication code */
  public code: string
}
