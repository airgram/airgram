import { Contact } from '@airgram/core'

/** A message with a user contact */
export class MessageContactBaseModel {
  public _: 'messageContact'

  /** The contact description */
  public contact: Contact
}
