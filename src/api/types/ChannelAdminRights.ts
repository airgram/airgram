
export interface ChannelAdminRights {
  _: 'channelAdminRights'
  flags: number
  change_info?: true
  post_messages?: true
  edit_messages?: true
  delete_messages?: true
  ban_users?: true
  invite_users?: true
  invite_link?: true
  pin_messages?: true
  add_admins?: true
}

export type ChannelAdminRightsUnion = ChannelAdminRights
