/** A chat theme was edited */
export class PushMessageContentChatSetThemeBaseModel {
  public _: 'pushMessageContentChatSetTheme'

  /**
   * If non-empty, name of a new theme, set for the chat. Otherwise chat theme was reset
   * to the default one
   */
  public themeName: string
}
