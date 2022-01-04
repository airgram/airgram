/**
 * A button with a user reference to be handled in the same way as textEntityTypeMentionName
 * entities
 */
export class InlineKeyboardButtonTypeUserBaseModel {
  public _: 'inlineKeyboardButtonTypeUser'

  /** User identifier */
  public userId: number
}
