import { MessageSenderUnion } from '@airgram/core'

/** A user in the chat came within proximity alert range */
export class MessageProximityAlertTriggeredBaseModel {
  public _: 'messageProximityAlertTriggered'

  /** The identifier of a user or chat that triggered the proximity alert */
  public travelerId: MessageSenderUnion

  /** The identifier of a user or chat that subscribed for the proximity alert */
  public watcherId: MessageSenderUnion

  /** The distance between the users */
  public distance: number
}
