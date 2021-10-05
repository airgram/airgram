/** Describes the way the text needs to be parsed for TextEntities */
export type TextParseModeInputUnion = TextParseModeMarkdownInput
  | TextParseModeHtmlInput

/** The text uses Markdown-style formatting */
export interface TextParseModeMarkdownInput {
  _: 'textParseModeMarkdown'
  /**
   * Version of the parser: 0 or 1 - Telegram Bot API "Markdown" parse mode, 2 - Telegram
   * Bot API "MarkdownV2" parse mode
   */
  version?: number
}

/** The text uses HTML-style formatting. The same as Telegram Bot API "HTML" parse mode */
export interface TextParseModeHtmlInput {
  _: 'textParseModeHTML'
}
