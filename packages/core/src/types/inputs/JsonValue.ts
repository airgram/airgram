import { JsonObjectMemberInput } from './index'

/** Represents a JSON value */
export type JsonValueInputUnion = JsonValueNullInput
  | JsonValueBooleanInput
  | JsonValueNumberInput
  | JsonValueStringInput
  | JsonValueArrayInput
  | JsonValueObjectInput

/** Represents a null JSON value */
export interface JsonValueNullInput {
  _: 'jsonValueNull'
}

/** Represents a boolean JSON value */
export interface JsonValueBooleanInput {
  _: 'jsonValueBoolean'
  /** The value */
  value?: boolean
}

/** Represents a numeric JSON value */
export interface JsonValueNumberInput {
  _: 'jsonValueNumber'
  /** The value */
  value?: number
}

/** Represents a string JSON value */
export interface JsonValueStringInput {
  _: 'jsonValueString'
  /** The value */
  value?: string
}

/** Represents a JSON array */
export interface JsonValueArrayInput {
  _: 'jsonValueArray'
  /** The list of array elements */
  values?: JsonValueInputUnion[]
}

/** Represents a JSON object */
export interface JsonValueObjectInput {
  _: 'jsonValueObject'
  /** The list of object members */
  members?: JsonObjectMemberInput[]
}
