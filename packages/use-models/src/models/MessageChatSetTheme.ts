/** A theme in the chat has been changed */
export class MessageChatSetThemeBaseModel {
  public _: 'messageChatSetTheme'

  /**
   * If non-empty, name of a new theme, set for the chat. Otherwise chat theme was reset
   * to the default one
   */
  public themeName: string
}
