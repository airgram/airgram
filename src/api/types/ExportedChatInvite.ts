
export interface ChatInviteEmpty {
  _: 'chatInviteEmpty'
}

export interface ChatInviteExported {
  _: 'chatInviteExported'
  link: string
}

export type ExportedChatInviteUnion = ChatInviteEmpty
  | ChatInviteExported
