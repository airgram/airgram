import { FormattedText } from '@airgram/core'

/**
 * The link contains a message draft text. A share screen needs to be shown to the user,
 * then the chosen chat must be opened and the text is added to the input field
 */
export class InternalLinkTypeMessageDraftBaseModel {
  public _: 'internalLinkTypeMessageDraft'

  /** Message draft text */
  public text: FormattedText

  /**
   * True, if the first line of the text contains a link. If true, the input field needs
   * to be focused and the text after the link must be selected
   */
  public containsLink: boolean
}
