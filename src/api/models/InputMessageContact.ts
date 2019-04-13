import { Contact } from '../outputs'

/** A message containing a user contact */
export class InputMessageContactBaseModel {
  public _: 'inputMessageContact'
  /** Contact to send */
  public contact: Contact
}
