import chalk from 'chalk'
import * as createLogger from 'debug'
import { injectable } from 'inversify'
import Logger, { LogLevelConfig } from '../../src/base/Logger'
import { ag } from '../../src/interfaces/index'

interface LogLevelTheme {
  highlight: string
  primary: string
  secondary: string
}

export const THEME: { [key: string]: LogLevelTheme } = {
  debug: {
    highlight: 'yellow',
    primary: 'gray',
    secondary: 'magenta'
  },
  error: {
    highlight: 'yellow',
    primary: 'redBright',
    secondary: 'magenta'
  },
  info: {
    highlight: 'yellow',
    primary: 'green',
    secondary: 'magenta'
  },
  verbose: {
    highlight: 'yellow',
    primary: 'cyan',
    secondary: 'magenta'
  },
  warn: {
    highlight: 'yellow',
    primary: 'red',
    secondary: 'magenta'
  }
}

function getCurrentTime (): string {
  const date = new Date()
  let hh: (number | string) = date.getHours()
  if (hh < 10) hh = '0' + hh

  let mm: (number | string) = date.getMinutes()
  if (mm < 10) mm = '0' + mm

  let ss: (number | string) = date.getSeconds()
  if (ss < 10) ss = '0' + ss

  let ms: (number | string) = date.getMilliseconds()
  if (ms < 10) ms = '0' + ms
  if (ms < 100) ms = '0' + ms

  return `${hh}:${mm}:${ss}.${ms}`
}

const writeLog = createLogger('airgram')

@injectable()
export default class DevLogger extends Logger implements ag.Logger {
  public getCurrentTime: () => string = getCurrentTime

  protected formatMessage (message, { name }: LogLevelConfig) {
    const { primary, secondary, highlight } = THEME[name]
    const levelPart = `${chalk.inverse[primary](name)}${' '.repeat(7 - name.length)} `
    const timePart = `${chalk[primary](this.getCurrentTime())}: `
    const pathPart = this.namespace.map((v) => `[${chalk[primary](v)}] `)

    const formattedMessage = String(message)
      .replace(/^([\w\s[\]]\s*)?\[([\w]+)]/g, (all, prev, match) => {
        return `${prev || ''}[${chalk[primary](match)}]`
      })
      .replace(/([.\w]+)\(\)/g, (all, match) => {
        return `${chalk[secondary](match)}()`
      })
      .replace(/\s"([.:\w\d]+)"/, (all, match) => {
        return ` "${chalk[highlight](match)}" `
      })

    return `${levelPart}${timePart}${pathPart.join('')}${formattedMessage}`
  }

  protected log (level: LogLevelConfig, message: any) {
    writeLog(this.formatMessage(message, level))
  }
}
