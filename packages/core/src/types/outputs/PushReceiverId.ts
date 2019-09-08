export type PushReceiverIdUnion = PushReceiverId

/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export interface PushReceiverId {
  _: 'pushReceiverId'
  /** The globally unique identifier of push notification subscription */
  id: string
}
