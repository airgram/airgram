import { FormattedText, WebPage } from '@airgram/core'

/** A text message */
export class MessageTextBaseModel {
  public _: 'messageText'

  /** Text of the message */
  public text: FormattedText

  /** A preview of the web page that's mentioned in the text; may be null */
  public webPage?: WebPage
}
