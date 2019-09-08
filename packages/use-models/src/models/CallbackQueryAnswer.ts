/** Contains a bot's answer to a callback query */
export class CallbackQueryAnswerBaseModel {
  public _: 'callbackQueryAnswer'

  /** Text of the answer */
  public text: string

  /** True, if an alert should be shown to the user instead of a toast notification */
  public showAlert: boolean

  /** URL to be opened */
  public url: string
}
