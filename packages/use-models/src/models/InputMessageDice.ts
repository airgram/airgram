/** A dice message */
export class InputMessageDiceBaseModel {
  public _: 'inputMessageDice'

  /** Emoji on which the dice throw animation is based */
  public emoji: string

  /** True, if a chat message draft should be deleted */
  public clearDraft: boolean
}
