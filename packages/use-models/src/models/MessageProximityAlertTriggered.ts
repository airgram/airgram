import { MessageSenderUnion } from '@airgram/core'

/** A user in the chat came within proximity alert range */
export class MessageProximityAlertTriggeredBaseModel {
  public _: 'messageProximityAlertTriggered'

  /** The user or chat, which triggered the proximity alert */
  public traveler: MessageSenderUnion

  /** The user or chat, which subscribed for the proximity alert */
  public watcher: MessageSenderUnion

  /** The distance between the users */
  public distance: number
}
