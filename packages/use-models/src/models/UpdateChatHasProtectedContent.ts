/** A chat content was allowed or restricted for saving */
export class UpdateChatHasProtectedContentBaseModel {
  public _: 'updateChatHasProtectedContent'

  /** Chat identifier */
  public chatId: number

  /** New value of has_protected_content */
  public hasProtectedContent: boolean
}
