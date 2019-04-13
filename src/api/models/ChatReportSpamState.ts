/** Contains information about the availability of the "Report spam" action for a chat */
export class ChatReportSpamStateBaseModel {
  public _: 'chatReportSpamState'
  /** True, if a prompt with the "Report spam" action should be shown to the user */
  public canReportSpam: boolean
}
