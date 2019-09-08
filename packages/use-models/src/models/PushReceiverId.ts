/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export class PushReceiverIdBaseModel {
  public _: 'pushReceiverId'

  /** The globally unique identifier of push notification subscription */
  public id: string
}
