/** Represents the scope to which bot commands are relevant */
export type BotCommandScopeInputUnion = BotCommandScopeDefaultInput
  | BotCommandScopeAllPrivateChatsInput
  | BotCommandScopeAllGroupChatsInput
  | BotCommandScopeAllChatAdministratorsInput
  | BotCommandScopeChatInput
  | BotCommandScopeChatAdministratorsInput
  | BotCommandScopeChatMemberInput

/** A scope covering all users */
export interface BotCommandScopeDefaultInput {
  _: 'botCommandScopeDefault'
}

/** A scope covering all private chats */
export interface BotCommandScopeAllPrivateChatsInput {
  _: 'botCommandScopeAllPrivateChats'
}

/** A scope covering all group and supergroup chats */
export interface BotCommandScopeAllGroupChatsInput {
  _: 'botCommandScopeAllGroupChats'
}

/** A scope covering all group and supergroup chat administrators */
export interface BotCommandScopeAllChatAdministratorsInput {
  _: 'botCommandScopeAllChatAdministrators'
}

/** A scope covering all members of a chat */
export interface BotCommandScopeChatInput {
  _: 'botCommandScopeChat'
  /** Chat identifier */
  chatId?: number
}

/** A scope covering all administrators of a chat */
export interface BotCommandScopeChatAdministratorsInput {
  _: 'botCommandScopeChatAdministrators'
  /** Chat identifier */
  chatId?: number
}

/** A scope covering a member of a chat */
export interface BotCommandScopeChatMemberInput {
  _: 'botCommandScopeChatMember'
  /** Chat identifier */
  chatId?: number
  /** User identifier */
  userId?: number
}
