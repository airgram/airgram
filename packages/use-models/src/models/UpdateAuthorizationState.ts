import { AuthorizationStateUnion } from '@airgram/core'

/** The user authorization state has changed */
export class UpdateAuthorizationStateBaseModel {
  public _: 'updateAuthorizationState'

  /** New authorization state */
  public authorizationState: AuthorizationStateUnion
}
