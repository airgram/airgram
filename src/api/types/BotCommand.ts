
export interface BotCommand {
  _: 'botCommand'
  command: string
  description: string
}

export type BotCommandUnion = BotCommand
