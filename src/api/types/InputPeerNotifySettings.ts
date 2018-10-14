
export interface InputPeerNotifySettings {
  _: 'inputPeerNotifySettings'
  flags: number
  show_previews?: true
  silent?: true
  mute_until: number
  sound: string
}

export type InputPeerNotifySettingsUnion = InputPeerNotifySettings
