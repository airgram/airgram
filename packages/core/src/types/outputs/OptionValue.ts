/** Represents the value of an option */
export type OptionValueUnion = OptionValueBoolean
  | OptionValueEmpty
  | OptionValueInteger
  | OptionValueString

/** Represents a boolean option */
export interface OptionValueBoolean {
  _: 'optionValueBoolean'
  /** The value of the option */
  value: boolean
}

/** Represents an unknown option or an option which has a default value */
export interface OptionValueEmpty {
  _: 'optionValueEmpty'
}

/** Represents an integer option */
export interface OptionValueInteger {
  _: 'optionValueInteger'
  /** The value of the option */
  value: number
}

/** Represents a string option */
export interface OptionValueString {
  _: 'optionValueString'
  /** The value of the option */
  value: string
}
