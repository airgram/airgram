import { LocationInput } from './index'

export type ChatLocationInputUnion = ChatLocationInput

/** Represents a location to which a chat is connected */
export interface ChatLocationInput {
  _: 'chatLocation'
  /** The location */
  location?: LocationInput
  /** Location address; 1-64 characters, as defined by the chat owner */
  address?: string
}
