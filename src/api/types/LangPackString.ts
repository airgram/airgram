
export interface LangPackString {
  _: 'langPackString'
  key: string
  value: string
}

export interface LangPackStringDeleted {
  _: 'langPackStringDeleted'
  key: string
}

export interface LangPackStringPluralized {
  _: 'langPackStringPluralized'
  flags: number
  key: string
  zero_value?: string
  one_value?: string
  two_value?: string
  few_value?: string
  many_value?: string
  other_value: string
}

export type LangPackStringUnion = LangPackString
  | LangPackStringDeleted
  | LangPackStringPluralized
