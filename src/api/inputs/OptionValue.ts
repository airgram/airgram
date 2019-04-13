/** Represents the value of an option */
export type OptionValueInputUnion = OptionValueBooleanInput
  | OptionValueEmptyInput
  | OptionValueIntegerInput
  | OptionValueStringInput

/** Boolean option */
export interface OptionValueBooleanInput {
  _: 'optionValueBoolean'
  /** The value of the option */
  value?: boolean
}

/** An unknown option or an option which has a default value */
export interface OptionValueEmptyInput {
  _: 'optionValueEmpty'
}

/** An integer option */
export interface OptionValueIntegerInput {
  _: 'optionValueInteger'
  /** The value of the option */
  value?: number
}

/** A string option */
export interface OptionValueStringInput {
  _: 'optionValueString'
  /** The value of the option */
  value?: string
}
