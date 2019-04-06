import { ag } from '../interfaces/index'

export default class Config implements ag.Config {
  public readonly app: ag.TelegramAppConfig

  public deviceModel: string = 'Unknown UserAgent'

  public systemVersion: string = 'Unknown Platform'

  public langCode: string = 'en'

  public layer: number = 71

  public ssl: boolean = true

  public test: boolean = false

  public testDc = [
    { id: 1, host: '149.154.175.10', port: 80 },
    { id: 2, host: '149.154.167.40', port: 80 },
    { id: 3, host: '149.154.175.117', port: 80 }
  ]

  public productionDc = [
    { id: 1, host: '149.154.175.50', port: 80 },
    { id: 2, host: '149.154.167.51', port: 80 },
    { id: 3, host: '149.154.175.100', port: 80 },
    { id: 4, host: '149.154.167.91', port: 80 },
    { id: 5, host: '149.154.171.5', port: 80 }
  ]

  public sslSubdomains = ['pluto', 'venus', 'aurora', 'vesta', 'flora']

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

  /**
   * @deprecated Use properties of the `Config` instance instead
   */
  public get modes (): ag.TelegramModesConfig {
    return {
      ssl: this.ssl,
      test: this.test
    }
  }

  /**
   * @deprecated Use properties of the `Config` instance instead
   */
  public set modes ({ ssl, test }: ag.TelegramModesConfig) {
    this.ssl = ssl === undefined ? true : ssl
    this.test = test === undefined ? false : test
  }
}
