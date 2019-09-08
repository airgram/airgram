import { OptionValueUnion } from '@airgram/core'

/** An option changed its value */
export class UpdateOptionBaseModel {
  public _: 'updateOption'

  /** The option name */
  public name: string

  /** The new option value */
  public value: OptionValueUnion
}
