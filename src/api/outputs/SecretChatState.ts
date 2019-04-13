/** Describes the current secret chat state */
export type SecretChatStateUnion = SecretChatStatePending
  | SecretChatStateReady
  | SecretChatStateClosed

/** The secret chat is not yet created; waiting for the other user to get online */
export interface SecretChatStatePending {
  _: 'secretChatStatePending'
}

/** The secret chat is ready to use */
export interface SecretChatStateReady {
  _: 'secretChatStateReady'
}

/** The secret chat is closed */
export interface SecretChatStateClosed {
  _: 'secretChatStateClosed'
}
