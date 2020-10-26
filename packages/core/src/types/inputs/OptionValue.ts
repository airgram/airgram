/** Represents the value of an option */
export type OptionValueInputUnion = OptionValueBooleanInput
  | OptionValueEmptyInput
  | OptionValueIntegerInput
  | OptionValueStringInput

/** Represents a boolean option */
export interface OptionValueBooleanInput {
  _: 'optionValueBoolean'
  /** The value of the option */
  value?: boolean
}

/** Represents an unknown option or an option which has a default value */
export interface OptionValueEmptyInput {
  _: 'optionValueEmpty'
}

/** Represents an integer option */
export interface OptionValueIntegerInput {
  _: 'optionValueInteger'
  /** The value of the option */
  value?: string
}

/** Represents a string option */
export interface OptionValueStringInput {
  _: 'optionValueString'
  /** The value of the option */
  value?: string
}
