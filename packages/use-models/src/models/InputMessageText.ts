import { FormattedText } from '@airgram/core'

/** A text message */
export class InputMessageTextBaseModel {
  public _: 'inputMessageText'

  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Underline, Strikethrough, Spoiler, Code, Pre, PreCode, TextUrl and
   * MentionName entities are allowed to be specified manually
   */
  public text: FormattedText

  /** True, if rich web page previews for URLs in the message text must be disabled */
  public disableWebPagePreview: boolean

  /** True, if a chat message draft must be deleted */
  public clearDraft: boolean
}
