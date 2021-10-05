/** Contains information about a file with messages exported from another app */
export type MessageFileTypeUnion = MessageFileTypePrivate
  | MessageFileTypeGroup
  | MessageFileTypeUnknown

/** The messages was exported from a private chat */
export interface MessageFileTypePrivate {
  _: 'messageFileTypePrivate'
  /** Name of the other party; may be empty if unrecognized */
  name: string
}

/** The messages was exported from a group chat */
export interface MessageFileTypeGroup {
  _: 'messageFileTypeGroup'
  /** Title of the group chat; may be empty if unrecognized */
  title: string
}

/** The messages was exported from a chat of unknown type */
export interface MessageFileTypeUnknown {
  _: 'messageFileTypeUnknown'
}
