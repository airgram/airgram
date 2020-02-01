/** The slow_mode_delay setting of a supergroup was changed */
export class ChatEventSlowModeDelayChangedBaseModel {
  public _: 'chatEventSlowModeDelayChanged'

  /** Previous value of slow_mode_delay */
  public oldSlowModeDelay: number

  /** New value of slow_mode_delay */
  public newSlowModeDelay: number
}
