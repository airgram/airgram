/** Describes the type of notifications in a notification group */
export type NotificationGroupTypeUnion = NotificationGroupTypeMessages
  | NotificationGroupTypeMentions
  | NotificationGroupTypeSecretChat
  | NotificationGroupTypeCalls

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with ordinary unread messages
 */
export interface NotificationGroupTypeMessages {
  _: 'notificationGroupTypeMessages'
}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with unread mentions of the current user, replies to their messages, or a pinned
 * message
 */
export interface NotificationGroupTypeMentions {
  _: 'notificationGroupTypeMentions'
}

/** A group containing a notification of type notificationTypeNewSecretChat */
export interface NotificationGroupTypeSecretChat {
  _: 'notificationGroupTypeSecretChat'
}

/** A group containing notifications of type notificationTypeNewCall */
export interface NotificationGroupTypeCalls {
  _: 'notificationGroupTypeCalls'
}
