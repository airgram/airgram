import { MessageSchedulingStateInputUnion } from './index'

export type MessageSendOptionsInputUnion = MessageSendOptionsInput

/** Options to be used when a message is sent */
export interface MessageSendOptionsInput {
  _: 'messageSendOptions'
  /** Pass true to disable notification for the message */
  disableNotification?: boolean
  /** Pass true if the message is sent from the background */
  fromBackground?: boolean
  /**
   * Pass true if the content of the message must be protected from forwarding and saving;
   * for bots only
   */
  protectContent?: boolean
  /**
   * Message scheduling state; pass null to send message immediately. Messages sent to
   * a secret chat, live location messages and self-destructing messages can't be scheduled
   */
  schedulingState?: MessageSchedulingStateInputUnion
}
