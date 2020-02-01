import { Location } from './index'

export type ChatLocationUnion = ChatLocation

/** Represents a location to which a chat is connected */
export interface ChatLocation {
  _: 'chatLocation'
  /** The location */
  location: Location
  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string
}
