/** A chat's is_sponsored field has changed */
export class UpdateChatIsSponsoredBaseModel {
  public _: 'updateChatIsSponsored'
  /** Chat identifier */
  public chatId: number
  /** New value of is_sponsored */
  public isSponsored: boolean
  /** New value of chat order */
  public order: number | string
}
