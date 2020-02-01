import { MessageSchedulingStateInputUnion } from './index'

export type SendMessageOptionsInputUnion = SendMessageOptionsInput

/** Options to be used when a message is send */
export interface SendMessageOptionsInput {
  _: 'sendMessageOptions'
  /**
   * Pass true to disable notification for the message. Must be false if the message is
   * sent to a secret chat
   */
  disableNotification?: boolean
  /** Pass true if the message is sent from the background */
  fromBackground?: boolean
  /**
   * Message scheduling state. Messages sent to a secret chat, live location messages
   * and self-destructing messages can't be scheduled
   */
  schedulingState?: MessageSchedulingStateInputUnion
}
