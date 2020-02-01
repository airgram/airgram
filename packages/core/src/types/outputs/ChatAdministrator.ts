export type ChatAdministratorUnion = ChatAdministrator

/** Contains information about a chat administrator */
export interface ChatAdministrator {
  _: 'chatAdministrator'
  /** User identifier of the administrator */
  userId: number
  /** Custom title of the administrator */
  customTitle: string
  /** True, if the user is the owner of the chat */
  isOwner: boolean
}
