/** Describes a reason why an external chat is shown in a chat list */
export type ChatSourceUnion = ChatSourceMtprotoProxy
  | ChatSourcePublicServiceAnnouncement

/** The chat is sponsored by the user's MTProxy server */
export interface ChatSourceMtprotoProxy {
  _: 'chatSourceMtprotoProxy'
}

/** The chat contains a public service announcement */
export interface ChatSourcePublicServiceAnnouncement {
  _: 'chatSourcePublicServiceAnnouncement'
  /** The type of the announcement */
  type: string
  /** The text of the announcement */
  text: string
}
