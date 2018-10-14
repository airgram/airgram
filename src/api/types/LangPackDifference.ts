import { LangPackStringUnion } from './LangPackString'

export interface LangPackDifference {
  _: 'langPackDifference'
  lang_code: string
  from_version: number
  version: number
  strings: LangPackStringUnion[]
}

export type LangPackDifferenceUnion = LangPackDifference
