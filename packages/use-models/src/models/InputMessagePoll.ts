/** A message with a poll. Polls can't be sent to private or secret chats */
export class InputMessagePollBaseModel {
  public _: 'inputMessagePoll'

  /** Poll question, 1-255 characters */
  public question: string

  /** List of poll answer options, 2-10 strings 1-100 characters each */
  public options: string[]
}
