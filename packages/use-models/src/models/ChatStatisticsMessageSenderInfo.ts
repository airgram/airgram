/** Contains statistics about messages sent by a user */
export class ChatStatisticsMessageSenderInfoBaseModel {
  public _: 'chatStatisticsMessageSenderInfo'

  /** User identifier */
  public userId: number

  /** Number of sent messages */
  public sentMessageCount: number

  /** Average number of characters in sent messages */
  public averageCharacterCount: number
}
