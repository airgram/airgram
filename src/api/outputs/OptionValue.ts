/** Represents the value of an option */
export type OptionValueUnion = OptionValueBoolean
  | OptionValueEmpty
  | OptionValueInteger
  | OptionValueString

/** Boolean option */
export interface OptionValueBoolean {
  _: 'optionValueBoolean'
  /** The value of the option */
  value: boolean
}

/** An unknown option or an option which has a default value */
export interface OptionValueEmpty {
  _: 'optionValueEmpty'
}

/** An integer option */
export interface OptionValueInteger {
  _: 'optionValueInteger'
  /** The value of the option */
  value: number
}

/** A string option */
export interface OptionValueString {
  _: 'optionValueString'
  /** The value of the option */
  value: string
}
