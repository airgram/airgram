/** The chat can be reported as spam using the method reportChat with the reason chatReportReasonSpam */
export class ChatActionBarReportSpamBaseModel {
  public _: 'chatActionBarReportSpam'

  /**
   * If true, the chat was automatically archived and can be moved back to the main chat
   * list using addChatToList simultaneously with setting chat notification settings to
   * default using setChatNotificationSettings
   */
  public canUnarchive: boolean
}
