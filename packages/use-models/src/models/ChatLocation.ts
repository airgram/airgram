import { Location } from '@airgram/core'

/** Represents a location to which a chat is connected */
export class ChatLocationBaseModel {
  public _: 'chatLocation'

  /** The location */
  public location: Location

  /** Location address; 1-64 characters, as defined by the chat owner */
  public address: string
}
