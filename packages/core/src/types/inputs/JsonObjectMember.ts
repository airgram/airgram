import { JsonValueInputUnion } from './index'

export type JsonObjectMemberInputUnion = JsonObjectMemberInput

/** Represents one member of a JSON object */
export interface JsonObjectMemberInput {
  _: 'jsonObjectMember'
  /** Member's key */
  key?: string
  /** Member's value */
  value?: JsonValueInputUnion
}
