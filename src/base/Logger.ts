import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

export type LogLevelName = 'debug' | 'error' | 'warn' | 'info' | 'verbose' | string

export interface LogLevelConfig {
  level: number
  name: string
}

export interface LogLevels {
  [key: string]: LogLevelConfig
}

export const LEVELS: LogLevels = {
  debug: {
    level: 0,
    name: 'debug'
  },
  error: {
    level: 4,
    name: 'error'
  },
  info: {
    level: 2,
    name: 'info'
  },
  verbose: {
    level: 1,
    name: 'verbose'
  },
  warn: {
    level: 3,
    name: 'warn'
  }
}

@provide(TYPES.Logger)
export default class Logger implements ag.Logger {
  public static unwrap (message: any) {
    return typeof message === 'function' ? message() : message
  }

  public level: LogLevelName = 'info'
  public namespace: string[] = [] as string[]

  get minLevel (): LogLevelConfig {
    const minLevel = LEVELS[this.level]
    if (!minLevel) {
      throw new Error(`[Logger] unexpected level "${this.level}"`)
    }
    return minLevel
  }

  public debug (...args: any[]) {
    this.handle('debug', ...args)
  }

  public error (...args: any[]) {
    this.handle('error', ...args)
  }

  public info (...args: any[]) {
    this.handle('info', ...args)
  }

  public verbose (...args: any[]) {
    this.handle('verbose', ...args)
  }

  public warn (...args: any[]) {
    this.handle('warn', ...args)
  }

  protected formatMessage (message, level: LogLevelConfig) {
    const namespace = this.namespace.length ? `[${this.namespace.join('][')}] ` : ''
    return `${namespace}${message}`
  }

  protected handle (level, ...messages) {
    if (this.minLevel && LEVELS[level] && this.minLevel.level <= LEVELS[level].level) {
      messages.forEach((message) => {
        this.log(LEVELS[level], Logger.unwrap(message))
      })
    }
  }

  protected log (level: LogLevelConfig, message: string) {
    console[level.name === 'error' ? level.name : 'info'](this.formatMessage(message, level))
  }
}
