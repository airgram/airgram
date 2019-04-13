import { Message } from '../outputs'

/** A message was pinned */
export class ChatEventMessagePinnedBaseModel {
  public _: 'chatEventMessagePinned'
  /** Pinned message */
  public message: Message
}
