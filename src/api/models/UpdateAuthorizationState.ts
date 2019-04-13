import { AuthorizationStateUnion } from '../outputs'

/** The user authorization state has changed */
export class UpdateAuthorizationStateBaseModel {
  public _: 'updateAuthorizationState'
  /** New authorization state */
  public authorizationState: AuthorizationStateUnion
}
