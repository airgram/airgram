/** The anyone_can_invite setting of a supergroup chat was toggled */
export class ChatEventInvitesToggledBaseModel {
  public _: 'chatEventInvitesToggled'
  /** New value of anyone_can_invite */
  public anyoneCanInvite: boolean
}
