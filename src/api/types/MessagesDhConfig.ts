
export interface MessagesDhConfig {
  _: 'messages.dhConfig'
  g: number
  p: number[]
  version: number
  random: number[]
}

export interface MessagesDhConfigNotModified {
  _: 'messages.dhConfigNotModified'
  random: number[]
}

export type MessagesDhConfigUnion = MessagesDhConfig
  | MessagesDhConfigNotModified
