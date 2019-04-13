import { PersonalDocument } from '../outputs'

/** A Telegram Passport element containing the user's bank statement */
export class PassportElementBankStatementBaseModel {
  public _: 'passportElementBankStatement'
  /** Bank statement */
  public bankStatement: PersonalDocument
}
