
export interface ChannelBannedRights {
  _: 'channelBannedRights'
  flags: number
  view_messages?: true
  send_messages?: true
  send_media?: true
  send_stickers?: true
  send_gifs?: true
  send_games?: true
  send_inline?: true
  embed_links?: true
  until_date: number
}

export type ChannelBannedRightsUnion = ChannelBannedRights
