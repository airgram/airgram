/** Describes a type of public chats */
export type PublicChatTypeInputUnion = PublicChatTypeHasUsernameInput
  | PublicChatTypeIsLocationBasedInput

/** The chat is public, because it has username */
export interface PublicChatTypeHasUsernameInput {
  _: 'publicChatTypeHasUsername'
}

/** The chat is public, because it is a location-based supergroup */
export interface PublicChatTypeIsLocationBasedInput {
  _: 'publicChatTypeIsLocationBased'
}
