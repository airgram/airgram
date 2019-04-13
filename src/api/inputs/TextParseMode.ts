/** Describes the way the text should be parsed for TextEntities */
export type TextParseModeInputUnion = TextParseModeMarkdownInput
  | TextParseModeHtmlInput

/** The text should be parsed in markdown-style */
export interface TextParseModeMarkdownInput {
  _: 'textParseModeMarkdown'
}

/** The text should be parsed in HTML-style */
export interface TextParseModeHtmlInput {
  _: 'textParseModeHTML'
}
