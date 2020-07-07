import { AirgramCore, Config } from '@airgram/core'
import { TdProvider, TdProviderConfig } from './components'

export interface AirgramConfig
  extends Omit<Config, 'provider'>, TdProviderConfig {}

export class Airgram extends AirgramCore<TdProvider> {
  public constructor (config: AirgramConfig) {
    const { command, ...restConfig } = config
    const baseConfig = {
      ...restConfig,
      provider: new TdProvider({ command })
    }
    super(baseConfig)
  }
}
