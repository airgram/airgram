import { RichTextUnion } from './RichText'

export interface TextBold {
  _: 'textBold'
  text: RichTextUnion
}

export interface TextConcat {
  _: 'textConcat'
  texts: RichTextUnion[]
}

export interface TextEmail {
  _: 'textEmail'
  text: RichTextUnion
  email: string
}

export interface TextEmpty {
  _: 'textEmpty'
}

export interface TextFixed {
  _: 'textFixed'
  text: RichTextUnion
}

export interface TextItalic {
  _: 'textItalic'
  text: RichTextUnion
}

export interface TextPlain {
  _: 'textPlain'
  text: string
}

export interface TextStrike {
  _: 'textStrike'
  text: RichTextUnion
}

export interface TextUnderline {
  _: 'textUnderline'
  text: RichTextUnion
}

export interface TextUrl {
  _: 'textUrl'
  text: RichTextUnion
  url: string
  webpage_id: number
}

export type RichTextUnion = TextBold
  | TextConcat
  | TextEmail
  | TextEmpty
  | TextFixed
  | TextItalic
  | TextPlain
  | TextStrike
  | TextUnderline
  | TextUrl
