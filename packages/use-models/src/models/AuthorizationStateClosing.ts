/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export class AuthorizationStateClosingBaseModel {
  public _: 'authorizationStateClosing'
}
