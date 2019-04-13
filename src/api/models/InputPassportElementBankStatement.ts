import { InputPersonalDocument } from '../outputs'

/** A Telegram Passport element to be saved containing the user's bank statement */
export class InputPassportElementBankStatementBaseModel {
  public _: 'inputPassportElementBankStatement'
  /** The bank statement to be saved */
  public bankStatement: InputPersonalDocument
}
