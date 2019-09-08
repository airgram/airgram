/** The can_invite_users permission of a supergroup chat was toggled */
export class ChatEventInvitesToggledBaseModel {
  public _: 'chatEventInvitesToggled'

  /** New value of can_invite_users permission */
  public canInviteUsers: boolean
}
