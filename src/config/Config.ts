import { ag } from '../interfaces/index'
import * as dcOptions from './dc'

export default class Config implements ag.Config {
  public readonly app: ag.TelegramAppConfig
  public layer: number = 71
  public modes: ag.TelegramModesConfig = {
    test: false
  }

  constructor (id: number, hash: string, version?: string) {
    this.app = { hash, id, version: version || '0.0.0' }
  }

  get dcOptions (): any[] {
    return this.modes.test ? dcOptions.test : dcOptions.production
  }
}
