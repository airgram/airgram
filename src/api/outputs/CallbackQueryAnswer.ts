export type CallbackQueryAnswerUnion = CallbackQueryAnswer

/** Contains a bot's answer to a callback query */
export interface CallbackQueryAnswer {
  _: 'callbackQueryAnswer'
  /** Text of the answer */
  text: string
  /** True, if an alert should be shown to the user instead of a toast notification */
  showAlert: boolean
  /** URL to be opened */
  url: string
}
