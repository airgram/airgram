import { ChatLocation } from '@airgram/core'

/** The supergroup location was changed */
export class ChatEventLocationChangedBaseModel {
  public _: 'chatEventLocationChanged'

  /** Previous location; may be null */
  public oldLocation?: ChatLocation

  /** New location; may be null */
  public newLocation?: ChatLocation
}
