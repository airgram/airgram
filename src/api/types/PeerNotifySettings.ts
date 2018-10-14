
export interface PeerNotifySettings {
  _: 'peerNotifySettings'
  flags: number
  show_previews?: true
  silent?: true
  mute_until: number
  sound: string
}

export interface PeerNotifySettingsEmpty {
  _: 'peerNotifySettingsEmpty'
}

export type PeerNotifySettingsUnion = PeerNotifySettings
  | PeerNotifySettingsEmpty
