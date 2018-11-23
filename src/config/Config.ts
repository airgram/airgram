import { ag } from '../interfaces/index'
import * as dcOptions from './dc'

export default class Config implements ag.Config {
  public readonly app: ag.TelegramAppConfig

  public deviceModel: string = 'Unknown UserAgent'

  public systemVersion: string = 'Unknown Platform'

  public langCode: string = 'en'

  public layer: number = 71

  public modes: ag.TelegramModesConfig = {
    test: false
  }

  constructor (id: number | string, hash: string, version?: string, token?: string) {
    if (!id) {
      throw new Error('[Config] please provide application id')
    }
    if (!hash) {
      throw new Error('[Config] please provide application hash')
    }
    this.app = { hash, id: Number(id), version: version || '0.1.0' }
    if (token) {
      this.app.token = token
    }
  }

  get dcOptions (): any[] {
    return this.modes.test ? dcOptions.test : dcOptions.production
  }
}
