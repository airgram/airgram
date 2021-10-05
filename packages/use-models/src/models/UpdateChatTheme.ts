/** The chat theme was changed */
export class UpdateChatThemeBaseModel {
  public _: 'updateChatTheme'

  /** Chat identifier */
  public chatId: number

  /** The new name of the chat theme; may be empty if theme was reset to default */
  public themeName: string
}
