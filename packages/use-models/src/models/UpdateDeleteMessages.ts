/** Some messages were deleted */
export class UpdateDeleteMessagesBaseModel {
  public _: 'updateDeleteMessages'

  /** Chat identifier */
  public chatId: number

  /** Identifiers of the deleted messages */
  public messageIds: number[]

  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * inaccessible)
   */
  public isPermanent: boolean

  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  public fromCache: boolean
}
