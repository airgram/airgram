import { Contact } from '../outputs'

/** A message with a user contact */
export class MessageContactBaseModel {
  public _: 'messageContact'
  /** Message content */
  public contact: Contact
}
