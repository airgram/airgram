import { ChatNearby } from '@airgram/core'

/**
 * The list of users nearby has changed. The update is guaranteed to be sent only 60
 * seconds after a successful searchChatsNearby request
 */
export class UpdateUsersNearbyBaseModel {
  public _: 'updateUsersNearby'

  /** The new list of users nearby */
  public usersNearby: ChatNearby[]
}
