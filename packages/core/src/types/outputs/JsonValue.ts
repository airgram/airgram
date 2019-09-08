import { JsonObjectMember } from './index'

/** Represents a JSON value */
export type JsonValueUnion = JsonValueNull
  | JsonValueBoolean
  | JsonValueNumber
  | JsonValueString
  | JsonValueArray
  | JsonValueObject

/** Represents a null JSON value */
export interface JsonValueNull {
  _: 'jsonValueNull'
}

/** Represents a boolean JSON value */
export interface JsonValueBoolean {
  _: 'jsonValueBoolean'
  /** The value */
  value: boolean
}

/** Represents a numeric JSON value */
export interface JsonValueNumber {
  _: 'jsonValueNumber'
  /** The value */
  value: number
}

/** Represents a string JSON value */
export interface JsonValueString {
  _: 'jsonValueString'
  /** The value */
  value: string
}

/** Represents a JSON array */
export interface JsonValueArray {
  _: 'jsonValueArray'
  /** The list of array elements */
  values: JsonValueUnion[]
}

/** Represents a JSON object */
export interface JsonValueObject {
  _: 'jsonValueObject'
  /** The list of object members */
  members: JsonObjectMember[]
}
