import { JsonValueUnion } from './index'

export type JsonObjectMemberUnion = JsonObjectMember

/** Represents one member of a JSON object */
export interface JsonObjectMember {
  _: 'jsonObjectMember'
  /** Member's key */
  key: string
  /** Member's value */
  value: JsonValueUnion
}
