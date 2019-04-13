/** Describes the way the text should be parsed for TextEntities */
export type TextParseModeUnion = TextParseModeMarkdown | TextParseModeHtml

/** The text should be parsed in markdown-style */
export interface TextParseModeMarkdown {
  _: 'textParseModeMarkdown'
}

/** The text should be parsed in HTML-style */
export interface TextParseModeHtml {
  _: 'textParseModeHTML'
}
