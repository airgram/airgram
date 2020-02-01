/**
 * A button that allows the user to create and send a poll when pressed; available only
 * in private chats
 */
export class KeyboardButtonTypeRequestPollBaseModel {
  public _: 'keyboardButtonTypeRequestPoll'

  /** If true, only regular polls must be allowed to create */
  public forceRegular: boolean

  /** If true, only polls in quiz mode must be allowed to create */
  public forceQuiz: boolean
}
