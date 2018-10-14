
export interface HelpAppUpdate {
  _: 'help.appUpdate'
  id: number
  critical: boolean
  url: string
  text: string
}

export interface HelpNoAppUpdate {
  _: 'help.noAppUpdate'
}

export type HelpAppUpdateUnion = HelpAppUpdate
  | HelpNoAppUpdate
