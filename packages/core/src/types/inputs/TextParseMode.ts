/** Describes the way the text should be parsed for TextEntities */
export type TextParseModeInputUnion = TextParseModeMarkdownInput
  | TextParseModeHtmlInput

/** The text should be parsed in markdown-style */
export interface TextParseModeMarkdownInput {
  _: 'textParseModeMarkdown'
  /**
   * Version of the parser: 0 or 1 - Bot API Markdown parse mode, 2 - Bot API MarkdownV2
   * parse mode
   */
  version?: number
}

/** The text should be parsed in HTML-style */
export interface TextParseModeHtmlInput {
  _: 'textParseModeHTML'
}
