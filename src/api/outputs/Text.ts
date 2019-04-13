export type TextUnion = Text

/** Contains some text */
export interface Text {
  _: 'text'
  /** Text */
  text: string
}
